"""Adds new "Madison on the Air" episodes from its Internet Archive item to the madison station in stations.js.

Runs once a day from .github/workflows/madison-sync.yml. It reads the Archive item's file list, and every
original .mp3 that starts with an episode number ("74. Some Show - Madison on the Air.mp3") and isn't on the
station yet is added to the end of the station's track list, with the Archive's length. When anything is added
it also bumps the stations.js?v= tag on the pages, so browsers fetch the new list.
It never removes anything. To take an episode off for good, delete its track from stations.js AND put its file
name in scripts/madison_skip.txt, or the next daily run adds it back.

  python3 scripts/madison_sync.py [--summary FILE]   check the Archive and add new episodes
  python3 scripts/madison_sync.py --self-test        check this script's own logic (no internet)
Uses only Python's standard library."""
import datetime, glob, json, os, re, sys, urllib.parse, urllib.request

ITEM = "1.-dragnet-mota-2026"
STATION = "madison"
SERIES = "Madison on the Air"
FILE = "stations.js"
SKIP_FILE = "scripts/madison_skip.txt"
TAG_FILES = ["*.html", "art/screen/theater.js"]  # every file that loads stations.js?v=...
DOWNLOAD = f"https://archive.org/download/{ITEM}/"
EPISODE_RE = re.compile(r"^\d+\.\s")  # "74. Title - Madison on the Air.mp3"
TAG_RE = re.compile(r"(stations\.js\?v=)([0-9A-Za-z]+)")

def title_of(name):
    """'02. Gunsmoke_Madison on the Air.mp3' -> 'Gunsmoke'"""
    t = re.sub(r"\.mp3$", "", name, flags=re.I)
    t = re.sub(r"^\d+\.\s*", "", t)
    t = re.sub(r"\s*[-_]\s*Madison on the Air\s*$", "", t, flags=re.I)
    return t.strip() or name

def track_text(name, length):
    """One track, written exactly like the hand-made ones in stations.js."""
    src = DOWNLOAD + urllib.parse.quote(name, safe="()")
    return ("   {\n"
            f'    "src": {json.dumps(src)},\n'
            f'    "length": {json.dumps(round(float(length), 2))},\n'
            f'    "series": {json.dumps(SERIES)},\n'
            f'    "title": {json.dumps(title_of(name), ensure_ascii=False)},\n'
            f'    "item": {json.dumps("https://archive.org/details/" + ITEM)}\n'
            "   }")

def tracks_span(text):
    """(start, end) of the madison station's tracks list: from just after '"tracks": [' to the closing ']'."""
    m = re.search(r'\n \{\n  "id": "' + STATION + r'",\n', text)
    if not m:
        raise SystemExit(f'Could not find the "{STATION}" station in {FILE}.')
    open_ = text.find('\n  "tracks": [\n', m.end())
    close = text.find("\n  ]\n", open_)
    nxt = text.find('\n  "id": ', m.end())
    if open_ < 0 or close < 0 or (0 <= nxt < close):
        raise SystemExit(f'Could not find the "{STATION}" station\'s track list in {FILE}.')
    return open_ + len('\n  "tracks": [\n'), close

def have_names(text):
    a, b = tracks_span(text)
    return {urllib.parse.unquote(s.rsplit("/", 1)[-1]) for s in re.findall(r'"src": "([^"]+)"', text[a:b])}

def append_tracks(text, blocks):
    a, b = tracks_span(text)
    joiner = ",\n" if text[a:b].strip() else ""
    return text[:b] + joiner + ",\n".join(blocks) + text[b:]

