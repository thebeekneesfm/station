/* The Bee's Knees TV and the Bee's Knees Drive-In.
   Both run on one shared clock, like the radio: everyone tuned to the same channel sees the same frame.
   Episodes, films and ads play straight from the Internet Archive; nothing is stored here.
   Data comes from art/screen/tv-data.js (window.TVCH, window.TV_ADS) or art/screen/drivein-data.js (window.DRIVEIN). */
(function () {
  "use strict";
  var MODE = document.body.dataset.mode;           // "tv" or "drivein"
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem("otr." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("otr." + k, JSON.stringify(v)); } catch (e) {} }
  };
  var mmss = function (s) { s = Math.max(0, Math.round(s)); var h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, x = s % 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(x).padStart(2, "0"); };
  var hhmm = function (ms) { return new Date(ms).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }); };
  // a small seeded random number generator, so every visitor builds the same schedule
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(list, seed) { var a = list.slice(), r = rng(seed); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  // slates are little title cards drawn by the page itself (no video): station IDs, "we'll be right back", intermission
  function slate(kind, length, words) { return { slate: kind, length: length, words: words }; }

  // seasons ("11-15" to "01-06"), by the viewer's own calendar; a season may wrap past New Year
  function mmdd(ms) { var d = new Date(ms); return String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function inSeason(se, ms) { if (!se) return true; var t = mmdd(ms); return se.from <= se.to ? (t >= se.from && t <= se.to) : (t >= se.from || t <= se.to); }
  function liveChannels(ms) {
    var CH = (window.TVCH || []).filter(function (c) { return c.episodes && c.episodes.length && inSeason(c.season, ms); });
    // a seasonal channel goes first while it's on, so it's where new viewers land
    // a seasonal channel's own commercials (the Christmas ones) join the Commercial Break channel while it's on
    var extra = [];
    CH.forEach(function (c) { if (c.season && c.ads) c.ads.forEach(function (a) { extra.push(Object.assign({ series: "Commercial" }, a)); }); });
    if (extra.length) CH = CH.map(function (c) { return c.allAds ? Object.assign({}, c, { episodes: c.episodes.concat(extra) }) : c; });
    return CH.filter(function (c) { return c.season; }).concat(CH.filter(function (c) { return !c.season; }));
  }

  /* ---------------- schedules ---------------- */
  var EPOCH = Date.parse("2026-11-01T00:00:00Z");

  // TV: each channel is its shuffled episodes with a break between them (a station ID and up to two commercials)
  function buildChannel(ch, ads) {
    var eps = shuffle(ch.episodes, hash(ch.id)), out = [], r = rng(hash(ch.id + "ads"));
    if (ch.allAds) {   // the Commercial Break channel: nothing but commercials, with a station ID every ten or so
      eps.forEach(function (e, k) { out.push(Object.assign({ kind: "show" }, e)); if (k % 10 === 9) out.push(slate("id", 6, { channel: ch })); });
      out.push(slate("id", 6, { channel: ch }));
      var t0 = 0; out.forEach(function (x) { x.start = t0; t0 += Number(x.length) || 0; });
      return { ch: ch, list: out, total: t0 };
    }
    // commercials only play on the Commercial Break channel; everywhere else a short station ID sits between shows
    eps.forEach(function (e) {
      out.push(Object.assign({ kind: "show" }, e));
      out.push(slate("id", 6, { channel: ch }));
    });
    var t = 0; out.forEach(function (x) { x.start = t; t += Number(x.length) || 0; });
    return { ch: ch, list: out, total: t };
  }
  function tvAt(sched, ms) {
    var pos = ((ms - EPOCH) / 1000) % sched.total; if (pos < 0) pos += sched.total;
    var lo = 0, hi = sched.list.length - 1;
    while (lo < hi) { var mid = (lo + hi + 1) >> 1; if (sched.list[mid].start <= pos) lo = mid; else hi = mid - 1; }
    var it = sched.list[lo];
    return { i: lo, item: it, offset: pos - it.start, left: it.length - (pos - it.start), startMs: ms - (pos - it.start) * 1000 };
  }
  function tvNext(sched, i, kind) {  // the next item of a kind after position i
    for (var k = 1; k < sched.list.length; k++) { var x = sched.list[(i + k) % sched.list.length]; if (!kind || x.kind === kind) return x; }
    return null;
  }

  // Drive-in: always open. Daytime is a matinee of the day's double features on a loop;
  // from showtime (7:30 PM Pacific, the same moment for everyone) the full night at the drive-in runs.
  /* One shared showtime: the Drive-In keeps Pacific time, so everyone watches the same show at the same
     moment, like the radio and TV. The full show starts at 7:30 PM Pacific every night (10:30 PM Eastern);
     each visitor sees that time in their own time zone. The day, the theme night and the season all follow
     the Pacific calendar too. Change SHOW_AT to move the showtime. */
  var SHOW_AT = [19, 30], PT_FMT = null;
  try { PT_FMT = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }); } catch (e) {}
  function ptOff(ms) {   // Pacific time's offset from UTC at this moment, in ms (falls back to -8 h)
    if (!PT_FMT) return -8 * 36e5;
    var p = {}; PT_FMT.formatToParts(new Date(ms)).forEach(function (x) { p[x.type] = x.value; });
    return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second) - Math.floor(ms / 1000) * 1000;
  }
  function ptDate(ms) { return new Date(ms + ptOff(ms)); }   // read it with the getUTC... methods
  function ptAt(y, mo, d, h, mi) { var g = Date.UTC(y, mo, d, h, mi); return g - ptOff(g - ptOff(g)); }
  function ptMidnight(ms) { var d = ptDate(ms); return ptAt(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0); }
  function nextMidnight(mid) { return ptMidnight(mid + 26 * 36e5); }
  function ptMmdd(ms) { var d = ptDate(ms); return String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); }
  function inSeasonPT(se, ms) { if (!se) return true; var t = ptMmdd(ms); return se.from <= se.to ? (t >= se.from && t <= se.to) : (t >= se.from || t <= se.to); }
  function duskOf(day) { var d = ptDate(day); return ptAt(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), SHOW_AT[0], SHOW_AT[1]); }
  function dayIndex(ms) { var d = ptDate(ms); return Math.round((Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - Date.UTC(2026, 0, 5)) / 864e5); }  // 2026-01-05 was a Monday
  function seasonOf(ms) { var se = window.DRIVEIN.season; return se && se.films && se.films.length && inSeasonPT(se, ms) ? se : null; }
  function themeOf(ms) { var DI = window.DRIVEIN, se = seasonOf(ms), wd = (ptDate(ms).getUTCDay() + 6) % 7; return se ? { name: se.name, films: se.films } : (DI.themes[wd] || DI.themes[String(wd)]); }
  function featuresFor(ms) {     // tonight's two features: rotates weekly through the theme's films (nightly in a season)
    var th = themeOf(ms), f = th.films, se = seasonOf(ms), wk = Math.floor(dayIndex(ms) / 7);
    if (!f.length) return [];
    if (se) {
      var set = se.nights && se.nights[ptMmdd(ms)];
      if (set) { var picked = set.map(function (t) { return f.find(function (x) { return x.title === t; }); }).filter(Boolean); if (picked.length) return picked; }
      wk = dayIndex(ms);
    }
    return [f[(wk * 2) % f.length], f[(wk * 2 + 1) % f.length]].filter(function (x, i, a) { return a.indexOf(x) === i; });
  }
  function pickFrom(list, seed, n) { return list.length ? shuffle(list, seed).slice(0, n) : []; }
  function nightProgram(dayMs) {
    var DI = window.DRIVEIN, th = themeOf(dayMs), feats = featuresFor(dayMs), seed = hash("night" + dayIndex(dayMs)), out = [];
    out.push(slate("welcome", 20, { theme: th, feats: feats }));
    var se = seasonOf(dayMs);
    pickFrom(se && se.cartoons && se.cartoons.length ? se.cartoons : (window.TV || []), seed, 1).forEach(function (c) { out.push(Object.assign({ kind: "cartoon" }, c)); });
    pickFrom(DI.trailers || [], seed + 1, 2).forEach(function (t) { out.push(Object.assign({ kind: "trailer" }, t)); });
    if ((DI.serials || []).length) { var s = DI.serials[dayIndex(dayMs) % DI.serials.length]; out.push(Object.assign({ kind: "serial" }, s)); }
    if (feats[0]) out.push(Object.assign({ kind: "feature", n: 1 }, feats[0]));
    var reels = pickFrom(DI.intermission || [], seed + 2, 2);
    if (reels.length) reels.forEach(function (r) { out.push(Object.assign({ kind: "intermission" }, r)); });
    else out.push(slate("intermission", 300, {}));
    if (feats[1]) out.push(Object.assign({ kind: "feature", n: 2 }, feats[1]));
    out.push(slate("goodnight", 30, {}));
    return out;
  }
  function matinee(dayMs) {
    var th = themeOf(dayMs), out = [], films = shuffle(th.films, hash("mat" + dayIndex(dayMs)));
    films.forEach(function (f, k) {
      out.push(Object.assign({ kind: "feature", matinee: true }, f));
      out.push(slate("intermission", 120, { short: true }));
    });
    return out;
  }
  function lay(list, t0, until) { var t = t0, out = []; for (var i = 0; i < list.length && (until == null || t < until); i++) { var x = Object.assign({}, list[i]); x.startMs = t; t += x.length * 1000; if (until != null && t > until) x.cutMs = until; out.push(x); } return { items: out, end: t }; }
  function driveTimeline(ms) {
    var today = ptMidnight(ms), yday = ptMidnight(today - 12 * 36e5), tomorrow = nextMidnight(today);
    var segs = [];
    var lastNight = lay(nightProgram(yday), duskOf(yday)); segs = segs.concat(lastNight.items);
    var tDusk = duskOf(today), t = Math.max(lastNight.end, today);
    while (t < tDusk) { var m = lay(matinee(today), t, tDusk); if (!m.items.length) break; segs = segs.concat(m.items); t = m.end; }
    var tonight = lay(nightProgram(today), tDusk); segs = segs.concat(tonight.items);
    // after the late show, more films from tonight's theme run until midnight (the late show); then the next day's matinee begins
    var after = tonight.end, midnight = tomorrow;
    while (after < midnight) { var en = lay(matinee(today), after, midnight); if (!en.items.length) break; en.items.forEach(function (x) { x.encore = true; }); segs = segs.concat(en.items); after = en.end; }
    after = Math.max(after, midnight);
    while (after < nextMidnight(tomorrow)) { var mm = lay(matinee(tomorrow), after); if (!mm.items.length) break; segs = segs.concat(mm.items); after = mm.end; }
    return segs;
  }
  function driveAt(ms) {
    var segs = driveTimeline(ms);
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i], end = s.cutMs || (s.startMs + s.length * 1000);
      if (ms >= s.startMs && ms < end) return { i: i, item: s, offset: (ms - s.startMs) / 1000, left: (end - ms) / 1000, segs: segs };
    }
    return null;
  }

  // the radio's front page borrows the schedules for its "What's on" preview
  window.THEATER = {
    channels: function () {
      if (this._ch) return this._ch;
      var CH = liveChannels(Date.now()), ADS = window.TV_ADS || [];
      CH.forEach(function (c, k) { c.num = c.num || k + 2; });
      return (this._ch = CH.map(function (c) { return buildChannel(c, ADS); }));
    },
    tvAt: tvAt, tvNext: tvNext, driveAt: driveAt, themeOf: themeOf, featuresFor: featuresFor, duskOf: duskOf
  };
  if (MODE !== "tv" && MODE !== "drivein") return;

  /* ---------------- the screen ---------------- */
  var screen = $(".scr"), vid = $(".scr video"), card = $(".scr-slate"), standby = $(".scr-standby");
  var soundBtn = $(".scr-sound"), vol = $(".scr-vol input");
  var state = { cur: null, src: "", sound: store.get(MODE + ".sound", false), vol: store.get(MODE + ".vol", 0.8) };
  vid.muted = true; vid.playsInline = true; vid.setAttribute("playsinline", "");
  vid.volume = state.vol;
  /* Browsers refuse to start a video with sound until the visitor has tapped the page. If that
     happens, play it muted for now and turn the sound back on at the first tap anywhere. */
  function go() {
    var p = vid.play();
    if (p && p.catch) p.catch(function (err) {
      if (err && err.name === "NotAllowedError" && !vid.muted) { state.blocked = true; vid.muted = true; showSoundState(); vid.play().catch(function () {}); }
    });
  }
  function showSoundState() {
    var on = state.sound && !state.blocked;
    soundBtn.textContent = on ? "Sound on" : "Turn on the sound";
    soundBtn.setAttribute("aria-pressed", on ? "true" : "false");
    screen.classList.toggle("muted", !on);
  }
  ["pointerdown", "keydown", "touchend"].forEach(function (ev) {
    document.addEventListener(ev, function (e) { if (state.blocked && !soundBtn.contains(e.target)) { state.blocked = false; applySound(); go(); } }, true);
  });
  /* Even volume: every video's loudness was measured ahead of time and stored with it as "gain"
     (1 = full volume, smaller = turned down). Loud commercials and hot transfers get turned down to
     match the rest, so changing channels or going into a break doesn't jump in volume. Browsers
     can't turn a video up past full, so the quietest ones simply play at full. */
  var GAIN = {}, GAIN_DEFAULT = 0.75;
  (function () {
    function walk(o) { if (Array.isArray(o)) o.forEach(walk); else if (o && typeof o === "object") { if (o.src && o.gain != null) GAIN[o.src] = Number(o.gain); for (var k in o) if (o[k] && typeof o[k] === "object") walk(o[k]); } }
    walk(window.TVCH); walk(window.TV_ADS); walk(window.DRIVEIN); walk(window.TV);
  })();
  function gainOf(src) { if (!src) return 1; var g = GAIN[src]; return g > 0 ? Math.min(1, g) : GAIN_DEFAULT; }
  function applySound() {
    // on a channel with radio underneath, the reels themselves stay silent and the radio carries the sound
    vid.muted = !state.sound || !!state.blocked || !!state.bedOn; vid.volume = state.vol * gainOf(state.src); if (typeof pre !== "undefined" && pre) pre.muted = true;
    if (typeof bedEl !== "undefined" && bedEl) { bedEl.muted = !state.sound || !!state.blocked; bedEl.volume = state.vol * gainOf(bedEl.dataset.src); }
    showSoundState();
  }
  soundBtn.addEventListener("click", function () { if (state.blocked) { state.blocked = false; state.sound = true; } else state.sound = !state.sound; store.set(MODE + ".sound", state.sound); applySound(); go(); });
  if (vol) { vol.value = Math.round(state.vol * 100); vol.addEventListener("input", function () { state.vol = vol.value / 100; store.set(MODE + ".vol", state.vol); if (state.vol > 0 && !state.sound) { state.sound = true; store.set(MODE + ".sound", true); } applySound(); }); }
  var fsBtn = $(".scr-full");
  if (fsBtn) fsBtn.addEventListener("click", function () {
    var el = screen;
    if (document.fullscreenElement) document.exitFullscreen().catch(function () {});
    else if (el.requestFullscreen) el.requestFullscreen().catch(function () {});
    else if (vid.webkitEnterFullscreen) vid.webkitEnterFullscreen();
  });
  // browsers only allow sound after a tap; until then the picture plays silently
  applySound();

  function showSlate(it, now) {
    vid.pause(); vid.removeAttribute("src"); vid.load(); state.src = "";
    standby.hidden = true; card.hidden = false;
    var w = it.words || {}, html = "";
    if (it.slate === "id") html = '<p class="sl-k">You are watching</p><p class="sl-big">The Bee\u2019s Knees TV</p><p class="sl-m">Channel ' + esc(w.channel.num) + " \u00b7 " + esc(w.channel.name) + "</p>";
    else if (it.slate === "back") html = '<p class="sl-big">We\u2019ll be right back</p><p class="sl-m">' + esc(w.channel.name) + "</p>";
    else if (it.slate === "welcome") html = '<p class="sl-k">Welcome to</p><p class="sl-big">The Bee\u2019s Knees Drive-In</p><p class="sl-m">Tonight is ' + esc(w.theme.name) + "</p>" + (w.feats && w.feats.length ? '<p class="sl-s">' + w.feats.map(function (f) { return esc(f.title); }).join(" &amp; ") + "</p>" : "");
    else if (it.slate === "intermission") html = '<p class="sl-big">Intermission</p><p class="sl-m">' + (w.short ? "The next feature starts in" : "Visit the snack bar! The second feature starts in") + '</p><p class="sl-count">' + mmss(now ? now.left : it.length) + "</p>";
    else if (it.slate === "goodnight") html = '<p class="sl-big">Good night!</p><p class="sl-m">Drive safely, and please hang the speaker back on its post.</p>';
    card.innerHTML = html;
  }
  /* Two video players take turns: while one plays, the other quietly loads whatever comes next,
     so a new show, commercial or feature starts right away instead of loading from scratch. */
  var pre = vid.cloneNode(false);
  pre.removeAttribute("src"); pre.muted = true; pre.preload = "auto"; pre.style.visibility = "hidden";
  vid.parentNode.insertBefore(pre, vid.nextSibling);
  function onVid(ev, fn) { [vid, pre].forEach(function (v) { v.addEventListener(ev, function (e) { if (e.target === vid) fn(e); }); }); }
  function swapIn(it, offset) {
    var old = vid; vid = pre; pre = old;
    vid.style.visibility = "visible"; old.style.visibility = "hidden";
    old.pause(); old.muted = true; old.removeAttribute("src"); old.load(); delete old.dataset.src;
    state.src = it.src; applySound();
    if (Math.abs(vid.currentTime - offset) > 3) { try { vid.currentTime = offset; } catch (e) {} }
    standby.hidden = vid.readyState >= 3;
    go();
  }
  // iPhone full screen is Apple's own player and only follows one video element, so while it is
  // up the next item loads into that same element instead of swapping players
  function inNativeFull() { return !!(vid.webkitDisplayingFullscreen); }
  [vid, pre].forEach(function (v) {
    v.addEventListener("webkitendfullscreen", function () { setTimeout(function () { tick(true); go(); }, 300); });
  });
  document.addEventListener("fullscreenchange", function () { setTimeout(function () { tick(true); go(); }, 300); });
  document.addEventListener("webkitfullscreenchange", function () { setTimeout(function () { tick(true); go(); }, 300); });
  function preloadNext(n) {
    if (inNativeFull()) return;
    if (!n || n.left > 45) return;
    var nx = where(Date.now() + (n.left + 1) * 1000);
    if (!nx || !nx.item.src || nx.item.src === state.src || pre.dataset.src === nx.item.src) return;
    pre.dataset.src = nx.item.src; pre.src = nx.item.src; pre.load();
  }
  /* The Internet Archive sometimes refuses a file for a minute or two. When a video errors or
     hasn't started after a few seconds, try it once more; if it still won't play, fill the time
     with short commercials and cartoons until the next scheduled item, instead of a blank screen. */
  var failed = {}, FILL_AFTER = 12000;
  var fillPool = [].concat(window.TV_ADS || [], window.TV || [], (window.DRIVEIN && window.DRIVEIN.trailers) || [])
    .filter(function (x) { return x && x.src && Number(x.length) > 0 && Number(x.length) < 480; });
  function isFailed(src) { return failed[src] && Date.now() - failed[src] < 120000; }
  function loadSrc(src, offsetFn) {
    state.src = src; state.started = false; state.loadAt = Date.now(); standby.hidden = false;
    vid.src = src; applySound();
    vid.addEventListener("loadedmetadata", function seek() {
      vid.removeEventListener("loadedmetadata", seek);
      var off = offsetFn ? offsetFn() : 0;
      if (off > 0) { try { vid.currentTime = Math.min(off, (vid.duration || 1e9) - 1); } catch (e) {} }
      go();
    });
  }
  function playFiller() {
    if (state.filler && state.src === state.filler.src && !vid.ended && !isFailed(state.src)) { if (vid.paused) go(); return; }
    var pool = fillPool.filter(function (x) { return !isFailed(x.src); });
    if (!pool.length) return;
    state.filler = pool[Math.floor(Math.random() * pool.length)];
    card.hidden = true; loadSrc(state.filler.src, null);
  }
  function giveUp() {   // the current file won't load: mark it and move on
    if (!state.src) return;
    if (!state.retried && !state.filler) { state.retried = true; var s = state.src; loadSrc(s, function () { var n = where(); return n && n.item.src === s ? n.offset : 0; }); return; }
    failed[state.src] = Date.now(); state.retried = false; tick(true);
  }
  function playItem(it, offset) {
    card.hidden = true;
    if (isFailed(it.src)) return playFiller();
    state.filler = null;
    if (state.src !== it.src) {
      state.retried = false;
      if (pre.dataset.src === it.src && pre.readyState >= 1 && !inNativeFull()) { swapIn(it, offset); state.started = vid.readyState >= 3; state.loadAt = Date.now(); return; }
      loadSrc(it.src, function () { var n = where(); return n && n.item.src === it.src ? n.offset : 0; });
    } else {
      // only jump to catch up when the picture is playing smoothly and has drifted a long way;
      // jumping while it is still buffering starts the buffering over and it never catches up
      if (Math.abs(vid.currentTime - offset) > 30 && vid.readyState >= 3 && !vid.seeking) { try { vid.currentTime = offset; } catch (e) {} }
      if (vid.paused) go();
    }
  }
  function watchdog() {   // called every second: a video that never got going counts as a failure
    if (state.src && !state.started && Date.now() - state.loadAt > FILL_AFTER) giveUp();
  }
  onVid("playing", function () { standby.hidden = true; state.started = true; });
  // if the browser pauses the picture on its own (another tab, the phone locked, a call), pick the
  // schedule back up as soon as the page is in view again
  onVid("pause", function () { if (state.src && !vid.ended) setTimeout(function () { if (!document.hidden && vid.paused && state.src) { tick(true); go(); } }, 400); });
  onVid("waiting", function () { standby.hidden = false; });
  onVid("error", function () { if (state.src) { standby.hidden = false; giveUp(); } });

  /* ---------------- TV page ---------------- */
  var where, renderInfo;
  if (MODE === "tv") {
    var CH = liveChannels(Date.now());
    CH.forEach(function (c, k) { c.num = c.num || k + 2; });
    var ADS = window.TV_ADS || [];
    var S = {}; CH.forEach(function (c) { S[c.id] = buildChannel(c, ADS); });
    var pickCh = function () { var h = location.hash.slice(1); return CH.find(function (c) { return c.id === h; }) || CH.find(function (c) { return c.id === store.get("tv.ch", ""); }) || CH[0]; };
    var cur = pickCh();
    where = function (ms) { return tvAt(S[cur.id], ms || Date.now()); };
    // the channel dial
    var dial = $(".dial");
    CH.forEach(function (c) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ch"; b.dataset.id = c.id;
      b.innerHTML = '<span class="ch-n">' + c.num + '</span><span class="ch-name">' + esc(c.name) + "</span>";
      b.addEventListener("click", function () { tune(c); });
      dial.appendChild(b);
    });
    window.BK_CHAT_PLACE = function () { return "on TV ch " + cur.num; };
    var osd = $(".scr-osd"), osdT = 0;
    var tune = function (c) {
      cur = c; store.set("tv.ch", c.id);
      if (location.hash !== "#" + c.id) history.replaceState(null, "", "#" + c.id);
      state.src = ""; guideKey = ""; tick(true);
      if (osd) {
        osd.innerHTML = c.num + "<small>" + esc(c.name) + "</small>"; osd.hidden = false; osd.classList.remove("fade");
        clearTimeout(osdT); osdT = setTimeout(function () { osd.classList.add("fade"); osdT = setTimeout(function () { osd.hidden = true; }, 450); }, 2200);
      }
      // keep the lit-up channel in view in the tuner row (sideways only, so the page doesn't jump)
      centerDial(c);
    };
    var centerDial = function (c) { var b = dial.querySelector('[data-id="' + c.id + '"]'); if (b) dial.scrollLeft = b.offsetLeft - (dial.clientWidth - b.offsetWidth) / 2; };
    setTimeout(function () { dial.style.scrollBehavior = "auto"; centerDial(cur); dial.style.scrollBehavior = ""; }, 0);
    var step = function (d) { var k = CH.indexOf(cur); tune(CH[(k + d + CH.length) % CH.length]); };
    document.querySelectorAll(".ch-step").forEach(function (b) { b.addEventListener("click", function () { step(+b.dataset.step); }); });
    // keyboard: left/right (or up/down when nothing else wants them) change the channel, number keys go straight there
    var numBuf = "", numT = 0;
    document.addEventListener("keydown", function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var t = e.target; if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable || (t.closest && t.closest(".guide")))) return;
      if (e.key === "ArrowRight" || e.key === "PageUp" || e.key === "+") { e.preventDefault(); step(1); }
      else if (e.key === "ArrowLeft" || e.key === "PageDown" || e.key === "-") { e.preventDefault(); step(-1); }
      else if (/^[0-9]$/.test(e.key)) {
        numBuf += e.key; clearTimeout(numT);
        numT = setTimeout(function () { var c = CH.find(function (x) { return String(x.num) === numBuf; }); numBuf = ""; if (c && c !== cur) tune(c); }, 900);
      }
    });
    // swipe sideways on the screen to change channel on a phone
    var sx = null, sy = 0, scrEl = $(".scr");
    scrEl.addEventListener("touchstart", function (e) { if (e.touches.length === 1) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; } }, { passive: true });
    scrEl.addEventListener("touchend", function (e) {
      if (sx == null) return; var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
    }, { passive: true });
    window.addEventListener("hashchange", function () { var c = pickCh(); if (c !== cur) tune(c); });
    renderInfo = function (n) {
      var it = n.item, show = it.kind === "show" ? it : tvNext(S[cur.id], n.i, "show"), isShow = it.kind === "show";
      $(".np-ch").textContent = "Channel " + cur.num + " \u00b7 " + cur.name;
      $(".np-series").textContent = isShow ? it.series : (it.kind === "ad" ? "A word from our sponsors" : "Station break");
      var t = $(".np-title"); t.textContent = isShow ? it.title.replace(new RegExp("^" + it.series.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*[-:\u2013\u2014]?\\s*", "i"), "") : (it.kind === "ad" ? it.title : "Up next: " + (show ? show.series : ""));
      t.href = it.item || "#"; t.toggleAttribute("aria-disabled", !it.item);
      var music = isShow && cur.radio && state.bedTrack ? "Music on the radio: \u201c" + state.bedTrack.title + "\u201d, " + state.bedTrack.series : "";
      $(".np-date").textContent = isShow && it.date ? (cur.radio ? "Filmed " : "Originally aired ") + it.date + (music ? ". " + music : "") : music;
      $(".np-left").textContent = mmss(n.left) + " left";
      var nx = tvNext(S[cur.id], n.i, "show");
      $(".np-next").textContent = nx ? (isShow ? "Coming up: " + (nx.series === "Commercial" || nx.series === "Cartoon" ? nx.title : nx.series) : "") : "";
      document.querySelectorAll(".ch").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.id === cur.id ? "true" : "false"); });
      var ca = $(".chcard"); if (ca.dataset.id !== cur.id) { ca.dataset.id = cur.id; ca.innerHTML = '<span class="cc-n">' + cur.num + '</span><span class="cc-name">' + esc(cur.name) + '</span><span class="cc-blurb">' + esc(cur.blurb || "") + "</span>"; var img = new Image(); img.alt = ""; img.onload = function () { ca.classList.add("art"); ca.innerHTML = ""; ca.appendChild(img); }; img.src = "art/tv/" + cur.id + ".png"; }
      renderGuide();
    };
    /* The guide: a TV-listings grid, like the one in the Sunday paper. Each channel is a row; the
       columns are half hours, starting at the current half hour and running three hours ahead.
       Station IDs fold into the show before them, and the Commercial Break channel shows as one long block. */
    var guideKey = "", PPM = 7, SPAN = 180;
    var clock = function (ms) { return new Date(ms).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }); };
    var generic = { Commercial: 1, Cartoon: 1, "Home Movie": 1 };
    var renderGuide = function () {
      var now = Date.now(), w = new Date(now); w.setMinutes(w.getMinutes() < 30 ? 0 : 30, 0, 0);
      var t0 = w.getTime(), t1 = t0 + SPAN * 60000, key = Math.floor(now / 60000) + "|" + cur.id;
      if (key === guideKey) return; guideKey = key;
      var g = $(".guide"), head = "", rows = "";
      for (var m = 0; m < SPAN; m += 30) head += '<span class="tg-t" style="left:' + m * PPM + 'px">' + esc(clock(t0 + m * 60000)) + "</span>";
      CH.forEach(function (c) {
        var sc = S[c.id], n = tvAt(sc, t0), i = n.i, st = n.startMs, blocks = [], guard = 0;
        while (st < t1 && guard++ < 600) {
          var it = sc.list[i], en = st + it.length * 1000, last = blocks[blocks.length - 1];
          if (it.kind === "show") { if (c.allAds && last) last.e = en; else blocks.push({ s: st, e: en, it: it }); }
          else if (last) last.e = en;
          st = en; i = (i + 1) % sc.list.length;
        }
        var cells = blocks.map(function (bk) {
          var a = Math.max(bk.s, t0), z = Math.min(bk.e, t1), wpx = (z - a) / 60000 * PPM;
          if (wpx < 3) return "";
          var it = bk.it, name = c.allAds ? "Commercials, back to back" : (generic[it.series] ? it.title : it.series);
          var ep = c.allAds || generic[it.series] ? "" : it.title.replace(it.series, "").replace(/^\s*[-:\u2013\u2014]\s*/, "");
          var on = bk.s <= now && now < bk.e, when = (bk.s < t0 ? "\u25c2 " : "") + clock(bk.s);
          return '<button type="button" class="tg-b' + (on ? " on" : "") + '" data-id="' + c.id + '" style="left:' + ((a - t0) / 60000 * PPM).toFixed(1) + "px;width:" + (wpx - 2).toFixed(1) + 'px" title="' + esc(clock(bk.s) + "  " + name + (ep ? ": " + ep : "")) + '" aria-label="' + esc("Channel " + c.num + ", " + clock(bk.s) + ", " + name + (ep ? ", " + ep : "") + (on ? ", on now" : "")) + '"><i>' + esc(when) + "</i><b>" + esc(name) + "</b>" + (ep ? "<span>" + esc(ep) + "</span>" : "") + "</button>";
        }).join("");
        rows += '<div class="tg-row' + (c === cur ? " cur" : "") + '"><button type="button" class="tg-name" data-id="' + c.id + '"><span class="g-num">' + c.num + '</span><span class="g-name">' + esc(c.name) + '</span></button><div class="tg-track">' + cells + "</div></div>";
      });
      var nowX = ((now - t0) / 60000 * PPM).toFixed(1);
      var oldTg = g.querySelector(".tg"), keep = oldTg && oldTg.dataset.moved ? oldTg.scrollLeft : null;
      g.innerHTML = '<div class="tg" tabindex="0" aria-label="TV listings, the next three hours"><div class="tg-in" style="--span:' + SPAN * PPM + 'px"><div class="tg-row tg-head"><span class="tg-name tg-corner">Channel</span><div class="tg-track">' + head + '</div></div>' + rows + '<span class="tg-now" style="--x:' + nowX + 'px" aria-hidden="true"></span></div></div>';
      // start the grid scrolled to right now (narrow screens can't show the whole three hours); once the
      // visitor scrolls it themselves, leave it where they put it
      var tg = g.querySelector(".tg");
      var seen = tg.clientWidth - (g.querySelector(".tg-name") || {}).offsetWidth;
      tg.scrollLeft = keep != null ? keep : (nowX > seen * 0.5 ? Math.max(0, nowX - 40) : 0);
      if (keep != null) tg.dataset.moved = "1";
      ["pointerdown", "wheel", "keydown", "touchstart"].forEach(function (ev) { tg.addEventListener(ev, function () { tg.dataset.moved = "1"; }, { passive: true }); });
      g.querySelectorAll("[data-id]").forEach(function (b) { b.addEventListener("click", function () { tune(CH.find(function (c) { return c.id === b.dataset.id; })); window.scrollTo({ top: 0, behavior: "smooth" }); }); });
    };
  }

  /* ---------------- Drive-in page ---------------- */
  if (MODE === "drivein") {
    window.BK_CHAT_PLACE = "at the Drive-In";
    where = function (ms) { return driveAt(ms || Date.now()); };
    var LABEL = { cartoon: "A cartoon to start", trailer: "Coming attractions", serial: "Tonight\u2019s serial chapter", intermission: "Intermission", feature: "Feature presentation" };
    renderInfo = function (n) {
      var it = n.item, now = Date.now(), dusk = duskOf(now), night = !it.matinee && !(it.slate === "intermission" && it.words && it.words.short);
      var th = themeOf(now), feats = featuresFor(now);
      $(".mq-theme").textContent = th.name;
      $(".mq-feats").textContent = feats.map(function (f) { return f.title; }).join("  \u00b7  ");
      var offShow = it.matinee || it.encore || (it.slate === "intermission" && it.words && it.words.short);
      window.BK_SHOW_ON = !offShow && now >= dusk;   // the chat opens itself beside the screen during the shared show
      $(".mq-when").textContent = now < dusk ? "Matinee: more " + th.name.replace(/^the /i, "") + " films until the full show starts at " + hhmm(dusk) + "."
        : offShow ? "The show\u2019s over for tonight. The late show runs more " + th.name.replace(/^the /i, "") + " films until midnight."
        : "Tonight\u2019s show is on. It started at " + hhmm(dusk) + ".";
      $(".np-series").textContent = it.slate ? ({ welcome: "Welcome", intermission: "Intermission", goodnight: "Good night" }[it.slate] || "") : (it.encore ? "Late show" : it.matinee ? "Matinee" : (it.kind === "feature" ? (it.n === 2 ? "Second feature" : "First feature") : LABEL[it.kind] || ""));
      var t = $(".np-title"); t.textContent = it.slate ? (it.slate === "welcome" ? th.name : "") : it.title; t.href = it.item || "#";
      $(".np-date").textContent = it.year ? String(it.year) : "";
      $(".np-left").textContent = mmss(n.left) + " left";
      var nx = n.segs[n.i + 1]; $(".np-next").textContent = nx ? "Then: " + (nx.slate ? ({ intermission: "Intermission", goodnight: "Good night", welcome: "Welcome" }[nx.slate]) : nx.kind === "intermission" ? "Intermission" : nx.kind === "trailer" ? "Coming attractions" : (nx.title || "")) + " at " + hhmm(nx.startMs) : "";
      renderWeek(); renderProgram(n);
    };
    // tonight's lineup, with times, so the shape of a night at the drive-in is plain to see
    var PART = { welcome: "Welcome", cartoon: "A cartoon", trailer: "Coming attractions", serial: "The serial chapter", intermission: "Intermission", goodnight: "Good night" };
    var renderProgram = function (n) {
      var ul = $(".program"); if (!ul) return;
      var now = Date.now(), today = ptMidnight(now), dusk = duskOf(today);
      var night = n.segs.filter(function (x) { return !x.matinee && !x.encore && x.startMs >= dusk - 1000 && x.startMs < nextMidnight(today) && !(x.slate === "intermission" && x.words && x.words.short); });
      var rows = [], last = null;
      night.forEach(function (x) {
        var kind = x.slate || x.kind, label = kind === "feature" ? (x.n === 2 ? "Second feature: " : "First feature: ") + x.title + (x.year ? " (" + x.year + ")" : "") : PART[kind] || kind;
        var end = x.cutMs || x.startMs + x.length * 1000;
        if (last && last.kind === kind) { last.end = end; return; }   // two trailers or two intermission reels read as one line
        last = { kind: kind, label: label, start: x.startMs, end: end }; rows.push(last);
      });
      var html = rows.map(function (r) {
        var st = now >= r.end ? "done" : now >= r.start ? "now" : "";
        return '<li' + (st ? ' class="' + st + '"' : "") + '><span class="pg-t">' + hhmm(r.start) + '</span><span class="pg-w">' + esc(r.label) + (st === "now" ? ' <b class="pg-on">Now playing</b>' : "") + "</span></li>";
      }).join("");
      if (ul.dataset.html !== html) { ul.dataset.html = html; ul.innerHTML = html; }
      var dz = $(".how-dusk"); if (dz) dz.textContent = hhmm(dusk);
    };
    var renderWeek = function () {
      var w = $(".week"), now = Date.now(), noon0 = ptMidnight(now) + 12 * 36e5; var rows = "";
      for (var k = 0; k < 7; k++) {
        var day = noon0 + k * 864e5, th = themeOf(day), f = featuresFor(day);
        rows += '<li' + (k === 0 ? ' class="today"' : "") + '><span class="wk-day">' + (k === 0 ? "Tonight" : new Date(day).toLocaleDateString([], { weekday: "long", timeZone: "America/Los_Angeles" })) + '</span><span class="wk-theme">' + esc(th.name) + '</span><span class="wk-films">' + f.map(function (x) { return esc(x.title) + (x.year ? " (" + x.year + ")" : ""); }).join(" &amp; ") + '</span><span class="wk-time">' + hhmm(duskOf(day)) + "</span></li>";
      }
      if (w.dataset.html !== rows) { w.dataset.html = rows; w.innerHTML = rows; }
    };
  }

  /* ---------------- the clock ---------------- */
  var lastKey = "";
  /* Radio under the picture: a TV channel can name one of the radio's stations ("radio" in tv-data.js).
     While its shows are on, that station plays underneath on the radio's own shared clock, so it's the
     same song the radio is playing right now, and the shows' own sound is muted. Commercials and
     station breaks keep their own sound. The radio's track list is only fetched when it's needed. */
  var bedEl = null, bedSt = null, bedLoading = false;
  function bedStation(id) {
    if (bedSt && bedSt.id === id) return bedSt;
    var st = (window.STATIONS || []).find(function (x) { return x.id === id; });
    if (!st) {
      if (!bedLoading && !window.STATIONS) { bedLoading = true; var sc = document.createElement("script"); sc.src = "stations.js?v=20261102d"; sc.onload = function () { tick(true); }; document.head.appendChild(sc); }
      return null;
    }
    var t = 0; st._cumB = st.tracks.map(function (tr) { var a = t; t += Number(tr.length) || 0; return a; }); st._totB = t; st._epB = Date.parse(st.epoch || "2026-11-01T00:00:00Z");
    return (bedSt = st);
  }
  function bedAt(st, ms) {
    var pos = ((ms - st._epB) / 1000) % st._totB; if (pos < 0) pos += st._totB;
    var lo = 0, hi = st.tracks.length - 1;
    while (lo < hi) { var mid = (lo + hi + 1) >> 1; if (st._cumB[mid] <= pos) lo = mid; else hi = mid - 1; }
    return { track: st.tracks[lo], offset: pos - st._cumB[lo] };
  }
  function radioUnder(n) {
    var id = MODE === "tv" && typeof cur !== "undefined" && cur && cur.radio;
    var want = !!(id && n.item.kind === "show");
    var st = want ? bedStation(id) : null;
    var was = state.bedOn; state.bedOn = want;
    if (was !== want) applySound();
    if (!want || !st) { if (bedEl && !bedEl.paused) bedEl.pause(); state.bedTrack = null; return; }
    if (!bedEl) {
      bedEl = new Audio(); bedEl.preload = "auto";
      bedEl.addEventListener("ended", function () { tick(true); });
      bedEl.addEventListener("error", function () { setTimeout(function () { if (bedEl) delete bedEl.dataset.src; }, 15000); });
      applySound();
    }
    var b = bedAt(st, Date.now()); state.bedTrack = b.track;
    if (bedEl.dataset.src !== b.track.src) {
      bedEl.dataset.src = b.track.src; bedEl.src = b.track.src; if (b.track.gain != null) GAIN[b.track.src] = Number(b.track.gain); applySound();
      bedEl.addEventListener("loadedmetadata", function seek() { bedEl.removeEventListener("loadedmetadata", seek); var c = bedAt(st, Date.now()); try { bedEl.currentTime = c.offset; } catch (e) {} }, { once: true });
    } else if (bedEl.readyState >= 3 && !bedEl.seeking && Math.abs(bedEl.currentTime - b.offset) > 6) { try { bedEl.currentTime = b.offset; } catch (e) {} }
    if (bedEl.paused) { var p = bedEl.play(); if (p && p.catch) p.catch(function (err) { if (err && err.name === "NotAllowedError" && !bedEl.muted) { state.blocked = true; applySound(); } }); }
  }
  function tick(force) {
    var n = where(); if (!n) return;
    radioUnder(n);
    var key = (n.item.src || n.item.slate) + "@" + (n.item.start != null ? n.item.start : n.item.startMs);
    if (n.item.slate) { if (force || key !== lastKey || n.item.slate === "intermission") showSlate(n.item, n); }
    else if (force || key !== lastKey || !document.hidden) playItem(n.item, n.offset);
    lastKey = key;
    preloadNext(n);
    if (!n.item.slate) watchdog();
    renderInfo(n);
  }
  onVid("ended", function () { tick(true); });
  setInterval(function () { tick(false); }, 1000);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) { tick(true); go(); } });
  window.addEventListener("pageshow", function () { tick(true); go(); });
  tick(true);
  $(".scr-start") && $(".scr-start").addEventListener("click", function () { state.sound = true; store.set(MODE + ".sound", true); applySound(); go(); });
})();
