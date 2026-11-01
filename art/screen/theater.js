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

  /* ---------------- schedules ---------------- */
  var EPOCH = Date.parse("2026-11-01T00:00:00Z");

  // TV: each channel is its shuffled episodes with a break between them (a station ID and up to two commercials)
  function buildChannel(ch, ads) {
    var eps = shuffle(ch.episodes, hash(ch.id)), out = [], r = rng(hash(ch.id + "ads"));
    eps.forEach(function (e, k) {
      out.push(Object.assign({ kind: "show" }, e));
      out.push(slate("id", 6, { channel: ch }));
      if (ads.length) {
        var n = 1 + (k % 2), used = {};
        for (var i = 0; i < n; i++) { var a = ads[Math.floor(r() * ads.length)]; if (used[a.src]) continue; used[a.src] = 1; out.push(Object.assign({ kind: "ad" }, a)); }
      } else out.push(slate("back", 8, { channel: ch }));
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
  // from dusk (by the listener's own clock and calendar) the full night at the drive-in runs.
  var DUSK = [17.4, 18.0, 19.5, 20.0, 20.5, 20.8, 20.8, 20.3, 19.6, 18.8, 17.2, 17.0];   // about 25 minutes after sunset, mid-latitude US, by month
  function duskOf(day) { var d = new Date(day); var h = DUSK[d.getMonth()]; d.setHours(Math.floor(h), Math.round((h % 1) * 60), 0, 0); return d.getTime(); }
  function dayIndex(ms) { var d = new Date(ms); return Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(2026, 0, 5)) / 864e5); }  // 2026-01-05 was a Monday
  function themeOf(ms) { var DI = window.DRIVEIN, wd = (new Date(ms).getDay() + 6) % 7; return DI.themes[wd] || DI.themes[String(wd)]; }
  function featuresFor(ms) {     // tonight's two features: rotates weekly through the theme's films
    var th = themeOf(ms), f = th.films, wk = Math.floor(dayIndex(ms) / 7);
    if (!f.length) return [];
    return [f[(wk * 2) % f.length], f[(wk * 2 + 1) % f.length]].filter(function (x, i, a) { return a.indexOf(x) === i; });
  }
  function pickFrom(list, seed, n) { return list.length ? shuffle(list, seed).slice(0, n) : []; }
  function nightProgram(dayMs) {
    var DI = window.DRIVEIN, th = themeOf(dayMs), feats = featuresFor(dayMs), seed = hash("night" + dayIndex(dayMs)), out = [];
    out.push(slate("welcome", 20, { theme: th, feats: feats }));
    pickFrom(window.TV || [], seed, 1).forEach(function (c) { out.push(Object.assign({ kind: "cartoon" }, c)); });
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
    var d = new Date(ms), today = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(), yday = today - 864e5;
    var segs = [];
    var lastNight = lay(nightProgram(yday), duskOf(yday)); segs = segs.concat(lastNight.items);
    var tDusk = duskOf(today), t = Math.max(lastNight.end, today);
    while (t < tDusk) { var m = lay(matinee(today), t, tDusk); if (!m.items.length) break; segs = segs.concat(m.items); t = m.end; }
    var tonight = lay(nightProgram(today), tDusk); segs = segs.concat(tonight.items);
    var after = tonight.end; while (after < today + 2 * 864e5) { var mm = lay(matinee(today + 864e5), after); if (!mm.items.length) break; segs = segs.concat(mm.items); after = mm.end; }
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

  /* ---------------- the screen ---------------- */
  var screen = $(".scr"), vid = $(".scr video"), card = $(".scr-slate"), standby = $(".scr-standby");
  var soundBtn = $(".scr-sound"), vol = $(".scr-vol input");
  var state = { cur: null, src: "", sound: store.get(MODE + ".sound", false), vol: store.get(MODE + ".vol", 0.8) };
  vid.muted = true; vid.playsInline = true; vid.setAttribute("playsinline", "");
  vid.volume = state.vol;
  function applySound() {
    vid.muted = !state.sound; vid.volume = state.vol;
    soundBtn.textContent = state.sound ? "Sound on" : "Turn on the sound";
    soundBtn.setAttribute("aria-pressed", state.sound ? "true" : "false");
    screen.classList.toggle("muted", !state.sound);
  }
  soundBtn.addEventListener("click", function () { state.sound = !state.sound; store.set(MODE + ".sound", state.sound); applySound(); vid.play().catch(function () {}); });
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
  function playItem(it, offset) {
    card.hidden = true;
    if (state.src !== it.src) {
      state.src = it.src; standby.hidden = false;
      vid.src = it.src;
      vid.addEventListener("loadedmetadata", function seek() {
        vid.removeEventListener("loadedmetadata", seek);
        var n = where(); if (n && n.item.src === it.src) { try { vid.currentTime = Math.min(n.offset, (vid.duration || 1e9) - 1); } catch (e) {} }
        vid.play().catch(function () {});
      });
    } else {
      if (Math.abs(vid.currentTime - offset) > 6 && vid.readyState > 0) { try { vid.currentTime = offset; } catch (e) {} }
      if (vid.paused) vid.play().catch(function () {});
    }
  }
  vid.addEventListener("playing", function () { standby.hidden = true; });
  vid.addEventListener("waiting", function () { standby.hidden = false; });
  vid.addEventListener("error", function () { if (state.src) { standby.hidden = false; standby.textContent = "Please stand by"; } });

  /* ---------------- TV page ---------------- */
  var where, renderInfo;
  if (MODE === "tv") {
    var CH = (window.TVCH || []).filter(function (c) { return c.episodes && c.episodes.length; });
    CH.forEach(function (c, k) { c.num = c.num || k + 2; });
    var ADS = window.TV_ADS || [];
    var S = {}; CH.forEach(function (c) { S[c.id] = buildChannel(c, ADS); });
    var pickCh = function () { var h = location.hash.slice(1); return CH.find(function (c) { return c.id === h; }) || CH.find(function (c) { return c.id === store.get("tv.ch", ""); }) || CH[0]; };
    var cur = pickCh();
    where = function () { return tvAt(S[cur.id], Date.now()); };
    // the channel dial
    var dial = $(".dial");
    CH.forEach(function (c) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ch"; b.dataset.id = c.id;
      b.innerHTML = '<span class="ch-n">' + c.num + '</span><span class="ch-name">' + esc(c.name) + "</span>";
      b.addEventListener("click", function () { tune(c); });
      dial.appendChild(b);
    });
    var tune = function (c) {
      cur = c; store.set("tv.ch", c.id);
      if (location.hash !== "#" + c.id) history.replaceState(null, "", "#" + c.id);
      state.src = ""; tick(true);
    };
    window.addEventListener("hashchange", function () { var c = pickCh(); if (c !== cur) tune(c); });
    renderInfo = function (n) {
      var it = n.item, show = it.kind === "show" ? it : tvNext(S[cur.id], n.i, "show"), isShow = it.kind === "show";
      $(".np-ch").textContent = "Channel " + cur.num + " \u00b7 " + cur.name;
      $(".np-series").textContent = isShow ? it.series : (it.kind === "ad" ? "A word from our sponsors" : "Station break");
      var t = $(".np-title"); t.textContent = isShow ? it.title.replace(new RegExp("^" + it.series.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*[-:\u2013\u2014]?\\s*", "i"), "") : (it.kind === "ad" ? it.title : "Up next: " + (show ? show.series : ""));
      t.href = it.item || "#"; t.toggleAttribute("aria-disabled", !it.item);
      $(".np-date").textContent = isShow && it.date ? "Originally aired " + it.date : "";
      $(".np-left").textContent = mmss(n.left) + " left";
      var nx = tvNext(S[cur.id], n.i, "show");
      $(".np-next").textContent = nx ? (isShow ? "Coming up: " + nx.series : "") : "";
      document.querySelectorAll(".ch").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.id === cur.id ? "true" : "false"); });
      var ca = $(".chcard"); if (ca.dataset.id !== cur.id) { ca.dataset.id = cur.id; ca.innerHTML = '<span class="cc-n">' + cur.num + '</span><span class="cc-name">' + esc(cur.name) + '</span><span class="cc-blurb">' + esc(cur.blurb || "") + "</span>"; var img = new Image(); img.alt = ""; img.onload = function () { ca.classList.add("art"); ca.innerHTML = ""; ca.appendChild(img); }; img.src = "art/tv/" + cur.id + ".png"; }
      renderGuide();
    };
    var renderGuide = function () {
      var g = $(".guide"), now = Date.now(), rows = "";
      CH.forEach(function (c) {
        var n = tvAt(S[c.id], now), it = n.item, show = it.kind === "show" ? it : tvNext(S[c.id], n.i, "show");
        var nx = tvNext(S[c.id], it.kind === "show" ? n.i : S[c.id].list.indexOf(show), "show");
        rows += '<button type="button" class="g-row' + (c === cur ? " on" : "") + '" data-id="' + c.id + '"><span class="g-num">' + c.num + '</span><span class="g-name">' + esc(c.name) + '</span><span class="g-now"><b>' + esc(show ? show.series : "") + "</b> " + esc(show ? show.title.replace(show.series, "").replace(/^\s*[-:\u2013\u2014]\s*/, "") : "") + '</span><span class="g-next">then ' + esc(nx ? nx.series : "") + "</span></button>";
      });
      if (g.dataset.html !== rows) { g.dataset.html = rows; g.innerHTML = rows; g.querySelectorAll(".g-row").forEach(function (b) { b.addEventListener("click", function () { tune(CH.find(function (c) { return c.id === b.dataset.id; })); window.scrollTo({ top: 0, behavior: "smooth" }); }); }); }
    };
  }

  /* ---------------- Drive-in page ---------------- */
  if (MODE === "drivein") {
    where = function () { return driveAt(Date.now()); };
    var LABEL = { cartoon: "A cartoon to start", trailer: "Coming attractions", serial: "Tonight\u2019s serial chapter", intermission: "Intermission", feature: "Feature presentation" };
    renderInfo = function (n) {
      var it = n.item, now = Date.now(), dusk = duskOf(now), night = !it.matinee && !(it.slate === "intermission" && it.words && it.words.short);
      var th = themeOf(now), feats = featuresFor(now);
      $(".mq-theme").textContent = th.name;
      $(".mq-feats").textContent = feats.map(function (f) { return f.title; }).join("  \u00b7  ");
      $(".mq-when").textContent = now < dusk ? "Gates open at dusk, " + hhmm(dusk) + " tonight. Now showing: the afternoon matinee" : "Now showing: tonight\u2019s double feature";
      $(".np-series").textContent = it.slate ? ({ welcome: "Welcome", intermission: "Intermission", goodnight: "Good night" }[it.slate] || "") : (it.matinee ? "Afternoon matinee" : (it.kind === "feature" ? (it.n === 2 ? "Second feature" : "First feature") : LABEL[it.kind] || ""));
      var t = $(".np-title"); t.textContent = it.slate ? (it.slate === "welcome" ? th.name : "") : it.title; t.href = it.item || "#";
      $(".np-date").textContent = it.year ? String(it.year) : "";
      $(".np-left").textContent = mmss(n.left) + " left";
      var nx = n.segs[n.i + 1]; $(".np-next").textContent = nx ? "Then: " + (nx.slate ? ({ intermission: "Intermission", goodnight: "Good night", welcome: "Welcome" }[nx.slate]) : (nx.title || "")) + " at " + hhmm(nx.startMs) : "";
      renderWeek();
    };
    var renderWeek = function () {
      var w = $(".week"), now = Date.now(), d0 = new Date(now); d0.setHours(12, 0, 0, 0); var rows = "";
      for (var k = 0; k < 7; k++) {
        var day = d0.getTime() + k * 864e5, th = themeOf(day), f = featuresFor(day);
        rows += '<li' + (k === 0 ? ' class="today"' : "") + '><span class="wk-day">' + (k === 0 ? "Tonight" : new Date(day).toLocaleDateString([], { weekday: "long" })) + '</span><span class="wk-theme">' + esc(th.name) + '</span><span class="wk-films">' + f.map(function (x) { return esc(x.title) + (x.year ? " (" + x.year + ")" : ""); }).join(" &amp; ") + '</span><span class="wk-time">' + hhmm(duskOf(day)) + "</span></li>";
      }
      if (w.dataset.html !== rows) { w.dataset.html = rows; w.innerHTML = rows; }
    };
  }

  /* ---------------- the clock ---------------- */
  var lastKey = "";
  function tick(force) {
    var n = where(); if (!n) return;
    var key = (n.item.src || n.item.slate) + "@" + (n.item.start != null ? n.item.start : n.item.startMs);
    if (n.item.slate) { if (force || key !== lastKey || n.item.slate === "intermission") showSlate(n.item, n); }
    else if (force || key !== lastKey || !document.hidden) playItem(n.item, n.offset);
    lastKey = key;
    renderInfo(n);
  }
  vid.addEventListener("ended", function () { tick(true); });
  setInterval(function () { tick(false); }, 1000);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) tick(true); });
  tick(true);
  $(".scr-start") && $(".scr-start").addEventListener("click", function () { state.sound = true; store.set(MODE + ".sound", true); applySound(); vid.play().catch(function () {}); });
})();
