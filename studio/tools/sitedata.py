"""Read the site's data files and list every piece of media in them.

The site keeps its content in JavaScript files like `window.STATIONS = [ ... ];`. This module
parses those (leniently: trailing commas are fine), walks them, and returns one `Entry` per
media reference, with where it lives (file, station/channel) and what it points at.

Standard library only.
"""
from __future__ import annotations

import json
import os
import re
import subprocess
from dataclasses import dataclass, field
from pathlib import Path
from urllib.parse import unquote, urlparse

STUDIO_DIR = Path(__file__).resolve().parent.parent
REPO = Path(os.environ.get("BEESKNEES_REPO") or STUDIO_DIR.parent).resolve()  # tests point this at a fixture site
SKIP_DIRS = {"studio", "node_modules", ".git", ".github"}

ASSIGN_RE = re.compile(r"window\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*")
TRAILING_COMMA_RE = re.compile(r",(\s*[}\]])")
IMAGE_EXT = (".jpg", ".jpeg", ".png", ".gif", ".webp")


@dataclass
class Entry:
    file: str                 # e.g. "stations.js"
    context: str              # e.g. "STATIONS/chills" or "TVCH/crime/ads"
    title: str = ""
    src: str = ""             # full URL or local path
    identifier: str = ""      # Internet Archive item id
    filename: str = ""        # file inside the item (unquoted)
    length: float | None = None
    item: str = ""            # archive.org/details/... page
    year: str = ""
    pages: int | None = None
    kind: str = "media"       # media (audio/video) | image | local | item
    extra: dict = field(default_factory=dict)

    @property
    def key(self) -> str:
        return f"{self.identifier}/{self.filename}" if self.filename else self.identifier


def tracked_js(repo: Path = REPO) -> list[Path]:
    try:
        out = subprocess.check_output(["git", "-C", str(repo), "ls-files", "*.js"], text=True,
                                      stderr=subprocess.DEVNULL)
        paths = [repo / p for p in out.splitlines() if p]
    except (OSError, subprocess.CalledProcessError):
        paths = []
    if not paths:  # not a git checkout (or nothing committed yet): look at the files on disk
        paths = list(repo.rglob("*.js"))
    return sorted(p for p in paths if not (set(p.relative_to(repo).parts[:-1]) & SKIP_DIRS))


def parse_globals(text: str) -> dict:
    """Every `window.NAME = <json>` in a file that parses as (lenient) JSON."""
    found = {}
    dec = json.JSONDecoder()
    for m in ASSIGN_RE.finditer(text):
        start = m.end()
        if start >= len(text) or text[start] not in "[{":
            continue
        try:
            obj, _ = dec.raw_decode(text, start)
        except json.JSONDecodeError:
            # retry without trailing commas, on a bounded slice that ends at this statement
            end = _statement_end(text, start)
            try:
                obj = json.loads(TRAILING_COMMA_RE.sub(r"\1", text[start:end]))
            except json.JSONDecodeError:
                continue
        found.setdefault(m.group(1), obj)
    return found


