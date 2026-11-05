/* The Bee's Knees social links, at the bottom of every page.
   To add or change one, edit the list below. */
(function () {
  "use strict";
  var LINKS = [
    ["Instagram", "https://www.instagram.com/thebeesknees.fm/"],
    ["TikTok", "https://www.tiktok.com/@thebeeskneesfm"],
    ["YouTube", "https://www.youtube.com/@thebeeskneesfm"],
    ["Bluesky", "https://bsky.app/profile/thebeeskneesfm.bsky.social"]
  ];
  var root = document.documentElement;
  if (root.classList.contains("embed")) return;   // opened over the radio, which has its own

  var css = document.createElement("style");
  css.textContent =
    ".bk-foot { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: center; gap: 4px 22px; padding: 14px 20px; text-align: center; font: 400 18px/1.4 \"BK Serif\", Georgia, serif; color: var(--ink, #1f1b17); }" +
    ".bk-foot b { font-weight: 700; }" +
    ".bk-foot a { color: var(--ink, #1f1b17); text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px; }" +
    ".bk-foot a:hover { color: #c8321f; }" +
    // front page: only on phones, where the page scrolls; the desktop radio is one fixed screen
    "#bk-foot-front { display: none; margin: 18px 16px 0; background: url(\"art/newsprint.jpg\") 0 0 / 640px 640px, #efe2c4; box-shadow: 0 3px 0 rgba(0,0,0,.28); }" +
    "html.scrolls #bk-foot-front { display: flex; }";
  document.head.appendChild(css);

  var foot = document.createElement("footer");
  foot.className = "bk-foot";
  foot.setAttribute("aria-label", "Follow The Bee's Knees");
  var label = document.createElement("b");
  label.textContent = "Follow The Bee's Knees";
  foot.appendChild(label);
  LINKS.forEach(function (l) {
    var a = document.createElement("a");
    a.href = l[1]; a.target = "_blank"; a.rel = "noopener"; a.textContent = l[0];
    foot.appendChild(a);
  });

  var wrap = document.querySelector(".wrap");
  var frame = document.getElementById("frame");
  if (frame) { foot.id = "bk-foot-front"; frame.insertAdjacentElement("afterend", foot); }
  else if (wrap) { foot.classList.add("paper"); wrap.appendChild(foot); }
})();
