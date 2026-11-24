import json
import shutil
from datetime import date
from pathlib import Path

import pytest

import check_archive as ca
import find_more as fm
import site_check as sc
import sitedata as sd
from conftest import SITE


def entries():
    return sd.load_entries(SITE)


def by_title(title):
    return next(e for e in entries() if e.title == title)


# ---------- reading the site ----------

def test_lenient_parsing_handles_trailing_commas():
    g = sd.parse_globals('window.A = [{"x": 1,},]; window.B = {"y": [1, 2,],};')
    assert g == {"A": [{"x": 1}], "B": {"y": [1, 2]}}


def test_entries_cover_every_format():
    es = entries()
    kinds = {(e.file, e.kind) for e in es}
    assert ("stations.js", "media") in kinds and ("stations-more.js", "media") in kinds
    assert ("art/screen/tv-data.js", "media") in kinds and ("ads.js", "local") in kinds and ("ads.js", "item") in kinds
    start = by_title("Start")
    assert start.context == "STATIONS/noir" and start.identifier == "OTRR_Noir"
    assert start.filename == "Ep 01 Start.mp3" and start.length == 1800.5  # URL-decoded
    more = by_title("Noir Show: Fourth")
    assert more.context == "STATIONS_MORE/noir" and more.filename == "ep04.mp3" and more.length == 1400.25
    ad = by_title("Lucky Strike: Merry Christmas")
    assert ad.context == "TVCH/crime/ads"


def test_station_info():
    info = sd.station_info(SITE)
    assert info["swing"]["off"] and not info["noir"]["off"] and info["gramophone"]["music"]


@pytest.mark.parametrize("url, ident, fname", [
    ("https://archive.org/download/A_B/c%20d.mp3", "A_B", "c d.mp3"),
    ("https://archive.org/download/X/sub/dir/f.mp4", "X", "sub/dir/f.mp4"),
    ("https://archive.org/details/Item_1", "Item_1", ""),
    ("https://example.com/download/x/y", "", ""),
])
def test_split_archive_url(url, ident, fname):
    assert sd.split_archive_url(url) == (ident, fname)


# ---------- Archive check ----------

@pytest.mark.parametrize("raw, secs", [("1603.71", 1603.71), ("26:43", 1603.0), ("1:02:03", 3723.0),
                                       (None, None), ("abc", None)])
def test_parse_length(raw, secs):
    assert ca.parse_length(raw) == secs


META = {"metadata": {"identifier": "OTRR_Noir", "imagecount": "40"},
        "files": [{"name": "Ep 01 Start.mp3", "length": "1810.0", "format": "VBR MP3"},
                  {"name": "ep02.mp3", "length": "28:20", "format": "VBR MP3"},
                  {"name": "ep03.mp3", "length": "1500.4", "format": "VBR MP3"},
                  {"name": "ep04.mp3", "format": "VBR MP3"}]}


def codes(e, meta):
    return [i.code for i in ca.evaluate(e, meta)]


def test_evaluate_all_outcomes():
    start, second = by_title("Start"), by_title("Second")
    issues = ca.evaluate(start, META)
    assert [i.code for i in issues] == ["length_off"] and issues[0].fix == 1810.0
    assert codes(second, META) == []                                   # 28:20 = 1700s, matches
    assert codes(by_title("Noir Show: Third"), META) == []             # within tolerance
    assert codes(by_title("Noir Show: Fourth"), META) == []            # Archive has no length: nothing to compare
    assert codes(by_title("Ghost"), {}) == ["item_gone"]
    assert codes(start, {"metadata": {"x": 1}, "is_dark": True}) == ["item_dark"]
    assert codes(start, {"_error": "timed out"}) == ["check_failed"]
    gone = ca.evaluate(start, {"metadata": {"x": 1}, "files": [{"name": "Ep 01 Start (1).mp3"}]})
    assert gone[0].code == "file_gone" and "Ep 01 Start (1).mp3" in gone[0].message
    restricted = {"metadata": {"access-restricted-item": "true"}, "files": META["files"]}
    assert "restricted" in codes(second, restricted)


