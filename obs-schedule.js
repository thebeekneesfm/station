/* THE STREAM'S SCHEDULE
   Used by obs.html when its address has ?schedule=1 in it. At the start of each block the stream
   switches by itself; chat can still vote in between, and the next block takes back over.

   Times are Pacific, 24-hour ("19:30" is 7:30 PM). Days: sun mon tue wed thu fri sat.
   dates (optional): a single day "12-24", or a range { from: "12-01", to: "12-26" } (month-day).
   A block with dates wins over the everyday weekly blocks, so holidays take over for their days.
   play: "radio chills", "radio gramophone", "radio laughs" ...   "tv kids", "tv christmas" ...   "drive-in"
   title: what shows on screen when the block begins.
   To change it, edit the lines below (keep the commas and quote marks), save, and refresh the source in OBS. */
window.STREAM_SCHEDULE = {
  // what plays when no block is on (the first line that fits today wins)
  otherwise: [
    { dates: { from: "11-26", to: "01-06" }, play: "tv christmas", title: "Christmas on The Bee's Knees" },
    { play: "radio gramophone", title: "The Bee's Knees, live" }
  ],

  blocks: [
    /* ---------- Christmas ---------- */
    // the holiday season's evenings: Christmas at the Drive-In every night, December 1 to 26
    { dates: { from: "12-01", to: "12-26" }, from: "19:00", to: "19:30", play: "tv christmas",    title: "Christmas at the Drive-In starts at 7:30" },
    { dates: { from: "12-01", to: "12-26" }, from: "19:30", to: "23:59", play: "drive-in",        title: "Christmas at the Drive-In" },
    // Saturday mornings in December: Christmas cartoons
    { dates: { from: "12-01", to: "12-26" }, days: ["sat"], from: "09:00", to: "11:00", play: "tv christmas", title: "Saturday Morning Christmas Cartoons" },
    // Christmas Eve: Christmas TV all afternoon, then the Drive-In's Christmas Eve double feature
    { dates: "12-24", from: "14:00", to: "19:30", play: "tv christmas",    title: "Christmas Eve on Bee's Knees TV" },
    { dates: "12-24", from: "19:30", to: "23:59", play: "drive-in",        title: "Christmas Eve at the Drive-In: March of the Wooden Soldiers and A Christmas Carol" },
    // Christmas Day: Christmas TV in the morning
    { dates: "12-25", from: "07:00", to: "12:00", play: "tv christmas",    title: "Christmas Morning" },
    // New Year's Eve: Gramophone Radio dance records to midnight
    { dates: "12-31", from: "20:00", to: "23:59", play: "radio gramophone",   title: "New Year's Eve Dance Party" },

    /* ---------- every week ---------- */
    { days: ["mon"], from: "19:00", to: "19:30", play: "radio chills",  title: "Monster Monday" },
    { days: ["mon"], from: "19:30", to: "23:59", play: "drive-in",      title: "Monster Monday at the Drive-In" },
    { days: ["fri"], from: "19:00", to: "19:30", play: "radio laughs",  title: "Comedy Friday" },
    { days: ["fri"], from: "19:30", to: "23:59", play: "drive-in",      title: "Comedy Friday at the Drive-In" },
    { days: ["sat"], from: "09:00", to: "11:00", play: "tv kids",       title: "Saturday Morning Cartoons" },
    { days: ["sat"], from: "19:30", to: "23:59", play: "drive-in",      title: "Creature Feature Saturday" },
    { days: ["sun"], from: "21:00", to: "23:59", play: "radio romance", title: "Sunday Night Theater" }
  ]
};
