# TheBeesKnees.fm

A web radio that plays old-time radio shows and 78s straight from the Internet Archive, on a shared clock like Spelunkr. Everyone tuned to the same station hears the same moment, and there's no streaming server.

The main screen is a channel guide: every station in a list, with what's on now and what's coming up. Click a station to tune in. There's also a vintage ad panel that changes on the same clock for everyone, and a gallery of all the ads at `ads.html`.

Every piece has a built-in 1950s look (walnut cabinet, cream TV listings, bakelite knobs, atomic starbursts) until you replace it with your own drawing. Drop a PNG with the right name into the `art` folder and it takes that piece's place.

## Try it

Double-click `index.html`. Press **Space** (or click the power switch) to turn it on. Click any station in the guide to tune to it.

| Key | Does |
|---|---|
| Space | Power on/off |
| ↑ ↓ | Previous / next station |
| ← → | Volume |
| C | Clean / Original sound |
| S | Sleep timer (15 → 30 → 60 → 90 minutes → off) |
| R | Recently played |
| E | Layout mode |

Each station has its own link, like `…/otr-radio/#noir`. Opening that link starts on that station, so you can share a station directly.

## Drawing the radio

1. Open `art-templates/layout-guide.png` in Procreate as a reference layer. It's the whole stage (1600 × 1000) with every piece boxed and labeled.
2. Draw each piece on its own layer.
3. Export each piece as a **transparent PNG** at the size on its template, with the same file name, into the `art` folder. For example, `art-templates/player.png` is 1520 × 240, so your drawing goes to `art/player.png`.
4. Refresh the page. Your drawing replaces that piece's built-in look. Press E to see every piece's outline, name and size.

The station name and tagline in the logo come from `"name"` and `"tagline"` at the top of `skin.js`. Change them there, or draw a logo as `art/logo.png`. The lettering uses three free Google fonts: Yellowtail (script), Oswald (tall capitals) and Courier Prime (typewriter). Change any piece's `"font"` in `skin.js` to use something else, including your own font in `art/fonts`.

The `art-templates` folder has a blank, correctly sized PNG for each piece if you'd rather draw on those directly.

**Pieces that move or change:**
- **Knobs** spin around their center, so draw them centered in a square.
- **Lights** have a "Shows when" setting. `light-on.png` only appears while the radio is on, and `light-off.png` only while it's off.
- **The guide** is live text in rows, drawn over `guide-frame.png`. Draw the frame (a TV-listings page, a program card, whatever you like) and set the guide's colors and font in `skin.js`.
- **The TV** shows the cartoon. Draw the set around it with the screen left transparent.
- **The ad panel** shows the ads themselves. Draw anything around it, like a magazine page or a billboard frame, as its own piece behind it.
- **Station cards** go in `art/cards/`, one per station, named after the station's id in `stations.js` (`chills.png`, `noir.png`, `swing.png`, …). The card swaps when you change stations.

**Phones.** Phones held upright get their own layout (`"portrait"` in `skin.js`). It's taller and scrolls instead of shrinking. Its art goes in `art/phone/`, with its own templates in `art-templates/phone/`. If you'd rather use one layout everywhere, delete the `"portrait"` section.

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
| `"type": "needle", "track": {"from": 510, "to": 1090}` | A dial needle, if you ever want a dial back. Slides between those x positions. |
| `"type": "button", "action": "power"` | Clickable. Actions: `power`, `next`, `prev`, `volup`, `voldown`, `sleep`, `recent`, `clean`, `tune:chills` (jump to a station). |
| `"type": "card"` | Shows the current station's card art. |
| `"type": "ticker"` | A scrolling strip. `"show"`, `"speed"` (pixels per second), `font`, `size`, `color`. |
| `"type": "guide"` | The channel guide. `"mode": "timeline"` (a TV-listings grid) or `"list"` (now and next, for phones). `"hours"`, `"rowHeight"`, `"labelWidth"`, `font`, `size`, `color`, `dim`, `highlight`, `line`, `block`, `selected`. |
| `"type": "ad"` | The vintage ad panel. `"every"` is how many seconds each ad stays up. |
| `"type": "reactbar"` / `"reactfloat"` | The reaction buttons, and the area reactions float up through. |
| `"type": "tv"` | The cartoon TV. Text pieces can show `"bind": "tv.title"` and link with `"href": "tv.item"`. |
| `"type": "text", "bind": "…"` | Live text. Binds: `sleep`, `clean`, `tv.title`, `now.series`, `now.title`, `now.date`, `now.remaining`, `station.name`, `station.freq`, `station.blurb`, `station.listeners`, `clock`, `guide` (with `"count": 5`), `status`. Or fixed words with `"text": "…"`. Add `"action"` to make text clickable, like the buttons (`sleep`, `recent`, `clean` and the rest). Add `"href"` to make it a link: a web address, or `"now.item"` for the current show's Archive page. Style with `font`, `size`, `color`, `align`, `lineHeight`, `uppercase`, `spacing`. Long titles shrink to fit. |
| `"when": "on"` | Only show at certain times: `on`, `off`, `playing`, `warming`, `between` (dial between stations), `lost` (a broken tape), `tuned`. Combine them with commas. |
| `"station": "chills"` | Only show on that station, for example a different dial glow per station. |
| `"frames": ["art/tube-1.png", "art/tube-2.png"], "fps": 6` | A looping animation, like flickering tubes or a turning record. |
| `"blend": "multiply"`, `"opacity": 0.35` | Overlay effects for grain, scratches and vignettes. |

