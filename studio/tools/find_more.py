"""Find more Internet Archive material and turn it into ready-to-review entries for the site.

    # 1. Search the Archive (marks items the site already uses)
    python studio/tools/find_more.py search "Gunsmoke" --collection oldtimeradio
    python studio/tools/find_more.py search "mediatype:movies AND collection:classic_tv AND title:(dragnet)"

    # 2. Turn one item into candidate entries (skips files the site already plays)
    python studio/tools/find_more.py item OTRR_Gunsmoke_Singles --station outwest
    python studio/tools/find_more.py item 78_some-record_gbia0001234 --station gramophone --recording
    python studio/tools/find_more.py item dragnet_1952 --kind video --channel crime

Candidates are written to studio/candidates/<item>.json with flags for anything a human must
check (rights year, content words, very short files). Nothing is added to the site: the
Content Screener and the Director review candidates first (see studio/HUMAN_GATES.md).
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.parse
import urllib.request
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from check_archive import USER_AGENT, fetch_metadata, parse_length  # noqa: E402
from site_check import FLAG_TERMS, recording_cutoff_year, works_cutoff_year  # noqa: E402
from sitedata import STUDIO_DIR, load_entries  # noqa: E402

AUDIO_FORMATS = ["VBR MP3", "64Kbps MP3", "128Kbps MP3", "MP3", "32Kbps MP3"]
VIDEO_FORMATS = ["512Kb MPEG4", "h.264", "MPEG4", "h.264 IA"]


def search(query: str, collection: str = "", rows: int = 50) -> list[dict]:
    q = f"({query}) AND collection:({collection})" if collection else query
    params = [("q", q), ("rows", str(rows)), ("output", "json"), ("sort[]", "downloads desc")]
    params += [("fl[]", f) for f in ("identifier", "title", "date", "year", "mediatype", "downloads", "collection")]
    url = "https://archive.org/advancedsearch.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8")).get("response", {}).get("docs", [])


def _year(value) -> int | None:
    m = re.search(r"(1[89]\d\d|20\d\d)", str(value or ""))
    return int(m.group(1)) if m else None


def _clean_title(name: str) -> str:
    stem = re.sub(r"\.(mp3|mp4|ogg|m4a|ogv)$", "", name.rsplit("/", 1)[-1], flags=re.I)
    stem = re.sub(r"_(512kb|64kb|128kb|vbr)$", "", stem, flags=re.I)
    return re.sub(r"[_]+", " ", stem).strip()


def _base(name: str) -> str:
    """'show01_64kb.mp3', 'show01.mp3' and 'show01.flac' all belong to 'show01'."""
    return re.sub(r"(_512kb|_64kb|_128kb|_vbr)?\.[A-Za-z0-9]+$", "", name, flags=re.I)


def pick_files(files: list[dict], kind: str) -> list[dict]:
    """One playable derivative per original, in the formats the site uses."""
    prefs = AUDIO_FORMATS if kind == "audio" else VIDEO_FORMATS
    best: dict[str, tuple[int, dict]] = {}
    for f in files:
        fmt = str(f.get("format") or "")
        if fmt not in prefs:
            continue
        name = str(f.get("name") or "")
        group = _base(str(f.get("original") or name))
        rank = prefs.index(fmt)
        if group not in best or rank < best[group][0]:
            best[group] = (rank, f)
    return [f for _, f in sorted(best.values(), key=lambda x: str(x[1].get("name")))]


def build_candidates(identifier: str, meta: dict, kind: str = "audio", recording: bool = False,
                     already: set[str] | None = None, min_length: float = 60,
                     today: date | None = None) -> list[dict]:
    already = already or set()
    md = meta.get("metadata", {}) if meta else {}
    series = md.get("title", identifier) if isinstance(md.get("title"), str) else identifier
    item_year = _year(md.get("date") or md.get("year"))
    rec_cutoff, works_cutoff = recording_cutoff_year(today), works_cutoff_year(today)
    out = []
    for f in pick_files(meta.get("files", []), kind):
        name = str(f["name"])
        if f"{identifier}/{name}" in already:
            continue
        length = parse_length(f.get("length"))
        flags = []
        if length is None:
            flags.append("no length from the Archive: measure it before adding")
        elif length < min_length:
            flags.append(f"only {length:.0f}s long")
        title = (f.get("title") or _clean_title(name)).strip()
        year = _year(f.get("date")) or item_year
        if recording:
            if year is None:
                flags.append(f"no recording year: must be {rec_cutoff} or earlier")
            elif year > rec_cutoff:
                continue  # not public domain yet; never offer it
        elif year is None:
            flags.append("no year: check the rights before adding")
        elif year > works_cutoff:
            flags.append(f"from {year}: only public domain if its copyright wasn't renewed; check before adding")
        for rule, pat in FLAG_TERMS.items():
            if re.search(pat, title, re.I):
                flags.append(f"title mentions {rule}: screen it")
        out.append({
            "src": f"https://archive.org/download/{identifier}/{urllib.parse.quote(name)}",
            "length": round(length, 2) if length else None,
            "series": series,
            "title": title,
            **({"date": str(year)} if year else {}),
            "item": f"https://archive.org/details/{identifier}",
            "flags": flags,
        })
    return out


def as_stations_more_rows(cands: list[dict], identifier: str) -> list[list]:
    """[series, title, first aired, identifier, file, seconds] lines for stations-more.js."""
    rows = []
    for c in cands:
        fname = urllib.parse.unquote(c["src"].split(f"/{identifier}/", 1)[1])
        rows.append([c["series"], c["title"], c.get("date", ""), identifier, fname, c["length"]])
    return rows


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("search")
    s.add_argument("query")
    s.add_argument("--collection", default="")
    s.add_argument("--rows", type=int, default=50)
    i = sub.add_parser("item")
    i.add_argument("identifier")
    i.add_argument("--kind", choices=["audio", "video"], default="audio")
    i.add_argument("--recording", action="store_true", help="music recordings: enforce the public-domain year")
    i.add_argument("--station", default="", help="station id these are meant for (recorded in the output)")
    i.add_argument("--channel", default="", help="TV channel id these are meant for")
    i.add_argument("--min-length", type=float, default=60)
    args = ap.parse_args(argv)

    on_site = load_entries()
    used_items = {e.identifier for e in on_site if e.identifier}
    if args.cmd == "search":
        for d in search(args.query, args.collection, args.rows):
            mark = "ON SITE" if d.get("identifier") in used_items else ""
            print(f"{d.get('identifier', ''):60.60s} {str(d.get('year') or d.get('date') or '')[:4]:4s} "
                  f"{int(d.get('downloads') or 0):>9,d}  {str(d.get('title', ''))[:60]}  {mark}")
        return 0

    meta = fetch_metadata(args.identifier, max_age_days=1)
    if "_error" in meta or not meta.get("metadata"):
        print(f"Couldn't read Archive item '{args.identifier}'.", file=sys.stderr)
        return 1
    already = {e.key for e in on_site if e.filename}
    cands = build_candidates(args.identifier, meta, args.kind, args.recording, already, args.min_length)
    out_dir = STUDIO_DIR / "candidates"
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / f"{re.sub(r'[^A-Za-z0-9._-]', '_', args.identifier)}.json"
    payload = {"identifier": args.identifier, "for": args.station or args.channel, "kind": args.kind,
               "found": date.today().isoformat(), "status": "needs screening", "candidates": cands}
    if args.kind == "audio" and not args.recording:
        payload["stations_more_rows"] = as_stations_more_rows([c for c in cands if c["length"]], args.identifier)
    out.write_text(json.dumps(payload, indent=1, ensure_ascii=False), encoding="utf-8")
    flagged = sum(bool(c["flags"]) for c in cands)
    print(f"{len(cands)} new candidate(s), {flagged} flagged for a human look → {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
