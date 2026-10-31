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
    "Welcome to The Bee's Knees.fm: old radio shows and 78s, playing around the clock",
    "Click the TV or the fireplace to make it bigger",
    "Keep the station on the air: tip us on Ko-fi at ko-fi.com/thebeeskneesfm",
  ],
  /* Sponsor-tier members: which station each one sponsors this month.
     Use the station's id (chills, noir, suspense, scifi, theater, outwest, laughs, ragtime, jazzage,
     blues, swing, crooners, afterhours, classical, hawaiian, sleepy, christmas) and the name to show.
     Example:  "chills": "Margaret",  */
  "sponsors": {
  },
  "listeners": {
    "url": "https://rjpztitddezmkzeiteaa.supabase.co",
    "key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcHp0aXRkZGV6bWt6ZWl0ZWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0MzI3NDAsImV4cCI6MjEwOTAwODc0MH0.wTOlfDrJT48AJwIqXX2iK1jgyz52D0CIxdGh9GO6egI",
    "room": "radio"
  }
};