def pick_new(files, have, skip):
    """-> (to_add [(name, length)], warnings)"""
    add, warn = [], []
    for f in files:
        name = f.get("name", "")
        if f.get("source") != "original" or not name.lower().endswith(".mp3") or "/" in name:
            continue
        if name in have or name in skip:
            continue
        if not EPISODE_RE.match(name):
            warn.append(f"Not added (doesn't look like a numbered episode, add by hand if wanted): {name}")
            continue
        try:
            length = round(float(f.get("length")), 2)
            if not 60 <= length <= 6 * 3600:
                raise ValueError
        except (TypeError, ValueError):
            warn.append(f"Not added yet (the Archive has no usable length for it; a wrong length breaks the shared clock): {name}")
            continue
        add.append((name, length))
    add.sort(key=lambda x: (int(EPISODE_RE.match(x[0]).group(0).strip(" .")), x[0]))
    return add, warn

def new_tag(old_tags, today):
    """Tags look like 20261124e. Next one is today's date + the next letter."""
    same = sorted(t for t in old_tags if t.startswith(today) and re.fullmatch(r"[a-z]+", t[len(today):]))
    if not same:
        return today + "a"
    last = same[-1][len(today):]
    return today + (last[:-1] + chr(ord(last[-1]) + 1) if last[-1] != "z" else last + "a")

def bump_tags(today):
    files = sorted({p for g in TAG_FILES for p in glob.glob(g)})
    texts = {p: open(p, encoding="utf-8", newline="").read() for p in files}
    old = {m.group(2) for t in texts.values() for m in TAG_RE.finditer(t)}
    tag = new_tag(old, today)
    for p, t in texts.items():
        t2 = TAG_RE.sub(lambda m: m.group(1) + tag, t)
        if t2 != t:
            open(p, "w", encoding="utf-8", newline="").write(t2)
            print(f"  {p}: stations.js?v={tag}")
    return tag

def load():
    """stations.js as LF text, plus the line ending it uses on disk (CRLF on Windows checkouts)."""
    raw = open(FILE, encoding="utf-8", newline="").read()
    return raw.replace("\r\n", "\n"), ("\r\n" if "\r\n" in raw else "\n")

def fmt_len(s):
    s = int(round(s))
    return f"{s // 3600}:{s // 60 % 60:02d}:{s % 60:02d}" if s >= 3600 else f"{s // 60}:{s % 60:02d}"

def main(argv):
    summary = argv[argv.index("--summary") + 1] if "--summary" in argv else os.environ.get("MADISON_SUMMARY")
    req = urllib.request.Request(f"https://archive.org/metadata/{ITEM}", headers={"User-Agent": "TheBeesKneesReference/1.0 (https://thebeesknees.fm)"})
    meta = json.loads(urllib.request.urlopen(req, timeout=60).read())
    if not meta.get("files"):
        raise SystemExit(f"The Archive returned no files for {ITEM}; trying again tomorrow.")
    text, nl = load()
    skip = set()
    if os.path.exists(SKIP_FILE):
        skip = {l.strip() for l in open(SKIP_FILE, encoding="utf-8") if l.strip() and not l.lstrip().startswith("#")}
    add, warn = pick_new(meta["files"], have_names(text), skip)
    for w in warn:
        print("::warning::" + w)
    if not add:
        print("Nothing new.")
        return 0
    open(FILE, "w", encoding="utf-8", newline="").write(append_tracks(text, [track_text(n, l) for n, l in add]).replace("\n", nl))
    try:
        from zoneinfo import ZoneInfo
        today = datetime.datetime.now(ZoneInfo("America/Los_Angeles")).strftime("%Y%m%d")
    except Exception:
        today = datetime.datetime.utcnow().strftime("%Y%m%d")
    print("Bumped the version tag so browsers fetch the new list:")
    tag = bump_tags(today)
    lines = [f"- **{title_of(n)}** ({fmt_len(l)}, length {l})  \n  `{n}`" for n, l in add]
    if warn:
        lines += ["", "Also on the Archive item but not added:"] + [f"- {w}" for w in warn]
    out = "\n".join(lines)
    print(f"Added {len(add)} episode(s) (stations.js?v={tag}):\n{out}")
    if summary:
        open(summary, "w", encoding="utf-8").write(out + "\n")
    return 0

