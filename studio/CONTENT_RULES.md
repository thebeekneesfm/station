# Content rules

Taken from the site's README, in one place for the agents. The Director can change these; the
README stays the source of truth.

## Never on the site
- **Racist caricature, slurs and dialect.** Whole shows were left out for this (Jack Benny's
  Rochester, Howdy Doody's Chief Thunderthud, Kit Carson's El Toro). Comics are checked page by page
  before they go on a shelf. **Exception (the Director, November 24, 2026):** an episode with slurs
  or dialect may air if it carries a `"warning"` (content warning) the listener sees while it plays.
  First used for Madison on the Air; the Director decides each case at GATE 1.
- **TV commercials for diet pills**, and commercials with caricature brand mascots (Aunt Jemima and
  the like). Commercials are checked frame by frame. (Print ads like these are listed as notes by
  the site check, for the Director to decide.)

## Allowed
- **Tobacco and alcohol ads**, TV commercials and print ads alike (the Director's decision,
  November 24, 2026).

## Needs a decision by the Director
- **Anything flagged by the site check** that's actually fine (e.g. a show title that happens to
  contain a brand word): once the Director agrees, add it to `studio/content-allowlist.json` with
  the reason, and it stops being flagged.
- **Whole magazines** go up whole, with a note asking readers to report pages; take a page down with
  `"hide": [n]` in `art/rack/rack.js` (the README explains page numbers).

## Rights
- **Sound recordings (78s):** US public domain if recorded 1925 or earlier (as of 2026); 1926 joins on
  January 1, 2027, and so on. The site check and the Scout's tools enforce this automatically.
- **Films, TV, comics, magazines, print ads:** published 1930 or earlier are public domain in the US
  (as of 2026). Later works are only public domain if the copyright wasn't renewed (or no notice).
  The Archive's "public domain" label is often wrong: check, and when unsure, ask.
- **Old-time radio shows:** a grey area the site accepts (see the README's "A note on rights").
- **Trademarks** outlive copyright: never make the site look like a brand's own product.
- **Take-downs:** if a rights holder asks, the item comes off; the About page explains how.

## When something can't be fully checked
Agents can read titles, descriptions, reviews and sample pages, but can't watch hundreds of hours.
They must say what they checked and mark the rest "needs the Director". Both the TV and Drive-In
pages invite viewers to email anything that shouldn't be there.
