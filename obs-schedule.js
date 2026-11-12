/* THE STREAM'S SCHEDULE
   Used by obs.html when its address has ?schedule=1 in it. At the start of each block the stream
   switches by itself; chat can still vote in between, and the next block takes back over.

   Times are Pacific, 24-hour ("19:30" is 7:30 PM). Days: sun mon tue wed thu fri sat.
   dates (optional): a single day "12-24", or a range { from: "12-01", to: "12-26" } (month-day).
   A block with dates wins over the everyday weekly blocks, so holidays take over for their days.
   play: "radio chills", "radio gramophone", "radio laughs" ...   "tv kids", "tv christmas" ...   "drive-in"   "jukebox"
   title: what shows on screen when the block begins.
   rotate (optional): a list of things to play, one per week in turn, counting from the week of "since"
   (a date, "2026-11-12"). Each one can have its own title; the block's "play" is ignored.
   To change it, edit the lines below (keep the commas and quote marks), save, and refresh the source in OBS. */
window.STREAM_SCHEDULE = {
  // what plays when no block is on (the first line that fits today wins)
  otherwise: [
    { dates: { from: "11-26", to: "01-06" }, play: "tv christmas", title: "Christmas on The Bee's Knees" },
    { play: "tv homemovies", title: "Home Movies on The Bee's Knees" }
  ],

  blocks: [
    /* ---------- Christmas ---------- */
    // December Saturdays: Christmas at the Drive-In (the Drive-In's own Christmas double features)
    { dates: { from: "12-01", to: "12-26" }, days: ["sat"], from: "19:00", to: "19:30", play: "tv christmas", title: "Christmas at the Drive-In starts at 7:30" },
    { dates: { from: "12-01", to: "12-26" }, days: ["sat"], from: "19:30", to: "23:59", play: "drive-in",     title: "Christmas at the Drive-In" },
    // Christmas Eve: Christmas TV all afternoon, then the Drive-In's Christmas Eve double feature
    { dates: "12-24", from: "14:00", to: "19:30", play: "tv christmas", title: "Christmas Eve on Bee's Knees TV" },
    { dates: "12-24", from: "19:30", to: "23:00", play: "drive-in",     title: "Christmas Eve at the Drive-In: March of the Wooden Soldiers and Christmas Eve" },
    // Christmas Day: Christmas TV in the morning, the Drive-In at night
    { dates: "12-25", from: "07:00", to: "12:00", play: "tv christmas", title: "Christmas Morning" },
    { dates: "12-25", from: "19:30", to: "23:00", play: "drive-in",     title: "Christmas Night at the Drive-In: The Bells of St. Mary's and Beyond Tomorrow" },
    // New Year's Eve: Gramophone Radio dance records to midnight
    { dates: "12-31", from: "20:00", to: "23:59", play: "radio gramophone", title: "New Year's Eve Dance Party" },

    /* ---------- every week: five streams ---------- */
    // Monday: trying out a second Magazine Rack night. "quiet: true" keeps it off the website's watch-party button
    { days: ["mon"], from: "19:00", to: "21:00", play: "magazines",      title: "The Magazine Rack", quiet: true },
    { days: ["tue"], from: "19:00", to: "21:00", play: "tv newsreels",   title: "Oddities Night" },
    { days: ["wed"], from: "19:00", to: "21:00", play: "magazines",      title: "The Magazine Rack" },
    // Thursday: Radio Night till midnight (to fall asleep to), a different old-time radio station each week
    { days: ["thu"], from: "19:00", to: "23:59", play: "radio chills",   title: "Radio Night", since: "2026-11-12", rotate: [
        { play: "radio chills",     title: "Radio Night: Chills" },
        { play: "radio noir",       title: "Radio Night: Noir" },
        { play: "radio scifi",      title: "Radio Night: Sci-Fi" },
        { play: "radio laughs",     title: "Radio Night: Laughs" },
        { play: "radio romance",    title: "Radio Night: Romance & Drama" },
        { play: "radio variety",    title: "Radio Night: Variety" },
        { play: "radio outwest",    title: "Radio Night: Out West" }
      ] },
    // Friday: Jukebox Night. The jukebox is its own OBS scene (jukebox-obs.html), switched to by the scene switcher;
    // this line puts it on the website's watch-party button, and obs.html leaves "jukebox" alone.
    { days: ["fri"], from: "19:00", to: "23:59", play: "jukebox",        title: "Jukebox Night" },  // till midnight
    { days: ["sat"], from: "19:00", to: "19:30", play: "tv commercials", title: "Saturday at the Drive-In: the show starts at 7:30" },
    // the Drive-In runs until its double feature is over, which can be after 11 PM or even past midnight: the stream
    // page switches OBS to the Goodbye scene itself when the "Good night" card comes up (see obs.html, goodbye=)
    { days: ["sat"], from: "19:30", to: "23:59", play: "drive-in",       title: "Saturday at the Drive-In" },
    { days: ["sun"], from: "00:00", to: "01:00", play: "drive-in",       quiet: true },   // a late second feature finishes
    { days: ["sun"], from: "10:00", to: "13:00", play: "tv homemovies",  title: "Sunday Drive" }
  ]
};
