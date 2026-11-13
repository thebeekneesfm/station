/* Sound cleanup for the stream page (obs.html): the click/crackle remover and the hiss remover.
   This is the same code the website's radio player runs (radio.js keeps its own copy inside it as DECLICK),
   so if one changes, copy the change to the other. Loaded with ctx.audioWorklet.addModule(). */
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
  registerProcessor("dehiss", Dehiss);