def test_no_length_and_pages():
    ghost = by_title("Ghost")
    meta = {"metadata": {"x": 1}, "files": [{"name": "x.mp3", "length": "100.5"}]}
    issues = ca.evaluate(ghost, meta)
    assert issues[0].code == "no_length" and issues[0].fix == 100.5
    rack = sd.Entry("art/rack/rack.js", "RACK", "Comic", identifier="comic1", pages=30, kind="item")
    assert codes(rack, {"metadata": {"imagecount": "40"}}) == ["pages_differ"]
    assert codes(rack, {"metadata": {"imagecount": "31"}}) == []


def test_fix_lengths_rewrites_the_right_numbers(tmp_path):
    repo = tmp_path / "site"
    shutil.copytree(SITE, repo)
    es = sd.load_entries(repo)
    get = lambda t: next(e for e in es if e.title == t)
    fixes = [ca.Issue("WARN", "length_off", e.file, e.context, e.title, e.key, "", f)
             for e, f in ((get("Start"), 1810.0), (get("Noir Show: Third"), 1512.37), (get("Ghost"), 99.123))]
    n = ca.apply_length_fixes(fixes, {(e.file, e.context, e.key or e.src): e for e in es}, repo)
    assert n == 3
    after = {e.title: e.length for e in sd.load_entries(repo)}
    assert after["Start"] == 1810.0 and after["Noir Show: Third"] == 1512.37 and after["Ghost"] == 99.12
    assert after["Second"] == 1700 and after["Noir Show: Fourth"] == 1400.25  # untouched


def test_rotation_covers_everything_once_a_week():
    ids = [f"item{i}" for i in range(500)]
    buckets = {ca.rotation_bucket(i) for i in ids}
    assert buckets == set(range(7))
    assert ca.rotation_bucket("abc") == ca.rotation_bucket("abc")


def test_report_markdown():
    md = ca.report_markdown([ca.Issue("ERROR", "file_gone", "stations.js", "STATIONS/noir", "Start", "x", "gone")], 3, 9)
    assert "**1** broken" in md and "| `stations.js` | STATIONS/noir | Start | gone |" in md
    assert "All clear" in ca.report_markdown([], 1, 1)


# ---------- site check ----------

def test_public_domain_cutoffs():
    assert sc.recording_cutoff_year(date(2026, 11, 24)) == 1925
    assert sc.recording_cutoff_year(date(2027, 1, 1)) == 1926
    assert sc.works_cutoff_year(date(2026, 11, 24)) == 1930


def test_version_tags():
    f = sc.check_version_tags(SITE)
    assert len(f) == 1 and f[0].where == "ads.js" and "about.html (v=1)" in f[0].message


def test_local_files():
    msgs = [(x.level, x.message) for x in sc.check_local_files(SITE, entries())]
    assert any(l == "ERROR" and "'art/ads/Camel.JPG' only exists as 'art/ads/camel.jpg'" in m for l, m in msgs)
    assert any(l == "ERROR" and "'art/ads/missing.jpg' doesn't exist" in m for l, m in msgs)
    assert any(l == "INFO" and "art/cards/swing.png" in m for l, m in msgs)
    assert not any("J.esc" in m for _, m in msgs)  # page code isn't a path


def test_entry_checks_lengths_duplicates_and_rights():
    f = sc.check_entries(entries(), today=date(2026, 11, 24), info=sd.station_info(SITE))
    text = [(x.level, x.check, x.message) for x in f]
    assert ("ERROR", "lengths") in [(l, c) for l, c, _ in text if "Ghost" in _]
    assert any(c == "duplicates" and "'Second'" in m for _, c, m in text)
    assert any(l == "ERROR" and c == "rights" and "Too New" in m for l, c, m in text)
    assert any(l == "WARN" and c == "rights" and "No Year" in m for l, c, m in text)
    assert not any("Old One" in m for _, _, m in text)
    assert not any("Off air" in m for _, _, m in text)  # station is off
    later = sc.check_entries(entries(), today=date(2032, 1, 1), info=sd.station_info(SITE))
    assert not any(x.check == "rights" and x.level == "ERROR" for x in later)  # 1931 is PD by 2032


