/* SETTINGS
   listeners: the "who's listening" ticker. It uses a free Supabase project for live
   presence (no database tables needed). Paste your project's URL and its anon/publishable
   key below. Both are safe to have in a public page. Leave them empty to turn the
   listener count off; the ticker then only shows what's on each station. */
window.RADIO_CONFIG = {
  /* How people reach you, shown on the About page (an email address, a Discord invite, anything).
     Rights holders use it to ask for a show to come off the schedule. */
  "contact": "thebeeskneesfm@gmail.com",

  /* Your tip page (Ko-fi or similar). The "Tip TheBeesKnees" link appears once this is filled in. */
  "tip": "https://ko-fi.com/thebeeskneesfm",

  /* Announcements scroll along the bottom ticker, between Ko-fi thank-yous.
     Add, change or delete lines here; each one is a line in quotes, followed by a comma. */
  "announcements": [
    "Welcome to The Bee's Knees!",
    "Everything here comes from Archive.org: real old shows, songs, movies and magazines, free for everyone",
    "Become a member at ko-fi.com/thebeeskneesfm: members are thanked by name right here on the ticker, and Sponsor members put their name on a station of their choice for the month",
    "New: the Record Shelf. Five albums from the '40s, '50s and '60s every week, right under the radio. Tap a cover to play it right here",
    "Follow The Bee's Knees on Instagram, TikTok, YouTube, Bluesky and Twitch",
    "Enjoying the vibes? Consider becoming a member or making a donation at ko-fi.com/thebeeskneesfm",
  ],
  /* The stream's ticker (obs.html): lines that make sense to someone watching on Twitch, who can't click anything.
     Same rules: one line in quotes per line, followed by a comma. */
  "streamAnnouncements": [
    "Welcome to The Bee's Knees, a little station playing old radio, TV, movies and records",
    "Everything you see and hear comes from the Internet Archive, free for everyone",
    "Keep it playing all day, free, at thebeesknees.fm",
    "Live every Tuesday, Wednesday, Thursday, Friday and Saturday night, and Sunday mornings",
    "Friday is Jukebox Night: pick a song at thebeesknees.fm/jukebox and hear it on stream",
    "Hit follow to know when the next show starts",
    "Say hello in the chat",
  ],
  /* Sponsor-tier members: which station each one sponsors this month.
     Use the station's id (chills, noir, scifi, romance, outwest, laughs, variety,
     gramophone) and the name to show.
     Example:  "chills": "Margaret",  */
  "sponsors": {
  },
  /* The Shop page (shop.html) reads live products from Fourthwall's Storefront API.
     token: from Fourthwall Settings > For developers > Storefront API. It is read-only and safe to be public.
     collections: which collections to show, in order (their Fourthwall slugs). Empty ones are skipped. */
  "shop": {
    "token": "ptkn_0f3fee82-488e-43e7-8820-8fb0f2ea8183",
    "shopUrl": "https://the-bees-knees-byn-shop.fourthwall.com",
    "currency": "USD",
    "collections": ["mugs", "journals", "buttons"]
  },
  "listeners": {
    "url": "https://rjpztitddezmkzeiteaa.supabase.co",
    "key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcHp0aXRkZGV6bWt6ZWl0ZWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0MzI3NDAsImV4cCI6MjEwOTAwODc0MH0.wTOlfDrJT48AJwIqXX2iK1jgyz52D0CIxdGh9GO6egI",
    "room": "radio"
  }
};
