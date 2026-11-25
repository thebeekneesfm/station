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
Input: the pull request the Release Manager opened (it gives you the link), with the release notes
as its description.
- [ ] All checks pass (site check; Archive check for changed lists; browser check if pages changed).
- [ ] Version tags were bumped for every changed script.
- [ ] I opened the changed pages from the branch locally (double-click the HTML file, or
      `python3 -m http.server` and visit http://localhost:8000) and they work.
- [ ] I click **Merge pull request** → **Confirm merge**. A minute or two later it's live; I check the
      live page once. (Don't want it? Click **Close pull request** instead; nothing changes on the site.)

## GATE 4: Approve social posts
Input: the "Social drafts for the week of ..." issue the Social Media Manager opens on Mondays (a
Windows notification pops up with its link when the run finishes), and the drafts it made in Metricool.
- [ ] Open each draft from the issue's links. Watch the clip; read the caption.
- [ ] Keep it: schedule it in Metricool (it publishes by itself at its time). Change the caption
      or time first if you like.
- [ ] Don't want it: delete the draft. Nothing is ever published without this step.
- [ ] **Tuesday and Friday: upload that day's YouTube video** from `C:/Users/hillk/Videos/Bees Knees YouTube/<date> .../`:
      `video.mp4`, `thumbnail.jpg`, and paste `title.txt`, `description.txt` and `tags.txt`. Made for kids: No.
- [ ] Close the issue when you're done.

## Weekly
- [ ] Glance at the open `site-health` issue (if there is one) and ask the House Manager to work through it.
- [ ] Decide on any "needs the Director" items.
- [ ] Monday: review the social drafts (GATE 4).
