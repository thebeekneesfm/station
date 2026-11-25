# The Monday social run. Windows Task Scheduler starts this every Monday morning (see CLAUDE.md,
# "Weekly social"). It brings its own copy of the repo up to date with main, then runs Claude Code
# headless with the Social Media Manager's routine. Nothing is published: the run only makes
# Metricool drafts and opens a "social-review" issue. If the run fails, it opens an issue saying so.
#
# The task runs this from its own copy of the repo, a folder next to your usual one made once with
#   git worktree add --detach ..\station-social-run origin/main
# so it never disturbs whatever branch you have checked out. The log goes in studio\reports\ there.
$run = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)   # the copy this script is in
$gh  = "C:\Program Files\GitHub CLI\gh.exe"

git -C $run fetch -q origin
git -C $run checkout -q --detach origin/main                   # PowerShell already read this file, so updating it is safe
Set-Location $run
New-Item -ItemType Directory -Force "studio\reports" | Out-Null
$log = "studio\reports\social-$(Get-Date -Format yyyy-MM-dd).log"

if (-not (Test-Path ".claude\agents\social-manager.md")) {
  & $gh issue create --label social-review --title "Monday social run skipped: the social agents aren't on main yet" `
    --body "The scheduled run found no .claude/agents/social-manager.md on main. Merge the social pipeline pull request."
  exit 1
}

$prompt = @"
You are the House Manager, running unattended (the Director is not here to answer questions).
Run the "Weekly social" routine for the week starting today, $(Get-Date -Format "dddd, MMMM d, yyyy").
Delegate to the social-manager agent (model sonnet), which uses the content-screener (model opus)
and the video-editor (model sonnet). Drafts only: never publish or schedule a non-draft post.
Don't ask questions: where you would ask, note it in the review issue instead. Finish when the
social-review issue is open, and print its link.
"@

claude -p $prompt --permission-mode auto --model opus *> $log
if ($LASTEXITCODE -ne 0) {
  & $gh issue create --label social-review --title "Monday social run failed ($(Get-Date -Format yyyy-MM-dd))" `
    --body "Claude Code exited with code $LASTEXITCODE. The log is $run\$log on the PC."
}
