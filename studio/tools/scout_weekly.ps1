# The weekly scouting run, and the New Year's Day public-domain run. Windows Task Scheduler starts
# this every Wednesday at 9 AM, and with -NewYear every January 1 (see CLAUDE.md, "Weekly scouting").
# It brings its own copy of the repo up to date with main, then runs Claude Code headless. Nothing
# goes on the site: the run pushes candidate lists to a studio/scout-<date> branch and opens a
# "Scouting finds" issue for GATE 1. A Windows notification pops up with the issue's link.
#
# The task runs this from its own copy of the repo, a folder next to your usual one made once with
#   git worktree add --detach ..\station-scout-run origin/main
# so it never disturbs whatever branch you have checked out. The log goes in studio\reports\ there.
param([switch]$NewYear)
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
$kind = if ($NewYear) { "newyear" } else { "scout" }
$log = "studio\reports\$kind-$(Get-Date -Format yyyy-MM-dd).log"

$routine = if ($NewYear) { "the New Year's Day part of the ""Weekly scouting"" routine (what entered the public domain today)" }
           else { "the ""Weekly scouting"" routine" }
$prompt = @"
You are the House Manager, running unattended (the Director is not here to answer questions).
Run $routine from CLAUDE.md, today, $(Get-Date -Format "dddd, MMMM d, yyyy").
Delegate to the archive-scout agent (model sonnet) and the content-screener agent (model opus).
Nothing goes on the site: never touch main and never edit the site's data files. Don't ask
questions: where you would ask, note it in the issue instead. Finish when the issue is open.
The last line of your reply must be: REVIEW ISSUE: <its link>
"@

claude -p $prompt --permission-mode auto --model opus *> $log
$code = $LASTEXITCODE
$issue = Select-String -Path $log -Pattern "$repo/issues/\d+" -AllMatches | ForEach-Object { $_.Matches.Value } | Select-Object -Last 1
$what = if ($NewYear) { "New public-domain finds" } else { "Scouting finds" }
if ($code -eq 0 -and $issue) {
  Show-Note "Bee's Knees: $what ready" "New candidates for the site are screened. Open the issue to approve them (GATE 1)." $issue
} else {
  & $gh issue create --title "$what run failed ($(Get-Date -Format yyyy-MM-dd))" `
    --body "Claude Code exited with code $code and no issue link. The log is $run\$log on the PC."
  Show-Note "Bee's Knees: $what run failed" "Open the issues page; the log is in station-scout-run\studio\reports." "$repo/issues"
}
