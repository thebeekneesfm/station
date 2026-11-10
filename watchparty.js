/* THE TWITCH WATCH PARTY BUTTON (front page, TV and the Drive-In)
   The Bee's Knees streams on Twitch on a schedule (obs-schedule.js). This puts a button in the corner that
   says when the next watch party is, and turns into "Live now on Twitch" while one is on the schedule.
   It goes by the schedule, not by checking Twitch, so if a stream is cancelled the button still says live.
   It took the place of the site's own chat (chat.js, which is still in the folder if it's ever wanted back). */
(function () {
  "use strict";
  var TWITCH = "https://www.twitch.tv/thebeeskneesfm";
  var S = window.STREAM_SCHEDULE;
  if (!S || document.documentElement.classList.contains("embed")) return;
  var DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var css = document.createElement("style");
  css.textContent = [
    ".bkw{position:fixed;z-index:30;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(var(--bkc-bottom,16px) + env(safe-area-inset-bottom,0px));",
    "display:flex;align-items:center;gap:9px;font:700 18px/1.15 'BK Serif',Georgia,serif;background:#1f1b17;color:#f4ead2;text-decoration:none;padding:12px 18px;",
    "box-shadow:0 3px 0 rgba(0,0,0,.35),0 8px 18px rgba(0,0,0,.3);max-width:calc(100vw - 32px)}",
    ".bkw:hover{filter:brightness(1.15)}.bkw:focus-visible{outline:3px solid #e8b43a;outline-offset:2px}",
    ".bkw small{display:block;font:italic 400 14px/1.2 'BK Serif',Georgia,serif;color:#d9cdb2}",
    ".bkw.live{background:#c8321f}.bkw.live small{color:#fbe6d6}",
    ".bkw i{flex:none;width:11px;height:11px;border-radius:50%;background:#e8b43a}",
    ".bkw.live i{background:#fff;animation:bkwp 1.4s ease-in-out infinite}",
    "@keyframes bkwp{50%{opacity:.25}}",
    // TV and the Drive-In on a wide screen: a tab on the right edge, so it never sits on the channel buttons
    ".bkw.bkw-tab{top:50%;bottom:auto;right:0;transform:translateY(-50%);writing-mode:vertical-rl;padding:18px 10px;font-size:17px;box-shadow:-3px 3px 0 rgba(0,0,0,.35)}",
    ".bkw.bkw-tab small{font-size:13px}",
    "@media (prefers-reduced-motion:reduce){.bkw.live i{animation:none}}",
    "@media (max-width:520px){.bkw{font-size:15px;padding:9px 13px;right:max(10px,env(safe-area-inset-right,0px))}.bkw small{font-size:12px}}"
  ].join("");
  document.head.appendChild(css);

  var a = document.createElement("a");
  a.className = "bkw"; a.href = TWITCH; a.target = "_blank"; a.rel = "noopener";
  a.innerHTML = "<i aria-hidden=\"true\"></i><span><span class=\"bkw-t\"></span><small class=\"bkw-s\"></small></span>";
  document.body.appendChild(a);

  // the time in Los Angeles, as day / month-day / minutes since midnight
  function pacific(ms) {
    var p = {};
    new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", weekday: "short", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
      .formatToParts(new Date(ms)).forEach(function (x) { p[x.type] = x.value; });
    return { day: DAYS.indexOf(String(p.weekday).toLowerCase().slice(0, 3)), md: p.month + "-" + p.day, min: (+p.hour) * 60 + (+p.minute) };
  }
  function mins(hm) { var x = hm.split(":"); return (+x[0]) * 60 + (+x[1]); }
  function onDate(dates, md) {
    if (!dates) return true;
    if (typeof dates === "string") return dates === md;
    return dates.from <= dates.to ? (md >= dates.from && md <= dates.to) : (md >= dates.from || md <= dates.to);
  }
  // the blocks that run on a given day (holiday blocks replace the weekly ones that overlap them)
  function blocksOn(t) {
    var L = (S.blocks || []).filter(function (b) { return !b.quiet; });   // test blocks stay off the button
    var dated = L.filter(function (b) { return b.dates && onDate(b.dates, t.md) && (!b.days || b.days.indexOf(DAYS[t.day]) >= 0); });
    var weekly = L.filter(function (b) {
      return !b.dates && b.days && b.days.indexOf(DAYS[t.day]) >= 0 &&
        !dated.some(function (d) { return mins(d.from) < mins(b.to) && mins(b.from) < mins(d.to); });
    });
    return dated.concat(weekly).map(function (b) { return { from: mins(b.from), to: mins(b.to), title: b.title }; })
      .sort(function (x, y) { return x.from - y.from; });
  }
  // join back-to-back blocks into one stream ("Saturday at the Drive-In" is 7:00 to 11:00)
  function streams(t) {
    var out = [];
    blocksOn(t).forEach(function (b) {
      var last = out[out.length - 1];
      var name = b.title.replace(/: .*$/, "").replace(/ starts at .*$/, "");
      if (last && b.from <= last.to) {
        if (b.to - b.from > last.long) { last.title = name; last.long = b.to - b.from; }   // the main show names the stream
        last.to = Math.max(last.to, b.to);
      }
      else out.push({ from: b.from, to: b.to, title: name, long: b.to - b.from });
    });
    return out;
  }
  function clock(m) { var h = Math.floor(m / 60), mm = m % 60, ap = h >= 12 ? "PM" : "AM"; h = h % 12 || 12; return h + (mm ? ":" + ("0" + mm).slice(-2) : "") + " " + ap; }

  function paint() {
    var now = Date.now(), t = pacific(now), live = null, next = null;
    streams(t).forEach(function (s) { if (t.min >= s.from && t.min < s.to) live = s; });
    if (!live) {
      for (var d = 0; d < 8 && !next; d++) {
        var td = pacific(now + d * 864e5);
        streams(td).forEach(function (s) { if (!next && (d > 0 || s.from > t.min)) next = { s: s, d: d, day: td.day }; });
      }
    }
    var title = a.querySelector(".bkw-t"), sub = a.querySelector(".bkw-s");
    a.classList.toggle("live", !!live);
    if (live) {
      title.textContent = "Live now on Twitch";
      sub.textContent = live.title + ": come watch together";
      a.setAttribute("aria-label", "Live now on Twitch: " + live.title + ". Opens Twitch.");
    } else if (next) {
      var when = next.d === 0 ? "Tonight" : next.d === 1 ? "Tomorrow" : NAMES[next.day];
      if (next.d === 0 && next.s.from < 17 * 60) when = "Today";
      title.textContent = "Twitch watch party";
      sub.textContent = when + " " + clock(next.s.from) + " PT: " + next.s.title;
      a.setAttribute("aria-label", "Twitch watch party " + when + " at " + clock(next.s.from) + " Pacific: " + next.s.title + ". Opens Twitch.");
    } else {
      title.textContent = "Watch with us on Twitch"; sub.textContent = "";
    }
  }
  paint(); setInterval(paint, 30000);

  // the front page has a ticker along the bottom: sit just above it whenever it's on screen
  var lastLift = -1, q = false;
  function dodge() {
    q = false;
    var lift = 16;
    document.querySelectorAll(".tick").forEach(function (t) {
      var r = t.getBoundingClientRect();
      if (r.height && r.bottom > innerHeight - 4 && r.top < innerHeight) lift = Math.max(lift, innerHeight - r.top + 10);
    });
    lift = Math.round(lift);
    if (lift !== lastLift) { lastLift = lift; document.documentElement.style.setProperty("--bkc-bottom", lift + "px"); }
  }
  var hasTick = !!document.querySelector("#frame");
  ["resize", "scroll"].forEach(function (ev) {
    if (ev === "scroll" && !hasTick) return;
    window.addEventListener(ev, function () { if (!q) { q = true; requestAnimationFrame(dodge); } }, { passive: true });
  });
  var canTab = !!document.querySelector(".stage .scr");
  function tab() { a.classList.toggle("bkw-tab", canTab && innerWidth >= 1180); }
  tab(); window.addEventListener("resize", tab);
  dodge(); setTimeout(dodge, 1500); setTimeout(dodge, 4000);
})();
