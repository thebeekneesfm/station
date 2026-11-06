/* SKIN — everything you see on the radio.
   Every piece has a built-in 1950s look. To use your own drawing for a piece, save a PNG
   in the art folder with the file name shown here ("src"), and it replaces the built-in look.
   Pieces with "look" but no "src" are decoration you can restyle or delete.
   x, y, w, h are pixels on a stage that is stage.width × stage.height.
   There are two layouts: the main one for computers and tablets, and "portrait" for phones
   held upright. Press E on the radio to drag pieces into place, then "Copy skin.js" and
   paste the result over this file. README.md lists every option. */
window.SKIN = {
  "stage": {
    "width": 1600,
    "height": 1000,
    "color": "transparent"
  },
  "fonts": [
    {
      "family": "Radio Hand",
      "src": "art/fonts/your-font.woff2"
    }
  ],
  "reactions": [
    {
      "id": "heart",
      "emoji": "♥",
      "label": "Love it"
    },
    {
      "id": "star",
      "emoji": "✶",
      "label": "Swell"
    },
    {
      "id": "note",
      "emoji": "♪",
      "label": "Good song"
    },
    {
      "id": "ghost",
      "emoji": "☾",
      "label": "Spooky"
    }
  ],
  "sound": {
    "level": true,
    "declick": 0.5,
    "tone": 9000
  },
  "sounds": {
    "tuning": "art/sounds/tuning.mp3?v=2",
    "rain": "art/sounds/rain.mp3",
    "fire": "art/sounds/fire.mp3",
    "storm": "art/sounds/storm.mp3"
  },
  "name": "The Bee's Knees",
  "tagline": "Carefully curated to relieve you from our current timeline",
  "badge": ".fm",
  "ambienceLevel": 0.3,
  "layers": [
    {"id": "background", "type": "plate", "src": "art/background.png", "x": 0, "y": 0, "w": 1600, "h": 1000, "look": "wall"},
    {"id": "masthead", "look": "paper", "x": 24, "y": 10, "w": 1552, "h": 112},
    {"id": "logo", "src": "art/logo.png", "x": 44, "y": 16, "w": 650, "h": 86, "look": "logo"},
    {"id": "tv-link", "type": "text", "text": "TV", "href": "tv.html", "x": 490, "y": 36, "w": 38, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "drivein-link", "type": "text", "text": "Drive-In", "href": "drive-in.html", "x": 540, "y": 36, "w": 86, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "comics-link", "type": "text", "text": "Comics", "href": "comics.html", "x": 638, "y": 36, "w": 74, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "magazines-link", "type": "text", "text": "Magazines", "href": "magazines.html", "x": 724, "y": 36, "w": 104, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "ads-link", "type": "text", "text": "Vintage Ads", "href": "ads.html", "x": 840, "y": 36, "w": 122, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "postcard-top", "type": "text", "text": "Send a Card", "href": "postcard.html", "x": 974, "y": 36, "w": 120, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "puzzles-top", "type": "text", "text": "Daily Puzzle", "href": "puzzles.html", "x": 1106, "y": 36, "w": 124, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "guestbook-link", "type": "text", "text": "Guest Book", "href": "guestbook.html", "x": 1242, "y": 36, "w": 114, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 620, "y": 76, "w": 260, "h": 30, "font": "BK Serif", "size": 20, "color": "#5d5244", "align": "left", "weight": 500, "italic": true},
    {"id": "visits", "type": "text", "bind": "visits", "x": 826, "y": 76, "w": 180, "h": 30, "font": "BK Serif", "size": 18, "color": "#5d5244", "align": "left", "italic": true},
    {"id": "clock", "type": "text", "bind": "clock", "x": 1330, "y": 18, "w": 230, "h": 50, "font": "BK Serif", "size": 42, "color": "#1f1b17", "align": "right", "weight": 700},
    {"id": "shop-link", "type": "text", "text": "Shop", "href": "shop.html", "x": 1016, "y": 74, "w": 60, "h": 32, "font": "BK Serif", "size": 21, "color": "#c8321f", "align": "left", "weight": 600},
    {"id": "youtube-link", "type": "text", "text": "YouTube", "href": "youtube.html", "x": 1090, "y": 74, "w": 96, "h": 32, "font": "BK Serif", "size": 21, "color": "#c8321f", "align": "left", "weight": 600},
    {"id": "tip-link", "type": "text", "bind": "tip", "href": "config.tip", "x": 1186, "y": 74, "w": 260, "h": 32, "font": "BK Serif", "size": 21, "color": "#c8321f", "align": "right", "weight": 600},
    {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 1462, "y": 74, "w": 98, "h": 32, "font": "BK Serif", "size": 21, "color": "#c8321f", "align": "right", "weight": 600},
    {"id": "listeners-total", "type": "text", "bind": "listeners.total", "x": 600, "y": 436, "w": 244, "h": 30, "font": "BK Serif", "size": 19, "color": "#5d5244", "align": "right", "italic": true},
    // weather is off for now; delete the two slashes to bring it back
    // {"id": "weather", "type": "weather", "x": 1400, "y": 70, "w": 160, "h": 40, "font": "BK Serif", "size": 26, "color": "#1f1b17", "weight": 700, "align": "right"},
    {"id": "player", "src": "art/player.png", "x": 40, "y": 178, "w": 1520, "h": 300, "look": "wall"},
    {"id": "now-card", "look": "paper", "x": 362, "y": 190, "w": 494, "h": 280},
    {"id": "station-card", "type": "card", "action": "power", "x": 57, "y": 188, "w": 270, "h": 270},
    {"id": "card-credit", "type": "text", "bind": "card.credit", "href": "card.link", "x": 40, "y": 460, "w": 304, "h": 28, "font": "BK Serif", "size": 18, "color": "#f6eed8", "align": "center", "italic": true},
    {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 378, "y": 204, "w": 250, "h": 24, "font": "BK Serif", "size": 18, "color": "#5d5244", "align": "left", "italic": true},
    {"id": "now-series", "type": "text", "bind": "now.series", "x": 378, "y": 232, "w": 466, "h": 50, "font": "BK Head", "size": 42, "color": "#c8321f", "align": "left", "weight": 600, "uppercase": true, "spacing": 0.5},
    {"id": "now-title", "type": "text", "bind": "now.title", "href": "now.item", "x": 378, "y": 286, "w": 466, "h": 84, "font": "BK Serif", "size": 46, "color": "#1f1b17", "align": "left", "weight": 400, "lineHeight": 1.05},
    {"id": "now-date", "type": "text", "bind": "now.date", "x": 378, "y": 370, "w": 466, "h": 26, "font": "BK Serif", "size": 21, "color": "#5d5244", "align": "left", "italic": true, "below": "now-title", "gap": 6},
    {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 378, "y": 402, "w": 200, "h": 28, "font": "BK Serif", "size": 22, "color": "#5d5244", "align": "left"},
    {"id": "sleep-clock", "type": "button", "action": "sleep", "src": "art/alarm-clock.png", "x": 378, "y": 428, "w": 40, "h": 40},
    {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 424, "y": 436, "w": 210, "h": 28, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 694, "y": 402, "w": 150, "h": 30, "font": "BK Serif", "size": 20, "color": "#1f1b17", "align": "right", "weight": 500},
    {"id": "now-status", "type": "text", "bind": "status", "x": 600, "y": 204, "w": 242, "h": 24, "font": "BK Serif", "size": 20, "color": "#c8321f", "align": "right", "italic": true},
    {"id": "guide-frame", "src": "art/guide-frame.png", "x": 40, "y": 544, "w": 1120, "h": 454, "look": "listings"},
    {"id": "guide", "type": "guide", "mode": "nownext", "x": 48, "y": 558, "w": 1104, "h": 434, "rowHeight": 23, "labelWidth": 280, "font": "BK Serif", "size": 19, "color": "#1f1b17", "dim": "#5d5244", "highlight": "#c8321f", "labelFont": "BK Serif", "line": "rgba(31,27,23,.22)", "block": "transparent", "selected": "rgba(227,169,47,.28)", "paper": "#e9e1c9"},
    {"id": "tv", "type": "tv", "x": 915, "y": 214, "w": 215, "h": 164, "font": "BK Serif", "size": 18, "color": "#efe5cc"},
    {"id": "tv-set", "src": "art/screen/tv-set.webp", "x": 860, "y": 182, "w": 320, "h": 269},
    {"id": "funnies", "type": "funnies", "x": 1200, "y": 184, "w": 346, "h": 210},
    {"id": "ambience", "type": "mixer", "row": true, "title": "Ambience", "x": 52, "y": 490, "w": 1096, "h": 44},
    {"id": "patrons", "type": "patrons", "x": 1200, "y": 404, "w": 346, "h": 276},
    {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 1190, "y": 690, "w": 370, "h": 30, "font": "BK Script", "size": 28, "color": "#e3a92f", "align": "center", "uppercase": false, "spacing": 0, "italic": true, "weight": 700},
    {"id": "ad", "type": "ad", "every": 40, "x": 1190, "y": 726, "w": 370, "h": 262, "font": "BK Serif", "size": 18, "color": "#cdbf9f", "dim": "#cdbf9f"},
    {"id": "ticker-strip", "look": "paper", "x": 0, "y": 124, "w": 1600, "h": 48},
    {"id": "ticker", "type": "ticker", "show": ["members", "tips", "announcements"], "speed": 70, "x": 20, "y": 124, "w": 1560, "h": 48, "font": "BK Serif", "size": 24, "color": "#1f1b17", "uppercase": false, "spacing": 0, "italic": false, "stretch": 80, "weight": 700}
  ],
  "portrait": {
    "stage": {"width": 600, "height": 3376, "color": "transparent", "fit": "width"},
    "layers": [
      {"id": "background", "type": "plate", "src": "art/phone/background.png", "x": 0, "y": 0, "w": 600, "h": 3376, "look": "wall"},
      {"id": "masthead", "look": "paper", "x": 8, "y": 8, "w": 584, "h": 170},
      {"id": "logo", "src": "art/phone/logo.png", "x": 20, "y": 14, "w": 560, "h": 118, "look": "logo"},
      {"id": "clock", "type": "text", "bind": "clock", "x": 420, "y": 24, "w": 160, "h": 40, "font": "BK Serif", "size": 30, "color": "#1f1b17", "align": "right", "weight": 700},
      {"id": "nav-about", "type": "text", "text": "About", "href": "about.html", "x": 460, "y": 64, "w": 120, "h": 30, "font": "BK Serif", "size": 22, "color": "#c8321f", "align": "right", "weight": 700},
      {"id": "nav-guestbook", "type": "text", "text": "Guest Book", "href": "guestbook.html", "x": 400, "y": 104, "w": 180, "h": 30, "font": "BK Serif", "size": 22, "color": "#c8321f", "align": "right", "weight": 700},
      {"id": "shop-link", "type": "text", "text": "Shop", "href": "shop.html", "x": 24, "y": 140, "w": 90, "h": 30, "font": "BK Serif", "size": 21, "color": "#c8321f", "align": "left", "weight": 700},
      {"id": "tip-link", "type": "text", "bind": "tip", "href": "config.tip", "x": 300, "y": 140, "w": 280, "h": 30, "font": "BK Serif", "size": 21, "color": "#c8321f", "align": "right", "weight": 700},
      {"id": "listeners-total", "type": "text", "bind": "listeners.total", "x": 372, "y": 662, "w": 206, "h": 30, "font": "BK Serif", "size": 19, "color": "#5d5244", "align": "right", "italic": true},
      // {"id": "weather", "type": "weather", "x": 440, "y": 136, "w": 140, "h": 36, "font": "BK Serif", "size": 24, "color": "#1f1b17", "weight": 700, "align": "right"},
      {"id": "player", "src": "art/phone/player.png", "x": 12, "y": 332, "w": 576, "h": 372, "look": "paper"},
      {"id": "station-card", "type": "card", "action": "power", "x": 22, "y": 344, "w": 236, "h": 236},
      {"id": "card-credit", "type": "text", "bind": "card.credit", "href": "card.link", "x": 16, "y": 584, "w": 248, "h": 28, "font": "BK Serif", "size": 18, "color": "#5d5244", "align": "center", "italic": true},
      {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 272, "y": 348, "w": 306, "h": 26, "font": "BK Serif", "size": 19, "color": "#5d5244", "align": "left", "italic": true},
      {"id": "now-series", "type": "text", "bind": "now.series", "x": 272, "y": 376, "w": 306, "h": 44, "font": "BK Head", "size": 32, "color": "#c8321f", "align": "left", "weight": 600, "uppercase": true, "spacing": 0.5},
      {"id": "now-title", "type": "text", "bind": "now.title", "href": "now.item", "x": 272, "y": 422, "w": 306, "h": 96, "font": "BK Serif", "size": 34, "color": "#1f1b17", "align": "left", "weight": 400, "lineHeight": 1.05},
      {"id": "now-date", "type": "text", "bind": "now.date", "x": 272, "y": 522, "w": 306, "h": 44, "font": "BK Serif", "size": 19, "color": "#5d5244", "align": "left", "italic": true, "lineHeight": 1.15, "below": "now-title", "gap": 6},
      {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 272, "y": 548, "w": 306, "h": 32, "font": "BK Serif", "size": 24, "color": "#5d5244", "align": "left"},
      {"id": "sleep-clock", "type": "button", "action": "sleep", "src": "art/alarm-clock.png", "x": 24, "y": 656, "w": 36, "h": 36},
      {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 66, "y": 660, "w": 150, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "left", "weight": 500},
      {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 212, "y": 660, "w": 170, "h": 32, "font": "BK Serif", "size": 22, "color": "#1f1b17", "align": "center", "weight": 500},
      {"id": "now-status", "type": "text", "bind": "status", "x": 272, "y": 344, "w": 306, "h": 26, "font": "BK Serif", "size": 18, "color": "#c8321f", "align": "right", "italic": true},
      {"id": "tv", "type": "tv", "x": 72, "y": 748, "w": 223, "h": 171, "font": "BK Serif", "size": 18, "color": "#efe5cc"},
      {"id": "tv-set", "src": "art/screen/tv-set.webp", "x": 16, "y": 716, "w": 330, "h": 278},
      {"id": "funnies", "type": "funnies", "x": 360, "y": 722, "w": 228, "h": 300},
      {"id": "ambience", "type": "mixer", "x": 24, "y": 1042, "w": 552, "h": 132},
      {"id": "guide-frame", "look": "listings", "x": 12, "y": 1190, "w": 576, "h": 1380},
      {"id": "guide", "type": "guide", "mode": "list", "x": 18, "y": 1202, "w": 564, "h": 1360, "rowHeight": 88, "labelWidth": 240, "font": "BK Serif", "size": 24, "color": "#1f1b17", "dim": "#5d5244", "highlight": "#c8321f", "labelFont": "BK Serif", "line": "rgba(31,27,23,.22)", "block": "transparent", "selected": "rgba(227,169,47,.28)", "paper": "#e9e1c9"},
      {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 12, "y": 2836, "w": 576, "h": 38, "font": "BK Script", "size": 30, "color": "#e3a92f", "align": "center", "uppercase": false, "spacing": 0, "italic": true, "weight": 700},
      {"id": "patrons", "type": "patrons", "x": 20, "y": 2588, "w": 560, "h": 230},
      {"id": "ad", "type": "ad", "every": 40, "x": 20, "y": 2880, "w": 560, "h": 330, "font": "BK Serif", "size": 19, "color": "#cdbf9f", "dim": "#cdbf9f"},
      {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 20, "y": 3226, "w": 100, "h": 36, "font": "BK Serif", "size": 22, "color": "#efe5cc", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "weight": 500},
      {"id": "ads-link", "type": "text", "text": "Vintage ads", "href": "ads.html", "x": 130, "y": 3226, "w": 190, "h": 36, "font": "BK Serif", "size": 22, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 330, "y": 3226, "w": 250, "h": 36, "font": "BK Serif", "size": 22, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "guestbook-link", "type": "text", "text": "Sign the guest book", "href": "guestbook.html", "x": 20, "y": 3272, "w": 300, "h": 36, "font": "BK Serif", "size": 22, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "youtube-link", "type": "text", "text": "Watch on YouTube", "href": "youtube.html", "x": 330, "y": 3272, "w": 250, "h": 36, "font": "BK Serif", "size": 22, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "postcard-link", "type": "text", "text": "Send a card", "href": "postcard.html", "x": 20, "y": 3308, "w": 300, "h": 36, "font": "BK Serif", "size": 22, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "puzzles-link", "type": "text", "text": "Puzzle Page", "href": "puzzles.html", "x": 330, "y": 3308, "w": 250, "h": 36, "font": "BK Serif", "size": 22, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "visits", "type": "text", "bind": "visits", "x": 20, "y": 3344, "w": 560, "h": 30, "font": "BK Serif", "size": 20, "color": "#efe5cc", "align": "center", "italic": true},
      {"id": "nav-strip", "look": "paper", "x": 8, "y": 184, "w": 584, "h": 84},
      {"id": "nav-tv", "type": "text", "text": "TV", "href": "tv.html", "x": 22, "y": 190, "w": 60, "h": 34, "font": "BK Serif", "size": 24, "color": "#1f1b17", "align": "left", "weight": 700},
      {"id": "nav-drivein", "type": "text", "text": "Drive-In", "href": "drive-in.html", "x": 92, "y": 190, "w": 112, "h": 34, "font": "BK Serif", "size": 24, "color": "#1f1b17", "align": "left", "weight": 700},
      {"id": "nav-comics", "type": "text", "text": "Comics", "href": "comics.html", "x": 216, "y": 190, "w": 110, "h": 34, "font": "BK Serif", "size": 24, "color": "#1f1b17", "align": "left", "weight": 700},
      {"id": "nav-magazines", "type": "text", "text": "Mags", "href": "magazines.html", "x": 338, "y": 190, "w": 80, "h": 34, "font": "BK Serif", "size": 24, "color": "#1f1b17", "align": "left", "weight": 700},
      {"id": "nav-gallery", "type": "text", "text": "Vintage Ads", "href": "ads.html", "x": 430, "y": 190, "w": 156, "h": 34, "font": "BK Serif", "size": 24, "color": "#1f1b17", "align": "left", "weight": 700},
      {"id": "nav-card", "type": "text", "text": "Send a Card", "href": "postcard.html", "x": 22, "y": 228, "w": 170, "h": 34, "font": "BK Serif", "size": 24, "color": "#c8321f", "align": "left", "weight": 700},
      {"id": "nav-puzzle", "type": "text", "text": "Daily Puzzle", "href": "puzzles.html", "x": 216, "y": 228, "w": 170, "h": 34, "font": "BK Serif", "size": 24, "color": "#c8321f", "align": "left", "weight": 700},
      {"id": "nav-youtube", "type": "text", "text": "YouTube", "href": "youtube.html", "x": 430, "y": 228, "w": 150, "h": 34, "font": "BK Serif", "size": 24, "color": "#c8321f", "align": "left", "weight": 700},
      {"id": "ticker-strip", "look": "paper", "x": 0, "y": 272, "w": 600, "h": 50},
      {"id": "ticker", "type": "ticker", "show": ["members", "tips", "announcements"], "speed": 60, "x": 12, "y": 272, "w": 576, "h": 50, "font": "BK Serif", "size": 22, "color": "#1f1b17", "uppercase": false, "spacing": 0, "italic": false, "stretch": 80, "weight": 700}
    ]
  }
};
