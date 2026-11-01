/* SEASONAL BACKGROUNDS
   The wall behind the radio changes with the listener's own calendar. Each season lists one or more
   patterns; when a season has several, a different one shows each day (everyone sees the same one that day).
   Dates are month-day. A season that runs past New Year can go from "11-26" to "01-05".
   size = how wide one repeat of the pattern is, in pixels on screen.
   shade = how much to darken it (0 to 1), so the words that sit on the wall stay readable; light patterns need more. */
window.BACKGROUNDS = {
  seasons: [
    { name: "Halloween",   from: "10-01", to: "10-31", patterns: ["halloween-charcoal", "halloween-orange"] },
    { name: "Christmas",   from: "11-26", to: "12-31", patterns: ["xmas-starbursts-cream", "xmas-ornaments-red", "foil-shining-stars"] },
    { name: "Winter",      from: "01-01", to: "02-01", patterns: ["foil-dots"] },
    { name: "Valentine's", from: "02-02", to: "02-14", patterns: ["valentine-pink", "valentine-cream"] }
  ],
  everyday: ["fancyfree-charcoal", "fancyfree-red"],
  patterns: {
    "fancyfree-charcoal":    { size: 300, credit: "Westinghouse Micarta “Fancy-Free” laminate, 1956" },
    "fancyfree-red":         { size: 300, credit: "Westinghouse Micarta “Fancy-Free” laminate, 1956" },
    "halloween-charcoal":    { size: 520, credit: "Dennison’s Bogie Book, 1920" },
    "halloween-orange":      { size: 520, credit: "Dennison’s Bogie Book, 1920" },
    "xmas-starbursts-cream": { size: 520, shade: 0.42, credit: "Bradford Novelty Co. Christmas ornaments catalog, 1960" },
    "xmas-ornaments-red":    { size: 520, credit: "Bradford Novelty Co. Christmas ornaments catalog, 1960" },
    "foil-shining-stars":    { size: 300, shade: 0.42, credit: "Garrison-Wagner Christmas catalog, 1941" },
    "foil-dots":             { size: 320, shade: 0.42, credit: "Garrison-Wagner Christmas catalog, 1941" },
    "valentine-pink":        { size: 520, shade: 0.42, credit: "Dennison’s Gala Book, 1922" },
    "valentine-cream":       { size: 520, shade: 0.42, credit: "Dennison’s Gala Book, 1922" }
  }
};
(function () {
  var B = window.BACKGROUNDS, d = new Date();
  var force = (location.search.match(/[?&]bg=([\w-]+)/) || [])[1];          // preview a pattern: ?bg=valentine-pink
  var asOf = (location.search.match(/[?&]bgdate=(\d\d-\d\d)/) || [])[1];      // preview a date: ?bgdate=12-20
  var md = asOf ? +asOf.replace("-", "") : (d.getMonth() + 1) * 100 + d.getDate();
  var n = function (s) { return +s.replace("-", ""); };
  var list = B.everyday;
  B.seasons.forEach(function (s) {
    var a = n(s.from), b = n(s.to);
    if (a <= b ? (md >= a && md <= b) : (md >= a || md <= b)) list = s.patterns;
  });
  var day = Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())) / 864e5);
  var id = force && B.patterns[force] ? force : list[day % list.length];
  var p = B.patterns[id] || {}, base = (document.currentScript && document.currentScript.src || "").replace(/backgrounds\.js.*$/, "");
  var r = document.documentElement.style;
  r.setProperty("--wall-img", 'url("' + base + id + '.jpg")');
  r.setProperty("--wall-size", (p.size || 400) + "px");
  var sh = p.shade == null ? 0.22 : p.shade;
  r.setProperty("--wall-shade", "rgba(18,12,8," + sh + ")");
  window.BACKGROUND_NOW = { id: id, credit: p.credit || "" };
})();
