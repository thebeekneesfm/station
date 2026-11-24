"""Check that every Archive file the site plays still exists and still has the right length.

    python studio/tools/check_archive.py                      # check everything (can take a while)
    python studio/tools/check_archive.py --rotate             # today's seventh of the catalogue
    python studio/tools/check_archive.py --file stations.js --context STATIONS/noir
    python studio/tools/check_archive.py --fix-lengths        # also correct wrong lengths in the data files

Uses the Internet Archive's public metadata API (one request per item, cached for a week in
studio/.cache), politely: a few requests at a time with a pause between them.

What it reports:
  ERROR  item_gone     the whole Archive item is gone (plays static "Lost the signal")
  ERROR  item_dark     the item was taken down ("dark")
  ERROR  file_gone     the item exists but the file isn't in it any more
  WARN   length_off    the file's real length differs from the site's (the shared clock drifts)
  WARN   no_length     the site has no length for a file the Archive knows
  WARN   restricted    the item is access-restricted (may not play for everyone)
  WARN   check_failed  couldn't ask the Archive (network); try again later
  INFO   pages_differ  a comic/magazine's page count differs from the Archive's

Exit code 1 if anything is at ERROR level (useful for the scheduled health check).
"""
from __future__ import annotations

import argparse
import difflib
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import zlib
from concurrent.futures import ThreadPoolExecutor
from dataclasses import asdict, dataclass
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from sitedata import REPO, STUDIO_DIR, Entry, line_of, load_entries  # noqa: E402

CACHE = STUDIO_DIR / ".cache" / "metadata"
USER_AGENT = "TheBeesKneesFM-site-health/1.0 (+https://thebeesknees.fm)"
LENGTH_TOLERANCE = 1.5  # seconds


@dataclass
class Issue:
    level: str
    code: str
    file: str
    context: str
    title: str
    target: str
    message: str
    fix: float | None = None


# ---------- Archive access ----------

def fetch_metadata(identifier: str, max_age_days: float = 7, pause: float = 0.25) -> dict:
    CACHE.mkdir(parents=True, exist_ok=True)
    path = CACHE / (re.sub(r"[^A-Za-z0-9._-]", "_", identifier) + ".json")
    if path.exists() and time.time() - path.stat().st_mtime < max_age_days * 86400:
        try:
            return json.loads(path.read_text(encoding="utf-8"))
        except ValueError:
            pass
    url = "https://archive.org/metadata/" + urllib.parse.quote(identifier, safe="")
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                data = json.loads(r.read().decode("utf-8") or "{}")
            slim = {k: data[k] for k in ("metadata", "files", "is_dark") if k in data}
            if "files" in slim:  # keep only what we use
                slim["files"] = [{k: f.get(k) for k in ("name", "length", "format", "source", "title", "original", "date")}
                                 for f in slim["files"]]
            path.write_text(json.dumps(slim), encoding="utf-8")
            time.sleep(pause)
            return slim
        except (urllib.error.URLError, TimeoutError, ValueError) as e:
            err = str(e)
            time.sleep(2 * (attempt + 1))
    return {"_error": err}


def parse_length(v) -> float | None:
    """Archive lengths are seconds ('1603.71') or clock time ('26:43', '1:02:03')."""
    if v is None:
        return None
    s = str(v).strip()
    try:
        return float(s)
    except ValueError:
        pass
    parts = s.split(":")
    try:
        nums = [float(p) for p in parts]
    except ValueError:
        return None
    total = 0.0
    for n in nums:
        total = total * 60 + n
    return total


# ---------- evaluation (pure, tested) ----------

