/* The comic and magazine racks. Every issue is read straight from its page images at the Internet Archive.
   The first issues were looked through page by page for racist caricature; the Nov 2026 additions (Superheroes, Funny Pages,
   Radio Mirror, Photoplay, Modern Screen, Mechanix Illustrated and more) were added without that review.
   To hide a page, add its number (counting from 0) to a "hide" list on that issue, like the Saturday Evening Post has.
   To add an issue: copy a line, change the Archive id, title, issue, date, publisher and page count.
   To take one down: delete its line.
   Covers load from art/rack/covers/<id>.webp (300px wide) so the racks are quick; a new issue without one there uses its Archive cover until one is added. */
window.RACK = [
 {
  "shelf": "Horror & Suspense",
  "kind": "comics",
  "issues": [
   {
    "id": "fawcett-beware-terror-tales-002",
    "title": "Beware! Terror Tales",
    "issue": "No. 2",
    "date": "July 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett-beware-terror-tales-003",
    "title": "Beware! Terror Tales",
    "issue": "No. 3",
    "date": "September 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett-beware-terror-tales-004",
    "title": "Beware! Terror Tales",
    "issue": "No. 4",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett-beware-terror-tales-007",
    "title": "Beware! Terror Tales",
    "issue": "No. 7",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Strange_Suspense_Stories_001",
    "title": "Strange Suspense Stories",
    "issue": "No. 1",
    "date": "",
    "publisher": "Charlton Comics",
    "pages": 36
   },
   {
    "id": "fawcett_This_Magazine_Is_Haunted_004_1952-04",
    "title": "This Magazine Is Haunted",
    "issue": "No. 4",
    "date": "April 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_This_Magazine_Is_Haunted_005_1952-06",
    "title": "This Magazine Is Haunted",
    "issue": "No. 5",
    "date": "June 1952",
    "publisher": "Fawcett Publications",
    "pages": 34
   },
   {
    "id": "fawcett_This_Magazine_is_Haunted_006",
    "title": "This Magazine Is Haunted",
    "issue": "No. 6",
    "date": "August 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_This_Magazine_Is_Haunted_008_1952",
    "title": "This Magazine Is Haunted",
    "issue": "No. 8",
    "date": "1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_This_Magazine_Is_Haunted_009_Fawcett_1953",
    "title": "This Magazine Is Haunted",
    "issue": "No. 9",
    "date": "1953",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_This_Magazine_Is_Haunted_011_1953-06",
    "title": "This Magazine Is Haunted",
    "issue": "No. 11",
    "date": "June 1953",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_This_Magazine_is_Haunted_014",
    "title": "This Magazine Is Haunted",
    "issue": "No. 14",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Worlds_of_Fear_008_1953-01",
    "title": "Worlds of Fear",
    "issue": "No. 8",
    "date": "January 1953",
    "publisher": "Fawcett Publications",
    "pages": 38
   },
   {
    "id": "fawcett_This_Magazine_is_Haunted_007",
    "title": "This Magazine Is Haunted",
    "issue": "No. 7",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_This_Magazine_Is_Haunted_012_1953-08",
    "title": "This Magazine Is Haunted",
    "issue": "No. 12",
    "date": "August 1953",
    "publisher": "Fawcett Publications",
    "pages": 33
   },
   {
    "id": "fawcett_This_Magazine_is_Haunted_010_Fawcett_1953",
    "title": "This Magazine Is Haunted",
    "issue": "No. 10",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 34
   },
   {
    "id": "fawcett_This_Magazine_Is_Haunted_013_Fawcett_1952",
    "title": "This Magazine Is Haunted",
    "issue": "No. 13",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett-beware-terror-tales-006",
    "title": "Beware Terror Tales",
    "issue": "No. 6",
    "date": "March 1953",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Worlds_of_Fear_004_1952-05",
    "title": "Worlds of Fear",
    "issue": "No. 4",
    "date": "May 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Strange_Suspense_Stories_002",
    "title": "Strange Suspense Stories",
    "issue": "No. 2",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Strange_Suspense_Stories_003",
    "title": "Strange Suspense Stories",
    "issue": "No. 3",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Strange_Suspense_Stories_005_Fawcett_1953",
    "title": "Strange Suspense Stories",
    "issue": "No. 5",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   }
  ]
 },
 {
  "shelf": "Crime & Detective",
  "kind": "comics",
  "issues": [
   {
    "id": "CrimeDoesNotPay044",
    "title": "Crime Does Not Pay",
    "issue": "No. 44",
    "date": "",
    "publisher": "Lev Gleason Publications",
    "pages": 70
   },
   {
    "id": "CrimeDoesNotPay084",
    "title": "Crime Does Not Pay",
    "issue": "No. 84",
    "date": "1950",
    "publisher": "Lev Gleason Publications",
    "pages": 53
   },
   {
    "id": "CrimeDoesNotPay088",
    "title": "Crime Does Not Pay",
    "issue": "No. 88",
    "date": "June 1950",
    "publisher": "Lev Gleason Publications",
    "pages": 53
   },
   {
    "id": "CrimeDoesNotPay098",
    "title": "Crime Does Not Pay",
    "issue": "No. 98",
    "date": "",
    "publisher": "Lev Gleason Publications",
    "pages": 53
   },
   {
    "id": "CrimeDoesNotPay100",
    "title": "Crime Does Not Pay",
    "issue": "No. 100",
    "date": "",
    "publisher": "Lev Gleason Publications",
    "pages": 53
   },
   {
    "id": "CrimeDoesNotPay112-upgrade",
    "title": "Crime Does Not Pay",
    "issue": "No. 112",
    "date": "",
    "publisher": "Lev Gleason Publications",
    "pages": 37
   },
   {
    "id": "fawcett_Underworld_Crime_003_1952-10",
    "title": "Underworld Crime",
    "issue": "No. 3",
    "date": "October 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett-mike-barnett-mac-05",
    "title": "Mike Barnett, Man Against Crime",
    "issue": "No. 5",
    "date": "August 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett-mike-barnett-mac-06",
    "title": "Mike Barnett, Man Against Crime",
    "issue": "No. 6",
    "date": "October 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   }
  ]
 },
 {
  "shelf": "Science Fiction",
  "kind": "comics",
  "issues": [
   {
    "id": "SpaceAdventures01",
    "title": "Space Adventures",
    "issue": "No. 1",
    "date": "1952",
    "publisher": "Charlton Comics",
    "pages": 31
   },
   {
    "id": "SpaceAdventures02",
    "title": "Space Adventures",
    "issue": "No. 2",
    "date": "1952",
    "publisher": "Charlton Comics",
    "pages": 32
   },
   {
    "id": "SpaceAdventures03",
    "title": "Space Adventures",
    "issue": "No. 3",
    "date": "1952",
    "publisher": "Charlton Comics",
    "pages": 32
   },
   {
    "id": "SpaceAdventures04",
    "title": "Space Adventures",
    "issue": "No. 4",
    "date": "1953",
    "publisher": "Charlton Comics",
    "pages": 32
   },
   {
    "id": "SpaceAdventures05",
    "title": "Space Adventures",
    "issue": "No. 5",
    "date": "1953",
    "publisher": "Charlton Comics",
    "pages": 32
   },
   {
    "id": "SpaceAdventures06",
    "title": "Space Adventures",
    "issue": "No. 6",
    "date": "1953",
    "publisher": "Charlton Comics",
    "pages": 31
   },
   {
    "id": "SpaceAdventures07",
    "title": "Space Adventures",
    "issue": "No. 7",
    "date": "1953",
    "publisher": "Charlton Comics",
    "pages": 31
   },
   {
    "id": "SpaceAdventures08",
    "title": "Space Adventures",
    "issue": "No. 8",
    "date": "1953",
    "publisher": "Charlton Comics",
    "pages": 31
   },
   {
    "id": "SpaceAdventures09",
    "title": "Space Adventures",
    "issue": "No. 9",
    "date": "1953",
    "publisher": "Charlton Comics",
    "pages": 31
   },
   {
    "id": "SpaceAdventures10",
    "title": "Space Adventures",
    "issue": "No. 10",
    "date": "1953",
    "publisher": "Charlton Comics",
    "pages": 37
   },
   {
    "id": "SpaceAdventures12",
    "title": "Space Adventures",
    "issue": "No. 12",
    "date": "1954",
    "publisher": "Charlton Comics",
    "pages": 37
   },
   {
    "id": "SpaceAdventures13",
    "title": "Space Adventures",
    "issue": "No. 13",
    "date": "1954",
    "publisher": "Charlton Comics",
    "pages": 30
   },
   {
    "id": "fawcett_Captain_Video_001_1951-02",
    "title": "Captain Video",
    "issue": "No. 1",
    "date": "February 1951",
    "publisher": "Fawcett Publications",
    "pages": 26
   },
   {
    "id": "fawcett_Captain_Video_004_1951-08",
    "title": "Captain Video",
    "issue": "No. 4",
    "date": "August 1951",
    "publisher": "Fawcett Publications",
    "pages": 39
   },
   {
    "id": "fawcett_Captain_Video_005_1951-10",
    "title": "Captain Video",
    "issue": "No. 5",
    "date": "October 1951",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "destination-moon-50",
    "title": "Destination Moon",
    "issue": "No. 50",
    "date": "1950",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "unknown-world-comics-01-1952-06",
    "title": "Unknown World Comics",
    "issue": "No. 1",
    "date": "June 1952",
    "publisher": "Fawcett Publications",
    "pages": 34
   }
  ]
 },
 {
  "shelf": "Westerns",
  "kind": "comics",
  "issues": [
   {
    "id": "fawcett_Hopalong_Cassidy_061_1951-11",
    "title": "Hopalong Cassidy",
    "issue": "No. 61",
    "date": "November 1951",
    "publisher": "Fawcett Publications",
    "pages": 30
   },
   {
    "id": "fawcett_Hopalong_Cassidy_080_1953-06",
    "title": "Hopalong Cassidy",
    "issue": "No. 80",
    "date": "June 1953",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Hopalong_Cassidy_085_1953-11",
    "title": "Hopalong Cassidy",
    "issue": "No. 85",
    "date": "November 1953",
    "publisher": "Fawcett Publications",
    "pages": 36
   }
  ]
 },
 {
  "shelf": "Romance",
  "kind": "comics",
  "issues": [
   {
    "id": "LoveConfessions001",
    "title": "Love Confessions",
    "issue": "No. 1",
    "date": "October 1949",
    "publisher": "Quality Comics",
    "pages": 37
   },
   {
    "id": "LoveConfessions003",
    "title": "Love Confessions",
    "issue": "No. 3",
    "date": "",
    "publisher": "Quality Comics",
    "pages": 37
   },
   {
    "id": "LoveConfessions004",
    "title": "Love Confessions",
    "issue": "No. 4",
    "date": "",
    "publisher": "Quality Comics",
    "pages": 37
   },
   {
    "id": "LoveConfessions006",
    "title": "Love Confessions",
    "issue": "No. 6",
    "date": "",
    "publisher": "Quality Comics",
    "pages": 52
   },
   {
    "id": "fawcett_Romantic_Story_001_1949-11",
    "title": "Romantic Story",
    "issue": "No. 1",
    "date": "November 1949",
    "publisher": "Fawcett Publications",
    "pages": 49
   },
   {
    "id": "fawcett_Romantic_Story_013_1951-11",
    "title": "Romantic Story",
    "issue": "No. 13",
    "date": "November 1951",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Sweethearts_088_1950-06",
    "title": "Sweethearts",
    "issue": "No. 88",
    "date": "June 1950",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Sweethearts_103_1951-09",
    "title": "Sweethearts",
    "issue": "No. 103",
    "date": "September 1951",
    "publisher": "Fawcett Publications",
    "pages": 30
   },
   {
    "id": "fawcett_Sweethearts_114_1952-08",
    "title": "Sweethearts",
    "issue": "No. 114",
    "date": "August 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Romantic_Secrets_029_1952-04",
    "title": "Romantic Secrets",
    "issue": "No. 29",
    "date": "April 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Romantic_Secrets_037_1952-12",
    "title": "Romantic Secrets",
    "issue": "No. 37",
    "date": "December 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Sweetheart_Diary_013_1952-11",
    "title": "Sweetheart Diary",
    "issue": "No. 13",
    "date": "November 1952",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Sweetheart_Diary_008_1951-12",
    "title": "Sweetheart Diary",
    "issue": "No. 8",
    "date": "December 1951",
    "publisher": "Fawcett Publications",
    "pages": 36
   }
  ]
 },
 {
  "shelf": "Superheroes",
  "kind": "comics",
  "issues": [
   {
    "id": "fawcett_Captain_Marvel_Jr_045",
    "title": "Captain Marvel Jr.",
    "issue": "No. 45",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Captain_Marvel_Jr_059",
    "title": "Captain Marvel Jr.",
    "issue": "No. 59",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Captain_Marvel_Jr_073",
    "title": "Captain Marvel Jr.",
    "issue": "No. 73",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Captain_Marvel_Jr_093",
    "title": "Captain Marvel Jr.",
    "issue": "No. 93",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Captain_Marvel_Jr_119_alt_scan",
    "title": "Captain Marvel Jr.",
    "issue": "No. 119",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Marvel_Family_08",
    "title": "Marvel Family",
    "issue": "No. 8",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Marvel_Family_17",
    "title": "Marvel Family",
    "issue": "No. 17",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 53
   },
   {
    "id": "fawcett_Marvel_Family_35",
    "title": "Marvel Family",
    "issue": "No. 35",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Marvel_Family_055_1951-01",
    "title": "Marvel Family",
    "issue": "No. 55",
    "date": "January 1951",
    "publisher": "Fawcett Publications",
    "pages": 53
   },
   {
    "id": "fawcett_Marvel_Family_59",
    "title": "Marvel Family",
    "issue": "No. 59",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Marvel_Family_67",
    "title": "Marvel Family",
    "issue": "No. 67",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Marvel_Family_76",
    "title": "Marvel Family",
    "issue": "No. 76",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 33
   },
   {
    "id": "fawcett_Marvel_Family_89_final_issue",
    "title": "Marvel Family",
    "issue": "No. 89",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 37
   },
   {
    "id": "fawcett_Mary_Marvel_05",
    "title": "Mary Marvel",
    "issue": "No. 5",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Mary_Marvel_09",
    "title": "Mary Marvel",
    "issue": "No. 9",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Mary_Marvel_15",
    "title": "Mary Marvel",
    "issue": "No. 15",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 32
   },
   {
    "id": "fawcett_Mary_Marvel_18",
    "title": "Mary Marvel",
    "issue": "No. 18",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Mary_Marvel_26",
    "title": "Mary Marvel",
    "issue": "No. 26",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Whiz_Comics_086",
    "title": "Whiz Comics",
    "issue": "No. 86",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Whiz_Comics_102",
    "title": "Whiz Comics",
    "issue": "No. 102",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 48
   },
   {
    "id": "fawcett_Whiz_Comics_110",
    "title": "Whiz Comics",
    "issue": "No. 110",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 32
   },
   {
    "id": "fawcett_Whiz_Comics_126",
    "title": "Whiz Comics",
    "issue": "No. 126",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Whiz_Comics_143",
    "title": "Whiz Comics",
    "issue": "No. 143",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 31
   }
  ]
 },
 {
  "shelf": "Funny Pages",
  "kind": "comics",
  "issues": [
   {
    "id": "fawcett_Funny_Animals_038_1946-05",
    "title": "Funny Animals",
    "issue": "No. 38",
    "date": "May 1946",
    "publisher": "Fawcett Publications",
    "pages": 52
   },
   {
    "id": "fawcett_Funny_Animals_055_1947-11",
    "title": "Funny Animals",
    "issue": "No. 55",
    "date": "November 1947",
    "publisher": "Fawcett Publications",
    "pages": 37
   },
   {
    "id": "fawcett_Hoppy_the_Marvel_Bunny_001_1945-12",
    "title": "Hoppy the Marvel Bunny",
    "issue": "No. 1",
    "date": "December 1945",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Hoppy_the_Marvel_Bunny_002_1946-01",
    "title": "Hoppy the Marvel Bunny",
    "issue": "No. 2",
    "date": "January 1946",
    "publisher": "Fawcett Publications",
    "pages": 36
   },
   {
    "id": "fawcett_Hoppy_the_Marvel_Bunny_003",
    "title": "Hoppy the Marvel Bunny",
    "issue": "No. 3",
    "date": "",
    "publisher": "Fawcett Publications",
    "pages": 41
   }
  ]
 },
 {
  "shelf": "TV Guide",
  "kind": "magazines",
  "issues": [
   {
    "id": "tvguide-chicago-1953-05-01",
    "title": "TV Guide",
    "issue": "Chicago edition, May 1–7",
    "date": "1953",
    "publisher": "Triangle Publications",
    "pages": 73
   },
   {
    "id": "tvguide-cincinnati-1953-09-25",
    "title": "TV Guide",
    "issue": "Cincinnati edition, Sept. 25",
    "date": "1953",
    "publisher": "Triangle Publications",
    "pages": 57
   },
   {
    "id": "tvguide-chicago-1954-04-30",
    "title": "TV Guide",
    "issue": "Chicago edition, Apr. 30–May 6",
    "date": "1954",
    "publisher": "Triangle Publications",
    "pages": 69
   },
   {
    "id": "tvguide-chicago-1954-01-29",
    "title": "TV Guide",
    "issue": "Chicago edition, Jan. 29",
    "date": "1954",
    "publisher": "Triangle Publications",
    "pages": 65
   },
   {
    "id": "tvguide-chicago-1955-12-31",
    "title": "TV Guide",
    "issue": "Chicago edition, Dec. 31–Jan. 6",
    "date": "1955",
    "publisher": "Triangle Publications",
    "pages": 89
   },
   {
    "id": "tvguide-philadelphia-1955-11-19",
    "title": "TV Guide",
    "issue": "Philadelphia edition, Nov. 19–25",
    "date": "1955",
    "publisher": "Triangle Publications",
    "pages": 77
   },
   {
    "id": "tvguide-pittsburgh-1955-11-05",
    "title": "TV Guide",
    "issue": "Pittsburgh edition, Nov. 5–11",
    "date": "1955",
    "publisher": "Triangle Publications",
    "pages": 65
   }
  ]
 },
 {
  "shelf": "LIFE",
  "kind": "magazines",
  "issues": [
   {
    "id": "life-magazine-1937-06-jun-21-june-21-1937",
    "title": "LIFE",
    "issue": "",
    "date": "June 21, 1937",
    "publisher": "Time Inc.",
    "pages": 102
   },
   {
    "id": "life-magazine-1937-07-jul-05-july-5-1937",
    "title": "LIFE",
    "issue": "",
    "date": "July 5, 1937",
    "publisher": "Time Inc.",
    "pages": 84
   },
   {
    "id": "life-magazine-1937-08-aug-23-august-23-1937",
    "title": "LIFE",
    "issue": "",
    "date": "August 23, 1937",
    "publisher": "Time Inc.",
    "pages": 84
   },
   {
    "id": "life-magazine-september-20th-1937",
    "title": "LIFE",
    "issue": "",
    "date": "September 20, 1937",
    "publisher": "Time Inc.",
    "pages": 132
   },
   {
    "id": "kD8EAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "November 8, 1937",
    "publisher": "Time Inc.",
    "pages": 140
   },
   {
    "id": "00wEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "January 30, 1939",
    "publisher": "Time Inc.",
    "pages": 68
   },
   {
    "id": "LifeMagazine",
    "title": "LIFE",
    "issue": "",
    "date": "October 29, 1939",
    "publisher": "Time Inc.",
    "pages": 96
   },
   {
    "id": "RUoEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "January 13, 1941",
    "publisher": "Time Inc.",
    "pages": 92
   },
   {
    "id": "I0kEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "February 17, 1941",
    "publisher": "Time Inc.",
    "pages": 96
   },
   {
    "id": "life-1942-04-27",
    "title": "LIFE",
    "issue": "",
    "date": "April 27, 1942",
    "publisher": "Time Inc.",
    "pages": 85
   },
   {
    "id": "artifact2023_0025",
    "title": "LIFE",
    "issue": "",
    "date": "January 11, 1943",
    "publisher": "Time Inc.",
    "pages": 108
   },
   {
    "id": "FVUEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "December 13, 1943",
    "publisher": "Time Inc.",
    "pages": 144
   },
   {
    "id": "ik8EAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "June 5, 1944",
    "publisher": "Time Inc.",
    "pages": 126
   },
   {
    "id": "CEIEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "October 16, 1944",
    "publisher": "Time Inc.",
    "pages": 132
   },
   {
    "id": "ylmeaaaambaj",
    "title": "LIFE",
    "issue": "",
    "date": "January 12, 1945",
    "publisher": "Time Inc.",
    "pages": 94
   },
   {
    "id": "7kkEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "May 28, 1945",
    "publisher": "Time Inc.",
    "pages": 128
   },
   {
    "id": "hkgEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "August 20, 1945",
    "publisher": "Time Inc.",
    "pages": 138
   },
   {
    "id": "life-magazine-1947-05-may-26",
    "title": "LIFE",
    "issue": "",
    "date": "May 26, 1947",
    "publisher": "Time Inc.",
    "pages": 144
   },
   {
    "id": "life-magazine-1947-06-jun-02-june-2-1947",
    "title": "LIFE",
    "issue": "",
    "date": "June 2, 1947",
    "publisher": "Time Inc.",
    "pages": 148
   },
   {
    "id": "life-magazine-1947-08-aug-11-august-11-1947",
    "title": "LIFE",
    "issue": "",
    "date": "August 11, 1947",
    "publisher": "Time Inc.",
    "pages": 124
   },
   {
    "id": "Life_1947_11NOV_10",
    "title": "LIFE",
    "issue": "",
    "date": "November 10, 1947",
    "publisher": "Time Inc.",
    "pages": 159
   },
   {
    "id": "Life_1947_12DEC_01",
    "title": "LIFE",
    "issue": "",
    "date": "December 1, 1947",
    "publisher": "Time Inc.",
    "pages": 164
   },
   {
    "id": "nlIEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "December 8, 1947",
    "publisher": "Time Inc.",
    "pages": 152,
    "hide": [
     18
    ]
   },
   {
    "id": "Life_1948_08AUG_16",
    "title": "LIFE",
    "issue": "",
    "date": "August 16, 1948",
    "publisher": "Time Inc.",
    "pages": 112
   },
   {
    "id": "lifemagazinemay51952",
    "title": "LIFE",
    "issue": "",
    "date": "May 5, 1952",
    "publisher": "Time Inc.",
    "pages": 156
   },
   {
    "id": "C1YEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "May 26, 1952",
    "publisher": "Time Inc.",
    "pages": 134,
    "hide": [
     123
    ]
   },
   {
    "id": "9EcEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "September 3, 1956",
    "publisher": "Time Inc.",
    "pages": 106,
    "hide": [
     54
    ]
   },
   {
    "id": "DFQEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "February 18, 1957",
    "publisher": "Time Inc.",
    "pages": 136,
    "hide": [
     1
    ]
   },
   {
    "id": "l0geaaaambaj",
    "title": "LIFE",
    "issue": "",
    "date": "February 23, 1959",
    "publisher": "Time Inc.",
    "pages": 124,
    "hide": [
     77
    ]
   },
   {
    "id": "RFUEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "November 2, 1959",
    "publisher": "Time Inc.",
    "pages": 132,
    "hide": [
     111
    ]
   },
   {
    "id": "v0QEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "October 17, 1960",
    "publisher": "Time Inc.",
    "pages": 144
   },
   {
    "id": "e1IEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "September 20, 1963",
    "publisher": "Time Inc.",
    "pages": 142
   },
   {
    "id": "life-1963-12-dec-13",
    "title": "LIFE",
    "issue": "",
    "date": "December 13, 1963",
    "publisher": "Time Inc.",
    "pages": 132
   },
   {
    "id": "YUkEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "August 1, 1964",
    "publisher": "Time Inc.",
    "pages": 102,
    "hide": [
     32
    ]
   },
   {
    "id": "UUgEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "October 2, 1964",
    "publisher": "Time Inc.",
    "pages": 158
   },
   {
    "id": "WFMEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "August 27, 1965",
    "publisher": "Time Inc.",
    "pages": 100,
    "hide": [
     21,
     63
    ]
   },
   {
    "id": "life-feb-1966",
    "title": "LIFE",
    "issue": "",
    "date": "February 4, 1966",
    "publisher": "Time Inc.",
    "pages": 110
   },
   {
    "id": "life-1966-06-10-plot-to-get-whitey-red",
    "title": "LIFE",
    "issue": "",
    "date": "June 10, 1966",
    "publisher": "Time Inc.",
    "pages": 74
   },
   {
    "id": "life-magazine-the-texas-sniper-august-12-1966",
    "title": "LIFE",
    "issue": "",
    "date": "August 12, 1966",
    "publisher": "Time Inc.",
    "pages": 13
   },
   {
    "id": "Life_1967_05MAY_12",
    "title": "LIFE",
    "issue": "",
    "date": "May 12, 1967",
    "publisher": "Time Inc.",
    "pages": 154
   },
   {
    "id": "LifeMagazineJune211968",
    "title": "LIFE",
    "issue": "",
    "date": "June 21, 1968",
    "publisher": "Time Inc.",
    "pages": 110
   },
   {
    "id": "lifemagjuly41969",
    "title": "LIFE",
    "issue": "",
    "date": "July 4, 1969",
    "publisher": "Time Inc.",
    "pages": 82,
    "hide": [
     15
    ]
   },
   {
    "id": "life-1969-09-19-sex-education-for-little-children-red",
    "title": "LIFE",
    "issue": "",
    "date": "September 19, 1969",
    "publisher": "Time Inc.",
    "pages": 69
   },
   {
    "id": "life-magazine-1969-10-24-the-day-of-dissent-red",
    "title": "LIFE",
    "issue": "",
    "date": "October 24, 1969",
    "publisher": "Time Inc.",
    "pages": 57
   },
   {
    "id": "mlAEAAAAMBAJ",
    "title": "LIFE",
    "issue": "",
    "date": "December 26, 1969",
    "publisher": "Time Inc.",
    "pages": 122,
    "hide": [
     22,
     29,
     30,
     53,
     92,
     109
    ]
   }
  ]
 },
 {
  "shelf": "National Geographic",
  "kind": "magazines",
  "issues": [
   {
    "id": "nationalgeographic19210701",
    "title": "National Geographic",
    "issue": "",
    "date": "July, 1921",
    "publisher": "National Geographic Society",
    "pages": 144
   },
   {
    "id": "nationalgeographic19220201",
    "title": "National Geographic",
    "issue": "",
    "date": "February, 1922",
    "publisher": "National Geographic Society",
    "pages": 157
   },
   {
    "id": "nationalgeographic19220301",
    "title": "National Geographic",
    "issue": "",
    "date": "March, 1922",
    "publisher": "National Geographic Society",
    "pages": 164
   },
   {
    "id": "nationalgeographic19220701",
    "title": "National Geographic",
    "issue": "",
    "date": "July, 1922",
    "publisher": "National Geographic Society",
    "pages": 152
   },
   {
    "id": "nationalgeographic19220901",
    "title": "National Geographic",
    "issue": "",
    "date": "September, 1922",
    "publisher": "National Geographic Society",
    "pages": 160
   },
   {
    "id": "nationalgeographic19230101",
    "title": "National Geographic",
    "issue": "",
    "date": "January, 1923",
    "publisher": "National Geographic Society",
    "pages": 164
   },
   {
    "id": "nationalgeographic19230401",
    "title": "National Geographic",
    "issue": "",
    "date": "April, 1923",
    "publisher": "National Geographic Society",
    "pages": 197
   },
   {
    "id": "nationalgeographic19230801",
    "title": "National Geographic",
    "issue": "",
    "date": "August, 1923",
    "publisher": "National Geographic Society",
    "pages": 164
   },
   {
    "id": "nationalgeographic19230901",
    "title": "National Geographic",
    "issue": "",
    "date": "September, 1923",
    "publisher": "National Geographic Society",
    "pages": 176
   },
   {
    "id": "nationalgeographic19231001",
    "title": "National Geographic",
    "issue": "",
    "date": "October, 1923",
    "publisher": "National Geographic Society",
    "pages": 188
   },
   {
    "id": "nationalgeographic19240201",
    "title": "National Geographic",
    "issue": "",
    "date": "February, 1924",
    "publisher": "National Geographic Society",
    "pages": 180
   },
   {
    "id": "nationalgeographic19240601",
    "title": "National Geographic",
    "issue": "",
    "date": "June, 1924",
    "publisher": "National Geographic Society",
    "pages": 180
   },
   {
    "id": "nationalgeographic19240801",
    "title": "National Geographic",
    "issue": "",
    "date": "August, 1924",
    "publisher": "National Geographic Society",
    "pages": 140
   },
   {
    "id": "nationalgeographic19241101",
    "title": "National Geographic",
    "issue": "",
    "date": "November, 1924",
    "publisher": "National Geographic Society",
    "pages": 204
   },
   {
    "id": "nationalgeographic19260101",
    "title": "National Geographic",
    "issue": "",
    "date": "January, 1926",
    "publisher": "National Geographic Society",
    "pages": 176
   },
   {
    "id": "194912",
    "title": "National Geographic",
    "issue": "",
    "date": "December, 1949",
    "publisher": "National Geographic Society",
    "pages": 184
   },
   {
    "id": "195110",
    "title": "National Geographic",
    "issue": "",
    "date": "October, 1951",
    "publisher": "National Geographic Society",
    "pages": 176
   },
   {
    "id": "195507",
    "title": "National Geographic",
    "issue": "",
    "date": "July, 1955",
    "publisher": "National Geographic Society",
    "pages": 180
   },
   {
    "id": "june-1965-vol-127-no-06",
    "title": "National Geographic",
    "issue": "",
    "date": "June, 1965",
    "publisher": "National Geographic Society",
    "pages": 182,
    "hide": [
     81
    ]
   },
   {
    "id": "aug-1965-vol-128-no-02",
    "title": "National Geographic",
    "issue": "",
    "date": "August, 1965",
    "publisher": "National Geographic Society",
    "pages": 166,
    "hide": [
     133
    ]
   },
   {
    "id": "dec-1965-vol-128-no-06",
    "title": "National Geographic",
    "issue": "",
    "date": "December, 1965",
    "publisher": "National Geographic Society",
    "pages": 184,
    "hide": [
     40
    ]
   },
   {
    "id": "sim_national-geographic_national-geographic_january-june-1963_123_index",
    "title": "National Geographic",
    "issue": "",
    "date": "January-June 1963",
    "publisher": "National Geographic Society",
    "pages": 36
   },
   {
    "id": "sim_national-geographic_national-geographic_july-december-1962_122_index",
    "title": "National Geographic",
    "issue": "",
    "date": "July-December 1962",
    "publisher": "National Geographic Society",
    "pages": 35
   }
  ]
 },
 {
  "shelf": "Cosmopolitan",
  "kind": "magazines",
  "issues": [
   {
    "id": "cosmopolitan-v-120-n-04-1946-04",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "April, 1946",
    "publisher": "Hearst",
    "pages": 214
   },
   {
    "id": "cosmopolitan-v-120-n-05-1946-05",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "May, 1946",
    "publisher": "Hearst",
    "pages": 218,
    "hide": [
     55
    ]
   },
   {
    "id": "cosmopolitan-v-121-n-04-1946-10",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "October, 1946",
    "publisher": "Hearst",
    "pages": 228
   },
   {
    "id": "cosmopolitan-v-122-n-05-1947-05",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "May, 1947",
    "publisher": "Hearst",
    "pages": 218
   },
   {
    "id": "cosmopolitan-v-123-n-04-1947-10-sas",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "October, 1947",
    "publisher": "Hearst",
    "pages": 216
   },
   {
    "id": "cosmopolitan-v-124-n-02-1948-02",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1948",
    "publisher": "Hearst",
    "pages": 186,
    "hide": [
     184
    ]
   },
   {
    "id": "cosmopolitan-v-125-n-02-1948-08",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "August, 1948",
    "publisher": "Hearst",
    "pages": 176
   },
   {
    "id": "cosmopolitan-v-125-n-03-1948-09",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "September, 1948",
    "publisher": "Hearst",
    "pages": 188
   },
   {
    "id": "cosmopolitan-v-126-n-02-1949-02",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1949",
    "publisher": "Hearst",
    "pages": 184
   },
   {
    "id": "cosmopolitan-v-129-n-04-1950-10-sas",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "October, 1950",
    "publisher": "Hearst",
    "pages": 178
   },
   {
    "id": "CosmopolitanV130N02195102",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1951",
    "publisher": "Hearst",
    "pages": 160
   },
   {
    "id": "cosmopolitan-v-130-n-03-1951-03",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "March, 1951",
    "publisher": "Hearst",
    "pages": 172,
    "hide": [
     28,
     139
    ]
   },
   {
    "id": "cosmopolitan-v-130-n-04-1951-04",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "April, 1951",
    "publisher": "Hearst",
    "pages": 174
   },
   {
    "id": "cosmopolitan-v-131-n-03-1951-09",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "September, 1951",
    "publisher": "Hearst",
    "pages": 154
   },
   {
    "id": "cosmopolitan-v-131-n-04-1951-10",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "October, 1951",
    "publisher": "Hearst",
    "pages": 164
   },
   {
    "id": "cosmopolitan-v-132-n-02-1952-02",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1952",
    "publisher": "Hearst",
    "pages": 158
   },
   {
    "id": "CosmopolitanV132N03195203",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "March, 1952",
    "publisher": "Hearst",
    "pages": 170
   },
   {
    "id": "cosmopolitan-v-132-n-05-1952-05",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "May, 1952",
    "publisher": "Hearst",
    "pages": 172
   },
   {
    "id": "cosmopolitan-v-133-n-02-1952-08",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "August, 1952",
    "publisher": "Hearst",
    "pages": 166
   },
   {
    "id": "cosmopolitan-v-133-n-05-1952-11",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "November, 1952",
    "publisher": "Hearst",
    "pages": 166
   },
   {
    "id": "cosmopolitan-v-134-n-02-1953-02",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1953",
    "publisher": "Hearst",
    "pages": 144
   },
   {
    "id": "cosmopolitan-v-134-n-04-1953-04",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "April, 1953",
    "publisher": "Hearst",
    "pages": 148,
    "hide": [
     100
    ]
   },
   {
    "id": "cosmopolitan-v-134-n-05-1953-05",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "May, 1953",
    "publisher": "Hearst",
    "pages": 156
   },
   {
    "id": "cosmopolitan-v-135-n-01-1953-07",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "July, 1953",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-135-n-05-1953-11",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "November, 1953",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-135-n-06-1953-12",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "December, 1953",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-136-n-01-1954-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1954",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-136-n-02-1954-02",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1954",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-136-n-03-1954-03",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "March, 1954",
    "publisher": "Hearst",
    "pages": 140
   },
   {
    "id": "cosmopolitan-v-137-n-02-1954-08",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "August, 1954",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-137-n-03-1954-09.-hearst-darwin-ia",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "September, 1954",
    "publisher": "Hearst",
    "pages": 130
   },
   {
    "id": "cosmopolitan-v-138-n-01-1955-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1955",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-138-n-03-1955-03",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "March, 1955",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-138-n-04-1955-04",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "April, 1955",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-138-n-05-1955-05",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "May, 1955",
    "publisher": "Hearst",
    "pages": 138
   },
   {
    "id": "cosmopolitan-v-138-n-06-1955-06",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "June, 1955",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-139-n-02-1955-08",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "August, 1955",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-140-n-01-1956-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1956",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-140-n-06-1956-06",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "June, 1956",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-141-n-05-1956-11",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "November, 1956",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-142-n-01-1957-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1957",
    "publisher": "Hearst",
    "pages": 138
   },
   {
    "id": "cosmopolitan-v-142-n-03-1957-03",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "March, 1957",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-142-n-04-1957-04",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "April, 1957",
    "publisher": "Hearst",
    "pages": 148
   },
   {
    "id": "cosmopolitan-v-143-n-01-1957-07",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "July, 1957",
    "publisher": "Hearst",
    "pages": 138
   },
   {
    "id": "cosmopolitan-v-143-n-06-1957-12",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "December, 1957",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-144-n-01-1958-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1958",
    "publisher": "Hearst",
    "pages": 134
   },
   {
    "id": "cosmopolitan-v-144-n-02-1958-02",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1958",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-144-n-03-1958-03",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "March, 1958",
    "publisher": "Hearst",
    "pages": 142
   },
   {
    "id": "cosmopolitan-v-144-n-04-1958-04",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "April, 1958",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-145-n-01-1958-07",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "July, 1958",
    "publisher": "Hearst",
    "pages": 130
   },
   {
    "id": "cosmopolitan-v-146-n-01-1959-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1959",
    "publisher": "Hearst",
    "pages": 134
   },
   {
    "id": "cosmopolitan-v-146-n-02-1959-02",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1959",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-146-n-06-1959-06",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "June, 1959",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-147-n-01-1959-07",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "July, 1959",
    "publisher": "Hearst",
    "pages": 134
   },
   {
    "id": "cosmopolitan-v-147-n-03-1959-09",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "September, 1959",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-147-n-04-1959-10",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "October, 1959",
    "publisher": "Hearst",
    "pages": 135
   },
   {
    "id": "cosmopolitan-v-148-n-01-1960-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1960",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-148-n-05-1960-05",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "May, 1960",
    "publisher": "Hearst",
    "pages": 138
   },
   {
    "id": "cosmopolitan-v-148-n-06-1960-06",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "June, 1960",
    "publisher": "Hearst",
    "pages": 140
   },
   {
    "id": "cosmopolitan-v-149-n-06-1960-12",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "December, 1960",
    "publisher": "Hearst",
    "pages": 132
   },
   {
    "id": "cosmopolitan-v-150-n-01-1961-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1961",
    "publisher": "Hearst",
    "pages": 138
   },
   {
    "id": "cosmopolitan-v-151-n-05-1961-11",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "November, 1961",
    "publisher": "Hearst",
    "pages": 144
   },
   {
    "id": "cosmopolitan-v-152-n-02-1962-02",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "February, 1962",
    "publisher": "Hearst",
    "pages": 146
   },
   {
    "id": "cosmopolitan-v-153-n-02-1962-08",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "August, 1962",
    "publisher": "Hearst",
    "pages": 138
   },
   {
    "id": "cosmopolitan-v-154-n-01-1963-01",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "January, 1963",
    "publisher": "Hearst",
    "pages": 136
   },
   {
    "id": "cosmopolitan-v-157-n-04-1964-10",
    "title": "Cosmopolitan",
    "issue": "",
    "date": "October, 1964",
    "publisher": "Hearst",
    "pages": 138
   }
  ]
 },
 {
  "shelf": "MAD",
  "kind": "magazines",
  "issues": [
   {
    "id": "mad_magazine_1954",
    "title": "MAD",
    "issue": "",
    "date": "1954",
    "publisher": "EC Publications",
    "pages": 36
   },
   {
    "id": "mad-magazine-1956",
    "title": "MAD",
    "issue": "No. 195",
    "date": "1956",
    "publisher": "EC Publications",
    "pages": 60
   },
   {
    "id": "mad-magazine-1958",
    "title": "MAD",
    "issue": "No. 195",
    "date": "1958",
    "publisher": "EC Publications",
    "pages": 52,
    "hide": [
     30,
     35
    ]
   },
   {
    "id": "mad-magazine-090-1964",
    "title": "MAD",
    "issue": "No. 90",
    "date": "1964",
    "publisher": "EC Publications",
    "pages": 53,
    "hide": [
     7,
     22,
     49
    ]
   }
  ]
 },
 {
  "shelf": "The Saturday Evening Post",
  "kind": "magazines",
  "issues": [
   {
    "id": "the-saturday-evening-post-12-29-1951",
    "title": "The Saturday Evening Post",
    "issue": "",
    "date": "December 29, 1951",
    "publisher": "Curtis Publishing",
    "pages": 78,
    "hide": [
     15,
     16,
     27,
     31,
     32,
     46,
     47,
     48,
     49,
     54,
     68,
     74,
     75
    ]
   }
  ]
 },
 {
  "shelf": "Radio Mirror",
  "kind": "magazines",
  "issues": [
   {
    "id": "Radio-Mirror-1934-09-Vol-2-No-5",
    "title": "Radio Mirror",
    "issue": "",
    "date": "September 1934",
    "publisher": "Macfadden Publications",
    "pages": 83
   },
   {
    "id": "Radio-Mirror-1936-07-Vol-6-No-3",
    "title": "Radio Mirror",
    "issue": "",
    "date": "July 1936",
    "publisher": "Macfadden Publications",
    "pages": 93
   },
   {
    "id": "Radio-Mirror-1938-07-Vol-10-No-3",
    "title": "Radio Mirror",
    "issue": "",
    "date": "July 1938",
    "publisher": "Macfadden Publications",
    "pages": 89
   },
   {
    "id": "Radio-and-Television-Mirror-1940-07-Vol-14-No-3",
    "title": "Radio and Television Mirror",
    "issue": "",
    "date": "July 1940",
    "publisher": "Macfadden Publications",
    "pages": 85
   },
   {
    "id": "Radio-Mirror-1943-07-Vol-20-No-3",
    "title": "Radio Mirror",
    "issue": "",
    "date": "July 1943",
    "publisher": "Macfadden Publications",
    "pages": 91
   },
   {
    "id": "Radio-Mirror-1946-07-Vol-26-No-2",
    "title": "Radio Mirror",
    "issue": "",
    "date": "July 1946",
    "publisher": "Macfadden Publications",
    "pages": 97
   },
   {
    "id": "Radio-and-Television-Mirror-1948-07-Vol-30-No-2",
    "title": "Radio and Television Mirror",
    "issue": "",
    "date": "July 1948",
    "publisher": "Macfadden Publications",
    "pages": 107
   },
   {
    "id": "Radio-and-Television-Mirror-1950-07-Vol-34-No-2",
    "title": "Radio and Television Mirror",
    "issue": "",
    "date": "July 1950",
    "publisher": "Macfadden Publications",
    "pages": 107
   },
   {
    "id": "Radio-TV-Mirror-1952-07-Vol-38-No-2",
    "title": "Radio-TV Mirror",
    "issue": "",
    "date": "July 1952",
    "publisher": "Macfadden Publications",
    "pages": 107
   },
   {
    "id": "Radio-TV-Mirror-1954-07-Vol-42-No-2",
    "title": "Radio-TV Mirror",
    "issue": "",
    "date": "July 1954",
    "publisher": "Macfadden Publications",
    "pages": 103
   },
   {
    "id": "TV-Radio-Mirror-1957-07-Vol-48-No-2",
    "title": "TV Radio Mirror",
    "issue": "",
    "date": "July 1957",
    "publisher": "Macfadden Publications",
    "pages": 89
   },
   {
    "id": "TV-Radio-Mirror-1959-04-Vol-51-No-5",
    "title": "TV Radio Mirror",
    "issue": "",
    "date": "April 1959",
    "publisher": "Macfadden Publications",
    "pages": 85
   },
   {
    "id": "tv-radio-mirror-1970-11-nov",
    "title": "TV Radio Mirror",
    "issue": "",
    "date": "November 1970",
    "publisher": "Macfadden Publications",
    "pages": 112
   },
   {
    "id": "tv-radio-mirror-1973-02-feb",
    "title": "TV Radio Mirror",
    "issue": "",
    "date": "February 1973",
    "publisher": "Macfadden Publications",
    "pages": 61
   }
  ]
 },
 {
  "shelf": "Photoplay",
  "kind": "magazines",
  "issues": [
   {
    "id": "photoplay-1924-12",
    "title": "Photoplay",
    "issue": "",
    "date": "December 1924",
    "publisher": "Photoplay Publishing",
    "pages": 211
   },
   {
    "id": "Photoplay-1932-07-Vol-42-No-2",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1932",
    "publisher": "Photoplay Publishing",
    "pages": 129
   },
   {
    "id": "Photoplay-1935-07-Vol-48-No-2",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1935",
    "publisher": "Photoplay Publishing",
    "pages": 121
   },
   {
    "id": "Photoplay-1938-07-Vol-52-No-7",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1938",
    "publisher": "Photoplay Publishing",
    "pages": 95
   },
   {
    "id": "Photoplay-1941-07-Vol-19-No-2",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1941",
    "publisher": "Photoplay Publishing",
    "pages": 107
   },
   {
    "id": "Photoplay-1944-07-Vol-25-No-2",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1944",
    "publisher": "Photoplay Publishing",
    "pages": 123
   },
   {
    "id": "Photoplay-1946-07-Vol-29-No-2",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1946",
    "publisher": "Photoplay Publishing",
    "pages": 137
   },
   {
    "id": "Photoplay-1949-07-Vol-36-No-2",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1949",
    "publisher": "Photoplay Publishing",
    "pages": 105
   },
   {
    "id": "Photoplay-1952-07-Vol-42-No-1",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1952",
    "publisher": "Photoplay Publishing",
    "pages": 113
   },
   {
    "id": "Photoplay-1955-07-Vol-48-No-1",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1955",
    "publisher": "Photoplay Publishing",
    "pages": 107
   },
   {
    "id": "Photoplay-1958-07-Vol-54-No-1",
    "title": "Photoplay",
    "issue": "",
    "date": "July 1958",
    "publisher": "Photoplay Publishing",
    "pages": 101
   }
  ]
 },
 {
  "shelf": "Modern Screen",
  "kind": "magazines",
  "issues": [
   {
    "id": "Modern-Screen-1930-11-Vol-1-No-1",
    "title": "Modern Screen",
    "issue": "",
    "date": "November 1930",
    "publisher": "Dell Publishing",
    "pages": 131
   },
   {
    "id": "Modern-Screen-1933-07-Vol-6-No-2",
    "title": "Modern Screen",
    "issue": "",
    "date": "July 1933",
    "publisher": "Dell Publishing",
    "pages": 115
   },
   {
    "id": "Modern-Screen-1937-08-Vol-15-No-3",
    "title": "Modern Screen",
    "issue": "",
    "date": "August 1937",
    "publisher": "Dell Publishing",
    "pages": 101
   },
   {
    "id": "Modern-Screen-1940-07-Vol-21-No-2",
    "title": "Modern Screen",
    "issue": "",
    "date": "July 1940",
    "publisher": "Dell Publishing",
    "pages": 92
   },
   {
    "id": "Modern-Screen-1943-04-Vol-26-No-5",
    "title": "Modern Screen",
    "issue": "",
    "date": "April 1943",
    "publisher": "Dell Publishing",
    "pages": 95
   },
   {
    "id": "Modern-Screen-1947-07-Vol-35-No-2",
    "title": "Modern Screen",
    "issue": "",
    "date": "July 1947",
    "publisher": "Dell Publishing",
    "pages": 119
   },
   {
    "id": "Modern-Screen-1950-06-Vol-41-No-1",
    "title": "Modern Screen",
    "issue": "",
    "date": "June 1950",
    "publisher": "Dell Publishing",
    "pages": 113
   },
   {
    "id": "Modern-Screen-1953-07-Vol-47-No-2",
    "title": "Modern Screen",
    "issue": "",
    "date": "July 1953",
    "publisher": "Dell Publishing",
    "pages": 103
   },
   {
    "id": "Modern-Screen-1957-07-Vol-51-No-7",
    "title": "Modern Screen",
    "issue": "",
    "date": "July 1957",
    "publisher": "Dell Publishing",
    "pages": 95
   },
   {
    "id": "Modern-Screen-1960-07-Vol-54-No-7",
    "title": "Modern Screen",
    "issue": "",
    "date": "July 1960",
    "publisher": "Dell Publishing",
    "pages": 85
   }
  ]
 },
 {
  "shelf": "Mechanix Illustrated",
  "kind": "magazines",
  "issues": [
   {
    "id": "mechanix-illustrated.1949.03",
    "title": "Mechanix Illustrated",
    "issue": "",
    "date": "March 1949",
    "publisher": "Fawcett Publications",
    "pages": 190
   },
   {
    "id": "mechanix-illustrated-195201",
    "title": "Mechanix Illustrated",
    "issue": "",
    "date": "January 1952",
    "publisher": "Fawcett Publications",
    "pages": 197
   },
   {
    "id": "mechanix-illustrated-195708",
    "title": "Mechanix Illustrated",
    "issue": "",
    "date": "August 1957",
    "publisher": "Fawcett Publications",
    "pages": 195
   }
  ]
 }
];
