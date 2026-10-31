# Your old-time radio station

A web radio that plays old-time radio shows and 78s straight from the Internet Archive, on a shared clock like Spelunkr. Everyone tuned to the same station hears the same moment, and there's no streaming server.

Every piece you see is your own drawing. Until you add art, each piece shows as a dashed box with its name, file name and size.

## Try it

Double-click `index.html`. Press **Space** (or click the power switch) to turn it on.

| Key | Does |
|---|---|
| Space | Power on/off |
| ← → | Previous / next station |
| ↑ ↓ | Volume |
| E | Layout mode |

The knobs work too. Click the tuning knob to jump stations, or drag it to sweep the dial through the static. Drag or scroll the volume knob. Clicking anywhere on the dial tunes the needle there.

## Drawing the radio

1. Open `art-templates/layout-guide.png` in Procreate as a reference layer. It's the whole stage (1600 × 1000) with every piece boxed and labeled.
2. Draw each piece on its own layer.
3. Export each piece as a **transparent PNG** at the size on its template, with the same file name, into the `art` folder. For example, `art-templates/cabinet.png` is 840 × 880, so your drawing goes to `art/cabinet.png`.
4. Refresh the page. Your drawing replaces the dashed box.

The `art-templates` folder has a blank, correctly sized PNG for each piece if you'd rather draw on those directly.

**Pieces that move:**
- **Knobs** spin around their center, so draw them centered in a square.
- **The needle** slides along the dial. Draw it as a thin upright piece. In layout mode, drag it to move its whole track.
- **Lights and glows** have a "Shows when" setting. `light-on.png` and `grille-glow.png` only appear while the radio is on, and `light-off.png` only while it's off. Draw the glow on its own so it can fade in over the plain version.
- **Station cards** go in `art/cards/`, one per station (`chills.png`, `noir.png`, `suspense.png`, `tomorrow.png`, `outwest.png`, `laughs.png`, `hotwax.png`). The card swaps when you change stations.

**Static pieces, the easy way:** `background` and `grain` are full-stage "plates". Draw them at 1600 × 1000 and they're already in position. You can do this for anything that doesn't move. Make a new piece with x 0, y 0, width 1600, height 1000, type `plate`, and draw it in place on the full canvas.

**Text** (show name, episode, clock, coming-up list) is live, so it's typed rather than drawn. To make it look like your hand lettering, turn your handwriting into a font (Calligraphr is the usual free route). Save it as `art/fonts/your-font.woff2`, or change the file name in `skin.js`. Custom fonts load once the site is online. Opened straight from your computer, some browsers block them and show a typewriter font instead.

**Static sound:** the radio makes its own tuning static. To use your own crackle recording, save it as `art/sounds/static.mp3`.

## Layout mode (press E)

- Drag any piece to move it. Drag its orange corner to resize, and hold Shift to keep the shape.
- Arrow keys nudge by 1 pixel. Shift+arrow nudges by 10.
- Bring forward / Send back changes what's on top.
- Add piece makes a new image layer. Give it a name and art file in the panel.
- Tick **Show pieces that only appear…** to see the on/off pieces at the same time.
- When it looks right, click **Copy skin.js**. Open `skin.js` in Notepad, select everything, paste, and save. Layout changes aren't saved until you do this.

## The skin file, piece by piece

Each piece in `skin.js` has `id`, `x`, `y`, `w`, `h`, and usually `src` (the art file). The optional settings are:

| Setting | What it does |
|---|---|
| `"type": "plate"` | Full-stage art. It disappears when the file is missing, instead of showing a box. |
| `"type": "knob", "bind": "volume"` or `"tuning"` | Spins. `"turn": [-140, 140]` sets how far, in degrees. |
| `"type": "needle", "track": {"from": 510, "to": 1090}` | Slides between those x positions. Add `"mode": "rotate", "pivot": [9, 130], "turn": [-60, 60]` for a swinging needle. |
| `"type": "button", "action": "power"` | Clickable. Actions: `power`, `next`, `prev`, `volup`, `voldown`, `dial`, `tune:chills` (jump to a station). |
| `"type": "card"` | Shows the current station's card art. |
| `"type": "ticker"` | A scrolling strip. `"show"`, `"speed"` (pixels per second), `font`, `size`, `color`. |
| `"type": "text", "bind": "…"` | Live text. Binds: `now.series`, `now.title`, `now.date`, `now.remaining`, `station.name`, `station.freq`, `station.blurb`, `clock`, `guide` (with `"count": 5`), `status`. Style with `font`, `size`, `color`, `align`, `lineHeight`, `uppercase`, `spacing`. Long titles shrink to fit. |
| `"when": "on"` | Only show at certain times: `on`, `off`, `playing`, `warming`, `between` (dial between stations), `lost` (a broken tape), `tuned`. Combine them with commas. |
| `"station": "chills"` | Only show on that station, for example a different dial glow per station. |
| `"frames": ["art/tube-1.png", "art/tube-2.png"], "fps": 6` | A looping animation, like flickering tubes or a turning record. |
| `"blend": "multiply"`, `"opacity": 0.35` | Overlay effects for grain, scratches and vignettes. |

