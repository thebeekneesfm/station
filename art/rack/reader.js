/* The comic and magazine racks: shelves of covers, and a page-turning reader.
   Pages load straight from the Internet Archive's page images; nothing is stored here. */
(function () {
  "use strict";
  var KIND = document.body.dataset.kind || "comics";
  var SHELVES = (window.RACK || []).filter(function (s) { return s.kind === KIND; });
  var ALL = [];
  SHELVES.forEach(function (s) { s.issues.forEach(function (i) { ALL.push(i); }); });
  var page = function (id, n, w) { return "https://archive.org/download/" + encodeURIComponent(id) + "/page/n" + n + "_w" + w + ".jpg"; };
  // pages listed in an issue's "hide" (page numbers counted from 0, as on archive.org) are left out with a note
  var HIDDEN = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="660" height="990" viewBox="0 0 660 990"><rect width="660" height="990" fill="#efe6d0"/><rect x="24" y="24" width="612" height="942" fill="none" stroke="#b9a882" stroke-width="3"/><text x="330" y="470" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#4a3f33">This page isn\u2019t shown here.</text><text x="330" y="525" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="24" fill="#6b5e4c">It had racist or adult content.</text></svg>');
  var hidden = function (it, n) { return !!(it.hide && it.hide.indexOf(n) >= 0); };
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem("otr.rack." + k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem("otr.rack." + k, JSON.stringify(v)); } catch (e) {} }
  };
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; };

  /* ---- the collections ---- */
  // the rack opens on a grid of collections; tap one to see its issues (rack.html#shelf-name)
  var main = document.getElementById("shelves");
  var slug = function (t) { return "shelf-" + t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); };
  var year = function (it) { var m = /(1[89]\d\d)/.exec(it.date || ""); return m ? +m[1] : null; };
  var span = function (iss) {
    var ys = iss.map(year).filter(Boolean); if (!ys.length) return "";
    var lo = Math.min.apply(null, ys), hi = Math.max.apply(null, ys);
    return lo === hi ? "" + lo : lo + "\u2013" + hi;
  };
  SHELVES.forEach(function (s) { s.slug = slug(s.shelf); });
  function cover(it, img) {
    // the Archive is sometimes slow to answer; try a cover again before giving up on it
    var tries = 0;
    img.addEventListener("error", function () { if (tries++ < 3) setTimeout(function () { img.src = page(it.id, 0, 400) + "#r" + tries; }, 1500 * tries); });
    img.src = page(it.id, 0, 400);
  }
  function issueButton(it) {
    var b = document.createElement("button"); b.type = "button"; b.className = "issue"; b.dataset.id = it.id;
    var left = store.get(it.id);
    b.innerHTML = '<img loading="lazy" alt=""><span class="cap"><b>' + esc(it.title) + "</b>" +
      (it.issue ? esc(it.issue) + ", " : "") + "<i>" + esc(it.date) + "</i>" + (left > 0 ? '<br><span class="cont">Page ' + (left + 1) + "</span>" : "") + "</span>";
    b.setAttribute("aria-label", [it.title, it.issue, it.date].filter(Boolean).join(", ") + ". Open to read.");
    cover(it, b.querySelector("img"));
    b.addEventListener("click", function () { open(it); });
    return b;
  }
  function row(issues) {
    var r = document.createElement("div"); r.className = "row";
    issues.forEach(function (it) { r.appendChild(issueButton(it)); });
    return r;
  }
  function home() {
    main.innerHTML = "";
    // issues someone has started come first, so they can pick up where they left off
    var going = ALL.filter(function (it) { var n = store.get(it.id); return n > 0 && n < it.pages - 1; });
    if (going.length) {
      var g = document.createElement("section"); g.className = "shelf";
      g.innerHTML = "<h2>Pick up where you left off</h2>";
      g.appendChild(row(going.slice(0, 6))); main.appendChild(g);
    }
    var grid = document.createElement("section"); grid.className = "collections"; grid.setAttribute("aria-label", "Collections");
    SHELVES.forEach(function (s) {
      var c = document.createElement("a"); c.className = "col-card"; c.href = "#" + s.slug;
      var n = s.issues.length, yrs = span(s.issues);
      c.innerHTML = '<span class="stack" aria-hidden="true"></span><span class="col-name">' + esc(s.shelf) + '</span><span class="col-meta">' +
        n + (n === 1 ? " issue" : " issues") + (yrs ? " \u00b7 " + yrs : "") + "</span>";
      var st = c.querySelector(".stack");
      // fan out three covers, spread across the collection so the stack shows some variety
      var pick = n <= 3 ? s.issues.slice() : [s.issues[0], s.issues[Math.floor(n / 2)], s.issues[n - 1]];
      pick.reverse().forEach(function (it) { var im = document.createElement("img"); im.alt = ""; im.loading = "lazy"; cover(it, im); st.appendChild(im); });
      grid.appendChild(c);
    });
    main.appendChild(grid);
    document.title = BASE_TITLE;
  }
  function shelfView(s, dec) {
    main.innerHTML = "";
    var sec = document.createElement("section"); sec.className = "shelf";
    var yrs = span(s.issues);
    sec.innerHTML = '<div class="shelf-top"><a class="to-all" href="#">&larr; All collections</a></div><h2>' + esc(s.shelf) + "</h2>" +
      '<p class="shelf-meta">' + s.issues.length + (s.issues.length === 1 ? " issue" : " issues") + (yrs ? " from " + yrs : "") + "</p>";
    sec.querySelector(".to-all").addEventListener("click", function (e) { e.preventDefault(); go(""); });
    // big collections get decade buttons so the shelf isn't one long scroll
    var decs = [];
    s.issues.forEach(function (it) { var y = year(it); var d = y ? Math.floor(y / 10) * 10 : null; if (d && decs.indexOf(d) < 0) decs.push(d); });
    decs.sort();
    var shown = s.issues;
    if (s.issues.length > 12 && decs.length > 1) {
      var chips = document.createElement("div"); chips.className = "chips"; chips.setAttribute("role", "group"); chips.setAttribute("aria-label", "Show issues from");
      [null].concat(decs).forEach(function (d) {
        var b = document.createElement("button"); b.type = "button"; b.textContent = d ? d + "s" : "All";
        b.setAttribute("aria-pressed", String((dec || null) === d));
        b.addEventListener("click", function () { go(s.slug + (d ? "-" + d + "s" : ""), true); });
        chips.appendChild(b);
      });
      sec.appendChild(chips);
      if (dec) shown = s.issues.filter(function (it) { var y = year(it); return y && Math.floor(y / 10) * 10 === dec; });
    }
    sec.appendChild(row(shown));
    main.appendChild(sec);
    document.title = s.shelf + " \u00b7 " + BASE_TITLE;
  }
  var BASE_TITLE = document.title;
  // what the address says decides the view: #shelf-name, #shelf-name-1950s, or an issue id (its shelf, with the reader open)
  function route() {
    var h = decodeURIComponent(location.hash.slice(1));
    var it = ALL.find(function (x) { return x.id === h; });
    if (it) { var home_ = SHELVES.find(function (s) { return s.issues.indexOf(it) >= 0; }); if (!main.dataset.view || main.dataset.view === "home") { shelfView(home_); main.dataset.view = home_.slug; } return it; }
    var m = /^(shelf-.+?)(?:-(\d{4})s)?$/.exec(h), s = m && SHELVES.find(function (x) { return x.slug === m[1]; });
    if (s) { if (main.dataset.view !== h) { shelfView(s, m[2] ? +m[2] : null); main.dataset.view = h; } }
    else if (main.dataset.view !== "home") { home(); main.dataset.view = "home"; }
    return null;
  }
  function go(h, replace) {
    var url = h ? "#" + h : location.pathname + location.search;
    if (replace) history.replaceState(null, "", url); else history.pushState(null, "", url);
    route();
    var top = document.querySelector(".intro"); if (top && !replace) window.scrollTo(0, top.offsetTop + top.offsetHeight - 10);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a.col-card");
    if (!a) return; e.preventDefault(); go(a.getAttribute("href").slice(1));
  });

  /* ---- the reader ---- */
  var rd = document.getElementById("rd"), stage = rd.querySelector(".rd-stage"), spread = rd.querySelector(".rd-spread");
  var hint = rd.querySelector(".rd-hint");
  var cur = null, at = 0, opener = null, pushed = false;
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
      var im = new Image(); im.alt = hidden(cur, n) ? "Page not shown" : cur.title + ", page " + (n + 1); im.src = hidden(cur, n) ? HIDDEN : page(cur.id, n, W);
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
    [p[p.length - 1] + 1, p[p.length - 1] + 2].forEach(function (n) { if (n < cur.pages && !hidden(cur, n)) { var x = new Image(); x.src = page(cur.id, n, W); } });
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
    rd.querySelector(".rd-title").innerHTML = "<b>" + esc(it.title) + "</b> " + (it.issue ? esc(it.issue) + ", " : "") + esc(it.date) + " &middot; " + esc(it.publisher);
    rd.querySelector(".src").href = "https://archive.org/details/" + encodeURIComponent(it.id);
    var saved = store.get(it.id);
    show(saved > 0 && saved < it.pages ? saved : 0);
    pushed = false;
    if (location.hash !== "#" + it.id) { history.pushState({ rd: it.id }, "", "#" + it.id); pushed = true; }
    hint.textContent = "Swipe or use the arrows to turn the page"; hint.style.opacity = 1;
    setTimeout(function () { hint.style.opacity = 0; }, 2600);
    rd.querySelector(".rd-close").focus();
  }
  function close(fromHistory) {
    if (rd.hidden) return;
    rd.hidden = true; document.documentElement.style.overflow = ""; spread.innerHTML = "";
    if (!fromHistory && location.hash) {
      // came straight in on an issue link: step back to its collection instead of leaving the site
      if (pushed) history.back();
      else { var sh = SHELVES.find(function (x) { return x.issues.indexOf(cur) >= 0; }); history.replaceState(null, "", sh ? "#" + sh.slug : location.pathname); route(); }
    }
    // refresh the "Page n" tag on the cover
    var keep = cur; cur = null;
    if (keep) {
      var left = store.get(keep.id);
      document.querySelectorAll(".issue").forEach(function (b) {
        if (b.dataset.id !== keep.id) return;
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
    if (it && rd.hidden) { route(); open(it); }
    else if (!it) { close(true); route(); }
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

  // a link straight to an issue (comics.html#id) opens it over its collection
  var first = route();
  if (first) open(first);
})();
