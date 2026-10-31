/* SETTINGS
   listeners: the "who's listening" ticker. It uses a free Supabase project for live
   presence (no database tables needed). Paste your project's URL and its anon/publishable
   key below. Both are safe to have in a public page. Leave them empty to turn the
   listener count off; the ticker then only shows what's on each station. */
window.RADIO_CONFIG = {
  /* How people reach you, shown on the About page (an email address, a Discord invite, anything).
     Rights holders use it to ask for a show to come off the schedule. */
  "contact": "",

  "listeners": {
    "url": "https://rjpztitddezmkzeiteaa.supabase.co",
    "key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcHp0aXRkZGV6bWt6ZWl0ZWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0MzI3NDAsImV4cCI6MjEwOTAwODc0MH0.wTOlfDrJT48AJwIqXX2iK1jgyz52D0CIxdGh9GO6egI",
    "room": "radio"
  }
};
