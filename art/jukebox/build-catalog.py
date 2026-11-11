"""THE JUKEBOX CATALOG
Builds art/jukebox/catalog.js, the list of every song the jukebox can play, from the albums on the Record Shelf
(art/records/records.js). Run it again whenever albums are added to the shelf:

    python3 art/jukebox/build-catalog.py

How songs are found on Archive.org:
  * "lp_" albums (the Archive's Unlocked Recordings) are stored as whole LP sides. Each album has a song list with
    lengths (disc-metadata.json), so each song is the side's file plus the point where the song starts.
  * Many "lp_" albums also have one file per song, which is used when it's there (songs start exactly on time).
  * Other albums are usually one file per song; those are used as they are.
Albums the Archive has no usable song list for are left out, and listed at the end so they can be checked.
Jukebox numbers (101, 102, ...) follow the order of the Record Shelf, and an album keeps its number when
new ones are added, because the numbers already used are read back from the old catalog first.
"""
import json, os, re, subprocess, sys, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
OUT = os.path.join(HERE, "catalog.js")
UA = {"User-Agent": "TheBeesKneesJukebox/1.0 (https://thebeesknees.fm)"}


def get_json(url):
    return json.loads(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90).read())


def secs(t):
    """'3:07' or '1:02:03' -> seconds"""
    if not t: return None
    s = 0
    for part in str(t).split(":"):
        try: s = s * 60 + float(part)
        except ValueError: return None
    return s


def clean(t):
    t = re.sub(r"\s*\((from|From)[^)]*\)", "", t or "").strip()
    return re.sub(r"\s+", " ", t)


# Songs kept off the jukebox (the station's racism screening). Add a title here, exactly as the catalog shows it.
SKIP = {
    "Rock-A-Bye Your Baby With A Dixie Melody",   # lyrics call back to minstrel songs ("Old Black Joe", "Swanee")
    "I'd Rather See A Minstrel Show / Mandy",     # a minstrel-show number
    "The Gypsy In My Soul",                       # "gypsy" is a slur for Roma people
}


def album(rec):
    ident = rec["item"].rstrip("/").split("/")[-1]
    try: md = get_json(f"https://archive.org/metadata/{ident}")
    except Exception as e: return None, f"{ident}: no metadata ({e})"
    files = md.get("files", [])
    mp3s = [f for f in files if f["name"].lower().endswith(".mp3") and not f["name"].lower().endswith("_64kb.mp3")]
    songs = []
    # many "lp_" albums also come split into one file per song ("disc1/01.02. Title.mp3"): best of all, use those
    split = [f for f in mp3s if re.match(r"disc\d+/\d+\.\d+\. ", f["name"]) and not re.search(r"\. Side \d", f["name"])]
    if ident.startswith("lp_") and len(split) >= 3:
        for f in sorted(split, key=lambda f: f["name"]):
            d = secs(f.get("length"))
            songs.append({"t": clean(f.get("title") or re.sub(r"^.*?\d+\.\d+\. |\.mp3$", "", f["name"])), "f": f["name"], "s": 0, "d": round(d, 1) if d else None})
    elif ident.startswith("lp_"):
        try: dm = get_json(f"https://archive.org/download/{ident}/disc-metadata.json")
        except Exception: return None, f"{ident}: no song list"
        # the side files are named like "disc1/01.01. Side 1: ...mp3"; keep them in order, one per side
        sides = sorted([f for f in mp3s if re.search(r"Side \d", f["name"])], key=lambda f: f["name"])
        tracks = [t for d in dm.get("discs", []) for t in d.get("tracks", [])]
        if not sides or not tracks: return None, f"{ident}: no side files"
        by_side = {}
        for t in tracks:
            by_side.setdefault((t.get("position") or {}).get("side-index", 1), []).append(t)
        keys = sorted(by_side)
        if len(keys) != len(sides): return None, f"{ident}: {len(keys)} sides in the list but {len(sides)} side files"
        for k, side in zip(keys, sides):
            at = 0.0
            for t in sorted(by_side[k], key=lambda t: (t.get("position") or {}).get("ordinal", 0)):
                d = secs(t.get("duration"))
                if d is None: return None, f"{ident}: a song has no length"
                songs.append({"t": clean(t.get("title")), "f": side["name"], "s": round(at, 1), "d": round(d, 1)})
                at += d
    else:
        # one file per song: use the original mp3s (or the mp3 copies the Archive made of flac originals)
        per = [f for f in mp3s if f.get("title")]
        if len(per) < 3: return None, f"{ident}: not split into songs"
        def order(f):
            m = re.match(r"(\d+)", str(f.get("track", "")))
            return (int(m.group(1)) if m else 999, f["name"])
        for f in sorted(per, key=order):
            d = secs(f.get("length"))
            songs.append({"t": clean(f["title"]), "f": f["name"], "s": 0, "d": round(d, 1) if d else None})
        if len(songs) > 30: return None, f"{ident}: {len(songs)} files, looks like more than one album"
    songs = [x for x in songs if x["t"] not in SKIP]
    if not songs: return None, f"{ident}: no songs"
    return {"item": ident, "title": rec["title"], "artist": rec["artist"], "year": rec.get("year", ""),
            "cover": rec["cover"], "added": rec.get("added"), "songs": songs}, None


def main():
    recs = json.loads(subprocess.check_output(
        ["node", "-e", "global.window={};require(process.argv[1]);process.stdout.write(JSON.stringify(window.RECORDS))",
         os.path.join(ROOT, "art/records/records.js")]))
    old = {}
    if os.path.exists(OUT):   # keep the numbers albums already have
        txt = open(OUT).read()
        try: old = {a["item"]: a["n"] for a in json.loads(txt[txt.index("["):txt.rindex("]") + 1])}
        except Exception: pass
    with ThreadPoolExecutor(8) as ex: results = list(ex.map(album, recs))
    albums, skipped = [], []
    nxt = max(list(old.values()) + [100]) + 1
    for a, why in results:
        if not a: skipped.append(why); continue
        if a["item"] in old: a["n"] = old[a["item"]]
        else: a["n"] = nxt; nxt += 1
        albums.append(a)
    albums.sort(key=lambda a: a["n"])
    head = ("/* THE JUKEBOX CATALOG: made by art/jukebox/build-catalog.py from the Record Shelf. Don't edit by hand;\n"
            "   change the shelf (art/records/records.js) and run the script again.\n"
            "   Each album: n (jukebox number), item (Archive id), songs [{t: title, f: file, s: start second, d: length}] */\n")
    with open(OUT, "w") as fh:
        fh.write(head + "window.JUKEBOX = " + json.dumps(albums, ensure_ascii=False, separators=(",", ":")) + ";\n")
    print(f"{len(albums)} albums, {sum(len(a['songs']) for a in albums)} songs written to {OUT}")
    if skipped:
        print(f"{len(skipped)} left out:"); [print("  " + s) for s in skipped]


if __name__ == "__main__":
    main()
