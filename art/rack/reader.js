/* The comic and magazine racks: shelves of covers, and a page-turning reader.
   Pages load straight from the Internet Archive's page images; nothing is stored here. */
(function () {
  "use strict";
  var KIND = document.body.dataset.kind || "comics";
  var SHELVES = (window.RACK || []).filter(function (s) { return s.kind === KIND; });
  var ALL = [];
  SHELVES.forEach(function (s) { s.issues.forEach(function (i) { ALL.push(i); }); });
  var page = function (id, n, w) { return "https://archive.org/download/" + encodeURIComponent(id) + "/page/n" + n + "_w" + w + ".jpg"; };
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem("otr.rack." + k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem("otr.rack." + k, JSON.stringify(v)); } catch (e) {} }
  };
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; };

  /* ---- the shelves ---- */
  var main = document.getElementById("shelves");
  SHELVES.forEach(function (s) {
    var sec = document.createElement("section"); sec.className = "shelf";
    sec.innerHTML = "<h2>" + esc(s.shelf) + "</h2>";
    var row = document.createElement("div"); row.className = "row";
    s.issues.forEach(function (it) {
      var b = document.createElement("button"); b.type = "button"; b.className = "issue";
      var left = store.get(it.id);
      b.innerHTML = '<img loading="lazy" alt="" src="' + page(it.id, 0, 400) + '"><span class="cap"><b>' + esc(it.title) + "</b>" +
        esc(it.issue) + ", <i>" + esc(it.date) + "</i>" + (left > 0 ? '<br><span class="cont">Page ' + (left + 1) + "</span>" : "") + "</span>";
      b.setAttribute("aria-label", it.title + ", " + it.issue + ", " + it.date + ". Open to read.");
      // the Archive is sometimes slow to answer; try a cover again before giving up on it
      var cov = b.querySelector("img"), tries = 0;
      cov.addEventListener("error", function () { if (tries++ < 3) setTimeout(function () { cov.src = page(it.id, 0, 400) + "#r" + tries; }, 1500 * tries); });
      b.addEventListener("click", function () { open(it); });
      row.appendChild(b);
    });
    sec.appendChild(row); main.appendChild(sec);
  });

  /* ---- the reader ---- */
  var rd = document.getElementById("rd"), stage = rd.querySelector(".rd-stage"), spread = rd.querySelector(".rd-spread");
  var hint = rd.querySelector(".rd-hint");
  var cur = null, at = 0, opener = null;
  var s = 1, tx = 0, ty = 0, baseW = 0, baseH = 0;
  var two = function () { return stage.clientWidth > stage.clientHeight * 1.05 && stage.clientWidth >= 700; };
  // two-page spreads on wide screens: the cover alone, then 1-2, 3-4 ...
  function pagesAt(i) {
    if (!two() || i === 0) return [i];
    var a = i % 2 === 1 ? i : i - 1;
    return a + 1 < cur.pages ? [a, a + 1] : [a];
  }
  function step(dir) {
    if (!cur) return;
    var p = pagesAt(at), n;
    if (dir > 0) n = p[p.length - 1] + 1; else n = p[0] - 1;
    if (n < 0 || n >= cur.pages) return;
    if (dir < 0) n = pagesAt(n)[0];
    show(n);
  }
  function show(i) {
    at = Math.max(0, Math.min(cur.pages - 1, i));
    store.set(cur.id, at);
    var p = pagesAt(at);
    var h = stage.clientHeight, w = stage.clientWidth;
    var px = Math.min(1600, Math.round(Math.max(h * 0.68, w / p.length) * (window.devicePixelRatio || 1)));
    var W = px <= 600 ? 600 : px <= 900 ? 900 : px <= 1200 ? 1200 : 1600;
    spread.innerHTML = "";
    var imgs = p.map(function (n) {
      var im = new Image(); im.alt = cur.title + ", page " + (n + 1); im.src = page(cur.id, n, W);
      im.draggable = false; spread.appendChild(im); return im;
    });
    // pages are about 2:3; size the spread to fit, then correct once the real shape is known
    var ratio = 0.66;
    var fit = function () {
      var r = imgs.reduce(function (t, im) { return t + (im.naturalWidth ? im.naturalWidth / im.naturalHeight : ratio); }, 0);
      baseH = Math.min(h - 16, (w - 16) / r); baseW = baseH * r;
      spread.style.height = baseH + "px";
      s = 1; tx = (w - baseW) / 2; ty = (h - baseH) / 2; draw();
    };
    fit(); imgs.forEach(function (im) { im.addEventListener("load", fit, { once: true }); });
    // fetch the next pages ahead of time
    [p[p.length - 1] + 1, p[p.length - 1] + 2].forEach(function (n) { if (n < cur.pages) { var x = new Image(); x.src = page(cur.id, n, W); } });
    var last = p[p.length - 1];
    rd.querySelector(".rd-count").textContent = (p.length > 1 ? (p[0] + 1) + "–" + (last + 1) : (at + 1)) + " of " + cur.pages;
    rd.querySelector(".rd-prev").disabled = at === 0;
    rd.querySelector(".rd-next").disabled = last >= cur.pages - 1;
  }
  function clamp() {
    var w = stage.clientWidth, h = stage.clientHeight, sw = baseW * s, sh = baseH * s;
    tx = sw <= w ? (w - sw) / 2 : Math.min(0, Math.max(w - sw, tx));
    ty = sh <= h ? (h - sh) / 2 : Math.min(0, Math.max(h - sh, ty));
  }
  function draw() { clamp(); spread.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + s + ")"; stage.style.cursor = s > 1.01 ? "grab" : "default"; }
  function zoomAt(ns, cx, cy) {
    ns = Math.max(1, Math.min(5, ns));
    var r = stage.getBoundingClientRect(), x = cx - r.left, y = cy - r.top;
    tx = x - (x - tx) * ns / s; ty = y - (y - ty) * ns / s; s = ns; draw();
  }
  function open(it) {
    opener = document.activeElement;
    cur = it; rd.hidden = false; document.documentElement.style.overflow = "hidden";
    rd.querySelector(".rd-title").innerHTML = "<b>" + esc(it.title) + "</b> " + esc(it.issue) + ", " + esc(it.date) + " &middot; " + esc(it.publisher);
    rd.querySelector(".src").href = "https://archive.org/details/" + encodeURIComponent(it.id);
    var saved = store.get(it.id);
    show(saved > 0 && saved < it.pages ? saved : 0);
    if (location.hash !== "#" + it.id) history.pushState({ rd: it.id }, "", "#" + it.id);
    hint.textContent = "Swipe or use the arrows to turn the page"; hint.style.opacity = 1;
    setTimeout(function () { hint.style.opacity = 0; }, 2600);
    rd.querySelector(".rd-close").focus();
  }
  function close(fromHistory) {
    if (rd.hidden) return;
    rd.hidden = true; document.documentElement.style.overflow = ""; spread.innerHTML = "";
    if (!fromHistory && location.hash) history.back();
    // refresh the "Page n" tag on the cover
    var keep = cur; cur = null;
    if (keep) {
      var left = store.get(keep.id);
      document.querySelectorAll(".issue").forEach(function (b) {
        if (b.querySelector("img").src.indexOf("/" + encodeURIComponent(keep.id) + "/") < 0) return;
        var c = b.querySelector(".cont");
        if (left > 0) { if (!c) { c = document.createElement("span"); c.className = "cont"; b.querySelector(".cap").appendChild(document.createElement("br")); b.querySelector(".cap").appendChild(c); } c.textContent = "Page " + (left + 1); }
      });
    }
    if (opener && opener.focus) opener.focus();
  }
  rd.querySelector(".rd-close").addEventListener("click", function () { close(); });
  rd.querySelector(".rd-prev").addEventListener("click", function () { step(-1); });
  rd.querySelector(".rd-next").addEventListener("click", function () { step(1); });
  rd.querySelector(".rd-in").addEventListener("click", function () { var r = stage.getBoundingClientRect(); zoomAt(s * 1.6, r.left + r.width / 2, r.top + r.height / 2); });
  rd.querySelector(".rd-out").addEventListener("click", function () { var r = stage.getBoundingClientRect(); zoomAt(s / 1.6, r.left + r.width / 2, r.top + r.height / 2); });
  document.addEventListener("keydown", function (e) {
    if (rd.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); step(1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); step(-1); }
  });
  window.addEventListener("resize", function () { if (cur) show(at); });
  window.addEventListener("popstate", function () {
    var id = location.hash.slice(1), it = ALL.find(function (x) { return x.id === id; });
    if (it && rd.hidden) open(it); else if (!it) close(true);
  });

  // touch and mouse: swipe to turn when not zoomed, drag to pan when zoomed, pinch to zoom, double-tap to zoom
  var pts = new Map(), pinch = null, sx = 0, sy = 0, moved = false, lastTap = 0, t0 = 0;
  stage.addEventListener("pointerdown", function (e) {
    stage.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 1) { sx = e.clientX; sy = e.clientY; moved = false; t0 = Date.now(); }
    pinch = null;
  });
  stage.addEventListener("pointermove", function (e) {
    if (!pts.has(e.pointerId)) return;
    var prev = pts.get(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 1) {
      if (Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) > 8) moved = true;
      if (s > 1.01) { tx += e.clientX - prev.x; ty += e.clientY - prev.y; draw(); }
    } else if (pts.size === 2) {
      moved = true;
      var v = Array.from(pts.values()), d = Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y), mx = (v[0].x + v[1].x) / 2, my = (v[0].y + v[1].y) / 2;
      if (pinch) { tx += mx - pinch.mx; ty += my - pinch.my; zoomAt(s * d / pinch.d, mx, my); }
      pinch = { d: d, mx: mx, my: my };
    }
  });
  function up(e) {
    if (!pts.has(e.pointerId)) return;
    var single = pts.size === 1; pts.delete(e.pointerId); pinch = null;
    if (!single || e.type !== "pointerup") return;
    var dx = e.clientX - sx, dy = e.clientY - sy;
    if (s <= 1.01 && moved && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2 && Date.now() - t0 < 900) { step(dx < 0 ? 1 : -1); return; }
    if (!moved) {
      var now = Date.now();
      if (now - lastTap < 320) { zoomAt(s > 1.01 ? 1 : 2.5, e.clientX, e.clientY); lastTap = 0; return; }
      lastTap = now;
      // a single tap near either edge turns the page, when not zoomed in
      var r = stage.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
      if (s <= 1.01) setTimeout(function () { if (lastTap === now) { if (x > 0.78) step(1); else if (x < 0.22) step(-1); } }, 330);
    }
  }
  stage.addEventListener("pointerup", up); stage.addEventListener("pointercancel", up);
  stage.addEventListener("wheel", function (e) {
    e.preventDefault();
    if (e.ctrlKey) zoomAt(s * Math.exp(-e.deltaY / 200), e.clientX, e.clientY);
    else if (s > 1.01) { tx -= e.deltaX; ty -= e.deltaY; draw(); }
  }, { passive: false });

  // a link straight to an issue (comics.html#id) opens it
  var first = ALL.find(function (x) { return x.id === location.hash.slice(1); });
  if (first) open(first);
})();