`"words"` at the top level changes the status messages, for example `"words": { "off": "Turn the knob, darling", "lost": "Lost the signal. Back at {time}" }`.

To change the stage size, change `stage.width` and `stage.height`. A tall stage like 1000 × 1600 works for a phone-first layout.

## Stations

`stations.js` has seven stations, spread across the dial from left to right:

| Station | What's on | Loops every |
|---|---|---|
| Chills | Horror: The Weird Circle, The Witch's Tale, Quiet Please, The Hermit's Cave, Lights Out, Inner Sanctum, Hall of Fantasy, The Mysterious Traveler | about 24 hours |
| Noir | Philip Marlowe, Sam Spade, Pat Novak, Richard Diamond, Johnny Dollar, Box 13, Broadway Is My Beat | about 23 hours |
| Suspense | Suspense, Escape, The Whistler, The Shadow | about 13 hours |
| Tomorrow | Science fiction: X Minus One, Dimension X, 2000 Plus, Exploring Tomorrow | about 12 hours |
| Out West | Gunsmoke, Frontier Gentleman, Fort Laramie, The Six Shooter, Have Gun – Will Travel | about 15 hours |
| Laughs | Jack Benny, Fibber McGee and Molly, Burns and Allen, The Great Gildersleeve, Our Miss Brooks | about 16 hours |
| Early 78s | 97 jazz, blues and dance band sides from 1917–1925 | about 5 hours |

The shows take turns, so you don't get six Gunsmokes in a row. To add shows or build a new station, open `builder.html`, paste Archive links, tick what you want, and copy the result into `stations.js`.

Each station has:
- `dial`: where it sits on the dial, from 0 (left) to 1 (right). `art-templates/layout-guide.png` marks each station's spot under the dial, so you can letter your numbers in the right places. `freq` is the number shown for it.
- `epoch`: the moment the station "started broadcasting". The schedule counts forward from there.
- `tracks`: the playlist. `length` is in seconds and has to be right for the clock to line up. The builder fills it in for you.
- `sound`: cleanup settings for that station (see below).

If the Archive takes a file down, that slot plays static with "Lost the signal" until the next show starts, so nobody falls out of sync. Every so often, press E and click **Check station links** to list any tracks that are gone.

## Sound cleanup

The browser cleans up the sound as it plays:
- **Level.** It listens to each show and gently turns quiet ones up and loud ones down, so changing stations or moving to the next episode doesn't jump in volume. A compressor and limiter catch sudden peaks.
- **Clicks and pops.** It finds short spikes that jump and snap back, and smooths over them. In a test it removed about 87% of the click energy and left drum hits mostly alone. It softens crackle; it can't make a worn 78 sound new.
- **Tone.** It cuts the low rumble and rounds off the high hiss.

Each station can have its own settings in `stations.js`, for example `"sound": { "level": true, "declick": 0.8, "tone": 6500 }`.
- `declick` runs from 0 (off) to 1 (strongest). The 78s use 0.8 and the shows use 0.4.
- `tone` is where the hiss cut starts, in Hz. Lower is softer and warmer. 20000 turns it off.
- `level: false` turns off the automatic leveling.

## Listener ticker

The strip along the bottom scrolls what's on every station right now. It can also show how many people are listening, overall and per station, like "14 tuned in right now · Chills 6 · Noir 4".

Counting listeners needs a small live service, because a static site can't see other visitors. The radio uses Supabase's free plan for this. It only counts people while they're connected; it stores nothing and needs no database tables.

1. Sign up at supabase.com (you can use your GitHub login) and create a new project. Any name and region works.
2. In the project, open **Project Settings → API**. Copy the **Project URL** and the **anon / publishable** key. That key is meant to be public, so it's safe in the page.
3. Paste both into `config.js` and save.

Until those are filled in, the ticker just shows what's on. To preview the count with made-up numbers, open the radio with `?fakelisteners` on the end of the address.

You can change what the ticker shows in `skin.js` (`"show": ["listeners", "now"]`) and how it reads in `"words"` (`listeners`, `listenersOne`, `listenersStation`, `nowOn`). Draw a strip for it to sit on as `art/ticker-strip.png`.

## Putting it online for free

The whole site is plain files, so it can be hosted for free and your computer doesn't need to stay on.

- **Cloudflare Pages.** Sign in at pages.cloudflare.com, choose "Upload assets", and drag the whole folder in. You get a free `*.pages.dev` address and can add your own domain later.
- **GitHub Pages.** Put the folder in a repository and turn on Pages in its settings.

The audio streams from the Internet Archive, so it costs you nothing to host. Spelunkr links each show back to the Archive and has a donate link. That's a good habit to copy.

## A note on rights

- **The 78s** here are all 1925 or earlier. US sound recordings from 1925 and earlier are public domain, and 1926 joins them on January 1, 2027.
- **The radio shows** are in a grayer zone. The recordings are widely treated as public domain, but some scripts and the music inside them can still be under copyright. Public stations air this material all the time, but if you ever restream it on YouTube or Twitch, expect automated copyright claims.