def test_content_flags_and_allowlist(tmp_path):
    f = sc.check_content_flags(entries(), allow=set())
    got = {(x.level, x.message.split("'")[1]) for x in f}
    assert ("WARN", "Lucky Strike: Merry Christmas") in got   # TV commercial
    assert ("INFO", "Camel Cigarettes") in got                # print ad: a decision
    assert not any(t == "Dragnet: The Big Smoke" for _, t in got)  # a show title, not an ad
    assert not any(t == "Atwater Kent Radios" for _, t in got)
    allow = tmp_path / "allow.json"
    allow.write_text(json.dumps({"approved": [{"title": "Camel Cigarettes", "why": "print gallery"}]}))
    assert not any("Camel" in x.message for x in sc.check_content_flags(entries(), sc.load_allowlist(allow)))


def test_site_check_main_writes_reports(tmp_path):
    out = tmp_path / "site.md"
    code = sc.main(["--out", str(out)])
    assert code == 1 and "Errors" in out.read_text() and out.with_suffix(".json").exists()


# ---------- finding more ----------

FILES = [
    {"name": "show01.mp3", "format": "VBR MP3", "length": "1500", "title": "Episode One"},
    {"name": "show01_64kb.mp3", "format": "64Kbps MP3", "length": "1500", "original": "show01.mp3"},
    {"name": "show02_64kb.mp3", "format": "64Kbps MP3", "length": "29:00", "original": "show02.flac"},
    {"name": "show03.mp3", "format": "VBR MP3", "length": "30", "title": "Promo"},
    {"name": "Whiskey Night.mp3", "format": "VBR MP3", "length": "1700"},
    {"name": "cover.jpg", "format": "JPEG"},
]


def test_pick_files_one_per_original():
    names = [f["name"] for f in fm.pick_files(FILES, "audio")]
    assert names == ["Whiskey Night.mp3", "show01.mp3", "show02_64kb.mp3", "show03.mp3"]


def test_build_candidates_flags_and_skips():
    meta = {"metadata": {"title": "The Show", "date": "1950"}, "files": FILES}
    c = fm.build_candidates("ShowSet", meta, already={"ShowSet/show03.mp3"}, today=date(2026, 11, 24))
    by = {x["title"]: x for x in c}
    assert set(by) == {"Episode One", "show02", "Whiskey Night"}
    assert by["Episode One"]["src"] == "https://archive.org/download/ShowSet/show01.mp3"
    assert by["show02"]["length"] == 1740.0 and by["Episode One"]["series"] == "The Show"
    assert any("1950" in f for f in by["Episode One"]["flags"])          # after 1930: rights check
    assert any("alcohol" in f for f in by["Whiskey Night"]["flags"])
    rows = fm.as_stations_more_rows(c, "ShowSet")
    assert ["The Show", "Episode One", "1950", "ShowSet", "show01.mp3", 1500.0] in rows


def test_recordings_newer_than_the_cutoff_are_never_offered():
    files = [{"name": "a.mp3", "format": "VBR MP3", "length": "180", "date": "1924"},
             {"name": "b.mp3", "format": "VBR MP3", "length": "180", "date": "1927"},
             {"name": "c.mp3", "format": "VBR MP3", "length": "180"}]
    c = fm.build_candidates("78set", {"metadata": {"title": "78s"}, "files": files}, recording=True,
                            min_length=60, today=date(2026, 11, 24))
    titles = {x["title"]: x["flags"] for x in c}
    assert set(titles) == {"a", "c"} and titles["a"] == [] and any("1925" in f for f in titles["c"])


def test_video_formats_prefer_the_sites_512kb_copies():
    files = [{"name": "ep_512kb.mp4", "format": "512Kb MPEG4", "length": "1500", "original": "ep.avi"},
             {"name": "ep.mp4", "format": "h.264", "length": "1500", "original": "ep.avi"}]
    assert [f["name"] for f in fm.pick_files(files, "video")] == ["ep_512kb.mp4"]