def _statement_end(text: str, start: int) -> int:
    """Index just after the bracket that closes the value starting at `start` (string-aware)."""
    depth, i, in_str, esc = 0, start, False, False
    while i < len(text):
        ch = text[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
        elif ch == '"':
            in_str = True
        elif ch in "[{":
            depth += 1
        elif ch in "]}":
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    return len(text)


def split_archive_url(url: str) -> tuple[str, str]:
    """('identifier', 'file/inside.mp3') for archive.org download/details URLs."""
    if "archive.org" not in url:
        return "", ""
    parts = urlparse(url).path.split("/")
    # /download/<id>/<file...>  or  /details/<id>[/...]
    if len(parts) >= 3 and parts[1] in ("download", "details", "embed"):
        ident = unquote(parts[2])
        rest = unquote("/".join(parts[3:])) if parts[1] == "download" else ""
        return ident, rest
    return "", ""


def _num(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return None


def _label(d: dict) -> str:
    return str(d.get("id") or d.get("name") or "").strip()


def walk(obj, file: str, context: list[str], out: list[Entry]) -> None:
    if isinstance(obj, list):
        for item in obj:
            walk(item, file, context, out)
        return
    if not isinstance(obj, dict):
        return

    src = obj.get("src") if isinstance(obj.get("src"), str) else ""
    item = obj.get("item") if isinstance(obj.get("item"), str) else ""
    title = str(obj.get("title") or obj.get("name") or "")
    year = str(obj.get("date") or obj.get("year") or "")
    ctx = "/".join(context)

    if src and "archive.org/download/" in src:
        ident, fname = split_archive_url(src)
        kind = "image" if fname.lower().endswith(IMAGE_EXT) else "media"
        out.append(Entry(file, ctx, title, src, ident, fname, _num(obj.get("length")), item, year, kind=kind,
                         extra={k: obj[k] for k in ("series", "gain") if k in obj}))
    elif src and not src.startswith(("http:", "https:", "data:")) and "." in src:
        out.append(Entry(file, ctx, title, src, kind="local", item=item, year=year))
        if item:
            ident, _ = split_archive_url(item)
            if ident:
                out.append(Entry(file, ctx, title, "", ident, "", None, item, year, kind="item"))
    elif item and "archive.org/details/" in item and not any(isinstance(v, (list, dict)) for v in obj.values()):
        ident, _ = split_archive_url(item)
        out.append(Entry(file, ctx, title, "", ident, "", None, item, year, kind="item"))
    elif file.endswith("rack.js") and "id" in obj and "pages" in obj:
        out.append(Entry(file, ctx, title, "", str(obj["id"]), "", None,
                         f"https://archive.org/details/{obj['id']}", year,
                         pages=int(obj["pages"]) if str(obj.get("pages", "")).isdigit() else None, kind="item"))

    # recurse into containers, adding this object's id/name to the context
    label = _label(obj)
    for k, v in obj.items():
        if isinstance(v, (list, dict)):
            sub = context + ([label] if label else []) + ([k] if k not in ("tracks", "films", "list") else [])
            walk(v, file, sub, out)


def stations_more_entries(obj: dict, file: str) -> list[Entry]:
    """STATIONS_MORE = {station: [[series, title, aired, identifier, file, seconds], ...]}"""
    out = []
    for station, rows in obj.items():
        for row in rows if isinstance(rows, list) else []:
            if isinstance(row, list) and len(row) >= 6:
                series, title, aired, ident, fname, length = row[:6]
                out.append(Entry(file, f"STATIONS_MORE/{station}", f"{series}: {title}",
                                 f"https://archive.org/download/{ident}/{fname}", str(ident), str(fname),
                                 _num(length), f"https://archive.org/details/{ident}", str(aired),
                                 extra={"series": series, "row": True}))
    return out


def load_entries(repo: Path = REPO) -> list[Entry]:
    entries: list[Entry] = []
    for path in tracked_js(repo):
        text = path.read_text(encoding="utf-8", errors="replace")
        if "window." not in text:
            continue
        rel = path.relative_to(repo).as_posix()
        for name, obj in parse_globals(text).items():
            if name == "STATIONS_MORE" and isinstance(obj, dict):
                entries += stations_more_entries(obj, rel)
            elif name in ("SKIN", "RADIO"):
                continue  # layout/config, not content
            else:
                walk(obj, rel, [name], entries)
    return entries


def station_info(repo: Path = REPO) -> dict:
    """{station id: {"off": bool, "music": bool, "name": str}} from stations.js."""
    p = repo / "stations.js"
    if not p.exists():
        return {}
    data = parse_globals(p.read_text(encoding="utf-8")).get("STATIONS", [])
    return {s.get("id"): {"off": bool(s.get("off")), "music": bool(s.get("music")), "name": s.get("name", "")}
            for s in data if isinstance(s, dict) and s.get("id")}


def line_of(text: str, needle: str) -> int:
    i = text.find(needle)
    return text.count("\n", 0, i) + 1 if i >= 0 else 0


if __name__ == "__main__":
    from collections import Counter
    es = load_entries()
    print(f"{len(es)} entries, {len({e.identifier for e in es if e.identifier})} Archive items")
    for (f, k), n in sorted(Counter((e.file, e.kind) for e in es).items()):
        print(f"  {n:6d}  {k:5s}  {f}")