def evaluate(e: Entry, meta: dict, tolerance: float = LENGTH_TOLERANCE) -> list[Issue]:
    def issue(level, code, msg, fix=None):
        return Issue(level, code, e.file, e.context, e.title, e.key or e.src, msg, fix)

    if "_error" in meta:
        return [issue("WARN", "check_failed", f"Couldn't reach the Archive: {meta['_error'][:80]}")]
    if not meta or not meta.get("metadata"):
        return [issue("ERROR", "item_gone", f"Archive item '{e.identifier}' no longer exists.")]
    if meta.get("is_dark"):
        return [issue("ERROR", "item_dark", f"Archive item '{e.identifier}' was taken down.")]

    out = []
    md = meta["metadata"]
    if str(md.get("access-restricted-item", "")).lower() == "true":
        out.append(issue("WARN", "restricted", "Item is access-restricted; it may not play for everyone."))

    if e.filename:
        files = {f.get("name"): f for f in meta.get("files", []) if f.get("name")}
        f = files.get(e.filename)
        if f is None:
            near = difflib.get_close_matches(e.filename, list(files), n=3, cutoff=0.6)
            hint = f" Similar files: {', '.join(near)}" if near else ""
            out.append(issue("ERROR", "file_gone", f"File '{e.filename}' isn't in the item any more.{hint}"))
            return out
        if e.kind == "media":
            real = parse_length(f.get("length"))
            if real is not None:
                if e.length is None or e.length <= 0:
                    out.append(issue("WARN", "no_length", f"Site has no length; the Archive says {real:.2f}s.",
                                     round(real, 2)))
                elif abs(real - e.length) > tolerance:
                    out.append(issue("WARN", "length_off",
                                     f"Site says {e.length:.2f}s, the Archive says {real:.2f}s "
                                     f"({real - e.length:+.1f}s).", round(real, 2)))
    if e.pages:
        try:
            count = int(str(md.get("imagecount", "")).strip())
        except ValueError:
            count = None
        if count and abs(count - e.pages) > 2:
            out.append(issue("INFO", "pages_differ", f"Site says {e.pages} pages, the Archive has {count} images."))
    return out


def rotation_bucket(identifier: str, buckets: int = 7) -> int:
    return zlib.crc32(identifier.encode("utf-8")) % buckets


# ---------- fixing lengths ----------

def fmt_seconds(x: float) -> str:
    return f"{x:.2f}".rstrip("0").rstrip(".")


def apply_length_fixes(issues: list[Issue], entries_by_key: dict, repo: Path = REPO) -> int:
    """Rewrite wrong/missing lengths in the data files. Returns the number of changes."""
    by_file: dict[str, list[Issue]] = {}
    for i in issues:
        if i.code in ("length_off", "no_length") and i.fix is not None:
            by_file.setdefault(i.file, []).append(i)
    changed = 0
    for rel, items in by_file.items():
        path = repo / rel
        text = path.read_text(encoding="utf-8")
        for i in items:
            e = entries_by_key.get((i.file, i.context, i.target))
            if e is None:
                continue
            if e.extra.get("row"):  # stations-more: [... , "identifier", "file.mp3", 1234.5]
                pat = re.compile(r'("%s"\s*,\s*"%s"\s*,\s*)(-?[0-9.]+|null)' %
                                 (re.escape(e.identifier), re.escape(e.filename)))
            else:  # object: "src": "<url>", ... "length": 1234.5 (within the same object)
                pat = re.compile(r'("src"\s*:\s*"%s"[^{}]*?"length"\s*:\s*)(-?[0-9.]+|null)' % re.escape(e.src))
            new_text, n = pat.subn(lambda m: m.group(1) + fmt_seconds(i.fix), text, count=0)
            if n == 0 and not e.extra.get("row"):  # length before src in the object
                pat = re.compile(r'("length"\s*:\s*)(-?[0-9.]+|null)([^{}]*?"src"\s*:\s*"%s")' % re.escape(e.src))
                new_text, n = pat.subn(lambda m: m.group(1) + fmt_seconds(i.fix) + m.group(3), text)
            if n:
                text, changed = new_text, changed + n
        path.write_text(text, encoding="utf-8")
    return changed


# ---------- report ----------

