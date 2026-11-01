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
    "fire": "art/sounds/fire.mp3"
  },
  "name": "The Bee's Knees",
  "tagline": "An online radio station of 1920s–1960s music and radio theatre",
  "badge": ".fm",
  "ambienceLevel": 0.3,
  "layers": [
    {"id": "background", "type": "plate", "src": "art/background.png", "x": 0, "y": 0, "w": 1600, "h": 1000, "look": "wall"},
    {"id": "masthead", "look": "paper", "x": 24, "y": 10, "w": 1552, "h": 98},
    {"id": "logo", "src": "art/logo.png", "x": 44, "y": 16, "w": 560, "h": 86, "look": "logo"},
    {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 740, "y": 60, "w": 150, "h": 30, "font": "BK Serif", "size": 19, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "ads-link", "type": "text", "text": "Vintage gallery", "href": "ads.html", "x": 900, "y": 24, "w": 150, "h": 30, "font": "BK Serif", "size": 19, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 900, "y": 60, "w": 200, "h": 30, "font": "BK Serif", "size": 19, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "tip-link", "type": "text", "bind": "tip", "href": "config.tip", "x": 1060, "y": 24, "w": 180, "h": 30, "font": "BK Serif", "size": 19, "color": "#c8321f", "align": "left", "weight": 600},
    {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 740, "y": 24, "w": 150, "h": 30, "font": "BK Serif", "size": 19, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "clock", "type": "text", "bind": "clock", "x": 1370, "y": 28, "w": 190, "h": 50, "font": "BK Serif", "size": 42, "color": "#1f1b17", "align": "right", "weight": 700},
    {"id": "weather", "type": "weather", "x": 1252, "y": 30, "w": 112, "h": 46, "font": "BK Serif", "size": 30, "color": "#1f1b17", "weight": 700},
    {"id": "player", "src": "art/player.png", "x": 40, "y": 116, "w": 1520, "h": 240, "look": "wall"},
    {"id": "now-card", "look": "paper", "x": 320, "y": 128, "w": 534, "h": 220},
    {"id": "station-card", "type": "card", "action": "power", "x": 50, "y": 114, "w": 252, "h": 252},
    {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 334, "y": 140, "w": 266, "h": 24, "font": "BK Serif", "size": 18, "color": "#5d5244", "align": "left", "italic": true},
    {"id": "now-series", "type": "text", "bind": "now.series", "x": 334, "y": 166, "w": 506, "h": 34, "font": "BK Head", "size": 27, "color": "#c8321f", "align": "left", "weight": 600, "uppercase": true, "spacing": 0.5},
    {"id": "now-title", "type": "text", "bind": "now.title", "x": 334, "y": 200, "w": 506, "h": 66, "font": "BK Serif", "size": 35, "color": "#1f1b17", "align": "left", "weight": 400, "lineHeight": 1.05},
    {"id": "now-date", "type": "text", "bind": "now.date", "x": 334, "y": 272, "w": 180, "h": 26, "font": "BK Serif", "size": 19, "color": "#5d5244", "align": "left"},
    {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 520, "y": 272, "w": 140, "h": 26, "font": "BK Serif", "size": 19, "color": "#5d5244", "align": "left"},
    {"id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned", "x": 670, "y": 272, "w": 180, "h": 26, "font": "BK Serif", "size": 19, "color": "#5d5244", "align": "left"},
    {"id": "reactions", "type": "reactbar", "size": 22, "x": 334, "y": 310, "w": 220, "h": 32},
    {"id": "sleep-clock", "type": "button", "action": "sleep", "src": "art/alarm-clock.png", "x": 578, "y": 304, "w": 40, "h": 40},
    {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 624, "y": 312, "w": 224, "h": 28, "font": "BK Serif", "size": 19, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "now-status", "type": "text", "bind": "status", "x": 594, "y": 140, "w": 246, "h": 24, "font": "BK Serif", "size": 18, "color": "#c8321f", "align": "right", "italic": true},
    {"id": "reaction-air", "type": "reactfloat", "x": 334, "y": 116, "w": 526, "h": 236},
    {"id": "guide-frame", "src": "art/guide-frame.png", "x": 40, "y": 372, "w": 1120, "h": 576, "look": "listings"},
    {"id": "guide", "type": "guide", "mode": "nownext", "x": 48, "y": 386, "w": 1104, "h": 560, "rowHeight": 23, "labelWidth": 280, "font": "BK Serif", "size": 16, "color": "#1f1b17", "dim": "#5d5244", "highlight": "#c8321f", "labelFont": "BK Serif", "line": "rgba(31,27,23,.22)", "block": "transparent", "selected": "rgba(227,169,47,.28)", "paper": "#e9e1c9"},
    {"id": "tv", "type": "tv", "x": 880, "y": 124, "w": 280, "h": 210, "font": "BK Serif", "size": 18, "color": "#efe5cc"},
    {"id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item", "x": 860, "y": 336, "w": 320, "h": 22, "font": "BK Serif", "size": 17, "color": "#f6eed8", "align": "center", "italic": true},
    {"id": "fireplace", "type": "video", "video": "art/fireplace.mp4", "x": 1214, "y": 130, "w": 318, "h": 198},
    {"id": "fire-volume", "type": "slider", "label": "Fire volume", "x": 1206, "y": 338, "w": 334, "h": 30},
    {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 1190, "y": 372, "w": 370, "h": 30, "font": "BK Script", "size": 28, "color": "#e3a92f", "align": "center", "uppercase": false, "spacing": 0, "italic": true, "weight": 700},
    {"id": "ad", "type": "ad", "every": 40, "x": 1190, "y": 408, "w": 370, "h": 530, "font": "BK Serif", "size": 16, "color": "#cdbf9f", "dim": "#cdbf9f"},
    {"id": "ticker-strip", "src": "art/ticker-strip.png", "x": 0, "y": 950, "w": 1600, "h": 50, "look": "strip"},
    {"id": "ticker", "type": "ticker", "show": ["listeners", "members", "tips", "announcements"], "speed": 70, "x": 20, "y": 950, "w": 1560, "h": 50, "font": "BK Serif", "size": 24, "color": "#1f1b17", "uppercase": false, "spacing": 0, "italic": false, "stretch": 80, "weight": 700}
  ],
  "portrait": {
    "stage": {"width": 600, "height": 2798, "color": "transparent", "fit": "width"},
    "layers": [
      {"id": "background", "type": "plate", "src": "art/phone/background.png", "x": 0, "y": 0, "w": 600, "h": 2798, "look": "wall"},
      {"id": "masthead", "look": "paper", "x": 8, "y": 8, "w": 584, "h": 134},
      {"id": "logo", "src": "art/phone/logo.png", "x": 20, "y": 14, "w": 400, "h": 74, "look": "logo"},
      {"id": "tip-link", "type": "text", "bind": "tip", "href": "config.tip", "x": 20, "y": 100, "w": 250, "h": 28, "font": "BK Serif", "size": 16, "color": "#c8321f", "align": "left", "weight": 600},
      {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 330, "y": 100, "w": 255, "h": 28, "font": "BK Serif", "size": 16, "color": "#1f1b17", "align": "right", "weight": 500},
      {"id": "clock", "type": "text", "bind": "clock", "x": 420, "y": 24, "w": 160, "h": 40, "font": "BK Serif", "size": 30, "color": "#1f1b17", "align": "right", "weight": 700},
      {"id": "weather", "type": "weather", "x": 470, "y": 66, "w": 110, "h": 30, "font": "BK Serif", "size": 20, "color": "#1f1b17", "weight": 700, "align": "right"},
      {"id": "player", "src": "art/phone/player.png", "x": 12, "y": 204, "w": 576, "h": 292, "look": "paper"},
      {"id": "station-card", "type": "card", "action": "power", "x": 24, "y": 216, "w": 188, "h": 188},
      {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 228, "y": 224, "w": 348, "h": 22, "font": "BK Serif", "size": 15, "color": "#5d5244", "align": "left", "italic": true},
      {"id": "now-series", "type": "text", "bind": "now.series", "x": 228, "y": 250, "w": 348, "h": 30, "font": "BK Head", "size": 21, "color": "#c8321f", "align": "left", "weight": 600, "uppercase": true, "spacing": 0.5},
      {"id": "now-title", "type": "text", "bind": "now.title", "x": 228, "y": 282, "w": 348, "h": 84, "font": "BK Serif", "size": 25, "color": "#1f1b17", "align": "left", "weight": 400, "lineHeight": 1.08},
      {"id": "now-date", "type": "text", "bind": "now.date", "x": 228, "y": 388, "w": 170, "h": 24, "font": "BK Serif", "size": 16, "color": "#5d5244", "align": "left"},
      {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 400, "y": 388, "w": 176, "h": 24, "font": "BK Serif", "size": 16, "color": "#5d5244", "align": "right"},
      {"id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned", "x": 300, "y": 416, "w": 270, "h": 24, "font": "BK Serif", "size": 16, "color": "#5d5244", "align": "right"},
      {"id": "reactions", "type": "reactbar", "size": 26, "x": 30, "y": 420, "w": 250, "h": 40},
      {"id": "sleep-clock", "type": "button", "action": "sleep", "src": "art/alarm-clock.png", "x": 300, "y": 448, "w": 34, "h": 34},
      {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 340, "y": 452, "w": 232, "h": 26, "font": "BK Serif", "size": 16, "color": "#1f1b17", "align": "left", "weight": 500},
      {"id": "now-status", "type": "text", "bind": "status", "x": 228, "y": 366, "w": 348, "h": 20, "font": "BK Serif", "size": 14, "color": "#c8321f", "align": "left", "italic": true},
      {"id": "reaction-air", "type": "reactfloat", "x": 12, "y": 204, "w": 576, "h": 282},
      {"id": "tv", "type": "tv", "x": 20, "y": 522, "w": 322, "h": 246, "font": "BK Serif", "size": 18, "color": "#efe5cc"},
      {"id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item", "x": 8, "y": 786, "w": 346, "h": 24, "font": "BK Serif", "size": 15, "color": "#f6eed8", "align": "center", "italic": true},
      {"id": "fireplace", "type": "video", "video": "art/fireplace.mp4", "x": 372, "y": 522, "w": 208, "h": 246},
      {"id": "fire-volume", "type": "slider", "label": "Fire", "x": 366, "y": 786, "w": 220, "h": 30},
      {"id": "guide-frame", "look": "listings", "x": 12, "y": 850, "w": 576, "h": 1278},
      {"id": "guide", "type": "guide", "mode": "list", "x": 18, "y": 862, "w": 564, "h": 1262, "rowHeight": 64, "labelWidth": 200, "font": "BK Serif", "size": 17, "color": "#1f1b17", "dim": "#5d5244", "highlight": "#c8321f", "labelFont": "BK Serif", "line": "rgba(31,27,23,.22)", "block": "transparent", "selected": "rgba(227,169,47,.28)", "paper": "#e9e1c9"},
      {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 12, "y": 2144, "w": 576, "h": 30, "font": "BK Script", "size": 26, "color": "#e3a92f", "align": "center", "uppercase": false, "spacing": 0, "italic": true, "weight": 700},
      {"id": "ad", "type": "ad", "every": 40, "x": 20, "y": 2178, "w": 560, "h": 560, "font": "BK Serif", "size": 14, "color": "#cdbf9f", "dim": "#cdbf9f"},
      {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 20, "y": 2753, "w": 90, "h": 30, "font": "BK Serif", "size": 15, "color": "#efe5cc", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "weight": 500},
      {"id": "ads-link", "type": "text", "text": "Vintage gallery", "href": "ads.html", "x": 110, "y": 2753, "w": 150, "h": 30, "font": "BK Serif", "size": 15, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 270, "y": 2753, "w": 260, "h": 30, "font": "BK Serif", "size": 15, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "ticker-strip", "src": "art/phone/ticker-strip.png", "x": 0, "y": 150, "w": 600, "h": 44, "look": "strip"},
      {"id": "ticker", "type": "ticker", "show": ["listeners", "members", "tips", "announcements"], "speed": 60, "x": 12, "y": 150, "w": 576, "h": 44, "font": "BK Serif", "size": 17, "color": "#1f1b17", "uppercase": false, "spacing": 0, "italic": false, "stretch": 80, "weight": 700}
    ]
  }
};
