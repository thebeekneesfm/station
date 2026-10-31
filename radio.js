/* The radio engine. You shouldn't need to edit this file:
   the look lives in skin.js and the programming lives in stations.js. */
(function () {
  "use strict";
  const SKIN = window.SKIN, STATIONS = window.STATIONS;
  // Two layouts: SKIN (wide screens) and SKIN.portrait (phones held upright), if you've made one.
  const isPortrait = () => !!SKIN.portrait && window.innerHeight > window.innerWidth;
  let SK = isPortrait() ? SKIN.portrait : SKIN;
  let W = SK.stage.width, H = SK.stage.height;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const WORDS = Object.assign({
    off: "Switch me on",
    warming: "Warming up…",
    between: "",
    playing: "",
    lost: "Lost the signal. Back at {time}",
    gap: "",
    guideNow: "Now",
    listeners: "{n} tuned in right now",
    listenersOne: "Just you tonight",
    listenersStation: "{station} {n}",
    listeningHere: "{n} listening",
    listeningAlone: "",
    nowOn: "{station}: {series} — {title}",
    cleanOn: "Sound: cleaned up (click for original)",
    cleanOff: "Sound: original (click to clean up)",
    tvTuning: "",
    tvStandby: "Please stand by"
  }, SKIN.words || {});
  const CONFIG = window.RADIO_CONFIG || {};

  const $ = (s, el = document) => el.querySelector(s);
  const stage = $("#stage");
  const store = {
    get(k, d) { try { const v = localStorage.getItem("otr." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("otr." + k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- schedule ---------- */
  STATIONS.forEach(st => {
    let t = 0;
    st._cum = st.tracks.map(tr => { const s = t; t += Number(tr.length) || 0; return s; });
    st._total = t;
    st._epoch = Date.parse(st.epoch || "2026-11-01T00:00:00Z");
  });
  STATIONS.forEach((st, i) => {
    if (st.dial == null) st.dial = STATIONS.length > 1 ? i / (STATIONS.length - 1) : 0.5;
    if (!st.num) st.num = String(i + 1).padStart(2, "0");
  });
  function at(st, ms = Date.now()) {
    let pos = ((ms - st._epoch) / 1000) % st._total;
    if (pos < 0) pos += st._total;
    let lo = 0, hi = st.tracks.length - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (st._cum[mid] <= pos) lo = mid; else hi = mid - 1; }
    const tr = st.tracks[lo];
    return { i: lo, track: tr, offset: pos - st._cum[lo], left: tr.length - (pos - st._cum[lo]) };
  }
  function upcoming(st, n) {
    const now = Date.now(), cur = at(st, now), out = [];
    let start = now + cur.left * 1000;
    for (let k = 1; k <= n && st.tracks.length > 1; k++) {
      const tr = st.tracks[(cur.i + k) % st.tracks.length];
      out.push({ start, track: tr });
      start += tr.length * 1000;
    }
    return out;
  }
  const hhmm = ms => new Date(ms).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const mmss = s => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(x).padStart(2, "0"); };

  /* ---------- state ---------- */
  const state = {
    on: false,
    dial: store.get("dial", STATIONS[0].dial),
    vol: store.get("vol", 0.75),
    phase: "off",          // off | warming | playing | between | lost | gap
    station: null,
    resumeAt: 0,
    editing: false,
    showAll: false,
    selected: null,
    clean: store.get("clean", true)      // false = Original: no sound cleanup at all
  };
  const dials = STATIONS.map(s => s.dial).sort((a, b) => a - b);
  const CAPTURE = Math.min(0.035, ...dials.slice(1).map((d, i) => (d - dials[i]) / 2.2));
  function stationAtDial(d) {
    let best = null, bd = 1;
    STATIONS.forEach(s => { const x = Math.abs(s.dial - d); if (x < bd) { bd = x; best = s; } });
    return bd <= CAPTURE ? best : null;
  }

  /* ---------- audio ---------- */
  const audio = new Audio();
  audio.preload = "auto";
  audio.crossOrigin = "anonymous";   // lets the browser clean up the sound; the Archive allows it
  let ctx = null, noiseGain = null, staticEl = null, staticOk = false;
  const fx = { ready: false };       // the sound-cleaning chain
  const SOUND = Object.assign({ level: true, declick: 0.5, tone: 9000 }, SKIN.sound || {});
  function initAudio() {
    if (ctx) return;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      buildChain();
      const len = ctx.sampleRate * 2, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      let b = 0;
      for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = 0.97 * b + 0.03 * w; d[i] = (w * 0.5 + b * 2) * (Math.random() < 0.0008 ? 3 : 1); }
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1800; bp.Q.value = 0.6;
      noiseGain = ctx.createGain(); noiseGain.gain.value = 0;
      src.connect(bp); bp.connect(noiseGain); noiseGain.connect(ctx.destination); src.start();
    } catch (e) { ctx = null; }
  }

  /* Sound cleaning: rumble filter → click remover → tone (softens hiss and crackle)
     → automatic level → compressor → limiter → volume. Settings per station in stations.js. */
  const DECLICK = `
  // Clicks, pops and crackle are samples that stick out far more than their neighbours.
  // Each sample is compared with the long-run level and with the last ~30 samples, so
  // busy passages (snare drums, brushes, sibilants) aren't mistaken for crackle.
  // Small ticks are replaced by the median of their neighbours; big pops get a short
  // stretch bridged with a straight line. Output runs 96 samples (2 ms) behind.
  class Declick extends AudioWorkletProcessor {
    constructor() {
      super(); this.kc = 999; this.wide = 0; this.st = [];
      this.port.onmessage = e => { if (e.data.kc != null) this.kc = e.data.kc; if (e.data.wide != null) this.wide = e.data.wide; };
    }
    process(inputs, outputs) {
      const inp = inputs[0], out = outputs[0], N = 4096, M = N - 1, D = 96;
      for (let c = 0; c < out.length; c++) {
        const x = inp[c] || inp[0], y = out[c];
        if (!x) { y.fill(0); continue; }
        const s = this.st[c] || (this.st[c] = { buf: new Float32Array(N), flag: new Uint8Array(N), w: 0, hf: 1e-6, hff: 1e-6 });
        for (let i = 0; i < y.length; i++) {
          const v = x[i], w = s.w;
          s.buf[w & M] = v;
          s.flag[(w + 8) & M] = 0;
          if (this.kc < 50 && w > 2) {
            const n = w - 1, hv = s.buf[n & M] - 0.5 * (s.buf[(n - 1) & M] + v), ha = Math.abs(hv);
            const thr = this.kc * Math.sqrt(Math.max(s.hf, s.hff));
            if (ha > thr && ha > 0.004) {
              s.flag[n & M] = 1;
              if (this.wide && ha > 3 * thr && ha > 0.05) for (let j = -1; j <= this.wide; j++) s.flag[(n + j) & M] = 1;   // a big pop: mark its tail too
            } else s.hf += (Math.min(hv * hv, 0.01) - s.hf) * 0.0015;
            s.hff += (Math.min(hv * hv, 4 * s.hff + 1e-6) - s.hff) * 0.06;
          }
          const r = w - D;
          let o = r >= 0 ? s.buf[r & M] : 0;
          if (r > 40 && s.flag[r & M]) {
            let a = r, b = r;
            while (a > r - 32 && s.flag[(a - 1) & M]) a--;
            while (b < r + 32 && s.flag[(b + 1) & M]) b++;
            if (b - a < 2 || b - a > 12) {
              const m = [s.buf[(r - 3) & M], s.buf[(r - 2) & M], s.buf[(r - 1) & M], o, s.buf[(r + 1) & M], s.buf[(r + 2) & M], s.buf[(r + 3) & M]];
              m.sort((p, q) => p - q); o = m[3];
            } else {
              const p0 = s.buf[(a - 1) & M], p1 = s.buf[(b + 1) & M];
              o = p0 + (p1 - p0) * (r - a + 1) / (b - a + 2);
            }
          }
          y[i] = o; s.w = w + 1;
        }
      }
      return true;
    }
  }
  registerProcessor("declick", Declick);`;
  function buildChain() {
    try {
      const src = ctx.createMediaElementSource(audio);
      const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 70;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = SOUND.tone; lp.Q.value = 0.5;
      const an = ctx.createAnalyser(); an.fftSize = 2048;
      const agc = ctx.createGain();
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -26; comp.knee.value = 12; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.3;
      const lim = ctx.createDynamicsCompressor();
      lim.threshold.value = -4; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.001; lim.release.value = 0.08;
      const master = ctx.createGain(); master.gain.value = state.vol;
      hp.connect(lp); lp.connect(an); an.connect(agc); agc.connect(comp); comp.connect(lim); lim.connect(master); master.connect(ctx.destination);
      Object.assign(fx, { ready: true, src, hp, lp, an, agc, comp, master, level: null, buf: new Float32Array(an.fftSize) });
      routeSound();
      audio.volume = 1;
      if (ctx.audioWorklet && window.Blob) {
        const url = URL.createObjectURL(new Blob([DECLICK], { type: "application/javascript" }));
        ctx.audioWorklet.addModule(url).then(() => {
          const dc = new AudioWorkletNode(ctx, "declick", { outputChannelCount: [2] });
          hp.disconnect(); hp.connect(dc); dc.connect(lp);
          fx.dc = dc; applySound();
        }).catch(() => {});
      }
    } catch (e) { fx.ready = false; }
  }
  // Clean: the full cleanup chain. Original: straight from the record to the volume.
  function routeSound() {
    if (!fx.ready) return;
    try { fx.src.disconnect(); } catch (e) {}
    fx.src.connect(state.clean === false ? fx.master : fx.hp);
  }
  function toggleClean() {
    state.clean = state.clean === false;
    store.set("clean", state.clean);
    routeSound(); applySound(); render();
  }
  function soundFor(st) { return Object.assign({}, SOUND, (st && st.sound) || {}); }
  function applySound() {
    if (!fx.ready) return;
    const snd = soundFor(state.station);
    fx.lp.frequency.setTargetAtTime(snd.tone || 20000, ctx.currentTime, 0.1);
    const clean = state.clean !== false;
    // one detector handles pops and crackle; the stronger of the two settings sets its sensitivity
    const amount = Math.max(snd.decrackle || 0, snd.declick || 0);
    if (fx.dc) fx.dc.port.postMessage({ kc: clean && amount ? 7 - 3.5 * Math.min(1, amount) : 999, wide: 0 });
    if (!snd.level) fx.agc.gain.setTargetAtTime(1, ctx.currentTime, 0.2);
  }
  // automatic level: listens to the show and slowly turns quiet ones up and loud ones down
  setInterval(() => {
    if (!fx.ready || state.phase !== "playing" || state.clean === false || !soundFor(state.station).level) return;
    fx.an.getFloatTimeDomainData(fx.buf);
    let sum = 0; for (let i = 0; i < fx.buf.length; i++) sum += fx.buf[i] * fx.buf[i];
    const db = 10 * Math.log10(sum / fx.buf.length + 1e-12);
    if (db < -55) return;                                   // silence: leave the level alone
    const a = fx.level == null ? 1 : (fx.fresh > 0 ? 0.25 : 0.04);
    fx.level = fx.level == null ? db : fx.level + (db - fx.level) * a;
    if (fx.fresh > 0) fx.fresh--;
    const target = -21, g = Math.max(-10, Math.min(16, target - fx.level));
    fx.agc.gain.setTargetAtTime(Math.pow(10, g / 20), ctx.currentTime, fx.fresh > 0 ? 0.3 : 1.5);
  }, 200);
  function newTrackLevel() { if (fx.ready) { fx.level = null; fx.fresh = 15; } }
  if (SKIN.sounds && SKIN.sounds.static) {
    staticEl = new Audio(SKIN.sounds.static); staticEl.loop = true; staticEl.volume = 0;
    staticEl.addEventListener("canplay", () => { staticOk = true; }, { once: true });
    staticEl.addEventListener("error", () => { staticOk = false; }, { once: true });
  }
  function setStatic(level) {
    const v = Math.max(0, Math.min(1, level * state.vol));
    if (staticOk && staticEl) {
      staticEl.volume = v;
      if (v > 0 && staticEl.paused) staticEl.play().catch(() => {});
      if (v === 0 && !staticEl.paused) staticEl.pause();
    } else if (noiseGain) {
      noiseGain.gain.setTargetAtTime(v * 0.35, ctx.currentTime, 0.05);
    }
  }
  function applyVolume() {
    if (fx.ready) fx.master.gain.setTargetAtTime(state.vol, ctx.currentTime, 0.03); else audio.volume = state.vol;
    const lvl = { warming: 0.5, between: 0.8, lost: 0.25, gap: 0.08 }[state.phase] || 0;
    setStatic(state.on ? lvl : 0);
  }

  let lostTimer = 0;
  function play() {
    clearTimeout(lostTimer);
    const st = state.station;
    if (!state.on || !st) return;
    const now = at(st);
    const src = now.track.src;
    setPhase("warming");
    const seek = () => {
      const fresh = at(st);
      if (fresh.track.src !== src) return play();
      if (audio.duration && fresh.offset >= audio.duration - 1) return waitForNext(fresh);
      try { audio.currentTime = fresh.offset; } catch (e) {}
      audio.play().catch(() => {});
    };
    if (audio.dataset.src === src && audio.readyState >= 1) seek();
    else {
      audio.dataset.src = src;
      newTrackLevel();
      audio.src = src;
      audio.addEventListener("loadedmetadata", seek, { once: true });
      audio.load();
    }
    mediaSession(st, now.track);
    applySound();
  }
  function waitForNext(now) {
    audio.pause();
    setPhase("gap");
    lostTimer = setTimeout(play, Math.max(500, now.left * 1000 + 300));
  }
  audio.addEventListener("playing", () => { audio.dataset.retried = ""; if (state.on && state.station) setPhase("playing"); });
  audio.addEventListener("waiting", () => { if (state.phase === "playing") setPhase("warming"); });
  audio.addEventListener("ended", () => play());
  audio.addEventListener("error", () => {
    if (!state.on || !state.station || !audio.dataset.src) return;
    if (!audio.dataset.retried) { audio.dataset.retried = "1"; audio.dataset.src = ""; setTimeout(play, 800); return; }   // one retry first
    const now = at(state.station);
    state.resumeAt = Date.now() + now.left * 1000;
    setPhase("lost");
    clearTimeout(lostTimer);
    lostTimer = setTimeout(() => { audio.dataset.src = ""; play(); }, now.left * 1000 + 500);
  });
  // keep everyone on the same second
  setInterval(() => {
    if (!state.on || !state.station || state.phase !== "playing") return;
    const now = at(state.station);
    if (now.track.src !== audio.dataset.src) return play();
    if (Math.abs(audio.currentTime - now.offset) > 6) { try { audio.currentTime = now.offset; } catch (e) {} }
  }, 10000);

  function setPhase(p) { state.phase = p; applyVolume(); render(); presenceUpdate(); }

  function power(on) {
    initAudio();
    if (ctx && ctx.state === "suspended") ctx.resume();
    state.on = on == null ? !state.on : on;
    if (!state.on) { audio.pause(); clearTimeout(lostTimer); state.phase = "off"; applyVolume(); render(); presenceUpdate(); return; }
    retune(true);
  }
  function retune(force) {
    const st = stationAtDial(state.dial);
    store.set("dial", state.dial);
    if (st === state.station && !force) { render(); return; }
    state.station = st;
    if (st && location.hash !== "#" + st.id) { try { history.replaceState(null, "", "#" + st.id); } catch (e) {} }
    if (!state.on) { render(); return; }
    if (!st) { audio.pause(); clearTimeout(lostTimer); setPhase("between"); return; }
    play();
  }
  function stepStation(dir) {
    const sorted = STATIONS.slice().sort((a, b) => a.dial - b.dial);
    let i = sorted.findIndex(s => s === state.station);
    if (i < 0) { i = dir > 0 ? sorted.findIndex(s => s.dial > state.dial) : sorted.map(s => s.dial < state.dial).lastIndexOf(true); if (i < 0) i = dir > 0 ? 0 : sorted.length - 1; }
    else i = (i + dir + sorted.length) % sorted.length;
    state.dial = sorted[i].dial;
    if (!state.on) power(true); else retune();
  }
  function tuneTo(st) { if (!st) return; state.dial = st.dial; if (!state.on) power(true); else retune(); }
  window.addEventListener("hashchange", () => { const st = STATIONS.find(s => "#" + s.id === location.hash); if (st && st !== state.station) tuneTo(st); });
  function mediaSession(st, tr) {
    if (!("mediaSession" in navigator)) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({ title: tr.title, artist: tr.series, album: st.name });
      navigator.mediaSession.setActionHandler("nexttrack", () => stepStation(1));
      navigator.mediaSession.setActionHandler("previoustrack", () => stepStation(-1));
    } catch (e) {}
  }

  /* ---------- fonts ---------- */
  (SKIN.fonts || []).forEach(f => {
    try { new FontFace(f.family, `url("${f.src}")`).load().then(ff => { document.fonts.add(ff); fitAllText(); }).catch(() => {}); } catch (e) {}
  });

  /* ---------- building the stage ---------- */
  const els = new Map();
  function templateLabel(L, path) {
    const t = document.createElement("div");
    t.className = "tpl";
    t.innerHTML = `<b></b><span></span><i></i>`;
    t.querySelector("b").textContent = L.id;
    t.querySelector("span").textContent = path || "";
    t.querySelector("i").textContent = `${Math.round(L.w)} × ${Math.round(L.h)}`;
    return t;
  }
  function makeImg(src, onState) {
    const img = new Image();
    img.draggable = false;
    img.alt = "";
    img.addEventListener("load", () => onState(true));
    img.addEventListener("error", () => onState(false));
    img.src = src;
    return img;
  }
  function build() {
    stage.innerHTML = "";
    els.clear();
    stage.style.width = W + "px"; stage.style.height = H + "px";
    stage.style.background = SK.stage.color || "#000";
    SK.layers.forEach(L => {
      const el = document.createElement("div");
      el.className = "layer t-" + (L.type || "image");
      el.dataset.id = L.id;
      if (L.w < 120) el.classList.add("tiny");
      if (L.when && L.when !== "on") el.classList.add("cond");
      if (L.when === "on") el.classList.add("when-on");
      if (L.blend) el.style.mixBlendMode = L.blend;
      if (L.opacity != null) el.style.opacity = L.opacity;
      const rec = { L, el, img: null, ok: false, frames: null, cards: null };
      const type = L.type || "image";
      if (type === "text") {
        const t = el.appendChild(document.createElement(L.href ? "a" : "div"));
        t.className = "txt";
        if (L.href) {
          el.classList.add("hot");
          t.target = "_blank"; t.rel = "noopener";
          t.addEventListener("click", e => { if (state.editing) e.preventDefault(); });
        }
      } else if (type === "guide") {
        const g = document.createElement("div"); g.className = "guide";
        el.appendChild(g); el.classList.add("hot");
        rec.guide = { el: g, key: "" };
        g.addEventListener("click", e => {
          if (state.editing) return;
          const row = e.target.closest(".g-row"); if (!row) return;
          tuneTo(STATIONS.find(s => s.id === row.dataset.id));
        });
      } else if (type === "tv") {
        el.innerHTML = '<video muted playsinline preload="auto" disablepictureinpicture></video><div class="tv-standby"></div>';
        const v = el.querySelector("video");
        v.muted = true; v.defaultMuted = true;
        rec.tv = { v, standby: el.querySelector(".tv-standby"), src: "", until: 0 };
        v.addEventListener("ended", () => { rec.tv.src = ""; renderTV(rec, true); });
        v.addEventListener("playing", () => { rec.tv.standby.hidden = true; });
        v.addEventListener("error", () => {
          const now = tvAt();
          rec.tv.standby.hidden = false; rec.tv.standby.textContent = WORDS.tvStandby;
          rec.tv.until = Date.now() + (now ? now.left * 1000 + 500 : 30000);
        });
      } else if (type === "ad") {
        el.classList.add("hot");
        el.innerHTML = '<div class="ad-img"><img alt=""></div><div class="ad-cap"><span class="ad-title"></span> <a class="ad-via" target="_blank" rel="noopener">via archive.org</a></div>';
        const img = el.querySelector("img");
        img.addEventListener("load", () => { img.style.opacity = 1; });
        el.querySelector(".ad-via").addEventListener("click", e => { if (state.editing) e.preventDefault(); });
        rec.ad = { img, title: el.querySelector(".ad-title"), via: el.querySelector(".ad-via"), cur: -1 };
        el.querySelector(".ad-img").addEventListener("click", () => { if (!state.editing && rec.ad.cur >= 0) openAd((window.ADS || [])[rec.ad.cur]); });
      } else if (type === "ticker") {
        const run = document.createElement("div"); run.className = "tick";
        const span = document.createElement("span"); run.appendChild(span); el.appendChild(run);
        rec.tick = { span, run, text: null, pending: null };
        span.addEventListener("animationiteration", () => { if (rec.tick.pending != null) { setTick(rec, rec.tick.pending); } });
      } else if (type === "card") {
        rec.cards = {};
        STATIONS.forEach(s => {
          const holder = document.createElement("div"); holder.className = "card"; holder.dataset.station = s.id;
          const img = makeImg(s.card || "", ok => { holder.classList.toggle("missing", !ok); });
          holder.appendChild(img);
          holder.appendChild(templateLabel({ id: s.name + " card", w: L.w, h: L.h }, s.card));
          el.appendChild(holder); rec.cards[s.id] = holder;
        });
      } else if (L.frames && L.frames.length) {
        rec.frames = L.frames.map((src, i) => { const img = makeImg(src, ok => { if (i === 0) { rec.ok = ok; el.classList.toggle("missing", !ok); } }); img.hidden = i > 0; el.appendChild(img); return img; });
        el.appendChild(templateLabel(L, L.frames[0]));
      } else if (L.src) {
        rec.img = makeImg(L.src, ok => { rec.ok = ok; el.classList.toggle("missing", !ok); });
        el.appendChild(rec.img);
        el.appendChild(templateLabel(L, L.src));
        el.classList.add("missing");
      } else {
        el.appendChild(templateLabel(L, ""));
      }
      const grip = document.createElement("div"); grip.className = "grip"; el.appendChild(grip);
      stage.appendChild(el);
      els.set(L.id, rec);
      wire(rec);
    });
    place();
    render();
  }
  function place() {
    els.forEach(({ L, el }) => {
      el.style.left = L.x + "px"; el.style.top = L.y + "px";
      el.style.width = L.w + "px"; el.style.height = L.h + "px";
      el.style.zIndex = SK.layers.indexOf(L) + 1;
      if (L.type === "guide" || L.type === "ad" || L.type === "tv") {
        const v = (k, val) => { if (val != null) el.style.setProperty(k, val); };
        el.style.fontFamily = `"${L.font || ""}", "Courier New", Courier, monospace`;
        v("--g-size", (L.size || 18) + "px"); v("--g-ink", L.color || "#e9dcc3"); v("--g-dim", L.dim || "#a99a83");
        v("--g-line", L.line || "rgba(233,220,195,.16)"); v("--g-hi", L.highlight || "#f0b44c");
        v("--g-block", L.block || "rgba(233,220,195,.06)"); v("--g-sel", L.selected || "rgba(240,180,76,.14)");
        v("--g-row", (L.rowHeight || 54) + "px"); v("--g-lab", (L.labelWidth || 300) + "px");
      }
      if (L.type === "ticker") {
        const t = el.firstChild;
        t.style.fontFamily = `"${L.font || ""}", "Courier New", Courier, monospace`;
        t.style.color = L.color || "#e9dcc3";
        t.style.fontSize = (L.size || 22) + "px";
        t.style.lineHeight = L.h + "px";
      }
      if (L.type === "text") {
        const t = el.firstChild;
        t.style.fontFamily = `"${L.font || ""}", "Courier New", Courier, monospace`;
        t.style.color = L.color || "#e9dcc3";
        t.style.textAlign = L.align || "left";
        t.style.lineHeight = L.lineHeight || 1.2;
        t.style.textTransform = L.uppercase ? "uppercase" : "none";
        t.style.letterSpacing = L.spacing ? L.spacing + "px" : "";
      }
    });
    fitAllText();
  }
  function fit() {
    const vw = window.innerWidth, vh = window.innerHeight;
    const byWidth = SK.stage.fit === "width";
    const k = byWidth ? vw / W : Math.min(vw / W, vh / H);
    stage.style.transform = `translate(${byWidth ? 0 : (vw - W * k) / 2}px, ${byWidth ? 0 : Math.max(0, (vh - H * k) / 2)}px) scale(${k})`;
    document.documentElement.classList.toggle("scrolls", byWidth);
    const frame = stage.parentElement;
    frame.style.height = byWidth ? Math.ceil(H * k) + "px" : "";
    state.scale = k;
  }
  window.addEventListener("resize", () => {
    const want = isPortrait() ? SKIN.portrait : SKIN;
    if (want !== SK && !state.editing) { SK = want; W = SK.stage.width; H = SK.stage.height; build(); }
    fit();
  });

  /* ---------- per-second render ---------- */
  function visible(L) {
    if (state.editing && state.showAll) return true;
    if (L.station && (!state.station || state.station.id !== L.station)) return false;
    const w = L.when;
    if (!w) return true;
    const ph = state.phase;
    const ok = { on: state.on, off: !state.on, playing: ph === "playing", warming: ph === "warming",
      between: ph === "between", lost: ph === "lost", tuned: !!state.station && state.on };
    return String(w).split(/\s*,\s*/).some(x => ok[x]);
  }
  function textFor(L) {
    const st = state.station, on = state.on;
    const now = st ? at(st) : null;
    switch (L.bind) {
      case "clock": return hhmm(Date.now());
      case "station.name": return st ? st.name : "";
      case "station.freq": return st ? st.freq || "" : "";
      case "station.blurb": return st ? st.blurb || "" : "";
      case "clean": return state.clean === false ? WORDS.cleanOff : WORDS.cleanOn;
      case "tv.title": { const n = tvAt(); return n ? n.c.title + (n.c.date ? ", " + n.c.date : "") : ""; }
      case "station.listeners": {
        if (!st || !presence.live) return "";
        const n = presence.counts[st.id] || 0;
        return n <= 1 ? (WORDS.listeningAlone || "") : WORDS.listeningHere.replace("{n}", n);
      }
      case "now.series": return now ? now.track.series || "" : "";
      case "now.title": return now ? now.track.title || "" : "";
      case "now.date": return now ? now.track.date || "" : "";
      case "now.remaining": return now ? mmss(now.left) + " left" : "";
      case "guide": {
        if (!st) return "";
        return upcoming(st, L.count || 5).map(u => `${hhmm(u.start)}  ${u.track.series ? u.track.series + " — " : ""}${u.track.title}`).join("\n");
      }
      case "status": {
        const p = on ? state.phase : "off";
        return (WORDS[p] || "").replace("{time}", hhmm(state.resumeAt));
      }
      default: return L.text || "";
    }
  }
  /* ---------- channel guide ---------- */
  function renderGuide(rec) {
    const L = rec.L, g = rec.guide, now = Date.now();
    const mode = L.mode || "timeline";
    const step = 30 * 60e3, span = (L.hours || 2) * 3600e3;
    const t0 = Math.floor(now / step) * step, t1 = t0 + span;
    const key = [Math.floor(now / 10000), state.station && state.station.id, state.on, JSON.stringify(presence.counts), presence.live, mode].join("|");
    if (g.key === key) return;
    g.key = key;
    const pct = t => ((t - t0) / span * 100).toFixed(3) + "%";
    let h = "";
    if (mode === "timeline") {
      h += `<div class="g-head"><span class="g-lab">${esc(L.heading || "")}</span><span class="g-line">`;
      for (let t = t0; t < t1; t += step) h += `<span class="g-tick" style="left:${pct(t)}">${hhmm(t)}</span>`;
      h += `<span class="g-nowmark" style="left:${pct(now)}"></span></span></div>`;
    }
    let group = null;
    STATIONS.forEach(st => {
      if (st.group && st.group !== group) { group = st.group; h += `<div class="g-group">${esc(group)}</div>`; }
      const sel = state.station === st;
      const n = presence.live ? (presence.counts[st.id] || 0) : 0;
      const cnt = n ? WORDS.listeningHere.replace("{n}", n) : "";
      const cur = at(st, now), next = st.tracks[(cur.i + 1) % st.tracks.length];
      h += `<button type="button" class="g-row${sel ? " sel" : ""}${sel && state.on ? " on" : ""}${st.music ? " music" : ""}" data-id="${esc(st.id)}" aria-label="Tune to ${esc(st.name)}">`;
      h += `<span class="g-lab"><span class="g-num">${esc(st.num)}</span><span class="g-name">${esc(st.name)}</span><span class="g-count">${esc(cnt)}</span></span>`;
      if (mode === "timeline") {
        h += `<span class="g-line">`;
        if (st.music) {
          h += `<span class="g-block now" style="left:0;width:100%"><b>${esc(cur.track.series)}</b> ${esc(cur.track.title)}<i>then ${esc(next.series)}${st.blurb ? " · " + esc(st.blurb) : ""}</i></span>`;
        } else {
          let start = now - cur.offset * 1000, i = cur.i, guard = 0;
          while (start < t1 && guard++ < 200) {
            const tr = st.tracks[i], end = start + tr.length * 1000;
            const a = Math.max(start, t0), b = Math.min(end, t1);
            if (b > a) h += `<span class="g-block${start <= now && now < end ? " now" : ""}" style="left:${pct(a)};width:${((b - a) / span * 100).toFixed(3)}%"><b>${esc(tr.series)}</b> ${esc(tr.title)}</span>`;
            start = end; i = (i + 1) % st.tracks.length;
          }
        }
        h += `</span>`;
      } else {
        h += `<span class="g-list"><span class="g-now"><b>${esc(cur.track.series)}</b> ${esc(cur.track.title)}</span>` +
             `<span class="g-next">${st.music ? "then" : hhmm(now + cur.left * 1000)} ${esc(next.series)} — ${esc(next.title)}</span></span>`;
      }
      h += `</button>`;
    });
    const top = g.el.scrollTop;
    g.el.innerHTML = h;
    g.el.scrollTop = top;
  }

  /* ---------- the little TV (tv.js): cartoons with the sound off ---------- */
  const TVLIST = window.TV || [];
  const TV_EPOCH = Date.parse("2026-11-01T00:00:00Z");
  let tvTotal = 0;
  const tvCum = TVLIST.map(c => { const s = tvTotal; tvTotal += Number(c.length) || 0; return s; });
  function tvAt(ms = Date.now()) {
    if (!tvTotal) return null;
    let pos = ((ms - TV_EPOCH) / 1000) % tvTotal; if (pos < 0) pos += tvTotal;
    let lo = 0, hi = TVLIST.length - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (tvCum[mid] <= pos) lo = mid; else hi = mid - 1; }
    return { i: lo, c: TVLIST[lo], offset: pos - tvCum[lo], left: TVLIST[lo].length - (pos - tvCum[lo]) };
  }
  function renderTV(rec, force) {
    const tv = rec.tv, now = tvAt();
    if (!now) { rec.el.hidden = true; return; }
    if (tv.until > Date.now()) return;                       // waiting out a broken cartoon
    if (document.hidden && !force) return;
    const v = tv.v;
    if (tv.src !== now.c.src) {
      tv.src = now.c.src; tv.standby.hidden = false; tv.standby.textContent = WORDS.tvTuning;
      v.src = now.c.src;
      v.addEventListener("loadedmetadata", () => {
        const fresh = tvAt();
        if (fresh && fresh.c.src === tv.src) { try { v.currentTime = Math.min(fresh.offset, (v.duration || 1e9) - 1); } catch (e) {} }
        v.play().catch(() => {});
      }, { once: true });
    } else if (!v.paused && Math.abs(v.currentTime - now.offset) > 8 && v.duration && now.offset < v.duration - 1) {
      try { v.currentTime = now.offset; } catch (e) {}
    } else if (v.paused && v.readyState >= 2 && now.offset < (v.duration || 0)) {
      v.play().catch(() => {});
    }
  }
  document.addEventListener("visibilitychange", () => { if (!document.hidden) render(); });

  /* ---------- vintage ads (ads.js) ---------- */
  function openAd(a) {
    if (!a) return;
    let box = document.getElementById("ad-zoom");
    if (!box) {
      box = document.createElement("div"); box.id = "ad-zoom"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Ad");
      box.innerHTML = '<img alt=""><div class="zcap"><span></span><a target="_blank" rel="noopener">via archive.org</a><button type="button">Close</button></div>';
      document.body.appendChild(box);
      const close = () => { box.hidden = true; };
      box.addEventListener("click", e => { if (e.target === box || e.target.tagName === "BUTTON") close(); });
      window.addEventListener("keydown", e => { if (e.key === "Escape" && !box.hidden) close(); });
    }
    box.querySelector("img").src = a.src; box.querySelector("img").alt = a.title;
    box.querySelector("span").textContent = a.title + (a.date ? ", " + a.date : "");
    box.querySelector("a").href = a.item || "https://archive.org";
    box.hidden = false; box.querySelector("button").focus();
  }
  const AD_EPOCH = Date.parse("2026-11-01T00:00:00Z");
  function renderAd(rec) {
    const A = window.ADS || [], ad = rec.ad;
    if (!A.length) { rec.el.hidden = true; return; }
    const every = (rec.L.every || 40) * 1000;
    const k = ((Math.floor((Date.now() - AD_EPOCH) / every) % A.length) + A.length) % A.length;
    if (ad.cur === k) return;
    ad.cur = k;
    const a = A[k];
    ad.img.style.opacity = 0;
    ad.img.src = a.src;
    ad.title.textContent = a.title + (a.date ? ", " + a.date : "");
    ad.via.href = a.item || "https://archive.org";
    new Image().src = A[(k + 1) % A.length].src;   // fetch the next one early
  }

  function tickerText(L) {
    const parts = [], show = L.show || ["listeners", "now"], sep = L.separator || "   ·   ";
    if (show.includes("listeners") && presence.live) {
      const total = presence.counts._total || 0;
      parts.push(total <= 1 ? WORDS.listenersOne : WORDS.listeners.replace("{n}", total));
      STATIONS.forEach(st => { const n = presence.counts[st.id]; if (n) parts.push(WORDS.listenersStation.replace("{station}", st.name).replace("{n}", n)); });
    }
    if (show.includes("now")) STATIONS.forEach(st => {
      const t = at(st).track;
      parts.push(WORDS.nowOn.replace("{station}", st.name).replace("{series}", t.series || "").replace("{title}", t.title || ""));
    });
    return parts.join(sep);
  }
  function setTick(rec, s) {
    const t = rec.tick; t.text = s; t.pending = null;
    t.span.textContent = s;
    const speed = rec.L.speed || 70;              // stage pixels per second
    const dist = rec.L.w + t.span.offsetWidth;
    t.span.style.setProperty("--from", rec.L.w + "px");
    t.span.style.setProperty("--to", -t.span.offsetWidth + "px");
    t.span.style.animationDuration = Math.max(8, dist / speed) + "s";
  }
  function fitText(rec) {
    const t = rec.el.firstChild, L = rec.L;
    let size = L.size || 20;
    t.style.fontSize = size + "px";
    const min = size * 0.5;
    while ((t.scrollHeight > L.h + 1 || t.scrollWidth > L.w + 1) && size > min) { size -= 1; t.style.fontSize = size + "px"; }
  }
  function fitAllText() { els.forEach(rec => { if (rec.L.type === "text") fitText(rec); }); }
  let frameTick = 0;
  function render() {
    const tuning = SK.layers.find(l => l.type === "knob" && l.bind === "tuning");
    els.forEach(rec => {
      const { L, el } = rec;
      el.hidden = !visible(L);
      if (el.hidden) return;
      const type = L.type || "image";
      if (type === "text") {
        const s = textFor(L);
        if (el.firstChild.textContent !== s) { el.firstChild.textContent = s; fitText(rec); }
        if (L.href) {
          const st = state.station;
          const href = L.href === "now.item" ? (st ? at(st).track.item || "" : "")
                     : L.href === "tv.item" ? ((tvAt() || { c: {} }).c.item || "") : L.href;
          if (el.firstChild.getAttribute("href") !== href) el.firstChild.setAttribute("href", href);
        }
      } else if (type === "needle") {
        const tr = L.track || { from: L.x, to: L.x };
        if (L.mode === "rotate") {
          const [a, b] = L.turn || [-60, 60];
          el.style.left = L.x + "px";
          el.style.transformOrigin = L.pivot ? `${L.pivot[0]}px ${L.pivot[1]}px` : "50% 100%";
          el.style.transform = `rotate(${a + (b - a) * state.dial}deg)`;
        } else {
          el.style.left = (tr.from + (tr.to - tr.from) * state.dial - L.w / 2) + "px";
        }
      } else if (type === "knob") {
        const [a, b] = L.turn || [-140, 140];
        const v = L.bind === "volume" ? state.vol : state.dial;
        (rec.img || el).style.transform = `rotate(${a + (b - a) * v}deg)`;
      } else if (type === "guide") {
        renderGuide(rec);
      } else if (type === "ad") {
        renderAd(rec);
      } else if (type === "tv") {
        renderTV(rec);
      } else if (type === "ticker") {
        const s = tickerText(L);
        if (rec.tick.text == null) setTick(rec, s);
        else if (s !== rec.tick.text) rec.tick.pending = s;
      } else if (type === "card") {
        Object.entries(rec.cards).forEach(([id, h]) => { h.hidden = !(state.station && state.station.id === id); });
      }
      if (rec.frames) {
        const fps = L.fps || 8, n = rec.frames.length;
        const k = Math.floor(frameTick * fps / 10) % n;
        rec.frames.forEach((f, i) => { f.hidden = i !== k; });
      }
    });
    document.body.dataset.phase = state.on ? state.phase : "off";
  }
  setInterval(() => { frameTick++; if (SK.layers.some(l => l.frames)) render(); }, 100);
  setInterval(render, 1000);

  /* ---------- controls ---------- */
  function wire(rec) {
    const { L, el } = rec;
    const type = L.type || "image";
    if (type === "button" || L.action) {
      el.classList.add("hot");
      el.addEventListener("click", e => {
        if (state.editing) return;
        const a = L.action || "";
        if (a === "power") power();
        else if (a === "clean") toggleClean();
        else if (a === "next") stepStation(1);
        else if (a === "prev") stepStation(-1);
        else if (a === "volup") setVol(state.vol + 0.1);
        else if (a === "voldown") setVol(state.vol - 0.1);
        else if (a.startsWith("tune:")) tuneTo(STATIONS.find(x => x.id === a.slice(5)));
        else if (a === "dial") {
          const r = el.getBoundingClientRect();
          const needle = SK.layers.find(l => l.type === "needle");
          const tr = (needle && needle.track) || { from: L.x, to: L.x + L.w };
          const sx = L.x + (e.clientX - r.left) / state.scale;
          let d = (sx - tr.from) / (tr.to - tr.from);
          d = Math.max(0, Math.min(1, d));
          const near = STATIONS.reduce((b, s) => Math.abs(s.dial - d) < Math.abs(b.dial - d) ? s : b);
          if (Math.abs(near.dial - d) < CAPTURE * 2) d = near.dial;
          state.dial = d; state.on ? retune() : power(true);
        }
      });
    }
    if (type === "knob") {
      el.classList.add("hot");
      let sx, sy, moved, start;
      el.addEventListener("pointerdown", e => {
        if (state.editing) return;
        e.preventDefault(); el.setPointerCapture(e.pointerId);
        sx = e.clientX; sy = e.clientY; moved = false; start = L.bind === "volume" ? state.vol : state.dial;
      });
      el.addEventListener("pointermove", e => {
        if (state.editing || sx == null) return;
        const d = ((e.clientX - sx) - (e.clientY - sy)) / state.scale;
        if (Math.abs(d) > 4) moved = true;
        if (!moved) return;
        if (L.bind === "volume") setVol(start + d / 300);
        else { state.dial = Math.max(0, Math.min(1, start + d / 900)); if (state.on) retune(); else render(); }
      });
      el.addEventListener("pointerup", () => {
        if (state.editing) return;
        if (!moved && L.bind === "tuning") stepStation(1);
        if (!moved && L.bind === "volume" && !state.on) power(true);
        sx = null;
      });
      el.addEventListener("wheel", e => {
        if (state.editing) return;
        e.preventDefault();
        if (L.bind === "volume") setVol(state.vol - Math.sign(e.deltaY) * 0.05);
        else { state.dial = Math.max(0, Math.min(1, state.dial - Math.sign(e.deltaY) * 0.01)); state.on ? retune() : render(); }
      }, { passive: false });
    }
  }
  function setVol(v) { state.vol = Math.max(0, Math.min(1, v)); store.set("vol", state.vol); applyVolume(); render(); }

  window.addEventListener("keydown", e => {
    if (e.target.closest && e.target.closest("input, textarea, select")) return;
    const k = e.key;
    if (k === "e" || k === "E") { toggleEdit(); return; }
    if (state.editing) { editKeys(e); return; }
    if (k === " ") { e.preventDefault(); power(); }
    else if (k === "c" || k === "C") toggleClean();
    else if (k === "ArrowDown") { e.preventDefault(); stepStation(1); }
    else if (k === "ArrowUp") { e.preventDefault(); stepStation(-1); }
    else if (k === "ArrowRight") setVol(state.vol + 0.05);
    else if (k === "ArrowLeft") setVol(state.vol - 0.05);
  });

  /* ---------- layout mode (press E) ---------- */
  const panel = $("#panel");
  function toggleEdit(force) {
    state.editing = force == null ? !state.editing : force;
    document.body.classList.toggle("editing", state.editing);
    panel.hidden = !state.editing;
    if (state.editing) { if (!state.selected) select(SK.layers[1] ? SK.layers[1].id : SK.layers[0].id); panelFill(); }
    render();
  }
  function select(id) {
    state.selected = id;
    els.forEach((r, k) => r.el.classList.toggle("sel", k === id));
    panelFill();
  }
  const sel = () => state.selected && els.get(state.selected);
  function panelFill() {
    const r = sel(); if (!r) return;
    const L = r.L;
    $("#p-layer").innerHTML = SK.layers.map(l => `<option value="${l.id}">${l.id}</option>`).join("");
    $("#p-layer").value = L.id;
    ["id", "src", "x", "y", "w", "h", "when"].forEach(f => { $("#p-" + f).value = L[f] == null ? "" : L[f]; });
    $("#p-src").disabled = !!(L.type === "text" || L.type === "card");
    const extra = $("#p-extra");
    extra.innerHTML = "";
    const add = (label, get, set) => {
      const id = "p-x-" + label.replace(/\W/g, "");
      const wrap = document.createElement("label"); wrap.htmlFor = id; wrap.textContent = label;
      const inp = document.createElement("input"); inp.id = id; inp.value = get();
      inp.addEventListener("change", () => { set(inp.value); place(); render(); });
      wrap.appendChild(inp); extra.appendChild(wrap);
    };
    if (L.type === "text") {
      add("size", () => L.size || 20, v => { L.size = +v || 20; });
      add("font", () => L.font || "", v => { L.font = v; });
      add("color", () => L.color || "", v => { L.color = v; });
      add("align", () => L.align || "left", v => { L.align = v; });
    }
    if (L.type === "needle") {
      L.track = L.track || { from: L.x, to: L.x + 200 };
      add("track from", () => L.track.from, v => { L.track.from = +v; });
      add("track to", () => L.track.to, v => { L.track.to = +v; });
    }
    if (L.type === "knob") add("turn (min,max)", () => (L.turn || [-140, 140]).join(","), v => { L.turn = v.split(",").map(Number); });
  }
  ["x", "y", "w", "h"].forEach(f => $("#p-" + f).addEventListener("input", e => { const r = sel(); if (!r) return; r.L[f] = Math.round(+e.target.value || 0); place(); render(); }));
  $("#p-when").addEventListener("change", e => { const r = sel(); if (!r) return; if (e.target.value) r.L.when = e.target.value; else delete r.L.when; render(); });
  $("#p-src").addEventListener("change", e => { const r = sel(); if (!r) return; r.L.src = e.target.value; rebuildKeep(); });
  $("#p-id").addEventListener("change", e => { const r = sel(); if (!r) return; const v = e.target.value.trim().replace(/\s+/g, "-"); if (!v || els.has(v)) return; r.L.id = v; state.selected = v; rebuildKeep(); });
  $("#p-layer").addEventListener("change", e => select(e.target.value));
  $("#p-showall").addEventListener("change", e => { state.showAll = e.target.checked; render(); });
  $("#p-up").addEventListener("click", () => moveLayer(1));
  $("#p-down").addEventListener("click", () => moveLayer(-1));
  $("#p-add").addEventListener("click", () => {
    let n = 1; while (els.has("new-" + n)) n++;
    SK.layers.push({ id: "new-" + n, src: "art/new-" + n + ".png", x: Math.round(W / 2 - 100), y: Math.round(H / 2 - 100), w: 200, h: 200 });
    state.selected = "new-" + n; rebuildKeep();
  });
  $("#p-remove").addEventListener("click", () => {
    const r = sel(); if (!r) return;
    const btn = $("#p-remove");
    if (btn.dataset.armed !== "1") { btn.dataset.armed = "1"; btn.textContent = "Click again to remove"; setTimeout(() => { btn.dataset.armed = ""; btn.textContent = "Remove layer"; }, 2500); return; }
    btn.dataset.armed = ""; btn.textContent = "Remove layer";
    SK.layers.splice(SK.layers.indexOf(r.L), 1); state.selected = SK.layers[0] && SK.layers[0].id; rebuildKeep();
  });
  $("#p-done").addEventListener("click", () => toggleEdit(false));
  $("#p-copy").addEventListener("click", () => {
    const head = "/* SKIN — everything you see on the radio. See README.md for every option.\n   Press E on the radio to move pieces, then Copy skin.js and paste over this file. */\n";
    const text = head + "window.SKIN = " + JSON.stringify(SKIN, null, 2) + ";\n";
    const out = $("#p-out"); out.hidden = false; out.value = text; out.select();
    const note = $("#p-note");
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => { note.textContent = "Copied. Paste it over skin.js and save."; }, () => { note.textContent = "Select all in the box below and copy it."; });
    else note.textContent = "Select all in the box below and copy it.";
  });
  $("#p-check").addEventListener("click", checkLinks);
  function moveLayer(dir) {
    const r = sel(); if (!r) return;
    const i = SK.layers.indexOf(r.L), j = i + dir;
    if (j < 0 || j >= SK.layers.length) return;
    SK.layers.splice(i, 1); SK.layers.splice(j, 0, r.L); place(); render();
    $("#p-note").textContent = `${r.L.id} is now layer ${j + 1} of ${SK.layers.length}.`;
  }
  function rebuildKeep() { const s = state.selected; build(); toggleEdit(true); select(s); }
  function editKeys(e) {
    const r = sel(); if (!r) return;
    const step = e.shiftKey ? 10 : 1, k = e.key;
    const m = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[k];
    if (m) {
      e.preventDefault();
      if (r.L.type === "needle" && r.L.mode !== "rotate" && r.L.track) { r.L.track.from += m[0]; r.L.track.to += m[0]; }
      else r.L.x += m[0];
      r.L.y += m[1]; place(); render(); panelFill();
    }
    if (k === "Escape") toggleEdit(false);
  }
  // drag + resize on the stage
  let drag = null;
  stage.addEventListener("pointerdown", e => {
    if (!state.editing) return;
    const el = e.target.closest(".layer"); if (!el) return;
    e.preventDefault();
    // click-through: pick the top-most visible layer under the pointer that isn't a full-stage plate when possible
    const id = el.dataset.id; select(id);
    const r = els.get(id);
    const tr = r.L.track || {};
    drag = { r, sx: e.clientX, sy: e.clientY, x: r.L.x, y: r.L.y, w: r.L.w, h: r.L.h, from: tr.from, to: tr.to, resize: e.target.classList.contains("grip") };
    stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener("pointermove", e => {
    if (!drag) return;
    const dx = (e.clientX - drag.sx) / state.scale, dy = (e.clientY - drag.sy) / state.scale, L = drag.r.L;
    if (drag.resize) {
      L.w = Math.max(4, Math.round(drag.w + dx));
      L.h = Math.max(4, Math.round(e.shiftKey ? L.w * drag.h / drag.w : drag.h + dy));
    } else if (L.type === "needle" && L.mode !== "rotate" && L.track) {
      L.y = Math.round(drag.y + dy); L.track.from = Math.round(drag.from + dx); L.track.to = Math.round(drag.to + dx);
    } else { L.x = Math.round(drag.x + dx); L.y = Math.round(drag.y + dy); }
    place(); render(); panelFill();
    const lbl = drag.r.el.querySelector(".tpl i"); if (lbl) lbl.textContent = `${L.w} × ${L.h}`;
  });
  stage.addEventListener("pointerup", () => { drag = null; });

  async function checkLinks() {
    const note = $("#p-note"); note.textContent = "Checking every track against the Internet Archive…";
    const byItem = new Map();
    STATIONS.forEach(st => st.tracks.forEach(tr => {
      const m = tr.src.match(/archive\.org\/download\/([^/]+)\/(.+)$/);
      if (!m) return;
      const id = m[1], name = decodeURIComponent(m[2]);
      if (!byItem.has(id)) byItem.set(id, []);
      byItem.get(id).push({ st, tr, name });
    }));
    const dead = [];
    let done = 0;
    await Promise.all([...byItem].map(async ([id, list]) => {
      try {
        const res = await fetch("https://archive.org/metadata/" + encodeURIComponent(id));
        const d = await res.json();
        const names = new Set((d.files || []).map(f => f.name));
        list.forEach(x => { if (!names.has(x.name)) dead.push(x); });
      } catch (e) { list.forEach(x => dead.push(Object.assign({ err: true }, x))); }
      done++; note.textContent = `Checked ${done} of ${byItem.size} archive items…`;
    }));
    const out = $("#p-out"); out.hidden = false;
    if (!dead.length) { note.textContent = `All ${[...byItem.values()].flat().length} tracks are still on the Archive.`; out.hidden = true; return; }
    note.textContent = `${dead.length} track(s) are gone or unreachable. Remove them from stations.js or swap in a replacement.`;
    out.value = dead.map(x => `${x.st.name}: ${x.tr.series || ""} — ${x.tr.title}${x.err ? " (couldn't reach the Archive)" : ""}\n  ${x.tr.src}`).join("\n");
  }

  /* ---------- who's listening (needs config.js) ---------- */
  const presence = { live: false, counts: {}, ch: null, me: Math.random().toString(36).slice(2) };
  function presenceUpdate() {
    if (!presence.ch) return;
    const payload = { station: state.on && state.station ? state.station.id : null };
    if (presence.last === payload.station) return;
    presence.last = payload.station;
    presence.ch.track(payload).catch(() => {});
  }
  function presenceCount() {
    const st = presence.ch.presenceState(), counts = { _total: 0 };
    Object.values(st).forEach(list => {
      const p = list[list.length - 1] || {};
      if (!p.station) return;
      counts._total++; counts[p.station] = (counts[p.station] || 0) + 1;
    });
    const first = !presence.live;
    presence.counts = counts; presence.live = true;
    if (first) els.forEach(r => { if (r.tick) r.tick.text = null; });   // show the count right away
    render();
  }
  function startPresence() {
    const c = CONFIG.listeners || {};
    if (/[?&]fakelisteners\b/.test(location.search)) {
      setTimeout(() => { presence.live = true; presence.counts = { _total: 14, chills: 6, noir: 4, laughs: 3, hotwax: 1 }; els.forEach(r => { if (r.tick) r.tick.text = null; }); render(); }, 300); return;
    }
    if (!c.url || !c.key) return;
    const go = () => {
      try {
        const client = window.supabase.createClient(c.url, c.key);
        presence.ch = client.channel(c.room || "radio", { config: { presence: { key: presence.me } } });
        presence.ch.on("presence", { event: "sync" }, presenceCount)
          .subscribe(status => { if (status === "SUBSCRIBED") { presence.last = undefined; presenceUpdate(); } });
      } catch (e) {}
    };
    if (window.supabase) return go();
    const sc = document.createElement("script");
    sc.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";
    sc.onload = go; document.head.appendChild(sc);
  }

  /* ---------- go ---------- */
  window.RADIO = { state, fx, presence };   // handy for poking at it in the browser console
  build();
  fit();
  startPresence();
  const fromHash = STATIONS.find(s => "#" + s.id === location.hash);
  if (fromHash) state.dial = fromHash.dial;
  state.station = stationAtDial(state.dial);
  if (!state.station) { state.dial = STATIONS[0].dial; state.station = STATIONS[0]; }
  render();
  if (/[?&#]edit\b/.test(location.href)) toggleEdit(true);
})();
