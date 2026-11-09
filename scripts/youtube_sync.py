"""Adds new long videos from The Bee's Knees YouTube channel to youtube.js (the YouTube page on the site).

Runs once a day from .github/workflows/youtube-sync.yml. It reads the channel's public feed, skips Shorts,
and puts any long video that isn't on the page yet at the top of the list. It never removes anything:
to take a video off the page for good, put its id in the "hidden" list in youtube.js.
Uses only Python's standard library."""
import json, re, sys, urllib.request
import xml.etree.ElementTree as ET

CHANNEL_ID = "UCoMlAR49hTxfilmA3QfwLmQ"
FILE = "youtube.js"
NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}

def load():
    src = open(FILE, encoding="utf-8").read()
    head = src[:src.index("window.YOUTUBE")]
    body = src[src.index("{", src.index("window.YOUTUBE")):src.rindex("}") + 1]
    # youtube.js is written by hand as a JS object; turn it into JSON to read it
    body = re.sub(r"^\s*//.*$", "", body, flags=re.M)  # drop comment lines
    js = re.sub(r"^(\s*)([A-Za-z_]+):", r'\1"\2":', body, flags=re.M)
    js = re.sub(r"([{,]\s*)(id|title):", r'\1"\2":', js)
    js = re.sub(r",(\s*[\]}])", r"\1", js)
    return head, json.loads(js)

def feed():
    req = urllib.request.Request(f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}", headers={"User-Agent": "Mozilla/5.0"})
    root = ET.fromstring(urllib.request.urlopen(req, timeout=30).read())
    out = []
    for e in root.findall("a:entry", NS):
        link = e.find("a:link", NS).get("href", "")
        if "/shorts/" in link:
            continue
        out.append({"id": e.find("yt:videoId", NS).text, "title": e.find("a:title", NS).text.strip(), "published": e.find("a:published", NS).text})
    out.sort(key=lambda v: v["published"], reverse=True)
    return out

def save(head, data):
    lines = [head + "window.YOUTUBE = {", f'  channel: {json.dumps(data["channel"])},',
             "  // ids of videos to keep off the page (the daily update won't add them back)",
             f'  hidden: {json.dumps(data.get("hidden", []))},', "  videos: ["]
    vids = data["videos"]
    for i, v in enumerate(vids):
        lines.append(f'    {{ id: {json.dumps(v["id"])}, title: {json.dumps(v["title"], ensure_ascii=False)} }}' + ("," if i < len(vids) - 1 else ""))
    lines += ["  ]", "};", ""]
    open(FILE, "w", encoding="utf-8").write("\n".join(lines))

head, data = load()
have = {v["id"] for v in data["videos"]} | set(data.get("hidden", []))
new = [{"id": v["id"], "title": v["title"]} for v in feed() if v["id"] not in have]
if not new and "hidden" in data:
    print("Nothing new.")
    sys.exit(0)
data["videos"] = new + data["videos"]
data.setdefault("hidden", [])
save(head, data)
print("Added:", ", ".join(v["title"] for v in new) or "(none, file tidied)")
