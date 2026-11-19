/* THE COMMUNITY PUZZLE, small card for the stream pages (obs.html and jukebox-obs.html)
   Every few minutes a little card takes a turn on screen: the painting, how many pieces are in, and the address.
   When a puzzle gets finished, a "Puzzle solved!" card thanks the top helpers right away.
   It only reads the puzzle (through the station's Supabase project, the same as puzzle-together.html), so it
   can't change anything. Usage: PuzzleCorner.start(cardElement, { every: ms, show: ms, first: ms }).
   The card element gets the class "on" while it should be seen; the page's own CSS places and shows it. */
(function () {
  "use strict";
  var cfg = (window.RADIO_CONFIG || {}).listeners || {};
  var H = { apikey: cfg.key, Authorization: "Bearer " + cfg.key, "Content-Type": "application/json" };
  var state = null, celebrated = {}, el = null, hideT = 0, live = null;
  // a live view of the board (the puzzle page's stream view, shrunk down), so people can see pieces moving.
  // It's made once and kept loaded, and moved into each card as it's drawn.
  function liveView() {
    if (live) return live;
    live = document.createElement("div"); live.className = "pzlive";
    var f = document.createElement("iframe"); f.src = "puzzle-together.html?stream=1&bare=1"; f.title = "Community Puzzle"; f.setAttribute("scrolling", "no");
    f.style.cssText = "position:absolute;left:0;top:0;width:1920px;height:1080px;border:0;transform-origin:0 0;pointer-events:none";
    live.style.cssText = "position:relative;overflow:hidden;flex:none;box-shadow:2px 3px 0 rgba(0,0,0,.25);background:#34503f";
    live.appendChild(f); return live;
  }
  function fit() {
    if (!live || !live.parentNode) return;
    var w = live.clientWidth, h = live.clientHeight; if (!w || !h) return;
    var k = Math.min(w / 1920, h / 1080);
    live.firstChild.style.transform = "translate(" + (w - 1920 * k) / 2 + "px," + (h - 1080 * k) / 2 + "px) scale(" + k + ")";
  }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fetchState() {
    if (!cfg.url) return Promise.resolve(null);
    // puzzle_current also deals the next painting once a finished one has had its moment
    return fetch(cfg.url + "/rest/v1/rpc/puzzle_current", { method: "POST", headers: H, body: "{}" }).then(function (r) { return r.json(); }).then(function (g) {
      g = g && g[0]; if (!g) return null;
      return fetch(cfg.url + "/rest/v1/puzzle_pieces?select=placed_by&game=eq." + g.id + "&placed=is.true", { headers: H }).then(function (r) { return r.json(); }).then(function (rows) {
        var count = {}; (rows || []).forEach(function (p) { if (p.placed_by) count[p.placed_by] = (count[p.placed_by] || 0) + 1; });
        var top = Object.keys(count).sort(function (a, b) { return count[b] - count[a]; });
        state = { id: g.id, title: g.title, artist: g.artist, img: g.img, done: !!g.done_at, doneAt: g.done_at, placed: (rows || []).length, total: g.cols * g.rows, top: top };
        return state;
      });
    }).catch(function () { return null; });
  }
  // the card is built once (so the live view inside never has to reload) and only its words change
  function frame() {
    if (el.querySelector(".pzb")) return;
    el.innerHTML = '<div class="pzh head"></div><div class="pzb">' + (opts.live ? "" : '<img alt="" referrerpolicy="no-referrer">') + '<div class="pzt"></div></div>';
    if (opts.live) el.querySelector(".pzb").insertBefore(liveView(), el.querySelector(".pzt"));
  }
  function paint(solved) {
    var s = state, pct = Math.round(100 * s.placed / s.total);
    frame();
    el.querySelector(".pzh").textContent = solved ? "Puzzle solved!" : "Community Puzzle";
    var im = el.querySelector(".pzb img");
    if (im) { im.src = "art/puzzle/paint/" + s.img + "-small.jpg"; im.className = solved ? "" : "dim"; }
    el.querySelector(".pzt").innerHTML = '<div class="pzn">' + esc(s.title) + '</div>' +
      (solved ? '<div class="pzs">' + (s.top.length ? "Thanks, " + esc(s.top.slice(0, 3).join(", ")) + " and everyone who helped!" : "Thanks to everyone who helped!") + '</div>'
              : '<div class="pzs">' + s.placed + " of " + s.total + ' pieces in</div><div class="pzm"><i style="width:' + pct + '%"></i></div>') +
      '<div class="pzu">Help at <b>thebeesknees.fm/puzzle-together</b></div>';
  }
  function show(ms, solved) {
    if (!state) return;
    paint(solved); el.classList.add("on"); setTimeout(fit, 50);
    clearTimeout(hideT); hideT = setTimeout(function () { el.classList.remove("on"); }, ms);
  }
  function check() {
    fetchState().then(function (s) {
      if (!s) return;
      // a puzzle finished in the last 10 minutes that this page hasn't celebrated yet: say so now
      if (s.done && !celebrated[s.id] && Date.now() - Date.parse(s.doneAt) < 10 * 60000) { celebrated[s.id] = 1; show(40000, true); }
    });
  }
  var opts = {};
  window.PuzzleCorner = {
    fit: function () { fit(); },   // re-fit the live view when the page moves the card (Radio Night makes it big)
    start: function (card, o) {
      el = card; o = o || {}; opts = o;
      if (o.live) frame();   // start loading the live view right away, while the card is hidden
      if (o.always) {
        // a box of its own that's always up: just keep its numbers fresh
        var keep = function () { fetchState().then(function (s) { if (!s) return; paint(s.done); el.classList.add("on"); setTimeout(fit, 50); }); };
        keep(); setInterval(keep, 30000);
        if (/[?&]test=1/.test(location.search)) window.bkPuzzle = { show: show, check: check, state: function () { return state; }, fetch: fetchState, paint: paint };
        return;
      }
      var every = o.every || 180000, len = o.show || 20000;
      check(); setInterval(check, 60000);
      setTimeout(function () {
        var turn = function () { fetchState().then(function (s) { if (s && !s.done) show(len, false); }); };
        turn(); setInterval(turn, every);
      }, o.first || 30000);
      if (/[?&]test=1/.test(location.search)) window.bkPuzzle = { show: show, check: check, state: function () { return state; }, fetch: fetchState };
    }
  };
})();
