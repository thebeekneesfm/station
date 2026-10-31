/* SKIN — everything you see on the radio.
   Every piece is an image you draw. Put your PNGs in the art folder with the
   file names below, and they replace the dashed template boxes.
   x, y, w, h are pixels on a stage that is stage.width × stage.height.
   Press E on the radio to drag pieces into place, then "Copy skin.js" and
   paste the result over this file. README.md lists every option. */
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

    { "id": "cabinet", "src": "art/cabinet.png", "x": 380, "y": 60, "w": 840, "h": 880 },
    { "id": "grille", "src": "art/grille.png", "x": 470, "y": 130, "w": 660, "h": 300 },
    { "id": "grille-glow", "src": "art/grille-glow.png", "when": "on", "x": 470, "y": 130, "w": 660, "h": 300 },

    { "id": "dial", "src": "art/dial.png", "action": "dial", "x": 480, "y": 465, "w": 640, "h": 150 },
    { "id": "needle", "type": "needle", "src": "art/needle.png", "x": 0, "y": 472, "w": 18, "h": 136,
      "track": { "from": 510, "to": 1090 } },

    { "id": "light-off", "src": "art/light-off.png", "when": "off", "x": 770, "y": 650, "w": 60, "h": 60 },
    { "id": "light-on", "src": "art/light-on.png", "when": "on", "x": 770, "y": 650, "w": 60, "h": 60 },

    { "id": "volume-knob", "type": "knob", "bind": "volume", "src": "art/knob-volume.png",
      "x": 540, "y": 700, "w": 150, "h": 150, "turn": [-140, 140] },
    { "id": "tuning-knob", "type": "knob", "bind": "tuning", "src": "art/knob-tuning.png",
      "x": 910, "y": 700, "w": 150, "h": 150, "turn": [-160, 160] },
    { "id": "power-switch", "type": "button", "action": "power", "src": "art/power-switch.png",
      "x": 760, "y": 790, "w": 80, "h": 80 },

    { "id": "tag", "src": "art/tag.png", "x": 50, "y": 170, "w": 300, "h": 420 },
    { "id": "now-series", "type": "text", "bind": "now.series",
      "x": 80, "y": 240, "w": 240, "h": 56, "font": "Radio Hand", "size": 26, "color": "#e9dcc3", "align": "left" },
    { "id": "now-title", "type": "text", "bind": "now.title",
      "x": 80, "y": 300, "w": 240, "h": 145, "font": "Radio Hand", "size": 34, "color": "#e9dcc3", "align": "left" },
    { "id": "now-date", "type": "text", "bind": "now.date",
      "x": 80, "y": 455, "w": 240, "h": 40, "font": "Radio Hand", "size": 20, "color": "#b9aa90", "align": "left" },
    { "id": "now-left", "type": "text", "bind": "now.remaining",
      "x": 80, "y": 520, "w": 240, "h": 40, "font": "Radio Hand", "size": 20, "color": "#b9aa90", "align": "left" },

    { "id": "via-archive", "type": "text", "text": "via archive.org", "href": "now.item", "when": "tuned",
      "x": 80, "y": 556, "w": 240, "h": 28, "font": "Radio Hand", "size": 17, "color": "#b9aa90", "align": "left" },

    { "id": "about-link", "type": "text", "text": "About", "href": "about.html",
      "x": 50, "y": 70, "w": 90, "h": 34, "font": "Radio Hand", "size": 22, "color": "#e9dcc3", "align": "left" },
    { "id": "donate-link", "type": "text", "text": "Donate to the Archive", "href": "https://archive.org/donate",
      "x": 50, "y": 108, "w": 300, "h": 34, "font": "Radio Hand", "size": 22, "color": "#e9dcc3", "align": "left" },

    { "id": "clock", "type": "text", "bind": "clock",
      "x": 1260, "y": 70, "w": 290, "h": 60, "font": "Radio Hand", "size": 40, "color": "#e9dcc3", "align": "right" },
    { "id": "station-card", "type": "card", "x": 1260, "y": 170, "w": 290, "h": 380 },
    { "id": "station-name", "type": "text", "bind": "station.name",
      "x": 1260, "y": 565, "w": 290, "h": 44, "font": "Radio Hand", "size": 28, "color": "#e9dcc3", "align": "left" },
    { "id": "station-listeners", "type": "text", "bind": "station.listeners",
      "x": 1260, "y": 600, "w": 290, "h": 28, "font": "Radio Hand", "size": 18, "color": "#b9aa90", "align": "left" },
    { "id": "guide", "type": "text", "bind": "guide", "count": 5,
      "x": 1260, "y": 640, "w": 290, "h": 290, "font": "Radio Hand", "size": 18, "color": "#cbbda4", "align": "left" },

    { "id": "status", "type": "text", "bind": "status",
      "x": 480, "y": 625, "w": 640, "h": 34, "font": "Radio Hand", "size": 20, "color": "#e9dcc3", "align": "center" },

    { "id": "ticker-strip", "src": "art/ticker-strip.png", "x": 0, "y": 950, "w": 1600, "h": 50 },
    { "id": "ticker", "type": "ticker", "show": ["listeners", "now"], "speed": 70,
      "x": 20, "y": 950, "w": 1560, "h": 50, "font": "Radio Hand", "size": 22, "color": "#e9dcc3" },

    { "id": "grain", "type": "plate", "src": "art/grain.png", "blend": "multiply", "opacity": 0.35,
      "x": 0, "y": 0, "w": 1600, "h": 1000 }
  ]
};