`"words"` at the top level changes the status messages, for example `"words": { "off": "Turn the knob, darling", "lost": "Lost the signal. Back at {time}" }`.

To change the stage size, change `stage.width` and `stage.height`. `"fit": "width"` makes a layout fill the screen's width and scroll, like the phone layout does.

## Stations

`stations.js` has sixteen stations. The guide groups them under **Radio shows** and **Music**:

| Station | What's on | Loops every |
|---|---|---|
| Chills | Horror: The Weird Circle, The Witch's Tale, Quiet Please, The Hermit's Cave, Lights Out, Inner Sanctum, Hall of Fantasy, The Mysterious Traveler | about 24 hours |
| Noir | Philip Marlowe, Sam Spade, Pat Novak, Richard Diamond, Johnny Dollar, Box 13, Broadway Is My Beat | about 23 hours |
| Suspense | Suspense, Escape, The Whistler, The Shadow | about 13 hours |
| Sci-Fi | X Minus One, Dimension X, 2000 Plus, Exploring Tomorrow, Space Patrol, Tom Corbett, Space Cadet | about 18 hours |
| Out West | Gunsmoke, Frontier Gentleman, Fort Laramie, The Six Shooter, Have Gun – Will Travel | about 15 hours |
| Theater | Lux Radio Theatre, Screen Guild Theater, Screen Directors Playhouse, Academy Award Theater, Orson Welles' Mercury Theatre (including *The War of the Worlds*) and Campbell Playhouse, Columbia Workshop | about 32 hours |
| Laughs | Jack Benny, Fibber McGee and Molly, Burns and Allen, The Great Gildersleeve, Our Miss Brooks | about 16 hours |
| Ragtime | Rags, cakewalks and brass bands, 1898–1928 | about 5 hours |
| Jazz Age | Hot jazz, blues and dance bands, 1917–1925 | about 5 hours |
| Blues | Delta and country blues, 1920s to the '50s | about 3 hours |
| Swing | Big bands of the 1930s and '40s | about 6 hours |
| Crooners | Singers from the late 1920s to the '50s | about 6 hours |
| After Hours | Late-night jazz and torch songs, 1936–1959 | about 6 hours |
| Hawaiian & Exotica | Steel guitars, island songs and exotica | about 4 hours |
| Sleepy Time | Slow waltzes and sweet bands, muffled and echoey as if playing in another room, with rain or a fire underneath. No commercials. | about 4 hours |
| Christmas | Holiday 78s from every era | about 6 hours |

The shows take turns, so you don't get six Gunsmokes in a row. To add shows or build a new station, open `builder.html`, paste Archive links, tick what you want, and copy the result into `stations.js`.

Each station has:
- `group`: the heading it sits under in the guide.
- `music: true`: shows the station as one long block in the guide instead of separate programs, since records are only a few minutes long.
- `epoch`: the moment the station "started broadcasting". The schedule counts forward from there.
- `tracks`: the playlist. `length` is in seconds and has to be right for the clock to line up. The builder fills it in for you.
- `sound`: cleanup settings for that station (see below).

The order in `stations.js` is the order in the guide, and the channel numbers follow it.

