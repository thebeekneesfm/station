"""Offline health check of the site's code and data (no internet needed).

    python studio/tools/site_check.py

Checks:
  * every JavaScript file parses (needs Node.js; skipped if it isn't installed)
  * pages load the same version of each shared script (?v= tags), so nobody gets a stale copy
  * every local image/file the data and pages point to exists, with the exact upper/lower case
    (GitHub Pages is case-sensitive even when your computer isn't)
  * every Archive audio/video entry has a sensible length, and no station repeats the same file
  * the Gramophone (78s) station only has recordings old enough to be public domain
  * titles that may break the content rules (diet pills, caricature mascots) are listed for a look;
    approve them once in studio/content-allowlist.json and they stop being flagged

Exit code 1 if anything is at ERROR level.
"""
from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
from collections import defaultdict
from dataclasses import asdict, dataclass
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from sitedata import REPO, STUDIO_DIR, load_entries, station_info, tracked_js  # noqa: E402

# Words that suggest an item may break the site's content rules (see studio/CONTENT_RULES.md).
FLAG_TERMS = {
    "diet pills": r"\b(diet pills?|reducing pills?|slimming|ayds|fat reducer)\b",
    "caricature mascots": r"\b(aunt jemima|rastus|frito bandito|sambo)\b",
}
# Rules that apply to every title (shows included), not just ads.
ALL_TITLE_RULES = {"caricature mascots"}
AD_CONTEXT_RE = re.compile(r"(^ADS$|^TV_ADS|/ads$|commercial)", re.I)


@dataclass
class Finding:
    level: str
    check: str
    where: str
    message: str


def recording_cutoff_year(today: date | None = None) -> int:
    """US sound recordings: published 1925 or earlier are public domain in 2026; one more year each Jan 1."""
    today = today or date.today()
    return today.year - 101


def works_cutoff_year(today: date | None = None) -> int:
    """US films, books, art, print ads: published 1930 or earlier are public domain in 2026."""
    today = today or date.today()
    return today.year - 96


# ---------- individual checks (each returns findings) ----------

def check_js_syntax(repo: Path = REPO) -> list[Finding]:
    node = shutil.which("node")
    if not node:
        return [Finding("INFO", "js-syntax", "-", "Node.js isn't installed, so JavaScript syntax wasn't checked.")]
    out = []
    for p in tracked_js(repo):
        r = subprocess.run([node, "--check", str(p)], capture_output=True, text=True)
        if r.returncode != 0:
            msg = (r.stderr.strip().splitlines() or ["syntax error"])
            out.append(Finding("ERROR", "js-syntax", p.relative_to(repo).as_posix(), " / ".join(msg[:3])[:300]))
    return out


SCRIPT_TAG_RE = re.compile(r'<(?:script|link)[^>]+(?:src|href)="([^"?#]+\.(?:js|css))\?v=([^"]+)"', re.I)


def check_version_tags(repo: Path = REPO) -> list[Finding]:
    seen: dict[str, dict[str, list[str]]] = defaultdict(lambda: defaultdict(list))
    for page in sorted(repo.glob("*.html")):
        for path, ver in SCRIPT_TAG_RE.findall(page.read_text(encoding="utf-8", errors="replace")):
            seen[path][ver].append(page.name)
    out = []
    for path, versions in sorted(seen.items()):
        if len(versions) > 1:
            newest = max(versions)
            stale = [f"{', '.join(pages)} (v={v})" for v, pages in sorted(versions.items()) if v != newest]
            out.append(Finding("WARN", "version-tags", path,
                               f"Pages load different versions. Newest is v={newest}; stale: {'; '.join(stale)}. "
                               f"Visitors to the stale pages may get an old cached copy."))
    return out


ATTR_RE = re.compile(r'(?:src|href|poster)="([^"#?]+)', re.I)
LOCAL_FIELDS = {  # data file: (regex for the field, prefix to add when the value is a bare file name)
    "art/records/records.js": (r'"cover"\s*:\s*"([^"]+)"', ""),
    "art/postcards/postcards.js": (r'"f"\s*:\s*"([^"]+)"', "art/postcards/"),
    "art/greetings/greetings.js": (r'"(?:front|inside)"\s*:\s*"([^"]+)"', "art/greetings/"),
    "stations.js": (r'"card"\s*:\s*"([^"]+)"', ""),
}


