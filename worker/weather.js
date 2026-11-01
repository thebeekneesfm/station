/* The Bee's Knees.fm weather helper: a Cloudflare Worker on the route  thebeesknees.fm/api/weather
   Cloudflare already knows each visitor's approximate city from their connection. This looks up the
   current weather for that spot at Open-Meteo (free, no key) and sends back only the result.
   Nothing is stored, and the weather service only ever sees a rounded map position, never the listener. */
const KINDS = c =>
  c <= 1 ? "clear" : c === 2 ? "partly" : c === 3 ? "cloudy" : c <= 48 ? "fog" :
  (c >= 71 && c <= 77) || c === 85 || c === 86 ? "snow" : c >= 95 ? "storm" : "rain";
const WORDS = {
  0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Cloudy", 45: "Foggy", 48: "Freezing fog",
  51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle", 56: "Freezing drizzle", 57: "Freezing drizzle",
  61: "Light rain", 63: "Rain", 65: "Heavy rain", 66: "Freezing rain", 67: "Freezing rain",
  71: "Light snow", 73: "Snow", 75: "Heavy snow", 77: "Snow grains", 80: "Showers", 81: "Showers", 82: "Downpours",
  85: "Snow showers", 86: "Snow showers", 95: "Thunderstorms", 96: "Thunderstorms with hail", 99: "Thunderstorms with hail"
};
const FAHRENHEIT = ["US", "LR", "MM", "PR", "GU", "VI", "AS", "MP", "BS", "BZ", "KY", "PW", "FM", "MH"];
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "content-type": "application/json", "cache-control": "private, max-age=900" } });

export default {
  async fetch(request, env, ctx) {
    const cf = request.cf || {};
    const lat = Number(cf.latitude), lon = Number(cf.longitude);
    if (!isFinite(lat) || !isFinite(lon)) return json({ ok: false }, 200);
    const f = FAHRENHEIT.includes(cf.country);
    // round to about 10 km, so neighbours share one lookup and the exact spot never leaves Cloudflare
    const la = lat.toFixed(1), lo = lon.toFixed(1);
    const api = `https://api.open-meteo.com/v1/forecast?latitude=${la}&longitude=${lo}` +
      `&current=temperature_2m,weather_code,is_day&temperature_unit=${f ? "fahrenheit" : "celsius"}`;
    const cache = caches.default, key = new Request(api);
    let res = await cache.match(key);
    if (!res) {
      const r = await fetch(api, { headers: { "user-agent": "thebeesknees.fm weather" } });
      if (!r.ok) return json({ ok: false }, 200);
      res = new Response(r.body, r); res.headers.set("cache-control", "public, max-age=900");
      ctx.waitUntil(cache.put(key, res.clone()));
    }
    const w = (await res.json()).current || {};
    const code = w.weather_code ?? 0;
    return json({
      ok: true, temp: Math.round(w.temperature_2m), unit: f ? "F" : "C",
      kind: KINDS(code), day: w.is_day !== 0, words: WORDS[code] || "", city: cf.city || ""
    });
  }
};
