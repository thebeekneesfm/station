/* The Bee's Knees shop page.
   Reads the live products from the Fourthwall Storefront API, keeps a cart, and hands
   the customer to Fourthwall's own checkout page to pay. Settings live in config.js
   under "shop". Anything published or archived on Fourthwall shows up here on its own. */
(function () {
  "use strict";
  var cfg = (window.RADIO_CONFIG && window.RADIO_CONFIG.shop) || {};
  var API = "https://storefront-api.fourthwall.com/v1";
  var SHOP = (cfg.shopUrl || "https://the-bees-knees-byn-shop.fourthwall.com").replace(/\/$/, "");
  var CUR = cfg.currency || "USD";
  var KEY = "bk-shop-cart";
  var shelves = document.getElementById("shelves");
  var cartBtn = document.getElementById("cartBtn");
  var cartN = document.getElementById("cartN");
  var pdSheet = document.getElementById("pdSheet");
  var cartSheet = document.getElementById("cartSheet");
  var products = {};     // slug -> product
  var cart = null;       // last cart from the API
  var lastFocus = null;

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function money(m) {
    if (!m) return "";
    try { return new Intl.NumberFormat("en-US", { style: "currency", currency: m.currency || CUR }).format(m.value); }
    catch (e) { return "$" + Number(m.value).toFixed(2); }
  }
  function store(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function url(path, extra) {
    var q = "storefront_token=" + encodeURIComponent(cfg.token) + "&currency=" + CUR + (extra ? "&" + extra : "");
    return API + path + (path.indexOf("?") < 0 ? "?" : "&") + q;
  }
  function api(path, body, extra) {
    var o = body ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) } : {};
    return fetch(url(path, extra), o).then(function (r) {
      if (!r.ok) { var e = new Error("HTTP " + r.status); e.status = r.status; throw e; }
      return r.json();
    });
  }
  function img(p, w) {
    var i = (p.images && p.images[0]) || (p.variants && p.variants[0] && p.variants[0].images && p.variants[0].images[0]);
    return i ? (i.transformedUrl || i.url) : "";
  }
  function priceOf(p) {
    var vs = (p.variants || []).map(function (v) { return v.unitPrice && v.unitPrice.value; }).filter(function (x) { return x != null; });
    if (!vs.length) return "";
    var lo = Math.min.apply(null, vs), hi = Math.max.apply(null, vs);
    var m = { value: lo, currency: p.variants[0].unitPrice.currency };
    return lo === hi ? money(m) : "From " + money(m);
  }
  function soldOut(p) { return p.state && p.state.type && /SOLD/i.test(p.state.type); }

  /* product descriptions come from Fourthwall as HTML: keep only simple formatting and links */
  function clean(html) {
    var doc = new DOMParser().parseFromString("<div>" + (html || "") + "</div>", "text/html");
    var ok = { P: 1, STRONG: 1, B: 1, EM: 1, I: 1, A: 1, BR: 1, UL: 1, OL: 1, LI: 1 };
    (function walk(n) {
      Array.prototype.slice.call(n.childNodes).forEach(function (c) {
        if (c.nodeType === 1) {
          walk(c);
          if (!ok[c.tagName]) { while (c.firstChild) n.insertBefore(c.firstChild, c); n.removeChild(c); return; }
          var href = c.tagName === "A" ? c.getAttribute("href") : null;
          while (c.attributes.length) c.removeAttribute(c.attributes[0].name);
          if (href && /^https?:\/\//i.test(href)) { c.setAttribute("href", href); c.setAttribute("target", "_blank"); c.setAttribute("rel", "noopener"); }
        } else if (c.nodeType !== 3) { n.removeChild(c); }
      });
    })(doc.body.firstChild);
    return doc.body.firstChild.innerHTML;
  }

  function fallback(msg) {
    shelves.innerHTML = '<section class="paper note"><p>' + esc(msg) + ' You can still browse everything at <a href="' + SHOP + '/" target="_blank" rel="noopener">our Fourthwall shop</a>.</p></section>';
  }

  /* ---------- shelves ---------- */
  function load() {
    if (!cfg.token) { fallback("The shop is getting set up."); return; }
    shelves.innerHTML = '<section class="paper note"><p>Opening the shop&hellip;</p></section>';
    var wanted = cfg.collections && cfg.collections.length ? Promise.resolve(cfg.collections.map(function (c) { return typeof c === "string" ? { slug: c } : c; }))
      : api("/collections", null, "size=50").then(function (r) { return (r.results || []).map(function (c) { return { slug: c.slug, title: c.name, blurb: c.description }; }); });
    wanted.then(function (cols) {
      return Promise.all(cols.map(function (c) {
        return Promise.all([
          c.title ? null : api("/collections/" + encodeURIComponent(c.slug)).catch(function () { return null; }),
          api("/collections/" + encodeURIComponent(c.slug) + "/products", null, "size=100").catch(function () { return { results: [] }; })
        ]).then(function (r) {
          var info = r[0] || {};
          return { slug: c.slug, title: c.title || info.name || c.slug, blurb: c.blurb != null ? c.blurb : (info.description || ""), items: (r[1].results || []).filter(function (p) { return (p.type !== "BUNDLE" || p.variants) && (!p.access || p.access.type === "PUBLIC"); }) };
        });
      }));
    }).then(function (cols) {
      cols = cols.filter(function (c) { return c.items.length; });
      if (!cols.length) { fallback("Nothing's on the shelves right now."); return; }
      shelves.innerHTML = "";
      cols.forEach(function (c) {
        var sec = document.createElement("section");
        sec.className = "shelf"; sec.id = c.slug;
        var blurb = c.blurb ? '<div class="blurb">' + clean(c.blurb) + "</div>" : "";
        sec.innerHTML = "<h2>" + esc(c.title) + "</h2>" + blurb + '<div class="row"></div>';
        var row = sec.querySelector(".row");
        c.items.forEach(function (p) {
          products[p.slug] = p;
          var b = document.createElement("button");
          b.type = "button"; b.className = "item";
          b.innerHTML = '<img loading="lazy" alt="" src="' + esc(img(p)) + '"><span class="meta"><span class="nm">' + esc(p.name) + '</span>' +
            (soldOut(p) ? '<span class="so">Sold out</span>' : '<span class="pr">' + esc(priceOf(p)) + "</span>") + "</span>";
          b.addEventListener("click", function () { openProduct(p.slug, b); });
          row.appendChild(b);
        });
        shelves.appendChild(sec);
      });
      var h = decodeURIComponent(location.hash.slice(1));
      if (h && products[h]) openProduct(h);
      else if (h) { var el = document.getElementById(h); if (el) el.scrollIntoView(); }
    }).catch(function () { fallback("The shop shelves didn't load just now."); });
  }

  /* ---------- dialogs ---------- */
  function openSheet(s, from) {
    lastFocus = from || document.activeElement;
    s.hidden = false; document.body.style.overflow = "hidden";
    var x = s.querySelector(".x"); if (x) x.focus();
  }
  function closeSheet(s) {
    s.hidden = true;
    if (pdSheet.hidden && cartSheet.hidden) document.body.style.overflow = "";
    if (s === pdSheet && location.hash) { try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  [pdSheet, cartSheet].forEach(function (s) {
    s.addEventListener("click", function (e) { if (e.target === s || e.target.closest(".x")) closeSheet(s); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!cartSheet.hidden) closeSheet(cartSheet); else if (!pdSheet.hidden) closeSheet(pdSheet);
  });

  function openProduct(slug, from) {
    var p = products[slug]; if (!p) return;
    try { history.replaceState(null, "", "#" + encodeURIComponent(slug)); } catch (e) {}
    var pics = (p.images || []).map(function (i) { return i.transformedUrl || i.url; });
    var vs = p.variants || [];
    var multi = vs.length > 1;
    var box = pdSheet.querySelector(".pd");
    box.innerHTML =
      '<div class="gal"><img class="main" alt="' + esc(p.name) + '" src="' + esc(pics[0] || img(p)) + '">' +
      (pics.length > 1 ? '<div class="thumbs">' + pics.map(function (u, i) { return '<button type="button" aria-label="Picture ' + (i + 1) + '"' + (i ? "" : ' aria-current="true"') + ' data-u="' + esc(u) + '"><img alt="" loading="lazy" src="' + esc(u) + '"></button>'; }).join("") + "</div>" : "") +
      '</div><div class="info"><h3>' + esc(p.name) + '</h3><p class="pr">' + esc(priceOf(p)) + "</p>" +
      (multi ? '<div class="opts"><label for="pdVar">Choose</label><select id="pdVar">' + vs.map(function (v) { return '<option value="' + esc(v.id) + '">' + esc((v.attributes && v.attributes.description) || v.name) + " · " + esc(money(v.unitPrice)) + "</option>"; }).join("") + "</select></div>" : "") +
      '<div class="buy"><button type="button" class="btn add"' + (soldOut(p) ? " disabled" : "") + ">" + (soldOut(p) ? "Sold out" : "Add to cart") + '</button><button type="button" class="btn alt view" hidden>View cart</button></div><div class="msg" role="status"></div>' +
      '<div class="desc">' + clean(p.description) + "</div></div>";
    var main = box.querySelector(".main");
    box.querySelectorAll(".thumbs button").forEach(function (t) {
      t.addEventListener("click", function () {
        main.src = t.getAttribute("data-u");
        box.querySelectorAll(".thumbs button").forEach(function (o) { o.removeAttribute("aria-current"); });
        t.setAttribute("aria-current", "true");
      });
    });
    var add = box.querySelector(".add"), msg = box.querySelector(".msg"), view = box.querySelector(".view");
    view.addEventListener("click", function () { closeSheet(pdSheet); openCart(); });
    add.addEventListener("click", function () {
      var sel = box.querySelector("#pdVar");
      var vid = sel ? sel.value : (vs[0] && vs[0].id);
      if (!vid) return;
      add.disabled = true; msg.textContent = "Adding…";
      addToCart(vid, 1).then(function () {
        msg.textContent = "Added to your cart."; view.hidden = false;
      }).catch(function () {
        msg.innerHTML = 'That didn’t go through. Try again, or buy it on <a href="' + SHOP + "/products/" + esc(p.slug) + '" target="_blank" rel="noopener">our Fourthwall shop</a>.';
      }).then(function () { add.disabled = false; });
    });
    openSheet(pdSheet, from);
  }

  /* ---------- cart ---------- */
  function count(c) { return (c && c.items || []).reduce(function (n, i) { return n + (i.quantity || 0); }, 0); }
  function setCart(c) {
    cart = c;
    if (c && c.id) store(KEY, c.id);
    var n = count(c);
    cartN.textContent = n; cartBtn.hidden = n === 0;
    if (!cartSheet.hidden) drawCart();
    return c;
  }
  function addToCart(variantId, qty) {
    var body = { items: [{ variantId: variantId, quantity: qty }] };
    var id = read(KEY);
    var fresh = function () { return api("/carts", body).then(setCart); };
    if (!id) return fresh();
    return api("/carts/" + encodeURIComponent(id) + "/add", body).then(setCart).catch(function (e) {
      if (e.status === 404 || e.status === 400) { store(KEY, null); return fresh(); }
      throw e;
    });
  }
  function change(variantId, qty) {
    var id = read(KEY); if (!id) return Promise.resolve();
    var path = qty > 0 ? "/change" : "/remove";
    var body = qty > 0 ? { items: [{ variantId: variantId, quantity: qty }] } : { items: [{ variantId: variantId }] };
    return api("/carts/" + encodeURIComponent(id) + path, body).then(setCart);
  }
  function drawCart() {
    var lines = cartSheet.querySelector(".lines");
    var items = (cart && cart.items) || [];
    if (!items.length) {
      lines.innerHTML = '<p class="fine">Your cart is empty.</p>';
      cartSheet.querySelector(".sum").textContent = money({ value: 0, currency: CUR });
      cartSheet.querySelector(".go").disabled = true;
      return;
    }
    var total = 0;
    lines.innerHTML = items.map(function (it) {
      var v = it.variant || {}, pr = v.product || {};
      var each = v.unitPrice ? v.unitPrice.value : 0; total += each * it.quantity;
      var pic = v.images && v.images[0] ? (v.images[0].transformedUrl || v.images[0].url) : (products[pr.slug] ? img(products[pr.slug]) : "");
      var attr = v.attributes && v.attributes.description;
      return '<div class="line"><img alt="" src="' + esc(pic) + '"><div><div class="nm">' + esc(pr.name || v.name) + "</div>" +
        (attr && !/one size/i.test(attr) ? '<div class="sub">' + esc(attr) + "</div>" : "") +
        '<div class="qty"><button type="button" data-v="' + esc(v.id) + '" data-q="' + (it.quantity - 1) + '" aria-label="One fewer">&minus;</button><span>' + it.quantity +
        '</span><button type="button" data-v="' + esc(v.id) + '" data-q="' + (it.quantity + 1) + '" aria-label="One more">+</button></div></div><div class="amt">' +
        esc(money({ value: each * it.quantity, currency: (v.unitPrice || {}).currency || CUR })) + "</div></div>";
    }).join("");
    cartSheet.querySelector(".sum").textContent = money({ value: total, currency: CUR });
    cartSheet.querySelector(".go").disabled = false;
    lines.querySelectorAll(".qty button").forEach(function (b) {
      b.addEventListener("click", function () {
        lines.querySelectorAll(".qty button").forEach(function (o) { o.disabled = true; });
        change(b.getAttribute("data-v"), +b.getAttribute("data-q")).catch(function () {}).then(drawCart);
      });
    });
  }
  function openCart() { drawCart(); openSheet(cartSheet, cartBtn); }
  cartBtn.addEventListener("click", openCart);
  cartSheet.querySelector(".go").addEventListener("click", function () {
    var id = read(KEY); if (!id) return;
    var to = SHOP + "/cart/checkout?cartId=" + encodeURIComponent(id) + "&currency=" + CUR;
    // opened over the radio: check out in a new tab so the music keeps playing
    if (document.documentElement.classList.contains("embed")) { var w = window.open(to, "_blank", "noopener"); if (w) return; }
    location.href = to;
  });

  /* pick up a cart from an earlier visit */
  (function () {
    var id = read(KEY);
    if (id && cfg.token) api("/carts/" + encodeURIComponent(id)).then(setCart).catch(function () { store(KEY, null); });
  })();
  load();
})();
