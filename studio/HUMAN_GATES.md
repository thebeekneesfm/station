# Your gates

The agents check, search, fix and prepare. These decisions are always yours.

## GATE 1: Approve new content
Input: `studio/candidates/<item>.json`, screened by the Content Screener.
- [ ] Fits the station or channel (theme, era, sound or picture quality).
- [ ] Every entry is "ok" from the Screener; anything "needs the Director" has been decided.
- [ ] Rights: nothing too new (78s), and post-1930 films/TV/comics checked.
- [ ] Approve the list; the Signal Checker adds it on a branch and checks every length.

## GATE 2: Content decisions
Input: content flags in the site-health issue or `studio/reports/site-check.md`.
- [ ] Take it down (delete the line, or `"hide"` a magazine page), or
- [ ] Keep it, and add it to `studio/content-allowlist.json` with a reason so it stops being flagged.

## GATE 3: Publish (merge to `main`)
Input: the branch and `studio/reports/release-notes.md` from the Release Manager.
- [ ] All checks pass (site check; Archive check for changed lists; browser check if pages changed).
- [ ] Version tags were bumped for every changed script.
- [ ] I opened the changed pages from the branch locally (double-click the HTML file, or
      `python3 -m http.server` and visit http://localhost:8000) and they work.
- [ ] I merge it. A minute or two later it's live; I check the live page once.

## Weekly
- [ ] Glance at the open `site-health` issue (if there is one) and ask the House Manager to work through it.
- [ ] Decide on any "needs the Director" items.
