/* The radio engine. You shouldn't need to edit this file:
   the look lives in skin.js and the programming lives in stations.js. */
(function () {
  "use strict";
  // a station with "season": {"from": "11-15", "to": "01-06"} is only on the dial between those dates (month-day, your own calendar)
  function inSeason(st, d = new Date()) {
    if (!st.season) return true;
    const md = (d.getMonth() + 1) * 100 + d.getDate(), num = x => +x.replace("-", "");
    const from = num(st.season.from), to = num(st.season.to);
    return from <= to ? md >= from && md <= to : md >= from || md <= to;
  }
  const SKIN = window.SKIN, STATIONS = window.STATIONS.filter(st => inSeason(st));
  // Two layouts: SKIN (wide screens) and SKIN.portrait (phones held upright), if you've made one.
  const isPortrait = () => !!SKIN.portrait && window.innerHeight > window.innerWidth;
  let SK = isPortrait() ? SKIN.portrait : SKIN;
  let W = SK.stage.width, H = SK.stage.height;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const WORDS = Object.assign({
    off: "Click a station to start listening",
    powerOn: "Start listening",
    powerOff: "Turn the radio off",
    warming: "Warming up…",
    between: "",
    playing: "",
    lost: "Lost the signal. Back at {time}",
    gap: "",
    guideNow: "Now",
    listeners: "{n} people listening",
    listenersOne: "1 person listening",
    listenersStation: "{station} {n}",
    listeningHere: "{n} listening",
    listeningAlone: "",
    nowOn: "{station}: {series} — {title}",
    amb_rain: "Rain on the window (click for a fire)",
    amb_fire: "A fire going (click to turn off)",
    amb_off: "Add rain or a fire",
    tip: "Support The Bee's Knees",
    visits: "Site visits: {n}",
    aired: "Originally aired",
    released: "Originally released",
    tipThanks: "Thank you, {name}, for buying the station a coffee",
    tipMember: "Welcome, {name}, our newest {tier} member",
    tipSaid: ": \u201c{message}\u201d",
    tipSomeone: "a kind listener",
    guideNow: "Now playing",
    guideNext: "Up next",
    sponsorLine: "Brought to you by {name}",
    sponsorTicker: "{station} is brought to you by {name}",
    memberRoll: "Thank you to our members: {names}",
    cardKicker: "This hour is brought to you by",
    cardThanks: "Thank you for buying the station a coffee!",
    cardMemberKicker: "Please welcome our newest member",
    cardMemberThanks: "Thank you for joining the {tier} club!",
    cardLink: "Support the station too",
    sleepOff: "Sleep timer",
    sleepOn: "Off in {min} min",
    recentTitle: "Recently played on {station}",
    recentNone: "Tune in to a station first.",
    cleanOn: "Hiss filter on",
    cleanOff: "Hiss filter off",
    tvTuning: "",
    tvStandby: "Please stand by",
    tvGuide: "Click to watch now",
    tvNowOn: "Now on",
    tvNowAt: "Now at the Drive-In: "
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
  // tell the chat where this person is listening
  window.BK_CHAT_PLACE = () => (state.on && state.station ? "listening to " + state.station.name : "on the radio");
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
    clean: store.get("clean2", true),     // false = Original: no sound cleanup at all
    sleepEnd: 0,                         // when the sleep timer turns the radio off
    // the ambient mixer: rain, a fire and a thunderstorm, each 0 (off) to 1, on any station
    amb: (() => {
      const clamp = v => Math.max(0, Math.min(1, +v || 0)), saved = store.get("amb", null) || {};
      return { rain: clamp(saved.rain), fire: clamp(saved.fire != null ? saved.fire : store.get("fireVol", 0)), storm: clamp(saved.storm) };
    })()
  };
  const AMB = ["rain", "fire", "storm"];
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
  let ctx = null;
  const fx = { ready: false };       // the sound-cleaning chain
  const SOUND = Object.assign({ level: true, declick: 0.5, tone: 9000 }, SKIN.sound || {});
  function initAudio() {
    if (ctx) return;
    // tell the phone this is a music player, not page sound: it keeps playing with the screen off,
    // when you switch apps, and with the ringer switch on silent (Safari 16.4+)
    try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) {}
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      buildChain();
      tuneGain = ctx.createGain(); tuneGain.gain.value = 0; tuneGain.connect(ctx.destination);
      loadSound("tuning"); AMB.forEach(n => { if (state.amb[n] > 0) loadSound(n); });
      // a phone call or another app can interrupt the sound: pick it back up afterwards
      ctx.onstatechange = () => { if (state.on && ctx.state !== "running" && ctx.state !== "closed") ctx.resume().catch(() => {}); };
    } catch (e) { ctx = null; }
  }

  /* Sound cleaning: rumble filter → click remover → hiss remover → tone (softens what's left)
     → automatic level → compressor → limiter → volume. Settings per station in stations.js. */
  const DECLICK = `
  // Clicks, pops and crackle are samples that stick out far more than their neighbours.
  // Each sample is compared with the long-run level and with the last ~30 samples, so
  // busy passages (snare drums, brushes, sibilants) aren't mistaken for crackle.
  // A click is followed until it dies away (up to ~0.3 ms), then the whole stretch is
  // bridged from the clean sound on either side. Single-sample ticks get the median of
  // their neighbours. Output runs 96 samples (2 ms) behind.
  class Declick extends AudioWorkletProcessor {
    constructor() {
      super(); this.kc = 999; this.st = [];
      this.port.onmessage = e => { if (e.data.kc != null) this.kc = e.data.kc; };
    }
    process(inputs, outputs) {
      const inp = inputs[0], out = outputs[0], N = 4096, M = N - 1, D = 96;
      for (let c = 0; c < out.length; c++) {
        const x = inp[c] || inp[0], y = out[c];
        if (!x) { y.fill(0); continue; }
        const s = this.st[c] || (this.st[c] = { buf: new Float32Array(N), flag: new Uint8Array(N), w: 0, hf: 1e-6, hff: 1e-6, on: 0, thr: 0 });
        for (let i = 0; i < y.length; i++) {
          const v = x[i], w = s.w;
          s.buf[w & M] = v;
          s.flag[(w + 8) & M] = 0;
          if (this.kc < 50 && w > 2) {
            const n = w - 1, hv = s.buf[n & M] - 0.5 * (s.buf[(n - 1) & M] + v), ha = Math.abs(hv);
            const thr = this.kc * Math.sqrt(Math.max(s.hf, s.hff));
            if (ha > thr && ha > 0.004) {
              if (!s.on) { s.flag[(n - 1) & M] = 1; s.flag[(n - 2) & M] = 1; s.thr = thr; }
              s.flag[n & M] = 1; s.on = 12;
            } else if (s.on && ha > 0.7 * s.thr) { s.flag[n & M] = 1; s.on--; }
            else {
              if (s.on) { s.flag[n & M] = 1; s.flag[(n + 1) & M] = 1; s.on = 0; }
              s.hf += (Math.min(hv * hv, 0.01) - s.hf) * 0.0015;
            }
            s.hff += (Math.min(hv * hv, 4 * s.hff + 1e-6) - s.hff) * 0.06;
          }
          const r = w - D;
          let o = r >= 0 ? s.buf[r & M] : 0;
          if (r > 60 && s.flag[r & M]) {
            let a = r, b = r;
            while (a > r - 48 && s.flag[(a - 1) & M]) a--;
            while (b < r + 48 && s.flag[(b + 1) & M]) b++;
            if (b - a < 2) {
              const m = [s.buf[(r - 3) & M], s.buf[(r - 2) & M], s.buf[(r - 1) & M], o, s.buf[(r + 1) & M], s.buf[(r + 2) & M], s.buf[(r + 3) & M]];
              m.sort((p, q) => p - q); o = m[3];
            } else {
              const p1 = s.buf[(a - 1) & M], p0 = s.buf[(a - 2) & M], q1 = s.buf[(b + 1) & M], q2 = s.buf[(b + 2) & M];
              const L = b - a + 2, t = (r - a + 1) / L, m0 = q1 - p1, m1 = q1 - p1;
              const t2 = t * t, t3 = t2 * t;
              o = (2 * t3 - 3 * t2 + 1) * p1 + (t3 - 2 * t2 + t) * m0 + (-2 * t3 + 3 * t2) * q1 + (t3 - t2) * m1;
            }
          }
          y[i] = o; s.w = w + 1;
        }
      }
      return true;
    }
  }
  registerProcessor("declick", Declick);
  // Hiss remover: splits the sound into 512 narrow frequency bands about 86 times a second,
  // learns the steady hiss floor in each band from the quietest moments, and turns down
  // only the bands where the hiss is louder than the music. Bass is left alone.
  class Dehiss extends AudioWorkletProcessor {
    constructor() {
      super(); this.amt = 0; this.st = [];
      const N = 1024; this.N = N; this.H = 256;
      this.win = new Float32Array(N); for (let i = 0; i < N; i++) this.win[i] = Math.sqrt(0.5 - 0.5 * Math.cos(2 * Math.PI * i / N));
      this.rev = new Uint32Array(N); for (let i = 0, b = Math.log2(N); i < N; i++) { let r = 0; for (let k = 0; k < b; k++) r |= ((i >> k) & 1) << (b - 1 - k); this.rev[i] = r; }
      this.cs = new Float32Array(N / 2); this.sn = new Float32Array(N / 2); for (let i = 0; i < N / 2; i++) { this.cs[i] = Math.cos(2 * Math.PI * i / N); this.sn[i] = -Math.sin(2 * Math.PI * i / N); }
      this.port.onmessage = e => { if (e.data.amt != null) this.amt = e.data.amt; if (e.data.reset) this.st.forEach(x => { if (x.learned) { x.ref = Float32Array.from(x.Nn); x.fresh = 0; } else x.fresh = 12; x.age = 0; }); };
    }
    fft(re, im, inv) {
      const N = this.N, rev = this.rev;
      for (let i = 0; i < N; i++) { const j = rev[i]; if (j > i) { let t = re[i]; re[i] = re[j]; re[j] = t; t = im[i]; im[i] = im[j]; im[j] = t; } }
      for (let size = 2; size <= N; size <<= 1) {
        const half = size >> 1, step = N / size;
        for (let i = 0; i < N; i += size) for (let j = 0, k = 0; j < half; j++, k += step) {
          const c = this.cs[k], s = inv ? -this.sn[k] : this.sn[k];
          const a = i + j, b = a + half, tr = re[b] * c - im[b] * s, ti = re[b] * s + im[b] * c;
          re[b] = re[a] - tr; im[b] = im[a] - ti; re[a] += tr; im[a] += ti;
        }
      }
    }
    frame(s) {
      const N = this.N, B = N / 2 + 1, re = s.re, im = s.im, w = this.win;
      let en = 0;
      for (let i = 0; i < N; i++) { const v = s.inb[(s.wi + i) % N]; en += v * v; re[i] = v * w[i]; im[i] = 0; }
      s.energy = en;
      this.fft(re, im, false);
      const lo = 8, over = 1 + 8 * this.amt, floor = Math.pow(10, -(6 + 18 * this.amt) / 20);
      for (let k = 0; k < B; k++) {
        const p = re[k] * re[k] + im[k] * im[k];
        s.P[k] = s.fresh === 12 ? p : s.P[k] * 0.7 + p * 0.3;
        // hiss floor: falls quickly to quiet moments, creeps back up slowly. The first record learns it fast;
        // each record after that starts from the last one's floor, so the cleanup is at full strength from the first note
        s.Nn[k] = s.fresh > 0 ? (s.fresh === 12 ? s.P[k] : Math.min(s.Nn[k], s.P[k])) : s.P[k] < s.Nn[k] ? s.Nn[k] * 0.8 + s.P[k] * 0.2 : s.Nn[k] * (s.age < 350 ? (s.learned ? 1.02 : 1.06) : 1.004) + 1e-14;
        if (s.ref && s.age < 700 && s.Nn[k] < s.ref[k] * 0.25) s.Nn[k] = s.ref[k] * 0.25;
        let g = k < lo ? 1 : Math.max(floor, 1 - over * s.Nn[k] / (s.P[k] + 1e-12));
        g = g > s.G[k] ? g : s.G[k] * 0.6 + g * 0.4;     // let go gently, so it doesn't warble
        s.G[k] = g;
      }
      if (s.fresh > 0 && s.energy > 1e-4) s.fresh--;
      if (s.fresh === 0 && s.age < 1e9) s.age++;   // learn from the first dozen moments that actually have sound in them
      if (s.age === 350) s.learned = true;
      for (let k = 0; k < B; k++) {
        const g = k > 0 && k < B - 1 ? 0.25 * s.G[k - 1] + 0.5 * s.G[k] + 0.25 * s.G[k + 1] : s.G[k];
        re[k] *= g; im[k] *= g; if (k > 0 && k < N / 2) { re[N - k] = re[k]; im[N - k] = -im[k]; }
      }
      this.fft(re, im, true);
      for (let i = 0; i < N; i++) s.ola[(s.ro + i) % N] += re[i] * w[i] / N * 0.5;
    }
    process(inputs, outputs) {
      const inp = inputs[0], out = outputs[0], N = this.N, H = this.H;
      for (let c = 0; c < out.length; c++) {
        const x = inp[c] || inp[0], y = out[c];
        if (!x) { y.fill(0); continue; }
        if (this.amt <= 0) { y.set(x); continue; }
        const B = N / 2 + 1;
        const s = this.st[c] || (this.st[c] = { inb: new Float32Array(N), ola: new Float32Array(N), re: new Float32Array(N), im: new Float32Array(N),
          P: new Float32Array(B), Nn: new Float32Array(B).fill(1e-6), G: new Float32Array(B).fill(1), wi: 0, ro: 0, cnt: 0, fresh: 12, energy: 0, age: 0 });
        for (let i = 0; i < y.length; i++) {
          s.inb[s.wi] = x[i]; s.wi = (s.wi + 1) % N;
          y[i] = s.ola[s.ro]; s.ola[s.ro] = 0; s.ro = (s.ro + 1) % N;
          if (++s.cnt === H) { s.cnt = 0; this.frame(s); }
        }
      }
      return true;
    }
  }
  registerProcessor("dehiss", Dehiss);`;
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
      const fade = ctx.createGain();                       // song fade in / fade out
      hp.connect(lp); lp.connect(an); an.connect(agc); agc.connect(comp); comp.connect(lim); lim.connect(fade); fade.connect(master); master.connect(ctx.destination);
      const probe = ctx.createAnalyser(); probe.fftSize = 2048; const sink = ctx.createGain(); sink.gain.value = 0;
      src.connect(probe); probe.connect(sink); sink.connect(ctx.destination);
      Object.assign(fx, { ready: true, src, hp, lp, an, agc, comp, lim, fade, master, probe, pbuf: new Float32Array(2048), level: null, buf: new Float32Array(an.fftSize) });
      buildRoom();
      routeSound();
      audio.volume = 1;
      if (ctx.audioWorklet && window.Blob) {
        const url = URL.createObjectURL(new Blob([DECLICK], { type: "application/javascript" }));
        ctx.audioWorklet.addModule(url).then(() => {
          const dc = new AudioWorkletNode(ctx, "declick", { outputChannelCount: [2] });
          let dh = null;
          try { dh = new AudioWorkletNode(ctx, "dehiss", { outputChannelCount: [2] }); } catch (e) {}
          hp.disconnect(); hp.connect(dc);
          if (dh) { dc.connect(dh); dh.connect(lp); } else dc.connect(lp);
          fx.dc = dc; fx.dh = dh; applySound();
        }).catch(() => {});
      }
    } catch (e) { fx.ready = false; }
  }
  // Clean: the full cleanup chain. Original: straight from the record to the volume.
  function routeSound() {
    if (!fx.ready) return;
    try { fx.src.disconnect(); } catch (e) {}
    fx.src.connect(state.clean === false ? fx.fade : fx.hp);
    if (fx.probe) fx.src.connect(fx.probe);
    routeRoom();
  }
  function toggleClean() {
    state.clean = state.clean === false;
    store.set("clean2", state.clean);
    routeSound(); applySound(); render();
  }
  /* "From another room": muffled, echoey, slightly warbly, with rain or a fire underneath */
  function impulse(seconds, decay) {
    const n = Math.floor(ctx.sampleRate * seconds), b = ctx.createBuffer(2, n, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay); }
    return b;
  }
  function buildRoom() {
    try {
      const inp = ctx.createGain(), muffle = ctx.createBiquadFilter(), muffle2 = ctx.createBiquadFilter();
      muffle.type = "lowpass"; muffle.frequency.value = 1100; muffle.Q.value = 0.4;
      muffle2.type = "lowpass"; muffle2.frequency.value = 2400; muffle2.Q.value = 0.3;
      const dry = ctx.createGain(), wet = ctx.createGain(), verb = ctx.createConvolver(), out = ctx.createGain();
      verb.buffer = impulse(2.8, 2.6); dry.gain.value = 0.62; wet.gain.value = 0.55;
      const wow = ctx.createDelay(0.05), lfo = ctx.createOscillator(), depth = ctx.createGain();
      wow.delayTime.value = 0.012; lfo.frequency.value = 0.35; depth.gain.value = 0.0016; lfo.connect(depth); depth.connect(wow.delayTime); lfo.start();
      inp.connect(muffle); muffle.connect(muffle2); muffle2.connect(dry); muffle2.connect(verb); verb.connect(wet);
      dry.connect(wow); wet.connect(wow); wow.connect(out); out.gain.value = 0.9;
      const amb = ctx.createGain();
      // the ambience gets its own limiter so the loudest crackles and thunderclaps can't distort
      const ambLim = ctx.createDynamicsCompressor();
      ambLim.threshold.value = -6; ambLim.knee.value = 0; ambLim.ratio.value = 20; ambLim.attack.value = 0.002; ambLim.release.value = 0.1;
      amb.connect(ambLim); ambLim.connect(fx.master);
      amb.gain.value = 1;
      const g = {}; AMB.forEach(n => { g[n] = ctx.createGain(); g[n].gain.value = 0; g[n].connect(amb); });
      fx.room = { inp, out, muffle, wet, dry, amb, g, src: {}, on: false };
    } catch (e) { fx.room = null; }
  }
  function roomFor(st) { return st && st.room ? Object.assign({ muffle: 1100, echo: 0.55, ambience: 0.35 }, st.room) : null; }
  function routeRoom() {
    if (!fx.ready || !fx.room) return;
    const R = fx.room, want = roomFor(state.on ? state.station : null);
    const tail = state.clean === false ? fx.src : fx.lim;
    try { fx.lim.disconnect(); } catch (e) {}
    try { R.out.disconnect(); } catch (e) {}
    if (state.clean === false) { try { fx.src.disconnect(); } catch (e) {} }
    if (want) {
      R.muffle.frequency.value = want.muffle; R.wet.gain.value = want.echo;
      tail.connect(R.inp); R.out.connect(fx.fade);
      if (state.clean !== false) fx.lim.connect(R.inp);
    } else {
      tail.connect(fx.fade);
    }
    if (state.clean === false && fx.probe) fx.src.connect(fx.probe);
    R.on = !!want;
    setAmbience();
  }
  // recorded sounds (art/sounds): the station-change tuning clip, and rain and fire loops
  const sounds = {}, soundWaiters = {};
  function loadSound(name) {
    const file = SKIN.sounds && SKIN.sounds[name];
    if (!file || sounds[name] !== undefined) return;
    sounds[name] = null;
    fetch(file).then(r => { if (!r.ok) throw 0; return r.arrayBuffer(); })
      .then(b => new Promise((ok, no) => ctx.decodeAudioData(b, ok, no)))
      .then(buf => { sounds[name] = AMB.includes(name) ? seamless(buf) : buf; (soundWaiters[name] || []).forEach(f => f()); })
      .catch(() => { sounds[name] = false; });
  }
  // turn a recording into a loop with no seam: skip the file's encoder padding at both ends, then
  // fade the last few seconds into the first few (equal-power, since rain and fire are noise-like)
  function seamless(buf) {
    const sr = buf.sampleRate, pad = Math.round(0.1 * sr);
    const usable = buf.length - 2 * pad, X = Math.min(Math.round(4 * sr), Math.floor(usable / 4));
    if (usable < sr * 4) return buf;
    const n = usable - X, out = ctx.createBuffer(buf.numberOfChannels, n, sr);
    for (let c = 0; c < buf.numberOfChannels; c++) {
      const a = buf.getChannelData(c), o = out.getChannelData(c);
      // the loop plays a[pad+X .. pad+usable); its last X samples blend into a[pad .. pad+X), which leads back to the start
      o.set(a.subarray(pad + X, pad + usable));
      for (let i = 0; i < X; i++) {
        const t = (i + 0.5) / X;
        o[n - X + i] = a[pad + usable - X + i] * Math.cos(t * Math.PI / 2) + a[pad + i] * Math.sin(t * Math.PI / 2);
      }
    }
    return out;
  }
  function setAmbience() {
    if (!fx.room) return;
    const R = fx.room, top = SKIN.ambienceMax || SKIN.fireMax || 1.9;
    AMB.forEach(name => {
      const v = state.on ? state.amb[name] : 0;
      if (v > 0 && !R.src[name]) {
        R.src[name] = "loading";
        const start = () => {
          const buf = sounds[name];
          if (!buf || R.src[name] !== "loading") return;
          const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
          src.connect(R.g[name]); src.start(0, Math.random() * buf.duration * 0.8); R.src[name] = src;
        };
        if (sounds[name]) start(); else { loadSound(name); (soundWaiters[name] = soundWaiters[name] || []).push(start); }
      } else if (v === 0 && R.src[name]) {
        const src = R.src[name]; R.src[name] = null;
        if (src !== "loading") { try { src.stop(ctx.currentTime + 1.6); } catch (e) {} }
      }
      // all the way up, each one is about as loud as the music (the main volume knob turns them too)
      R.g[name].gain.setTargetAtTime(Math.pow(v, 1.5) * top, ctx.currentTime, 0.25);
    });
  }
  function setAmb(name, v) {
    state.amb[name] = Math.max(0, Math.min(1, v));
    store.set("amb", state.amb);
    if (state.amb[name] > 0 && !state.on) power(true);
    setAmbience();
    const pct = Math.round(state.amb[name] * 100);
    els.forEach(r => (r.amb || []).forEach(inp => { if (inp.dataset.sound === name && +inp.value !== pct) { inp.value = pct; inp.style.setProperty("--v", pct + "%"); } }));
  }
  // songs fade out over their last few seconds and fade in when they start
  const FADE_OUT = 3, FADE_IN = 1.5;
  setInterval(() => {
    if (!fx.ready || state.phase !== "playing" || !audio.duration) return;
    const rem = audio.duration - audio.currentTime;
    if (rem < FADE_OUT) fx.fade.gain.setTargetAtTime(Math.max(0, rem / FADE_OUT), ctx.currentTime, 0.08);
  }, 100);
  function fadeIn() {
    if (!fx.ready) return;
    const g = fx.fade.gain, t = ctx.currentTime;
    g.cancelScheduledValues(t); g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(1, t + FADE_IN);
  }
  function soundFor(st) { return Object.assign({}, SOUND, (st && st.sound) || {}); }
  function applySound() {
    if (!fx.ready) return;
    const snd = soundFor(state.station);
    fx.lp.frequency.setTargetAtTime(snd.tone || 20000, ctx.currentTime, 0.1);
    const clean = state.clean !== false;
    // one detector handles pops and crackle; the stronger of the two settings sets its sensitivity
    const amount = Math.max(snd.decrackle || 0, snd.declick || 0);
    if (fx.dc) fx.dc.port.postMessage({ kc: clean && amount ? 8.5 - 5 * Math.min(1, amount) : 999 });
    // hiss: music stations get the stronger setting; set "dehiss" per station in stations.js to override
    const hiss = snd.dehiss != null ? snd.dehiss : (state.station && state.station.music ? 1 : 0.7);
    if (fx.dh) fx.dh.port.postMessage({ amt: clean ? hiss : 0 });
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
  // when you change stations, a few seconds of a real radio dial being turned plays until the show starts
  let tuneGain = null, tuneSrc = null;
  function tuningSound(on) {
    if (!ctx || !tuneGain) return;
    if (on) {
      const buf = sounds.tuning;
      if (!buf) { if (sounds.tuning == null) (soundWaiters.tuning = soundWaiters.tuning || []).push(() => { if (state.phase === "warming") tuningSound(true); }); return; }
      if (tuneSrc) { try { tuneSrc.stop(); } catch (e) {} }
      tuneSrc = ctx.createBufferSource(); tuneSrc.buffer = buf; tuneSrc.connect(tuneGain);
      const t = ctx.currentTime;
      tuneGain.gain.cancelScheduledValues(t); tuneGain.gain.setValueAtTime(0.0001, t); tuneGain.gain.linearRampToValueAtTime(0.55 * state.vol, t + 0.15);
      tuneSrc.start(t, Math.random() * Math.max(0, buf.duration - 4), 3.2);   // a different 3-second slice of the dial each time
      tuneGain.gain.setTargetAtTime(0.0001, t + 2.4, 0.25);
    } else if (tuneSrc) {
      tuneGain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.25);
      const s0 = tuneSrc; tuneSrc = null; setTimeout(() => { try { s0.stop(); } catch (e) {} }, 1500);
    }
  }
  function sleepFade() {
    if (!state.sleepEnd) return 1;
    return Math.max(0, Math.min(1, (state.sleepEnd - Date.now()) / 45000));   // fades over the last 45 seconds
  }
  function applyVolume() {
    const v = state.vol * sleepFade();
    if (fx.ready) fx.master.gain.setTargetAtTime(v, ctx.currentTime, 0.3); else audio.volume = v;
    // the tuning sound plays only while changing stations; between songs and on a lost signal it's quiet
    if (!(state.on && state.phase === "warming")) tuningSound(false);
  }

  let lostTimer = 0;
  const broken = new Set();   // recordings that wouldn't load this visit
  const trace = [];   // last few playback decisions, for troubleshooting in the browser console (RADIO.trace)
  function play(reason) {
    trace.push(new Date().toISOString().slice(11, 19) + " play " + (reason || "tune") + " " + (audio.dataset.src || "").split("/").pop().slice(0, 30)); if (trace.length > 30) trace.shift();
    clearTimeout(lostTimer);
    const st = state.station;
    if (!state.on || !st) return;
    let now = at(st);
    // "early": the record ran out of music before its scheduled end (or wouldn't load), so start the next one now
    if (reason !== "early" && broken.has(now.track.src) && !(state.early && now.track.src === state.early)) { audio.dataset.src = now.track.src; reason = "early"; }
    if (reason === "early") {
      const playing = st.tracks.findIndex(t => t.src === audio.dataset.src);
      let ni = ((playing >= 0 ? playing : now.i) + 1) % st.tracks.length;
      for (let k = 0; k < st.tracks.length && broken.has(st.tracks[ni].src); k++) ni = (ni + 1) % st.tracks.length;
      const nx = st.tracks[ni];
      state.early = nx.src;
      now = { i: ni, track: nx, offset: 0, left: nx.length };
    } else if (state.early && now.track.src === state.early) {
      // still playing the record we started early: carry on, don't jump back
    } else state.early = null;
    const src = now.track.src;
    setPhase(reason === "next" || reason === "early" ? "next" : "warming");
    if (state.phase === "warming") tuningSound(true);

    const seek = () => {
      if (reason === "early") { gate.arm(true); audio.play().catch(() => {}); return; }
      const fresh = at(st);
      if (fresh.track.src !== src) {
        if (state.early === src) { gate.arm(false); audio.play().catch(() => {}); return; }
        return play();
      }
      if (audio.duration && fresh.offset >= audio.duration - 1) return waitForNext(fresh);
      gate.arm(fresh.offset < 3);       // starting a record from the top: wait for the music before fading in
      try { audio.currentTime = fresh.offset; } catch (e) {}
      audio.play().catch(() => {});
    };
    if (audio.dataset.src === src && audio.readyState >= 1) seek();
    else {
      audio.dataset.src = src;
      newTrackLevel();
      if (fx.dh) fx.dh.port.postMessage({ reset: true });
      audio.src = src;
      audio.addEventListener("loadedmetadata", seek, { once: true });
      audio.load();
      if (document.hidden) audio.play().catch(() => {});
    }
    mediaSession(st, now.track);
    applySound();
  }
  function waitForNext(now) {
    if (document.hidden) return play("early");
    audio.pause();
    setPhase("gap");
    lostTimer = setTimeout(play, Math.max(500, now.left * 1000 + 300));
  }
  audio.addEventListener("playing", () => { audio.dataset.tries = ""; audio.dataset.failing = ""; if (state.on && state.station) { if (state.phase !== "playing" && !gate.waiting) fadeIn(); setPhase("playing"); } });
  audio.addEventListener("waiting", () => { if (state.phase === "playing") setPhase("next"); });
  audio.addEventListener("ended", () => {
    // finished ahead of the schedule (we skipped its run-out, or started it early): go straight to the next record
    const st = state.station, now = st && at(st);
    play(now && (now.track.src === audio.dataset.src || state.early === audio.dataset.src) && now.left > 1 ? "early" : "next");
  });
  // a recording that won't load (the Archive is busy, or the file is gone): try again twice,
  // then skip ahead to the next record instead of sitting in silence until the schedule moves on
  audio.addEventListener("error", () => {
    if (!state.on || !state.station) return;
    const src = audio.dataset.src || audio.dataset.failing; if (!src) return;
    const tries = +(audio.dataset.tries || 0);
    if (tries < 2) {
      audio.dataset.tries = tries + 1; audio.dataset.failing = src; audio.dataset.src = "";
      trace.push(new Date().toISOString().slice(11, 19) + " retry " + (tries + 1) + " " + src.split("/").pop().slice(0, 30));
      setTimeout(play, tries ? 4000 : 1200); return;
    }
    audio.dataset.tries = "";
    broken.add(src);
    trace.push(new Date().toISOString().slice(11, 19) + " skip broken " + src.split("/").pop().slice(0, 30));
    audio.dataset.src = src;
    if (broken.size < state.station.tracks.length) play("early");
    else { state.resumeAt = Date.now() + 60000; setPhase("lost"); clearTimeout(lostTimer); lostTimer = setTimeout(() => { broken.clear(); audio.dataset.src = ""; play(); }, 60000); }
  });
  // watchdog: if a record has been "loading" for 25 seconds without a single second playing, treat it as broken
  let lastT = -1, stuckSince = 0;
  setInterval(() => {
    if (!state.on || !state.station || !(state.phase === "warming" || state.phase === "next")) { stuckSince = 0; return; }
    if (audio.currentTime !== lastT) { lastT = audio.currentTime; stuckSince = Date.now(); return; }
    if (!stuckSince) stuckSince = Date.now();
    if (Date.now() - stuckSince > 25000) { stuckSince = Date.now(); audio.dispatchEvent(new Event("error")); }
  }, 2500);
  // keep everyone on the same second
  setInterval(() => {
    if (!state.on || !state.station || state.phase !== "playing") return;
    const now = at(state.station);
    if (state.early && audio.dataset.src === state.early) {
      if (now.track.src === state.early) state.early = null;      // the schedule has caught up
      return;
    }
    if (now.track.src !== audio.dataset.src) return play();
    if (Math.abs(audio.currentTime - now.offset) > 6) { try { audio.currentTime = now.offset; } catch (e) {} }
  }, 10000);

  /* Old records start and end with a few seconds of needle hiss (the lead-in and run-out grooves).
     The gate listens to the record: it keeps a new record silent until the music starts, and when
     the music ends and only hiss is left, it fades out and starts the next record early. */
  const gate = {
    waiting: false, start: 0, floor: 0, peak: -100, quiet: 0, loud: 0, done: false, next: null,
    arm(fromTop) {
      this.waiting = !!fromTop && !!fx.ready && !document.hidden; this.start = Date.now(); this.floor = 0; this.peak = -100; this.quiet = 0; this.loud = 0; this.done = false;
      if (this.waiting) { fx.fade.gain.cancelScheduledValues(ctx.currentTime); fx.fade.gain.setValueAtTime(0.0001, ctx.currentTime); }
    }
  };
  function probeDb() {
    if (!fx.probe) return null;
    fx.probe.getFloatTimeDomainData(fx.pbuf);
    let sum = 0; for (let i = 0; i < fx.pbuf.length; i++) sum += fx.pbuf[i] * fx.pbuf[i];
    return 10 * Math.log10(sum / fx.pbuf.length + 1e-12);
  }
  setInterval(() => {
    if (!fx.ready || !state.on || state.phase !== "playing" || audio.paused) return;
    const db = probeDb(); if (db == null) return;
    const t = (Date.now() - gate.start) / 1000;
    if (gate.waiting) {
      if (t < 0.4) { gate.floor = gate.floor ? Math.max(gate.floor, db) : db; return; }      // listen to the hiss for a moment
      const music = db > Math.max(-46, gate.floor + 7);
      gate.loud = music ? gate.loud + 1 : 0;
      if (gate.loud >= 2 || t > 7) { gate.waiting = false; fadeIn(); }
      return;
    }
    if (db > gate.peak) gate.peak = db;
    const rem = (audio.duration || 0) - audio.currentTime;
    if (gate.done || !audio.duration || rem > 25 || rem < 1.5) return;
    const tail = db < Math.max(-50, gate.peak - 26);
    gate.quiet = tail ? gate.quiet + 1 : 0;
    if (gate.quiet >= 7) {                           // ~0.7 s of nothing but hiss near the end
      gate.done = true;
      fx.fade.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.15);
      setTimeout(() => { if (state.on && state.phase === "playing") play("early"); }, 600);
    }
  }, 100);
  // fetch the next record shortly before it's needed, so it starts quickly
  let warmed = "";
  setInterval(() => {
    if (!state.on || !state.station || !audio.duration) return;
    const st = state.station, rem = audio.duration - audio.currentTime;
    if (rem > 30) return;
    const cur = st.tracks.findIndex(t => t.src === audio.dataset.src); if (cur < 0) return;
    const nx = st.tracks[(cur + 1) % st.tracks.length].src;
    if (warmed === nx) return;
    warmed = nx; const a = new Audio(); a.preload = "auto"; a.crossOrigin = "anonymous"; a.muted = true; a.src = nx;
  }, 2000);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden || !state.on) return;
    if (ctx && ctx.state !== "running") ctx.resume().catch(() => {});
    if (state.station && audio.paused && (state.phase === "playing" || state.phase === "next")) play();
  });

  function setPhase(p) { state.phase = p; applyVolume(); render(); presenceUpdate(); }

  function power(on) {
    initAudio();
    if (ctx && ctx.state === "suspended") ctx.resume();
    state.on = on == null ? !state.on : on;
    if (!state.on) { audio.pause(); clearTimeout(lostTimer); try { navigator.mediaSession.playbackState = "paused"; } catch (e) {} state.phase = "off"; routeRoom(); applyVolume(); render(); presenceUpdate(); return; }
    retune(true);
  }
  function retune(force) {
    const st = stationAtDial(state.dial);
    store.set("dial", state.dial);
    if (st === state.station && !force) { render(); return; }
    state.station = st;
    if (st && location.hash !== "#" + st.id) { try { history.replaceState(null, "", "#" + st.id); } catch (e) {} }
    if (!state.on) { render(); return; }
    routeRoom();
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
      navigator.mediaSession.metadata = new MediaMetadata({ title: tr.title, artist: tr.series, album: "The Bee's Knees.fm · " + st.name, artwork: [{ src: new URL("art/apple-touch-icon.png?v=2", location.href).href, sizes: "180x180", type: "image/png" }] });
      navigator.mediaSession.setActionHandler("nexttrack", () => stepStation(1));
      navigator.mediaSession.setActionHandler("previoustrack", () => stepStation(-1));
      navigator.mediaSession.setActionHandler("play", () => power(true));
      navigator.mediaSession.setActionHandler("pause", () => power(false));
      navigator.mediaSession.setActionHandler("stop", () => power(false));
      navigator.mediaSession.playbackState = "playing";
    } catch (e) {}
  }

  /* ---------- weather: a little icon and the temperature where the listener is ----------
     The station's Cloudflare helper (worker/weather.js, on /api/weather) works out the listener's city
     from their connection and returns the current weather. Nothing is stored. Draw your own icons as
     art/weather/<kind>.webp (sunny, night, partly, partly-night, cloudy, fog, rain, storm, snow);
     until a drawing exists, a simple built-in one shows. If the helper isn't there, the piece stays hidden. */
  const WX_INK = "#1f1b17", WX_SUN = "#e3a92f";
  const WX_CLOUD = `<path d="M18 44h28a10 10 0 0 0 0-20 14 14 0 0 0-27-3 11 11 0 0 0-1 23z" fill="#efe5cc" stroke="${WX_INK}" stroke-width="3" stroke-linejoin="round"/>`;
  const WX_SVG = {
    sunny: `<circle cx="32" cy="32" r="11" fill="${WX_SUN}" stroke="${WX_INK}" stroke-width="3"/><g stroke="${WX_INK}" stroke-width="3" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a => `<line x1="32" y1="9" x2="32" y2="15" transform="rotate(${a} 32 32)"/>`).join("")}</g>`,
    night: `<path d="M40 12a20 20 0 1 0 12 30A16 16 0 0 1 40 12z" fill="${WX_SUN}" stroke="${WX_INK}" stroke-width="3" stroke-linejoin="round"/><path d="M50 14l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="${WX_INK}"/>`,
    partly: `<circle cx="24" cy="22" r="9" fill="${WX_SUN}" stroke="${WX_INK}" stroke-width="3"/><g stroke="${WX_INK}" stroke-width="3" stroke-linecap="round"><line x1="24" y1="5" x2="24" y2="8"/><line x1="7" y1="22" x2="10" y2="22"/><line x1="12" y1="10" x2="14" y2="12"/><line x1="36" y1="10" x2="34" y2="12"/></g>` + WX_CLOUD,
    "partly-night": `<path d="M26 8a13 13 0 1 0 9 22A11 11 0 0 1 26 8z" fill="${WX_SUN}" stroke="${WX_INK}" stroke-width="3" stroke-linejoin="round"/>` + WX_CLOUD,
    cloudy: `<path d="M38 22a12 12 0 0 0-22-1" fill="none" stroke="${WX_INK}" stroke-width="3" stroke-linecap="round"/>` + WX_CLOUD,
    fog: WX_CLOUD + `<g stroke="${WX_INK}" stroke-width="3" stroke-linecap="round"><line x1="12" y1="51" x2="44" y2="51"/><line x1="20" y1="57" x2="52" y2="57"/></g>`,
    rain: WX_CLOUD + `<g stroke="${WX_INK}" stroke-width="3" stroke-linecap="round"><line x1="22" y1="50" x2="19" y2="57"/><line x1="32" y1="50" x2="29" y2="57"/><line x1="42" y1="50" x2="39" y2="57"/></g>`,
    storm: WX_CLOUD + `<path d="M33 46l-6 9h6l-4 8" fill="none" stroke="${WX_SUN}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    snow: WX_CLOUD + `<g fill="${WX_INK}"><circle cx="22" cy="53" r="2.5"/><circle cx="32" cy="57" r="2.5"/><circle cx="42" cy="53" r="2.5"/></g>`
  };
  const wxName = d => d.kind === "clear" ? (d.day ? "sunny" : "night") : d.kind === "partly" && !d.day ? "partly-night" : d.kind;
  const wxRecs = [];
  let wxData = null;
  function paintWeather(rec) {
    const d = wxData, L = rec.L;
    rec.box.hidden = !(d && d.ok);   // the layer itself is shown and hidden by render(), so hide what's inside
    if (!d || !d.ok) return;
    const name = wxName(d), dir = L.icons || "art/weather/";
    if (rec.name !== name) {
      rec.name = name;
      rec.icon.innerHTML = `<svg viewBox="0 0 64 64" aria-hidden="true">${WX_SVG[name] || WX_SVG.cloudy}</svg>`;
      const im = new Image(); im.alt = "";
      im.onload = () => { if (rec.name === name) { rec.icon.innerHTML = ""; rec.icon.appendChild(im); } };
      im.src = dir + name + ".webp";
    }
    rec.temp.textContent = `${d.temp}°${L.unit === false ? "" : d.unit}`;
    const words = d.words + (d.city ? ` in ${d.city}` : "");
    rec.box.title = words; rec.box.setAttribute("aria-label", `${words}, ${d.temp} degrees ${d.unit === "F" ? "Fahrenheit" : "Celsius"}`);
  }
  function loadWeather() {
    fetch("/api/weather", { cache: "no-store" }).then(r => r.ok ? r.json() : null).catch(() => null)
      .then(d => { wxData = d && d.ok ? d : null; wxRecs.forEach(paintWeather); });
  }
  setInterval(() => { if (!document.hidden) loadWeather(); }, 20 * 60 * 1000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && wxRecs.length) loadWeather(); });

  /* ---------- fonts ---------- */
  (SKIN.fonts || []).forEach(f => {
    try { new FontFace(f.family, `url("${f.src}")`).load().then(ff => { document.fonts.add(ff); fitAllText(); }).catch(() => {}); } catch (e) {}
  });

  /* ---------- built-in 1950s looks: shown until your own art is in the art folder ---------- */
  const PALETTE = ["#e3a92f", "#c8321f", "#e3a92f", "#1f1b17", "#c8321f", "#e3a92f"];   // honey, red and black ink
  function starburst(color, rays = 12, op = 1) {
    let lines = "";
    for (let i = 0; i < rays; i++) {
      const a = (i / rays) * Math.PI * 2, r = i % 2 ? 26 : 46;
      lines += `<line x1="50" y1="50" x2="${(50 + Math.cos(a) * r).toFixed(1)}" y2="${(50 + Math.sin(a) * r).toFixed(1)}"/>`;
    }
    return `<svg viewBox="0 0 100 100" aria-hidden="true" style="opacity:${op}"><g stroke="${color}" stroke-width="2.4" stroke-linecap="round">${lines}</g><circle cx="50" cy="50" r="6" fill="${color}"/></svg>`;
  }
  const LOOKS = {
    walnut: () => "",
    grain: () => "",
    paper: () => "",
    listings: () => "",
    strip: () => "",
    cabinet: () => `<span class="lk-trim"></span>`,
    logo: () => `<span class="lk-logo"><span class="lk-name">${esc(SKIN.name || "Beeknees")}</span>${SKIN.badge ? `<span class="lk-badge">${esc(SKIN.badge)}</span>` : ""}</span><span class="lk-tag">${esc(SKIN.tagline || "")}</span>`,
    power: () => `<span class="lk-btn-face"><span class="lk-power-icon"></span></span><span class="lk-btn-label">On / off</span>`,
    "lamp-on": () => "",
    "lamp-off": () => "",
    knob: () => `<span class="lk-knob-face"><span class="lk-knob-mark"></span></span>`,
    "chan-up": () => `<span class="lk-chan">▲</span>`,
    "chan-down": () => `<span class="lk-chan">▼</span>`,
    tvset: () => `<span class="lk-tv-badge">Tele-Vue</span>`,
    screen: () => "",
    wall: () => "",
    onair: () => `<span class="lk-onair">On Air</span>`,
    star: () => starburst("#d6a03c", 12, 0.9)
  };
  function makeLook(name, L) {
    const f = LOOKS[name]; if (!f) return null;
    const d = document.createElement("div");
    d.className = "look look-" + name;
    d.innerHTML = f(L);
    return d;
  }
  function stationCardLook(st, i) {
    const d = document.createElement("div");
    d.className = "look look-card";
    d.style.setProperty("--c", st.color || PALETTE[i % PALETTE.length]);
    d.dataset.ink = ["#1f1b17", "#c8321f"].includes(st.color || PALETTE[i % PALETTE.length]) ? "light" : "dark";   // light text on red and black cards
    d.innerHTML = `<span class="lc-num">${esc(st.num)}</span><span class="lc-name">${esc(st.name)}</span><span class="lc-blurb">${esc(st.blurb || "")}</span>`;
    return d;
  }

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
  // a station card can be a short looping video (.mp4): it plays silently on repeat, and people who
  // ask their device for less motion see its still first frame (the .webp of the same name) instead
  function makeCardMedia(src, onState) {
    if (!/\.mp4(\?|$)/i.test(src)) return makeImg(src, onState);
    const still = src.replace(/\.mp4(\?|$)/i, ".webp$1");
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return makeImg(still, onState);
    const v = document.createElement("video");
    v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
    v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.setAttribute("aria-hidden", "true");
    v.poster = still; v.preload = "auto";
    v.addEventListener("loadeddata", () => { onState(true); v.play().catch(() => {}); });
    v.addEventListener("error", () => onState(false));
    v.src = src;
    return v;
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
    reactArea = null;
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
          // the station's own pages (tv.html, drive-in.html ...) open in place; anything off-site opens in a new tab
          if (!/^[\w-]+\.html(#.*)?$/.test(L.href)) { t.target = "_blank"; t.rel = "noopener"; }
          t.addEventListener("click", e => {
            if (state.editing) { e.preventDefault(); return; }
            // a link filled in later (like the TV Guide's tv.html#channel) is checked as it's clicked
            if (/^[\w-]+\.html(#.*)?$/.test(t.getAttribute("href") || "")) t.removeAttribute("target");
            if (L.href === "about.html" && !e.metaKey && !e.ctrlKey && !e.shiftKey) { e.preventDefault(); openAbout(); }
            else if (RACKS[L.href] && !e.metaKey && !e.ctrlKey && !e.shiftKey) { e.preventDefault(); openRack(RACKS[L.href]); }
          });
        }
        // drawn button: "img" is the still picture, "hoverImg" the animation that plays while you point at it
        // (or press it, on a phone). The typed text stays underneath for screen readers and until the art loads.
        if (L.img) {
          el.classList.add("drawn");
          const still = makeImg(L.img, ok => el.classList.toggle("art-ok", ok)); still.className = "btn-still";
          el.appendChild(still);
          if (L.hoverImg) {
            const anim = new Image(); anim.alt = ""; anim.draggable = false; anim.className = "btn-anim"; anim.hidden = true;
            el.appendChild(anim);
            new Image().src = L.hoverImg;                                   // fetch it early so the first hover is instant
            const calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
            let n = 0;
            const on = () => {
              if (calm || state.editing || !el.classList.contains("art-ok")) return;
              // a fresh address makes the animation start from its first frame every time
              anim.src = L.hoverImg + (L.hoverImg.includes("?") ? "&" : "?") + "p=" + (++n % 2);
              anim.hidden = false; still.style.visibility = "hidden";
            };
            const off = () => { anim.hidden = true; still.style.visibility = ""; };
            el.addEventListener("pointerenter", on); el.addEventListener("pointerleave", off);
            el.addEventListener("focusin", on); el.addEventListener("focusout", off);
            el.addEventListener("pointerup", e => { if (e.pointerType !== "mouse") setTimeout(off, L.hoverMs || 1200); });
          }
        }
      } else if (type === "video") {
        const v = document.createElement("video");
        v.muted = true; v.defaultMuted = true; v.loop = true; v.autoplay = true; v.playsInline = true; v.preload = "auto";
        v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.disablePictureInPicture = true;
        v.src = L.video; el.appendChild(v);
        v.play().catch(() => {});
        document.addEventListener("visibilitychange", () => { if (!document.hidden) v.play().catch(() => {}); });
      } else if (type === "funnies") {
        // the Sunday Funnies: this week's strip as a clipping; click to read it full size
        el.classList.add("hot");
        el.innerHTML = '<button type="button" class="fn-clip"><span class="fn-head"></span><span class="fn-pic"><img alt=""></span><span class="fn-cap"></span></button>';
        rec.funnies = { key: "" };
        el.querySelector(".fn-head").textContent = L.title || "The Sunday Funnies";
        el.querySelector("button").addEventListener("click", e => { if (state.editing) return; e.stopPropagation(); openFunnies(); });
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
        el.innerHTML = '<video muted playsinline preload="auto" disablepictureinpicture></video><div class="tv-standby"></div><div class="tv-tag" hidden></div>';
        const v = el.querySelector("video");
        v.muted = true; v.defaultMuted = true;
        rec.tv = { v, standby: el.querySelector(".tv-standby"), tag: el.querySelector(".tv-tag"), src: "", until: 0, key: "" };
        // while the set tunes in (or between shows) it shows a loop of old TV static, kept on the site so it's instant
        rec.tv.standby.innerHTML = '<video class="static" src="art/screen/static.mp4" autoplay muted loop playsinline disablepictureinpicture aria-hidden="true"></video>';
        rec.tv.standby.setAttribute("role", "status"); rec.tv.standby.setAttribute("aria-label", WORDS.tvStandby);
        el.addEventListener("click", () => { if (!state.editing && rec.tv.href && !/^https?:/.test(rec.tv.href)) location.href = rec.tv.href; });
        v.addEventListener("ended", () => { rec.tv.src = ""; renderTV(rec, true); });
        v.addEventListener("playing", () => { rec.tv.standby.hidden = true; });
        v.addEventListener("error", () => {
          const now = whatsOn();
          rec.tv.standby.hidden = false;
          rec.tv.until = Date.now() + (now ? now.left * 1000 + 500 : 30000);
        });
      } else if (type === "slider" || type === "mixer") {
        // the ambient mixer: one volume slider per sound (rain, fire, thunderstorm), all can play at once
        el.classList.add("hot", "t-mixer");
        const rows = L.sounds || (L.sound ? [{ id: L.sound, label: L.label }] : AMB.map(id => ({ id })));
        const NAMES = { rain: "Rain", fire: "Fire", storm: "Storm" };
        const QUIET = '<svg class="fv-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/></svg>';
        const LOUD = '<svg class="fv-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
        el.innerHTML = (L.title ? '<div class="mix-title"></div>' : "") + rows.map(() => '<label class="fire-vol"><span class="fv-label"></span>' + QUIET + '<input type="range" min="0" max="100" step="1">' + LOUD + '</label>').join("");
        if (L.title) el.querySelector(".mix-title").textContent = L.title;
        rec.amb = [];
        el.querySelectorAll(".fire-vol").forEach((lab, k) => {
          const row = rows[k], name = NAMES[row.id] || row.id;
          lab.querySelector(".fv-label").textContent = row.label || name;
          const r = lab.querySelector("input");
          r.dataset.sound = row.id;
          const paint = () => r.style.setProperty("--v", r.value + "%");
          r.value = Math.round((state.amb[row.id] || 0) * 100); paint();
          r.setAttribute("aria-label", name + " sound volume");
          r.addEventListener("input", () => { paint(); if (!state.editing) setAmb(row.id, r.value / 100); });
          r.addEventListener("pointerdown", e => { if (!state.editing) e.stopPropagation(); });
          rec.amb.push(r);
        });
      } else if (type === "reactbar") {
        el.classList.add("hot");
        (SKIN.reactions || []).forEach(r => {
          const b = document.createElement("button");
          b.type = "button"; b.className = "react"; b.dataset.r = r.id; b.setAttribute("aria-label", r.label || r.id);
          if (r.src) { const im = new Image(); im.src = r.src; im.alt = ""; b.appendChild(im); } else b.textContent = r.emoji || "♥";
          b.addEventListener("click", () => { if (!state.editing) react(r.id); });
          el.appendChild(b);
        });
      } else if (type === "weather") {
        el.innerHTML = '<div class="wx" role="img"><span class="wx-icon"></span><span class="wx-temp"></span></div>';
        const box = el.firstChild;
        if (L.font) box.style.fontFamily = `"${L.font}", "BK Serif", Georgia, serif`;
        if (L.size) box.style.fontSize = L.size + "px";
        if (L.color) box.style.color = L.color;
        if (L.weight) box.style.fontWeight = L.weight;
        if (L.stretch) box.style.fontStretch = L.stretch + "%";
        if (L.align === "right") box.style.justifyContent = "flex-end";
        Object.assign(rec, { box, name: "", icon: el.querySelector(".wx-icon"), temp: el.querySelector(".wx-temp") });
        box.hidden = true; wxRecs.push(rec);
        if (wxData) paintWeather(rec); else if (wxRecs.length === 1) loadWeather();
      } else if (type === "reactfloat") {
        reactArea = rec;
      } else if (type === "ad") {
        el.classList.add("hot");
        el.innerHTML = '<div class="ad-img"><img alt=""></div><div class="ad-cap"><span class="ad-title"></span> <a class="ad-via" target="_blank" rel="noopener">via archive.org</a></div>';
        const img = el.querySelector("img");
        img.addEventListener("load", () => { img.style.opacity = 1; });
        el.querySelector(".ad-via").addEventListener("click", e => { if (state.editing) e.preventDefault(); });
        rec.ad = { img, title: el.querySelector(".ad-title"), via: el.querySelector(".ad-via"), cur: -1 };
        const card = document.createElement("div"); card.className = "tipcard"; card.hidden = true; card.setAttribute("role", "status");
        card.innerHTML = '<div class="tc-wrap"><div class="tc-inner"><div class="tc-kicker"></div><div class="tc-name"></div><div class="tc-msg"></div><div class="tc-thanks"></div><a class="tc-link" target="_blank" rel="noopener"></a></div></div>';
        card.addEventListener("click", e => { if (!e.target.closest("a")) { e.stopPropagation(); card.hidden = true; } });
        el.appendChild(card); rec.ad.card = card;
        el.querySelector(".ad-img").addEventListener("click", () => { if (!state.editing && rec.ad.cur >= 0) openAd((window.ADS || [])[rec.ad.cur]); });
      } else if (type === "ticker") {
        // one message at a time: each fades in, stays long enough to read, then fades out (no scrolling)
        const run = document.createElement("div"); run.className = "tick";
        const span = document.createElement("span"); run.appendChild(span); el.appendChild(run);
        rec.tick = { span, run, text: null, pending: null, items: [], i: -1, timer: 0 };
      } else if (type === "card") {
        rec.cards = {};
        STATIONS.forEach(s => {
          const holder = document.createElement("div"); holder.className = "card"; holder.dataset.station = s.id;
          const img = makeCardMedia(s.card || "", ok => { holder.classList.toggle("missing", !ok); });
          holder.appendChild(img);
          holder.appendChild(stationCardLook(s, STATIONS.indexOf(s))); holder.classList.add("has-look");
          holder.appendChild(templateLabel({ id: s.name + " card", w: L.w, h: L.h }, s.card));
          el.appendChild(holder); rec.cards[s.id] = holder;
        });
      } else if (L.frames && L.frames.length) {
        rec.frames = L.frames.map((src, i) => { const img = makeImg(src, ok => { if (i === 0) { rec.ok = ok; el.classList.toggle("missing", !ok); } }); img.hidden = i > 0; el.appendChild(img); return img; });
        el.appendChild(templateLabel(L, L.frames[0]));
      } else if (L.src) {
        rec.img = makeImg(L.src, ok => { rec.ok = ok; el.classList.toggle("missing", !ok); });
        el.appendChild(rec.img);
        if (L.look) { const lk = makeLook(L.look, L); if (lk) { el.appendChild(lk); el.classList.add("has-look"); rec.look = lk; } }
        el.appendChild(templateLabel(L, L.src));
        el.classList.add("missing");
      } else if (L.look) {
        const lk = makeLook(L.look, L); if (lk) { el.appendChild(lk); rec.look = lk; }
        el.classList.add("has-look", "missing");
        el.appendChild(templateLabel(L, "(built-in look)"));
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
      if (L.type === "reactbar") el.style.setProperty("--r-size", (L.size || 26) + "px");
      if (L.type === "guide" || L.type === "ad" || L.type === "tv") {
        const v = (k, val) => { if (val != null) el.style.setProperty(k, val); };
        el.style.fontFamily = `"${L.font || ""}", "BK Serif", Georgia, serif`;
        v("--g-size", (L.size || 18) + "px"); v("--g-ink", L.color || "#e9dcc3"); v("--g-dim", L.dim || "#a99a83");
        v("--g-line", L.line || "rgba(233,220,195,.16)"); v("--g-hi", L.highlight || "#f0b44c");
        v("--g-block", L.block || "rgba(233,220,195,.06)"); v("--g-sel", L.selected || "rgba(240,180,76,.14)");
        v("--g-row", (L.rowHeight || 54) + "px"); v("--g-lab", (L.labelWidth || 300) + "px");
        v("--g-paper", L.paper); v("--g-label-font", L.labelFont ? `"${L.labelFont}", "Arial Narrow", sans-serif` : null);
      }
      if (L.type === "ticker") {
        const t = el.firstChild;
        t.style.fontFamily = `"${L.font || ""}", "BK Serif", Georgia, serif`;
        t.style.color = L.color || "#e9dcc3";
        t.style.fontSize = (L.size || 22) + "px";
        t.style.lineHeight = L.h + "px";
      }
      if (L.type === "text") {
        const t = el.firstChild;
        t.style.fontFamily = `"${L.font || ""}", "BK Serif", Georgia, serif`;
        t.style.color = L.color || "#e9dcc3";
        t.style.textAlign = L.align || "left";
        t.style.lineHeight = L.lineHeight || 1.2;
        t.style.textTransform = L.uppercase ? "uppercase" : "none";
        t.style.letterSpacing = L.spacing ? L.spacing + "px" : "";
        t.style.fontWeight = L.weight || "";
        t.style.fontStretch = L.stretch ? L.stretch + "%" : "";
        t.style.fontStyle = L.italic ? "italic" : "";
      }
    });
    fitAllText();
  }
  function fit() {
    const vw = window.innerWidth, vh = window.innerHeight;
    const byWidth = SK.stage.fit === "width";
    // computers: fit the whole radio on screen, but never shrink below the width-fit size (capped at full size),
    // so text stays readable on short laptop screens; the page scrolls a little instead
    const k = byWidth ? vw / W : Math.max(Math.min(vw / W, vh / H), Math.min(vw / W, 1));
    const scrolls = byWidth || H * k > vh + 1;
    stage.style.transform = `translate(${byWidth ? 0 : Math.max(0, (vw - W * k) / 2)}px, ${scrolls ? 0 : Math.max(0, (vh - H * k) / 2)}px) scale(${k})`;
    document.documentElement.classList.toggle("scrolls", scrolls);
    document.documentElement.classList.toggle("phone", SK === SKIN.portrait);
    const frame = stage.parentElement;
    frame.style.height = scrolls ? Math.ceil(H * k) + "px" : "";
    state.scale = k;
  }
  // phones fire "resize" every time the address bar slides in or out while scrolling; on the phone layout only
  // the width matters, so ignore height-only changes there instead of re-laying out the whole page mid-scroll
  let lastW = window.innerWidth;
  window.addEventListener("resize", () => {
    const wNow = window.innerWidth, sameW = wNow === lastW; lastW = wNow;
    if (sameW && SK.stage.fit === "width" && isPortrait() === (SK === SKIN.portrait)) return;
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
      case "power": return state.on ? WORDS.powerOff : WORDS.powerOn;
      case "station.name": return st ? st.name : "";
      case "station.freq": return st ? st.freq || "" : "";
      case "station.blurb": return st ? st.blurb || "" : "";
      case "visits": return visits.n ? WORDS.visits.replace("{n}", String(visits.n).padStart(6, "0").replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : "";
      case "card.credit": return st && st.cardBy ? "Card art by " + st.cardBy : "";
      case "clean": return state.clean === false ? WORDS.cleanOff : WORDS.cleanOn;
      case "tip": return CONFIG.tip ? WORDS.tip : "";
      case "ambience": return WORDS["amb_" + state.ambience] || "";
      case "sleep": return state.sleepEnd ? WORDS.sleepOn.replace("{min}", Math.max(1, Math.ceil((state.sleepEnd - Date.now()) / 60000))) : WORDS.sleepOff;
      case "tv.title": { const n = whatsOn(); return n ? n.title : ""; }
      case "station.listeners": {
        if (!st) return "";
        const sp = (CONFIG.sponsors || {})[st.id];
        return sp ? WORDS.sponsorLine.replace("{name}", sp) : "";
      }
      case "listeners.total": {   // everyone listening, across all stations
        const n = presence.live ? presence.counts._total || 0 : 0;
        return n > 1 ? WORDS.listeners.replace("{n}", n) : "";   // blank when it's only you
      }
      case "now.series": return now ? now.track.series || "" : "";
      case "now.title": return now ? now.track.title || "" : "";
      case "now.date": {
        if (!now || !now.track.date) return "";
        const music = st && /music|record/i.test(st.group || "");
        return (music ? WORDS.released : WORDS.aired) + " " + now.track.date;
      }
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
    if (mode === "nownext") h += `<div class="g-head"><span class="g-lab"></span><span class="g-cols"><span>${esc(WORDS.guideNow)}</span><span>${esc(WORDS.guideNext)}</span></span></div>`;
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
      const cnt = "";   // per-station counts are off; the total sits in the masthead
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
      } else if (mode === "nownext") {
        // up next skips the vintage commercials, so it always names the next show or record
        let ni = (cur.i + 1) % st.tracks.length, at2 = now + cur.left * 1000, guard = 0;
        while (st.tracks[ni].ad && guard++ < 5) { at2 += st.tracks[ni].length * 1000; ni = (ni + 1) % st.tracks.length; }
        const nx = st.tracks[ni];
        h += `<span class="g-cols"><span class="g-now"><b>${esc(cur.track.series)}</b> ${esc(cur.track.title)}</span>` +
             `<span class="g-next"><em>${hhmm(at2)}</em> <b>${esc(nx.series)}</b> ${esc(nx.title)}</span></span>`;
      } else {
        h += `<span class="g-list"><span class="g-now"><b>${esc(cur.track.series)}</b> ${esc(cur.track.title)}</span>` +
             `<span class="g-next">${st.music ? "then" : hhmm(now + cur.left * 1000)} ${esc(next.series)} — ${esc(next.title)}</span></span>`;
      }
      h += `</button>`;
    });
    // only touch the page when something in the guide actually changed: rewriting it while someone is
    // flicking past it on a phone stops the scroll dead (that was the "glitch every so often")
    if (g.html === h) return;
    g.html = h;
    const top = g.el.scrollTop;
    g.el.innerHTML = h;
    if (g.el.scrollTop !== top) g.el.scrollTop = top;
  }

  /* ---------- reactions: emoji that float up for everyone on the same station ---------- */
  let reactArea = null, lastReact = 0;
  function floatReaction(id) {
    if (!reactArea || reactArea.el.hidden) return;
    const area = reactArea.el;
    if (area.childElementCount > 40) return;
    const r = (SKIN.reactions || []).find(x => x.id === id); if (!r) return;
    const f = document.createElement("span"); f.className = "floater";
    if (r.src) { const im = new Image(); im.src = r.src; im.alt = ""; f.appendChild(im); } else f.textContent = r.emoji || "♥";
    f.style.left = (8 + Math.random() * 84) + "%";
    f.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
    f.style.animationDuration = (2.6 + Math.random() * 1.4) + "s";
    f.addEventListener("animationend", () => f.remove());
    area.appendChild(f);
  }
  function react(id) {
    const now = Date.now();
    if (now - lastReact < 500) return;
    lastReact = now;
    floatReaction(id);
    if (presence.ch && state.station) presence.ch.send({ type: "broadcast", event: "react", payload: { s: state.station.id, r: id } }).catch(() => {});
  }
  function heardReaction(p) { if (p && state.station && p.s === state.station.id) floatReaction(p.r); }

  /* ---------- sleep timer ---------- */
  const SLEEP_STEPS = [0, 15, 30, 60, 90];
  function cycleSleep() {
    const left = state.sleepEnd ? (state.sleepEnd - Date.now()) / 60000 : 0;
    const next = SLEEP_STEPS.find(m => m > left + 0.5) || 0;
    state.sleepEnd = next ? Date.now() + next * 60000 : 0;
    if (next && !state.on) power(true);
    applyVolume(); render();
  }
  setInterval(() => {
    if (!state.sleepEnd) return;
    if (Date.now() >= state.sleepEnd) { state.sleepEnd = 0; power(false); return; }
    if (state.sleepEnd - Date.now() < 46000) applyVolume();
  }, 1000);

  /* ---------- recently played ---------- */
  function overlay() {
    let box = document.getElementById("overlay");
    if (!box) {
      box = document.createElement("div"); box.id = "overlay"; box.setAttribute("role", "dialog"); box.hidden = true;
      box.innerHTML = '<div class="ov-card"><div class="ov-head"><h2 id="ov-title"></h2><button type="button" id="ov-close">Close</button></div><ol id="ov-list"></ol></div>';
      document.body.appendChild(box);
      box.addEventListener("click", e => { if (e.target === box) closeOverlay(); });
      box.querySelector("#ov-close").addEventListener("click", closeOverlay);
    }
    return box;
  }
  function closeOverlay() { const b = document.getElementById("overlay"); if (b) b.hidden = true; }
  function openRecent() {
    const box = overlay(), st = state.station, list = box.querySelector("#ov-list"), title = box.querySelector("#ov-title");
    list.innerHTML = "";
    if (!st) { title.textContent = WORDS.recentNone; box.hidden = false; return; }
    title.textContent = WORDS.recentTitle.replace("{station}", st.name);
    const now = Date.now(), cur = at(st, now);
    let start = now - cur.offset * 1000, i = cur.i;
    for (let k = 0; k < 15 && k < st.tracks.length; k++) {
      const tr = st.tracks[i];
      const li = document.createElement("li");
      const when = document.createElement("span"); when.className = "ov-when"; when.textContent = k === 0 ? WORDS.guideNow : hhmm(start);
      const what = document.createElement("span"); what.className = "ov-what";
      const b = document.createElement("b"); b.textContent = tr.series || ""; what.appendChild(b);
      what.appendChild(document.createTextNode(" " + (tr.title || "") + (tr.date ? " (" + tr.date + ")" : "")));
      li.appendChild(when); li.appendChild(what);
      if (tr.item) { const a = document.createElement("a"); a.href = tr.item; a.target = "_blank"; a.rel = "noopener"; a.textContent = "via archive.org"; li.appendChild(a); }
      list.appendChild(li);
      i = (i - 1 + st.tracks.length) % st.tracks.length;
      start -= st.tracks[i].length * 1000;
    }
    box.hidden = false;
    box.querySelector("#ov-close").focus();
  }

  /* Pinch, drag and double-tap zoom for a picture in a box, done here rather than by the browser:
     pinch-zooming the whole page on a phone means redrawing the entire radio at a huge size, which can crash the tab. */
  function zoomable(box, img) {
    let s = 1, tx = 0, ty = 0, bw = 0, bh = 0;
    const pts = new Map();
    let last = null, lastTap = 0;
    const size = () => {
      const W = box.clientWidth, H = box.clientHeight;
      if (!img.naturalWidth || !W) return false;
      bw = W; bh = W * img.naturalHeight / img.naturalWidth;
      if (bh > H * 1.0 && box.dataset.fit === "contain") { bh = H; bw = H * img.naturalWidth / img.naturalHeight; }
      img.style.width = bw + "px"; img.style.height = bh + "px";
      return true;
    };
    const clamp = () => {
      const W = box.clientWidth, H = box.clientHeight, w = bw * s, h = bh * s;
      tx = w <= W ? (W - w) / 2 : Math.min(0, Math.max(W - w, tx));
      ty = h <= H ? (H - h) / 2 : Math.min(0, Math.max(H - h, ty));
    };
    const draw = () => { clamp(); img.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`; box.classList.toggle("zoomed", s > 1.01); };
    const zoomAt = (ns, cx, cy) => {
      ns = Math.max(1, Math.min(5, ns));
      const r = box.getBoundingClientRect(), px = cx - r.left, py = cy - r.top;
      tx = px - (px - tx) * ns / s; ty = py - (py - ty) * ns / s; s = ns; draw();
    };
    const reset = () => { s = 1; tx = 0; ty = 0; if (size()) draw(); };
    img.addEventListener("load", reset);
    window.addEventListener("resize", () => { if (!box.offsetParent) return; const f = s; size(); s = f; draw(); });
    box.addEventListener("pointerdown", e => {
      box.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      last = null;
    });
    box.addEventListener("pointermove", e => {
      if (!pts.has(e.pointerId)) return;
      const prev = pts.get(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) { tx += e.clientX - prev.x; ty += e.clientY - prev.y; draw(); }
      else if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        if (last) { tx += mx - last.mx; ty += my - last.my; zoomAt(s * d / last.d, mx, my); }
        last = { d, mx, my };
      }
    });
    const up = e => {
      if (!pts.has(e.pointerId)) return;
      const start = pts.size === 1;
      pts.delete(e.pointerId); last = null;
      if (start && e.type === "pointerup") {
        const now = Date.now();
        if (now - lastTap < 320) { zoomAt(s > 1.01 ? 1 : 2.5, e.clientX, e.clientY); lastTap = 0; }
        else lastTap = now;
      }
    };
    box.addEventListener("pointerup", up); box.addEventListener("pointercancel", up);
    box.addEventListener("wheel", e => {
      e.preventDefault();
      if (e.ctrlKey) zoomAt(s * Math.exp(-e.deltaY / 200), e.clientX, e.clientY);
      else { tx -= e.deltaX; ty -= e.deltaY; draw(); }
    }, { passive: false });
    box.addEventListener("dblclick", e => e.preventDefault());
    return { reset, zoomBy: f => { const r = box.getBoundingClientRect(); zoomAt(s * f, r.left + r.width / 2, r.top + r.height / 2); } };
  }
  function overlayOpen(on) { document.body.classList.toggle("ov-open", on); }

  /* ---------- About, as a pop-up over the radio (the text comes from about.html, so there's one copy) ---------- */
  let aboutHTML = null;
  function openAbout(push = true) {
    let box = document.getElementById("about-ov");
    if (!box) {
      box = document.createElement("div"); box.id = "about-ov"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true");
      box.setAttribute("aria-label", "About The Bee's Knees.fm"); box.hidden = true;
      box.innerHTML = '<div class="ab-card"><button type="button" class="ab-close">Close</button><div class="ab-body">Loading\u2026</div></div>';
      document.body.appendChild(box);
      box.addEventListener("click", e => { if (e.target === box) closeAbout(); });
      box.querySelector(".ab-close").addEventListener("click", () => closeAbout());
      document.addEventListener("keydown", e => { if (e.key === "Escape" && !box.hidden) closeAbout(); });
    }
    const body = box.querySelector(".ab-body");
    // Cloudflare hides email addresses in pages it serves and decodes them with a script, which doesn't run
    // in this pop-up, so decode them here (the first byte is the key; every byte after is XORed with it)
    const unhide = hex => { const k = parseInt(hex.slice(0, 2), 16); let t = ""; for (let i = 2; i < hex.length; i += 2) t += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ k); return t; };
    const fill = html => {
      body.innerHTML = html; body.scrollTop = 0;
      body.querySelectorAll("[data-cfemail]").forEach(e => e.replaceWith(document.createTextNode(unhide(e.dataset.cfemail))));
      body.querySelectorAll('a[href*="/cdn-cgi/l/email-protection#"]').forEach(a => { a.href = "mailto:" + unhide(a.getAttribute("href").split("#")[1]); });
    };
    if (aboutHTML) fill(aboutHTML);
    else fetch("about.html").then(r => r.text()).then(t => {
      const doc = new DOMParser().parseFromString(t, "text/html"), main = doc.querySelector("main");
      if (!main) throw 0;
      aboutHTML = main.innerHTML; fill(aboutHTML);
    }).catch(() => { location.href = "about.html"; });
    box.hidden = false; overlayOpen(true);
    if (push && location.hash !== "#about") history.pushState({ about: 1 }, "", "#about");
    box.querySelector(".ab-close").focus();
  }
  function closeAbout(fromHistory) {
    const box = document.getElementById("about-ov"); if (!box || box.hidden) return;
    box.hidden = true; overlayOpen(false);
    if (!fromHistory && location.hash === "#about") history.back();
  }
  window.addEventListener("popstate", () => { if (location.hash === "#about") openAbout(false); else closeAbout(true); });
  if (location.hash === "#about") setTimeout(() => openAbout(false), 0);

  /* ---------- the comic and magazine racks, opened over the radio ----------
     The rack page itself runs in a frame (comics.html?embed=1), so collections and the reader work just as on the page,
     and the radio keeps playing underneath. */
  const RACKS = { "comics.html": "comics", "magazines.html": "magazines", "ads.html": "ads" };
  const RACK_TITLES = { comics: "The comic rack", magazines: "The magazine rack", ads: "Vintage ads" }, isRack = k => !!RACK_TITLES[k];
  function openRack(kind, push = true) {
    let box = document.getElementById("rack-ov");
    if (!box) {
      box = document.createElement("div"); box.id = "rack-ov"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.hidden = true;
      box.innerHTML = '<div class="rk-card"><button type="button" class="ab-close rk-close">Close</button><iframe title="" allow="fullscreen"></iframe></div>';
      document.body.appendChild(box);
      box.addEventListener("click", e => { if (e.target === box) closeRack(); });
      box.querySelector(".rk-close").addEventListener("click", () => closeRack());
      document.addEventListener("keydown", e => { if (e.key === "Escape" && !box.hidden) closeRack(); });
    }
    let fr = box.querySelector("iframe");
    if (box.dataset.kind !== kind) {
      // a fresh frame for each rack: changing a frame's address would add a step to the browser's Back history
      box.dataset.kind = kind;
      const nf = document.createElement("iframe"); nf.setAttribute("allow", "fullscreen");
      nf.title = RACK_TITLES[kind]; nf.src = kind + ".html?embed=1";
      fr.replaceWith(nf); fr = nf;
    }
    box.setAttribute("aria-label", fr.title);
    box.hidden = false; overlayOpen(true);
    if (push && location.hash !== "#" + kind) history.pushState({ rack: kind }, "", "#" + kind);
    box.querySelector(".rk-close").focus();
  }
  function closeRack(fromHistory) {
    const box = document.getElementById("rack-ov"); if (!box || box.hidden) return;
    box.hidden = true; overlayOpen(false);
    if (!fromHistory && isRack(location.hash.slice(1))) history.back();
  }
  window.addEventListener("popstate", () => { const k = location.hash.slice(1); if (isRack(k)) openRack(k, false); else closeRack(true); });
  if (isRack(location.hash.slice(1))) setTimeout(() => openRack(location.hash.slice(1), false), 0);

  /* ---------- the Sunday Funnies (art/funnies/funnies.js) ----------
     One strip a week, from the same week in 1930. It changes on Sunday by the listener's own calendar,
     and every week since the feature started stays readable in the back issues. */
  const FUNNIES = window.FUNNIES || [];
  const FN_START = new Date(2026, 10, 1);                  // the first Sunday of the feature
  function sundayOf(d) { const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() - x.getDay()); return x; }
  function funnyFor(sun) {
    // the 1930 Sunday nearest the same day of the year
    if (!FUNNIES.length) return null;
    const doy = dt => (Date.UTC(2001, dt.getMonth(), dt.getDate()) - Date.UTC(2001, 0, 1)) / 864e5;
    const want = doy(sun);
    let best = null, bd = 1e9;
    FUNNIES.forEach(f => {
      const [y, m, d] = f.date.split("-").map(Number), x = doy(new Date(y, m - 1, d));
      const dist = Math.min(Math.abs(x - want), 365 - Math.abs(x - want));
      if (dist < bd) { bd = dist; best = f; }
    });
    return best;
  }
  function funniesIssues() {
    // every Sunday from the start through this one, newest first
    const out = [], last = sundayOf(new Date());
    for (let d = new Date(last); d >= FN_START; d.setDate(d.getDate() - 7)) {
      const f = funnyFor(d); if (f) out.push({ sun: new Date(d), f });
      if (out.length > 520) break;
    }
    if (!out.length) { const f = funnyFor(last); if (f) out.push({ sun: last, f }); }
    return out;
  }
  const fnDate = iso => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" }); };
  function renderFunnies(rec) {
    const cur = funniesIssues()[0];
    if (!cur) { rec.el.hidden = true; return; }
    if (rec.funnies.key === cur.f.date) return;
    rec.funnies.key = cur.f.date;
    const img = rec.el.querySelector("img");
    img.src = cur.f.thumb; img.alt = cur.f.strip + ", " + fnDate(cur.f.date);
    rec.el.querySelector(".fn-cap").textContent = cur.f.strip + " \u00b7 " + (() => { const [y, m, d] = cur.f.date.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }); })();
    rec.el.querySelector("button").setAttribute("aria-label", "Read this week's Sunday Funnies: " + cur.f.strip + ", " + fnDate(cur.f.date));
  }
  function openFunnies(k = 0) {
    const issues = funniesIssues(); if (!issues.length) return;
    k = Math.max(0, Math.min(issues.length - 1, k));
    let box = document.getElementById("funnies-ov");
    if (!box) {
      box = document.createElement("div"); box.id = "funnies-ov"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.hidden = true;
      box.innerHTML = '<div class="fo-card"><div class="fo-head"><h2>The Sunday Funnies</h2><button type="button" class="fo-close">Close</button></div>' +
        '<div class="fo-nav"><button type="button" class="fo-prev">\u2190 Older</button><span class="fo-when"></span><button type="button" class="fo-next">Newer \u2192</button></div>' +
        '<div class="fo-page"><img alt="" draggable="false"><div class="fo-zoom"><button type="button" class="fo-out" aria-label="Zoom out">\u2212</button><button type="button" class="fo-in" aria-label="Zoom in">+</button></div></div><p class="fo-credit"></p></div>';
      document.body.appendChild(box);
      const close = () => { box.hidden = true; overlayOpen(false); };
      box.addEventListener("click", e => { if (e.target === box) close(); });
      box.querySelector(".fo-close").addEventListener("click", close);
      const pg = box.querySelector(".fo-page");
      box._zoom = zoomable(pg, pg.querySelector("img"));
      box.querySelector(".fo-in").addEventListener("click", e => { e.stopPropagation(); box._zoom.zoomBy(1.6); });
      box.querySelector(".fo-out").addEventListener("click", e => { e.stopPropagation(); box._zoom.zoomBy(1 / 1.6); });
      box.querySelectorAll(".fo-zoom button").forEach(b => b.addEventListener("pointerdown", e => e.stopPropagation()));
      box.querySelector(".fo-prev").addEventListener("click", () => openFunnies(+box.dataset.k + 1));
      box.querySelector(".fo-next").addEventListener("click", () => openFunnies(+box.dataset.k - 1));
      document.addEventListener("keydown", e => {
        if (box.hidden) return;
        if (e.key === "Escape") { box.hidden = true; overlayOpen(false); }
        else if (e.key === "ArrowLeft") openFunnies(+box.dataset.k + 1);
        else if (e.key === "ArrowRight") openFunnies(+box.dataset.k - 1);
      });
    }
    const { sun, f } = issues[k];
    box.dataset.k = k;
    const img = box.querySelector(".fo-page img");
    img.src = f.img; img.alt = f.strip + " by " + f.artist + ", from " + f.paper + ", " + fnDate(f.date);

    box.querySelector(".fo-when").textContent = k === 0 ? "This Sunday" : "Sunday, " + sun.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
    box.querySelector(".fo-prev").disabled = k >= issues.length - 1;
    box.querySelector(".fo-next").disabled = k === 0;
    const cr = box.querySelector(".fo-credit"); cr.textContent = "";
    const b = document.createElement("b"); b.textContent = f.strip; cr.appendChild(b);
    cr.appendChild(document.createTextNode(" by " + f.artist + " (" + f.syndicate + "). From " + f.paper + ", " + fnDate(f.date) + ". "));
    const a = document.createElement("a"); a.href = f.source; a.target = "_blank"; a.rel = "noopener"; a.textContent = "See the original page at the Library of Congress"; cr.appendChild(a);
    box.hidden = false; overlayOpen(true);
    if (img.complete) box._zoom.reset();
    box.querySelector(".fo-close").focus();
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
  /* "What's on": the little TV cycles through what's playing right now on each TV channel and at the drive-in,
     muted, on the same clocks as those pages. Without the TV and drive-in data it falls back to the cartoons. */
  const PREVIEW_EVERY = 30 * 1000;
  function previewSlots() {
    const T = window.THEATER; if (!T || !window.TVCH) return null;
    const slots = T.channels().map(sc => ({ kind: "tv", sc }));
    if (window.DRIVEIN) { slots.splice(Math.ceil(slots.length / 2), 0, { kind: "drivein" }); slots.unshift({ kind: "drivein" }); }
    return slots;
  }
  let PREVIEW;
  function whatsOn(ms = Date.now()) {
    if (PREVIEW === undefined) PREVIEW = previewSlots();
    if (!PREVIEW || !PREVIEW.length) {
      const n = tvAt(ms); if (!n) return null;
      return { src: n.c.src, offset: n.offset, left: n.left, title: n.c.title + (n.c.date ? ", " + n.c.date : ""), href: n.c.item, key: n.c.src };
    }
    const T = window.THEATER, slot = PREVIEW[Math.floor(ms / PREVIEW_EVERY) % PREVIEW.length];
    const turn = PREVIEW_EVERY - (ms % PREVIEW_EVERY);
    if (slot.kind === "tv") {
      const sc = slot.sc, c = sc.ch, n = T.tvAt(sc, ms), it = n.item;
      let what = it.kind === "show" ? it.series : it.kind === "ad" ? "A word from our sponsors" : "Station break";
      const tag = c.name + " \u00b7 " + what;
      return { src: it.src || "", offset: n.offset, left: Math.min(n.left, turn / 1000), tag, title: WORDS.tvGuide, href: "tv.html#" + c.id, key: c.id + (it.src || it.slate) };
    }
    const n = T.driveAt(ms); if (!n) return null;
    const it = n.item, th = T.themeOf(ms), dusk = T.duskOf(ms);
    const label = it.slate ? ({ welcome: "Welcome", intermission: "Intermission", goodnight: "Good night" }[it.slate] || "")
      : it.matinee ? "Matinee: " + it.title : it.kind === "feature" ? it.title : ({ cartoon: "A cartoon", trailer: "Coming attractions", serial: "Tonight\u2019s serial", intermission: "Intermission" }[it.kind] || it.title || "");
    const tag = "The Drive-In \u00b7 " + (label || th.name);
    return { src: it.src || "", offset: n.offset, left: Math.min(n.left, turn / 1000), tag, title: WORDS.tvGuide, href: "drive-in.html", key: "di" + (it.src || it.slate) };
  }
  // what's on every channel and at the drive-in right now, one line each, for the fading lines under the little TV
  function whatsOnList(ms = Date.now()) {
    const T = window.THEATER; if (!T || !window.TVCH) { const n = whatsOn(ms); return n ? [{ t: n.title, href: n.href || "" }] : []; }
    const out = T.channels().map(sc => {
      const n = T.tvAt(sc, ms); let show = n.item;
      for (let k = n.i; show && show.kind !== "show" && k < sc.list.length - 1; ) show = sc.list[++k];
      const what = show && show.kind === "show" ? (show.series === "Commercial" || show.series === "Cartoon" ? show.title : show.series) : "";
      return { t: WORDS.tvNowOn + " " + sc.ch.name + (what ? ": " + what : ""), href: "tv.html#" + sc.ch.id };
    });
    if (window.DRIVEIN) {
      const n = T.driveAt(ms);
      if (n) { const it = n.item; out.push({ t: WORDS.tvNowAt + (it.kind === "feature" ? it.title : T.themeOf(ms).name), href: "drive-in.html" }); }
    }
    return out;
  }
  function renderTV(rec, force) {
    const tv = rec.tv, now = whatsOn();
    if (!now) { rec.el.hidden = true; return; }
    if (tv.tag) { tv.tag.textContent = now.tag || ""; tv.tag.hidden = !now.tag; }
    tv.href = now.href || "";
    rec.el.classList.toggle("tv-link", !!(now.href && !/^https?:/.test(now.href)));
    if (tv.until > Date.now() && tv.key === now.key) return;  // waiting out a broken video
    if (document.hidden && !force) return;
    const v = tv.v;
    if (!now.src) {                                           // a station break or intermission card: no picture
      if (tv.src) { v.pause(); v.removeAttribute("src"); v.load(); tv.src = ""; }
      tv.key = now.key; tv.standby.hidden = false; return;
    }
    if (tv.src !== now.src) {
      tv.src = now.src; tv.key = now.key; tv.until = 0; tv.standby.hidden = false;
      v.src = now.src;
      v.addEventListener("loadedmetadata", () => {
        const fresh = whatsOn();
        if (fresh && fresh.src === tv.src) { try { v.currentTime = Math.min(fresh.offset, (v.duration || 1e9) - 1); } catch (e) {} }
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
      const close = () => { box.hidden = true; overlayOpen(false); };
      box.addEventListener("click", e => { if (e.target === box || e.target.tagName === "BUTTON") close(); });
      window.addEventListener("keydown", e => { if (e.key === "Escape" && !box.hidden) close(); });
    }
    box.querySelector("img").src = a.src; box.querySelector("img").alt = a.title;
    box.querySelector("span").textContent = a.title + (a.date ? ", " + a.date : "");
    box.querySelector("a").href = a.item || "https://archive.org";
    box.hidden = false; overlayOpen(true); box.querySelector("button").focus();
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

  // the visit counter: every visit counts (a visit = one browser tab session, so reloading or clicking
  // around doesn't add more). Open the site once with ?dontcountme on a device and that device is never
  // counted again; ?countme undoes it. It only ever stores a running total.
  const visits = { n: 0 };
  function countVisit() {
    const L = CONFIG.listeners || {};
    if (!L.url || !L.key || !window.fetch) return;
    const q = location.search;
    if (/[?&]dontcountme\b/.test(q)) store.set("dontCount", true);
    if (/[?&]countme\b/.test(q)) store.set("dontCount", false);
    let counted = false; try { counted = sessionStorage.getItem("otr.visitCounted") === "1"; } catch (e) {}
    const local = /^(localhost|127\.|0\.0\.0\.0|\[?::1)/.test(location.hostname) || location.protocol === "file:";
    const isNew = !counted && !store.get("dontCount", false) && !local;
    fetch(L.url + "/rest/v1/rpc/count_visit", { method: "POST",
      headers: { apikey: L.key, Authorization: "Bearer " + L.key, "Content-Type": "application/json" }, body: JSON.stringify({ is_new: isNew }) })
      .then(r => r.ok ? r.json() : 0).then(n => { if (n > 0) { visits.n = n; if (isNew) { try { sessionStorage.setItem("otr.visitCounted", "1"); } catch (e) {} } render(); } }).catch(() => {});
  }
  setTimeout(countVisit, 1500);

  // recent Ko-fi tips (only names and messages the supporter made public are ever stored)
  const tips = { list: [] };
  // Ko-fi's "send a test" button always comes from "Jo Example"; never show those
  const realTip = t => !(t && /^jo example$/i.test((t.from_name || "").trim()));
  function loadTips() {
    const L = CONFIG.listeners || {};
    if (!L.url || !L.key || !window.fetch) return;
    const since = new Date(Date.now() - 14 * 864e5).toISOString();
    fetch(L.url + "/rest/v1/tips?select=created_at,kind,from_name,message,tier_name&order=created_at.desc&limit=5&created_at=gte." + encodeURIComponent(since),
      { headers: { apikey: L.key, Authorization: "Bearer " + L.key } })
      .then(r => r.ok ? r.json() : []).then(list => { if (Array.isArray(list)) { list = list.filter(realTip); const had = JSON.stringify(tips.list); tips.list = list; if (had !== JSON.stringify(list)) freshTicker(); } }).catch(() => {});
  }
  // show new ticker news straight away instead of waiting for the current loop to finish
  function freshTicker() { els.forEach(r => { if (r.tick) r.tick.text = null; }); }
  // members: anyone whose membership was paid in the last 35 days and who made it public on Ko-fi
  const members = { list: [] };
  function loadMembers() {
    const L = CONFIG.listeners || {};
    if (!L.url || !L.key || !window.fetch) return;
    const since = new Date(Date.now() - 35 * 864e5).toISOString();
    fetch(L.url + "/rest/v1/tips?select=created_at,from_name,tier_name&kind=in.(%22New%20member%22,%22Member%22)&from_name=not.is.null&order=created_at.desc&limit=300&created_at=gte." + encodeURIComponent(since),
      { headers: { apikey: L.key, Authorization: "Bearer " + L.key } })
      .then(r => r.ok ? r.json() : []).then(list => {
        if (!Array.isArray(list)) return;
        const seen = new Set(); members.list = [];
        const had = JSON.stringify(members.list); members.list = [];
        list.filter(realTip).forEach(m => { const k = m.from_name.toLowerCase(); if (!seen.has(k)) { seen.add(k); members.list.push(m); } });
        if (had !== JSON.stringify(members.list)) freshTicker();
      }).catch(() => {});
  }
  loadTips(); setInterval(loadTips, 3 * 60 * 1000);
  loadMembers(); setInterval(loadMembers, 10 * 60 * 1000);
  // a tip just came in (Ko-fi → kofi-webhook → broadcast): thank them over the sponsors' ad.
  // The broadcast is only a nudge. What's shown is read back from the tips table, which only
  // the Ko-fi webhook can write to, so nobody can pop up a fake thank-you.
  let lastCard = Date.now() - 3 * 60 * 1000;
  function newTip() {
    const L = CONFIG.listeners || {};
    if (!L.url || !L.key || !window.fetch) return;
    setTimeout(() => fetch(L.url + "/rest/v1/tips?select=created_at,kind,from_name,message,tier_name&order=created_at.desc&limit=5",
      { headers: { apikey: L.key, Authorization: "Bearer " + L.key } })
      .then(r => r.ok ? r.json() : []).then(list => {
        if (!Array.isArray(list) || !list.length) return;
        tips.list = list.filter(realTip).filter(t => Date.parse(t.created_at) > Date.now() - 14 * 864e5);
        freshTicker(); loadMembers();
        const t = list[0], when = Date.parse(t.created_at);
        if (when > lastCard && (realTip(t) || /[?&]kofitest\b/.test(location.search))) { lastCard = when; showTipCard(t); }
      }).catch(() => {}), 800);
  }
  function showTipCard(t) {
    const member = t.kind === "New member" || t.kind === "Member";
    const name = String(t.from_name || WORDS.tipSomeone).slice(0, 60);
    // on phones the sponsors' ad is far down the page, so the card drops in at the top of the screen instead
    const cards = [];
    if (SK === SKIN.portrait) {
      let top = document.getElementById("tipcard-top");
      if (!top) {
        top = document.createElement("div"); top.id = "tipcard-top"; top.className = "tipcard"; top.hidden = true;
        top.setAttribute("role", "status");
        top.innerHTML = '<div class="tc-wrap"><button type="button" class="tc-close" aria-label="Close">\u00d7</button><div class="tc-inner"><div class="tc-kicker"></div><div class="tc-name"></div><div class="tc-msg"></div><div class="tc-thanks"></div><a class="tc-link" target="_blank" rel="noopener"></a></div></div>';
        top.addEventListener("click", e => { if (!e.target.closest("a")) top.hidden = true; });
        top.querySelector(".tc-close").addEventListener("click", e => { e.stopPropagation(); top.hidden = true; });
        document.body.appendChild(top);
      }
      cards.push(top);
    } else els.forEach(r => { if (r.ad && r.ad.card) cards.push(r.ad.card); });
    cards.forEach(card => {
      card.querySelector(".tc-kicker").textContent = member ? WORDS.cardMemberKicker : WORDS.cardKicker;
      card.querySelector(".tc-name").textContent = name;
      const msg = card.querySelector(".tc-msg"); msg.textContent = t.message ? "\u201c" + String(t.message).slice(0, 200) + "\u201d" : ""; msg.hidden = !t.message;
      card.querySelector(".tc-thanks").textContent = member ? WORDS.cardMemberThanks.replace("{tier}", t.tier_name || "").replace(/\s+/g, " ") : WORDS.cardThanks;
      const link = card.querySelector(".tc-link");
      if (CONFIG.tip) { link.href = CONFIG.tip; link.textContent = WORDS.cardLink; link.hidden = false; } else link.hidden = true;
      card.hidden = false; card.classList.remove("tc-in"); void card.offsetWidth; card.classList.add("tc-in");
      clearTimeout(card._t); card._t = setTimeout(() => { card.hidden = true; }, 20000);
    });
  }
  if (/[?&]testtip\b/.test(location.search)) setTimeout(() => showTipCard({ kind: "Donation", from_name: "Margaret", message: "Play more Lights Out, please!" }), 2500);   // preview only, on your own screen
  function tickerText(L) {
    const parts = [], show = L.show || ["listeners", "members", "tips", "announcements"], sep = L.separator || "\u00a0\u00a0\u00a0\u00a0✻\u00a0\u00a0\u00a0\u00a0";
    if (show.includes("listeners") && presence.live) {
      const total = presence.counts._total || 0;
      if (total > 1) parts.push(WORDS.listeners.replace("{n}", total));   // say nothing when you are the only one
      if (show.includes("stations")) STATIONS.forEach(st => { const n = presence.counts[st.id]; if (n) parts.push(WORDS.listenersStation.replace("{station}", st.name).replace("{n}", n)); });
    }
    // thank-yous for recent Ko-fi tips, newest first (see supabase: tips table, kofi-webhook function)
    // this month's sponsors (config.js) and the member roll
    if (show.includes("members")) {
      const sp = CONFIG.sponsors || {};
      STATIONS.forEach(st => { if (sp[st.id]) parts.push(WORDS.sponsorTicker.replace("{station}", st.name).replace("{name}", sp[st.id])); });
      if (members.list.length) {
        const names = members.list.map(m => m.from_name + (m.tier_name ? " (" + m.tier_name + ")" : ""));
        const joined = names.length > 1 ? names.slice(0, -1).join(", ") + " and " + names[names.length - 1] : names[0];
        parts.push(WORDS.memberRoll.replace("{names}", joined));
      }
    }
    if (show.includes("tips")) tips.list.filter(t => t.kind !== "Member").forEach(t => {
      const who = t.from_name || WORDS.tipSomeone;
      let line = (t.kind === "New member" ? WORDS.tipMember : WORDS.tipThanks).replace("{name}", who).replace("{tier}", t.tier_name || "");
      line = line.replace(/\s+/g, " ").replace(" ,", ",");
      if (t.message) line += WORDS.tipSaid.replace("{message}", t.message);
      parts.push(line);
    });
    // your own notes, from config.js
    if (show.includes("announcements")) (CONFIG.announcements || []).forEach(a => { if (a && String(a).trim()) parts.push(String(a).trim()); });
    if (show.includes("now")) STATIONS.forEach(st => {
      const t = at(st).track;
      parts.push(WORDS.nowOn.replace("{station}", st.name).replace("{series}", t.series || "").replace("{title}", t.title || ""));
    });
    return parts.join("\n");
  }
  // ticker messages: web addresses and the station's social handles become links (opening in a new tab)
  const TICK_LINKS = [
    [/ko-fi\.com\/thebeeskneesfm/g, "https://ko-fi.com/thebeeskneesfm"],
    [/thebeeskneesfm\.bsky\.social/g, "https://bsky.app/profile/thebeeskneesfm.bsky.social"],
    [/\bInstagram\b/g, "https://www.instagram.com/thebeeskneesfm/"],
    [/\bTikTok\b/g, "https://www.tiktok.com/@thebeeskneesfm"],
    [/\bYouTube\b/g, "https://www.youtube.com/@thebeeskneesfm"],
    [/\bBluesky\b/g, "https://bsky.app/profile/thebeeskneesfm.bsky.social"]
  ];
  function tickLinks(msg) {
    let h = String(msg).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    const marks = [];
    TICK_LINKS.forEach(([re, url]) => { h = h.replace(re, m => { marks.push('<a href="' + url + '" target="_blank" rel="noopener">' + m + "</a>"); return "\u0000" + (marks.length - 1) + "\u0000"; }); });
    return h.replace(/\u0000(\d+)\u0000/g, (_, i) => marks[i]);
  }
  // fit one ticker message: shrink a little on one line, then allow two lines; too long even then → null
  function fitTick(rec, msg) {
    const t = rec.tick, L = rec.L, sp = t.span, base = L.size || 22;
    sp.innerHTML = tickLinks(msg);
    for (const lines of [1]) {   // one line only: a message too long for the strip is split into pieces instead
      sp.style.whiteSpace = lines === 1 ? "nowrap" : "normal";
      sp.style.lineHeight = lines === 1 ? L.h + "px" : (L.h / 2) + "px";
      const top = lines === 1 ? base : Math.min(base, Math.floor(L.h / 2 / 1.1)), min = lines === 1 ? base * 0.8 : 18;
      for (let size = top; size >= min; size--) {
        sp.style.fontSize = size + "px";
        if (sp.scrollWidth <= L.w + 1 && sp.offsetHeight <= L.h + 1) return true;
      }
    }
    return false;
  }
  // break a message that won't fit into pieces at natural pauses (": ", ", and ", ", ")
  function tickPieces(rec, msg) {
    if (fitTick(rec, msg)) return [msg];
    for (const cut of [": ", ", and ", ", "]) {
      const at = [], re = new RegExp(cut.replace(/[,]/g, ","), "g"); let m;
      while ((m = re.exec(msg))) at.push(m.index);
      if (!at.length) continue;
      const mid = msg.length / 2, k = at.reduce((a, b) => Math.abs(b - mid) < Math.abs(a - mid) ? b : a);
      const a = msg.slice(0, k + cut.length - 1).trim().replace(/,$/, "") + (cut === ": " ? "" : "…"), b = (cut === ": " ? "" : "…") + msg.slice(k + cut.length).trim();
      return tickPieces(rec, a).concat(tickPieces(rec, b));
    }
    // no natural pause: break at the space nearest the middle
    const words = msg.split(" ");
    if (words.length > 1) {
      let best = 1, mid = msg.length / 2, pos = 0;
      for (let i = 1; i < words.length; i++) { pos += words[i - 1].length + 1; if (Math.abs(pos - mid) < Math.abs(best - mid)) best = pos; }
      return tickPieces(rec, msg.slice(0, best).trim() + "…").concat(tickPieces(rec, "…" + msg.slice(best).trim()));
    }
    return [msg];
  }
  function setTick(rec, s) {
    const t = rec.tick; t.text = s; t.pending = null;
    t.items = [];
    s.split("\n").filter(Boolean).forEach(msg => { t.items = t.items.concat(tickPieces(rec, msg)); });
    // carry on from the same message when the list changes (a new member, say); start at the top otherwise
    t.i = (t.i >= 0 && t.i < t.items.length ? t.i : 0) - 1;
    nextTick(rec, true);
  }
  function nextTick(rec, now) {
    const t = rec.tick; if (!t.items.length) return;
    clearTimeout(t.timer);
    const show = () => {
      t.i = (t.i + 1) % t.items.length;
      const msg = t.items[t.i];
      fitTick(rec, msg);
      t.span.classList.remove("fading");
      t.timer = setTimeout(() => nextTick(rec), 3500 + msg.length * 45);
    };
    if (now) show(); else { t.span.classList.add("fading"); t.timer = setTimeout(show, 500); }
  }
  function fitText(rec) {
    const t = rec.el.firstChild, L = rec.L;
    // a countdown like "6:01 left" changes every second but keeps its length: no need to measure again
    const tx = t.textContent || "", key = tx.length < 14 ? tx.replace(/\d/g, "0") : tx;   // short ticking text: digits don't matter
    if (rec.fitLen === key && rec.fitFont === document.fonts?.status && !state.editing) return;
    rec.fitLen = key; rec.fitFont = document.fonts?.status;
    let size = L.size || 20;
    t.style.fontSize = size + "px";
    const min = size * 0.5;
    while ((t.scrollHeight > L.h + 1 || t.scrollWidth > L.w + 1) && size > min) { size -= 1; t.style.fontSize = size + "px"; }
  }
  function fitAllText() { els.forEach(rec => { if (rec.L.type === "text") { rec.fitLen = -1; fitText(rec); } }); }
  // web fonts arrive after the first layout and change how wide text is, so fit everything again then
  if (document.fonts) { document.fonts.ready.then(fitAllText); document.fonts.addEventListener && document.fonts.addEventListener("loadingdone", fitAllText); }
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
        if (L.marquee) {
          // a slow scrolling line of what's on every channel: two copies side by side so it loops without a gap;
          // only the words change, so the scroll never jumps. Each show links to its own channel.
          const t = el.firstChild, list = whatsOnList();
          if (!t.querySelector(".mq-run")) {
            t.classList.add("marquee"); t.innerHTML = '<span class="mq-run"><span class="mq-a"></span><span class="mq-b" aria-hidden="true"></span></span>';
            t.addEventListener("click", e => { const h = e.target.closest("[data-href]"); if (h && !state.editing) { e.preventDefault(); location.href = h.dataset.href; } });
          }
          const key = list.map(x => x.t).join("|");
          if (list.length && t.dataset.s !== key) {
            t.dataset.s = key;
            const fill = box => { box.textContent = ""; list.forEach(x => { const sp = document.createElement("span"); sp.dataset.href = x.href; sp.textContent = x.t; box.appendChild(sp); box.appendChild(document.createTextNode("  \u273b  ")); }); };
            fill(t.querySelector(".mq-a")); fill(t.querySelector(".mq-b"));
            t.setAttribute("aria-label", list.map(x => x.t).join(". "));
            t.querySelector(".mq-run").style.animationDuration = Math.max(20, key.length * 0.22) + "s";
          }
        }
        else if (el.firstChild.textContent !== s) { el.firstChild.textContent = s; fitText(rec); }
        // "below": sit just under another text piece's actual words (e.g. the air date under a one- or two-line title)
        if (L.below && !state.editing) {
          const a = els.get(L.below);
          const bkey = a && a.el.firstChild ? a.el.firstChild.textContent + "|" + state.scale + "|" + a.el.firstChild.style.fontSize : "";
          if (a && a.el.firstChild && rec.belowKey !== bkey) {
            rec.belowKey = bkey;
            const t = a.el.firstChild, r = document.createRange(); r.selectNodeContents(t);
            const box = r.getBoundingClientRect(), top = a.el.getBoundingClientRect().top;
            const h = Math.min(a.L.h, box.height ? (box.bottom - top) / (state.scale || 1) : a.L.h);
            const y = Math.round(a.L.y + h + (L.gap || 4));
            if (el.style.top !== y + "px") el.style.top = y + "px";
          }
        }
        if (L.href) {
          const st = state.station;
          const href = L.href === "now.item" ? (st ? at(st).track.item || "" : "")
                     : L.href === "tv.item" ? ((whatsOn() || {}).href || "")
                     : L.href === "card.link" ? (st && st.cardLink || "")
                     : L.href === "config.tip" ? (CONFIG.tip || "") : L.href;
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
        const spin = rec.ok ? rec.img : (rec.look ? rec.look.firstElementChild || rec.look : rec.img || el);
        if (spin) spin.style.transform = `rotate(${a + (b - a) * v}deg)`;
      } else if (type === "guide") {
        renderGuide(rec);
      } else if (type === "ad") {
        renderAd(rec);
      } else if (type === "funnies") {
        renderFunnies(rec);
      } else if (type === "tv") {
        renderTV(rec);
      } else if (type === "ticker") {
        const s = tickerText(L);
        if (s !== rec.tick.text) setTick(rec, s);
      } else if (type === "card") {
        Object.entries(rec.cards).forEach(([id, h]) => { h.hidden = !(state.station && state.station.id === id); });
      }
      if (rec.frames) {
        const fps = L.fps || 8, n = rec.frames.length;
        const k = Math.floor(frameTick * fps / 10) % n;
        rec.frames.forEach((f, i) => { f.hidden = i !== k; });
      }
    });
    const ph = state.on ? state.phase : "off";
    if (document.body.dataset.phase !== ph) document.body.dataset.phase = ph;
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
        else if (a === "sleep") cycleSleep();
        else if (a === "ambience") { const any = AMB.some(n => state.amb[n] > 0); AMB.forEach(n => setAmb(n, any ? 0 : n === "fire" ? 0.5 : 0)); }
        else if (a === "recent") openRecent();
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
    else if (k === "s" || k === "S") cycleSleep();
    else if (k === "r" || k === "R") openRecent();
    else if (k === "Escape") closeOverlay();
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
      setInterval(() => { if (state.on && state.station && Math.random() < 0.5) { const R = SKIN.reactions || []; if (R.length) floatReaction(R[Math.floor(Math.random() * R.length)].id); } }, 1800);
      setTimeout(() => { presence.live = true; presence.counts = { _total: 14, chills: 6, noir: 4, laughs: 3, hotwax: 1 }; els.forEach(r => { if (r.tick) r.tick.text = null; }); render(); }, 300); return;
    }
    if (!c.url || !c.key) return;
    const go = () => {
      try {
        const client = window.supabase.createClient(c.url, c.key);
        presence.ch = client.channel(c.room || "radio", { config: { presence: { key: presence.me } } });
        presence.ch.on("presence", { event: "sync" }, presenceCount)
          .on("broadcast", { event: "react" }, m => heardReaction(m.payload))
          .on("broadcast", { event: "tip" }, () => newTip())
          .subscribe(status => { if (status === "SUBSCRIBED") { presence.last = undefined; presenceUpdate(); } });
      } catch (e) {}
    };
    if (window.supabase) return go();
    const sc = document.createElement("script");
    sc.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";
    sc.onload = go; document.head.appendChild(sc);
  }

  /* ---------- go ---------- */
  window.RADIO = { state, fx, presence, audio, trace };   // handy for poking at it in the browser console
  build();
  fit();
  startPresence();
  const fromHash = STATIONS.find(s => "#" + s.id === location.hash);
  if (fromHash) state.dial = fromHash.dial;
  state.station = stationAtDial(state.dial);
  if (!state.station) { state.dial = STATIONS[0].dial; state.station = STATIONS[0]; }
  render();
  if (/[?&#]edit\b/.test(location.href)) toggleEdit(true);

  /* Start playing as soon as the page opens. Browsers only allow sound once the visitor has tapped,
     clicked or pressed a key on the page, so if the browser says no, the radio waits quietly and the
     first tap or key press anywhere on the page starts it (on the station from the link, or Ch. 01). */
  let autoArmed = false;
  function armAutoStart() {
    if (autoArmed) return;
    autoArmed = true;
    WORDS.off = "Tap anywhere to start the radio";
    render();
    const go = e => {
      if (!autoArmed) return;
      autoArmed = false;
      ["pointerdown", "keydown", "touchend"].forEach(ev => document.removeEventListener(ev, go, true));
      if (state.on || state.editing) return;
      if (e && e.target && e.target.closest && e.target.closest("a[href], .bkc, .bkc-btn, .bkc-peek")) {   // a link or the chat: let it do its own thing
        autoArmed = true; ["pointerdown", "keydown", "touchend"].forEach(ev => document.addEventListener(ev, go, true)); return;
      }
      power(true);
    };
    ["pointerdown", "keydown", "touchend"].forEach(ev => document.addEventListener(ev, go, true));
  }
  if (!state.editing && !/[?&]noautoplay\b/.test(location.search)) {
    power(true);
    setTimeout(() => {
      // the browser refused: the sound engine is still "suspended" (it starts "running" when sound is allowed)
      const blocked = state.on && (ctx ? ctx.state !== "running" : (navigator.userActivation ? !navigator.userActivation.hasBeenActive && audio.paused : audio.paused));
      if (blocked && !autoArmed) { power(false); armAutoStart(); }
    }, 1500);
  }
})();
