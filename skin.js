/* SKIN — everything you see on the radio.
   Every piece is an image you draw. Put your PNGs in the art folder with the
   file names below, and they replace the dashed template boxes.
   x, y, w, h are pixels on a stage that is stage.width × stage.height.
   There are two layouts: the main one for computers and tablets, and "portrait"
   for phones held upright. Press E on the radio to drag pieces into place, then
   "Copy skin.js" and paste the result over this file. README.md lists every option. */
window.SKIN = {
  "stage": { "width": 1600, "height": 1000, "color": "#211c18" },

  "fonts": [
    { "family": "Radio Hand", "src": "art/fonts/your-font.woff2" }
  ],

  "sound": { "level": true, "declick": 0.5, "tone": 9000 },

  "sounds": {
    "static": "art/sounds/static.mp3"
  },

  "layers": [
    { "id": "background", "type": "plate", "src": "art/background.png", "x": 0, "y": 0, "w": 1600, "h": 1000 },

    { "id": "logo", "src": "art/logo.png", "x": 40, "y": 22, "w": 460, "h": 80 },
    { "id": "about-link", "type": "text", "text": "About", "href": "about.html",
      "x": 920, "y": 44, "w": 90, "h": 34, "font": "Radio Hand", "size": 20, "color": "#e9dcc3", "align": "left" },
    { "id": "ads-link", "type": "text", "text": "Ads", "href": "ads.html",
      "x": 1010, "y": 44, "w": 70, "h": 34, "font": "Radio Hand", "size": 20, "color": "#e9dcc3", "align": "left" },
    { "id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate",
      "x": 1080, "y": 44, "w": 250, "h": 34, "font": "Radio Hand", "size": 20, "color": "#e9dcc3", "align": "left" },
    { "id": "clock", "type": "text", "bind": "clock",
      "x": 1340, "y": 30, "w": 220, "h": 56, "font": "Radio Hand", "size": 38, "color": "#e9dcc3", "align": "right" },

    { "id": "player", "src": "art/player.png", "x": 40, "y": 116, "w": 1520, "h": 240 },
    { "id": "station-card", "type": "card", "x": 60, "y": 131, "w": 210, "h": 210 },
    { "id": "station-name", "type": "text", "bind": "station.name",
      "x": 300, "y": 134, "w": 760, "h": 46, "font": "Radio Hand", "size": 36, "color": "#e9dcc3", "align": "left" },
    { "id": "station-listeners", "type": "text", "bind": "station.listeners",
      "x": 300, "y": 182, "w": 400, "h": 26, "font": "Radio Hand", "size": 18, "color": "#b9aa90", "align": "left" },
    { "id": "now-series", "type": "text", "bind": "now.series",
      "x": 300, "y": 214, "w": 760, "h": 34, "font": "Radio Hand", "size": 24, "color": "#e9dcc3", "align": "left" },
    { "id": "now-title", "type": "text", "bind": "now.title",
      "x": 300, "y": 248, "w": 760, "h": 52, "font": "Radio Hand", "size": 34, "color": "#e9dcc3", "align": "left" },
    { "id": "now-date", "type": "text", "bind": "now.date",
      "x": 300, "y": 308, "w": 300, "h": 28, "font": "Radio Hand", "size": 18, "color": "#b9aa90", "align": "left" },
    { "id": "now-left", "type": "text", "bind": "now.remaining",
      "x": 610, "y": 308, "w": 200, "h": 28, "font": "Radio Hand", "size": 18, "color": "#b9aa90", "align": "left" },
    { "id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned",
      "x": 820, "y": 308, "w": 240, "h": 28, "font": "Radio Hand", "size": 18, "color": "#b9aa90", "align": "left" },

    { "id": "power-switch", "type": "button", "action": "power", "src": "art/power-switch.png",
      "x": 1100, "y": 150, "w": 110, "h": 110 },
    { "id": "light-off", "src": "art/light-off.png", "when": "off", "x": 1140, "y": 270, "w": 30, "h": 30 },
    { "id": "light-on", "src": "art/light-on.png", "when": "on", "x": 1140, "y": 270, "w": 30, "h": 30 },
    { "id": "volume-knob", "type": "knob", "bind": "volume", "src": "art/knob-volume.png",
      "x": 1240, "y": 140, "w": 130, "h": 130, "turn": [-140, 140] },
    { "id": "channel-up", "type": "button", "action": "prev", "src": "art/channel-up.png",
      "x": 1400, "y": 140, "w": 140, "h": 60 },
    { "id": "channel-down", "type": "button", "action": "next", "src": "art/channel-down.png",
      "x": 1400, "y": 210, "w": 140, "h": 60 },
    { "id": "status", "type": "text", "bind": "status",
      "x": 1100, "y": 300, "w": 440, "h": 34, "font": "Radio Hand", "size": 20, "color": "#e9dcc3", "align": "center" },

    { "id": "guide-frame", "src": "art/guide-frame.png", "x": 40, "y": 372, "w": 1120, "h": 566 },
    { "id": "guide", "type": "guide", "mode": "timeline", "hours": 2,
      "x": 40, "y": 372, "w": 1120, "h": 566, "rowHeight": 38, "labelWidth": 290,
      "font": "Radio Hand", "size": 16, "color": "#e9dcc3", "dim": "#a99a83", "highlight": "#f0b44c" },

    { "id": "tv", "type": "tv", "x": 1200, "y": 384, "w": 350, "h": 262, "font": "Radio Hand", "size": 20, "color": "#e9dcc3" },
    { "id": "tv-set", "src": "art/tv-set.png", "x": 1180, "y": 366, "w": 390, "h": 300 },
    { "id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item",
      "x": 1180, "y": 670, "w": 390, "h": 24, "font": "Radio Hand", "size": 15, "color": "#b9aa90", "align": "center" },

    { "id": "ads-heading", "type": "text", "text": "A word from our sponsors",
      "x": 1190, "y": 704, "w": 370, "h": 26, "font": "Radio Hand", "size": 16, "color": "#b9aa90", "align": "center" },
    { "id": "ad", "type": "ad", "every": 40,
      "x": 1190, "y": 734, "w": 370, "h": 204, "font": "Radio Hand", "size": 14, "color": "#e9dcc3", "dim": "#a99a83" },

    { "id": "ticker-strip", "src": "art/ticker-strip.png", "x": 0, "y": 950, "w": 1600, "h": 50 },
    { "id": "ticker", "type": "ticker", "show": ["listeners", "now"], "speed": 70,
      "x": 20, "y": 950, "w": 1560, "h": 50, "font": "Radio Hand", "size": 22, "color": "#e9dcc3" },

    { "id": "grain", "type": "plate", "src": "art/grain.png", "blend": "multiply", "opacity": 0.35,
      "x": 0, "y": 0, "w": 1600, "h": 1000 }
  ],

  "portrait": {
    "stage": { "width": 600, "height": 2170, "color": "#211c18", "fit": "width" },
    "layers": [
      { "id": "background", "type": "plate", "src": "art/phone/background.png", "x": 0, "y": 0, "w": 600, "h": 2170 },
      { "id": "logo", "src": "art/phone/logo.png", "x": 20, "y": 20, "w": 380, "h": 60 },
      { "id": "clock", "type": "text", "bind": "clock",
        "x": 400, "y": 26, "w": 180, "h": 44, "font": "Radio Hand", "size": 28, "color": "#e9dcc3", "align": "right" },

      { "id": "player", "src": "art/phone/player.png", "x": 12, "y": 96, "w": 576, "h": 330 },
      { "id": "station-card", "type": "card", "x": 30, "y": 114, "w": 150, "h": 150 },
      { "id": "station-name", "type": "text", "bind": "station.name",
        "x": 196, "y": 114, "w": 380, "h": 36, "font": "Radio Hand", "size": 26, "color": "#e9dcc3", "align": "left" },
      { "id": "station-listeners", "type": "text", "bind": "station.listeners",
        "x": 196, "y": 152, "w": 380, "h": 22, "font": "Radio Hand", "size": 15, "color": "#b9aa90", "align": "left" },
      { "id": "now-series", "type": "text", "bind": "now.series",
        "x": 196, "y": 180, "w": 380, "h": 30, "font": "Radio Hand", "size": 19, "color": "#e9dcc3", "align": "left" },
      { "id": "now-title", "type": "text", "bind": "now.title",
        "x": 196, "y": 212, "w": 380, "h": 62, "font": "Radio Hand", "size": 24, "color": "#e9dcc3", "align": "left" },
      { "id": "now-date", "type": "text", "bind": "now.date",
        "x": 30, "y": 280, "w": 260, "h": 24, "font": "Radio Hand", "size": 15, "color": "#b9aa90", "align": "left" },
      { "id": "now-left", "type": "text", "bind": "now.remaining",
        "x": 300, "y": 280, "w": 270, "h": 24, "font": "Radio Hand", "size": 15, "color": "#b9aa90", "align": "right" },
      { "id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned",
        "x": 30, "y": 308, "w": 260, "h": 24, "font": "Radio Hand", "size": 15, "color": "#b9aa90", "align": "left" },

      { "id": "power-switch", "type": "button", "action": "power", "src": "art/phone/power-switch.png",
        "x": 30, "y": 344, "w": 64, "h": 64 },
      { "id": "volume-knob", "type": "knob", "bind": "volume", "src": "art/phone/knob-volume.png",
        "x": 108, "y": 344, "w": 64, "h": 64, "turn": [-140, 140] },
      { "id": "status", "type": "text", "bind": "status",
        "x": 182, "y": 362, "w": 206, "h": 28, "font": "Radio Hand", "size": 15, "color": "#e9dcc3", "align": "center" },
      { "id": "channel-up", "type": "button", "action": "prev", "src": "art/phone/channel-up.png",
        "x": 400, "y": 350, "w": 84, "h": 52 },
      { "id": "channel-down", "type": "button", "action": "next", "src": "art/phone/channel-down.png",
        "x": 496, "y": 350, "w": 84, "h": 52 },

      { "id": "tv", "type": "tv", "x": 110, "y": 456, "w": 380, "h": 285, "font": "Radio Hand", "size": 20, "color": "#e9dcc3" },
      { "id": "tv-set", "src": "art/phone/tv-set.png", "x": 90, "y": 440, "w": 420, "h": 320 },
      { "id": "tv-title", "type": "text", "bind": "tv.title", "href": "tv.item",
        "x": 12, "y": 762, "w": 576, "h": 22, "font": "Radio Hand", "size": 14, "color": "#b9aa90", "align": "center" },

      { "id": "guide", "type": "guide", "mode": "list",
        "x": 12, "y": 780, "w": 576, "h": 860, "rowHeight": 64, "labelWidth": 200,
        "font": "Radio Hand", "size": 19, "color": "#e9dcc3", "dim": "#a99a83", "highlight": "#f0b44c" },

      { "id": "ads-heading", "type": "text", "text": "A word from our sponsors",
        "x": 12, "y": 1656, "w": 576, "h": 30, "font": "Radio Hand", "size": 17, "color": "#b9aa90", "align": "center" },
      { "id": "ad", "type": "ad", "every": 40,
        "x": 60, "y": 1690, "w": 480, "h": 380, "font": "Radio Hand", "size": 15, "color": "#e9dcc3", "dim": "#a99a83" },

      { "id": "about-link", "type": "text", "text": "About", "href": "about.html",
        "x": 20, "y": 2085, "w": 90, "h": 30, "font": "Radio Hand", "size": 17, "color": "#e9dcc3", "align": "left" },
      { "id": "ads-link", "type": "text", "text": "Ads", "href": "ads.html",
        "x": 110, "y": 2085, "w": 60, "h": 30, "font": "Radio Hand", "size": 17, "color": "#e9dcc3", "align": "left" },
      { "id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate",
        "x": 180, "y": 2085, "w": 260, "h": 30, "font": "Radio Hand", "size": 17, "color": "#e9dcc3", "align": "left" },

      { "id": "ticker-strip", "src": "art/phone/ticker-strip.png", "x": 0, "y": 2126, "w": 600, "h": 44 },
      { "id": "ticker", "type": "ticker", "show": ["listeners", "now"], "speed": 60,
        "x": 12, "y": 2126, "w": 576, "h": 44, "font": "Radio Hand", "size": 18, "color": "#e9dcc3" }
    ]
  }
};