def _tracked_files(repo: Path) -> set[str]:
    try:
        out = subprocess.check_output(["git", "-C", str(repo), "ls-files"], text=True, stderr=subprocess.DEVNULL)
        return set(out.splitlines())
    except (OSError, subprocess.CalledProcessError):
        return {p.relative_to(repo).as_posix() for p in repo.rglob("*") if p.is_file()}


def check_local_files(repo: Path = REPO, entries=None) -> list[Finding]:
    files = _tracked_files(repo)
    lower = {f.lower(): f for f in files}
    off_cards = {f"art/cards/{k}" for k, v in station_info(repo).items() if v["off"]}
    refs: dict[str, str] = {}  # path -> where it was referenced
    for e in entries if entries is not None else load_entries(repo):
        if e.kind == "local":
            refs.setdefault(e.src.lstrip("./"), e.file)
    for rel, (pat, prefix) in LOCAL_FIELDS.items():
        p = repo / rel
        if p.exists():
            for v in re.findall(pat, p.read_text(encoding="utf-8")):
                if not v.startswith(("http:", "https:", "data:")):
                    refs.setdefault(v if v.startswith("art/") or not prefix else prefix + v, rel)
    for page in repo.glob("*.html"):
        for v in ATTR_RE.findall(page.read_text(encoding="utf-8", errors="replace")):
            if v.startswith(("http:", "https:", "//", "mailto:", "data:", "javascript:", "tel:")) or "${" in v or "{{" in v:
                continue
            if "'" in v or "+" in v or "(" in v or " " in v.strip():  # built by page code, not a real path
                continue
            if "." in v.rsplit("/", 1)[-1]:
                refs.setdefault(v.lstrip("./"), page.name)
    out = []
    for path, where in sorted(refs.items()):
        if path in files:
            continue
        if path.lower() in lower:
            out.append(Finding("ERROR", "local-files", where,
                               f"'{path}' only exists as '{lower[path.lower()]}'. Upper/lower case must match "
                               f"exactly online."))
        elif any(path.startswith(c) for c in off_cards):
            out.append(Finding("INFO", "local-files", where, f"'{path}' is missing, but that station is off."))
        else:
            out.append(Finding("ERROR", "local-files", where, f"'{path}' doesn't exist."))
    return out


def check_entries(entries, today: date | None = None, info: dict | None = None) -> list[Finding]:
    info = info if info is not None else station_info()
    off = {k for k, v in info.items() if v["off"]}
    out = []
    seen = defaultdict(list)
    cutoff = recording_cutoff_year(today)
    for e in entries:
        if e.kind != "media":
            continue
        station = e.context.split("/")[1] if e.context.startswith(("STATIONS/", "STATIONS_MORE/")) else ""
        if station in off:
            continue
        where = f"{e.file} → {e.context}"
        if e.length is None or e.length <= 0:
            out.append(Finding("ERROR", "lengths", where, f"'{e.title or e.filename}' has no length, so the clock can't "
                                                          f"schedule it."))
        elif e.length < 5:
            out.append(Finding("WARN", "lengths", where, f"'{e.title or e.filename}' is only {e.length}s long."))
        seen[(e.context, e.src)].append(e)
        if station == "gramophone":
            m = re.search(r"(1[89]\d\d)", e.year or "")
            if not m:
                out.append(Finding("WARN", "rights", where, f"'{e.title}' has no recording year; Gramophone must be "
                                                            f"{cutoff} or earlier."))
            elif int(m.group(1)) > cutoff:
                out.append(Finding("ERROR", "rights", where, f"'{e.title}' ({m.group(1)}) is newer than {cutoff}; "
                                                             f"it isn't public domain yet."))
    for (ctx, src), dupes in seen.items():
        if len(dupes) > 1:
            out.append(Finding("WARN", "duplicates", f"{dupes[0].file} → {ctx}",
                               f"'{dupes[0].title or dupes[0].filename}' is in this list {len(dupes)} times."))
    return out


