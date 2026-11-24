# The Bee's Knees Studio

A small team of Claude Code agents, plus tested tools and a daily automatic check, that keep
TheBeesKnees.fm healthy and growing:

| Agent | What it does |
|---|---|
| **Site Doctor** | finds and fixes bugs: script errors, broken pages, missing files, stale version tags |
| **Signal Checker** | makes sure every Archive file still exists and its length is right (so the shared clock doesn't drift), fixes lengths, finds replacements |
| **Archive Scout** | finds more radio, 78s, cartoons, TV, films, comics and magazines that fit a station or channel, in the site's exact data format |
| **Content Screener** | checks new and flagged content against `CONTENT_RULES.md` |
| **Release Manager** | bumps version tags, runs every check, writes release notes and the pull request |

The main Claude conversation is the **House Manager**: it runs on the strongest model, gives each
agent a model that fits the task, and stops at your gates (`HUMAN_GATES.md`). Nothing goes live
until you merge it.

## What's in the box
```
CLAUDE.md                          instructions for the House Manager
.claude/agents/*.md                the five agents
.github/workflows/site-health.yml  the daily automatic check (opens/closes a "site-health" issue)
studio/
  tools/sitedata.py        reads every data file the site uses (23,000+ media references)
  tools/site_check.py      offline check: JS syntax, version tags, missing files, lengths, rights, content rules
  tools/check_archive.py   asks the Archive whether every file still exists, with the right length
  tools/find_more.py       searches the Archive and builds ready-to-review entries
  tools/browser_check.mjs  opens every page in a real browser; errors, missing files, screenshots
  CONTENT_RULES.md         the site's content standards and rights rules
  HUMAN_GATES.md           your decisions
  content-allowlist.json   flagged items you've decided are fine
  agent-station.json       room plan for the cozy house view
  candidates/              the Scout's finds, waiting for review
  reports/                 the latest reports (not committed)
  tests/                   tests for the tools (pytest)
```

## Set up (once)
1. Copy everything in this kit into the root of the `station` repository (next to `index.html`):
   `CLAUDE.md`, the `.claude` folder, the `studio` folder and `.github/workflows/site-health.yml`.
   (The repo already has a `.github/workflows` folder; just add the new file.)
2. Commit and push to a branch, open a pull request, and merge it. The daily check starts the next
   morning; to run it now, open the repo's **Actions** tab → "Site health check" → **Run workflow**.
3. On your computer you need Python 3 (already used by the site) and, for the browser check,
   Node.js plus Playwright: `npm install --no-save playwright && npx playwright install chromium`.
4. Open Claude Code in the repo (`claude`), and try: *"Run the site check and tell me what needs
   attention."*

## Using the tools yourself
```bash
python3 studio/tools/site_check.py                          # offline check, ~10 seconds
python3 studio/tools/check_archive.py --context STATIONS/noir   # one station against the Archive
python3 studio/tools/check_archive.py --rotate              # today's seventh of everything
python3 studio/tools/check_archive.py --fix-lengths         # also correct wrong lengths (use a branch!)
python3 studio/tools/find_more.py search "X Minus One" --collection oldtimeradio
python3 studio/tools/find_more.py item OTRR_X_Minus_One_Singles --station scifi
node studio/tools/browser_check.mjs                         # every page, in Chromium
```
Reports land in `studio/reports/`. Every tool explains itself with `--help`.

## The daily check
Every morning a free GitHub Action runs the site check and checks a seventh of the Archive files
(so all of them each week), and on Mondays opens every page in a browser. If something needs
attention it opens one issue labelled **site-health** (and adds to it on later days); when all is
well again it closes it. Reports and screenshots are attached to each run for two weeks.
The repository is public, so the issue is public too; it only contains site information.

## Watching the team in the cozy house
Clone your `agent-station` repo next to this one (so both folders sit side by side), then, from this repo:
```bash
python ../agent-station/install.py --project .        # once: connects Claude Code here to the house
python ../agent-station/server/station_server.py --project . --config studio/agent-station.json
```
and open http://127.0.0.1:8765.
The Signal Checker works in the study, the Site Doctor in the workshop, the Content Screener in
the sunroom, the Archive Scout in the writing nook and the Release Manager in the kitchen.

## Tests
`pip install pytest`, then `python3 -m pytest studio/tests`. The tests use a small fake copy of
the site in `studio/tests/fixtures/site/`, so they never touch the real data or the internet.