If the Archive takes a file down, that slot plays static with "Lost the signal" until the next show starts, so nobody falls out of sync. Every so often, press E and click **Check station links** to list any tracks that are gone.

## Sound cleanup

The browser cleans up the sound as it plays:
- **Pops and crackle.** One detector compares every sample with its neighbors. A sample that sticks out far more than usual (a pop, or one tick of crackle) is replaced with the median of the samples around it. It also checks how busy the last few milliseconds were, so drums, brushes and "s" sounds aren't mistaken for crackle. On a test record full of crackle and pops it removed about half of both while barely touching the music (about 0.1% change). It softens a worn 78, but it can't make one sound new.
- **Level.** It gently turns quiet recordings up and loud ones down, with a compressor and limiter for sudden peaks.
- **Tone.** It cuts low rumble and rounds off high hiss. The early records (Ragtime, Jazz Age) get the softest top end, since that's where most of their surface noise lives.

**Clean / Original switch.** "Sound: cleaned up" in the player panel switches between the cleaned sound and the untouched recording. Click it, or press **C**. Use it to compare, and tune the settings below by ear. Each listener's choice is remembered in their own browser.

Each station has its own settings in `stations.js`, for example `"sound": { "level": true, "declick": 0.9, "decrackle": 0.9, "tone": 6000 }`.
- `declick` and `decrackle` run from 0 (off) to 1 (most sensitive). The stronger of the two sets how eagerly the detector repairs. The music stations use 0.8–0.9, and the radio shows 0.5.
- `tone` is where the hiss cut starts, in Hz. Lower is softer and warmer; 20000 turns it off.
- `level: false` turns off the automatic leveling.

If the records still sound rough after that, the next step is cleaning them ahead of time with proper restoration tools and hosting the cleaned files yourself. That's more work and a bigger copyright step, since you'd be distributing your own copies.

## Sounding like another room

A station can sound like it's playing in another room. Give it a `"room"` setting in `stations.js`:

`"room": { "muffle": 1100, "echo": 0.55, "ambience": 0.35 }`

- `muffle`: how much treble gets through the wall, in Hz. Lower is more muffled.
- `echo`: how much room echo, from 0 to 1.
- `ambience`: how loud the rain or fire is, from 0 to 1.

A slight tape wobble is added too. Rain or a fire can play under any station: each listener clicks "Add rain or a fire" under the show title, and their choice sticks as they change stations. `"ambienceLevel"` in `skin.js` sets how loud it is (a "room" station uses its own `ambience` setting instead). The rain and fire are real recordings, cut into seamless two-minute loops: `art/sounds/rain.mp3` (rain on a window, Laurent Guidali, CC BY-SA 4.0) and `art/sounds/fire.mp3` (a fireplace, inchadney, CC0). Replace either file with your own recording to change it.

## Between songs

Old records start and end with a few seconds of needle hiss. The radio listens for that: a new record stays silent until its music starts, then fades in. When a record's music ends and only hiss is left, it fades out and starts the next record early. It also fetches the next record shortly before it's needed.

## Reactions

The emoji buttons under what's playing (👻 ♥ 🎺 😂) float a reaction up the screen. Everyone tuned to the same station sees it at the same moment. Like the listener count, sharing reactions needs the Supabase keys in `config.js`; until then you only see your own. Each person can send about two a second, so nobody can flood the screen.

Change the set in `skin.js` under `"reactions"`. Each one needs an `id` and an `emoji`. To use your own drawings instead of emoji, add `"src": "art/react-ghost.png"`.

## Sleep timer and recently played

**Sleep timer:** click "Sleep timer: off" (or press S) to step through 15, 30, 60 and 90 minutes, then off. Over the last 45 seconds the sound fades out, and then the radio switches off.

**Recently played:** click "Recently played" (or press R) to see the last 15 things on the current station, with times and Archive links. It's worked out from the schedule, so nothing is stored.

## Radio commercials

The music stations play an old radio commercial after every four records: about 100 real 1940s–50s spots (Lucky Strike, Chiquita Banana, Alka-Seltzer, Pepsi and more), from the Archive's vintage radio commercial collections. In `stations.js` they're the tracks with `"ad": true`. Delete one to drop it, or remove them all from a station.

## The wall, the masthead and the On Air sign

