"""The safety hook (.claude/hooks/guard.py) blocks what agents must never do, and allows normal work."""
import json
import subprocess
import sys
from pathlib import Path

import pytest

GUARD = Path(__file__).resolve().parents[2] / ".claude" / "hooks" / "guard.py"


def verdict(tool, **inp):
    r = subprocess.run([sys.executable, str(GUARD)], input=json.dumps({"tool_name": tool, "tool_input": inp}),
                       capture_output=True, text=True)
    return "block" if r.returncode == 2 else "allow"


@pytest.mark.parametrize("command", ["git push origin main", "git -C . push origin HEAD:main", "git push --force",
                                     "gh pr merge 9", "git reset --hard HEAD~3", "rm -rf ."])
def test_blocks(command):
    assert verdict("Bash", command=command) == "block"


@pytest.mark.parametrize("command", ["git push -u origin studio/new-station",
                                     "gh pr create --base main --head studio/x --title t --body-file f",
                                     "python3 studio/tools/site_check.py", "node studio/tools/browser_check.mjs"])
def test_allows(command):
    assert verdict("Bash", command=command) == "allow"


def test_files():
    assert verdict("Edit", file_path="/s/station/radio.js", new_string="x") == "allow"
    assert verdict("Edit", file_path="/s/station/.github/workflows/site-health.yml", new_string="x") == "block"
    assert verdict("Edit", file_path="C:\\s\\station\\.claude\\settings.json", new_string="{}") == "block"
