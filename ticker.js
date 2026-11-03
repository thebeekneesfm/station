/* The Bee's Knees ticker for the inside pages (TV, Drive-In, comics, magazines, ads, About, Guest Book).
   The front page has its own ticker built into radio.js; this one shows the same news:
   member thank-yous, recent Ko-fi tips and the announcements from config.js.
   It sits just under the page's masthead. Needs config.js loaded first. */
(function () {
  "use strict";
  if (document.documentElement.classList.contains("embed")) return;   // opened over the radio, which has its own
  var CONFIG = window.RADIO_CONFIG || {};
  var WORDS = {
    tipThanks: "Thank you, {name}, for buying the station a coffee",
    tipMember: "Welcome, {name}, our newest {tier} member",
    tipSaid: ": “{message}”",
    tipSomeone: "a kind listener",
    memberRoll: "Thank you to our members: {names}"
  };
  // web addresses and the station's social handles become links (opening in a new tab)
  var LINKS = [
    [/ko-fi\.com\/thebeeskneesfm/g, "https://ko-fi.com/thebeeskneesfm"],
    [/thebeeskneesfm\.bsky\.social/g, "https://bsky.app/profile/thebeeskneesfm.bsky.social"],
    [/\bInstagram\b/g, "https://www.instagram.com/thebeeskneesfm/"],
    [/\bTikTok\b/g, "https://www.tiktok.com/@thebeeskneesfm"],
    [/\bYouTube\b/g, "https://www.youtube.com/@thebeeskneesfm"],
    [/\bBluesky\b/g, "https://bsky.app/profile/thebeeskneesfm.bsky.social"]
  ];
  function linkify(msg) {
    var h = String(msg).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
    var marks = [];
    LINKS.forEach(function (p) {
      h = h.replace(p[0], function (m) { marks.push('<a href="' + p[1] + '" target="_blank" rel="noopener">' + m + "</a>"); return "\u0000" + (marks.length - 1) + "\u0000"; });
    });
    return h.replace(/\u0000(\d+)\u0000/g, function (_, i) { return marks[i]; });
  }

  var css = document.createElement("style");
  css.textContent =
    ".bk-strip { height: 44px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; padding: 6px 18px; text-align: center; overflow: hidden; }" +
    ".bk-strip span { display: block; max-width: 100%; font: 700 21px/1.25 \"BK Serif\", Georgia, serif; font-stretch: 80%; color: var(--ink, #1f1b17); transition: opacity .5s ease; }" +
    ".bk-strip span.fading { opacity: 0; }" +
    ".bk-strip a { color: #c8321f; text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }" +
    ".bk-strip a:hover { color: #8a1f12; }" +
    "@media (max-width: 640px) { .bk-strip { height: 62px; } }" +
    "@media (prefers-reduced-motion: reduce) { .bk-strip span { transition: none; } }";
  document.head.appendChild(css);

  var mast = document.querySelector(".mast");
  if (!mast) return;
  var strip = document.createElement("div");
  strip.className = "paper bk-strip";
  strip.setAttribute("role", "marquee");
  strip.setAttribute("aria-label", "News from The Bee's Knees");
  var span = document.createElement("span");
  strip.appendChild(span);
  mast.insertAdjacentElement("afterend", strip);

  var tips = [], members = [];
  var realTip = function (t) { return !(t && /^jo example$/i.test((t.from_name || "").trim())); };
  function messages() {
    var parts = [];
    if (members.length) {
      var names = members.map(function (m) { return m.from_name + (m.tier_name ? " (" + m.tier_name + ")" : ""); });
      parts.push(WORDS.memberRoll.replace("{names}", names.length > 1 ? names.slice(0, -1).join(", ") + " and " + names[names.length - 1] : names[0]));
    }
    tips.filter(function (t) { return t.kind !== "Member"; }).forEach(function (t) {
      var line = (t.kind === "New member" ? WORDS.tipMember : WORDS.tipThanks).replace("{name}", t.from_name || WORDS.tipSomeone).replace("{tier}", t.tier_name || "");
      line = line.replace(/\s+/g, " ").replace(" ,", ",");
      if (t.message) line += WORDS.tipSaid.replace("{message}", String(t.message).slice(0, 200));
      parts.push(line);
    });
    (CONFIG.announcements || []).forEach(function (a) { if (a && String(a).trim()) parts.push(String(a).trim()); });
    return parts;
  }

  // fit one message without the strip ever changing height: one line on wide screens, up to two on phones,
  // shrinking the type a little. Returns false when it won't fit even then.
  function fit(msg) {
    span.innerHTML = linkify(msg);
    var room = strip.clientHeight - 8, w = strip.clientWidth - 36, two = strip.clientHeight > 50, size;
    span.style.whiteSpace = two ? "normal" : "nowrap";
    for (size = 21; size >= 16; size--) {
      span.style.fontSize = size + "px";
      if (span.scrollWidth <= w + 1 && span.offsetHeight <= room) return true;
    }
    return false;
  }
  // a message that won't fit is shown in pieces, broken at natural pauses (like the front page's ticker)
  function pieces(msg) {
    if (fit(msg)) return [msg];
    var cuts = [": ", ", and ", ", "];
    for (var c = 0; c < cuts.length; c++) {
      var cut = cuts[c], at = [], k = msg.indexOf(cut);
      while (k >= 0) { at.push(k); k = msg.indexOf(cut, k + 1); }
      if (!at.length) continue;
      var mid = msg.length / 2, best = at.reduce(function (a, b) { return Math.abs(b - mid) < Math.abs(a - mid) ? b : a; });
      var a = msg.slice(0, best + cut.length - 1).trim().replace(/,$/, "") + (cut === ": " ? "" : "…");
      var b = (cut === ": " ? "" : "…") + msg.slice(best + cut.length).trim();
      return pieces(a).concat(pieces(b));
    }
    var words = msg.split(" ");
    if (words.length > 1) {
      var half = Math.ceil(words.length / 2);
      return pieces(words.slice(0, half).join(" ") + "…").concat(pieces("…" + words.slice(half).join(" ")));
    }
    return [msg];
  }
  var list = [], i = -1, queue = [], timer;
  function next() {
    clearTimeout(timer);
    if (!list.length) { strip.hidden = true; return; }
    strip.hidden = false;
    span.classList.add("fading");
    setTimeout(function () {
      if (!queue.length) { i = (i + 1) % list.length; queue = pieces(list[i]); }
      var msg = queue.shift();
      fit(msg);
      span.classList.remove("fading");
      timer = setTimeout(next, 3500 + msg.length * 45);
    }, i < 0 ? 0 : 500);
  }
  function refresh() {
    var fresh = messages();
    if (JSON.stringify(fresh) === JSON.stringify(list)) return;
    var first = !list.length;
    list = fresh;
    if (first) next();
  }
  refresh();

  var L = CONFIG.listeners || {};
  function get(q) {
    return fetch(L.url + "/rest/v1/tips?" + q, { headers: { apikey: L.key, Authorization: "Bearer " + L.key } })
      .then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; });
  }
  function load() {
    if (!L.url || !L.key || !window.fetch) return;
    var since14 = new Date(Date.now() - 14 * 864e5).toISOString(), since35 = new Date(Date.now() - 35 * 864e5).toISOString();
    Promise.all([
      get("select=created_at,kind,from_name,message,tier_name&order=created_at.desc&limit=5&created_at=gte." + encodeURIComponent(since14)),
      get("select=created_at,from_name,tier_name&kind=in.(%22New%20member%22,%22Member%22)&from_name=not.is.null&order=created_at.desc&limit=300&created_at=gte." + encodeURIComponent(since35))
    ]).then(function (r) {
      if (Array.isArray(r[0])) tips = r[0].filter(realTip);
      if (Array.isArray(r[1])) {
        var seen = {}; members = [];
        r[1].filter(realTip).forEach(function (m) { var k = m.from_name.toLowerCase(); if (!seen[k]) { seen[k] = 1; members.push(m); } });
      }
      refresh();
    });
  }
  load(); setInterval(load, 5 * 60 * 1000);
})();
