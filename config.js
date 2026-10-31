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
    "url": "",
    "key": "",
    "room": "radio"
  }
};
