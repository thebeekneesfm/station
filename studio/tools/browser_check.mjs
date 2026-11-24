// Open every page of the site in a real (headless) browser and report what goes wrong.
//
//   npm install --no-save playwright && npx playwright install chromium   (once)
//   node studio/tools/browser_check.mjs
//
// It serves the site from this folder on http://127.0.0.1:8099, visits each page, waits a few
// seconds, and records:
//   ERROR  JavaScript errors on the page (uncaught exceptions, console.error)
//   ERROR  the site's own files that fail to load (404s, typos in paths)
//   INFO   outside services that failed (Archive, fonts, Supabase): usually temporary
// It also saves a screenshot of each page in studio/reports/screens/.
// Exit code 1 if any page has an ERROR.

import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "..", "..");
const reports = join(repo, "studio", "reports");
const screens = join(reports, "screens");
mkdirSync(screens, { recursive: true });

const PORT = Number(process.env.SITE_PORT || 8099);
const BASE = `http://127.0.0.1:${PORT}`;
const SKIP = new Set(["guestbook-admin.html", "builder.html"]); // admin/tools, not visitor pages
const pages = readdirSync(repo).filter((f) => f.endsWith(".html") && !SKIP.has(f)).sort();
const WAIT_MS = Number(process.env.WAIT_MS || 4000);
// Pieces of art the site looks for and falls back from when you haven't drawn them yet (see README).
const OPTIONAL_ART = /^\/art\/(?:[^/]+\.png|phone\/.+\.png|tv\/.+\.png|cards\/.+\.png|fonts\/.+\.woff2?|sounds\/.+\.mp3)$/;
const DATA_ART = /^\/art\/(ads|records|postcards|greetings|rack|gallery|funnies|jukebox)\//;
const LIBRARY_HOSTS = /jsdelivr|unpkg|cdnjs|googleapis|gstatic/;

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  try {
    ({ chromium } = createRequire(import.meta.url)("playwright")); // global/NODE_PATH installs
  } catch {
    console.error("Playwright isn't installed. Run: npm install --no-save playwright && npx playwright install chromium");
    process.exit(2);
  }
}

const server = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1"], { cwd: repo, stdio: "ignore" });
await new Promise((r) => setTimeout(r, 1200));

const results = [];
const browser = await chromium.launch(
  process.env.PW_EXECUTABLE ? { executablePath: process.env.PW_EXECUTABLE } : {});
try {
  for (const page of pages) {
    const ctx = await browser.newContext({ viewport: { width: 1366, height: 860 } });
    const p = await ctx.newPage();
    const r = { page, errors: [], ownFailures: [], outside: {}, optional: [], maybeOutside: [] };
    p.on("pageerror", (e) => r.errors.push(String(e.message || e).slice(0, 300)));
    p.on("console", (m) => { if (m.type() === "error") r.errors.push(m.text().slice(0, 300)); });
    const failed = (url, why) => {
      const path = url.startsWith(BASE) ? url.slice(BASE.length) : "";
      if (path && OPTIONAL_ART.test(path) && !DATA_ART.test(path)) r.optional.push(path);
      else if (path) r.ownFailures.push(`${path} (${why})`);
      else { const host = new URL(url).host; r.outside[host] = (r.outside[host] || 0) + 1; }
    };
    p.on("requestfailed", (req) => failed(req.url(), req.failure()?.errorText || "failed"));
    p.on("response", (res) => { if (res.status() >= 400) failed(res.url(), `HTTP ${res.status()}`); });
    try {
      await p.goto(`${BASE}/${page}`, { waitUntil: "domcontentloaded", timeout: 30000 });
      await p.waitForTimeout(WAIT_MS);
      await p.screenshot({ path: join(screens, page.replace(".html", ".png")) });
    } catch (e) {
      r.errors.push(`Page didn't load: ${String(e.message || e).slice(0, 200)}`);
    }
    // Console errors about outside resources are already counted under "outside".
    r.errors = [...new Set(r.errors)].filter((m) => !/Failed to load resource/i.test(m));
    r.ownFailures = [...new Set(r.ownFailures)];
    r.optional = [...new Set(r.optional)];
    // If a library host failed, "x is undefined" errors are probably a knock-on effect.
    const libHosts = Object.keys(r.outside).filter((h) => LIBRARY_HOSTS.test(h));
    if (libHosts.length) {
      r.maybeOutside = r.errors.filter((m) => /undefined|not defined|null/i.test(m)).map((m) => `${m} (likely because ${libHosts.join(", ")} didn't load)`);
      r.errors = r.errors.filter((m) => !/undefined|not defined|null/i.test(m));
    }
    results.push(r);
    await ctx.close();
    console.error(`${page}: ${r.errors.length} errors, ${r.ownFailures.length} missing files`);
  }
} finally {
  await browser.close();
  server.kill();
}

const bad = results.filter((r) => r.errors.length || r.ownFailures.length);
const lines = [`# Browser check: ${new Date().toISOString().slice(0, 10)}`, "",
  `Opened **${results.length}** pages: **${bad.length}** with problems. Screenshots are in \`studio/reports/screens/\`.`, ""];
for (const r of results) {
  const outside = Object.entries(r.outside).map(([h, n]) => `${h} ×${n}`).join(", ");
  if (!r.errors.length && !r.ownFailures.length && !outside && !r.optional.length && !r.maybeOutside.length) continue;
  lines.push(`## ${r.page}`, "");
  for (const e of r.errors) lines.push(`- **ERROR** JavaScript: ${e}`);
  for (const f of r.ownFailures) lines.push(`- **ERROR** Missing site file: \`${f}\``);
  for (const e of r.maybeOutside) lines.push(`- WARN JavaScript: ${e}. The page should cope better if that service is down.`);
  if (r.optional.length) lines.push(`- INFO Optional art not drawn yet (built-in look used): ${r.optional.map((x) => "`" + x + "`").join(", ")}`);
  if (outside) lines.push(`- INFO Outside services that failed (often temporary): ${outside}`);
  lines.push("");
}
if (!bad.length) lines.push("All pages opened without JavaScript errors or missing files.");
writeFileSync(join(reports, "browser-check.md"), lines.join("\n") + "\n");
writeFileSync(join(reports, "browser-check.json"), JSON.stringify(results, null, 1));
console.error(`Report: ${join(reports, "browser-check.md")}`);
process.exit(bad.length ? 1 : 0);
