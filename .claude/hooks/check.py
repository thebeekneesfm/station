"""Claude Code "prove it" hook (Stop): when Claude finishes a reply with code changes on this branch,
run the studio's checks. If any fail, Claude is sent back to fix them (or explain them to the
Director) instead of saying "done". Unchanged code: nothing runs, so it stays quick.
"""
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CODE = re.compile('\\.(js|html|css|py|json|mjs)$', re.I)


def changed_files() -> list[str]:
    out = set()
    for args in (["git", "diff", "--name-only", "HEAD"], ["git", "ls-files", "--others", "--exclude-standard"],
                 ["git", "diff", "--name-only", "origin/main...HEAD"]):
        try:
            r = subprocess.run(args, cwd=ROOT, capture_output=True, text=True, timeout=30)
            out.update(l.strip() for l in r.stdout.splitlines() if l.strip())
        except (OSError, subprocess.SubprocessError):
            pass
    return sorted(f for f in out if CODE.search(f))


def python_exe() -> str:
    for p in (ROOT / ".venv" / "Scripts" / "python.exe", ROOT / ".venv" / "bin" / "python"):
        if p.exists():
            return str(p)
    return sys.executable


def run(name: str, args: list[str], timeout: int = 240, bad_output: str | None = None) -> str | None:
    """Run one check; return a failure message, or None if it passed."""
    try:
        r = subprocess.run(args, cwd=ROOT, capture_output=True, text=True, timeout=timeout)
    except FileNotFoundError:
        return None                                 # tool not installed here: skip, don't block
    except subprocess.TimeoutExpired:
        return f"{name}: took longer than {timeout}s"
    out = (r.stdout + r.stderr).strip()
    if r.returncode != 0 or (bad_output and re.search(bad_output, out)):
        tail = "\n".join(out.splitlines()[-25:])
        return f"{name} FAILED (exit {r.returncode}):\n{tail}"
    return None


def checks(files):
    py = python_exe()
    return [run("Studio tests", [py, "-m", "pytest", "-q", "-p", "no:cacheprovider", "studio/tests"]),
            run("Site check", [py, "studio/tools/site_check.py"])]


def main() -> None:
    try:
        json.load(sys.stdin)
    except ValueError:
        pass
    files = changed_files()
    if not files:
        return
    failures = [f for f in checks(files) if f]
    if failures:
        print("Before you say this is done, the studio checks must pass:\n\n" + "\n\n".join(failures) +
              "\n\nFix the cause (never weaken, skip or delete a test to make it pass). If you can't, "
              "stop and tell the Director exactly what fails and why.", file=sys.stderr)
        sys.exit(2)


if __name__ == "__main__":
    main()
