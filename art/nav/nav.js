/* The site menu, the same on every page.
   Change the groups and links here and every page (and the radio) follows.
   A link written "config.tip" uses the tip page from config.js. */
/* Light mode for TV browsers (Fire TV's Silk, Android TV, smart TVs) and other slow devices:
   no sound-cleaning engine, no extra videos, no animations or heavy effects, and clear focus
   outlines for a remote. Add ?lite=1 to any address to turn it on, ?lite=0 to turn it off. */
(function () {
  var KEY = "otr.lite", q = location.search, on = null;
  try { if (/[?&]lite=1/.test(q)) localStorage.setItem(KEY, "1"); else if (/[?&]lite=0/.test(q)) localStorage.setItem(KEY, "0"); on = localStorage.getItem(KEY); } catch (e) {}
  var tv = /Silk|AFT[A-Z]|Android TV|GoogleTV|SMART-TV|SmartTV|Tizen|Web0S|webOS|CrKey|BRAVIA|AppleTV|Roku|HbbTV|NetCast|Viera|AQUOS/i.test(navigator.userAgent);
  window.BK_LITE = on === "1" || (on !== "0" && tv);
  if (!window.BK_LITE) return;
  document.documentElement.classList.add("lite");
  var css = document.createElement("style");
  css.textContent = [
    ".lite *,.lite *::before,.lite *::after{animation:none!important;transition:none!important;filter:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;box-shadow:none!important}",
    ".lite .paper,.lite .mast,.lite [style*='mask']{-webkit-mask:none!important;mask:none!important}",
    ".lite video.static,.lite [data-id='ambience']{display:none!important}",
    ".lite :focus{outline:5px solid #e3a92f!important;outline-offset:3px!important}"
  ].join("\n");
  document.head.appendChild(css);
  var stop = function () { document.querySelectorAll("video.static").forEach(function (v) { v.pause(); v.removeAttribute("src"); v.load(); }); document.querySelectorAll("video[loop]").forEach(function (v) { v.autoplay = false; v.pause(); }); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", stop); else stop();
  new MutationObserver(function (m) { m.forEach(function (r) { r.addedNodes.forEach(function (n) { if (n.querySelectorAll) { n.querySelectorAll("video.static").forEach(function (v) { v.pause(); v.removeAttribute("src"); }); n.querySelectorAll("video[loop]").forEach(function (v) { v.autoplay = false; v.pause(); }); } if (n.tagName === "VIDEO" && n.loop) { n.autoplay = false; n.pause(); } }); }); }).observe(document.documentElement, { childList: true, subtree: true });
})();

(function () {
  "use strict";
  var MENU = [
    { label: "Listen", href: "index.html" },
    { label: "Watch", items: [["TV", "tv.html"], ["Drive-In", "drive-in.html"], ["YouTube", "youtube.html"]] },
    { label: "Read", items: [["Comics", "comics.html"], ["Magazines", "magazines.html"], ["Vintage Ads", "ads.html"]] },
    { label: "Play", items: [["Daily Puzzle", "puzzles.html"], ["Send a Card", "postcard.html"]] },
    { label: "Shop", href: "shop.html" },
    { label: "Support", items: [["Become a member", "config.tip"], ["Sign the Guest Book", "guestbook.html"], ["Donate to the Internet Archive", "https://archive.org/donate"]] },
    { label: "About", href: "about.html" }
  ];

  var CSS = [
    ".bkn{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;align-items:center;gap:4px 6px;font-family:'BK Serif',Georgia,serif}",
    ".bkn>li{position:relative}",
    /* the paper header on the other pages is cut out with a mask, which would also cut off the drop-downs */
    ".mast:has(.bkn){-webkit-mask:none!important;mask:none!important;overflow:visible!important;position:relative;z-index:20}",
    ".bkn a,.bkn button{font:500 21px/1.2 'BK Serif',Georgia,serif;color:#1f1b17;background:none;border:0;padding:8px 10px;cursor:pointer;text-decoration:none;white-space:nowrap;display:inline-flex;align-items:center;gap:6px;min-height:44px;box-sizing:border-box}",
    ".bkn>li>a:hover,.bkn>li>button:hover,.bkn>li>button[aria-expanded=true]{color:#c8321f}",
    ".bkn .caret{font-size:.6em;transition:transform .15s}",
    ".bkn button[aria-expanded=true] .caret{transform:rotate(180deg)}",
    ".bkn .cur>a,.bkn .cur>button{color:#c8321f;font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:6px}",
    ".bkn-sub{list-style:none;margin:0;padding:6px 0;position:absolute;left:0;top:100%;z-index:50;min-width:210px;background:#f3ead2;box-shadow:0 3px 0 rgba(0,0,0,.25),0 12px 26px rgba(0,0,0,.3);border-top:3px solid #c8321f}",
    ".bkn-sub[hidden]{display:none}",
    ".bkn-sub::before{content:\"\";position:absolute;left:-14px;right:-14px;top:-16px;height:16px}",   /* an invisible bridge so the mouse never falls in a gap on the way down */
    ".bkn-sub::after{content:\"\";position:absolute;left:-14px;right:-14px;bottom:-14px;height:14px}",
    ".bkn>li:nth-last-child(-n+2) .bkn-sub{left:auto;right:0}",   /* menus near the right edge open leftward so they stay on screen */
    ".bkn-sub a{display:flex;width:100%;padding:9px 16px;font-size:19px}",
    ".bkn-sub a:hover,.bkn-sub a:focus-visible{background:#e3d6b4;color:#c8321f}",
    ".bkn-sub a[aria-current]{color:#c8321f;font-weight:700}",
    ".bkn a:focus-visible,.bkn button:focus-visible,.bkm-btn:focus-visible,.bkm a:focus-visible,.bkm-x:focus-visible{outline:2px solid #e3a92f;outline-offset:2px}",
    /* phones: one Menu button that opens the whole list */
    ".bkm-btn{font:700 21px/1 'BK Serif',Georgia,serif;color:#fff8ec;background:#c8321f;border:0;padding:0 16px;min-height:44px;cursor:pointer;display:inline-flex;align-items:center;gap:8px}",
    ".bkm-btn .bars{display:inline-grid;gap:3px}.bkm-btn .bars i{display:block;width:16px;height:2px;background:currentColor}",
    ".bkm{position:fixed;inset:0;z-index:2000;background:rgba(15,10,6,.6);display:flex;justify-content:flex-end}",
    ".bkm[hidden]{display:none}",
    ".bkm-panel{width:min(360px,88vw);height:100%;overflow:auto;background:#efe6cd;box-shadow:-6px 0 24px rgba(0,0,0,.4);padding:14px 20px 30px;box-sizing:border-box;font-family:'BK Serif',Georgia,serif;color:#1f1b17;padding-top:max(14px,env(safe-area-inset-top,0px))}",
    ".bkm-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}",
    ".bkm-top b{font:700 30px/1 'BK Script','BK Serif',Georgia,serif}",
    ".bkm-x{font:700 28px/1 'BK Serif',Georgia,serif;width:46px;height:46px;border:0;background:#e3d6b4;color:#1f1b17;cursor:pointer}",
    ".bkm h4{margin:16px 0 2px;font:700 15px/1.2 'BK Serif',Georgia,serif;text-transform:uppercase;letter-spacing:.12em;color:#8a7c68}",
    ".bkm ul{list-style:none;margin:0;padding:0}",
    ".bkm a{display:flex;align-items:center;min-height:44px;font-size:22px;color:#1f1b17;text-decoration:none;border-bottom:1px dashed rgba(31,27,23,.2)}",
    ".bkm a[aria-current]{color:#c8321f;font-weight:700}",
    ".bkm .solo{font-weight:700}"
  ].join("\n");

  function injectCss() {
    if (document.getElementById("bkn-css")) return;
    var s = document.createElement("style"); s.id = "bkn-css"; s.textContent = CSS;
    document.head.appendChild(s);
  }
  function resolve(href) {
    if (href === "config.tip") return (window.RADIO_CONFIG && window.RADIO_CONFIG.tip) || "https://ko-fi.com/thebeeskneesfm";
    return href;
  }
  function here() {
    var p = location.pathname.split("/").pop() || "index.html";
    return p === "" ? "index.html" : p;
  }
  function external(href) { return /^https?:/i.test(href); }
  function makeLink(text, href, cur) {
    var a = document.createElement("a");
    var h = resolve(href);
    a.href = h; a.textContent = text;
    if (external(h)) { a.target = "_blank"; a.rel = "noopener"; }
    if (h === cur) a.setAttribute("aria-current", "page");
    a.addEventListener("click", function (e) {
      // on the radio, the station's own pages open over the radio so the music keeps playing
      if (window.BK_NAV_OPEN && !e.metaKey && !e.ctrlKey && !e.shiftKey && !external(h)) {
        if (window.BK_NAV_OPEN(h)) { e.preventDefault(); closeAll(); closePanel(); }
      }
    });
    return a;
  }
  var openSubs = [];
  function closeAll(except) {
    openSubs.forEach(function (o) { if (o !== except) { o.sub.hidden = true; o.btn.setAttribute("aria-expanded", "false"); } });
  }
  document.addEventListener("click", function (e) { if (!e.target.closest || !e.target.closest(".bkn")) closeAll(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeAll(); closePanel(); } });

  function buildBar(cur) {
    var ul = document.createElement("ul"); ul.className = "bkn";
    MENU.forEach(function (g, gi) {
      var li = document.createElement("li");
      if (g.href) {
        li.appendChild(makeLink(g.label, g.href, cur));
        if (resolve(g.href) === cur) li.className = "cur";
      } else {
        var btn = document.createElement("button");
        btn.type = "button"; btn.setAttribute("aria-expanded", "false");
        var id = "bkn-sub-" + gi + "-" + Math.random().toString(36).slice(2, 6);
        btn.setAttribute("aria-controls", id);
        btn.innerHTML = g.label + ' <span class="caret" aria-hidden="true">▾</span>';
        var sub = document.createElement("ul"); sub.className = "bkn-sub"; sub.id = id; sub.hidden = true;
        g.items.forEach(function (it) {
          var l = document.createElement("li"); l.appendChild(makeLink(it[0], it[1], cur)); sub.appendChild(l);
          if (resolve(it[1]) === cur) li.className = "cur";
        });
        var o = { btn: btn, sub: sub }; openSubs.push(o);
        var show = function (on) { closeAll(o); sub.hidden = !on; btn.setAttribute("aria-expanded", on ? "true" : "false"); };
        // with a mouse the menu is already open from pointing at it, so a click keeps it open instead of closing it
        var t = 0, viaMouse = false;
        btn.addEventListener("pointerdown", function (e) { viaMouse = e.pointerType === "mouse"; });
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          if (viaMouse && e.detail > 0) { clearTimeout(t); show(true); } else show(sub.hidden);
          viaMouse = false;
        });
        // a mouse can just point at the menu; touch and keyboard use the click
        li.addEventListener("pointerenter", function (e) { if (e.pointerType !== "touch") { clearTimeout(t); show(true); } });
        // any movement over the menu or its list keeps it open, even if the browser sent a stray "left" a moment before
        li.addEventListener("pointermove", function (e) { if (e.pointerType !== "touch") { clearTimeout(t); if (sub.hidden) show(true); } });
        li.addEventListener("pointerleave", function (e) {
          if (e.pointerType === "touch") return;
          clearTimeout(t);
          t = setTimeout(function () { if (!li.matches(":hover")) show(false); }, 900);
        });
        sub.addEventListener("keydown", function (e) { if (e.key === "Escape") { show(false); btn.focus(); } });
        li.appendChild(btn); li.appendChild(sub);
      }
      ul.appendChild(li);
    });
    return ul;
  }

  var panel = null, panelFrom = null;
  function closePanel() {
    if (!panel || panel.hidden) return;
    panel.hidden = true; document.documentElement.style.overflow = "";
    if (panelFrom) panelFrom.focus();
  }
  function buildPanel(cur) {
    if (panel) return panel;
    panel = document.createElement("div"); panel.className = "bkm"; panel.hidden = true;
    panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.setAttribute("aria-label", "Menu");
    var box = document.createElement("div"); box.className = "bkm-panel";
    box.innerHTML = '<div class="bkm-top"><b>The Bee’s Knees</b><button type="button" class="bkm-x" aria-label="Close menu">&times;</button></div>';
    var solo = document.createElement("ul");
    MENU.forEach(function (g) {
      if (g.href) {
        var li = document.createElement("li"); var a = makeLink(g.label, g.href, cur); a.className = "solo"; li.appendChild(a); solo.appendChild(li);
        return;
      }
      if (solo.children.length) { box.appendChild(solo); solo = document.createElement("ul"); }
      var h = document.createElement("h4"); h.textContent = g.label; box.appendChild(h);
      var ul = document.createElement("ul");
      g.items.forEach(function (it) { var li = document.createElement("li"); li.appendChild(makeLink(it[0], it[1], cur)); ul.appendChild(li); });
      box.appendChild(ul);
    });
    if (solo.children.length) box.appendChild(solo);
    panel.appendChild(box);
    panel.addEventListener("click", function (e) { if (e.target === panel || e.target.closest(".bkm-x")) closePanel(); });
    document.body.appendChild(panel);
    return panel;
  }
  function buildButton(cur) {
    var b = document.createElement("button"); b.type = "button"; b.className = "bkm-btn";
    b.setAttribute("aria-haspopup", "dialog");
    b.innerHTML = '<span class="bars" aria-hidden="true"><i></i><i></i><i></i></span>Menu';
    b.addEventListener("click", function () {
      var p = buildPanel(cur); panelFrom = b; p.hidden = false; document.documentElement.style.overflow = "hidden";
      var x = p.querySelector(".bkm-x"); if (x) x.focus();
    });
    return b;
  }

  /* mount(el, {mode: "bar" | "button" | "auto"}): "auto" shows the bar on wide screens and the Menu button on phones */
  function mount(el, opts) {
    injectCss();
    opts = opts || {};
    var cur = opts.current || here();
    var mode = opts.mode || "auto";
    el.innerHTML = "";
    var bar = buildBar(cur), btn = buildButton(cur);
    el.appendChild(bar); el.appendChild(btn);
    function fit() {
      var small = mode === "button" || (mode === "auto" && window.matchMedia("(max-width: 760px)").matches);
      bar.style.display = small ? "none" : "";
      btn.style.display = small ? "" : "none";
    }
    fit();
    if (mode === "auto") window.addEventListener("resize", fit);
  }
  window.BKNav = { mount: mount, menu: MENU };

  /* the station's other pages: fill in every <nav class="links"> */
  function auto() {
    document.querySelectorAll("nav.links[aria-label='Pages']").forEach(function (n) { mount(n, { mode: "auto" }); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", auto); else auto();
})();
