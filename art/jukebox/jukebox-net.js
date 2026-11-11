/* THE JUKEBOX: shared pieces for the three jukebox pages
     jukebox-obs.html  the stream screen (an OBS browser source). It owns the queue and plays the music.
     jukebox-dj.html   Kate's control panel (an OBS dock): approve, skip, remove, open and close requests.
     jukebox.html      the website page where viewers pick songs and send requests.
   They talk through the station's free Supabase project (the same one as the "who's listening" counter), using
   Realtime messages only: nothing is stored in a database.
     Channel "jukebox" (public): the stream screen announces itself there (so the website knows the jukebox is
       open) and posts what's playing and what's queued; the website sends requests there.
     Channel "jukebox-dj-<secret>" (private): the control panel and the stream screen. The secret is in the two
       OBS addresses only (?dj=...), so nobody else can skip songs or approve requests. */
(function () {
  "use strict";
  var LIB = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";
  var client = null;

  function load(cb) {
    if (window.supabase && window.supabase.createClient) return cb();
    var s = document.querySelector("script[data-supabase]");
    if (!s) { s = document.createElement("script"); s.dataset.supabase = "1"; s.src = LIB; document.head.appendChild(s); }
    s.addEventListener("load", cb);
  }
  function getClient() {
    var c = (window.RADIO_CONFIG || {}).listeners || {};
    if (!c.url || !c.key) return null;
    return client || (client = window.supabase.createClient(c.url, c.key, { realtime: { params: { eventsPerSecond: 8 } } }));
  }
  /* join a channel: handlers = { event: fn(payload) }, presence: fn(stateObject), me: presence data to announce */
  function join(name, handlers, opts, ready) {
    opts = opts || {};
    load(function () {
      var cl = getClient(); if (!cl) return;
      var ch = cl.channel(name, { config: { broadcast: { self: false }, presence: { key: opts.key || "" } } });
      Object.keys(handlers || {}).forEach(function (ev) { ch.on("broadcast", { event: ev }, function (m) { handlers[ev](m.payload || {}); }); });
      // Supabase only switches "presence" (who's here) on for a channel that listens for it, so always listen
      if (opts.presence || opts.me) ch.on("presence", { event: "sync" }, function () { if (opts.presence) opts.presence(ch.presenceState()); });
      ch.subscribe(function (status) {
        if (status === "SUBSCRIBED") { if (opts.me) ch.track(opts.me); ready && ready(ch); }
        if (opts.status) opts.status(status);
      });
    });
  }
  function send(ch, event, payload) { if (ch) ch.send({ type: "broadcast", event: event, payload: payload }); }

  /* the date in Los Angeles as "YYYY-MM-DD", so albums appear on the jukebox the same Monday they reach the shelf */
  function today() {
    var p = {};
    new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" })
      .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
    return p.year + "-" + p.month + "-" + p.day;
  }
  function albums() { var t = today(); return (window.JUKEBOX || []).filter(function (a) { return !a.added || a.added <= t; }); }
  function find(n, i) {
    var a = albums().filter(function (x) { return x.n === +n; })[0];
    return a && a.songs[i] ? { album: a, song: a.songs[i] } : null;
  }
  function code(n, i) { return n + "-" + ("0" + (i + 1)).slice(-2); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  /* names shown on stream are Twitch usernames: letters, numbers and underscores, 25 at most (an @ in front is dropped) */
  function cleanName(s) {
    s = String(s || "").trim().replace(/^@+/, "").replace(/[^A-Za-z0-9_]/g, "");
    return s.slice(0, 25) || "a listener";
  }
  /* a short message to go with a request: plain words only, no links, 80 letters at most */
  function cleanMsg(s) {
    s = String(s || "").replace(/https?:\/\/\S+|www\.\S+|\S+\.(com|net|org|tv|gg|ly|io|me|co)\b\S*/gi, "").replace(/[<>{}\[\]\\]/g, "").replace(/\s+/g, " ").trim();
    return s.slice(0, 80);
  }
  /* a word filter for names and messages, since on Jukebox Night requests go on screen without anyone checking
     first. Letters made of numbers or symbols (n1gg, $hit) and doubled letters are read as plain letters.
     IN: anywhere inside (also catches words run together, as usernames often are). WORD: only as a whole word,
     because they hide inside ordinary words (grape, raccoon, cocktail, spicy, Dickens, pussycat). */
  var IN = ["nigg", "niga", "nigr", "faggot", "fagot", "kike", "chink", "retard", "tranny", "wetback", "beaner", "fuck", "shit", "cunt",
            "whore", "slut", "nazi", "hitler", "kkk", "siegheil", "whitepower", "killyourself", "bitch", "bastard", "motherf"];
  var WORD = ["fag", "fags", "coon", "coons", "gook", "gooks", "spic", "spics", "jap", "japs", "dyke", "cock", "dick", "pussy", "rape", "raped",
              "heil", "homo", "porn", "cum", "tits", "ass", "asshole", "kys"];
  function plain(s) {
    return String(s || "").toLowerCase().replace(/[0@4]/g, function (c) { return c === "0" ? "o" : "a"; }).replace(/1|!|\|/g, "i")
      .replace(/3/g, "e").replace(/[5$]/g, "s").replace(/7/g, "t");
  }
  function once(s) { return s.replace(/(.)\1+/g, "$1"); }   // "shiiit" -> "shit"
  function rude(s) {
    var p = plain(s), joined = p.replace(/[^a-z]/g, ""), j1 = once(joined);
    // a word as written, or with its doubled letters squeezed (only for longer words, so "kkk" doesn't become "k")
    if (IN.some(function (w) { return joined.indexOf(w) >= 0 || (once(w).length >= 4 && j1.indexOf(once(w)) >= 0); })) return true;
    return p.split(/[^a-z]+/).some(function (w) { return w && WORD.some(function (x) { return w === x || once(w) === x; }); });
  }
  function uid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); }
  function fileUrl(album, song) {
    return "https://archive.org/download/" + album.item + "/" + song.f.split("/").map(encodeURIComponent).join("/");
  }
  function time(sec) { sec = Math.max(0, Math.round(sec || 0)); return Math.floor(sec / 60) + ":" + ("0" + sec % 60).slice(-2); }

  window.BKJ = { join: join, send: send, albums: albums, find: find, code: code, esc: esc, cleanName: cleanName, cleanMsg: cleanMsg, rude: rude, uid: uid, fileUrl: fileUrl, time: time, today: today };
})();
