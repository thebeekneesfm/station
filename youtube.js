/* The Bee's Knees on YouTube: the videos shown on youtube.html, newest first.
   New long videos from the channel are added automatically once a day (scripts/youtube_sync.py; Shorts are skipped).
   To add one by hand, copy a line and change the id (the part after "v=" or "youtu.be/") and the title.
   To take one off for good, delete its line and put its id in "hidden" so the daily update doesn't add it back. */
window.YOUTUBE = {
  channel: "https://www.youtube.com/@thebeeskneesfm",
  // ids of videos to keep off the page (the daily update won't add them back)
  hidden: [],
  videos: [
    { id: "5mqOaqCnm4w", title: "Vintage TV 1.5 hours 1950s Dream Kitchens, Coily the Spring & Vintage Newsreels | The Bee’s Knees" },
    { id: "pLTI6KO4uXI", title: "Bing Crosby - Merry Christmas (1945) | Full Album | Christmas Music NO AI" },
    { id: "ab2MBzp3pkI", title: "1940s & '50s Christmas Playlist: Vintage Holiday Swing (1 Hour)" },
    { id: "CaaGx75KEN0", title: "Vintage Christmas Commercials from the 1950s and '60s" }
  ]
};
