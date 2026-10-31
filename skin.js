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
    {"id": "power-switch", "type": "button", "action": "power", "src": "art/on-air.png", "x": 640, "y": 22, "w": 190, "h": 56, "look": "onair"},
    {"id": "status", "type": "text", "bind": "status", "x": 640, "y": 80, "w": 190, "h": 22, "font": "Archivo", "size": 13, "color": "#5d5244", "align": "center"},
    {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 870, "y": 60, "w": 70, "h": 30, "font": "Archivo", "size": 17, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "ads-link", "type": "text", "text": "Ads", "href": "ads.html", "x": 950, "y": 60, "w": 50, "h": 30, "font": "Archivo", "size": 17, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 1010, "y": 60, "w": 230, "h": 30, "font": "Archivo", "size": 17, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 1030, "y": 24, "w": 160, "h": 30, "font": "Archivo", "size": 17, "color": "#c8321f", "align": "left", "weight": 600},
    {"id": "tip-link", "type": "text", "bind": "tip", "href": "config.tip", "x": 1200, "y": 24, "w": 170, "h": 30, "font": "Archivo", "size": 17, "color": "#c8321f", "weight": 600},
    {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 870, "y": 24, "w": 150, "h": 30, "font": "Archivo", "size": 17, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "clock", "type": "text", "bind": "clock", "x": 1370, "y": 28, "w": 190, "h": 50, "font": "Archivo", "size": 42, "color": "#1f1b17", "align": "right", "weight": 800, "stretch": 72},
    {"id": "player", "src": "art/player.png", "x": 40, "y": 116, "w": 1520, "h": 240, "look": "wall"},
    {"id": "now-card", "look": "paper", "x": 286, "y": 128, "w": 568, "h": 220},
    {"id": "station-card", "type": "card", "x": 60, "y": 131, "w": 210, "h": 210},
    {"id": "station-name", "type": "text", "bind": "station.name", "x": 300, "y": 134, "w": 760, "h": 46, "font": "Bodoni Moda", "size": 46, "color": "#1f1b17", "align": "left", "uppercase": false, "spacing": 0, "italic": true, "weight": 900},
    {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 300, "y": 182, "w": 400, "h": 26, "font": "Archivo", "size": 15, "color": "#5d5244", "align": "left", "uppercase": false, "spacing": 0, "italic": true},
    {"id": "now-series", "type": "text", "bind": "now.series", "x": 300, "y": 214, "w": 560, "h": 34, "font": "Archivo", "size": 23, "color": "#c8321f", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "stretch": 75, "weight": 800},
    {"id": "now-title", "type": "text", "bind": "now.title", "x": 300, "y": 246, "w": 560, "h": 46, "font": "Bodoni Moda", "size": 32, "color": "#1f1b17", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "weight": 600},
    {"id": "now-date", "type": "text", "bind": "now.date", "x": 300, "y": 294, "w": 200, "h": 26, "font": "Archivo", "size": 15, "color": "#5d5244", "align": "left", "uppercase": false, "spacing": 0, "italic": false},
    {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 510, "y": 294, "w": 150, "h": 26, "font": "Archivo", "size": 15, "color": "#5d5244", "align": "left", "uppercase": false, "spacing": 0, "italic": false},
    {"id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned", "x": 670, "y": 294, "w": 190, "h": 26, "font": "Archivo", "size": 15, "color": "#5d5244", "align": "left", "uppercase": false, "spacing": 0, "italic": false},
    {"id": "reactions", "type": "reactbar", "size": 22, "x": 300, "y": 324, "w": 220, "h": 30},
    {"id": "ambience-switch", "type": "text", "bind": "ambience", "action": "ambience", "x": 530, "y": 326, "w": 330, "h": 26, "font": "Archivo", "size": 15, "color": "#5d5244", "align": "left", "uppercase": false, "spacing": 0, "italic": true},
    {"id": "reaction-air", "type": "reactfloat", "x": 300, "y": 116, "w": 560, "h": 236},
    {"id": "guide-frame", "src": "art/guide-frame.png", "x": 40, "y": 372, "w": 1120, "h": 566, "look": "listings"},
    {"id": "guide", "type": "guide", "mode": "timeline", "hours": 2, "x": 48, "y": 386, "w": 1104, "h": 546, "rowHeight": 24, "labelWidth": 280, "font": "Archivo", "size": 14, "color": "#1f1b17", "dim": "#5d5244", "highlight": "#c8321f", "labelFont": "Archivo", "line": "rgba(31,27,23,.22)", "block": "transparent", "selected": "rgba(227,169,47,.28)", "paper": "#e9e1c9"},
    {"id": "tv", "type": "tv", "x": 880, "y": 124, "w": 280, "h": 210, "font": "Archivo", "size": 18, "color": "#efe5cc"},
    {"id": "tv-set", "src": "art/tv-set.png", "x": 868, "y": 118, "w": 304, "h": 222, "look": "tvset"},
    {"id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item", "x": 860, "y": 336, "w": 320, "h": 18, "font": "Archivo", "size": 13, "color": "#f6eed8", "align": "center", "uppercase": false, "spacing": 0, "italic": true},
    {"id": "fireplace", "type": "video", "video": "art/fireplace.mp4", "x": 1214, "y": 130, "w": 318, "h": 198},
    {"id": "fireplace-frame", "src": "art/fireplace-frame.png", "look": "screen", "x": 1202, "y": 122, "w": 342, "h": 214},
    {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 1190, "y": 372, "w": 370, "h": 30, "font": "Bodoni Moda", "size": 28, "color": "#e3a92f", "align": "center", "uppercase": false, "spacing": 0, "italic": true, "weight": 700},
    {"id": "ad", "type": "ad", "every": 40, "x": 1190, "y": 408, "w": 370, "h": 530, "font": "Archivo", "size": 14, "color": "#cdbf9f", "dim": "#cdbf9f"},
    {"id": "ticker-strip", "src": "art/ticker-strip.png", "x": 0, "y": 950, "w": 1600, "h": 50, "look": "strip"},
    {"id": "ticker", "type": "ticker", "show": ["listeners", "now"], "speed": 70, "x": 20, "y": 950, "w": 1560, "h": 50, "font": "Archivo", "size": 21, "color": "#1f1b17", "uppercase": false, "spacing": 0, "italic": false, "stretch": 80, "weight": 700}
  ],
  "portrait": {
    "stage": {"width": 600, "height": 2380, "color": "transparent", "fit": "width"},
    "layers": [
      {"id": "background", "type": "plate", "src": "art/phone/background.png", "x": 0, "y": 0, "w": 600, "h": 2380, "look": "wall"},
      {"id": "masthead", "look": "paper", "x": 8, "y": 8, "w": 584, "h": 134},
      {"id": "logo", "src": "art/phone/logo.png", "x": 20, "y": 14, "w": 400, "h": 74, "look": "logo"},
      {"id": "power-switch", "type": "button", "action": "power", "src": "art/phone/on-air.png", "x": 20, "y": 94, "w": 130, "h": 40, "look": "onair"},
      {"id": "status", "type": "text", "bind": "status", "x": 158, "y": 104, "w": 150, "h": 22, "font": "Archivo", "size": 12, "color": "#5d5244", "align": "left"},
      {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 310, "y": 100, "w": 130, "h": 26, "font": "Archivo", "size": 14, "color": "#c8321f", "align": "left", "weight": 600},
      {"id": "tip-link", "type": "text", "bind": "tip", "href": "config.tip", "x": 440, "y": 100, "w": 145, "h": 26, "align": "right", "font": "Archivo", "size": 14, "color": "#c8321f", "weight": 600},
      {"id": "clock", "type": "text", "bind": "clock", "x": 420, "y": 24, "w": 160, "h": 40, "font": "Archivo", "size": 30, "color": "#1f1b17", "align": "right", "weight": 800, "stretch": 72},
      {"id": "player", "src": "art/phone/player.png", "x": 12, "y": 152, "w": 576, "h": 292, "look": "paper"},
      {"id": "station-card", "type": "card", "x": 30, "y": 170, "w": 150, "h": 150},
      {"id": "station-name", "type": "text", "bind": "station.name", "x": 196, "y": 170, "w": 380, "h": 36, "font": "Bodoni Moda", "size": 32, "color": "#1f1b17", "align": "left", "uppercase": false, "spacing": 0, "italic": true, "weight": 900},
      {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 196, "y": 208, "w": 380, "h": 22, "font": "Archivo", "size": 13, "color": "#5d5244", "align": "left", "uppercase": false, "spacing": 0, "italic": true},
      {"id": "now-series", "type": "text", "bind": "now.series", "x": 196, "y": 236, "w": 380, "h": 30, "font": "Archivo", "size": 18, "color": "#c8321f", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "stretch": 75, "weight": 800},
      {"id": "now-title", "type": "text", "bind": "now.title", "x": 196, "y": 268, "w": 380, "h": 62, "font": "Bodoni Moda", "size": 23, "color": "#1f1b17", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "weight": 600},
      {"id": "now-date", "type": "text", "bind": "now.date", "x": 30, "y": 336, "w": 260, "h": 24, "font": "Archivo", "size": 14, "color": "#5d5244", "align": "left", "uppercase": false, "spacing": 0, "italic": false},
      {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 300, "y": 336, "w": 270, "h": 24, "font": "Archivo", "size": 14, "color": "#5d5244", "align": "right", "uppercase": false, "spacing": 0, "italic": false},
      {"id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned", "x": 30, "y": 364, "w": 260, "h": 24, "font": "Archivo", "size": 14, "color": "#5d5244", "align": "left", "uppercase": false, "spacing": 0, "italic": false},
      {"id": "reactions", "type": "reactbar", "size": 26, "x": 30, "y": 370, "w": 250, "h": 40},
      {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 300, "y": 376, "w": 280, "h": 28, "font": "Archivo", "size": 14, "color": "#5d5244", "align": "right", "uppercase": false, "spacing": 0, "italic": false, "weight": 500},
      {"id": "ambience-switch", "type": "text", "bind": "ambience", "action": "ambience", "x": 30, "y": 414, "w": 540, "h": 22, "font": "Archivo", "size": 13, "color": "#5d5244", "align": "center", "uppercase": false, "spacing": 0, "italic": true},
      {"id": "reaction-air", "type": "reactfloat", "x": 12, "y": 152, "w": 576, "h": 282},
      {"id": "tv", "type": "tv", "x": 20, "y": 470, "w": 322, "h": 246, "font": "Archivo", "size": 18, "color": "#efe5cc"},
      {"id": "tv-set", "src": "art/phone/tv-set.png", "x": 8, "y": 458, "w": 346, "h": 270, "look": "tvset"},
      {"id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item", "x": 8, "y": 734, "w": 346, "h": 22, "font": "Archivo", "size": 13, "color": "#f6eed8", "align": "center", "uppercase": false, "spacing": 0, "italic": true},
      {"id": "fireplace", "type": "video", "video": "art/fireplace.mp4", "x": 372, "y": 470, "w": 208, "h": 246},
      {"id": "fireplace-frame", "src": "art/phone/fireplace-frame.png", "look": "screen", "x": 360, "y": 458, "w": 232, "h": 270},
      {"id": "guide-frame", "look": "listings", "x": 12, "y": 798, "w": 576, "h": 860},
      {"id": "guide", "type": "guide", "mode": "list", "x": 18, "y": 810, "w": 564, "h": 844, "rowHeight": 64, "labelWidth": 200, "font": "Archivo", "size": 17, "color": "#1f1b17", "dim": "#5d5244", "highlight": "#c8321f", "labelFont": "Archivo", "line": "rgba(31,27,23,.22)", "block": "transparent", "selected": "rgba(227,169,47,.28)", "paper": "#e9e1c9"},
      {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 12, "y": 1674, "w": 576, "h": 30, "font": "Bodoni Moda", "size": 26, "color": "#e3a92f", "align": "center", "uppercase": false, "spacing": 0, "italic": true, "weight": 700},
      {"id": "ad", "type": "ad", "every": 40, "x": 20, "y": 1708, "w": 560, "h": 560, "font": "Archivo", "size": 14, "color": "#cdbf9f", "dim": "#cdbf9f"},
      {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 20, "y": 2283, "w": 90, "h": 30, "font": "Archivo", "size": 15, "color": "#efe5cc", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "weight": 500},
      {"id": "ads-link", "type": "text", "text": "Ads", "href": "ads.html", "x": 110, "y": 2283, "w": 60, "h": 30, "font": "Archivo", "size": 15, "color": "#efe5cc", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "weight": 500},
      {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 180, "y": 2283, "w": 260, "h": 30, "font": "Archivo", "size": 15, "color": "#efe5cc", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "weight": 500},
      {"id": "ticker-strip", "src": "art/phone/ticker-strip.png", "x": 0, "y": 2324, "w": 600, "h": 44, "look": "strip"},
      {"id": "ticker", "type": "ticker", "show": ["listeners", "now"], "speed": 60, "x": 12, "y": 2324, "w": 576, "h": 44, "font": "Archivo", "size": 17, "color": "#1f1b17", "uppercase": false, "spacing": 0, "italic": false, "stretch": 80, "weight": 700}
    ]
  }
};
