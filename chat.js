/* The Bee's Knees chat: one room shared by the radio, TV and Drive-In pages.
   A "Chat" button sits in the corner; the panel only connects when someone opens it, so people
   who are just watching or listening don't use up the free plan's live connections.
   Messages go through the "chat" edge function (filters, rate limits); they're read from the
   chat table and arrive live over Supabase Realtime. Kate hides messages on guestbook-admin.html.
   Each page can say where the person is with window.BK_CHAT_PLACE = function () { return "on TV ch 4"; }. */
(function () {
  var C = (window.RADIO_CONFIG || {}).listeners || {};
  if (!C.url || !C.key || !window.fetch) return;
  var FN = C.url + "/functions/v1/chat", HDR = { apikey: C.key, Authorization: "Bearer " + C.key };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var css = document.createElement("style");
  css.textContent = [
    ".bkc-btn{position:fixed;z-index:30;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(var(--bkc-bottom,16px) + env(safe-area-inset-bottom,0px));",
    "font:700 18px/1 'BK Serif',Georgia,serif;background:#c8321f;color:#f4ead2;border:0;padding:13px 20px;cursor:pointer;box-shadow:0 3px 0 rgba(0,0,0,.35),0 8px 18px rgba(0,0,0,.3)}",
    ".bkc-btn:hover{filter:brightness(1.1)}.bkc-btn:focus-visible,.bkc :focus-visible{outline:3px solid #e8b43a;outline-offset:2px}",
    ".bkc{position:fixed;z-index:31;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(var(--bkc-bottom,16px) + env(safe-area-inset-bottom,0px));",
    "width:min(380px,calc(100vw - 32px));height:min(560px,calc(100dvh - 120px));display:grid;grid-template-rows:auto minmax(0,1fr) auto;",
    "background:#efe4c8 url('art/newsprint.jpg') 0 0/640px 640px;color:#1f1b17;box-shadow:0 0 0 2px #1f1b17,0 14px 40px rgba(0,0,0,.5);font:400 17px/1.35 'BK Serif',Georgia,serif}",
    ".bkc[hidden]{display:none}",
    ".bkc-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px 10px 16px;background:#1f1b17;color:#f4ead2}",
    ".bkc-title{font:400 22px/1 'BK Head','BK Serif',Georgia,serif;text-transform:uppercase;letter-spacing:.03em;color:#e8b43a}",
    ".bkc-x{background:none;border:0;color:#f4ead2;font:700 26px/1 Georgia,serif;cursor:pointer;padding:2px 8px}",
    ".bkc-log{overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:9px;overscroll-behavior:contain}",
    ".bkc-m{overflow-wrap:anywhere}.bkc-n{font-weight:700;color:#a3291a}.bkc-w{font-style:italic;color:#5b5148;font-size:14px}",
    ".bkc-t{font-size:13px;color:#7a6f63;margin-left:4px}",
    ".bkc-note{font-style:italic;color:#5b5148;text-align:center;margin:auto 0;padding:20px 6px}",
    ".bkc-form{display:grid;gap:6px;padding:10px 12px 12px;border-top:1.5px solid rgba(31,27,23,.25)}",
    ".bkc-row{display:flex;gap:6px}.bkc input{font:inherit;min-width:0;flex:1;padding:9px 10px;border:1.5px solid #1f1b17;background:#fbf6e8;color:#1f1b17}",
    ".bkc-send{font:700 17px/1 'BK Serif',Georgia,serif;background:#1f1b17;color:#f4ead2;border:0;padding:0 16px;cursor:pointer}",
    ".bkc-me{font-size:14px;color:#5b5148}.bkc-me button{font:inherit;background:none;border:0;padding:0;color:#a3291a;text-decoration:underline;cursor:pointer}",
    ".bkc-err{font-size:14px;color:#a3291a;min-height:0}.bkc-err:empty{display:none}",
    ".bkc-name-row{display:grid;gap:6px}.bkc-name-row[hidden]{display:none}.bkc-cols{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-size:14px;color:#5b5148}",
    ".bkc-col{width:24px;height:24px;border-radius:50%;border:2px solid #fbf6e8;box-shadow:0 0 0 1.5px rgba(31,27,23,.35);cursor:pointer;padding:0}",
    ".bkc-col[aria-checked=true]{box-shadow:0 0 0 2.5px #1f1b17}",
    ".bkc-hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}",
    ".bkc-peek{position:fixed;z-index:30;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(var(--bkc-bottom,16px) + env(safe-area-inset-bottom,0px) + 58px);",
    "max-width:min(300px,calc(100vw - 32px));padding:10px 14px;background:#efe4c8 url('art/newsprint.jpg') 0 0/640px 640px;color:#1f1b17;cursor:pointer;",
    "font:400 16px/1.3 'BK Serif',Georgia,serif;box-shadow:0 0 0 2px #1f1b17,0 8px 20px rgba(0,0,0,.4);transition:opacity .5s,transform .5s;overflow-wrap:anywhere}",
    ".bkc-peek b{color:#a3291a}.bkc-peek.off{opacity:0;transform:translateY(8px);pointer-events:none}.bkc-peek[hidden]{display:none}",
    /* docked: on the TV and Drive-In pages on a wide screen, the chat is a column down the right and the page moves over */
    "html.bkc-docked body{margin-right:400px}",
    "html.bkc-docked .bkc{top:0;bottom:0;right:0;width:400px;height:auto;box-shadow:-2px 0 0 #1f1b17,-10px 0 30px rgba(0,0,0,.4);padding-top:env(safe-area-inset-top,0px)}",
    "@media (prefers-reduced-motion:reduce){.bkc-peek{transition:none}}",
    "@media (max-width:520px){.bkc{right:0;left:0;bottom:0;width:auto;height:min(70dvh,560px)}}",
    "@media (prefers-color-scheme:dark){.bkc input{background:#fbf6e8;color:#1f1b17}}"
  ].join("");
  document.head.appendChild(css);

  var btn = document.createElement("button");
  btn.type = "button"; btn.className = "bkc-btn"; btn.textContent = "Chat"; btn.setAttribute("aria-expanded", "false");
  var box = document.createElement("section");
  box.className = "bkc"; box.hidden = true; box.setAttribute("aria-label", "Chat");
  box.innerHTML = '<div class="bkc-head"><span class="bkc-title">The Bee’s Knees chat</span><button type="button" class="bkc-x" aria-label="Close chat">×</button></div>' +
    '<div class="bkc-log" role="log" aria-live="polite"><p class="bkc-note">Tuning in…</p></div>' +
    '<form class="bkc-form" autocomplete="off"><div class="bkc-name-row"><input class="bkc-name" maxlength="30" placeholder="Username" aria-label="Username"><div class="bkc-cols" role="radiogroup" aria-label="Username color"></div></div>' +
    '<div class="bkc-me" hidden>Chatting as <b></b> · <button type="button">change</button></div>' +
    '<input class="bkc-hp" name="website" tabindex="-1" aria-hidden="true">' +
    '<div class="bkc-row"><input class="bkc-body" maxlength="300" placeholder="Say something nice" aria-label="Message"><button class="bkc-send" type="submit">Send</button></div>' +
    '<div class="bkc-err" role="alert"></div></form>';
  var peek = document.createElement("div"); peek.className = "bkc-peek off"; peek.hidden = true; peek.setAttribute("aria-hidden", "true");
  function mount() { document.body.appendChild(btn); document.body.appendChild(box); document.body.appendChild(peek); dodge(); poll(true); }
  // the front page has a ticker along the bottom: sit just above it whenever it's on screen
  var lastLift = -1, dodgeQ = false;
  function dodge() {
    dodgeQ = false;
    var ticks = document.querySelectorAll(".tick"), lift = 16;
    if (!ticks.length) { if (lastLift !== 16) { lastLift = 16; document.documentElement.style.setProperty("--bkc-bottom", "16px"); } return; }
    ticks.forEach(function (t) {
      var r = t.getBoundingClientRect();
      if (r.height && r.bottom > innerHeight - 4 && r.top < innerHeight) lift = Math.max(lift, innerHeight - r.top + 10);
    });
    lift = Math.round(lift);
    if (lift !== lastLift) { lastLift = lift; document.documentElement.style.setProperty("--bkc-bottom", lift + "px"); }  // only touch the page when it actually moves
  }
  // the ticker only matters on the front page; elsewhere don't listen to scrolling at all
  var hasTick = !!document.querySelector("#frame");
  ["resize", "scroll"].forEach(function (ev) { if (ev === "scroll" && !hasTick) return; window.addEventListener(ev, function () { if (!dodgeQ) { dodgeQ = true; requestAnimationFrame(dodge); } }, { passive: true }); });
  setTimeout(dodge, 1500); setTimeout(dodge, 4000);
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);

  var $ = function (s) { return box.querySelector(s); };
  var log = $(".bkc-log"), nameIn = $(".bkc-name"), bodyIn = $(".bkc-body"), err = $(".bkc-err"), me = $(".bkc-me"), nameRow = $(".bkc-name-row");
  var seen = {}, started = false, client = null, chan = null, refreshT = 0;

  // username colors: one is picked at random the first time, and people can change it
  var COLS = { red: "#a3291a", blue: "#1f4e8c", green: "#2f6b2f", purple: "#6b3a8a", teal: "#1d6b6b", orange: "#b5561b", brown: "#7a4a1f", pink: "#a8326b" }, KEYS = Object.keys(COLS);
  var myCol = store.get("bk.chatColor", "");
  if (!COLS[myCol]) { myCol = KEYS[Math.floor(Math.random() * KEYS.length)]; store.set("bk.chatColor", myCol); }
  var cols = $(".bkc-cols"); cols.appendChild(document.createTextNode("Color:"));
  KEYS.forEach(function (k) {
    var b = document.createElement("button"); b.type = "button"; b.className = "bkc-col"; b.dataset.col = k;
    b.setAttribute("role", "radio"); b.setAttribute("aria-label", k); b.style.background = COLS[k];
    b.addEventListener("click", function () { myCol = k; store.set("bk.chatColor", k); paintCols(); });
    cols.appendChild(b);
  });
  function paintCols() {
    cols.querySelectorAll(".bkc-col").forEach(function (b) { b.setAttribute("aria-checked", b.dataset.col === myCol ? "true" : "false"); });
    nameIn.style.color = COLS[myCol]; me.querySelector("b").style.color = COLS[myCol];
  }
  function showName() {
    var n = store.get("bk.chatName", "");
    nameIn.value = n;
    nameRow.hidden = !!n; me.hidden = !n; me.querySelector("b").textContent = n;
  }
  me.querySelector("button").addEventListener("click", function () { nameRow.hidden = false; me.hidden = true; nameIn.focus(); nameIn.select(); });
  showName(); paintCols();

  function hhmm(iso) { var d = new Date(iso); return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }); }
  function nearBottom() { return log.scrollHeight - log.scrollTop - log.clientHeight < 60; }
  function add(m, force) {
    if (!m || seen[m.id]) return; seen[m.id] = true;
    if (m.id > newest) newest = m.id;
    if (!box.hidden) store.set("bk.chatSeen", String(Math.max(m.id, seenId())));
    var note = log.querySelector(".bkc-note"); if (note) note.remove();
    var stick = force || nearBottom();
    var p = document.createElement("p"); p.className = "bkc-m"; p.style.margin = "0"; p.dataset.id = m.id;
    var n = document.createElement("span"); n.className = "bkc-n"; n.textContent = m.name; if (COLS[m.color]) n.style.color = COLS[m.color];
    var t = document.createElement("span"); t.className = "bkc-t"; t.textContent = hhmm(m.created_at);
    p.appendChild(n);
    if (m.place) { var w = document.createElement("span"); w.className = "bkc-w"; w.textContent = " " + m.place; p.appendChild(w); }
    p.appendChild(t); p.appendChild(document.createElement("br")); p.appendChild(document.createTextNode(m.body));
    // keep them in time order even if one arrives late
    var after = null; log.querySelectorAll(".bkc-m").forEach(function (q) { if (+q.dataset.id > m.id && !after) after = q; });
    log.insertBefore(p, after);
    while (log.querySelectorAll(".bkc-m").length > 150) log.querySelector(".bkc-m").remove();
    if (stick) log.scrollTop = log.scrollHeight;
  }
  function load(first) {
    var since = new Date(Date.now() - 2 * 864e5).toISOString();
    return fetch(C.url + "/rest/v1/chat?select=id,created_at,name,body,place,color&hidden=eq.false&created_at=gte." + encodeURIComponent(since) + "&order=id.desc&limit=80", { headers: HDR })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (list) {
        if (!Array.isArray(list)) return;
        // drop anything Kate has hidden since it arrived
        var keep = {}; list.forEach(function (m) { keep[m.id] = true; });
        var oldest = list.length ? list[list.length - 1].id : Infinity;
        log.querySelectorAll(".bkc-m").forEach(function (q) { var id = +q.dataset.id; if (id >= oldest && !keep[id]) { q.remove(); delete seen[id]; } });
        list.reverse().forEach(function (m) { add(m, first); });
        if (first && !list.length) log.innerHTML = '<p class="bkc-note">It’s quiet in here. Say hello!</p>';
      }).catch(function () { if (first) log.innerHTML = '<p class="bkc-note">The chat can’t be reached right now. Try again in a bit.</p>'; });
  }
  function live() {
    var go = function () {
      try {
        client = client || window.supabase.createClient(C.url, C.key);
        chan = client.channel("chat-room").on("postgres_changes", { event: "INSERT", schema: "public", table: "chat" }, function (p) { if (p.new && !p.new.hidden) add(p.new); }).subscribe();
      } catch (e) {}
    };
    if (window.supabase && window.supabase.createClient) return go();
    var sc = document.querySelector('script[data-supabase]');
    if (!sc) { sc = document.createElement("script"); sc.dataset.supabase = "1"; sc.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js"; document.head.appendChild(sc); }
    sc.addEventListener("load", go);
  }
  // dock beside the page (TV and Drive-In only; the front page keeps its own fixed layout) when the window is wide enough
  var canDock = !!document.querySelector(".stage .scr");
  function dock() { document.documentElement.classList.toggle("bkc-docked", canDock && !box.hidden && innerWidth >= 1180); }
  window.addEventListener("resize", dock);
  function open(auto) {
    box.hidden = false; btn.hidden = true; btn.setAttribute("aria-expanded", "true"); hidePeek(); dock();
    if (!started) { started = true; load(true); live(); }
    else load(false);
    markSeen();
    clearInterval(refreshT); refreshT = setInterval(function () { load(false); }, 60000);
    if (auto !== true) (store.get("bk.chatName", "") ? bodyIn : nameIn).focus();
  }
  function close() {
    box.hidden = true; btn.hidden = false; btn.setAttribute("aria-expanded", "false"); clearInterval(refreshT); dock(); setBadge();
    if (window.BK_SHOW_ON) store.set("bk.chatShowClosed", showKey());   // closed during the show: don't pop it open again tonight
    btn.focus();
  }

  /* While the chat is closed: check once a minute for new messages with one small request (no live connection),
     put a count on the button, and let the newest one peek out for a few seconds. */
  var newest = 0, unseen = 0, peekT = 0;
  function seenId() { return +store.get("bk.chatSeen", "0") || 0; }
  function markSeen() { if (newest) store.set("bk.chatSeen", String(newest)); unseen = 0; setBadge(); }
  function setBadge() { btn.textContent = unseen > 0 ? "Chat \u00b7 " + (unseen > 9 ? "9+" : unseen) + " new" : "Chat"; }
  function hidePeek() { clearTimeout(peekT); peek.classList.add("off"); peekT = setTimeout(function () { peek.hidden = true; }, 500); }
  function showPeek(m) {
    peek.innerHTML = ""; var b = document.createElement("b"); b.textContent = m.name + ": "; if (COLS[m.color]) b.style.color = COLS[m.color]; peek.appendChild(b);
    peek.appendChild(document.createTextNode(m.body.length > 90 ? m.body.slice(0, 88) + "\u2026" : m.body));
    clearTimeout(peekT); peek.hidden = false; requestAnimationFrame(function () { peek.classList.remove("off"); });
    peekT = setTimeout(hidePeek, 7000);
  }
  peek.addEventListener("click", function () { open(); });
  function poll(first) {
    if (document.hidden) return;
    var since = new Date(Date.now() - 864e5).toISOString(), after = Math.max(seenId(), first ? 0 : newest);
    fetch(C.url + "/rest/v1/chat?select=id,created_at,name,body,color&hidden=eq.false&created_at=gte." + encodeURIComponent(since) + "&id=gt." + after + "&order=id.desc&limit=20", { headers: HDR })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (list) {
        if (!Array.isArray(list) || !list.length) return;
        var top = list[0], wasNewest = newest;
        newest = Math.max(newest, top.id);
        if (!box.hidden) { markSeen(); return; }
        unseen = list.filter(function (m) { return m.id > seenId(); }).length; setBadge();
        // peek at a brand-new message, or on arrival at one from the last 15 minutes
        var fresh = first ? Date.now() - new Date(top.created_at).getTime() < 15 * 6e4 : top.id > wasNewest;
        if (fresh && top.id > seenId()) showPeek(top);
      }).catch(function () {});
    autoOpen();
  }
  setInterval(function () { poll(false); }, 60000);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) poll(false); });

  // the Drive-In's shared show: open the chat beside the screen on a computer, once a night
  function showKey() { return new Date().toISOString().slice(0, 10); }
  function autoOpen() {
    if (!window.BK_SHOW_ON || !box.hidden || innerWidth < 1180) return;
    if (store.get("bk.chatShowClosed", "") === showKey()) return;
    open(true);
  }
  setInterval(autoOpen, 15000); setTimeout(autoOpen, 3000);
  btn.addEventListener("click", function () { open(); });
  $(".bkc-x").addEventListener("click", close);
  box.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); e.stopPropagation(); });  // keep page shortcuts (TV channel keys) out of the chat
  // close and reconnect politely when the tab is hidden for a long time
  document.addEventListener("visibilitychange", function () { if (!document.hidden && started && !box.hidden) load(false); });

  var sending = false;
  $(".bkc-form").addEventListener("submit", function (e) {
    e.preventDefault(); if (sending) return;
    var name = nameIn.value.trim(), body = bodyIn.value.trim();
    if (!name) { err.textContent = "Pick a username to chat with."; nameRow.hidden = false; me.hidden = true; nameIn.focus(); return; }
    if (!body) { bodyIn.focus(); return; }
    var place = ""; try { place = typeof window.BK_CHAT_PLACE === "function" ? window.BK_CHAT_PLACE() : (window.BK_CHAT_PLACE || ""); } catch (x) {}
    sending = true; err.textContent = "";
    fetch(FN, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: name, color: myCol, body: body, place: place, website: $(".bkc-hp").value }) })
      .then(function (r) { return r.json().catch(function () { return {}; }); })
      .then(function (res) {
        if (res && res.ok) { store.set("bk.chatName", name); showName(); bodyIn.value = ""; if (res.message) add(res.message, true); }
        else err.textContent = (res && res.error) || "That didn’t send. Please try again.";
      })
      .catch(function () { err.textContent = "That didn’t send. Check your connection and try again."; })
      .then(function () { sending = false; bodyIn.focus(); });
  });
})();
