# The Monday social run. Windows Task Scheduler starts this every Monday at 8 AM (see CLAUDE.md,
# "Weekly social"). It brings its own copy of the repo up to date with main, then runs Claude Code
# headless with the Social Media Manager's routine. Nothing is published: the run only makes
# Metricool drafts and opens a "Social drafts" issue. When it finishes, a Windows notification pops
# up with the issue's link (GitHub doesn't email you about issues your own account opens).
#
# The task runs this from its own copy of the repo, a folder next to your usual one made once with
#   git worktree add --detach ..\station-social-run origin/main
# so it never disturbs whatever branch you have checked out. The log goes in studio\reports\ there.
$run  = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)   # the copy this script is in
$gh   = "C:\Program Files\GitHub CLI\gh.exe"
$repo = "https://github.com/thebeekneesfm/station"

function Show-Note([string]$title, [string]$text, [string]$url) {
  [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
  [Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime] | Out-Null
  $e = { param($s) [Security.SecurityElement]::Escape($s) }
  $xml = New-Object Windows.Data.Xml.Dom.XmlDocument
  $xml.LoadXml("<toast activationType='protocol' launch='$(& $e $url)' scenario='reminder'><visual><binding template='ToastGeneric'>" +
    "<text>$(& $e $title)</text><text>$(& $e $text)</text></binding></visual><actions>" +
    "<action content='Open' activationType='protocol' arguments='$(& $e $url)'/><action content='Later' activationType='system' arguments='dismiss'/></actions></toast>")
  $app = '{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\WindowsPowerShell\v1.0\powershell.exe'
  [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($app).Show([Windows.UI.Notifications.ToastNotification]::new($xml))
}

git -C $run fetch -q origin
git -C $run checkout -q --detach origin/main                   # PowerShell already read this file, so updating it is safe
Set-Location $run
New-Item -ItemType Directory -Force "studio\reports" | Out-Null
$log = "studio\reports\social-$(Get-Date -Format yyyy-MM-dd).log"

if (-not (Test-Path ".claude\agents\social-manager.md")) {
  Show-Note "Bee's Knees: Monday social run skipped" "The social agents aren't on main yet. Merge the social pipeline pull request." "$repo/pulls"
  exit 1
}

$prompt = @"
You are the House Manager, running unattended (the Director is not here to answer questions).
Run the "Weekly social" routine for the week starting today, $(Get-Date -Format "dddd, MMMM d, yyyy").
Delegate to the social-manager agent (model sonnet), which uses the content-screener (model opus)
and the video-editor (model sonnet). Drafts only: never publish or schedule a non-draft post.
Don't ask questions: where you would ask, note it in the review issue instead. Finish when the
review issue is open. The last line of your reply must be: REVIEW ISSUE: <its link>
"@

claude -p $prompt --permission-mode auto --model opus *> $log
$issue = Select-String -Path $log -Pattern "$repo/issues/\d+" -AllMatches | ForEach-Object { $_.Matches.Value } | Select-Object -Last 1
if ($LASTEXITCODE -eq 0 -and $issue) {
  Show-Note "Bee's Knees: social drafts ready" "This week's drafts are in Metricool. Open the issue to review them." $issue
} else {
  & $gh issue create --title "Monday social run failed ($(Get-Date -Format yyyy-MM-dd))" `
    --body "Claude Code exited with code $LASTEXITCODE and no review issue link. The log is $run\$log on the PC."
  Show-Note "Bee's Knees: Monday social run failed" "Open the issues page; the log is in station-social-run\studio\reports." "$repo/issues"
}