The page sits on a real 1953 wallpaper sample (`art/wallpaper.jpg`), scanned from the Sears wallpaper book of that year, public domain via the Internet Archive. The book has dozens more patterns if you'd like a different one. Replace the file to change it.

The logo, links and clock are printed on a newsprint masthead pinned across the top. The **On Air** sign is the on/off switch. It's dark until someone tunes in, then lights up and blinks slowly while a show plays. The sleep timer and tip link sit beside it.

**Tip link:** put your Ko-fi (or other tip page) address in `config.js` under `"tip"`, and "Tip TheBeesKnees" appears in the masthead.

## The fireplace

Next to the TV, a silent fireplace loops: real footage of a fire in Glen Lake, Michigan (public domain), cut into a seamless one-minute loop (`art/fireplace.mp4`). Any piece can be a looping video with `"type": "video", "video": "art/your-clip.mp4"`.

## The little TV

`tv.js` lists about 230 old cartoons (Betty Boop, Popeye, Superman, Felix, Flip the Frog and more) from the Archive's cartoon collections. They play with the sound off, on the same clock as the stations, so everyone sees the same frame. The cartoon's title under the TV links to its Archive page. Wartime shorts and cartoons with racist caricatures were left out by title; delete a line in `tv.js` to drop anything else.

Draw a TV set as `art/tv-set.png`, with the screen cut out (transparent), and it sits over the picture. On phones it's `art/phone/tv-set.png`.

## About page and credits

`about.html` explains the station: everything plays from the Internet Archive, it isn't affiliated with them, what's kept (nothing), and how a rights holder can ask for a show to come off. It lists the stations and shows automatically from `stations.js`. Edit the wording however you like.

Put a way to reach you in `config.js` under `contact` (an email address or a Discord invite). The About page shows it to rights holders.

On the radio, "via archive.org" under the current show links to that recording's Archive page. There are also **About** and **Donate to the Archive** links in the top left. Like everything else, you can restyle or move them in layout mode.

## Listener ticker

The strip along the bottom scrolls what's on every station right now. It can also show how many people are listening, overall and per station, like "14 tuned in right now · Chills 6 · Noir 4". Under the station name, the radio also shows how many are on the station you're tuned to.

Only people who have the radio on and tuned to a station are counted. Someone with the page open and the radio off isn't counted, and neither is someone sitting between stations. A listener is counted on whichever station they're on and moves with them when they change it.

Counting listeners needs a small live service, because a static site can't see other visitors. The radio uses Supabase's free plan for this. It only counts people while they're connected; it stores nothing and needs no database tables.

1. Sign up at supabase.com (you can use your GitHub login) and create a new project. Any name and region works.
2. In the project, open **Project Settings → API**. Copy the **Project URL** and the **anon / publishable** key. That key is meant to be public, so it's safe in the page.
3. Paste both into `config.js` and save.

Until those are filled in, the ticker just shows what's on. To preview the count with made-up numbers, open the radio with `?fakelisteners` on the end of the address.

You can change what the ticker shows in `skin.js` (`"show": ["listeners", "now"]`) and how it reads in `"words"` (`listeners`, `listenersOne`, `listenersStation`, `nowOn`). Draw a strip for it to sit on as `art/ticker-strip.png`.

## Updating the live site

The pages load their scripts with a version tag, like `skin.js?v=20261031c`. When you change files, bump that tag in `index.html`, `about.html` and `ads.html`. Visitors then get the new files right away instead of an old cached copy. GitHub Pages takes a minute or two to publish each change.

## Putting it online for free

The whole site is plain files, so it can be hosted for free and your computer doesn't need to stay on.

- **Cloudflare Pages.** Sign in at pages.cloudflare.com, choose "Upload assets", and drag the whole folder in. You get a free `*.pages.dev` address and can add your own domain later.
- **GitHub Pages.** Put the folder in a repository and turn on Pages in its settings.

The audio streams from the Internet Archive, so it costs you nothing to host. Spelunkr links each show back to the Archive and has a donate link. That's a good habit to copy.

## A note on rights

- **The 78s** here are all 1925 or earlier. US sound recordings from 1925 and earlier are public domain, and 1926 joins them on January 1, 2027.
- **The radio shows** are in a grayer zone. The recordings are widely treated as public domain, but some scripts and the music inside them can still be under copyright. Public stations air this material all the time, but if you ever restream it on YouTube or Twitch, expect automated copyright claims.
