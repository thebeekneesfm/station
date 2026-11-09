/* THE MAGAZINES FOR THE STREAM
   What the stream page (obs.html) flips through in magazine mode: the schedule's play: "magazines" (with a radio
   station after it if you like, "magazines gramophone"), or obs.html?mode=magazines to try it.
   Only issues on this list are shown on stream. Each one has to be on the site's magazine rack (art/rack/rack.js),
   which is where its title, date and page count come from, and any pages hidden there are skipped here too.
   To add one: copy a line and change the id (the Archive id, the same as on the rack). To take one off: delete its line.
   To skip a single page on stream only, add it to "skip" below as "id:page" (pages counted from 0, as on the rack).
   flip: seconds each open spread stays up before the page turns. */
window.STREAM_MAGAZINES = {
  flip: 18,
  issues: [
    "tvguide-chicago-1953-05-01",          // TV Guide, May 1953
    "tvguide-chicago-1954-04-30",          // TV Guide, Apr. 1954
    "tvguide-chicago-1955-12-31",          // TV Guide, Dec. 31 1955
    "life-magazine-1937-07-jul-05-july-5-1937", // LIFE, July 5 1937
    "Life_1947_12DEC_01",                  // LIFE, Dec. 1 1947
    "Life_1948_08AUG_16",                  // LIFE, Aug. 16 1948
    "lifemagazinemay51952",                // LIFE, May 5 1952
    "9EcEAAAAMBAJ",                        // LIFE, Sept. 3 1956
    "v0QEAAAAMBAJ",                        // LIFE, Oct. 17 1960
    "UUgEAAAAMBAJ",                        // LIFE, Oct. 2 1964
    "cosmopolitan-v-125-n-03-1948-09",     // Cosmopolitan, Sept. 1948
    "cosmopolitan-v-138-n-05-1955-05",     // Cosmopolitan, May 1955
    "cosmopolitan-v-143-n-06-1957-12",     // Cosmopolitan, Dec. 1957
    "195110",                              // National Geographic, Oct. 1951
    "195507"                               // National Geographic, July 1955
  ],
  skip: []
};
