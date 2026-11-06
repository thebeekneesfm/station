/* THE STREAM'S WEEKLY SCHEDULE
   Used by obs.html when its address has ?schedule=1 in it. At the start of each block the stream
   switches by itself; chat can still vote in between, and the next block takes back over.
   Times are Pacific. Days: sun mon tue wed thu fri sat.
   play: "radio chills" / "radio swing" ...   "tv kids" / "tv cops" ...   "drive-in"
   title is what shows on screen when the block begins.
   To change the schedule, edit the lines below (keep the commas), save, and refresh the source in OBS. */
window.STREAM_SCHEDULE = {
  // when nothing below is on
  otherwise: { play: "radio swing", title: "The Bee's Knees, live" },
  blocks: [
    { days: ["mon"], from: "19:00", to: "19:30", play: "radio chills",  title: "Monster Monday" },
    { days: ["mon"], from: "19:30", to: "23:59", play: "drive-in",      title: "Monster Monday at the Drive-In" },
    { days: ["fri"], from: "19:00", to: "19:30", play: "radio laughs",  title: "Comedy Friday" },
    { days: ["fri"], from: "19:30", to: "23:59", play: "drive-in",      title: "Comedy Friday at the Drive-In" },
    { days: ["sat"], from: "09:00", to: "11:00", play: "tv kids",       title: "Saturday Morning Cartoons" },
    { days: ["sat"], from: "19:30", to: "23:59", play: "drive-in",      title: "Creature Feature Saturday" },
    { days: ["sun"], from: "21:00", to: "23:59", play: "radio sleepy",  title: "Sleepy Time" }
  ]
};
