# First health check of TheBeesKnees.fm (November 24, 2026)

Run by the studio's tools against the `station` repository (commit `cdab836`). The Archive itself
couldn't be reached from the build environment, so Archive files and lengths weren't checked yet;
the daily GitHub Action will do that.

## The site is in good shape
- All 38 JavaScript files parse without errors.
- All 20 visitor pages open in Chromium without JavaScript errors of their own.
- All ~890 local images the data files point to exist, with the exact upper/lower case.
- Every audio/video entry on the live stations and channels has a length.
- The Gramophone station's 438 records are all dated 1925 or earlier.
- 23,027 media references across 10,900 Archive items were read and catalogued.

## Worth fixing
| What | Where | Why it matters | Fix |
|---|---|---|---|
| ~~Stale script version~~ **fixed** | `puzzles.html` loaded `ads.js?v=1`; other pages use `v=20261102b` | Puzzle visitors could get an old cached copy of the ads | changed to `v=20261102b` in the studio setup pull request |
| ~~Stale script version~~ **fixed** | `index.html` loaded `house-ads.js?v=1`; `obs.html` uses `v=2` | Radio visitors could get an old copy of the house ads | changed to `v=2` in the studio setup pull request |
| ~~Tobacco commercials on TV~~ **decided: kept** | Christmas channel ads in `art/screen/tv-data.js`: "Lucky Strike: Merry Christmas", "Tareyton: The Tareyton Twosome", "Christmas in Marlboro Country" | The README said tobacco commercials were left out | the Director allowed tobacco and alcohol ads on November 24, 2026; README and content rules updated |
| Pages that fail if a CDN is down | `obs.html`, `jukebox-obs.html`, `puzzle-together.html` stop with "Cannot read properties of undefined (reading 'createClient')" when the Supabase library from cdn.jsdelivr.net doesn't load | A CDN hiccup breaks the whole page instead of just chat/counters | check that the library loaded before using it |

## Decisions for you
- ~~**Print ads for tobacco and alcohol** in the ad gallery (`ads.js`)~~ **decided: kept.** Tobacco
  and alcohol ads are allowed on TV and in print (the Director, November 24, 2026).
- **A 4.7-second "Coming Attractions" clip** at the Drive-In (`art/screen/drivein-data.js`): probably
  a title card and fine, but worth a look.

## Just so you know
- Every radio visit requests `art/fonts/your-font.woff2`, the placeholder name in `skin.js`, which
  doesn't exist. Harmless; it goes away once you add your handwriting font (or remove that line).
- `art/background.png`, `art/logo.png`, `art/player.png`, `art/guide-frame.png` and
  `art/tv/crime.png` are your optional art slots: the built-in look is used until you draw them.
- Six station cards are missing, all for stations that are switched off.
