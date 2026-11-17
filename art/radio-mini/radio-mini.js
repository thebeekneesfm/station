/* The little radio: a small player bar for the station's other pages (the Community Puzzle first), so the
   radio keeps going when you leave the front page. It plays the same station on the same shared clock as the
   radio (stations.js), so you hear the same moment as everyone else, and it remembers the station you had on.
   Browsers only let sound start after a tap, so if the radio was on it tries to carry on, and if the browser
   says no, the Play button waits for a tap. */
(function () {
  "use strict";
  var ALL = window.STATIONS || []; if (!ALL.length || window.BK_NO_MINI) return;
  function mmdd(d) { return String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function inSeason(st) { if (!st.season) return true; var t = mmdd(new Date()), f = st.season.from, to = st.season.to; return f <= to ? (t >= f && t <= to) : (t >= f || t <= to); }
  var ST = ALL.filter(inSeason);
  ST.forEach(function (st) {
    var t = 0; st._cum = st.tracks.map(function (tr) { var s = t; t += Number(tr.length) || 0; return s; });
    st._total = t; st._epoch = Date.parse(st.epoch || "2026-11-01T00:00:00Z");
  });
  var PHI = 0.6180339887498949;
  function loopShift(n, starts) { var f = (n * PHI) % 1; if (f < 0) f += 1; return starts[Math.floor(f * starts.length)] || 0; }
  function at(st, ms) {   // the same arithmetic as the radio (radio.js), so both play the same second
    var T = ((ms || Date.now()) - st._epoch) / 1000, n = Math.floor(T / st._total), pos = T - n * st._total + loopShift(n, st._cum);
    if (pos >= st._total) pos -= st._total;
    var lo = 0, hi = st.tracks.length - 1;
    while (lo < hi) { var mid = (lo + hi + 1) >> 1; if (st._cum[mid] <= pos) lo = mid; else hi = mid - 1; }
    var tr = st.tracks[lo]; return { i: lo, track: tr, offset: pos - st._cum[lo], left: tr.length - (pos - st._cum[lo]) };
  }
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem("otr." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("otr." + k, JSON.stringify(v)); } catch (e) {} }
  };
  var st = ST.find(function (s) { return s.id === store.get("radioStation", ""); }) || ST[0];
  var on = false, au = new Audio(); au.preload = "none";

  var bar = document.createElement("div"); bar.className = "mini-radio"; bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "The radio");
  bar.innerHTML = '<button type="button" class="mr-pp" aria-label="Play the radio"><svg viewBox="0 0 20 20" aria-hidden="true"><path class="mr-play" d="M6 4l10 6-10 6z"/><path class="mr-pause" d="M5 4h3.5v12H5zM11.5 4H15v12h-3.5z"/></svg></button>' +
    '<div class="mr-what"><label class="mr-lab"><span>The radio</span><select aria-label="Station"></select></label><div class="mr-now" aria-live="polite"></div></div>';
  var css = document.createElement("style");
  css.textContent = '.mini-radio{position:fixed;left:max(12px,env(safe-area-inset-left,0px));bottom:max(12px,env(safe-area-inset-bottom,0px));z-index:30;display:flex;align-items:center;gap:10px;max-width:min(430px,calc(100vw - 24px));padding:8px 14px 8px 8px;background:url("art/newsprint.jpg") 0 0/640px 640px,#e9e1c9;color:#1f1b17;box-shadow:0 4px 0 rgba(0,0,0,.3),0 10px 22px rgba(0,0,0,.3);font:16px/1.25 "BK Serif",Georgia,serif;transform:rotate(-.4deg)}' +
    '.mr-pp{flex:none;width:46px;height:46px;border:0;border-radius:50%;background:#c8321f;color:#fff8ec;cursor:pointer;display:grid;place-items:center}.mr-pp svg{width:20px;height:20px;fill:currentColor}' +
    '.mini-radio .mr-pause{display:none}.mini-radio.on .mr-pause{display:inline}.mini-radio.on .mr-play{display:none}.mr-pp:focus-visible,.mr-lab select:focus-visible{outline:3px solid #e3a92f;outline-offset:2px}' +
    '.mr-what{min-width:0}.mr-lab{display:flex;align-items:center;gap:6px;font-weight:700}.mr-lab span{font:400 15px/1 "BK Head","BK Serif",Georgia,serif;text-transform:uppercase;letter-spacing:.03em}' +
    '.mr-lab select{font:700 15px "BK Serif",Georgia,serif;background:transparent;border:0;border-bottom:1.5px solid #1f1b17;color:#1f1b17;padding:2px 2px;max-width:170px}' +
    '.mr-now{font-size:14px;font-style:italic;color:#5d5244;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:330px}' +
    'body{padding-bottom:84px}@media (prefers-reduced-motion:reduce){.mini-radio{transform:none}}';
  document.head.appendChild(css);
  var pp = bar.querySelector(".mr-pp"), sel = bar.querySelector("select"), nowEl = bar.querySelector(".mr-now");
  ST.forEach(function (s) { var o = document.createElement("option"); o.value = s.id; o.textContent = s.name; sel.appendChild(o); });
  sel.value = st.id;

  function show() {
    var n = at(st), t = n.track;
    nowEl.textContent = (t.series ? t.series + (t.title ? ": " : "") : "") + (t.title || "");
    bar.classList.toggle("on", on); pp.setAttribute("aria-label", on ? "Pause the radio" : "Play the radio");
  }
  function play() {
    var n = at(st), src = n.track.src;
    if (au.dataset.src !== src) {
      au.dataset.src = src; au.src = src;
      au.addEventListener("loadedmetadata", function () { try { au.currentTime = at(st).offset; } catch (e) {} }, { once: true });
    } else { try { au.currentTime = n.offset; } catch (e) {} }
    var p = au.play();
    if (p && p.catch) p.catch(function () { on = false; show(); });
    try {
      navigator.mediaSession.metadata = new MediaMetadata({ title: n.track.title || n.track.series || "", artist: n.track.series || "", album: "The Bee's Knees.fm · " + st.name });
      navigator.mediaSession.setActionHandler("play", function () { setOn(true); });
      navigator.mediaSession.setActionHandler("pause", function () { setOn(false); });
    } catch (e) {}
    show();
  }
  function setOn(v) {
    on = v; store.set("radioOn", v);
    if (on) play(); else au.pause();
    show();
  }
  pp.addEventListener("click", function () { setOn(!on); });
  sel.addEventListener("change", function () {
    st = ST.find(function (s) { return s.id === sel.value; }) || st; store.set("radioStation", st.id);
    if (on) play(); else show();
  });
  au.addEventListener("ended", function () { if (on) play(); });
  au.addEventListener("error", function () { if (on) setTimeout(function () { if (on) { au.dataset.src = ""; play(); } }, 3000); });
  setInterval(function () {   // stay on the schedule: move on when the show changes, catch up if it drifts
    show(); if (!on || au.paused) return;
    var n = at(st);
    if (n.track.src !== au.dataset.src) play();
    else if (au.readyState >= 2 && Math.abs(au.currentTime - n.offset) > 8) { try { au.currentTime = n.offset; } catch (e) {} }
  }, 5000);
  document.body.appendChild(bar);
  show();
  // the radio was playing when they left the front page: try to carry on (the browser may want a tap first)
  if (store.get("radioOn", false)) setOn(true);
})();