def report_markdown(issues: list[Issue], checked_items: int, checked_entries: int) -> str:
    errors = [i for i in issues if i.level == "ERROR"]
    warns = [i for i in issues if i.level == "WARN"]
    lines = [f"# Archive check: {date.today().isoformat()}", "",
             f"Checked **{checked_entries}** references in **{checked_items}** Archive items: "
             f"**{len(errors)}** broken, **{len(warns)}** warnings.", ""]
    if not issues:
        lines.append("All clear. Every file checked is still there with the right length.")
    for level, title in (("ERROR", "Broken (plays 'Lost the signal')"), ("WARN", "Warnings"), ("INFO", "Notes")):
        group = [i for i in issues if i.level == level]
        if not group:
            continue
        lines += ["", f"## {title}", "", "| File | Where | Title | Problem |", "|---|---|---|---|"]
        for i in sorted(group, key=lambda x: (x.file, x.context, x.title))[:400]:
            t = (i.title or i.target).replace("|", "/")[:70]
            lines.append(f"| `{i.file}` | {i.context} | {t} | {i.message.replace('|', '/')} |")
        if len(group) > 400:
            lines.append(f"| … | | | and {len(group) - 400} more (see the JSON report) |")
    return "\n".join(lines) + "\n"


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--file", help="only entries from this data file, e.g. stations.js")
    ap.add_argument("--context", help="only entries whose station/channel path starts with this, e.g. STATIONS/noir")
    ap.add_argument("--rotate", action="store_true", help="check today's seventh of the items (whole site weekly)")
    ap.add_argument("--max-items", type=int, default=0, help="stop after this many Archive items")
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--cache-days", type=float, default=7)
    ap.add_argument("--include-off", action="store_true", help="also check stations that are switched off")
    ap.add_argument("--fix-lengths", action="store_true", help="write corrected lengths into the data files")
    ap.add_argument("--fail-on", choices=["error", "warn"], default="error",
                    help="exit with 1 on errors only (default), or on warnings too")
    ap.add_argument("--out", type=Path, default=STUDIO_DIR / "reports" / "archive-check.md")
    args = ap.parse_args(argv)

    from sitedata import station_info
    off = {k for k, v in station_info().items() if v["off"]}
    entries = [e for e in load_entries() if e.identifier and e.kind in ("media", "image", "item")]
    if not args.include_off:
        entries = [e for e in entries if not any(e.context in (f"STATIONS/{s}", f"STATIONS_MORE/{s}") for s in off)]
    if args.file:
        entries = [e for e in entries if e.file == args.file]
    if args.context:
        entries = [e for e in entries if e.context.startswith(args.context)]
    idents = sorted({e.identifier for e in entries})
    if args.rotate:
        today = date.today().toordinal() % 7
        idents = [i for i in idents if rotation_bucket(i) == today]
    if args.max_items:
        idents = idents[: args.max_items]
    wanted = set(idents)
    entries = [e for e in entries if e.identifier in wanted]
    print(f"Checking {len(entries)} references in {len(idents)} Archive items…", file=sys.stderr)

    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as pool:
        metas = dict(zip(idents, pool.map(lambda i: fetch_metadata(i, args.cache_days), idents)))

    issues: list[Issue] = []
    for e in entries:
        issues += evaluate(e, metas.get(e.identifier, {}))

    if args.fix_lengths:
        by_key = {(e.file, e.context, e.key or e.src): e for e in entries}
        n = apply_length_fixes(issues, by_key)
        print(f"Corrected {n} length(s) in the data files.", file=sys.stderr)

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(report_markdown(issues, len(idents), len(entries)), encoding="utf-8")
    args.out.with_suffix(".json").write_text(json.dumps([asdict(i) for i in issues], indent=1), encoding="utf-8")
    errors = sum(i.level == "ERROR" for i in issues)
    warns = sum(i.level == "WARN" and i.code != "check_failed" for i in issues)
    print(f"{errors} broken, {warns} warnings. Report: {args.out}", file=sys.stderr)
    return 1 if errors or (args.fail_on == "warn" and warns) else 0


if __name__ == "__main__":
    sys.exit(main())