def load_allowlist(path: Path = STUDIO_DIR / "content-allowlist.json") -> set[str]:
    if not path.exists():
        return set()
    data = json.loads(path.read_text(encoding="utf-8"))
    return {str(x.get("title", "")).lower() for x in data.get("approved", []) if isinstance(x, dict)}


def check_content_flags(entries, allow: set[str] | None = None) -> list[Finding]:
    allow = allow if allow is not None else load_allowlist()
    out, done = [], set()
    for e in entries:
        if e.kind not in ("media", "local", "image") or not e.title:
            continue
        if e.title.lower() in allow or (e.file, e.title) in done:
            continue
        print_ad = e.file == "ads.js"
        tv_ad = bool(AD_CONTEXT_RE.search(e.context)) and not print_ad
        for rule, pat in FLAG_TERMS.items():
            if not (tv_ad or print_ad or rule in ALL_TITLE_RULES):
                continue
            if re.search(pat, e.title, re.I):
                if tv_ad:
                    level, msg = "WARN", f"TV commercial '{e.title}' breaks the {rule} rule for commercials."
                elif print_ad:
                    level, msg = "INFO", f"Print ad '{e.title}' may break the {rule} rule."
                else:
                    level, msg = "WARN", f"'{e.title}' may be a caricature (content rules)."
                out.append(Finding(level, "content", f"{e.file} → {e.context}",
                                   msg + " Take it down, or add it to studio/content-allowlist.json if it's fine."))
                done.add((e.file, e.title))
                break
    return out


# ---------- report ----------

def run_all(repo: Path = REPO) -> list[Finding]:
    entries = load_entries(repo)
    return (check_js_syntax(repo) + check_version_tags(repo) + check_local_files(repo, entries)
            + check_entries(entries, info=station_info(repo)) + check_content_flags(entries))


def report_markdown(findings: list[Finding]) -> str:
    counts = {lvl: sum(f.level == lvl for f in findings) for lvl in ("ERROR", "WARN", "INFO")}
    lines = [f"# Site check: {date.today().isoformat()}", "",
             f"**{counts['ERROR']}** errors, **{counts['WARN']}** warnings, **{counts['INFO']}** notes.", ""]
    if not findings:
        lines.append("All clear.")
    names = {"js-syntax": "JavaScript", "version-tags": "Version tags", "local-files": "Missing files",
             "lengths": "Lengths", "duplicates": "Repeats", "rights": "Rights", "content": "Content rules"}
    for level in ("ERROR", "WARN", "INFO"):
        group = [f for f in findings if f.level == level]
        if not group:
            continue
        lines += ["", f"## {'Errors' if level == 'ERROR' else 'Warnings' if level == 'WARN' else 'Notes'}", "",
                  "| Check | Where | What |", "|---|---|---|"]
        for f in group[:300]:
            lines.append(f"| {names.get(f.check, f.check)} | `{f.where}` | {f.message.replace('|', '/')} |")
        if len(group) > 300:
            lines.append(f"| … | | and {len(group) - 300} more (see the JSON report) |")
    return "\n".join(lines) + "\n"


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--fail-on", choices=["error", "warn"], default="error",
                    help="exit with 1 on errors only (default), or on warnings too")
    ap.add_argument("--out", type=Path, default=STUDIO_DIR / "reports" / "site-check.md")
    args = ap.parse_args(argv)
    findings = run_all()
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(report_markdown(findings), encoding="utf-8")
    args.out.with_suffix(".json").write_text(json.dumps([asdict(f) for f in findings], indent=1), encoding="utf-8")
    errors = sum(f.level == "ERROR" for f in findings)
    warns = sum(f.level == "WARN" for f in findings)
    print(f"{errors} errors, {warns} warnings. Report: {args.out}", file=sys.stderr)
    return 1 if errors or (args.fail_on == "warn" and warns) else 0


if __name__ == "__main__":
    sys.exit(main())
