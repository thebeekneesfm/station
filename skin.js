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
    "color": "#211c18"
  },
  "fonts": [
    {
      "family": "Radio Hand",
      "src": "art/fonts/your-font.woff2"
    }
  ],
  "reactions": [
    {
      "id": "ghost",
      "emoji": "👻",
      "label": "Spooky"
    },
    {
      "id": "heart",
      "emoji": "♥",
      "label": "Love it"
    },
    {
      "id": "horn",
      "emoji": "🎺",
      "label": "Swinging"
    },
    {
      "id": "laugh",
      "emoji": "😂",
      "label": "Funny"
    }
  ],
  "sound": {
    "level": true,
    "declick": 0.5,
    "tone": 9000
  },
  "sounds": {
    "static": "art/sounds/static.mp3"
  },
  "name": "Beeknees.radio",
  "tagline": "Old time radio · always on · from the Internet Archive",
  "layers": [
    {"id": "background", "type": "plate", "src": "art/background.png", "x": 0, "y": 0, "w": 1600, "h": 1000, "look": "walnut"},
    {"id": "logo", "src": "art/logo.png", "x": 40, "y": 22, "w": 460, "h": 80, "look": "logo"},
    {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 920, "y": 44, "w": 90, "h": 34, "font": "Oswald", "size": 16, "color": "#f2e6cc", "align": "left", "uppercase": true, "spacing": 2},
    {"id": "ads-link", "type": "text", "text": "Ads", "href": "ads.html", "x": 1010, "y": 44, "w": 70, "h": 34, "font": "Oswald", "size": 16, "color": "#f2e6cc", "align": "left", "uppercase": true, "spacing": 2},
    {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 1080, "y": 44, "w": 250, "h": 34, "font": "Oswald", "size": 16, "color": "#f2e6cc", "align": "left", "uppercase": true, "spacing": 2},
    {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 520, "y": 46, "w": 210, "h": 30, "font": "Oswald", "size": 16, "color": "#d6a03c", "align": "left", "uppercase": true, "spacing": 2},
    {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 740, "y": 46, "w": 170, "h": 30, "font": "Oswald", "size": 16, "color": "#f2e6cc", "align": "left", "uppercase": true, "spacing": 2},
    {"id": "clock", "type": "text", "bind": "clock", "x": 1340, "y": 30, "w": 220, "h": 56, "font": "Oswald", "size": 36, "color": "#f2e6cc", "align": "right", "spacing": 1},
    {"id": "player", "src": "art/player.png", "x": 40, "y": 116, "w": 1520, "h": 240, "look": "cabinet"},
    {"id": "now-card", "look": "paper", "x": 286, "y": 128, "w": 568, "h": 220},
    {"id": "station-card", "type": "card", "x": 60, "y": 131, "w": 210, "h": 210},
    {"id": "station-name", "type": "text", "bind": "station.name", "x": 300, "y": 134, "w": 760, "h": 46, "font": "Yellowtail", "size": 44, "color": "#b23a2a", "align": "left"},
    {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 300, "y": 182, "w": 400, "h": 26, "font": "Oswald", "size": 15, "color": "#6b5443", "align": "left", "uppercase": true, "spacing": 2},
    {"id": "now-series", "type": "text", "bind": "now.series", "x": 300, "y": 214, "w": 560, "h": 34, "font": "Oswald", "size": 21, "color": "#2b1d14", "align": "left", "uppercase": true, "spacing": 1.5},
    {"id": "now-title", "type": "text", "bind": "now.title", "x": 300, "y": 246, "w": 560, "h": 46, "font": "Courier Prime", "size": 30, "color": "#2b1d14", "align": "left", "weight": 700},
    {"id": "now-date", "type": "text", "bind": "now.date", "x": 300, "y": 294, "w": 200, "h": 26, "font": "Courier Prime", "size": 15, "color": "#6b5443", "align": "left"},
    {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 510, "y": 294, "w": 150, "h": 26, "font": "Courier Prime", "size": 15, "color": "#6b5443", "align": "left"},
    {"id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned", "x": 670, "y": 294, "w": 190, "h": 26, "font": "Courier Prime", "size": 15, "color": "#6b5443", "align": "left"},
    {"id": "power-switch", "type": "button", "action": "power", "src": "art/power-switch.png", "x": 1200, "y": 150, "w": 90, "h": 90, "look": "power"},
    {"id": "light-off", "src": "art/light-off.png", "when": "off", "x": 1230, "y": 250, "w": 30, "h": 30, "look": "lamp-off"},
    {"id": "light-on", "src": "art/light-on.png", "when": "on", "x": 1230, "y": 250, "w": 30, "h": 30, "look": "lamp-on"},
    {"id": "volume-knob", "type": "knob", "bind": "volume", "src": "art/knob-volume.png", "x": 1310, "y": 140, "w": 100, "h": 100, "turn": [-140, 140], "look": "knob"},
    {"id": "channel-up", "type": "button", "action": "prev", "src": "art/channel-up.png", "x": 1430, "y": 140, "w": 110, "h": 50, "look": "chan-up"},
    {"id": "channel-down", "type": "button", "action": "next", "src": "art/channel-down.png", "x": 1430, "y": 196, "w": 110, "h": 50, "look": "chan-down"},
    {"id": "reactions", "type": "reactbar", "size": 24, "x": 300, "y": 324, "w": 220, "h": 30},
    {"id": "ambience-switch", "type": "text", "bind": "ambience", "action": "ambience", "station": "anotherroom", "x": 530, "y": 326, "w": 330, "h": 26, "font": "Courier Prime", "size": 14, "color": "#6b5443", "align": "left"},
    {"id": "reaction-air", "type": "reactfloat", "x": 300, "y": 116, "w": 560, "h": 236},
    {"id": "status", "type": "text", "bind": "status", "x": 1200, "y": 292, "w": 340, "h": 28, "font": "Oswald", "size": 16, "color": "#f2e6cc", "align": "center", "uppercase": true, "spacing": 2},
    {"id": "clean-switch", "type": "text", "bind": "clean", "action": "clean", "x": 1190, "y": 322, "w": 360, "h": 26, "font": "Courier Prime", "size": 13, "color": "#c9a35a", "align": "center"},
    {"id": "guide-frame", "src": "art/guide-frame.png", "x": 40, "y": 372, "w": 1120, "h": 566, "look": "listings"},
    {"id": "guide", "type": "guide", "mode": "timeline", "hours": 2, "x": 48, "y": 386, "w": 1104, "h": 546, "rowHeight": 26, "labelWidth": 280, "font": "Courier Prime", "size": 14, "color": "#2b1d14", "dim": "#6b5443", "highlight": "#b23a2a", "labelFont": "Oswald", "line": "rgba(43,29,20,.18)", "block": "rgba(43,29,20,.06)", "selected": "rgba(47,127,122,.2)", "paper": "#efe2c4"},
    {"id": "tv", "type": "tv", "x": 880, "y": 124, "w": 280, "h": 210, "font": "Oswald", "size": 18, "color": "#f2e6cc"},
    {"id": "tv-set", "src": "art/tv-set.png", "x": 868, "y": 118, "w": 304, "h": 222, "look": "tvset"},
    {"id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item", "x": 860, "y": 336, "w": 320, "h": 18, "font": "Courier Prime", "size": 13, "color": "#d8c7a5", "align": "center"},
    {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 1190, "y": 372, "w": 370, "h": 30, "font": "Yellowtail", "size": 30, "color": "#d6a03c", "align": "center"},
    {"id": "ad", "type": "ad", "every": 40, "x": 1190, "y": 408, "w": 370, "h": 530, "font": "Courier Prime", "size": 14, "color": "#f2e6cc", "dim": "#d8c7a5"},
    {"id": "ticker-strip", "src": "art/ticker-strip.png", "x": 0, "y": 950, "w": 1600, "h": 50, "look": "strip"},
    {"id": "ticker", "type": "ticker", "show": ["listeners", "now"], "speed": 70, "x": 20, "y": 950, "w": 1560, "h": 50, "font": "Courier Prime", "size": 20, "color": "#f2e6cc"},
    {"id": "grain", "type": "plate", "src": "art/grain.png", "blend": "multiply", "opacity": 0.4, "x": 0, "y": 0, "w": 1600, "h": 1000, "look": "grain"}
  ],
  "portrait": {
    "stage": {"width": 600, "height": 2430, "color": "#211c18", "fit": "width"},
    "layers": [
      {"id": "background", "type": "plate", "src": "art/phone/background.png", "x": 0, "y": 0, "w": 600, "h": 2430, "look": "walnut"},
      {"id": "logo", "src": "art/phone/logo.png", "x": 20, "y": 20, "w": 380, "h": 60, "look": "logo"},
      {"id": "clock", "type": "text", "bind": "clock", "x": 400, "y": 26, "w": 180, "h": 44, "font": "Oswald", "size": 26, "color": "#f2e6cc", "align": "right", "spacing": 1},
      {"id": "player", "src": "art/phone/player.png", "x": 12, "y": 96, "w": 576, "h": 410, "look": "cabinet"},
      {"id": "now-card", "look": "paper", "x": 188, "y": 106, "w": 390, "h": 172},
      {"id": "station-card", "type": "card", "x": 30, "y": 114, "w": 150, "h": 150},
      {"id": "station-name", "type": "text", "bind": "station.name", "x": 196, "y": 114, "w": 380, "h": 36, "font": "Yellowtail", "size": 32, "color": "#b23a2a", "align": "left"},
      {"id": "station-listeners", "type": "text", "bind": "station.listeners", "x": 196, "y": 152, "w": 380, "h": 22, "font": "Oswald", "size": 13, "color": "#6b5443", "align": "left", "uppercase": true, "spacing": 2},
      {"id": "now-series", "type": "text", "bind": "now.series", "x": 196, "y": 180, "w": 380, "h": 30, "font": "Oswald", "size": 17, "color": "#2b1d14", "align": "left", "uppercase": true, "spacing": 1.5},
      {"id": "now-title", "type": "text", "bind": "now.title", "x": 196, "y": 212, "w": 380, "h": 62, "font": "Courier Prime", "size": 22, "color": "#2b1d14", "align": "left", "weight": 700},
      {"id": "now-date", "type": "text", "bind": "now.date", "x": 30, "y": 280, "w": 260, "h": 24, "font": "Courier Prime", "size": 14, "color": "#d8c7a5", "align": "left"},
      {"id": "now-left", "type": "text", "bind": "now.remaining", "x": 300, "y": 280, "w": 270, "h": 24, "font": "Courier Prime", "size": 14, "color": "#d8c7a5", "align": "right"},
      {"id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned", "x": 30, "y": 308, "w": 260, "h": 24, "font": "Courier Prime", "size": 14, "color": "#d8c7a5", "align": "left"},
      {"id": "power-switch", "type": "button", "action": "power", "src": "art/phone/power-switch.png", "x": 30, "y": 344, "w": 64, "h": 64, "look": "power"},
      {"id": "volume-knob", "type": "knob", "bind": "volume", "src": "art/phone/knob-volume.png", "x": 108, "y": 344, "w": 64, "h": 64, "turn": [-140, 140], "look": "knob"},
      {"id": "reactions", "type": "reactbar", "size": 30, "x": 30, "y": 440, "w": 250, "h": 40},
      {"id": "recent-link", "type": "text", "text": "Recently played", "action": "recent", "x": 290, "y": 446, "w": 150, "h": 28, "font": "Oswald", "size": 14, "color": "#f2e6cc", "align": "left", "uppercase": true, "spacing": 2},
      {"id": "sleep-timer", "type": "text", "bind": "sleep", "action": "sleep", "x": 440, "y": 446, "w": 140, "h": 28, "font": "Oswald", "size": 14, "color": "#d6a03c", "align": "right", "uppercase": true, "spacing": 2},
      {"id": "ambience-switch", "type": "text", "bind": "ambience", "action": "ambience", "station": "anotherroom", "x": 30, "y": 482, "w": 540, "h": 22, "font": "Courier Prime", "size": 13, "color": "#d8c7a5", "align": "center"},
      {"id": "reaction-air", "type": "reactfloat", "x": 12, "y": 96, "w": 576, "h": 380},
      {"id": "status", "type": "text", "bind": "status", "x": 182, "y": 350, "w": 206, "h": 28, "font": "Oswald", "size": 14, "color": "#f2e6cc", "align": "center", "uppercase": true, "spacing": 2},
      {"id": "clean-switch", "type": "text", "bind": "clean", "action": "clean", "x": 30, "y": 410, "w": 540, "h": 22, "font": "Courier Prime", "size": 13, "color": "#c9a35a", "align": "center"},
      {"id": "channel-up", "type": "button", "action": "prev", "src": "art/phone/channel-up.png", "x": 400, "y": 350, "w": 84, "h": 52, "look": "chan-up"},
      {"id": "channel-down", "type": "button", "action": "next", "src": "art/phone/channel-down.png", "x": 496, "y": 350, "w": 84, "h": 52, "look": "chan-down"},
      {"id": "tv", "type": "tv", "x": 110, "y": 536, "w": 380, "h": 285, "font": "Oswald", "size": 18, "color": "#f2e6cc"},
      {"id": "tv-set", "src": "art/phone/tv-set.png", "x": 90, "y": 520, "w": 420, "h": 320, "look": "tvset"},
      {"id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item", "x": 12, "y": 842, "w": 576, "h": 22, "font": "Courier Prime", "size": 13, "color": "#d8c7a5", "align": "center"},
      {"id": "guide-frame", "look": "listings", "x": 12, "y": 860, "w": 576, "h": 860},
      {"id": "guide", "type": "guide", "mode": "list", "x": 18, "y": 872, "w": 564, "h": 844, "rowHeight": 64, "labelWidth": 200, "font": "Courier Prime", "size": 17, "color": "#2b1d14", "dim": "#6b5443", "highlight": "#b23a2a", "labelFont": "Oswald", "line": "rgba(43,29,20,.18)", "block": "rgba(43,29,20,.06)", "selected": "rgba(47,127,122,.2)", "paper": "#efe2c4"},
      {"id": "ads-heading", "type": "text", "text": "A word from our sponsors", "x": 12, "y": 1736, "w": 576, "h": 30, "font": "Yellowtail", "size": 28, "color": "#d6a03c", "align": "center"},
      {"id": "ad", "type": "ad", "every": 40, "x": 20, "y": 1770, "w": 560, "h": 560, "font": "Courier Prime", "size": 14, "color": "#f2e6cc", "dim": "#d8c7a5"},
      {"id": "about-link", "type": "text", "text": "About", "href": "about.html", "x": 20, "y": 2345, "w": 90, "h": 30, "font": "Oswald", "size": 15, "color": "#f2e6cc", "align": "left", "uppercase": true, "spacing": 2},
      {"id": "ads-link", "type": "text", "text": "Ads", "href": "ads.html", "x": 110, "y": 2345, "w": 60, "h": 30, "font": "Oswald", "size": 15, "color": "#f2e6cc", "align": "left", "uppercase": true, "spacing": 2},
      {"id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate", "x": 180, "y": 2345, "w": 260, "h": 30, "font": "Oswald", "size": 15, "color": "#f2e6cc", "align": "left", "uppercase": true, "spacing": 2},
      {"id": "ticker-strip", "src": "art/phone/ticker-strip.png", "x": 0, "y": 2386, "w": 600, "h": 44, "look": "strip"},
      {"id": "ticker", "type": "ticker", "show": ["listeners", "now"], "speed": 60, "x": 12, "y": 2386, "w": 576, "h": 44, "font": "Courier Prime", "size": 17, "color": "#f2e6cc"}
    ]
  }
};