def self_test():
    # titles: every hand-made title should match the rule, except known hand edits
    text, nl = load()
    a, b = tracks_span(text)
    block = text[a:b]
    pairs = re.findall(r'"src": "([^"]+)",\n    "length": ([0-9.]+),\n    "series": "[^"]*",\n    "title": ("(?:[^"\\]|\\.)*")', block)
    assert len(pairs) >= 13, len(pairs)
    hand_edits = {"12. Dracula - Stage 49 - Madison on the Air.mp3"}  # titled "Dracula - Studio 49" on the site
    for src, length, title in pairs:
        name = urllib.parse.unquote(src.rsplit("/", 1)[-1])
        if name not in hand_edits:
            assert title_of(name) == json.loads(title), (name, title_of(name), title)
            # the whole track renders byte-for-byte like the hand-made one
            assert track_text(name, float(length)) in block, name
    assert title_of("02. Gunsmoke_Madison on the Air.mp3") == "Gunsmoke"
    assert title_of("48. The Tell-Tale Heart - Inner Sanctum - Madison on the Air.mp3") == "The Tell-Tale Heart - Inner Sanctum"
    # picking: originals only, numbered, not already there, needs a length; sorted by number
    have = have_names(text)
    files = [{"name": "100. Zeta - Madison on the Air.mp3", "source": "original", "length": "2000.126"},
             {"name": "99. Alpha - Madison on the Air.mp3", "source": "original", "length": "1900"},
             {"name": "98. No Length - Madison on the Air.mp3", "source": "original"},
             {"name": "97. Bad Length - Madison on the Air.mp3", "source": "original", "length": "12:34"},
             {"name": "99. Alpha - Madison on the Air.mp3", "source": "derivative", "length": "1900"},
             {"name": "96. Ogg - Madison on the Air.ogg", "source": "original", "length": "1900"},
             {"name": "Trailer.mp3", "source": "original", "length": "60"},
             {"name": "95. Skipped - Madison on the Air.mp3", "source": "original", "length": "1900"},
             {"name": "01. Dragnet - Madison on the Air.mp3", "source": "original", "length": "1852.42"}]
    add, warn = pick_new(files, have, {"95. Skipped - Madison on the Air.mp3"})
    assert add == [("99. Alpha - Madison on the Air.mp3", 1900.0), ("100. Zeta - Madison on the Air.mp3", 2000.13)], add
    assert len(warn) == 3, warn
    # appending: only the track list changes, the new tracks read back, and the rest is byte-identical
    out = append_tracks(text, [track_text(n, l) for n, l in add])
    a2, b2 = tracks_span(out)
    assert out[:a2] == text[:a] and out[b2:] == text[b:]
    assert out[a2:b2].startswith(block) and "\r" not in out
    assert {n for n, _ in add} <= have_names(out) and len(have_names(out)) == len(have) + 2
    assert '"src": "https://archive.org/download/1.-dragnet-mota-2026/100.%20Zeta%20-%20Madison%20on%20the%20Air.mp3",\n    "length": 2000.13,' in out
    assert "   }\n  ]\n }" in out[b2 - 5:b2 + 10]
    # the madison list should parse as JSON after the edit
    json.loads("[" + out[a2:b2] + "]")
    # version tags
    assert new_tag({"20261124e"}, "20261125") == "20261125a"
    assert new_tag({"20261125c", "20261124e"}, "20261125") == "20261125d"
    assert new_tag({"20261125z"}, "20261125") == "20261125za"
    assert fmt_len(1852.42) == "30:52" and fmt_len(4623.02) == "1:17:03"
    print(f"Self-test passed ({len(pairs)} existing tracks checked).")
    return 0

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
    sys.exit(self_test() if "--self-test" in sys.argv else main(sys.argv))
