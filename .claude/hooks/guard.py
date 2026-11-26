"""Claude Code safety hook (PreToolUse): blocks the actions this studio never allows, however the
command is worded. Deny rules in settings.json are a first line; Anthropic's docs say they aren't
a security boundary, so the rules that must never break are checked here too.

Exit code 2 blocks the action and tells Claude why. Anything else lets normal permissions decide.
Edit the lists below only with the Director's OK (this file is itself protected).
"""
import json
import re
import sys

# ---- studio rules (filled in per studio) ----
PROTECTED_PATHS = ['\\.claude/settings\\.json', '\\.claude/hooks/']          # files/folders agents must never change (regex, forward slashes)
BLOCKED_COMMANDS = []           # (regex on the normalised command, reason)
BLOCKED_CODE = []                  # (regex on text being written into a file, reason, allowed file regex)

COMMON_BLOCKED = [
    (r"\bgit\b.*\bpush\b.*(\s|:|/)(main|master)\b", "Pushing to main publishes it. Push your own branch; the Director merges."),
    (r"\bgit\b.*\bpush\b.*(\s--force\b|\s-f\b|\s\+)", "Force-pushing can destroy work. Ask the Director."),
    (r"\bgit\b.*\breset\b.*--hard", "git reset --hard throws away work. Ask the Director first."),
    (r"\bgit\b.*\b(clean\b.*-[a-z]*f|stash\b.*\b(drop|clear)\b|branch\b.*\s-D\b)", "This deletes work for good. Ask the Director first."),
    (r"\bgh\b.*\bpr\b.*\b(merge|close|review)\b", "Only the Director merges, closes or approves pull requests."),
    (r"\bgh\b\s+(api|auth|repo|secret|release|workflow)\b", "GitHub admin commands are the Director's."),
    (r"(\brm\b|remove-item|\brmdir\b|\brd\b|\bdel\b)(?=.*(\s-[a-z]*r[a-z]*\b|-recurse|\s/s\b))(?=.*(\s(\.|\./|\*|~|/|\.\.|[a-z]:[\\/]?)(\s|$)|\.git\b))",
     "Recursive delete of a whole folder or the repo. Ask the Director."),
    (r"\b(printenv|get-childitem\s+env:|gci\s+env:|ls\s+env:|dir\s+env:)|^\s*(env|set)\s*$|os\.environ|getenv\(|\$env:[a-z_]*(key|secret|token|password)", "Never read or print keys or environment secrets."),
]

WRITE_TOOLS = {"Edit", "Write", "MultiEdit", "NotebookEdit"}
WRITEISH = r"(>|\btee\b|\bsed\b.*\s-i|\bmv\b|\bcp\b|\brm\b|\bdel\b|remove-item|set-content|add-content|out-file|copy-item|move-item|\bperl\b.*-i|truncate|git\s+(checkout|restore)\b)"


def norm_path(p: str) -> str:
    return (p or "").replace("\\", "/")


def block(reason: str) -> None:
    print(f"Blocked by the studio safety check: {reason}", file=sys.stderr)
    sys.exit(2)


def main() -> None:
    try:
        data = json.load(sys.stdin)
    except ValueError:
        return
    tool = data.get("tool_name", "")
    inp = data.get("tool_input") or {}

    if tool in WRITE_TOOLS:
        path = norm_path(inp.get("file_path") or inp.get("notebook_path") or "")
        for pat in PROTECTED_PATHS:
            if re.search(pat, path, re.I):
                block(f"{path} is protected. Only the Director changes it. Write a recommendation instead.")
        text = "\n".join(str(inp.get(k, "")) for k in ("content", "new_string", "new_source"))
        for e in inp.get("edits") or []:
            text += "\n" + str(e.get("new_string", ""))
        for pat, reason, allowed in BLOCKED_CODE:
            if re.search(pat, text) and not re.search(allowed, path):
                block(reason)
        return

    if tool == "Bash" or tool == "PowerShell":
        cmd = " ".join(str(inp.get("command", "")).split()).lower()
        for pat, reason in BLOCKED_COMMANDS + COMMON_BLOCKED:
            if re.search(pat, cmd):
                block(reason)
        if re.search(WRITEISH, cmd):
            for pat in PROTECTED_PATHS:
                if re.search(pat.lower(), cmd.replace("\\", "/")):
                    block("That command could change a protected file. Only the Director changes it.")
        return


if __name__ == "__main__":
    main()
