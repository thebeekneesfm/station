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
    {"id": "masthead", "look": "paper", "x": 24, "y": 10, "w": 1552, "h": 112},
    {"id": "logo", "src": "art/logo.png", "x": 44, "y": 16, "w": 650, "h": 86, "look": "logo"},
    {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 712, "y": 40, "w": 84, "h": 34, "font": "BK Serif", "size": 24, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "ads-link", "type": "text", "text": "Vintage gallery", "href": "ads.html", "x": 808, "y": 40, "w": 176, "h": 34, "font": "BK Serif", "size": 24, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 992, "y": 40, "w": 250, "h": 34, "font": "BK Serif", "size": 24, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "clock", "type": "text", "bind": "clock", "x": 1370, "y": 28, "w": 190, "h": 50, "font": "BK Serif", "size": 42, "color": "#1f1b17", "align": "right", "weight": 700},
    {"id": "listeners-total", "type": "text", "bind": "listeners.total", "x": 1250, "y": 88, "w": 310, "h": 24, "font": "BK Serif", "size": 17, "color": "#5d5244", "align": "right", "italic": true},
    {"id": "weather", "type": "weather", "x": 1252, "y": 30, "w": 112, "h": 46, "font": "BK Serif", "size": 30, "color": "#1f1b17", "weight": 700},
    {"id": "player", "src": "art/player.png", "x": 40, "y": 128, "w": 1520, "h": 300, "look": "wall"},
    {"id": "now-card", "look": "paper", "x": 362, "y": 140, "w": 494, "h": 280},
    {"id": "station-card", "type": "card", "action": "power", "x": 48, "y": 138, "w": 288, "h": 288},
    {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 378, "y": 154, "w": 250, "h": 24, "font": "BK Serif", "size": 18, "color": "#5d5244", "align": "left", "italic": true},
    {"id": "now-series", "type": "text", "bind": "now.series", "x": 378, "y": 182, "w": 466, "h": 50, "font": "BK Head", "size": 42, "color": "#c8321f", "align": "left", "weight": 600, "uppercase": true, "spacing": 0.5},
    {"id": "now-title", "type": "text", "bind": "now.title", "href": "now.item", "x": 378, "y": 236, "w": 466, "h": 104, "font": "BK Serif", "size": 46, "color": "#1f1b17", "align": "left", "weight": 400, "lineHeight": 1.05},
    {"id": "now-date", "type": "text", "bind": "now.date", "x": 378, "y": 348, "w": 200, "h": 26, "font": "BK Serif", "size": 21, "color": "#5d5244", "align": "left"},
    {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 566, "y": 348, "w": 120, "h": 26, "font": "BK Serif", "size": 21, "color": "#5d5244", "align": "left"},
    {"id": "sleep-clock", "type": "button", "action": "sleep", "src": "art/alarm-clock.png", "x": 378, "y": 378, "w": 40, "h": 40},
    {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 424, "y": 386, "w": 210, "h": 28, "font": "BK Serif", "size": 20, "color": "#1f1b17", "align": "left", "weight": 500},
    {"id": "tip-link", "type": "text", "bind": "tip", "href": "config.tip", "x": 640, "y": 386, "w": 204, "h": 30, "font": "BK Serif", "size": 19, "color": "#c8321f", "align": "right", "weight": 600},
    {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 694, "y": 349, "w": 150, "h": 30, "font": "BK Serif", "size": 18, "color": "#1f1b17", "align": "right", "weight": 500},
    {"id": "now-status", "type": "text", "bind": "status", "x": 600, "y": 154, "w": 242, "h": 24, "font": "BK Serif", "size": 18, "color": "#c8321f", "align": "right", "italic": true},
    {"id": "guide-frame", "src": "art/guide-frame.png", "x": 40, "y": 444, "w": 1120, "h": 504, "look": "listings"},
    {"id": "guide", "type": "guide", "mode": "nownext", "x": 48, "y": 458, "w": 1104, "h": 484, "rowHeight": 23, "labelWidth": 280, "font": "BK Serif", "size": 16, "color": "#1f1b17", "dim": "#5d5244", "highlight": "#c8321f", "labelFont": "BK Serif", "line": "rgba(31,27,23,.22)", "block": "transparent", "selected": "rgba(227,169,47,.28)", "paper": "#e9e1c9"},
    {"id": "tv", "type": "tv", "x": 880, "y": 136, "w": 280, "h": 210, "font": "BK Serif", "size": 18, "color": "#efe5cc"},
    {"id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item", "x": 860, "y": 348, "w": 320, "h": 22, "font": "BK Serif", "size": 17, "color": "#f6eed8", "align": "center", "italic": true},
    {"id": "fireplace", "type": "video", "video": "art/fireplace.mp4", "x": 1214, "y": 142, "w": 318, "h": 198},
    {"id": "fire-volume", "type": "slider", "label": "Fire volume", "x": 1206, "y": 350, "w": 334, "h": 30},
    {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 1190, "y": 444, "w": 370, "h": 30, "font": "BK Script", "size": 28, "color": "#e3a92f", "align": "center", "uppercase": false, "spacing": 0, "italic": true, "weight": 700},
    {"id": "ad", "type": "ad", "every": 40, "x": 1190, "y": 480, "w": 370, "h": 458, "font": "BK Serif", "size": 16, "color": "#cdbf9f", "dim": "#cdbf9f"},
    {"id": "ticker-strip", "src": "art/ticker-strip.png", "x": 0, "y": 950, "w": 1600, "h": 50, "look": "strip"},
    {"id": "ticker", "type": "ticker", "show": ["members", "tips", "announcements"], "speed": 70, "x": 20, "y": 950, "w": 1560, "h": 50, "font": "BK Serif", "size": 24, "color": "#1f1b17", "uppercase": false, "spacing": 0, "italic": false, "stretch": 80, "weight": 700}
  ],
  "portrait": {
    "stage": {"width": 600, "height": 2824, "color": "transparent", "fit": "width"},
    "layers": [
      {"id": "background", "type": "plate", "src": "art/phone/background.png", "x": 0, "y": 0, "w": 600, "h": 2824, "look": "wall"},
      {"id": "masthead", "look": "paper", "x": 8, "y": 8, "w": 584, "h": 134},
      {"id": "logo", "src": "art/phone/logo.png", "x": 20, "y": 14, "w": 440, "h": 74, "look": "logo"},
      {"id": "clock", "type": "text", "bind": "clock", "x": 420, "y": 24, "w": 160, "h": 40, "font": "BK Serif", "size": 30, "color": "#1f1b17", "align": "right", "weight": 700},
      {"id": "listeners-total", "type": "text", "bind": "listeners.total", "x": 20, "y": 100, "w": 300, "h": 28, "font": "BK Serif", "size": 17, "color": "#5d5244", "align": "left", "italic": true},
      {"id": "weather", "type": "weather", "x": 470, "y": 66, "w": 110, "h": 30, "font": "BK Serif", "size": 20, "color": "#1f1b17", "weight": 700, "align": "right"},
      {"id": "player", "src": "art/phone/player.png", "x": 12, "y": 204, "w": 576, "h": 318, "look": "paper"},
      {"id": "station-card", "type": "card", "action": "power", "x": 22, "y": 216, "w": 236, "h": 236},
      {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 272, "y": 222, "w": 306, "h": 22, "font": "BK Serif", "size": 15, "color": "#5d5244", "align": "left", "italic": true},
      {"id": "now-series", "type": "text", "bind": "now.series", "x": 272, "y": 244, "w": 306, "h": 40, "font": "BK Head", "size": 30, "color": "#c8321f", "align": "left", "weight": 600, "uppercase": true, "spacing": 0.5},
      {"id": "now-title", "type": "text", "bind": "now.title", "href": "now.item", "x": 272, "y": 288, "w": 306, "h": 118, "font": "BK Serif", "size": 30, "color": "#1f1b17", "align": "left", "weight": 400, "lineHeight": 1.05},
      {"id": "now-date", "type": "text", "bind": "now.date", "x": 24, "y": 466, "w": 270, "h": 24, "font": "BK Serif", "size": 18, "color": "#5d5244", "align": "left"},
      {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 300, "y": 466, "w": 276, "h": 24, "font": "BK Serif", "size": 18, "color": "#5d5244", "align": "right"},
      {"id": "sleep-clock", "type": "button", "action": "sleep", "src": "art/alarm-clock.png", "x": 24, "y": 488, "w": 30, "h": 30},
      {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 60, "y": 492, "w": 140, "h": 26, "font": "BK Serif", "size": 16, "color": "#1f1b17", "align": "left", "weight": 500},
      {"id": "tip-link", "type": "text", "bind": "tip", "href": "config.tip", "x": 366, "y": 492, "w": 210, "h": 28, "font": "BK Serif", "size": 16, "color": "#c8321f", "align": "right", "weight": 600},
      {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 196, "y": 492, "w": 170, "h": 28, "font": "BK Serif", "size": 16, "color": "#1f1b17", "align": "center", "weight": 500},
      {"id": "now-status", "type": "text", "bind": "status", "x": 272, "y": 410, "w": 306, "h": 20, "font": "BK Serif", "size": 14, "color": "#c8321f", "align": "left", "italic": true},
      {"id": "tv", "type": "tv", "x": 20, "y": 548, "w": 322, "h": 246, "font": "BK Serif", "size": 18, "color": "#efe5cc"},
      {"id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item", "x": 8, "y": 812, "w": 346, "h": 24, "font": "BK Serif", "size": 15, "color": "#f6eed8", "align": "center", "italic": true},
      {"id": "fireplace", "type": "video", "video": "art/fireplace.mp4", "x": 372, "y": 548, "w": 208, "h": 246},
      {"id": "fire-volume", "type": "slider", "label": "Fire", "x": 366, "y": 812, "w": 220, "h": 30},
      {"id": "guide-frame", "look": "listings", "x": 12, "y": 876, "w": 576, "h": 1278},
      {"id": "guide", "type": "guide", "mode": "list", "x": 18, "y": 888, "w": 564, "h": 1262, "rowHeight": 64, "labelWidth": 200, "font": "BK Serif", "size": 17, "color": "#1f1b17", "dim": "#5d5244", "highlight": "#c8321f", "labelFont": "BK Serif", "line": "rgba(31,27,23,.22)", "block": "transparent", "selected": "rgba(227,169,47,.28)", "paper": "#e9e1c9"},
      {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 12, "y": 2170, "w": 576, "h": 30, "font": "BK Script", "size": 26, "color": "#e3a92f", "align": "center", "uppercase": false, "spacing": 0, "italic": true, "weight": 700},
      {"id": "ad", "type": "ad", "every": 40, "x": 20, "y": 2204, "w": 560, "h": 560, "font": "BK Serif", "size": 14, "color": "#cdbf9f", "dim": "#cdbf9f"},
      {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 20, "y": 2779, "w": 90, "h": 30, "font": "BK Serif", "size": 15, "color": "#efe5cc", "align": "left", "uppercase": false, "spacing": 0, "italic": false, "weight": 500},
      {"id": "ads-link", "type": "text", "text": "Vintage gallery", "href": "ads.html", "x": 110, "y": 2779, "w": 150, "h": 30, "font": "BK Serif", "size": 15, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 270, "y": 2779, "w": 260, "h": 30, "font": "BK Serif", "size": 15, "color": "#efe5cc", "align": "left", "weight": 500},
      {"id": "ticker-strip", "src": "art/phone/ticker-strip.png", "x": 0, "y": 150, "w": 600, "h": 44, "look": "strip"},
      {"id": "ticker", "type": "ticker", "show": ["members", "tips", "announcements"], "speed": 60, "x": 12, "y": 150, "w": 576, "h": 44, "font": "BK Serif", "size": 17, "color": "#1f1b17", "uppercase": false, "spacing": 0, "italic": false, "stretch": 80, "weight": 700}
    ]
  }
};
