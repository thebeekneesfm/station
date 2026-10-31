/* STATIONS
   Each station loops its track list forever, on a shared clock.
   Everyone tuned to the same station hears the same moment.
   Add tracks with builder.html (open it in your browser), then paste the result here.
   length = seconds. group = the heading it sits under in the guide. music: true shows it as one long block in the guide. */
window.STATIONS = [
 {
  "id": "chills",
  "name": "Chills",
  "group": "Radio shows",
  "blurb": "Horror stories: ghosts, curses and things in the dark.",
  "card": "art/cards/chills.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.5,
   "decrackle": 0.5,
   "tone": 9000
  },
  "tracks": [
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep01_The_Fall_of_the_House_of_Usher.mp3",
    "length": 1603.71,
    "series": "The Weird Circle",
    "title": "The Fall of the House of Usher",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/TheWitchsTale/1931-06-11%20-%20002%29%20The%20Were-Wolf.mp3",
    "length": 1773.87,
    "series": "The Witch's Tale",
    "title": "The Were-Wolf",
    "date": "June 11, 1931",
    "item": "https://archive.org/details/TheWitchsTale"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_470608_001_Nothing_Behind_the_Door.mp3",
    "length": 1764.35,
    "series": "Quiet, Please",
    "title": "Nothing Behind the Door",
    "date": "June 8, 1947",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_01_Notebook_On_Murder.mp3",
    "length": 1440.74,
    "series": "The Hermit's Cave",
    "title": "Notebook On Murder",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1936-06-17CatWife.mp3",
    "length": 1832.86,
    "series": "Lights Out",
    "title": "Cat Wife",
    "date": "June 17, 1936",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2041-01-07%20Amazing%20Death%20Of%20Mrs%20Putnam.mp3",
    "length": 1515.69,
    "series": "Inner Sanctum Mysteries",
    "title": "Amazing Death Of Mrs Putnam",
    "date": "January 7, 1941",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/470213ThePerfectScript/470213_The_Perfect_Script.mp3",
    "length": 1592.19,
    "series": "Hall of Fantasy",
    "title": "Perfect Script",
    "date": "February 13, 1947",
    "item": "https://archive.org/details/470213ThePerfectScript"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/44-01-30009HouseOfDeath.mp3",
    "length": 1719.89,
    "series": "The Mysterious Traveler",
    "title": "House of Death",
    "date": "January 30, 1944",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep12_Mateo_Falcone.mp3",
    "length": 1500.3,
    "series": "The Weird Circle",
    "title": "Mateo Falcone",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/TheWitchsTale/1932-02-01%20-%20035%29%20The%20Flying%20Dutchman.mp3",
    "length": 1759.63,
    "series": "The Witch's Tale",
    "title": "The Flying Dutchman",
    "date": "February 1, 1932",
    "item": "https://archive.org/details/TheWitchsTale"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_471027_021_Dont_Tell_Me_About_Halloween.mp3",
    "length": 1487.86,
    "series": "Quiet, Please",
    "title": "Don't Tell Me About Halloween",
    "date": "October 27, 1947",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_04_Blackness_Of_Terror.mp3",
    "length": 1472.16,
    "series": "The Hermit's Cave",
    "title": "Blackness Of Terror",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1937-05-26UntilDead.mp3",
    "length": 1693.85,
    "series": "Lights Out",
    "title": "Until Dead",
    "date": "May 26, 1937",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2045-04-10%20The%20Bog-Oak%20Necklace.mp3",
    "length": 1764.37,
    "series": "Inner Sanctum Mysteries",
    "title": "Bog-Oak Necklace",
    "date": "April 10, 1945",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/470213ThePerfectScript/520919_The_Steps_That_Follow_Me.mp3",
    "length": 1490.08,
    "series": "Hall of Fantasy",
    "title": "Steps that Follow Me",
    "date": "September 19, 1952",
    "item": "https://archive.org/details/470213ThePerfectScript"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/45-03-10064CaseOfCharlesFoster.mp3",
    "length": 1765.06,
    "series": "The Mysterious Traveler",
    "title": "Case of Charles Foster",
    "date": "March 10, 1945",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep23_The_Tell-Tale_Heart.mp3",
    "length": 1619.52,
    "series": "The Weird Circle",
    "title": "The Tell-Tale Heart",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/TheWitchsTale/1932-10-24%20-%20071%29%20Share%20And%20Share%20Alike%20%28Repeat%20of%201931-01-11%29.mp3",
    "length": 1615.26,
    "series": "The Witch's Tale",
    "title": "Share And Share Alike",
    "date": "October 24, 1932",
    "item": "https://archive.org/details/TheWitchsTale"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_480126_034_Green_Light.mp3",
    "length": 1431.21,
    "series": "Quiet, Please",
    "title": "Green Light",
    "date": "January 26, 1948",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_07_Mystery_Of_The_Thing.mp3",
    "length": 1411.04,
    "series": "The Hermit's Cave",
    "title": "Mystery Of The Thing",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2045-10-23%20The%20Corridor%20of%20Doom.mp3",
    "length": 1755.1,
    "series": "Inner Sanctum Mysteries",
    "title": "Corridor of Doom",
    "date": "October 23, 1945",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/470213ThePerfectScript/530406_Return_From_Death.mp3",
    "length": 1376.38,
    "series": "Hall of Fantasy",
    "title": "Return From Death",
    "date": "April 6, 1953",
    "item": "https://archive.org/details/470213ThePerfectScript"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/47-04-13099DarkDestiny.mp3",
    "length": 1758.28,
    "series": "The Mysterious Traveler",
    "title": "Dark Destiny",
    "date": "April 13, 1947",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep34_The_Rope_of_Hair.mp3",
    "length": 1739.13,
    "series": "The Weird Circle",
    "title": "Rope of Hair",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/TheWitchsTale/1933-10-30%20-%20122%29%20All%20Hallows%20Eve.mp3",
    "length": 1583.23,
    "series": "The Witch's Tale",
    "title": "All Hallows Eve",
    "date": "October 30, 1933",
    "item": "https://archive.org/details/TheWitchsTale"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_480426_047_13_and_8.mp3",
    "length": 1670.65,
    "series": "Quiet, Please",
    "title": "13 and 8",
    "date": "April 26, 1948",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_10_It_Happened_On_Sunday.mp3",
    "length": 1342.85,
    "series": "The Hermit's Cave",
    "title": "It Happened On Sunday",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1942-12-08Scoop.mp3",
    "length": 1605.0,
    "series": "Lights Out",
    "title": "Scoop",
    "date": "December 8, 1942",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2046-04-23%20Make%20Ready%20My%20Grave.mp3",
    "length": 1780.96,
    "series": "Inner Sanctum Mysteries",
    "title": "Make Ready My Grave",
    "date": "April 23, 1946",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/470213ThePerfectScript/530615_The_Jewels_Of_Kali.mp3",
    "length": 1366.73,
    "series": "Hall of Fantasy",
    "title": "Jewels Of Kali",
    "date": "June 15, 1953",
    "item": "https://archive.org/details/470213ThePerfectScript"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/48-05-11153IWontDieAlone.mp3",
    "length": 1716.44,
    "series": "The Mysterious Traveler",
    "title": "I Won't Die Alone",
    "date": "May 11, 1948",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep45_The_Mark_of_the_Plague.mp3",
    "length": 1559.28,
    "series": "The Weird Circle",
    "title": "Mark of the Plague",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/TheWitchsTale/1935-02-18%20-%20184%29%20The%20Wonderful%20Bottle%20%28Repeat%20of%201932-03-21%29.mp3",
    "length": 1853.43,
    "series": "The Witch's Tale",
    "title": "The Wonderful Bottle",
    "date": "February 18, 1935",
    "item": "https://archive.org/details/TheWitchsTale"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_480816_061_PrestoChangeO_Im_Sure.mp3",
    "length": 1611.73,
    "series": "Quiet, Please",
    "title": "Presto Chango, I'm Sure",
    "date": "August 16, 1948",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_13_The_House_Of_Purple_Shadows.mp3",
    "length": 1413.23,
    "series": "The Hermit's Cave",
    "title": "The House Of Purple Shadows",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1943-03-09BallParisMacabre.mp3",
    "length": 1626.78,
    "series": "Lights Out",
    "title": "Ball Paris Macabre",
    "date": "March 9, 1943",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2048-08-02%20The%20Murder%20Ship.mp3",
    "length": 1518.17,
    "series": "Inner Sanctum Mysteries",
    "title": "Murder Ship",
    "date": "August 2, 1948",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/470213ThePerfectScript/530824_The_Sea_Phantom.mp3",
    "length": 1368.5,
    "series": "Hall of Fantasy",
    "title": "Sea Phantom",
    "date": "August 24, 1953",
    "item": "https://archive.org/details/470213ThePerfectScript"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/49-04-19200OutOfThePast.mp3",
    "length": 1509.8,
    "series": "The Mysterious Traveler",
    "title": "Out Of The Past",
    "date": "April 19, 1949",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep56_The_Doll.mp3",
    "length": 1501.87,
    "series": "The Weird Circle",
    "title": "The Doll",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/TheWitchsTale/1937-01-08%20-%20265%29%20In%20The%20Devil%27s%20Name%2C%20Part%201%20%28Repeat%20of%201932-10-31%29.mp3",
    "length": 1715.06,
    "series": "The Witch's Tale",
    "title": "In The Devil’s Name, Part 1",
    "date": "January 8, 1937",
    "item": "https://archive.org/details/TheWitchsTale"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_481114_074_The_Evening_and_the_Morning.mp3",
    "length": 1650.73,
    "series": "Quiet, Please",
    "title": "Evening and the Morning",
    "date": "November 14, 1948",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_17_Buried_Alive.mp3",
    "length": 1418.95,
    "series": "The Hermit's Cave",
    "title": "Buried Alive",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1943-05-25LittleOldLady.mp3",
    "length": 1768.99,
    "series": "Lights Out",
    "title": "Little Old Lady",
    "date": "May 25, 1943",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2049-04-18%20The%20Death%20Deal.mp3",
    "length": 1530.47,
    "series": "Inner Sanctum Mysteries",
    "title": "Death Deal",
    "date": "April 18, 1949",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/470213ThePerfectScript/531123_The_Masks_of_Ashor.mp3",
    "length": 1482.37,
    "series": "Hall of Fantasy",
    "title": "Masks of Ashor",
    "date": "November 23, 1953",
    "item": "https://archive.org/details/470213ThePerfectScript"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/50-04-04249TheManFromSingapore.mp3",
    "length": 1775.24,
    "series": "The Mysterious Traveler",
    "title": "The Man From Singapore",
    "date": "April 4, 1950",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep67_The_Moonstone.mp3",
    "length": 1482.1,
    "series": "The Weird Circle",
    "title": "The Moonstone",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_490220_088_Where_Do_You_Get_Your_Ideas.mp3",
    "length": 1562.62,
    "series": "Quiet, Please",
    "title": "Where Do You Get Your Ideas",
    "date": "February 20, 1949",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_20_Crimson_Hand.mp3",
    "length": 1751.08,
    "series": "The Hermit's Cave",
    "title": "Crimson Hand",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1943-08-24Subbasement.mp3",
    "length": 1289.65,
    "series": "Lights Out",
    "title": "Subbasement",
    "date": "August 24, 1943",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2050-01-09%20Killer%20at%20Large.mp3",
    "length": 1514.45,
    "series": "Inner Sanctum Mysteries",
    "title": "Killer at Large",
    "date": "January 9, 1950",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/470213ThePerfectScript/540125_Wild_Huntsman.mp3",
    "length": 1471.78,
    "series": "Hall of Fantasy",
    "title": "Wild Huntsman",
    "date": "January 25, 1954",
    "item": "https://archive.org/details/470213ThePerfectScript"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/51-10-09325TheManThatKnewEverything.mp3",
    "length": 1804.57,
    "series": "The Mysterious Traveler",
    "title": "The Man That Knew Everything",
    "date": "October 9, 1951",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   }
  ]
 },
 {
  "id": "noir",
  "name": "Noir",
  "group": "Radio shows",
  "blurb": "Private eyes, rain-slick streets and bad decisions.",
  "card": "art/cards/noir.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.5,
   "decrackle": 0.5,
   "tone": 9000
  },
  "tracks": [
   {
    "src": "https://archive.org/download/OTRR_Philip_Marlowe_Singles/Philip_Marlowe_47-06-12_xxx_Who_Shot_Waldo.mp3",
    "length": 1444.6,
    "series": "The Adventures of Philip Marlowe",
    "title": "Who Shot Waldo",
    "date": "June 12, 1947",
    "item": "https://archive.org/details/OTRR_Philip_Marlowe_Singles"
   },
   {
    "src": "https://archive.org/download/PatNovakForHire/46-11-24-DixieGilian.mp3",
    "length": 1775.13,
    "series": "Pat Novak for Hire",
    "title": "Dixie Gillian",
    "date": "November 24, 1946",
    "item": "https://archive.org/details/PatNovakForHire"
   },
   {
    "src": "https://archive.org/download/OTRR_Richard_Diamond_Private_Detective_Singles/Richard%20Diamond%2049-05-01%20%28002%29%20Diamond%20In%20the%20Rough%20%28AFRS%29.mp3",
    "length": 1775.89,
    "series": "Richard Diamond, Private Detective",
    "title": "Barton Case",
    "date": "May 1, 1949",
    "item": "https://archive.org/details/OTRR_Richard_Diamond_Private_Detective_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_YoursTrulyJohnnyDollar_Singles/YTJD%201949-02-18%20001%20The%20Parakoff%20Policy.mp3",
    "length": 1773.0,
    "series": "Yours Truly, Johnny Dollar",
    "title": "The Parakoff Policy",
    "date": "February 18, 1949",
    "item": "https://archive.org/details/OTRR_YoursTrulyJohnnyDollar_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Box_13_Singles/Box%2013%204x-xx-xx%20%2801%29%20The%20First%20Letter.mp3",
    "length": 1595.78,
    "series": "Box 13",
    "title": "First Letter",
    "item": "https://archive.org/details/OTRR_Box_13_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Broadway_Is_My_Beat_Singles/BIMB%2049-03-06%20%28002%29%20The%20Andrew%20Jenkins%20Case.mp3",
    "length": 1708.54,
    "series": "Broadway Is My Beat",
    "title": "Andrew Jenkins Case",
    "date": "March 6, 1949",
    "item": "https://archive.org/details/OTRR_Broadway_Is_My_Beat_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Philip_Marlowe_Singles/Philip_Marlowe_49-01-29_018_The_Easy_Mark.mp3",
    "length": 1753.25,
    "series": "The Adventures of Philip Marlowe",
    "title": "Easy Mark",
    "date": "January 29, 1949",
    "item": "https://archive.org/details/OTRR_Philip_Marlowe_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Sam_Spade_Singles/AcademyAwardTheater1946-07-03TheMalteseFalcon.mp3",
    "length": 1654.55,
    "series": "The Adventures of Sam Spade",
    "title": "The Maltese Falcon",
    "date": "July 3, 1946",
    "item": "https://archive.org/details/OTRR_Sam_Spade_Singles"
   },
   {
    "src": "https://archive.org/download/PatNovakForHire/47-11-23-LydiaReynoldsCase-Morris.mp3",
    "length": 1834.01,
    "series": "Pat Novak for Hire",
    "title": "Lydia Reynolds Case",
    "date": "November 23, 1947",
    "item": "https://archive.org/details/PatNovakForHire"
   },
   {
    "src": "https://archive.org/download/OTRR_Richard_Diamond_Private_Detective_Singles/Richard%20Diamond%2049-09-17%20%28022%29%20The%20Jerome%20J%20Jerome%20Case.mp3",
    "length": 1772.13,
    "series": "Richard Diamond, Private Detective",
    "title": "Jerome J Jerome Case",
    "date": "September 17, 1949",
    "item": "https://archive.org/details/OTRR_Richard_Diamond_Private_Detective_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_YoursTrulyJohnnyDollar_Singles/YTJD%201950-11-25%20073%20The%20Woodward%2C%20Manila%2C%20Matter.mp3",
    "length": 1840.96,
    "series": "Yours Truly, Johnny Dollar",
    "title": "The Woodward, Manila, Matter",
    "date": "November 25, 1950",
    "item": "https://archive.org/details/OTRR_YoursTrulyJohnnyDollar_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Box_13_Singles/Box%2013%204x-xx-xx%20%2808%29%20Double%20Mothers.mp3",
    "length": 1611.89,
    "series": "Box 13",
    "title": "Double Mothers",
    "item": "https://archive.org/details/OTRR_Box_13_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Broadway_Is_My_Beat_Singles/BIMB%2050-01-21%20%28018%29%20The%20Joan%20Gale%20Murder%20Case.mp3",
    "length": 1781.76,
    "series": "Broadway Is My Beat",
    "title": "Joan Gale Murder Case",
    "date": "January 21, 1950",
    "item": "https://archive.org/details/OTRR_Broadway_Is_My_Beat_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Philip_Marlowe_Singles/Philip_Marlowe_49-05-21_ep034_Night_Tide.mp3",
    "length": 1849.6,
    "series": "The Adventures of Philip Marlowe",
    "title": "Night Tide",
    "date": "May 21, 1949",
    "item": "https://archive.org/details/OTRR_Philip_Marlowe_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Sam_Spade_Singles/Sam%20Spade%201947-10-05%20Adam%20Figg%20Caper.mp3",
    "length": 1469.57,
    "series": "The Adventures of Sam Spade",
    "title": "Adam Figg Caper",
    "date": "October 5, 1947",
    "item": "https://archive.org/details/OTRR_Sam_Spade_Singles"
   },
   {
    "src": "https://archive.org/download/PatNovakForHire/49-02-27-MarciaHalpern.mp3",
    "length": 1662.8,
    "series": "Pat Novak for Hire",
    "title": "Marcia Halpern",
    "date": "February 27, 1949",
    "item": "https://archive.org/details/PatNovakForHire"
   },
   {
    "src": "https://archive.org/download/OTRR_Richard_Diamond_Private_Detective_Singles/Richard%20Diamond%2049-12-31%20%28036%29%20Thomas%20Jason%20Case.mp3",
    "length": 1772.26,
    "series": "Richard Diamond, Private Detective",
    "title": "Thomas Jason Case",
    "date": "December 31, 1949",
    "item": "https://archive.org/details/OTRR_Richard_Diamond_Private_Detective_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_YoursTrulyJohnnyDollar_Singles/YTJD%201953-06-09%20166%20The%20Oklahoma%20Red%20Matter%20%5BAFRTS%5D.mp3",
    "length": 1598.13,
    "series": "Yours Truly, Johnny Dollar",
    "title": "The Oklahoma Red Matter",
    "date": "June 9, 1953",
    "item": "https://archive.org/details/OTRR_YoursTrulyJohnnyDollar_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Box_13_Singles/Box%2013%204x-xx-xx%20%2815%29%20Double%20Right%20Cross.mp3",
    "length": 1605.76,
    "series": "Box 13",
    "title": "Double Right Cross",
    "item": "https://archive.org/details/OTRR_Box_13_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Broadway_Is_My_Beat_Singles/BIMB%2050-06-16%20%28039%29%20The%20Morris%20Bernstein%20Murder%20Case.mp3",
    "length": 1770.74,
    "series": "Broadway Is My Beat",
    "title": "Morris Bernstein Murder Case",
    "date": "June 16, 1950",
    "item": "https://archive.org/details/OTRR_Broadway_Is_My_Beat_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Philip_Marlowe_Singles/Philip_Marlowe_49-09-10_ep049_The_Rustin_Hickory.mp3",
    "length": 1776.64,
    "series": "The Adventures of Philip Marlowe",
    "title": "Rushton Hickory",
    "date": "September 10, 1949",
    "item": "https://archive.org/details/OTRR_Philip_Marlowe_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Sam_Spade_Singles/Sam%20Spade%201948-08-15%20Critical%20Author%20Caper.mp3",
    "length": 1789.05,
    "series": "The Adventures of Sam Spade",
    "title": "Critical Author Caper",
    "date": "August 15, 1948",
    "item": "https://archive.org/details/OTRR_Sam_Spade_Singles"
   },
   {
    "src": "https://archive.org/download/PatNovakForHire/49-03-20-RoryMalone.mp3",
    "length": 1749.94,
    "series": "Pat Novak for Hire",
    "title": "Rory Malone",
    "date": "March 20, 1949",
    "item": "https://archive.org/details/PatNovakForHire"
   },
   {
    "src": "https://archive.org/download/OTRR_Richard_Diamond_Private_Detective_Singles/Richard%20Diamond%2050-04-26%20%28051%29%20The%20Ralph%20Baxter%20Case.mp3",
    "length": 1770.77,
    "series": "Richard Diamond, Private Detective",
    "title": "Ralph Baxter Case",
    "date": "April 26, 1950",
    "item": "https://archive.org/details/OTRR_Richard_Diamond_Private_Detective_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_YoursTrulyJohnnyDollar_Singles/YTJD%201957-01-20%20520%20The%20Blooming%20Blossom%20Matter%20%5BAFRTS%5D.mp3",
    "length": 1773.13,
    "series": "Yours Truly, Johnny Dollar",
    "title": "The Blooming Blossom Matter",
    "date": "January 20, 1957",
    "item": "https://archive.org/details/OTRR_YoursTrulyJohnnyDollar_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Box_13_Singles/Box%2013%204x-xx-xx%20%2822%29%20The%20Dowager%20and%20Dan%20Holiday.mp3",
    "length": 1597.66,
    "series": "Box 13",
    "title": "Dowager and Dan Holiday",
    "item": "https://archive.org/details/OTRR_Box_13_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Broadway_Is_My_Beat_Singles/BIMB%2051-04-28%20%28061%29%20The%20Georgia%20Gray%20Murder%20Case.mp3",
    "length": 1770.27,
    "series": "Broadway Is My Beat",
    "title": "Georgia Gray Murder Case",
    "date": "April 28, 1951",
    "item": "https://archive.org/details/OTRR_Broadway_Is_My_Beat_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Philip_Marlowe_Singles/Philip_Marlowe_50-01-14_ep067_The_Covered_Bridge.mp3",
    "length": 1837.41,
    "series": "The Adventures of Philip Marlowe",
    "title": "Covered Bridge",
    "date": "January 14, 1950",
    "item": "https://archive.org/details/OTRR_Philip_Marlowe_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Sam_Spade_Singles/SamSpade1948-12-12BouncingBettyCaperAfrs.mp3",
    "length": 1494.05,
    "series": "The Adventures of Sam Spade",
    "title": "Bouncing Betty Caper",
    "date": "December 12, 1948",
    "item": "https://archive.org/details/OTRR_Sam_Spade_Singles"
   },
   {
    "src": "https://archive.org/download/PatNovakForHire/49-04-09-ShirtMix-upAtTheLaundry.mp3",
    "length": 1643.33,
    "series": "Pat Novak for Hire",
    "title": "Shirt Mix-Up at the Laundry",
    "date": "April 9, 1949",
    "item": "https://archive.org/details/PatNovakForHire"
   },
   {
    "src": "https://archive.org/download/OTRR_Richard_Diamond_Private_Detective_Singles/Richard%20Diamond%2050-09-27%20%28066%29%20The%20Oklahoma%20Cowboy%20Murder%20Case.mp3",
    "length": 1770.25,
    "series": "Richard Diamond, Private Detective",
    "title": "Oklahoma Cowboy Murder Case",
    "date": "September 27, 1950",
    "item": "https://archive.org/details/OTRR_Richard_Diamond_Private_Detective_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_YoursTrulyJohnnyDollar_Singles/YTJD%201958-06-15%20591%20The%20Delectable%20Damsel%20Matter.mp3",
    "length": 1474.79,
    "series": "Yours Truly, Johnny Dollar",
    "title": "The Delectable Damsel Matter",
    "date": "June 15, 1958",
    "item": "https://archive.org/details/OTRR_YoursTrulyJohnnyDollar_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Box_13_Singles/Box%2013%204x-xx-xx%20%2829%29%20Hunt%20and%20Peck.mp3",
    "length": 1593.32,
    "series": "Box 13",
    "title": "Hunt and Peck",
    "item": "https://archive.org/details/OTRR_Box_13_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Broadway_Is_My_Beat_Singles/BIMB%2051-11-10%20%28086%29%20The%20Joey%20Macklin%20-%20John%20Howard%20Murder%20Case.mp3",
    "length": 1758.22,
    "series": "Broadway Is My Beat",
    "title": "Joey Macklin - John Howard Murder Case",
    "date": "November 10, 1951",
    "item": "https://archive.org/details/OTRR_Broadway_Is_My_Beat_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Philip_Marlowe_Singles/Philip_Marlowe_50-04-25_ep081_The_High_Collared_Cape.mp3",
    "length": 1799.68,
    "series": "The Adventures of Philip Marlowe",
    "title": "High Collared Cape",
    "date": "April 25, 1950",
    "item": "https://archive.org/details/OTRR_Philip_Marlowe_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Sam_Spade_Singles/SamSpade1949-09-25IndianCaper.mp3",
    "length": 1646.39,
    "series": "The Adventures of Sam Spade",
    "title": "Indian Caper",
    "date": "September 25, 1949",
    "item": "https://archive.org/details/OTRR_Sam_Spade_Singles"
   },
   {
    "src": "https://archive.org/download/PatNovakForHire/49-05-01-RitaMalloy.mp3",
    "length": 1840.79,
    "series": "Pat Novak for Hire",
    "title": "Rita Malloy",
    "date": "May 1, 1949",
    "item": "https://archive.org/details/PatNovakForHire"
   },
   {
    "src": "https://archive.org/download/OTRR_Richard_Diamond_Private_Detective_Singles/Richard%20Diamond%2051-02-23%20%28084%29%20The%20Lady%20In%20Distress.mp3",
    "length": 1770.33,
    "series": "Richard Diamond, Private Detective",
    "title": "Lady In Distress",
    "date": "February 23, 1951",
    "item": "https://archive.org/details/OTRR_Richard_Diamond_Private_Detective_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_YoursTrulyJohnnyDollar_Singles/YTJD%201960-01-03%20670%20The%20Hapless%20Ham%20Matter.mp3",
    "length": 1468.36,
    "series": "Yours Truly, Johnny Dollar",
    "title": "The Hapless Ham Matter",
    "date": "January 3, 1960",
    "item": "https://archive.org/details/OTRR_YoursTrulyJohnnyDollar_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Box_13_Singles/Box%2013%204x-xx-xx%20%2836%29%20Find%20Me%2C%20Find%20Death.mp3",
    "length": 1590.76,
    "series": "Box 13",
    "title": "Find Me, Find Death",
    "item": "https://archive.org/details/OTRR_Box_13_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Broadway_Is_My_Beat_Singles/BIMB%2052-06-23%20%28118%29%20The%20Joey%20Croft%20Murder%20Case.mp3",
    "length": 1602.22,
    "series": "Broadway Is My Beat",
    "title": "Joey Croft Murder Case",
    "date": "June 23, 1952",
    "item": "https://archive.org/details/OTRR_Broadway_Is_My_Beat_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Philip_Marlowe_Singles/Philip_Marlowe_50-08-04_ep095_The_Parrots_Bed.mp3",
    "length": 1517.56,
    "series": "The Adventures of Philip Marlowe",
    "title": "Parrot's Bed",
    "date": "August 4, 1950",
    "item": "https://archive.org/details/OTRR_Philip_Marlowe_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Sam_Spade_Singles/SamSpade1951-01-19CloakAndDaggerCaper.mp3",
    "length": 1731.76,
    "series": "The Adventures of Sam Spade",
    "title": "Cloak and Dagger Caper",
    "date": "January 19, 1951",
    "item": "https://archive.org/details/OTRR_Sam_Spade_Singles"
   },
   {
    "src": "https://archive.org/download/PatNovakForHire/49-05-22-GiveEnvelopetoJohnStJohn.mp3",
    "length": 1770.0,
    "series": "Pat Novak for Hire",
    "title": "Give Envelope to John St. John",
    "date": "May 22, 1949",
    "item": "https://archive.org/details/PatNovakForHire"
   },
   {
    "src": "https://archive.org/download/OTRR_Richard_Diamond_Private_Detective_Singles/Richard%20Diamond%2052-03-14%20%28126%29%20The%20Dixon%20Case.mp3",
    "length": 1770.52,
    "series": "Richard Diamond, Private Detective",
    "title": "Dixon Case",
    "date": "March 14, 1952",
    "item": "https://archive.org/details/OTRR_Richard_Diamond_Private_Detective_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_YoursTrulyJohnnyDollar_Singles/YTJD%201961-06-04%20741%20The%20Stock-In-Trade%20Matter.mp3",
    "length": 1474.89,
    "series": "Yours Truly, Johnny Dollar",
    "title": "The Stock-In-Trade Matter",
    "date": "June 4, 1961",
    "item": "https://archive.org/details/OTRR_YoursTrulyJohnnyDollar_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Box_13_Singles/Box%2013%204x-xx-xx%20%2843%29%20The%20Dead%20Man%20Walks.mp3",
    "length": 1593.16,
    "series": "Box 13",
    "title": "Dead Man Walks",
    "item": "https://archive.org/details/OTRR_Box_13_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Broadway_Is_My_Beat_Singles/BIMB%2053-02-21%20%28153%29%20The%20Joe%20Turner%20Murder%20Case.mp3",
    "length": 1776.19,
    "series": "Broadway Is My Beat",
    "title": "Joe Turner Murder Case",
    "date": "February 21, 1953",
    "item": "https://archive.org/details/OTRR_Broadway_Is_My_Beat_Singles"
   }
  ]
 },
 {
  "id": "suspense",
  "name": "Suspense",
  "group": "Radio shows",
  "blurb": "Thrillers and twist endings.",
  "card": "art/cards/suspense.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.5,
   "decrackle": 0.5,
   "tone": 9000
  },
  "tracks": [
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20420617%20001%20The%20Burning%20Court%20%28128-44%29%2028455%2030m00s.mp3",
    "length": 1800.44,
    "series": "Suspense",
    "title": "The Burning Court",
    "date": "June 17, 1942",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Escape_Singles/Escape_47-07-07_-001-_The_Man_Who_Would_Be_King_-Raymond_Lawrence-.mp3",
    "length": 1774.8,
    "series": "Escape",
    "title": "Man Who Would Be King",
    "date": "July 7, 1947",
    "item": "https://archive.org/details/OTRR_Escape_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Whistler_Singles/Whistler_42-05-16_ep001_Retribution.mp3",
    "length": 1772.22,
    "series": "The Whistler",
    "title": "Retribution",
    "date": "May 16, 1942",
    "item": "https://archive.org/details/OTRR_Whistler_Singles"
   },
   {
    "src": "https://archive.org/download/the-shadow-1938-10-09-141-death-stalks-the-shadow/The%20Shadow%201937-09-26%20%2887%29%20The%20Death%20House%20Rescue.mp3",
    "length": 1753.23,
    "series": "The Shadow",
    "title": "The Death House Rescue",
    "date": "September 26, 1937",
    "item": "https://archive.org/details/the-shadow-1938-10-09-141-death-stalks-the-shadow"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20450517%20141%20Two%20Birds%20with%20One%20Stone%20%28128-44%29%2028368%2029m55s.mp3",
    "length": 1794.88,
    "series": "Suspense",
    "title": "Two Birds with One Stone",
    "date": "May 17, 1945",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Escape_Singles/Escape_48-02-22_-029-_How_Love_Came_to_Professor_Guildea_-national_broadcast-.mp3",
    "length": 1770.73,
    "series": "Escape",
    "title": "How Love Came to Professor Guildea",
    "date": "February 22, 1948",
    "item": "https://archive.org/details/OTRR_Escape_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Whistler_Singles/Whistler_45-03-05_ep145_Danger_Is_a_Beautiful_Blond.mp3",
    "length": 1793.14,
    "series": "The Whistler",
    "title": "Danger Is a Beautiful Blond",
    "date": "March 5, 1945",
    "item": "https://archive.org/details/OTRR_Whistler_Singles"
   },
   {
    "src": "https://archive.org/download/the-shadow-1938-10-09-141-death-stalks-the-shadow/The%20Shadow%201938-07-24%20%28130%29%20The%20Mark%20of%20the%20Bat.mp3",
    "length": 1766.03,
    "series": "The Shadow",
    "title": "The Mark of the Bat",
    "date": "July 24, 1938",
    "item": "https://archive.org/details/the-shadow-1938-10-09-141-death-stalks-the-shadow"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20471128%20273%20The%20Pit%20and%20the%20Pendulum%20%2864-44%29%2014324%2029m52s.mp3",
    "length": 1792.16,
    "series": "Suspense",
    "title": "The Pit and the Pendulum",
    "date": "November 28, 1947",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Escape_Singles/Escape_49-03-19_-061-_Finger_of_Doom.mp3",
    "length": 1770.71,
    "series": "Escape",
    "title": "Finger of Doom",
    "date": "March 19, 1949",
    "item": "https://archive.org/details/OTRR_Escape_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Whistler_Singles/Whistler_46-09-09_ep224_Witness_at_the_Fountain.mp3",
    "length": 1770.87,
    "series": "The Whistler",
    "title": "Witness at the Fountain",
    "date": "September 9, 1946",
    "item": "https://archive.org/details/OTRR_Whistler_Singles"
   },
   {
    "src": "https://archive.org/download/the-shadow-1938-10-09-141-death-stalks-the-shadow/The%20Shadow%201939-03-19%20%28164%29%20Can%20the%20Dead%20Talk%20%28Blue%20Coal%29.mp3",
    "length": 1709.56,
    "series": "The Shadow",
    "title": "Can the Dead Talk",
    "date": "March 19, 1939",
    "item": "https://archive.org/details/the-shadow-1938-10-09-141-death-stalks-the-shadow"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20510329%20422%20Death%20Pitch%20%2864-44%29%2013758%2028m40s.mp3",
    "length": 1719.66,
    "series": "Suspense",
    "title": "Death Pitch",
    "date": "March 29, 1951",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Escape_Singles/Escape_50-01-17_-094-_The_Sure_Thing_-Anthony_Ross-_-2-.mp3",
    "length": 1770.34,
    "series": "Escape",
    "title": "Sure Thing",
    "date": "January 17, 1950",
    "item": "https://archive.org/details/OTRR_Escape_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Whistler_Singles/Whistler_48-03-31_ep305_Bird_of_Prey.mp3",
    "length": 1770.81,
    "series": "The Whistler",
    "title": "Bird of Prey",
    "date": "March 31, 1948",
    "item": "https://archive.org/details/OTRR_Whistler_Singles"
   },
   {
    "src": "https://archive.org/download/the-shadow-1938-10-09-141-death-stalks-the-shadow/The%20Shadow%201940-11-24%20%28203%29%20The%20Green%20Man.mp3",
    "length": 1443.64,
    "series": "The Shadow",
    "title": "The Green Man",
    "date": "November 24, 1940",
    "item": "https://archive.org/details/the-shadow-1938-10-09-141-death-stalks-the-shadow"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20540607%20555%20A%20Terribly%20Strange%20Bed%20%28128-44%29%2028690%2030m16s.mp3",
    "length": 1815.52,
    "series": "Suspense",
    "title": "A Terribly Strange Bed",
    "date": "June 7, 1954",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Escape_Singles/Escape_50-10-08_-127-_Roulette.mp3",
    "length": 1770.03,
    "series": "Escape",
    "title": "Roulette",
    "date": "October 8, 1950",
    "item": "https://archive.org/details/OTRR_Escape_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Whistler_Singles/Whistler_49-08-07_ep375_The_Trigger_Man.mp3",
    "length": 1768.89,
    "series": "The Whistler",
    "title": "Trigger Man",
    "date": "August 7, 1949",
    "item": "https://archive.org/details/OTRR_Whistler_Singles"
   },
   {
    "src": "https://archive.org/download/the-shadow-1938-10-09-141-death-stalks-the-shadow/The%20Shadow%201942-02-15%20%28245%29%20Death%20Speaks%20Twice.mp3",
    "length": 1757.36,
    "series": "The Shadow",
    "title": "Death Speaks Twice",
    "date": "February 15, 1942",
    "item": "https://archive.org/details/the-shadow-1938-10-09-141-death-stalks-the-shadow"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20570217%20686%20Murder%20and%20Aunt%20Delia%20%2864-44%29%2014254%20%2029m02s%20AFRS.mp3",
    "length": 1783.17,
    "series": "Suspense",
    "title": "Murder and Aunt Delia",
    "date": "February 17, 1957",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Escape_Singles/Escape_52-11-09_-156-_The_Return_-3-.mp3",
    "length": 1724.98,
    "series": "Escape",
    "title": "Return",
    "date": "November 9, 1952",
    "item": "https://archive.org/details/OTRR_Escape_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Whistler_Singles/Whistler_50-12-03_ep444_The_Lady_With_the_Knife.mp3",
    "length": 1770.54,
    "series": "The Whistler",
    "title": "Lady With the Knife",
    "date": "December 3, 1950",
    "item": "https://archive.org/details/OTRR_Whistler_Singles"
   },
   {
    "src": "https://archive.org/download/the-shadow-1938-10-09-141-death-stalks-the-shadow/The%20Shadow%201946-05-05%20%28370%29%20The%20White%20Witchman%20of%20Lawaiki.mp3",
    "length": 1753.21,
    "series": "The Shadow",
    "title": "The White Witchman of Lawaiki",
    "date": "May 5, 1946",
    "item": "https://archive.org/details/the-shadow-1938-10-09-141-death-stalks-the-shadow"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20590809%20814%20Everything%20Will%20Be%20Different%20%28128-44%29%2019586%2020m33s.mp3",
    "length": 1212.34,
    "series": "Suspense",
    "title": "Everything Will Be Different",
    "date": "August 9, 1959",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Escape_Singles/Escape_53-07-26_-193-_The_Notebook.mp3",
    "length": 1770.57,
    "series": "Escape",
    "title": "Notebook",
    "date": "July 26, 1953",
    "item": "https://archive.org/details/OTRR_Escape_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Whistler_Singles/Whistler_52-05-25_ep521_Charming_Hostess.mp3",
    "length": 1594.85,
    "series": "The Whistler",
    "title": "Charming Hostess",
    "date": "May 25, 1952",
    "item": "https://archive.org/details/OTRR_Whistler_Singles"
   },
   {
    "src": "https://archive.org/download/the-shadow-1938-10-09-141-death-stalks-the-shadow/The%20Shadow%201947-12-28%20%28428%29%20Terrible%20Legend%20of%20Crownshield%20Castle.mp3",
    "length": 1442.43,
    "series": "The Shadow",
    "title": "Terrible Legend of Crownshield Castle",
    "date": "December 28, 1947",
    "item": "https://archive.org/details/the-shadow-1938-10-09-141-death-stalks-the-shadow"
   }
  ]
 },
 {
  "id": "scifi",
  "name": "Sci-Fi",
  "group": "Radio shows",
  "blurb": "Science fiction: rockets, robots and the atomic age.",
  "card": "art/cards/scifi.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.5,
   "decrackle": 0.5,
   "tone": 9000
  },
  "tracks": [
   {
    "src": "https://archive.org/download/OTRR_X_Minus_One_Singles/XMinusOne55-04-24001NoContact.mp3",
    "length": 1678.48,
    "series": "X Minus One",
    "title": "No Contact",
    "date": "April 24, 1955",
    "item": "https://archive.org/details/OTRR_X_Minus_One_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Dimension_X_Singles/Dimension_X_1950-04-08__01_OuterLimit.mp3",
    "length": 1810.86,
    "series": "Dimension X",
    "title": "Outer Limit",
    "date": "April 8, 1950",
    "item": "https://archive.org/details/OTRR_Dimension_X_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Space_Patrol_Singles/Space_Patrol_52-10-25_004_The_Hole_in_Empty_Space.mp3",
    "length": 1731.12,
    "series": "Space Patrol",
    "title": "Hole in Empty Space",
    "date": "October 25, 1952",
    "item": "https://archive.org/details/OTRR_Space_Patrol_Singles"
   },
   {
    "src": "https://archive.org/download/otr_2000Plus/1950-03-29_000329m32s-2000Plus-MenFromMars.mp3",
    "length": 1771.52,
    "series": "2000 Plus",
    "title": "The Men From Mars",
    "date": "March 29, 1950",
    "item": "https://archive.org/details/otr_2000Plus"
   },
   {
    "src": "https://archive.org/download/Exploring_Tomorrow/ET_57-12-18_0002_Country_Boy.mp3",
    "length": 1028.2,
    "series": "Exploring Tomorrow",
    "title": "Country Boy",
    "date": "December 18, 1957",
    "item": "https://archive.org/details/Exploring_Tomorrow"
   },
   {
    "src": "https://archive.org/download/SpaceCadet2/52-02-26_Trial_in_Space_001.MP3",
    "length": 1332.66,
    "series": "Tom Corbett, Space Cadet",
    "title": "Trial in Space",
    "date": "February 26, 1952",
    "item": "https://archive.org/details/SpaceCadet2"
   },
   {
    "src": "https://archive.org/download/OTRR_X_Minus_One_Singles/XMinusOne55-09-15018TheCastaways.mp3",
    "length": 1325.59,
    "series": "X Minus One",
    "title": "The Castaways",
    "date": "September 15, 1955",
    "item": "https://archive.org/details/OTRR_X_Minus_One_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Dimension_X_Singles/Dimension_X_1950-05-27__08_ToTheFuture.mp3",
    "length": 1799.96,
    "series": "Dimension X",
    "title": "To the Future",
    "date": "May 27, 1950",
    "item": "https://archive.org/details/OTRR_Dimension_X_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Space_Patrol_Singles/Space_Patrol_53-02-28_022_The_Strange_Gift_of_the_New_Star.mp3",
    "length": 1662.11,
    "series": "Space Patrol",
    "title": "Strange Gift of the New Star",
    "date": "February 28, 1953",
    "item": "https://archive.org/details/OTRR_Space_Patrol_Singles"
   },
   {
    "src": "https://archive.org/download/otr_2000Plus/1950-05-03_0008-29m23s-2000Plus-WhenWorldsMet.mp3",
    "length": 1771.0,
    "series": "2000 Plus",
    "title": "When Worlds Met",
    "date": "May 3, 1950",
    "item": "https://archive.org/details/otr_2000Plus"
   },
   {
    "src": "https://archive.org/download/Exploring_Tomorrow/ET_58-01-15_0006_First_Contact.mp3",
    "length": 1183.35,
    "series": "Exploring Tomorrow",
    "title": "First Contact",
    "date": "January 15, 1958",
    "item": "https://archive.org/details/Exploring_Tomorrow"
   },
   {
    "src": "https://archive.org/download/SpaceCadet2/52-03-11_Giant_of_Mercury_001.MP3",
    "length": 1400.08,
    "series": "Tom Corbett, Space Cadet",
    "title": "Giant of Mercury",
    "date": "March 11, 1952",
    "item": "https://archive.org/details/SpaceCadet2"
   },
   {
    "src": "https://archive.org/download/OTRR_X_Minus_One_Singles/XMinusOne56-02-01036TheCaveOfNight.mp3",
    "length": 1699.41,
    "series": "X Minus One",
    "title": "The Cave of Night",
    "date": "February 1, 1956",
    "item": "https://archive.org/details/OTRR_X_Minus_One_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Dimension_X_Singles/Dimension_X_1950-07-14__15_TheManInTheMoon.mp3",
    "length": 1813.31,
    "series": "Dimension X",
    "title": "The Man In The Moon",
    "date": "July 14, 1950",
    "item": "https://archive.org/details/OTRR_Dimension_X_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Space_Patrol_Singles/Space_Patrol_53-08-01_044_The_Sleeping_Demon_of_Saturn.mp3",
    "length": 1764.47,
    "series": "Space Patrol",
    "title": "Sleeping Demon of Saturn",
    "date": "August 1, 1953",
    "item": "https://archive.org/details/OTRR_Space_Patrol_Singles"
   },
   {
    "src": "https://archive.org/download/otr_2000Plus/1950-06-07_0013-30m37s-2000Plus-TheOtherMan.mp3",
    "length": 1836.54,
    "series": "2000 Plus",
    "title": "The Other Man",
    "date": "June 7, 1950",
    "item": "https://archive.org/details/otr_2000Plus"
   },
   {
    "src": "https://archive.org/download/Exploring_Tomorrow/ET_58-02-05_0009_The_Gift_The_Happiness_Effect_.mp3",
    "length": 1196.89,
    "series": "Exploring Tomorrow",
    "title": "Happiness Effect",
    "date": "February 5, 1958",
    "item": "https://archive.org/details/Exploring_Tomorrow"
   },
   {
    "src": "https://archive.org/download/SpaceCadet2/52-03-25_Mission_of_Mercy_001.MP3",
    "length": 1434.09,
    "series": "Tom Corbett, Space Cadet",
    "title": "Mission of Mercy",
    "date": "March 25, 1952",
    "item": "https://archive.org/details/SpaceCadet2"
   },
   {
    "src": "https://archive.org/download/OTRR_X_Minus_One_Singles/XMinusOne56-05-29053Lulungomeena.mp3",
    "length": 1708.88,
    "series": "X Minus One",
    "title": "Lulungomeena",
    "date": "May 29, 1956",
    "item": "https://archive.org/details/OTRR_X_Minus_One_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Dimension_X_Singles/Dimension_X_1950-09-01__22_TheRoadsMustRoll.mp3",
    "length": 1781.94,
    "series": "Dimension X",
    "title": "The Roads Must Roll",
    "date": "September 1, 1950",
    "item": "https://archive.org/details/OTRR_Dimension_X_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Space_Patrol_Singles/Space_Patrol_53-11-14_059_Under_the_Sea_of_Planet_X.mp3",
    "length": 1722.28,
    "series": "Space Patrol",
    "title": "Under the Sea of Planet X",
    "date": "November 14, 1953",
    "item": "https://archive.org/details/OTRR_Space_Patrol_Singles"
   },
   {
    "src": "https://archive.org/download/otr_2000Plus/1950-06-28_0016-2000Plus-SpaceWreck.mp3",
    "length": 1752.83,
    "series": "2000 Plus",
    "title": "Space Wreck",
    "date": "June 28, 1950",
    "item": "https://archive.org/details/otr_2000Plus"
   },
   {
    "src": "https://archive.org/download/Exploring_Tomorrow/ET_58-03-19_0015_The_Mimic.Mp3",
    "length": 1059.23,
    "series": "Exploring Tomorrow",
    "title": "Mimic",
    "date": "March 19, 1958",
    "item": "https://archive.org/details/Exploring_Tomorrow"
   },
   {
    "src": "https://archive.org/download/SpaceCadet2/52-04-08_Sparkling_Meteor_001.mp3",
    "length": 1471.5,
    "series": "Tom Corbett, Space Cadet",
    "title": "Sparkling Meteor",
    "date": "April 8, 1952",
    "item": "https://archive.org/details/SpaceCadet2"
   },
   {
    "src": "https://archive.org/download/OTRR_X_Minus_One_Singles/XMinusOne56-10-10070Colony.mp3",
    "length": 1781.65,
    "series": "X Minus One",
    "title": "Colony",
    "date": "October 10, 1956",
    "item": "https://archive.org/details/OTRR_X_Minus_One_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Dimension_X_Singles/Dimension_X_1950-11-12__29_Shanghied.mp3",
    "length": 1824.05,
    "series": "Dimension X",
    "title": "Shanghaied",
    "date": "November 12, 1950",
    "item": "https://archive.org/details/OTRR_Dimension_X_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Space_Patrol_Singles/Space_Patrol_54-02-27_074_The_Serpent_of_Saturn.mp3",
    "length": 1752.53,
    "series": "Space Patrol",
    "title": "Serpent of Saturn",
    "date": "February 27, 1954",
    "item": "https://archive.org/details/OTRR_Space_Patrol_Singles"
   },
   {
    "src": "https://archive.org/download/otr_2000Plus/1950-09-27_0029-30m23s-2000Plus-TheGreenThing.mp3",
    "length": 1832.96,
    "series": "2000 Plus",
    "title": "The Green Thing",
    "date": "September 27, 1950",
    "item": "https://archive.org/details/otr_2000Plus"
   },
   {
    "src": "https://archive.org/download/Exploring_Tomorrow/ET_58-04-09_0018_Overpopulation_No_Way_Out.mp3",
    "length": 1120.91,
    "series": "Exploring Tomorrow",
    "title": "Overpopulation",
    "date": "April 9, 1958",
    "item": "https://archive.org/details/Exploring_Tomorrow"
   },
   {
    "src": "https://archive.org/download/SpaceCadet2/52-04-22_Riddle_of_Astro_001.mp3",
    "length": 1379.16,
    "series": "Tom Corbett, Space Cadet",
    "title": "Riddle of Astro",
    "date": "April 22, 1952",
    "item": "https://archive.org/details/SpaceCadet2"
   },
   {
    "src": "https://archive.org/download/OTRR_X_Minus_One_Singles/XMinusOne57-02-20089FieldStudy.mp3",
    "length": 1333.79,
    "series": "X Minus One",
    "title": "Field Study",
    "date": "February 20, 1957",
    "item": "https://archive.org/details/OTRR_X_Minus_One_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Dimension_X_Singles/Dimension_X_1951-06-10__36_Nightmare.mp3",
    "length": 1494.02,
    "series": "Dimension X",
    "title": "Nightmare",
    "date": "June 10, 1951",
    "item": "https://archive.org/details/OTRR_Dimension_X_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Space_Patrol_Singles/Space_Patrol_54-06-12_089_The_Tattooed_Atom.mp3",
    "length": 1756.51,
    "series": "Space Patrol",
    "title": "Tattooed Atom",
    "date": "June 12, 1954",
    "item": "https://archive.org/details/OTRR_Space_Patrol_Singles"
   },
   {
    "src": "https://archive.org/download/otr_2000Plus/1950-11-15_0036-28m08s-2000Plus-WorldsApart.mp3",
    "length": 1695.23,
    "series": "2000 Plus",
    "title": "Worlds Apart",
    "date": "November 15, 1950",
    "item": "https://archive.org/details/otr_2000Plus"
   },
   {
    "src": "https://archive.org/download/Exploring_Tomorrow/ET_58-04-30_0021_The_Stowaway.mp3",
    "length": 1084.62,
    "series": "Exploring Tomorrow",
    "title": "Stowaway",
    "date": "April 30, 1958",
    "item": "https://archive.org/details/Exploring_Tomorrow"
   },
   {
    "src": "https://archive.org/download/SpaceCadet2/52-05-06_Danger_in_Deep_Space_001.mp3",
    "length": 1449.76,
    "series": "Tom Corbett, Space Cadet",
    "title": "Danger in Deep Space",
    "date": "May 6, 1952",
    "item": "https://archive.org/details/SpaceCadet2"
   },
   {
    "src": "https://archive.org/download/OTRR_X_Minus_One_Singles/XMinusOne57-08-08106TheScapegoat.mp3",
    "length": 1288.13,
    "series": "X Minus One",
    "title": "The Scapegoat",
    "date": "August 8, 1957",
    "item": "https://archive.org/details/OTRR_X_Minus_One_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Dimension_X_Singles/Dimension_X_1951-08-09__43_Veldt.mp3",
    "length": 1811.9,
    "series": "Dimension X",
    "title": "The Veldt",
    "date": "August 9, 1951",
    "item": "https://archive.org/details/OTRR_Dimension_X_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Space_Patrol_Singles/Space_Patrol_54-10-02_105_The_Voice_from_the_Future.mp3",
    "length": 1767.18,
    "series": "Space Patrol",
    "title": "Voice from the Future",
    "date": "October 2, 1954",
    "item": "https://archive.org/details/OTRR_Space_Patrol_Singles"
   },
   {
    "src": "https://archive.org/download/otr_2000Plus/1951-10-10_xxxx-27m36s-2000Plus-RocketAndTheSkull.mp3",
    "length": 1664.0,
    "series": "2000 Plus",
    "title": "The Rocket And The Skull",
    "date": "October 10, 1951",
    "item": "https://archive.org/details/otr_2000Plus"
   },
   {
    "src": "https://archive.org/download/Exploring_Tomorrow/ET_58-05-21_0024_Time_Traveleraka_Meddlers_Moon.mp3",
    "length": 1061.74,
    "series": "Exploring Tomorrow",
    "title": "Time Traveler",
    "date": "May 21, 1958",
    "item": "https://archive.org/details/Exploring_Tomorrow"
   },
   {
    "src": "https://archive.org/download/SpaceCadet2/52-05-20_Greatest_Show_in_the_Universe_001.mp3",
    "length": 1450.65,
    "series": "Tom Corbett, Space Cadet",
    "title": "Greatest Show in the Universe",
    "date": "May 20, 1952",
    "item": "https://archive.org/details/SpaceCadet2"
   }
  ]
 },
 {
  "id": "outwest",
  "name": "Out West",
  "group": "Radio shows",
  "blurb": "Westerns: marshals, drifters and the frontier.",
  "card": "art/cards/outwest.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.5,
   "decrackle": 0.5,
   "tone": 9000
  },
  "tracks": [
   {
    "src": "https://archive.org/download/OTRR_Gunsmoke_Singles/Gunsmoke%2052-04-26%20%28001%29%20Billy%20the%20Kid.mp3",
    "length": 1740.04,
    "series": "Gunsmoke",
    "title": "Billy the Kid",
    "date": "April 26, 1952",
    "item": "https://archive.org/details/OTRR_Gunsmoke_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Fort_Laramie_Singles/Fort_Laramie_56-01-22_ep01_Playing_Indian.mp3",
    "length": 1771.41,
    "series": "Fort Laramie",
    "title": "Playing Indian",
    "date": "January 22, 1956",
    "item": "https://archive.org/details/OTRR_Fort_Laramie_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_The_Six_Shooter_Singles/1953-09-20%20Ep%2001%20Jenny.mp3",
    "length": 1704.15,
    "series": "The Six Shooter",
    "title": "Jenny",
    "date": "September 20, 1953",
    "item": "https://archive.org/details/OTRR_The_Six_Shooter_Singles"
   },
   {
    "src": "https://archive.org/download/HaveGunWillTravel_543/Hgwt1958-11-23001StrangeVendettadonMiquelRojas.mp3",
    "length": 1475.23,
    "series": "Have Gun – Will Travel",
    "title": "Strange Vendetta",
    "date": "November 23, 1958",
    "item": "https://archive.org/details/HaveGunWillTravel_543"
   },
   {
    "src": "https://archive.org/download/OTRR_Gunsmoke_Singles/Gunsmoke%2053-09-19%20%28074%29%20There%20Was%20Never%20a%20Horse.mp3",
    "length": 1804.17,
    "series": "Gunsmoke",
    "title": "There Was Never a Horse",
    "date": "September 19, 1953",
    "item": "https://archive.org/details/OTRR_Gunsmoke_Singles"
   },
   {
    "src": "https://archive.org/download/FrontierGentleman-All41Episodes/FrontierGentleman58-03-09_episode06_theClaimJumpers.mp3",
    "length": 1480.28,
    "series": "Frontier Gentleman",
    "title": "The Claim Jumpers",
    "date": "March 9, 1958",
    "item": "https://archive.org/details/FrontierGentleman-All41Episodes"
   },
   {
    "src": "https://archive.org/download/OTRR_Fort_Laramie_Singles/Fort_Laramie_56-02-26_ep06_Captains_Widow.mp3",
    "length": 1779.22,
    "series": "Fort Laramie",
    "title": "Captain's Widow",
    "date": "February 26, 1956",
    "item": "https://archive.org/details/OTRR_Fort_Laramie_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_The_Six_Shooter_Singles/1953-10-25%20Ep%2006%20Red%20Lawson%27s%20Revenge.mp3",
    "length": 1722.72,
    "series": "The Six Shooter",
    "title": "Red Lawson's Revenge",
    "date": "October 25, 1953",
    "item": "https://archive.org/details/OTRR_The_Six_Shooter_Singles"
   },
   {
    "src": "https://archive.org/download/HaveGunWillTravel_543/Hgwt1959-03-08016MonsterOnMoonRidge.mp3",
    "length": 1461.23,
    "series": "Have Gun – Will Travel",
    "title": "Monster On Moon Ridge",
    "date": "March 8, 1959",
    "item": "https://archive.org/details/HaveGunWillTravel_543"
   },
   {
    "src": "https://archive.org/download/OTRR_Gunsmoke_Singles/Gunsmoke%2055-01-01%20%28142%29%20The%20Bottle%20Man.mp3",
    "length": 1789.9,
    "series": "Gunsmoke",
    "title": "Bottle Man",
    "date": "January 1, 1955",
    "item": "https://archive.org/details/OTRR_Gunsmoke_Singles"
   },
   {
    "src": "https://archive.org/download/FrontierGentleman-All41Episodes/FrontierGentleman58-04-20_episode12_acesAndEights.mp3",
    "length": 1488.9,
    "series": "Frontier Gentleman",
    "title": "Aces And Eights",
    "date": "April 20, 1958",
    "item": "https://archive.org/details/FrontierGentleman-All41Episodes"
   },
   {
    "src": "https://archive.org/download/OTRR_Fort_Laramie_Singles/Fort_Laramie_56-04-01_ep11_Lost_Child.mp3",
    "length": 1795.73,
    "series": "Fort Laramie",
    "title": "Lost Child",
    "date": "April 1, 1956",
    "item": "https://archive.org/details/OTRR_Fort_Laramie_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_The_Six_Shooter_Singles/1953-11-29%20Ep%2011%20Sheriff%20Billy.mp3",
    "length": 1729.36,
    "series": "The Six Shooter",
    "title": "Sheriff Billy",
    "date": "November 29, 1953",
    "item": "https://archive.org/details/OTRR_The_Six_Shooter_Singles"
   },
   {
    "src": "https://archive.org/download/HaveGunWillTravel_543/Hgwt1959-06-21031NorthForktroubleInNthFork.mp3",
    "length": 1428.89,
    "series": "Have Gun – Will Travel",
    "title": "North Fork",
    "date": "June 21, 1959",
    "item": "https://archive.org/details/HaveGunWillTravel_543"
   },
   {
    "src": "https://archive.org/download/OTRR_Gunsmoke_Singles/Gunsmoke%2056-04-22%20%28211%29%20Indian%20Crazy.mp3",
    "length": 1492.08,
    "series": "Gunsmoke",
    "title": "Indian Crazy",
    "date": "April 22, 1956",
    "item": "https://archive.org/details/OTRR_Gunsmoke_Singles"
   },
   {
    "src": "https://archive.org/download/FrontierGentleman-All41Episodes/FrontierGentleman58-06-01_episode18_schoolDays.mp3",
    "length": 1374.15,
    "series": "Frontier Gentleman",
    "title": "School Days",
    "date": "June 1, 1958",
    "item": "https://archive.org/details/FrontierGentleman-All41Episodes"
   },
   {
    "src": "https://archive.org/download/OTRR_Fort_Laramie_Singles/Fort_Laramie_56-05-13_ep16_War_Correspondent.mp3",
    "length": 1821.84,
    "series": "Fort Laramie",
    "title": "War Correspondent",
    "date": "May 13, 1956",
    "item": "https://archive.org/details/OTRR_Fort_Laramie_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_The_Six_Shooter_Singles/1954-01-03%20Ep%2016%20A%20Friend%20In%20Need.mp3",
    "length": 1701.12,
    "series": "The Six Shooter",
    "title": "A Friend In Need",
    "date": "January 3, 1954",
    "item": "https://archive.org/details/OTRR_The_Six_Shooter_Singles"
   },
   {
    "src": "https://archive.org/download/HaveGunWillTravel_543/Hgwt1959-10-04046TheContessa.mp3",
    "length": 1459.78,
    "series": "Have Gun – Will Travel",
    "title": "The Contessa",
    "date": "October 4, 1959",
    "item": "https://archive.org/details/HaveGunWillTravel_543"
   },
   {
    "src": "https://archive.org/download/OTRR_Gunsmoke_Singles/Gunsmoke%2057-08-04%20%28278%29%20Big%20Hands.mp3",
    "length": 1473.07,
    "series": "Gunsmoke",
    "title": "Big Hands",
    "date": "August 4, 1957",
    "item": "https://archive.org/details/OTRR_Gunsmoke_Singles"
   },
   {
    "src": "https://archive.org/download/FrontierGentleman-All41Episodes/FrontierGentleman58-07-20_episode24_mightyMouse.mp3",
    "length": 1535.34,
    "series": "Frontier Gentleman",
    "title": "Mighty Mouse",
    "date": "July 20, 1958",
    "item": "https://archive.org/details/FrontierGentleman-All41Episodes"
   },
   {
    "src": "https://archive.org/download/OTRR_Fort_Laramie_Singles/Fort_Laramie_56-06-17_ep21_Winter_Soldier.mp3",
    "length": 1789.07,
    "series": "Fort Laramie",
    "title": "Winter Soldier",
    "date": "June 17, 1956",
    "item": "https://archive.org/details/OTRR_Fort_Laramie_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_The_Six_Shooter_Singles/1954-02-07%20Ep%2021%20Apron%20Faced%20Sorrel.mp3",
    "length": 1712.09,
    "series": "The Six Shooter",
    "title": "Apron Faced Sorrel",
    "date": "February 7, 1954",
    "item": "https://archive.org/details/OTRR_The_Six_Shooter_Singles"
   },
   {
    "src": "https://archive.org/download/HaveGunWillTravel_543/Hgwt1960-01-24062Nataemhon.mp3",
    "length": 1394.42,
    "series": "Have Gun – Will Travel",
    "title": "Nataemhon",
    "date": "January 24, 1960",
    "item": "https://archive.org/details/HaveGunWillTravel_543"
   },
   {
    "src": "https://archive.org/download/OTRR_Gunsmoke_Singles/Gunsmoke%2058-11-30%20%28347%29%20Burning%20Wagon.mp3",
    "length": 1170.93,
    "series": "Gunsmoke",
    "title": "Burning Wagon",
    "date": "November 30, 1958",
    "item": "https://archive.org/details/OTRR_Gunsmoke_Singles"
   },
   {
    "src": "https://archive.org/download/FrontierGentleman-All41Episodes/FrontierGentleman58-08-31_episode30_belleSiddonStrikesBack.mp3",
    "length": 1492.81,
    "series": "Frontier Gentleman",
    "title": "Belle Siddon Strikes Back",
    "date": "August 31, 1958",
    "item": "https://archive.org/details/FrontierGentleman-All41Episodes"
   },
   {
    "src": "https://archive.org/download/OTRR_Fort_Laramie_Singles/Fort_Laramie_56-07-22_ep26_Spotted_Tails_Return.mp3",
    "length": 1776.14,
    "series": "Fort Laramie",
    "title": "Spotted Tail's Return",
    "date": "July 22, 1956",
    "item": "https://archive.org/details/OTRR_Fort_Laramie_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_The_Six_Shooter_Singles/1954-03-21%20Ep%2026%20Duel%20At%20Lockwood.mp3",
    "length": 1793.31,
    "series": "The Six Shooter",
    "title": "Duel At Lockwood",
    "date": "March 21, 1954",
    "item": "https://archive.org/details/OTRR_The_Six_Shooter_Singles"
   },
   {
    "src": "https://archive.org/download/HaveGunWillTravel_543/Hgwt1960-05-08077PatMurphy.mp3",
    "length": 1474.61,
    "series": "Have Gun – Will Travel",
    "title": "Pat Murphy",
    "date": "May 8, 1960",
    "item": "https://archive.org/details/HaveGunWillTravel_543"
   },
   {
    "src": "https://archive.org/download/OTRR_Gunsmoke_Singles/Gunsmoke%2060-03-27%20%28416%29%20Indian%20Baby.mp3",
    "length": 1552.29,
    "series": "Gunsmoke",
    "title": "Indian Baby",
    "date": "March 27, 1960",
    "item": "https://archive.org/details/OTRR_Gunsmoke_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Fort_Laramie_Singles/Fort_Laramie_56-08-26_ep31_The_Chaplain.mp3",
    "length": 1800.98,
    "series": "Fort Laramie",
    "title": "Chaplain",
    "date": "August 26, 1956",
    "item": "https://archive.org/details/OTRR_Fort_Laramie_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_The_Six_Shooter_Singles/1954-04-22%20Ep%2030%20Johnny%20Stringer.mp3",
    "length": 1787.64,
    "series": "The Six Shooter",
    "title": "Johnny Stringer",
    "date": "April 22, 1954",
    "item": "https://archive.org/details/OTRR_The_Six_Shooter_Singles"
   },
   {
    "src": "https://archive.org/download/HaveGunWillTravel_543/Hgwt1960-08-21092BountyHuntertheWarrant.mp3",
    "length": 1498.92,
    "series": "Have Gun – Will Travel",
    "title": "Bounty Hunter",
    "date": "August 21, 1960",
    "item": "https://archive.org/details/HaveGunWillTravel_543"
   }
  ]
 },
 {
  "id": "laughs",
  "name": "Laughs",
  "group": "Radio shows",
  "blurb": "Sitcoms and comedy hours.",
  "card": "art/cards/laughs.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.5,
   "decrackle": 0.5,
   "tone": 9000
  },
  "tracks": [
   {
    "src": "https://archive.org/download/JackBenny1/Jb1932-05-12Jacks1stPayingMcJob.mp3",
    "length": 1750.89,
    "series": "The Jack Benny Program",
    "title": "Jack's 1st Paying MC Job",
    "date": "May 12, 1932",
    "item": "https://archive.org/details/JackBenny1"
   },
   {
    "src": "https://archive.org/download/fibber-mc-gee-and-molly/FMM%201931-06-01%20%28xx%29%20Smackout.mp3",
    "length": 1172.0,
    "series": "Fibber McGee and Molly",
    "title": "Smackout",
    "date": "June 1, 1931",
    "item": "https://archive.org/details/fibber-mc-gee-and-molly"
   },
   {
    "src": "https://archive.org/download/the-burns-and-allen-show-1934-09-26-2-leaving-for-america/The%20Burns%20And%20Allen%20Show%201945-01-29%20%2824%29%20The%20Diet.mp3",
    "length": 1853.8,
    "series": "Burns and Allen",
    "title": "The Diet",
    "date": "January 29, 1945",
    "item": "https://archive.org/details/the-burns-and-allen-show-1934-09-26-2-leaving-for-america"
   },
   {
    "src": "https://archive.org/download/Otrr_The_Great_Gildersleeve_Singles/The%20Great%20Gildersleeve%2041-08-31%20%28001%29%20Gildy%20Arrives%20at%20Summerfield.mp3",
    "length": 1773.17,
    "series": "The Great Gildersleeve",
    "title": "Gildy Arrives at Summerfield",
    "date": "August 31, 1941",
    "item": "https://archive.org/details/Otrr_The_Great_Gildersleeve_Singles"
   },
   {
    "src": "https://archive.org/download/JackBenny1/Jb1934-07-20WhoKilledMrStooge5.mp3",
    "length": 1666.46,
    "series": "The Jack Benny Program",
    "title": "Who Killed Mr. Stooge (Part 5)",
    "date": "July 20, 1934",
    "item": "https://archive.org/details/JackBenny1"
   },
   {
    "src": "https://archive.org/download/fibber-mc-gee-and-molly/FMM%201937-07-26%20%28120%29%20Grocery%20Store%20Manager.mp3",
    "length": 1813.47,
    "series": "Fibber McGee and Molly",
    "title": "Grocery Store Manager",
    "date": "July 26, 1937",
    "item": "https://archive.org/details/fibber-mc-gee-and-molly"
   },
   {
    "src": "https://archive.org/download/the-burns-and-allen-show-1934-09-26-2-leaving-for-america/The%20Burns%20and%20Allen%20Show%201940-09-30%20%2814%29%20George%20Is%20Kidnapped%20by%20a%20Gangster.mp3",
    "length": 1715.15,
    "series": "Burns and Allen",
    "title": "George Is Kidnapped by a Gangster",
    "date": "September 30, 1940",
    "item": "https://archive.org/details/the-burns-and-allen-show-1934-09-26-2-leaving-for-america"
   },
   {
    "src": "https://archive.org/download/Otrr_The_Great_Gildersleeve_Singles/The%20Great%20Gildersleeve%2043-10-10%20%28095%29%20Old%20School%20Pal%20To%20Visit%20aka%20Royal%20Visit.mp3",
    "length": 1788.71,
    "series": "The Great Gildersleeve",
    "title": "Old School Pal To Visit",
    "date": "October 10, 1943",
    "item": "https://archive.org/details/Otrr_The_Great_Gildersleeve_Singles"
   },
   {
    "src": "https://archive.org/download/Our_Miss_Brooks_190_Episodes/Our_Miss_Brooks_490410_036_Mr_Conklin_s_Wake_Up_Plan.mp3",
    "length": 1769.85,
    "series": "Our Miss Brooks",
    "title": "Mr. Conklin's Wake Up Plan",
    "date": "April 10, 1949",
    "item": "https://archive.org/details/Our_Miss_Brooks_190_Episodes"
   },
   {
    "src": "https://archive.org/download/JackBenny1/Jb1937-02-14JacksBirthday.mp3",
    "length": 1720.7,
    "series": "The Jack Benny Program",
    "title": "Jack's Birthday",
    "date": "February 14, 1937",
    "item": "https://archive.org/details/JackBenny1"
   },
   {
    "src": "https://archive.org/download/fibber-mc-gee-and-molly/FMM%201940-05-28%20%28250%29%20Circus%20Comes%20To%20Town.mp3",
    "length": 1771.3,
    "series": "Fibber McGee and Molly",
    "title": "Circus Comes To Town",
    "date": "May 28, 1940",
    "item": "https://archive.org/details/fibber-mc-gee-and-molly"
   },
   {
    "src": "https://archive.org/download/the-burns-and-allen-show-1934-09-26-2-leaving-for-america/The%20Burns%20and%20Allen%20Show%201942-12-29%20%2813%29%20Gracie%27s%20Dating%20Service.mp3",
    "length": 1739.49,
    "series": "Burns and Allen",
    "title": "Gracie's Dating Service",
    "date": "December 29, 1942",
    "item": "https://archive.org/details/the-burns-and-allen-show-1934-09-26-2-leaving-for-america"
   },
   {
    "src": "https://archive.org/download/Otrr_The_Great_Gildersleeve_Singles/The%20Great%20Gildersleeve%2045-11-25%20%28188%29%20Big%20Football%20Game.mp3",
    "length": 1790.07,
    "series": "The Great Gildersleeve",
    "title": "Big Football Game",
    "date": "November 25, 1945",
    "item": "https://archive.org/details/Otrr_The_Great_Gildersleeve_Singles"
   },
   {
    "src": "https://archive.org/download/Our_Miss_Brooks_190_Episodes/Our_Miss_Brooks_491030_064_Halloween_Party.mp3",
    "length": 1587.68,
    "series": "Our Miss Brooks",
    "title": "Halloween Party",
    "date": "October 30, 1949",
    "item": "https://archive.org/details/Our_Miss_Brooks_190_Episodes"
   },
   {
    "src": "https://archive.org/download/JackBenny1/Jb1939-01-01Goodbye1938.mp3",
    "length": 1745.94,
    "series": "The Jack Benny Program",
    "title": "Goodbye 1938",
    "date": "January 1, 1939",
    "item": "https://archive.org/details/JackBenny1"
   },
   {
    "src": "https://archive.org/download/fibber-mc-gee-and-molly/FMM%201943-02-23%20%28353%29%20Poker%20Game.mp3",
    "length": 1706.48,
    "series": "Fibber McGee and Molly",
    "title": "Poker Game",
    "date": "February 23, 1943",
    "item": "https://archive.org/details/fibber-mc-gee-and-molly"
   },
   {
    "src": "https://archive.org/download/the-burns-and-allen-show-1934-09-26-2-leaving-for-america/The%20Burns%20and%20Allen%20Show%201944-01-18%20%2820%29%20Guest%20-%20William%20Bendix.mp3",
    "length": 1766.09,
    "series": "Burns and Allen",
    "title": "Guest - William Bendix",
    "date": "January 18, 1944",
    "item": "https://archive.org/details/the-burns-and-allen-show-1934-09-26-2-leaving-for-america"
   },
   {
    "src": "https://archive.org/download/Otrr_The_Great_Gildersleeve_Singles/The%20Great%20Gildersleeve%2047-06-04%20%28254%29%20Called%20in%20by%20the%20IRS.mp3",
    "length": 1789.13,
    "series": "The Great Gildersleeve",
    "title": "Called in by the IRS",
    "date": "June 4, 1947",
    "item": "https://archive.org/details/Otrr_The_Great_Gildersleeve_Singles"
   },
   {
    "src": "https://archive.org/download/Our_Miss_Brooks_190_Episodes/Our_Miss_Brooks_500521_093_Rare_Black_Orchid.mp3",
    "length": 1771.77,
    "series": "Our Miss Brooks",
    "title": "Rare Black Orchid",
    "date": "May 21, 1950",
    "item": "https://archive.org/details/Our_Miss_Brooks_190_Episodes"
   },
   {
    "src": "https://archive.org/download/JackBenny1/Jb1941-10-19TrainToL.a..mp3",
    "length": 1617.62,
    "series": "The Jack Benny Program",
    "title": "Train to L.A.",
    "date": "October 19, 1941",
    "item": "https://archive.org/details/JackBenny1"
   },
   {
    "src": "https://archive.org/download/fibber-mc-gee-and-molly/FMM%201945-10-30%20%28451%29%20Building%20House%20Next%20Door.mp3",
    "length": 1779.79,
    "series": "Fibber McGee and Molly",
    "title": "Building House Next Door",
    "date": "October 30, 1945",
    "item": "https://archive.org/details/fibber-mc-gee-and-molly"
   },
   {
    "src": "https://archive.org/download/the-burns-and-allen-show-1934-09-26-2-leaving-for-america/The%20Burns%20and%20Allen%20Show%201945-11-29%20%2811%29%20Gracie%20Goes%20Back%20To%20College.mp3",
    "length": 1794.07,
    "series": "Burns and Allen",
    "title": "Gracie Goes Back To College",
    "date": "November 29, 1945",
    "item": "https://archive.org/details/the-burns-and-allen-show-1934-09-26-2-leaving-for-america"
   },
   {
    "src": "https://archive.org/download/Otrr_The_Great_Gildersleeve_Singles/The%20Great%20Gildersleeve%2049-05-18%20%28330%29%20Marjorie%20and%20Rodney%2C%20the%20Poet.mp3",
    "length": 1789.97,
    "series": "The Great Gildersleeve",
    "title": "Marjorie and Rodney, the Poet",
    "date": "May 18, 1949",
    "item": "https://archive.org/details/Otrr_The_Great_Gildersleeve_Singles"
   },
   {
    "src": "https://archive.org/download/Our_Miss_Brooks_190_Episodes/Our_Miss_Brooks_510422_128_New_School_TV_Set.mp3",
    "length": 1777.4,
    "series": "Our Miss Brooks",
    "title": "New School TV Set",
    "date": "April 22, 1951",
    "item": "https://archive.org/details/Our_Miss_Brooks_190_Episodes"
   },
   {
    "src": "https://archive.org/download/JackBenny1/Jb1944-04-23DennisLeavesForTheNavy.mp3",
    "length": 1682.15,
    "series": "The Jack Benny Program",
    "title": "Dennis Leaves for the Navy",
    "date": "April 23, 1944",
    "item": "https://archive.org/details/JackBenny1"
   },
   {
    "src": "https://archive.org/download/fibber-mc-gee-and-molly/FMM%201948-05-04%20%28552%29%20Selling%20the%20House.mp3",
    "length": 1371.6,
    "series": "Fibber McGee and Molly",
    "title": "Selling the House",
    "date": "May 4, 1948",
    "item": "https://archive.org/details/fibber-mc-gee-and-molly"
   },
   {
    "src": "https://archive.org/download/the-burns-and-allen-show-1934-09-26-2-leaving-for-america/The%20Burns%20and%20Allen%20Show%201947-01-02%20%2818%29%20Housewife%27s%20Guild.mp3",
    "length": 1632.43,
    "series": "Burns and Allen",
    "title": "Housewife's Guild",
    "date": "January 2, 1947",
    "item": "https://archive.org/details/the-burns-and-allen-show-1934-09-26-2-leaving-for-america"
   },
   {
    "src": "https://archive.org/download/Otrr_The_Great_Gildersleeve_Singles/The%20Great%20Gildersleeve%2051-05-09%20%28407%29%20Marjorie%20and%20Bronco%27s%20First%20Anniversary.mp3",
    "length": 1790.12,
    "series": "The Great Gildersleeve",
    "title": "Marjorie and Bronco's First Anniversary",
    "date": "May 9, 1951",
    "item": "https://archive.org/details/Otrr_The_Great_Gildersleeve_Singles"
   },
   {
    "src": "https://archive.org/download/Our_Miss_Brooks_190_Episodes/Our_Miss_Brooks_540424_Cow_in_the_Closet_-_AFRS.mp3",
    "length": 1106.56,
    "series": "Our Miss Brooks",
    "title": "Cow In The Closet",
    "date": "April 24, 1954",
    "item": "https://archive.org/details/Our_Miss_Brooks_190_Episodes"
   },
   {
    "src": "https://archive.org/download/JackBenny1/Jb1947-05-06GuestIsHoagyCarmichael.mp3",
    "length": 1767.43,
    "series": "The Jack Benny Program",
    "title": "Guest is Hoagy Carmichael",
    "date": "May 6, 1947",
    "item": "https://archive.org/details/JackBenny1"
   },
   {
    "src": "https://archive.org/download/fibber-mc-gee-and-molly/FMM%201951-02-06%20%28647%29%20National%20Pancake%20Week.mp3",
    "length": 1761.44,
    "series": "Fibber McGee and Molly",
    "title": "National Pancake Week",
    "date": "February 6, 1951",
    "item": "https://archive.org/details/fibber-mc-gee-and-molly"
   },
   {
    "src": "https://archive.org/download/the-burns-and-allen-show-1934-09-26-2-leaving-for-america/The%20Burns%20and%20Allen%20Show%201948-05-06%20%2836%29%20Judson%27s%20Sister%20and%20The%20Oil%20Well.mp3",
    "length": 1430.44,
    "series": "Burns and Allen",
    "title": "Judson's Sister and The Oil Well",
    "date": "May 6, 1948",
    "item": "https://archive.org/details/the-burns-and-allen-show-1934-09-26-2-leaving-for-america"
   },
   {
    "src": "https://archive.org/download/Otrr_The_Great_Gildersleeve_Singles/The%20Great%20Gildersleeve%2053-01-21%20%28482%29%20Cousin%20Bert%20Sends%20Leroy%20a%20Great%20Dane.mp3",
    "length": 1752.33,
    "series": "The Great Gildersleeve",
    "title": "Cousin Bert Sends Leroy a Great Dane",
    "date": "January 21, 1953",
    "item": "https://archive.org/details/Otrr_The_Great_Gildersleeve_Singles"
   },
   {
    "src": "https://archive.org/download/Our_Miss_Brooks_190_Episodes/Our_Miss_Brooks_550626_295_Marriage_By_Proxy.mp3",
    "length": 1563.64,
    "series": "Our Miss Brooks",
    "title": "Marriage By Proxy",
    "date": "June 26, 1955",
    "item": "https://archive.org/details/Our_Miss_Brooks_190_Episodes"
   }
  ]
 },
 {
  "id": "ragtime",
  "name": "Ragtime",
  "group": "Music",
  "music": true,
  "blurb": "Rags, cakewalks and brass bands, before 1926.",
  "card": "art/cards/ragtime.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.9,
   "decrackle": 0.9,
   "tone": 6000
  },
  "tracks": [
   {
    "src": "https://archive.org/download/EdwardMFavorwiththeAmericanQuartet/EdwardMFavorwiththeAmericanQuartet-ThatDublinRag.mp3",
    "length": 185.0,
    "series": "Edward M. Favor with the American Quartet",
    "title": "That Dublin Rag",
    "date": "1910",
    "item": "https://archive.org/details/EdwardMFavorwiththeAmericanQuartet"
   },
   {
    "src": "https://archive.org/download/78_railroad-rag_arthur-collins_gbia0477320a/RAILROAD%20RAG%20-%20Arthur%20Collins.mp3",
    "length": 169.01,
    "series": "Arthur Collins",
    "title": "Railroad Rag",
    "date": "1911",
    "item": "https://archive.org/details/78_railroad-rag_arthur-collins_gbia0477320a"
   },
   {
    "src": "https://archive.org/download/78_gee-whiz_emerson-military-band-abe-losch_gbia0363100b/GEE%20WHIZ%20-%20EMERSON%20MILITARY%20BAND%20-%20ABE%20LOSCH.mp3",
    "length": 199.92,
    "series": "Emerson Military Band",
    "title": "Gee Whiz",
    "date": "1919",
    "item": "https://archive.org/details/78_gee-whiz_emerson-military-band-abe-losch_gbia0363100b"
   },
   {
    "src": "https://archive.org/download/78_motor-march_vess-l-ossman_gbia0061084b/Motor%20March%20-%20Vess%20L.%20Ossman.mp3",
    "length": 184.0,
    "series": "Vess L. Ossman",
    "title": "Motor March",
    "date": "1910",
    "item": "https://archive.org/details/78_motor-march_vess-l-ossman_gbia0061084b"
   },
   {
    "src": "https://archive.org/download/78_kitten-on-the-keys_zez-confrey-and-his-orchestra-zez-confrey_gbia0121085b/Kitten%20on%20the%20keys%20-%20Zez%20Confrey%20and%20His%20Orchestra.mp3",
    "length": 180.0,
    "series": "Zez Confrey and His Orchestra",
    "title": "Kitten on the keys",
    "date": "1922",
    "item": "https://archive.org/details/78_kitten-on-the-keys_zez-confrey-and-his-orchestra-zez-confrey_gbia0121085b"
   },
   {
    "src": "https://archive.org/download/VictorMilitaryBandReubenFoxTrotCa1915/Victor_Military_Band-Reuben_Fox_Trot-ca1915.mp3",
    "length": 224.0,
    "series": "Victor Military Band",
    "title": "Reuben Fox Trot",
    "date": "1915",
    "item": "https://archive.org/details/VictorMilitaryBandReubenFoxTrotCa1915"
   },
   {
    "src": "https://archive.org/download/78_that-eccentric-rag_original-memphis-five-robinson_gbia0101470b/That%20Eccentric%20Rag%20-%20Original%20Memphis%20Five.mp3",
    "length": 187.0,
    "series": "Original Memphis Five",
    "title": "That Eccentric Rag",
    "date": "1923",
    "item": "https://archive.org/details/78_that-eccentric-rag_original-memphis-five-robinson_gbia0101470b"
   },
   {
    "src": "https://archive.org/download/edbw-103/edbw-103.mp3",
    "length": 139.0,
    "series": "Edison Concert Band",
    "title": "A Hot Time March",
    "date": "1900",
    "item": "https://archive.org/details/edbw-103"
   },
   {
    "src": "https://archive.org/download/78_russian-rag_jim-europes-band-cobb_gbia0302341b/Russian%20Rag%20-%20Jim%20Europe%27s%20Band%20-%20Cobb.mp3",
    "length": 201.1,
    "series": "Jim Europe's Band",
    "title": "Russian Rag",
    "date": "1919",
    "item": "https://archive.org/details/78_russian-rag_jim-europes-band-cobb_gbia0302341b"
   },
   {
    "src": "https://archive.org/download/1917-USA-Archives-1917-02-26-Original-Dixieland-Jazz-Band-Dixie-Jazz-Band-One-Step/1917%20%28USA%29%20Archives%201917%2002%2026%20Original%20Dixieland%20Jazz%20Band%20-%20Dixie%20Jazz%20Band%20One-Step.mp3",
    "length": 161.58,
    "series": "Original Dixieland Jazz Band",
    "title": "Dixie Jazz Band One-Step",
    "date": "1917",
    "item": "https://archive.org/details/1917-USA-Archives-1917-02-26-Original-Dixieland-Jazz-Band-Dixie-Jazz-Band-One-Step"
   },
   {
    "src": "https://archive.org/download/old-timers-princes-orchestra/Blue%20bird%20%20%20%20Prince%27s%20Orchestra.mp3",
    "length": 252.84,
    "series": "Prince's Band, Prince's Orchestra",
    "title": "Blue bird Prince's Orchestra",
    "date": "1901",
    "item": "https://archive.org/details/old-timers-princes-orchestra"
   },
   {
    "src": "https://archive.org/download/Fred_Van_Eps-A_Rag_Time_Episode/Van_Eps_Fred-A_Rag_Time_Episode.mp3",
    "length": 166.0,
    "series": "Fred Van Eps",
    "title": "A Rag-Time Episode",
    "date": "1911",
    "item": "https://archive.org/details/Fred_Van_Eps-A_Rag_Time_Episode"
   },
   {
    "src": "https://archive.org/download/EuropesSocietyOrchestraDownHomeRag1914/Europes_Society_Orchestra-Down_Home_Rag-1914.mp3",
    "length": 203.0,
    "series": "Europe's Society Orchestra",
    "title": "Down Home Rag",
    "date": "1914",
    "item": "https://archive.org/details/EuropesSocietyOrchestraDownHomeRag1914"
   },
   {
    "src": "https://archive.org/download/78_cabaret-rag_standard-band_gbia0289422b/CABARET%20RAG%20-%20Standard%20Band.mp3",
    "length": 168.86,
    "series": "Standard Band",
    "title": "Cabaret Rag",
    "date": "1912",
    "item": "https://archive.org/details/78_cabaret-rag_standard-band_gbia0289422b"
   },
   {
    "src": "https://archive.org/download/edba-2089/edba-2089.mp3",
    "length": 225.0,
    "series": "Edison Military Band",
    "title": "Hungarian Rag - One-Step",
    "date": "1913",
    "item": "https://archive.org/details/edba-2089"
   },
   {
    "src": "https://archive.org/download/78_the-college-rag_olly-oakley-w-hunter_gbia3036757b/The%20College%20Rag%20-%20Olly%20Oakley%20-%20W.%20HUNTER.mp3",
    "length": 196.0,
    "series": "Olly Oakley",
    "title": "The College Rag",
    "date": "1913",
    "item": "https://archive.org/details/78_the-college-rag_olly-oakley-w-hunter_gbia3036757b"
   },
   {
    "src": "https://archive.org/download/edgm-10104/edgm-10104.mp3",
    "length": 120.0,
    "series": "American Symphony Orchestra",
    "title": "Turkey Trot",
    "date": "1908",
    "item": "https://archive.org/details/edgm-10104"
   },
   {
    "src": "https://archive.org/download/78_pozzo-one-step_frisco-jass-band-vincent-rose_gbia0300491a/Pozzo%20One-Step%20-%20FRISCO%20%22JASS%22%20BAND%20-%20Vincent%20Rose.mp3",
    "length": 217.73,
    "series": "Frisco \"jass\" Band",
    "title": "Pozzo One-Step",
    "date": "1917",
    "item": "https://archive.org/details/78_pozzo-one-step_frisco-jass-band-vincent-rose_gbia0300491a"
   },
   {
    "src": "https://archive.org/download/78_col-stuart-march_conways-band-a-f-weldon_gbia0275307b/Col.%20Stuart%20March%20-%20CONWAY%27S%20BAND%20-%20A.%20F.%20Weldon.mp3",
    "length": 242.59,
    "series": "Conway's Band",
    "title": "Col. Stuart March",
    "date": "1919",
    "item": "https://archive.org/details/78_col-stuart-march_conways-band-a-f-weldon_gbia0275307b"
   },
   {
    "src": "https://archive.org/download/78_a-la-paree_rega-dance-orchestra-henri-verdin_gbia0351117a/A%20LA%20PAREE%20-%20REGA%20DANCE%20ORCHESTRA%20-%20Henri%20Verdin.mp3",
    "length": 210.05,
    "series": "Rega Dance Orchestra",
    "title": "A La Paree",
    "date": "1920",
    "item": "https://archive.org/details/78_a-la-paree_rega-dance-orchestra-henri-verdin_gbia0351117a"
   },
   {
    "src": "https://archive.org/download/78_ive-got-the-red-white-and-blues_noble-sissle-eubie-blake-clarnce-gaskill_gbia0170603a/I%27VE%20GOT%20THE%20RED%2C%20WHITE%20AND%20BLUES%20-%20NOBLE%20SISSLE.mp3",
    "length": 158.0,
    "series": "Noble Sissle",
    "title": "I've Got the Red, White and Blues",
    "date": "1921",
    "item": "https://archive.org/details/78_ive-got-the-red-white-and-blues_noble-sissle-eubie-blake-clarnce-gaskill_gbia0170603a"
   },
   {
    "src": "https://archive.org/download/78_tiger-rag_friars-society-orchestra-husk-ohara_gbia0446634b/Tiger%20Rag%20-%20Friars%20Society%20Orchestra%20-%20Husk%20O%27Hara.mp3",
    "length": 152.83,
    "series": "Friars Society Orchestra",
    "title": "Tiger Rag",
    "date": "1922",
    "item": "https://archive.org/details/78_tiger-rag_friars-society-orchestra-husk-ohara_gbia0446634b"
   },
   {
    "src": "https://archive.org/download/Conways_Band-Ragging_The_Scale/Conways_Band-Ragging_The_Scale.mp3",
    "length": 177.0,
    "series": "Conways Band",
    "title": "Conway's Band - Ragging The Scale",
    "date": "1915",
    "item": "https://archive.org/details/Conways_Band-Ragging_The_Scale"
   },
   {
    "src": "https://archive.org/download/EDIS-SRP-0195-07/EDIS-SRP-0195-07.mp3",
    "length": 199.93,
    "series": "Pietro Frosini",
    "title": "New York blues - rag classical",
    "date": "1916",
    "item": "https://archive.org/details/EDIS-SRP-0195-07"
   },
   {
    "src": "https://archive.org/download/78_somebody_van-eps-specialty-four-van-eps-green-banta-glantz-little-stanley-dellon_gbia0421618a/SOMEBODY%20-%20VAN%20EPS%20SPECIALTY%20FOUR%20-%20Van%20Eps.mp3",
    "length": 182.38,
    "series": "Van Eps Specialty Four",
    "title": "Somebody",
    "date": "1920",
    "item": "https://archive.org/details/78_somebody_van-eps-specialty-four-van-eps-green-banta-glantz-little-stanley-dellon_gbia0421618a"
   },
   {
    "src": "https://archive.org/download/edgm-8844/edgm-8844.mp3",
    "length": 130.0,
    "series": "Edison Symphony Orchestra",
    "title": "Down Tennessee - Descriptive Barn Dance",
    "date": "1904",
    "item": "https://archive.org/details/edgm-8844"
   },
   {
    "src": "https://archive.org/download/Joseph_Moskowitz-Panama_Pacific_Drag/Joseph_Moskowitiz-Panama-Pacific_Drag.mp3",
    "length": 168.0,
    "series": "Joseph Moskowitz",
    "title": "Panama Pacific Drag",
    "date": "1916",
    "item": "https://archive.org/details/Joseph_Moskowitz-Panama_Pacific_Drag"
   },
   {
    "src": "https://archive.org/download/BorbeesJassOrchestraTheRagtimeVolunteersAreOffToWar1917/Borbees_Jass_Orchestra-The_Ragtime_Volunteers_Are_Off_To_War-1917.mp3",
    "length": 180.0,
    "series": "Borbee's Jass Orchestra",
    "title": "The Ragtime Volunteers Are Off To War",
    "date": "1917",
    "item": "https://archive.org/details/BorbeesJassOrchestraTheRagtimeVolunteersAreOffToWar1917"
   },
   {
    "src": "https://archive.org/download/78_at-the-jazz-band-ball_synco-jazz-band-la-rocca-shields_gbia0516713b/AT%20THE%20JAZZ%20BAND%20BALL%20-%20SYNCO%20JAZZ%20BAND%20-%20La%20Rocca.mp3",
    "length": 173.0,
    "series": "Synco Jazz Band",
    "title": "At the Jazz Band Ball",
    "date": "1919",
    "item": "https://archive.org/details/78_at-the-jazz-band-ball_synco-jazz-band-la-rocca-shields_gbia0516713b"
   },
   {
    "src": "https://archive.org/download/ipc-2595/ipc-2595.mp3",
    "length": 121.18,
    "series": "Unknown Performer",
    "title": "Lumbering Luke (Concertina Solo)",
    "date": "1904",
    "item": "https://archive.org/details/ipc-2595"
   },
   {
    "src": "https://archive.org/download/edba-1549/edba-1549.mp3",
    "length": 244.0,
    "series": "Fred van Eps",
    "title": "My Sumurun Girl - Medley",
    "date": "1912",
    "item": "https://archive.org/details/edba-1549"
   },
   {
    "src": "https://archive.org/download/ArizonaJack-TheGhostOfTheViolincinch50571913/ArizonaJack-TheGhostOfTheViolincinch50571913.mp3",
    "length": 167.55,
    "series": "",
    "title": "Arizona Jack - the Ghost of the Violin (cinch5057)",
    "date": "1913",
    "item": "https://archive.org/details/ArizonaJack-TheGhostOfTheViolincinch50571913"
   },
   {
    "src": "https://archive.org/download/LouisianaFive-SlowAndEasy/Louisiana_Five_Jazz_Orchestra-Slow_and_Easy-1919.mp3",
    "length": 200.0,
    "series": "Louisiana Five Jazz Orchestra",
    "title": "Louisiana Five - Slow and Easy",
    "date": "1919",
    "item": "https://archive.org/details/LouisianaFive-SlowAndEasy"
   },
   {
    "src": "https://archive.org/download/78_the-blacksmith-rag-with-the-anvil-chorus_green-brothers-novelty-band-reddip_gbia0396801a/THE%20BLACKSMITH%20RAG%20%28With%20Th%20-%20GREEN%20BROTHERS%27%20NOVELTY%20BAND.mp3",
    "length": 181.63,
    "series": "Green Brothers' Novelty Band",
    "title": "The Blacksmith Rag (With the \"Anvil Chorus\")",
    "date": "1920",
    "item": "https://archive.org/details/78_the-blacksmith-rag-with-the-anvil-chorus_green-brothers-novelty-band-reddip_gbia0396801a"
   },
   {
    "src": "https://archive.org/download/78_keep-going-rag_peppino-and-perry-sak_gbia0453834a/KEEP%20GOING%20RAG%20-%20PEPPINO%20and%20PERRY%20-%20Sak.mp3",
    "length": 203.09,
    "series": "Peppino and Perry",
    "title": "Keep Going Rag",
    "date": "1918",
    "item": "https://archive.org/details/78_keep-going-rag_peppino-and-perry-sak_gbia0453834a"
   },
   {
    "src": "https://archive.org/download/ColumbiaBandTheBurningOfRome1920/Columbia_Band-The_Burning_of_Rome-1920.mp3",
    "length": 172.0,
    "series": "Columbia Band",
    "title": "The Burning Of Rome",
    "date": "1920",
    "item": "https://archive.org/details/ColumbiaBandTheBurningOfRome1920"
   },
   {
    "src": "https://archive.org/download/78_swanee_sanfords-famous-dance-orchestra-geo-gershwin_gbia0432186b/SWANEE%20-%20SANFORD%27S%20FAMOUS%20DANCE%20ORCHESTRA.mp3",
    "length": 187.3,
    "series": "Sanford's Famous Dance Orchestra",
    "title": "Swanee",
    "date": "1920",
    "item": "https://archive.org/details/78_swanee_sanfords-famous-dance-orchestra-geo-gershwin_gbia0432186b"
   },
   {
    "src": "https://archive.org/download/78_african-rag_unknown-pianist_gbia0000937b/African%20Rag%20-%20Unknown%20Pianist-restored.mp3",
    "length": 181.78,
    "series": "Unknown Pianist",
    "title": "African Rag",
    "date": "1921",
    "item": "https://archive.org/details/78_african-rag_unknown-pianist_gbia0000937b"
   },
   {
    "src": "https://archive.org/download/78_cairo_nicholas-orlandos-orchestra-freed-weeks_gbia0351882a/CAIRO%20-%20NICHOLAS%20ORLANDO%27S%20ORCHESTRA%20-%20Freed.mp3",
    "length": 183.62,
    "series": "Nicholas Orlando's Orchestra",
    "title": "Cairo",
    "date": "1919",
    "item": "https://archive.org/details/78_cairo_nicholas-orlandos-orchestra-freed-weeks_gbia0351882a"
   },
   {
    "src": "https://archive.org/download/78_listen-to-this-one-step_jaudas-society-orchestra-mel-b-kaufman_gbia0299007b/Listen%20to%20This%20-%20One-Step%20-%20JAUDAS%27%20SOCIETY%20ORCHESTRA.mp3",
    "length": 234.72,
    "series": "Jaudas' Society Orchestra",
    "title": "Listen to This - One-Step",
    "date": "1916",
    "item": "https://archive.org/details/78_listen-to-this-one-step_jaudas-society-orchestra-mel-b-kaufman_gbia0299007b"
   },
   {
    "src": "https://archive.org/download/78_bow-wow_saxi-holtsworth-harmonie-hounds-wadsworth-albert_gbia0464659a/BOW-WOW%20-%20SAXI%20HOLTSWORTH%20HARMONIE%20HOUNDS.mp3",
    "length": 189.96,
    "series": "Saxi Holtsworth Harmonie Hounds",
    "title": "Bow-wow",
    "date": "1920",
    "item": "https://archive.org/details/78_bow-wow_saxi-holtsworth-harmonie-hounds-wadsworth-albert_gbia0464659a"
   },
   {
    "src": "https://archive.org/download/78_two-time-dan_turk-robinson-the-broadway-syncopaters_gbia0000427b/Two%20Time%20Dan%20-%20Turk%20-%20Robinson%20-%20The%20Broadway%20Syncopaters.mp3",
    "length": 190.0,
    "series": "Turk",
    "title": "Two Time Dan",
    "date": "1923",
    "item": "https://archive.org/details/78_two-time-dan_turk-robinson-the-broadway-syncopaters_gbia0000427b"
   },
   {
    "src": "https://archive.org/download/edba-1522/edba-1522.mp3",
    "length": 268.0,
    "series": "National Promenade Band",
    "title": "Money Musk Medley, Virginia Reel",
    "date": "1912",
    "item": "https://archive.org/details/edba-1522"
   },
   {
    "src": "https://archive.org/download/78_the-pussy-cat-rag_peerless-quartet-daly-and-allen_gbia0082848b/The%20Pussy%20Cat%20Rag%20-%20Peerless%20Quartet%20-%20Daly%20and%20Allen.mp3",
    "length": 262.0,
    "series": "Peerless Quartet",
    "title": "The Pussy Cat Rag",
    "date": "1915",
    "item": "https://archive.org/details/78_the-pussy-cat-rag_peerless-quartet-daly-and-allen_gbia0082848b"
   },
   {
    "src": "https://archive.org/download/78_laughing-rag_sam-moore-sam-moore_gbia0395844b/LAUGHING%20RAG%20-%20SAM%20MOORE%20-%20Sam%20Moore.mp3",
    "length": 175.51,
    "series": "Sam Moore",
    "title": "Laughing Rag",
    "date": "1921",
    "item": "https://archive.org/details/78_laughing-rag_sam-moore-sam-moore_gbia0395844b"
   },
   {
    "src": "https://archive.org/download/78_daisy-donohue_arthur-pryor-and-band_gbia0388477a/Daisy%20Donohue%20-%20Arthur%20Pryor%20and%20Band.mp3",
    "length": 196.66,
    "series": "Arthur Pryor and Band",
    "title": "Daisy Donohue",
    "date": "1903",
    "item": "https://archive.org/details/78_daisy-donohue_arthur-pryor-and-band_gbia0388477a"
   },
   {
    "src": "https://archive.org/download/78_russian-rag_lieut-jim-europes-369th-u-s-inf-hell-fighters-band-cobb_gbia0298608a/RUSSIAN%20RAG%20-%20Lieut.%20JIM%20EUROPE%27S%20369th%20U.%20S.%20Inf.%20%28%22Hell%20Fighters%22%29%20Band.mp3",
    "length": 202.61,
    "series": "Lieut. Jim Europe's 369th U. S. Inf.",
    "title": "Russian Rag",
    "date": "1919",
    "item": "https://archive.org/details/78_russian-rag_lieut-jim-europes-369th-u-s-inf-hell-fighters-band-cobb_gbia0298608a"
   },
   {
    "src": "https://archive.org/download/WilburSweatmansOriginalJazzBandHelloHello1919/Wilbur_Sweatmans_Original_Jazz_Band-Hello_Hello-1919.mp3",
    "length": 194.0,
    "series": "Wilbur Sweatman's Original Jazz Band",
    "title": "Hello, Hello!",
    "date": "1919",
    "item": "https://archive.org/details/WilburSweatmansOriginalJazzBandHelloHello1919"
   },
   {
    "src": "https://archive.org/download/78_in-and-out_joseph-samuels-and-larry-briers-joe-samuels_gbia0416903a/IN%20AND%20OUT%20-%20JOSEPH%20SAMUELS%20AND%20LARRY%20BRIERS.mp3",
    "length": 191.04,
    "series": "Joseph Samuels and Larry Briers",
    "title": "In and Out",
    "date": "1919",
    "item": "https://archive.org/details/78_in-and-out_joseph-samuels-and-larry-briers-joe-samuels_gbia0416903a"
   },
   {
    "src": "https://archive.org/download/Princes_Orch-On_The_Mississippi/Princes_Orchestra-On_The_Mississippi-Columbia-A1307.mp3",
    "length": 217.0,
    "series": "Princes Orchestra",
    "title": "On The Mississippi",
    "date": "1913",
    "item": "https://archive.org/details/Princes_Orch-On_The_Mississippi"
   },
   {
    "src": "https://archive.org/download/07-james-p-johnson-loveless-love/01%20James%20P%20Johnson%20-%20It%20takes%20love%20to%20cure.mp3",
    "length": 215.0,
    "series": "James P. Johnson, piano roll",
    "title": "It takes love to cure the heart's disease",
    "date": "1921",
    "item": "https://archive.org/details/07-james-p-johnson-loveless-love"
   },
   {
    "src": "https://archive.org/download/78_stumbling_yerkes-ss-flotilla-orchestra-zez-confrey_gbia0079705a/Stumbling%20-%20Yerkes%27%20S.S.%20Flotilla%20Orchestra.mp3",
    "length": 189.0,
    "series": "Yerkes' S.S. Flotilla Orchestra",
    "title": "Stumbling",
    "date": "1922",
    "item": "https://archive.org/details/78_stumbling_yerkes-ss-flotilla-orchestra-zez-confrey_gbia0079705a"
   },
   {
    "src": "https://archive.org/download/EddiePeabodyTheYellowDogBlues1925/Eddie_Peabody-The_Yellow_Dog_Blues-1925.mp3",
    "length": 202.0,
    "series": "Eddie Peabody",
    "title": "The Yellow Dog Blues",
    "date": "1925",
    "item": "https://archive.org/details/EddiePeabodyTheYellowDogBlues1925"
   },
   {
    "src": "https://archive.org/download/ind-689/ind-689.mp3",
    "length": 140.0,
    "series": "James I. Lent",
    "title": "The Ragtime Drummer",
    "date": "1908",
    "item": "https://archive.org/details/ind-689"
   },
   {
    "src": "https://archive.org/download/colbwnyp-1641/colbwnyp-1641.mp3",
    "length": 169.0,
    "series": "Gilmore's Band",
    "title": "At a Georgia Camp Meeting",
    "date": "1898",
    "item": "https://archive.org/details/colbwnyp-1641"
   },
   {
    "src": "https://archive.org/download/78_hawaiian-twilight_ferera-franchini-sherwood-vandersloot_gbia3020039b/Hawaiian%20Twilight%20-%20Ferera%20-%20Franchini%20-%20Sherwood.mp3",
    "length": 188.0,
    "series": "Ferera - Franchini",
    "title": "Hawaiian Twilight",
    "date": "1920",
    "item": "https://archive.org/details/78_hawaiian-twilight_ferera-franchini-sherwood-vandersloot_gbia3020039b"
   },
   {
    "src": "https://archive.org/download/bouncerag1902/bouncerag1902.mp3",
    "length": 127.0,
    "series": "Len Spencer, Gilbert Gerard",
    "title": "Bouncer at the Blazing Rag",
    "date": "1902",
    "item": "https://archive.org/details/bouncerag1902"
   },
   {
    "src": "https://archive.org/download/78_black-and-white-rag_george-botsford_gbia0087543b/Black%20and%20White%20Rag%20-%20George%20Botsford.mp3",
    "length": 227.0,
    "series": "George Botsford",
    "title": "Black and White Rag",
    "date": "1913",
    "item": "https://archive.org/details/78_black-and-white-rag_george-botsford_gbia0087543b"
   },
   {
    "src": "https://archive.org/download/Zon-O-PhoneConcertBand/Zon-O-PhoneConcertBand-TheSmilerAJoplinRag.mp3",
    "length": 147.0,
    "series": "Zon-O-Phone Concert Band",
    "title": "The Smiler (A Joplin Rag)",
    "date": "1908",
    "item": "https://archive.org/details/Zon-O-PhoneConcertBand"
   },
   {
    "src": "https://archive.org/download/78_xylophone-rag_leonard-derby-abbey_gbia3014421b/XYLOPHONE%20RAG%20-%20LEONARD%20DERBY%20-%20Abbey.mp3",
    "length": 178.0,
    "series": "Leonard Derby",
    "title": "Xylophone Rag",
    "date": "1924",
    "item": "https://archive.org/details/78_xylophone-rag_leonard-derby-abbey_gbia3014421b"
   },
   {
    "src": "https://archive.org/download/78_cutie_eubie-blake-and-his-orchestra-rudolf-friml_gbia0476572b/CUTIE%20-%20EUBIE%20BLAKE%20AND%20HIS%20ORCHESTRA%20-%20RUDOLF%20FRIML.mp3",
    "length": 195.36,
    "series": "Eubie Blake and His Orchestra",
    "title": "Cutie",
    "date": "1922",
    "item": "https://archive.org/details/78_cutie_eubie-blake-and-his-orchestra-rudolf-friml_gbia0476572b"
   },
   {
    "src": "https://archive.org/download/78_buffalo-baby-rag_standard-male-quartette_gbia0319099a/BUFFALO%20BABY%20RAG%20-%20Standard%20Male%20Quartette.mp3",
    "length": 193.22,
    "series": "Standard Male Quartette",
    "title": "Buffalo Baby Rag",
    "date": "1914",
    "item": "https://archive.org/details/78_buffalo-baby-rag_standard-male-quartette_gbia0319099a"
   },
   {
    "src": "https://archive.org/download/78_stumbling_golden-gate-dance-orch-zez-confrey_gbia0105391a/Stumbling%20-%20Golden%20Gate%20Dance%20Orch.%20-%20Zez%20Confrey.mp3",
    "length": 172.0,
    "series": "Golden Gate Dance Orchestra",
    "title": "Stumbling",
    "date": "1922",
    "item": "https://archive.org/details/78_stumbling_golden-gate-dance-orch-zez-confrey_gbia0105391a"
   },
   {
    "src": "https://archive.org/download/DesecrationRagAClassicNightmareFelixArndt/Desecration%20Rag%20%28A%20Classic%20Nightmare%29%20-%20Felix%20Arndt.mp3",
    "length": 179.0,
    "series": "Digitized By Grandpa's 78's",
    "title": "Felix Arndt - Desecration Rag ( A Classic Nightmare)",
    "date": "1914",
    "item": "https://archive.org/details/DesecrationRagAClassicNightmareFelixArndt"
   },
   {
    "src": "https://archive.org/download/78_ma_eubie-blake-con-conrad_gbia0471288b/MA%20-%20EUBIE%20BLAKE%20-%20CON%20CONRAD.mp3",
    "length": 189.38,
    "series": "Eubie Blake",
    "title": "Ma",
    "date": "1921",
    "item": "https://archive.org/details/78_ma_eubie-blake-con-conrad_gbia0471288b"
   },
   {
    "src": "https://archive.org/download/78_corn-on-the-cob_cliff-hess-banta--hess-with-selvins-orchestra_gbia0000417b/Corn%20on%20The%20Cob%20-%20Cliff%20Hess%20-%20Banta%20%26%20Hess%20with%20Selvin%27s%20Orchestra.mp3",
    "length": 180.0,
    "series": "Cliff Hess",
    "title": "Corn on The Cob",
    "date": "1923",
    "item": "https://archive.org/details/78_corn-on-the-cob_cliff-hess-banta--hess-with-selvins-orchestra_gbia0000417b"
   },
   {
    "src": "https://archive.org/download/78_wild-cherry-rag_frank-banta-snyder_gbia0168830b/Wild%20Cherry%20Rag%20-%20Frank%20Banta%20-%20Snyder.mp3",
    "length": 161.0,
    "series": "Frank Banta",
    "title": "Wild Cherry Rag",
    "date": "1921",
    "item": "https://archive.org/details/78_wild-cherry-rag_frank-banta-snyder_gbia0168830b"
   },
   {
    "src": "https://archive.org/download/Arthur_Pryors_Band-A_Cyclone_In_Darktown/Arthur_Pryors_Band-A_Cyclone_In_Darktown.mp3",
    "length": 173.0,
    "series": "Arthur Pryors Band",
    "title": "Arthur Pryor's Band - A Cyclone In Darktown",
    "date": "1911",
    "item": "https://archive.org/details/Arthur_Pryors_Band-A_Cyclone_In_Darktown"
   },
   {
    "src": "https://archive.org/download/Princes_Band-Too_Much_Mustard/Princes_Band-Too_Much_Mustard.mp3",
    "length": 207.0,
    "series": "Princes Band",
    "title": "Prince's Band - Too Much Mustard (Tres Moutarde)",
    "date": "1913",
    "item": "https://archive.org/details/Princes_Band-Too_Much_Mustard"
   },
   {
    "src": "https://archive.org/download/78_greenwich-witch_ernest-l-stevens-zez-confrey_gbia0527194a/GREENWICH%20WITCH%20-%20ERNEST%20L.%20STEVENS%20-%20Zez%20Confrey.mp3",
    "length": 208.0,
    "series": "Ernest L. Stevens",
    "title": "Greenwich Witch",
    "date": "1923",
    "item": "https://archive.org/details/78_greenwich-witch_ernest-l-stevens-zez-confrey_gbia0527194a"
   },
   {
    "src": "https://archive.org/download/ArthurCollinsAlbertCampbell/ArthurCollinsAlbertCampbell-ThatMysteriousRag.mp3",
    "length": 168.0,
    "series": "Arthur Collins & Albert Campbell",
    "title": "That Mysterious Rag",
    "date": "1912",
    "item": "https://archive.org/details/ArthurCollinsAlbertCampbell"
   },
   {
    "src": "https://archive.org/download/78_peggy-one-step_lopez-hamiltons-kings-of-harmony-orchestra-neil-moret_gbia0083365a/Peggy%20One-Step%20-%20Lopez%20%26%20Hamilton%27s%20Kings%20of%20Harmony%20Orchestra.mp3",
    "length": 254.0,
    "series": "Lopez & Hamilton's Kings of Harmony Orchestra",
    "title": "Peggy One-Step",
    "date": "1920",
    "item": "https://archive.org/details/78_peggy-one-step_lopez-hamiltons-kings-of-harmony-orchestra-neil-moret_gbia0083365a"
   },
   {
    "src": "https://archive.org/download/78_nightingale_james-brockman-frisco-syncopators_gbia0000490a/Nightingale%20-%20James%20Brockman%20-%20Frisco%20Syncopators.mp3",
    "length": 189.0,
    "series": "James Brockman",
    "title": "Nightingale",
    "date": "1924",
    "item": "https://archive.org/details/78_nightingale_james-brockman-frisco-syncopators_gbia0000490a"
   },
   {
    "src": "https://archive.org/download/78_tricks_country-club-orchestra-zez-confrey_gbia0192482b/TRICKS%20-%20COUNTRY%20CLUB%20ORCHESTRA%20-%20Zez%20Confrey.mp3",
    "length": 196.0,
    "series": "Country Club Orchestra",
    "title": "Tricks",
    "date": "1922",
    "item": "https://archive.org/details/78_tricks_country-club-orchestra-zez-confrey_gbia0192482b"
   },
   {
    "src": "https://archive.org/download/ColumbiaOrchestra-SmokyMokes/Columbia_Orchestra-Smoky_Mokes-1902.mp3",
    "length": 190.0,
    "series": "Columbia Orchestra",
    "title": "Smoky Mokes",
    "date": "1902",
    "item": "https://archive.org/details/ColumbiaOrchestra-SmokyMokes"
   },
   {
    "src": "https://archive.org/download/78_stumbling_majestic-dance-orchestra-arthur-hall-zez-confrey_gbia0395383b/Stumbling%20-%20Majestic%20Dance%20Orchestra%20-%20Arthur%20Hall.mp3",
    "length": 203.62,
    "series": "Majestic Dance Orchestra",
    "title": "Stumbling",
    "date": "1922",
    "item": "https://archive.org/details/78_stumbling_majestic-dance-orchestra-arthur-hall-zez-confrey_gbia0395383b"
   },
   {
    "src": "https://archive.org/download/78_do-what-you-did-last-night_ethel-waters-james-p-johnson-razaf-johnson_gbia0304348b/DO%20WHAT%20YOU%20DID%20LAST%20NIGHT%21%20-%20ETHEL%20WATERS.mp3",
    "length": 167.42,
    "series": "Ethel Waters",
    "title": "Do What You Did Last Night!",
    "date": "1928",
    "item": "https://archive.org/details/78_do-what-you-did-last-night_ethel-waters-james-p-johnson-razaf-johnson_gbia0304348b"
   },
   {
    "src": "https://archive.org/download/handys-orchestra-of-memphis-sweet-child-one-step-dance-music-columbia-a-2417-77376-september-22-1917/Handy%27s%20Orchestra%20Of%20Memphis%20-%20Sweet%20Child%2C%20One-Step%2C%20Dance%20Music%20-%20Columbia%20A2417%2C%2077376%20-%20September%2022%2C%201917.mp3",
    "length": 184.03,
    "series": "Handy's Orchestra Of Memphis",
    "title": "Sweet Child - One-Step (Dance Music)",
    "date": "1917",
    "item": "https://archive.org/details/handys-orchestra-of-memphis-sweet-child-one-step-dance-music-columbia-a-2417-77376-september-22-1917"
   },
   {
    "src": "https://archive.org/download/78_dixie-is-dixie-once-more_lieut-jim-europes-369th-us-inf-hell-fighters-band-l_gbia0313855a/DIXIE%20IS%20DIXIE%20ONCE%20MORE%20-%20Lieut.%20JIM%20EUROPE%27S%20369th%20U.S.%20Inf.%20%28Hell%20Fighters%29%20Band.mp3",
    "length": 197.95,
    "series": "Lieut. Jim Europe's 369th U.S. Inf.",
    "title": "Dixie is Dixie Once More",
    "date": "1919",
    "item": "https://archive.org/details/78_dixie-is-dixie-once-more_lieut-jim-europes-369th-us-inf-hell-fighters-band-l_gbia0313855a"
   },
   {
    "src": "https://archive.org/download/Robert_Brooks-Salome_Intermezzo/Robert_Brooks-Salome_Intermezzo-1901.mp3",
    "length": 154.0,
    "series": "Robert Brooks",
    "title": "Salome Intermezzo",
    "date": "1901",
    "item": "https://archive.org/details/Robert_Brooks-Salome_Intermezzo"
   },
   {
    "src": "https://archive.org/download/edison-50988_01_8455/cusb_ed_50988_01_8455_0a.mp3",
    "length": 235.0,
    "series": "Vincent Lopez Orchestra",
    "title": "I'm Just Wild About Harry",
    "date": "1922",
    "item": "https://archive.org/details/edison-50988_01_8455"
   },
   {
    "src": "https://archive.org/download/78_heart-of-america-march_new-york-military-band-arthur-pryor_gbia0083429b/Heart%20of%20America%20March%20-%20New%20York%20Military%20Band.mp3",
    "length": 235.0,
    "series": "New York Military Band",
    "title": "Heart of America March",
    "date": "1917",
    "item": "https://archive.org/details/78_heart-of-america-march_new-york-military-band-arthur-pryor_gbia0083429b"
   },
   {
    "src": "https://archive.org/download/78_stumbling_vincent-lopez-and-his-hotel-pennsylvania-orchestra-zez-confrey_gbia0077434b/Stumbling%20-%20Vincent%20Lopez%20and%20His%20Hotel%20Pennsylvania%20Orchestra.mp3",
    "length": 190.0,
    "series": "Vincent Lopez and His Hotel Pennsylvania Orchestra",
    "title": "Stumbling",
    "date": "1922",
    "item": "https://archive.org/details/78_stumbling_vincent-lopez-and-his-hotel-pennsylvania-orchestra-zez-confrey_gbia0077434b"
   },
   {
    "src": "https://archive.org/download/PrincesOrchestra-MidnightFireAlarm/Princes_Orchestra-Midnight_Fire_Alarm-1920.mp3",
    "length": 179.0,
    "series": "Prince's Orchestra",
    "title": "Midnight Fire Alarm",
    "date": "1920",
    "item": "https://archive.org/details/PrincesOrchestra-MidnightFireAlarm"
   },
   {
    "src": "https://archive.org/download/Sousas_Band-Chinese_Blues/Sousas_Band-Chinese_Blues.mp3",
    "length": 244.0,
    "series": "Sousas Band",
    "title": "Sousa's Band - Chinese Blues",
    "date": "1916",
    "item": "https://archive.org/details/Sousas_Band-Chinese_Blues"
   },
   {
    "src": "https://archive.org/download/78_b-hap-e_louisiana-five-lada-nunez-burger_gbia0464666a/B-HAP-E%20-%20LOUISIANA%20FIVE%20-%20LADA%20-%20NUNEZ%20-%20BURGER.mp3",
    "length": 208.61,
    "series": "Louisiana Five",
    "title": "B-hap-e",
    "date": "1920",
    "item": "https://archive.org/details/78_b-hap-e_louisiana-five-lada-nunez-burger_gbia0464666a"
   },
   {
    "src": "https://archive.org/download/78_full-o-pep_joseph-samuels-orchestra-morse-earl-fuller_gbia0302849a/FULL%20O%27%20PEP%20-%20Joseph%20Samuels%27%20Orchestra%20-%20Morse.mp3",
    "length": 188.33,
    "series": "Joseph Samuels' Orchestra",
    "title": "Full O' Pep",
    "date": "1919",
    "item": "https://archive.org/details/78_full-o-pep_joseph-samuels-orchestra-morse-earl-fuller_gbia0302849a"
   }
  ]
 },
 {
  "id": "jazzage",
  "name": "Jazz Age",
  "group": "Music",
  "music": true,
  "blurb": "Hot jazz, blues and dance bands, 1917–1925.",
  "card": "art/cards/jazzage.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.9,
   "decrackle": 0.9,
   "tone": 6000
  },
  "tracks": [
   {
    "src": "https://archive.org/download/original-dixieland-jass-band-livery-stable-blues-victor-18255-b/Original%20Dixieland%20Jass%20Band%20-%20Livery%20Stable%20Blues%20-%20Victor%2018255-B.mp3",
    "length": 184.35,
    "series": "Original Dixieland Jass Band",
    "title": "Livery Stable Blues",
    "date": "1917",
    "item": "https://archive.org/details/original-dixieland-jass-band-livery-stable-blues-victor-18255-b"
   },
   {
    "src": "https://archive.org/download/OriginalMemphisFive-HowComeYouDoMeLikeYouDo/Original_Memphis_Five-How_Come_You_Do_Me_Like_You_Do-1924.mp3",
    "length": 181.0,
    "series": "Original Memphis Five",
    "title": "How Come You Do Me Like You Do",
    "date": "1924",
    "item": "https://archive.org/details/OriginalMemphisFive-HowComeYouDoMeLikeYouDo"
   },
   {
    "src": "https://archive.org/download/edison-51246_01_9173/cusb_ed_51246_01_9173_0a.mp3",
    "length": 199.0,
    "series": "The Original Memphis Five",
    "title": "The Jelly Roll Blues",
    "date": "1923",
    "item": "https://archive.org/details/edison-51246_01_9173"
   },
   {
    "src": "https://archive.org/download/original-dixieland-jazz-band-tiger-rag-victor-18472-b/Original%20Dixieland%20Jazz%20Band%20-%20Tiger%20Rag%20-%20Victor%2018472-B.mp3",
    "length": 184.48,
    "series": "Original Dixieland Jazz Band",
    "title": "Tiger Rag",
    "date": "1918",
    "item": "https://archive.org/details/original-dixieland-jazz-band-tiger-rag-victor-18472-b"
   },
   {
    "src": "https://archive.org/download/OriginalMemphisFive-MeanestBlues/Original_Memphis_Five-Meanest_Blues-1924.mp3",
    "length": 198.0,
    "series": "Original Memphis Five",
    "title": "Meanest Blues",
    "date": "1924",
    "item": "https://archive.org/details/OriginalMemphisFive-MeanestBlues"
   },
   {
    "src": "https://archive.org/download/OriginalMemphisFiveHootinDeHoot1923/Original_Memphis_Five-Hootin_de_Hoot-1923.mp3",
    "length": 171.0,
    "series": "Original Memphis Five",
    "title": "Hootin' de Hoot",
    "date": "1923",
    "item": "https://archive.org/details/OriginalMemphisFiveHootinDeHoot1923"
   },
   {
    "src": "https://archive.org/download/victor-18690-a-whispering/Victor%2018690A%20-%20Whispering%20-%203.0%20CT%20630N-16%20EQ.mp3",
    "length": 196.55,
    "series": "Paul Whiteman and His Ambassador Orchestra",
    "title": "Whispering",
    "date": "1920",
    "item": "https://archive.org/details/victor-18690-a-whispering"
   },
   {
    "src": "https://archive.org/download/edison-51094_01_8662/cusb_ed_51094_01_8662_0c.mp3",
    "length": 249.0,
    "series": "Atlantic Dance Orchestra",
    "title": "Bees' Knees",
    "date": "1922",
    "item": "https://archive.org/details/edison-51094_01_8662"
   },
   {
    "src": "https://archive.org/download/edison-51486_01_9939/cusb_ed_51486_01_9939_0b.mp3",
    "length": 246.0,
    "series": "George Wilton Ballard",
    "title": "Show Me The Way",
    "date": "1925",
    "item": "https://archive.org/details/edison-51486_01_9939"
   },
   {
    "src": "https://archive.org/download/MamieSmithHerJazzHounds/MamieSmithHerJazzHounds-CrazyBlues.mp3",
    "length": 210,
    "series": "Mamie Smith & Her Jazz Hounds",
    "title": "Crazy Blues",
    "date": "1920",
    "item": "https://archive.org/details/MamieSmithHerJazzHounds"
   },
   {
    "src": "https://archive.org/download/SouthernRose/SouthernRoseRes.mp3",
    "length": 169.71,
    "series": "Paul Whiteman and His Orchestra",
    "title": "Southern Rose",
    "date": "1925",
    "item": "https://archive.org/details/SouthernRose"
   },
   {
    "src": "https://archive.org/download/victor-18983-a-pack-up-your-sins/Victor%2018983A%20-%20Pack%20Up%20Your%20Sins%20-%203.0%20CT%20630N-16%20EQ.mp3",
    "length": 177.21,
    "series": "Paul Whiteman and His Orchestra",
    "title": "Pack Up Your Sins",
    "date": "1922",
    "item": "https://archive.org/details/victor-18983-a-pack-up-your-sins"
   },
   {
    "src": "https://archive.org/download/78_orys-creole-trombone_kid-orys-sunshine-orchestra-papa-mutt-carey-kid-ory-dink-joh_gbia0215087a/ORY%27S%20CREOLE%20TROMBONE%20-%20KID%20ORY%27S%20SUNSHINE%20ORCHESTRA.mp3",
    "length": 202.99,
    "series": "Kid Ory's Sunshine Orchestra",
    "title": "Ory's Creole Trombone",
    "date": "1922",
    "item": "https://archive.org/details/78_orys-creole-trombone_kid-orys-sunshine-orchestra-papa-mutt-carey-kid-ory-dink-joh_gbia0215087a"
   },
   {
    "src": "https://archive.org/download/victor-18826-a-everybody-step/Victor%2018826A%20-%20Everybody%20Step%20-%203.0%20CT%20630N-16%20EQ.mp3",
    "length": 202.61,
    "series": "Paul Whiteman and His Orchestra",
    "title": "Everybody Step",
    "date": "1921",
    "item": "https://archive.org/details/victor-18826-a-everybody-step"
   },
   {
    "src": "https://archive.org/download/78_wonderful-one_ernest-carles-society-players-paul-whiteman_gbia0038033b/Wonderful%20One%20-%20Ernest%20Carle%27s%20Society%20Players.mp3",
    "length": 188.0,
    "series": "Ernest Carle's Society Players",
    "title": "Wonderful One",
    "date": "1923",
    "item": "https://archive.org/details/78_wonderful-one_ernest-carles-society-players-paul-whiteman_gbia0038033b"
   },
   {
    "src": "https://archive.org/download/78_bees-knees_the-original-memphis-five-lopez-and-lewis_gbia0278930a/BEE%27S%20KNEES%20-%20The%20Original%20Memphis%20Five%20-%20Lopez%20and%20Lewis.mp3",
    "length": 197.71,
    "series": "The Original Memphis Five",
    "title": "Bee's Knees",
    "date": "1922",
    "item": "https://archive.org/details/78_bees-knees_the-original-memphis-five-lopez-and-lewis_gbia0278930a"
   },
   {
    "src": "https://archive.org/download/brunswick-5027-a-avalon/Brunswick%205027A%20-%20Avalon%20-%203.0%20CT%20800N-16%20EQ.mp3",
    "length": 192.97,
    "series": "Isham Jones Rainbo Orchestra",
    "title": "Avalon",
    "date": "1920",
    "item": "https://archive.org/details/brunswick-5027-a-avalon"
   },
   {
    "src": "https://archive.org/download/brunswick-5027-b-wishing/Brunswick%205027B%20-%20Wishing%20-%203.0%20CT%20800N-16%20EQ.mp3",
    "length": 171.52,
    "series": "Isham Jones Rainbo Orchestra",
    "title": "Wishing",
    "date": "1920",
    "item": "https://archive.org/details/brunswick-5027-b-wishing"
   },
   {
    "src": "https://archive.org/download/king-olivers-jazz-band-new-orleans-stomp-shimmy-one-step-columbia-13003-d-81304-/King%20Oliver%27s%20Jazz%20Band%20-%20New%20Orleans%20Stomp%2C%20Shimmy%20One%20Step%20-%20Columbia%2013003D%2C%2081304%2C%20Matrix%2081304%202-1%20-%20October%2016%2C%201923.mp3",
    "length": 178.86,
    "series": "King Oliver's Jazz Band",
    "title": "New Orleans Stomp (Shimmy One Step)",
    "date": "1923",
    "item": "https://archive.org/details/king-olivers-jazz-band-new-orleans-stomp-shimmy-one-step-columbia-13003-d-81304-"
   },
   {
    "src": "https://archive.org/download/edison-51317_01_9402/cusb_ed_51317_01_9402_0c.mp3",
    "length": 216.0,
    "series": "Harry Raderman's Dance Orchestra",
    "title": "The One I Love (Belongs To Somebody Else)",
    "date": "1924",
    "item": "https://archive.org/details/edison-51317_01_9402"
   },
   {
    "src": "https://archive.org/download/78_broken-hearted-melody_arthur-langes-dance-orchestra-isham-jones_gbia0107243a/Broken%20Hearted%20Melody%20-%20Arthur%20Lange%27s%20Dance%20Orchestra.mp3",
    "length": 156.0,
    "series": "Arthur Lange's Dance Orchestra",
    "title": "Broken Hearted Melody",
    "date": "1923",
    "item": "https://archive.org/details/78_broken-hearted-melody_arthur-langes-dance-orchestra-isham-jones_gbia0107243a"
   },
   {
    "src": "https://archive.org/download/BluesMyNaughtySweetieGaveMeTedLewisJazzBand/Blues%20My%20Naughty%20Sweetie%20Gave%20Me%20-%20Ted%20Lewis%20Jazz%20Band.mp3",
    "length": 187,
    "series": "Ted Lewis Jazz Band",
    "title": "Blues My Naughty Sweetie Gave Me",
    "date": "1919",
    "item": "https://archive.org/details/BluesMyNaughtySweetieGaveMeTedLewisJazzBand"
   },
   {
    "src": "https://archive.org/download/78_down-south-blues_rosa-henderson-waters-henderson-fletcher-henderson_gbia0094501a/Down%20South%20Blues%20-%20Rosa%20Henderson%20-%20Waters.mp3",
    "length": 193.0,
    "series": "Rosa Henderson",
    "title": "Down South Blues",
    "date": "1923",
    "item": "https://archive.org/details/78_down-south-blues_rosa-henderson-waters-henderson-fletcher-henderson_gbia0094501a"
   },
   {
    "src": "https://archive.org/download/78_chirping-the-blues_alberta-hunter-fletcher-henderson_gbia0418706a/Chirping%20The%20Blues%20-%20Alberta%20Hunter%20-%20Fletcher%20Henderson.mp3",
    "length": 187.32,
    "series": "Alberta Hunter",
    "title": "Chirping The Blues",
    "date": "1923",
    "item": "https://archive.org/details/78_chirping-the-blues_alberta-hunter-fletcher-henderson_gbia0418706a"
   },
   {
    "src": "https://archive.org/download/victor-18983-b-crinoline-days/Victor%2018983B%20-%20Crinoline%20Days%20-%203.0%20CT%20630N-16%20EQ.mp3",
    "length": 161.31,
    "series": "Paul Whiteman and His Orchestra",
    "title": "Crinoline Days",
    "date": "1922",
    "item": "https://archive.org/details/victor-18983-b-crinoline-days"
   },
   {
    "src": "https://archive.org/download/78_the-meanest-kind-oblues_fletcher-henderson-and-his-orchestra-jackson_gbia0039170b/The%20Meanest%20Kind%20O%27Blues%20-%20Fletcher%20Henderson%20and%20His%20Orchestra.mp3",
    "length": 199.0,
    "series": "Fletcher Henderson and His Orchestra",
    "title": "The Meanest Kind O'Blues",
    "date": "1924",
    "item": "https://archive.org/details/78_the-meanest-kind-oblues_fletcher-henderson-and-his-orchestra-jackson_gbia0039170b"
   },
   {
    "src": "https://archive.org/download/78_red-hot-mamma-blues_ben-selvin-and-his-orchestra-wells-cooper-rose_gbia0079910b/Red%20Hot%20Mamma%20%28Blues%29%20-%20Ben%20Selvin%20and%20his%20Orchestra.mp3",
    "length": 199.0,
    "series": "Ben Selvin and his Orchestra",
    "title": "Red Hot Mamma (Blues)",
    "date": "1924",
    "item": "https://archive.org/details/78_red-hot-mamma-blues_ben-selvin-and-his-orchestra-wells-cooper-rose_gbia0079910b"
   },
   {
    "src": "https://archive.org/download/78_charleston-crazy_fletcher-henderson-and-his-orchestra-grainger-ricketts_gbia0039230a/Charleston%20Crazy%20-%20Fletcher%20Henderson%20and%20His%20Orchestra.mp3",
    "length": 179,
    "series": "Fletcher Henderson and His Orchestra",
    "title": "Charleston Crazy",
    "date": "1923",
    "item": "https://archive.org/details/78_charleston-crazy_fletcher-henderson-and-his-orchestra-grainger-ricketts_gbia0039230a"
   },
   {
    "src": "https://archive.org/download/78_after-the-storm_ben-selvin-and-his-moulin-rouge-orchestra-jack-nelson_gbia0046619a/After%20the%20Storm%20-%20Ben%20Selvin%20and%20His%20Moulin%20Rouge%20Orchestra.mp3",
    "length": 184.0,
    "series": "Ben Selvin and His Moulin Rouge Orchestra",
    "title": "After the Storm",
    "date": "1924",
    "item": "https://archive.org/details/78_after-the-storm_ben-selvin-and-his-moulin-rouge-orchestra-jack-nelson_gbia0046619a"
   },
   {
    "src": "https://archive.org/download/78_old-timers-waltz_selvins-novelty-orchestra-ben-selvin_gbia0025137b/Old%20Timer%27s%20Waltz%20-%20Selvin%27s%20Novelty%20Orchestra.mp3",
    "length": 203.0,
    "series": "Selvin's Novelty Orchestra",
    "title": "Old Timer's Waltz",
    "date": "1920",
    "item": "https://archive.org/details/78_old-timers-waltz_selvins-novelty-orchestra-ben-selvin_gbia0025137b"
   },
   {
    "src": "https://archive.org/download/IshamJonesOrchestraHenpeckedBlues1923/Isham_Jones_Orchestra-Henpecked_Blues-1923.mp3",
    "length": 195,
    "series": "Isham Jones Orchestra",
    "title": "Henpecked Blues",
    "date": "1923",
    "item": "https://archive.org/details/IshamJonesOrchestraHenpeckedBlues1923"
   },
   {
    "src": "https://archive.org/download/78_take-oh-take-those-lips-away_ben-selvin-and-his-moulin-rouge-orchestra-tirney-mcca_gbia0097403a/Take%2C%20Oh%20Take%20Those%20Lips%20Away%20-%20Ben%20Selvin%20and%20His%20Moulin%20Rouge%20Orchestra.mp3",
    "length": 194.0,
    "series": "Ben Selvin and His Moulin Rouge Orchestra",
    "title": "Take, Oh Take Those Lips Away",
    "date": "1923",
    "item": "https://archive.org/details/78_take-oh-take-those-lips-away_ben-selvin-and-his-moulin-rouge-orchestra-tirney-mcca_gbia0097403a"
   },
   {
    "src": "https://archive.org/download/edison-51542_01_10292/cusb_ed_51542_01_10292_0b.mp3",
    "length": 248.0,
    "series": "Golden Gate Orchestrars]",
    "title": "Charleston",
    "date": "1925",
    "item": "https://archive.org/details/edison-51542_01_10292"
   },
   {
    "src": "https://archive.org/download/78_down-home-blues_mamie-smith-and-her-jazz-band-tom-delaney_gbia0295930a/DOWN%20HOME%20BLUES%20-%20MAMIE%20SMITH%20AND%20HER%20JAZZ%20BAND.mp3",
    "length": 201.22,
    "series": "Mamie Smith And Her Jazz Band",
    "title": "Down Home Blues",
    "date": "1921",
    "item": "https://archive.org/details/78_down-home-blues_mamie-smith-and-her-jazz-band-tom-delaney_gbia0295930a"
   },
   {
    "src": "https://archive.org/download/78_i-wish-i-could-shimmie-like-my-sister-kate_the-california-ramblers-a.-j.-piron_gbia0002729a/I%20Wish%20I%20Could%20Shimmie%20Like%20My%20Sister%20Kate%20-%20The%20California%20Ramblers.mp3",
    "length": 177.0,
    "series": "The California Ramblers",
    "title": "I Wish I Could Shimmie Like My Sister Kate",
    "date": "1922",
    "item": "https://archive.org/details/78_i-wish-i-could-shimmie-like-my-sister-kate_the-california-ramblers-a.-j.-piron_gbia0002729a"
   },
   {
    "src": "https://archive.org/download/78_eddie-leonard-blues_the-california-ramblers-stanton_gbia0002730b/Eddie%20Leonard%20Blues%20-%20The%20California%20Ramblers.mp3",
    "length": 185.0,
    "series": "The California Ramblers",
    "title": "The Californian Ramblers",
    "date": "1922",
    "item": "https://archive.org/details/78_eddie-leonard-blues_the-california-ramblers-stanton_gbia0002730b"
   },
   {
    "src": "https://archive.org/download/rhapblue11924/rhapblue11924.mp3",
    "length": 275,
    "series": "Paul Whiteman and George Gershwin",
    "title": "Rhapsody In Blue Part 1",
    "date": "1924",
    "item": "https://archive.org/details/rhapblue11924"
   },
   {
    "src": "https://archive.org/download/78_california_california-ramblers-cliff-friends-con-conrad_gbia0084768a/California%20-%20California%20Ramblers%20-%20Cliff%20Friends.mp3",
    "length": 205.0,
    "series": "California Ramblers",
    "title": "California",
    "date": "1922",
    "item": "https://archive.org/details/78_california_california-ramblers-cliff-friends-con-conrad_gbia0084768a"
   },
   {
    "src": "https://archive.org/download/78_the-new-york-glide_ethel-waters-alburys-blue-and-jazz-seven-tom-delaney_gbia0275389b/THE%20NEW%20YORK%20GLIDE%20-%20ETHEL%20WATERS%20-%20ALBURY%27S%20BLUE%20AND%20JAZZ%20SEVEN.mp3",
    "length": 199.94,
    "series": "Ethel Waters",
    "title": "The New York Glide",
    "date": "1921",
    "item": "https://archive.org/details/78_the-new-york-glide_ethel-waters-alburys-blue-and-jazz-seven-tom-delaney_gbia0275389b"
   },
   {
    "src": "https://archive.org/download/rhapblue21924/rhapblue21924.mp3",
    "length": 289,
    "series": "Paul Whiteman and George Gershwin",
    "title": "Rhapsody In Blue Part 2",
    "date": "1924",
    "item": "https://archive.org/details/rhapblue21924"
   },
   {
    "src": "https://archive.org/download/78_at-the-new-jump-steady-ball_ethel-waters-alburys-blue-and-jazz-seven-delaney-easto_gbia0275389a/AT%20THE%20NEW%20JUMP%20STEADY%20BALL%20-%20ETHEL%20WATERS.mp3",
    "length": 218.5,
    "series": "Ethel Waters",
    "title": "At the New Jump Steady Ball",
    "date": "1921",
    "item": "https://archive.org/details/78_at-the-new-jump-steady-ball_ethel-waters-alburys-blue-and-jazz-seven-delaney-easto_gbia0275389a"
   },
   {
    "src": "https://archive.org/download/78_daddy-blues_alberta-hunter-clarence-jones_gbia0377248b/Daddy%20Blues%20-%20Alberta%20Hunter%20-%20Clarence%20Jones.mp3",
    "length": 201.79,
    "series": "Alberta Hunter",
    "title": "Daddy Blues",
    "date": "1922",
    "item": "https://archive.org/details/78_daddy-blues_alberta-hunter-clarence-jones_gbia0377248b"
   },
   {
    "src": "https://archive.org/download/78_africa_original-memphis-five-hanley_gbia0101463a/Africa%20-%20Original%20Memphis%20Five%20-%20Hanley.mp3",
    "length": 191,
    "series": "Original Memphis Five",
    "title": "Africa",
    "date": "1924",
    "item": "https://archive.org/details/78_africa_original-memphis-five-hanley_gbia0101463a"
   },
   {
    "src": "https://archive.org/download/78_someone-else-will-take-your-place_alberta-hunter-fletcher-henderson-david-warfield_gbia0418706b/Someone%20Else%20Will%20Take%20Your%20Place%20-%20Alberta%20Hunter.mp3",
    "length": 203.42,
    "series": "Alberta Hunter",
    "title": "Someone Else Will Take Your Place",
    "date": "1923",
    "item": "https://archive.org/details/78_someone-else-will-take-your-place_alberta-hunter-fletcher-henderson-david-warfield_gbia0418706b"
   },
   {
    "src": "https://archive.org/download/78_dont-pan-me_alberta-hunter-gus-butler_gbia0377248a/Don%27t%20Pan%20Me%20-%20Alberta%20Hunter%20-%20Gus.%20Butler.mp3",
    "length": 191.52,
    "series": "Alberta Hunter",
    "title": "Don't Pan Me",
    "date": "1922",
    "item": "https://archive.org/details/78_dont-pan-me_alberta-hunter-gus-butler_gbia0377248a"
   },
   {
    "src": "https://archive.org/download/bessie-smith-weeping-willow-blues/Bessie%20Smith%20-%20Weeping%20willow%20blues%20-%20flat.mp3",
    "length": 193,
    "series": "Bessie Smith",
    "title": "Weeping Willow Blues",
    "date": "1924",
    "item": "https://archive.org/details/bessie-smith-weeping-willow-blues"
   },
   {
    "src": "https://archive.org/download/78_jealous_marion-harris-malie-finch-little_gbia3004827a/JEALOUS%20-%20MARION%20HARRIS%20-%20Malie%20-%20Finch%20-%20Little.mp3",
    "length": 197.0,
    "series": "Marion Harris",
    "title": "Jealous",
    "date": "1924",
    "item": "https://archive.org/details/78_jealous_marion-harris-malie-finch-little_gbia3004827a"
   },
   {
    "src": "https://archive.org/download/coon-sanders-original-night-hawk-orchestra-show-me-the-way-victor-19525-b/Coon-Sanders%20Original%20Night%20Hawk%20Orchestra%20-%20Show%20Me%20The%20Way%20-%20Victor%2019525-B.mp3",
    "length": 182.26,
    "series": "Coon-Sanders Original Night Hawk Orchestra",
    "title": "Show Me The Way",
    "date": "1924",
    "item": "https://archive.org/details/coon-sanders-original-night-hawk-orchestra-show-me-the-way-victor-19525-b"
   },
   {
    "src": "https://archive.org/download/i-gave-you-up-just-before-you-threw-me-down-by-marion-harris-restored/I%20gave%20you%20up%20just%20before%20you%20threw%20me%20down%20by%20Marion%20Harris%20Restored.mp3",
    "length": 227.23,
    "series": "Marion Harris",
    "title": "I Gave You Up Just Before You Threw Me Down",
    "date": "1923",
    "item": "https://archive.org/details/i-gave-you-up-just-before-you-threw-me-down-by-marion-harris-restored"
   },
   {
    "src": "https://archive.org/download/78_lucky-rock-blues_ma-rainey-lovie-austin-and-her-blues-serenaders-lillie-taylor-ka_gbia0377247b/Lucky%20Rock%20Blues%20-%20%22Ma%22%20Rainey%20-%20Lovie%20Austin%20and%20Her%20Blues%20Serenaders.mp3",
    "length": 193.08,
    "series": "Ma Rainey",
    "title": "Lucky Rock Blues",
    "date": "1924",
    "item": "https://archive.org/details/78_lucky-rock-blues_ma-rainey-lovie-austin-and-her-blues-serenaders-lillie-taylor-ka_gbia0377247b"
   },
   {
    "src": "https://archive.org/download/original-dixieland-jazz-band-fidgety-feet-victor-18564-a/Original%20Dixieland%20Jazz%20Band%20-%20Fidgety%20Feet%20-%20Victor%2018564-A.mp3",
    "length": 158.01,
    "series": "Original Dixieland Jazz Band",
    "title": "Fidgety Feet",
    "date": "1918",
    "item": "https://archive.org/details/original-dixieland-jazz-band-fidgety-feet-victor-18564-a"
   },
   {
    "src": "https://archive.org/download/78_those-dogs-of-mine-famous-cornfield-blues_ma-rainey-lovie-austin-and-her-blues_gbia0377247a/Those%20Dogs%20Of%20Mine%20%28Famous%20Cornfield%20Blues%29%20-%20%22Ma%22%20Rainey.mp3",
    "length": 196.73,
    "series": "Ma Rainey",
    "title": "Those Dogs Of Mine (Famous Cornfield Blues)",
    "date": "1924",
    "item": "https://archive.org/details/78_those-dogs-of-mine-famous-cornfield-blues_ma-rainey-lovie-austin-and-her-blues_gbia0377247a"
   },
   {
    "src": "https://archive.org/download/78_of-all-the-wrongs-you-done-to-me_clarence-williams-blue-five-eva-taylor-len-payton_gbia0100514b/Of%20all%20the%20Wrongs%20You%20Done%20%20-%20Clarence%20Williams%27%20Blue%20Five.mp3",
    "length": 183.0,
    "series": "Clarence Williams' Blue Five",
    "title": "Of all the Wrongs You Done to Me",
    "date": "1924",
    "item": "https://archive.org/details/78_of-all-the-wrongs-you-done-to-me_clarence-williams-blue-five-eva-taylor-len-payton_gbia0100514b"
   },
   {
    "src": "https://archive.org/download/victor-18690-b-the-japanese-sandman/Victor%2018690B%20-%20The%20Japanese%20Sandman%20-%203.0%20CT%20630N-16%20EQ.mp3",
    "length": 170.81,
    "series": "Paul Whiteman and His Ambassador Orchestra",
    "title": "The Japanese Sandman",
    "date": "1920",
    "item": "https://archive.org/details/victor-18690-b-the-japanese-sandman"
   },
   {
    "src": "https://archive.org/download/78_leave-my-sweet-daddy-alone_sara-martin-clarence-williams_gbia0026894a/Leave%20My%20Sweet%20Daddy%20Alone%20-%20Sara%20Martin-restored.mp3",
    "length": 173.09,
    "series": "Sara Martin",
    "title": "Leave My Sweet Daddy Alone",
    "date": "1923",
    "item": "https://archive.org/details/78_leave-my-sweet-daddy-alone_sara-martin-clarence-williams_gbia0026894a"
   },
   {
    "src": "https://archive.org/download/78_i-wish-i-could-shimmy-like-my-sister-kate_original-memphis-five-clarence-williams_gbia0039641a/I%20Wish%20I%20Could%20Shimmy%20Like%20My%20Sist%20-%20Original%20Memphis%20Five.mp3",
    "length": 196.0,
    "series": "Original Memphis Five",
    "title": "I Wish I Could Shimmy Like My Sister Kate",
    "date": "1922",
    "item": "https://archive.org/details/78_i-wish-i-could-shimmy-like-my-sister-kate_original-memphis-five-clarence-williams_gbia0039641a"
   },
   {
    "src": "https://archive.org/download/king-olivers-jazz-band-chattanooga-stomp-shimmy-one-step-columbia-13003-d-81300-/King%20Oliver%27s%20Jazz%20Band%20-%20Chattanooga%20Stomp%2C%20Shimmy%20One%20Step%20-%20Columbia%2013003D%2C%2081300%2C%20Matrix%2081300%203-1%20-%20October%2015%2C%201923.mp3",
    "length": 178.63,
    "series": "King Oliver's Jazz Band",
    "title": "Chattanooga Stomp (Shimmy One Step)",
    "date": "1923",
    "item": "https://archive.org/details/king-olivers-jazz-band-chattanooga-stomp-shimmy-one-step-columbia-13003-d-81300-"
   },
   {
    "src": "https://archive.org/download/78_kansas-city-man-blues_mamie-smith-harlem-trio-clarence-williams-clarence-johnson_gbia0295927a/KANSAS%20CITY%20MAN%20BLUES%20-%20MAMIE%20SMITH%20-%20Harlem%20Trio.mp3",
    "length": 207.58,
    "series": "Mamie Smith",
    "title": "Kansas City Man Blues",
    "date": "1923",
    "item": "https://archive.org/details/78_kansas-city-man-blues_mamie-smith-harlem-trio-clarence-williams-clarence-johnson_gbia0295927a"
   },
   {
    "src": "https://archive.org/download/loc-jukebox-73109-she-s-cryin-for-me/jukebox-73109_she-s-cryin-for-me.mp3",
    "length": 163.37,
    "series": "New Orleans Rhythm Kings",
    "title": "She's cryin' for me",
    "date": "1925",
    "item": "https://archive.org/details/loc-jukebox-73109-she-s-cryin-for-me"
   },
   {
    "src": "https://archive.org/download/IshamJonesRainboOrchestraJingaBulaJingJing1920/Isham_Jones_Rainbo_Orchestra-Jinga_Bula_Jing_Jing-1920.mp3",
    "length": 165,
    "series": "Isham Jones Rainbo Orchestra",
    "title": "Jinga-Bula-Jing-Jing",
    "date": "1920",
    "item": "https://archive.org/details/IshamJonesRainboOrchestraJingaBulaJingJing1920"
   },
   {
    "src": "https://archive.org/download/78_lazy-daddy_bix-beiderbecke-and-the-wolverines-la-rocca-shields-ragas-bix-beiderbeck_gbia0030788b/Lazy%20Daddy%20-%20Bix%20Beiderbecke%20and%20the%20Wolverines.mp3",
    "length": 170.0,
    "series": "Bix Beiderbecke and the Wolverines",
    "title": "Lazy Daddy",
    "date": "1924",
    "item": "https://archive.org/details/78_lazy-daddy_bix-beiderbecke-and-the-wolverines-la-rocca-shields-ragas-bix-beiderbeck_gbia0030788b"
   },
   {
    "src": "https://archive.org/download/78_susie_wolverine-orchestra-naset-kahn_gbia0009181b/Susie%20-%20Wolverine%20Orchestra%20-%20Naset%20-%20Kahn.mp3",
    "length": 164.0,
    "series": "Wolverine Orchestra",
    "title": "Susie",
    "date": "1924",
    "item": "https://archive.org/details/78_susie_wolverine-orchestra-naset-kahn_gbia0009181b"
   },
   {
    "src": "https://archive.org/download/78_naughty-man-picaron_fletcher-henderson-and-his-orchestra-redman-dixon_gbia0408573b/NAUGHTY%20MAN%20%28Picaron%29%20-%20Fletcher%20Henderson%20and%20his%20Orchestra.mp3",
    "length": 199.18,
    "series": "Fletcher Henderson and His Orchestra",
    "title": "Naughty Man (Picaron)",
    "date": "1924",
    "item": "https://archive.org/details/78_naughty-man-picaron_fletcher-henderson-and-his-orchestra-redman-dixon_gbia0408573b"
   },
   {
    "src": "https://archive.org/download/78_riverbeat-shuffle_wolverine-orchestra-carmichael_gbia0009181a/Riverbeat%20Shuffle%20-%20Wolverine%20Orchestra%20-%20Carmichael.mp3",
    "length": 160.0,
    "series": "Wolverine Orchestra",
    "title": "Riverboat Shuffle",
    "date": "1924",
    "item": "https://archive.org/details/78_riverbeat-shuffle_wolverine-orchestra-carmichael_gbia0009181a"
   },
   {
    "src": "https://archive.org/download/78_oh-baby_wolverine-orchestra-de-sylva-donaldson_gbia0009180a/Oh%21%20Baby%20-%20Wolverine%20Orchestra%20-%20De%20Sylva.mp3",
    "length": 147.0,
    "series": "Wolverine Orchestra",
    "title": "Oh Baby",
    "date": "1924",
    "item": "https://archive.org/details/78_oh-baby_wolverine-orchestra-de-sylva-donaldson_gbia0009180a"
   },
   {
    "src": "https://archive.org/download/OriginalMemphisFive-SweetPapaJoe/Original_Memphis_Five-Sweet_Papa_Joe-1923.mp3",
    "length": 175,
    "series": "Original Memphis Five",
    "title": "Sweet Papa Joe",
    "date": "1923",
    "item": "https://archive.org/details/OriginalMemphisFive-SweetPapaJoe"
   },
   {
    "src": "https://archive.org/download/if-a-wish-could-make-it-so/If%20A%20Wish%20Could%20Make%20It%20So%20%28remix%29.mp3",
    "length": 163.0,
    "series": "Art Hickman's Orchestra",
    "title": "If A Wish Could Make It So",
    "date": "1920",
    "item": "https://archive.org/details/if-a-wish-could-make-it-so"
   },
   {
    "src": "https://archive.org/download/whispering_202105/Whispering.mp3",
    "length": 181.8,
    "series": "Art Hickman's Orchestra",
    "title": "Whispering",
    "date": "1920",
    "item": "https://archive.org/details/whispering_202105"
   },
   {
    "src": "https://archive.org/download/78_society-blues_kid-orys-sunshine-orchestra-papa-mutt-carey-kid-ory-dink-johnson-fre_gbia0215087b/SOCIETY%20BLUES%20-%20KID%20ORY%27S%20SUNSHINE%20ORCHESTRA.mp3",
    "length": 192.34,
    "series": "Kid Ory's Sunshine Orchestra",
    "title": "Society Blues",
    "date": "1922",
    "item": "https://archive.org/details/78_society-blues_kid-orys-sunshine-orchestra-papa-mutt-carey-kid-ory-dink-johnson-fre_gbia0215087b"
   },
   {
    "src": "https://archive.org/download/joseph-c.-smiths-orchestra-dry-your-tears-victor-18533-b/Joseph%20C.%20Smith%27s%20Orchestra%20-%20%28Dry%20Your%29%20Tears%20-%20Victor%2018533-B.mp3",
    "length": 189.88,
    "series": "Joseph C. Smith's Orchestra",
    "title": "(Dry Your) Tears",
    "date": "1919",
    "item": "https://archive.org/details/joseph-c.-smiths-orchestra-dry-your-tears-victor-18533-b"
   },
   {
    "src": "https://archive.org/download/78_im-gonna-get-you_mamie-smith-and-her-jazz-hounds-porter-grainger_gbia0295928b/I%27M%20GONNA%20GET%20YOU%20-%20MAMIE%20SMITH%20AND%20HER%20JAZZ%20HOUNDS.mp3",
    "length": 185.42,
    "series": "Mamie Smith and Her Jazz Hounds",
    "title": "I'm Gonna Get You",
    "date": "1922",
    "item": "https://archive.org/details/78_im-gonna-get-you_mamie-smith-and-her-jazz-hounds-porter-grainger_gbia0295928b"
   },
   {
    "src": "https://archive.org/download/78_the-road-is-rocky-but-i-am-gonna-find-my-way_mamie-smith-and-her-jazz-hounds-perr_gbia0295933a/THE%20ROAD%20IS%20ROCKY%20%28But%20I%20-%20MAMIE%20SMITH%20AND%20HER%20JAZZ%20HOUNDS.mp3",
    "length": 195.79,
    "series": "Mamie Smith And Her Jazz Hounds",
    "title": "The Road Is Rocky (But I Am Gonna Find My Way)",
    "date": "1920",
    "item": "https://archive.org/details/78_the-road-is-rocky-but-i-am-gonna-find-my-way_mamie-smith-and-her-jazz-hounds-perr_gbia0295933a"
   },
   {
    "src": "https://archive.org/download/78_youve-got-to-see-mamma-evry-night-or-you-cant-see-mamma-at-all_mamie-smith-and_gbia0295928a/YOU%27VE%20GOT%20TO%20SEE%20MAMMA%20%20-%20MAMIE%20SMITH%20AND%20HER%20JAZZ%20HOUNDS.mp3",
    "length": 178.92,
    "series": "Mamie Smith and Her Jazz Hounds",
    "title": "You've Got to See Mamma Ev'ry Night (or You Can't See Mamma at All)",
    "date": "1922",
    "item": "https://archive.org/details/78_youve-got-to-see-mamma-evry-night-or-you-cant-see-mamma-at-all_mamie-smith-and_gbia0295928a"
   },
   {
    "src": "https://archive.org/download/78_fare-thee-honey-blues_mamie-smith-and-her-jazz-hounds_gbia0295933b/FARE%20THEE%20HONEY%20BLUES%20-%20MAMIE%20SMITH%20AND%20HER%20JAZZ%20HOUNDS.mp3",
    "length": 181.32,
    "series": "Mamie Smith and Her Jazz Hounds",
    "title": "Fare Thee Honey Blues",
    "date": "1920",
    "item": "https://archive.org/details/78_fare-thee-honey-blues_mamie-smith-and-her-jazz-hounds_gbia0295933b"
   },
   {
    "src": "https://archive.org/download/bessie-smith-careless-love-blues/Bessie%20Smith%20-%20Careless%20love%20blues%20-%20flat.mp3",
    "length": 210,
    "series": "Bessie Smith",
    "title": "Careless Love Blues",
    "date": "1925",
    "item": "https://archive.org/details/bessie-smith-careless-love-blues"
   },
   {
    "src": "https://archive.org/download/78_arkansas-blues-a-down-home-chant_mamie-smith-and-her-jazz-band-anton-lada-spencer_gbia0295930b/ARKANSAS%20BLUES%20%28A%20Down%20Hom%20-%20MAMIE%20SMITH%20AND%20HER%20JAZZ%20BAND.mp3",
    "length": 201.43,
    "series": "Mamie Smith and Her Jazz Band",
    "title": "Arkansas Blues (a Down Home Chant)",
    "date": "1921",
    "item": "https://archive.org/details/78_arkansas-blues-a-down-home-chant_mamie-smith-and-her-jazz-band-anton-lada-spencer_gbia0295930b"
   },
   {
    "src": "https://archive.org/download/original-dixieland-jazz-band-skeleton-jangle-victor-18472-a/Original%20Dixieland%20Jazz%20Band%20-%20Skeleton%20Jangle%20-%20Victor%2018472-A.mp3",
    "length": 169.9,
    "series": "Original Dixieland Jazz Band",
    "title": "Skeleton Jangle",
    "date": "1918",
    "item": "https://archive.org/details/original-dixieland-jazz-band-skeleton-jangle-victor-18472-a"
   },
   {
    "src": "https://archive.org/download/78_yellow-dog-blues_bessie-smith-hendersons-hot-six_gbia0464774a/Yellow%20Dog%20Blues%20-%20BESSIE%20SMITH%20-%20Henderson%27s%20Hot%20Six.mp3",
    "length": 190.54,
    "series": "Bessie Smith",
    "title": "Yellow Dog Blues",
    "date": "1925",
    "item": "https://archive.org/details/78_yellow-dog-blues_bessie-smith-hendersons-hot-six_gbia0464774a"
   },
   {
    "src": "https://archive.org/download/edison-50541_01_6544/cusb_ed_50541_01_6544_0c.mp3",
    "length": 194.0,
    "series": "All Star Trio",
    "title": "Sensation Jazz",
    "date": "1919",
    "item": "https://archive.org/details/edison-50541_01_6544"
   },
   {
    "src": "https://archive.org/download/original-dixieland-jazz-band-clarinet-marmalade-blues-victor-18513-b/Original%20Dixieland%20Jazz%20Band%20-%20Clarinet%20Marmalade%20Blues%20-%20Victor%2018513-B.mp3",
    "length": 160.68,
    "series": "Original Dixieland Jazz Band",
    "title": "Clarinet Marmalade Blues",
    "date": "1918",
    "item": "https://archive.org/details/original-dixieland-jazz-band-clarinet-marmalade-blues-victor-18513-b"
   },
   {
    "src": "https://archive.org/download/charleston1925/charleston1925.mp3",
    "length": 242,
    "series": "Golden Gate Orchestra",
    "title": "Charleston (Fox Trot)",
    "date": "1925",
    "item": "https://archive.org/details/charleston1925"
   },
   {
    "src": "https://archive.org/download/original-dixieland-jazz-band-crazy-blues-victor-18729-b/Original%20Dixieland%20Jazz%20Band%20-%20Crazy%20Blues%20-%20Victor%2018729-B.mp3",
    "length": 159.69,
    "series": "Original Dixieland Jazz Band",
    "title": "Crazy Blues",
    "date": "1921",
    "item": "https://archive.org/details/original-dixieland-jazz-band-crazy-blues-victor-18729-b"
   },
   {
    "src": "https://archive.org/download/coon-sanders-original-night-hawk-orchestra-theres-no-one-just-like-you-fox-trot-victor-19357-a/Coon-Sanders%20Original%20Night%20Hawk%20Orchestra%20-%20There%27s%20No%20One%20Just%20Like%20You-Fox%20Trot%20-%20Victor%2019357-A.mp3",
    "length": 179.62,
    "series": "Coon-Sanders Original Night Hawk Orchestra",
    "title": "There's No One Just Like You (Fox Trot)",
    "date": "1924",
    "item": "https://archive.org/details/coon-sanders-original-night-hawk-orchestra-theres-no-one-just-like-you-fox-trot-victor-19357-a"
   },
   {
    "src": "https://archive.org/download/1920-USA-Archives-1920-11-28-Ted-Lewis-Jazz-Band-Margie/1920%20%28USA%29%20Archives%201920%2011%2028%20Ted%20Lewis%20Jazz%20Band%20-%20Margie.mp3",
    "length": 191.8,
    "series": "Ted Lewis Jazz Band",
    "title": "Margie",
    "date": "1920",
    "item": "https://archive.org/details/1920-USA-Archives-1920-11-28-Ted-Lewis-Jazz-Band-Margie"
   },
   {
    "src": "https://archive.org/download/coon-sanders-original-night-hawk-orchestra-some-of-these-days-victor-19600-b/Coon-Sanders%20Original%20Night%20Hawk%20Orchestra%20-%20Some%20Of%20These%20Days%20-%20Victor%2019600-B.mp3",
    "length": 181.05,
    "series": "Coon-Sanders Original Night Hawk Orchestra",
    "title": "Some Of These Days",
    "date": "1924",
    "item": "https://archive.org/details/coon-sanders-original-night-hawk-orchestra-some-of-these-days-victor-19600-b"
   },
   {
    "src": "https://archive.org/download/coon-sanders-original-night-hawk-orchestra-moonlight-and-you-victor-19525-a/Coon-Sanders%20Original%20Night%20Hawk%20Orchestra%20-%20Moonlight%20And%20You%20-%20Victor%2019525-A.mp3",
    "length": 186.54,
    "series": "Coon-Sanders Original Night Hawk Orchestra",
    "title": "Moonlight And You",
    "date": "1924",
    "item": "https://archive.org/details/coon-sanders-original-night-hawk-orchestra-moonlight-and-you-victor-19525-a"
   },
   {
    "src": "https://archive.org/download/78_shake-your-feet_original-memphis-five-gene-buck-dave-stamper_gbia0101462a/Shake%20Your%20Feet%20-%20Original%20Memphis%20Five%20-%20Gene%20Buck.mp3",
    "length": 191,
    "series": "Original Memphis Five",
    "title": "Shake Your Feet",
    "date": "1923",
    "item": "https://archive.org/details/78_shake-your-feet_original-memphis-five-gene-buck-dave-stamper_gbia0101462a"
   },
   {
    "src": "https://archive.org/download/loc-jukebox-69880-my-daddy-s-dreamtime-lullaby/jukebox-69880_my-daddy-s-dreamtime-lullaby.mp3",
    "length": 186.65,
    "series": "Coon-Sanders Original Night Hawk Orchestra",
    "title": "My daddy's dreamtime lullaby",
    "date": "1924",
    "item": "https://archive.org/details/loc-jukebox-69880-my-daddy-s-dreamtime-lullaby"
   },
   {
    "src": "https://archive.org/download/78_aggravatin-papa_ladds-black-aces-turk-robinson_gbia0009099a/Aggravatin%27%20Papa%20-%20Ladd%27s%20Black%20Aces%20-%20Turk.mp3",
    "length": 189.0,
    "series": "Ladd's Black Aces",
    "title": "Aggravatin' Papa",
    "date": "1922",
    "item": "https://archive.org/details/78_aggravatin-papa_ladds-black-aces-turk-robinson_gbia0009099a"
   },
   {
    "src": "https://archive.org/download/78_sweet-lovin-mamma-please-come-back-to-me_ladds-black-aces-wagner-lockard_gbia0009099b/Sweet%20Lovin%27%20Mamma%20%28Please%20Come%20Back%20t%20-%20Ladd%27s%20Black%20Aces.mp3",
    "length": 176.0,
    "series": "Ladd's Black Aces",
    "title": "Sweet Lovin' Mamma (Please Come Back to Me)",
    "date": "1922",
    "item": "https://archive.org/details/78_sweet-lovin-mamma-please-come-back-to-me_ladds-black-aces-wagner-lockard_gbia0009099b"
   },
   {
    "src": "https://archive.org/download/78_yankee-doodle-blues_ladds-black-aces-gershwin_gbia0009462a/Yankee%20Doodle%20Blues%20-%20Ladd%27s%20Black%20Aces%20-%20Gershwin.mp3",
    "length": 181.0,
    "series": "Ladd's Black Aces",
    "title": "Yankee Doodle Blues",
    "date": "1922",
    "item": "https://archive.org/details/78_yankee-doodle-blues_ladds-black-aces-gershwin_gbia0009462a"
   },
   {
    "src": "https://archive.org/download/78_stop-your-kidding_ladds-black-aces-mills-groffe-hugh_gbia0009462b/Stop%20Your%20Kidding%20-%20Ladd%27s%20Black%20Aces%20-%20Mills.mp3",
    "length": 191.0,
    "series": "Ladd's Black Aces",
    "title": "Stop Your Kidding",
    "date": "1922",
    "item": "https://archive.org/details/78_stop-your-kidding_ladds-black-aces-mills-groffe-hugh_gbia0009462b"
   },
   {
    "src": "https://archive.org/download/78_jungo-land_ray-miller-melody-king-and-his-black-and-white-melody-boys-joe-bren_gbia0009669b/Jungo%20Land%20-%20Ray%20Miller%20Melody%20King%20and%20his%20Black%20and%20White%20Melody%20Boys.mp3",
    "length": 183.0,
    "series": "Ray Miller and His Orchestra",
    "title": "Jungo Land",
    "date": "1920",
    "item": "https://archive.org/details/78_jungo-land_ray-miller-melody-king-and-his-black-and-white-melody-boys-joe-bren_gbia0009669b"
   },
   {
    "src": "https://archive.org/download/78_underneath-the-dixie-moon_ray-miller-melody-king-and-his-black-and-white-melody-boy_gbia0009669a/Underneath%20The%20Dixie%20Moon%20-%20Ray%20Miller%20Melody%20King%20and%20his%20Black%20and%20White%20Melody%20Boys.mp3",
    "length": 183.0,
    "series": "Ray Miller and His Orchestra",
    "title": "Underneath The Dixie Moon",
    "date": "1920",
    "item": "https://archive.org/details/78_underneath-the-dixie-moon_ray-miller-melody-king-and-his-black-and-white-melody-boy_gbia0009669a"
   },
   {
    "src": "https://archive.org/download/78_canary-isle_ray-miller-and-his-orch-schwartz_gbia0046954a/Canary%20Isle%20-%20Ray%20Miller%20and%20His%20Orch.%20-%20Schwartz.mp3",
    "length": 194.0,
    "series": "Ray Miller and His Orchestra",
    "title": "Canary Isle",
    "date": "1922",
    "item": "https://archive.org/details/78_canary-isle_ray-miller-and-his-orch-schwartz_gbia0046954a"
   },
   {
    "src": "https://archive.org/download/78_georgia_ray-miller-and-his-orch-johnson-donaldson_gbia0046954b/Georgia%20-%20Ray%20Miller%20and%20His%20Orch.%20-%20Johnson.mp3",
    "length": 193.0,
    "series": "Ray Miller and His Orchestra",
    "title": "Georgia",
    "date": "1922",
    "item": "https://archive.org/details/78_georgia_ray-miller-and-his-orch-johnson-donaldson_gbia0046954b"
   }
  ]
 },
 {
  "id": "swing",
  "name": "Swing",
  "group": "Music",
  "music": true,
  "blurb": "Big bands of the 1930s and '40s.",
  "card": "art/cards/swing.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.8,
   "decrackle": 0.8,
   "tone": 7500
  },
  "tracks": [
   {
    "src": "https://archive.org/download/BobCrosbyOrchestraDogtownBlues1937/Bob_Crosby_Orchestra-Dogtown_Blues-1937.mp3",
    "length": 245.0,
    "series": "Bob Crosby Orchestra",
    "title": "Dogtown Blues",
    "date": "1937",
    "item": "https://archive.org/details/BobCrosbyOrchestraDogtownBlues1937"
   },
   {
    "src": "https://archive.org/download/CharlieBarnetOrchestra-ImPrayinHumble/Charlie_Barnet_Orchestra-Im_Prayin_Humble-1939.mp3",
    "length": 177.0,
    "series": "Charlie Barnet Orchestra",
    "title": "I'm Prayin' Humble",
    "date": "1939",
    "item": "https://archive.org/details/CharlieBarnetOrchestra-ImPrayinHumble"
   },
   {
    "src": "https://archive.org/download/b11372aiminalowdowngroover14055315/B-11372-A%20-%20I%27m%20In%20A%20Low%20Down%20Groove%20%5Br14055315%5D.mp3",
    "length": 195.0,
    "series": "Erskine Hawkins And His Orchestra",
    "title": "I'm In A Low Down Groove",
    "date": "1941",
    "item": "https://archive.org/details/b11372aiminalowdowngroover14055315"
   },
   {
    "src": "https://archive.org/download/AndyKirkAndHisCloudsOfJoy-TakeThoseBluesAway/Andy_Kirk_Clouds_of_Joy-Take_Those_Blues_Away-1940.mp3",
    "length": 172.0,
    "series": "Andy Kirk And His Clouds Of Joy",
    "title": "Take Those Blues Away",
    "date": "1940",
    "item": "https://archive.org/details/AndyKirkAndHisCloudsOfJoy-TakeThoseBluesAway"
   },
   {
    "src": "https://archive.org/download/78_tis-autumn_bunny-berigan-bunny-berigan-and-his-orchestra-lynne-richards-henry-nein_gbia0026891a/%27Tis%20Autumn%20-%20Bunny%20Berigan%20-%20Bunny%20Berigan%20and%20his%20Orchestra.mp3",
    "length": 210.0,
    "series": "Bunny Berigan",
    "title": "'Tis Autumn",
    "date": "1941",
    "item": "https://archive.org/details/78_tis-autumn_bunny-berigan-bunny-berigan-and-his-orchestra-lynne-richards-henry-nein_gbia0026891a"
   },
   {
    "src": "https://archive.org/download/78_thatss-a-plenty-eso-basta_tommy-dorsey-and-his-orchestra-lew-pollack_gbia0157977b/THATS%27S%20A%20PLENTY%20%28Eso%20Basta%29%20-%20Tommy%20Dorsey%20and%20his%20Orchestra.mp3",
    "length": 193.0,
    "series": "Tommy Dorsey and his Orchestra",
    "title": "That's a Plenty (Eso Basta)",
    "date": "1936",
    "item": "https://archive.org/details/78_thatss-a-plenty-eso-basta_tommy-dorsey-and-his-orchestra-lew-pollack_gbia0157977b"
   },
   {
    "src": "https://archive.org/download/78_the-pied-piper-of-hamelin_artie-shaw-and-his-orchestra-harry-von-zell-arthur-q-bry_gbia8002090/01%20-%20THE%20PIED%20PIPER%20OF%20HAMELIN%20-%20ARTIE%20SHAW%20and%20his%20ORCHESTRA.mp3",
    "length": 211.54,
    "series": "Artie Shaw and His Orchestra",
    "title": "The Pied Piper of Hamelin",
    "date": "1946",
    "item": "https://archive.org/details/78_the-pied-piper-of-hamelin_artie-shaw-and-his-orchestra-harry-von-zell-arthur-q-bry_gbia8002090"
   },
   {
    "src": "https://archive.org/download/78_call-the-police_jimmie-lunceford-and-his-orchestra-joe-thomas-artie-sims_gbia0069527a/Call%20the%20Police%21%20-%20Jimmie%20Lunceford%20and%20His%20Orchestra.mp3",
    "length": 188.0,
    "series": "Jimmie Lunceford and His Orchestra",
    "title": "Call the Police!",
    "date": "1947",
    "item": "https://archive.org/details/78_call-the-police_jimmie-lunceford-and-his-orchestra-joe-thomas-artie-sims_gbia0069527a"
   },
   {
    "src": "https://archive.org/download/78_whats-the-use-of-getting-sober-moonglow_les-brown-and-his-orchestra-butch-stone_gbia0520210b/WHAT%27S%20THE%20USE%20OF%20GETTING%20SO%20-%20Les%20Brown%20and%20his%20Orchestra.mp3",
    "length": 349.0,
    "series": "Les Brown and his Orchestra",
    "title": "What's the Use of Getting Sober?; Moonglow",
    "date": "1945",
    "item": "https://archive.org/details/78_whats-the-use-of-getting-sober-moonglow_les-brown-and-his-orchestra-butch-stone_gbia0520210b"
   },
   {
    "src": "https://archive.org/download/78_symposium-of-swing-sing-sing-sing-fox-trot-intro-christopher-columbus-pt1_/C_2936_2A_09571.mp3",
    "length": 248.0,
    "series": "Benny Goodman",
    "title": "Symposium of Swing - Sing, Sing, Sing - Fox-Trot. Intro - Christopher Columbus pt1",
    "date": "1937",
    "item": "https://archive.org/details/78_symposium-of-swing-sing-sing-sing-fox-trot-intro-christopher-columbus-pt1_"
   },
   {
    "src": "https://archive.org/download/07-chick-webb-a-h-orch-1936-musidisc-ja-5199_20210626_0642/01%20Chick%20Webb%20a%20h%20Orch%20-%201936%20Musidisc%20JA%205199.mp3",
    "length": 178.39,
    "series": "Chick Webb a.h. Orchestra",
    "title": "Stompin' at the Savoy",
    "date": "1936",
    "item": "https://archive.org/details/07-chick-webb-a-h-orch-1936-musidisc-ja-5199_20210626_0642"
   },
   {
    "src": "https://archive.org/download/78_the-wheels-keep-spinning-around_larry-clinton-orchestra-janette-davis-clinton-and-h_gbia8005233/01%20-%20%22You%27ve%20Heard%20This%20Story%20Before%22%20-%20Larry%20Clinton%20Orch..mp3",
    "length": 169.0,
    "series": "Larry Clinton Orch., Toon Timers, Janette Davis, Marshall Young, Clinton and Hendler",
    "title": "You've Heard This Story Before",
    "date": "1947",
    "item": "https://archive.org/details/78_the-wheels-keep-spinning-around_larry-clinton-orchestra-janette-davis-clinton-and-h_gbia8005233"
   },
   {
    "src": "https://archive.org/download/trafficjamartieshaw/Traffic%20Jam%20Artie%20Shaw.mp3",
    "length": 138.0,
    "series": "Artie Shaw and His Orchestra",
    "title": "Traffic Jam",
    "date": "1939",
    "item": "https://archive.org/details/trafficjamartieshaw"
   },
   {
    "src": "https://archive.org/download/78_deep-purple_larry-clinton-and-his-orch-bea-wain-mitchell-parish-peter-derose_gbia0016484a/Deep%20Purple%20-%20Larry%20Clinton%20and%20His%20Orch..mp3",
    "length": 224.0,
    "series": "Larry Clinton and His Orchestra",
    "title": "Deep Purple",
    "date": "1938",
    "item": "https://archive.org/details/78_deep-purple_larry-clinton-and-his-orch-bea-wain-mitchell-parish-peter-derose_gbia0016484a"
   },
   {
    "src": "https://archive.org/download/78_what-cha-call-em-blues_fletcher-henderson-his-orch-roberts_gbia0341730b/WHAT-CHA-CALL-%27EM%20BLUES%20-%20FLETCHER%20HENDERSON%20%26%20HIS%20ORCH..mp3",
    "length": 179.59,
    "series": "Fletcher Henderson & His Orchestra",
    "title": "What-cha-call-'em Blues",
    "date": "1941",
    "item": "https://archive.org/details/78_what-cha-call-em-blues_fletcher-henderson-his-orch-roberts_gbia0341730b"
   },
   {
    "src": "https://archive.org/download/78_deep-purple_larry-clinton-derose-parrishs_gbia0105118b/Deep%20Purple%20-%20Larry%20Clinton%20-%20DeRose%20-%20Parrish%27s.mp3",
    "length": 187.0,
    "series": "Larry Clinton",
    "title": "Deep Purple",
    "date": "1946",
    "item": "https://archive.org/details/78_deep-purple_larry-clinton-derose-parrishs_gbia0105118b"
   },
   {
    "src": "https://archive.org/download/GlenGrayCasaLomaOrchestra-JimtownBlues/Glen_Gray_Casa_Loma_Orchestra-Jimtown_Blues-1940.mp3",
    "length": 174.0,
    "series": "Glen Gray Casa Loma Orchestra",
    "title": "Jimtown Blues",
    "date": "1940",
    "item": "https://archive.org/details/GlenGrayCasaLomaOrchestra-JimtownBlues"
   },
   {
    "src": "https://archive.org/download/LesBrownOrchestraGravediggersHoliday1939/Les_Brown_Orchestra-Gravediggers_Holiday-1939.mp3",
    "length": 187.0,
    "series": "Les Brown Orchestra",
    "title": "Gravedigger's Holiday",
    "date": "1939",
    "item": "https://archive.org/details/LesBrownOrchestraGravediggersHoliday1939"
   },
   {
    "src": "https://archive.org/download/AndyKirkAndHisTwelveCloudsOfJoySteppinPretty1936/Andy_Kirk_and_His_Twelve_Clouds_of_Joy-Steppin_Pretty-1936.mp3",
    "length": 172.0,
    "series": "Andy Kirk and His Twelve Clouds of Joy",
    "title": "Steppin' Pretty",
    "date": "1936",
    "item": "https://archive.org/details/AndyKirkAndHisTwelveCloudsOfJoySteppinPretty1936"
   },
   {
    "src": "https://archive.org/download/78_cafe-society-blues_count-basie-and-his-all-american-rhythm-section-basie_gbia7010359a/CAFE%20SOCIETY%20BLUES%20-%20COUNT%20BASIE%20and%20his%20ALL%20AMERICAN%20RHYTHM%20SECTION.mp3",
    "length": 205.22,
    "series": "Count Basie and His All American Rhythm Section",
    "title": "Cafe Society Blues",
    "date": "1945",
    "item": "https://archive.org/details/78_cafe-society-blues_count-basie-and-his-all-american-rhythm-section-basie_gbia7010359a"
   },
   {
    "src": "https://archive.org/download/ChickWebbOrchestra-GoHarlem/Chick_Webb_Orchestra-Go_Harlem-1936.mp3",
    "length": 144.0,
    "series": "Chick Webb Orchestra",
    "title": "Go Harlem",
    "date": "1936",
    "item": "https://archive.org/details/ChickWebbOrchestra-GoHarlem"
   },
   {
    "src": "https://archive.org/download/78_1-diga-diga-do-2-theres-no-two-ways-about-love_lena-horne-cab-calloway-and-his_gbia0520169a/1.%20DIGA%20DIGA%20DO%3B%202.%20THERE%27S%20NO%20TWO%20WAYS%20ABOUT%20-%20Lena%20Horne.mp3",
    "length": 314.0,
    "series": "Lena Horne",
    "title": "Diga Diga Do; 2. There's No Two Ways About Love",
    "date": "1944",
    "item": "https://archive.org/details/78_1-diga-diga-do-2-theres-no-two-ways-about-love_lena-horne-cab-calloway-and-his_gbia0520169a"
   },
   {
    "src": "https://archive.org/download/78_beat-me-daddy-eight-to-a-bar_glenn-miller-and-his-orchestra-raye-prince-sheehy_gbia0192519a/BEAT%20ME%2C%20DADDY%2C%20EIGHT%20TO%20A%20BAR%20-%20GLENN%20MILLER%20AND%20HIS%20ORCHESTRA.mp3",
    "length": 189.0,
    "series": "Glenn Miller and His Orchestra",
    "title": "Beat Me, Daddy, Eight to a Bar",
    "date": "1941",
    "item": "https://archive.org/details/78_beat-me-daddy-eight-to-a-bar_glenn-miller-and-his-orchestra-raye-prince-sheehy_gbia0192519a"
   },
   {
    "src": "https://archive.org/download/78_taps-miller_georgie-auld-count-basie-bob-russell_gbia0026071b/Taps%20Miller%20-%20Georgie%20Auld%20-%20Count%20Basie%20%26%20Bob%20Russell.mp3",
    "length": 198.0,
    "series": "Georgie Auld",
    "title": "Taps Miller",
    "date": "1944",
    "item": "https://archive.org/details/78_taps-miller_georgie-auld-count-basie-bob-russell_gbia0026071b"
   },
   {
    "src": "https://archive.org/download/78_jingle-bells-boogie-woogie_will-bradley-and-his-boogie-woogie-boys-will-bradley-bil_gbia0023170a/Jingle%20Bells%20Boogie%20Woogie%20-%20Will%20Bradley%20and%20his%20Boogie%20Woogie%20Boys.mp3",
    "length": 168.0,
    "series": "Will Bradley and his Boogie Woogie Boys",
    "title": "Jingle Bells Boogie Woogie",
    "date": "1944",
    "item": "https://archive.org/details/78_jingle-bells-boogie-woogie_will-bradley-and-his-boogie-woogie-boys-will-bradley-bil_gbia0023170a"
   },
   {
    "src": "https://archive.org/download/ICantDanceiGotAntsInMyPants-DorseyBrothersWithBobCrosby/Dorsey-ICantDance.mp3",
    "length": 186.69,
    "series": "Dorsey Brothers Orchestra, vocal by Bob Crosby",
    "title": "Dorsey-ICan'tDance",
    "date": "1935",
    "item": "https://archive.org/details/ICantDanceiGotAntsInMyPants-DorseyBrothersWithBobCrosby"
   },
   {
    "src": "https://archive.org/download/78_georgia-on-my-mind_the-mound-city-blue-blowers-red-mckenzie-muggsy-spanier-coleman_gbia0390306a/GEORGIA%20ON%20MY%20MIND%20-%20The%20Mound%20City%20Blue%20Blowers.mp3",
    "length": 204.53,
    "series": "The Mound City Blue Blowers",
    "title": "Georgia on My Mind",
    "date": "1939",
    "item": "https://archive.org/details/78_georgia-on-my-mind_the-mound-city-blue-blowers-red-mckenzie-muggsy-spanier-coleman_gbia0390306a"
   },
   {
    "src": "https://archive.org/download/78_after-youve-gone_miff-mole-and-his-little-molers-miff-mole-phil-napoleon-jimmy-dor_gbia0423861b/AFTER%20YOU%27VE%20GONE%20-%20MIFF%20MOLE%20and%20his%20LITTLE%20MOLERS.mp3",
    "length": 218.81,
    "series": "Miff Mole and His Little Molers",
    "title": "After You've Gone",
    "date": "1937",
    "item": "https://archive.org/details/78_after-youve-gone_miff-mole-and-his-little-molers-miff-mole-phil-napoleon-jimmy-dor_gbia0423861b"
   },
   {
    "src": "https://archive.org/download/78_good-morning-corinee_wynonie-harris-lionel-hampton-in-the-evenin-blues-a.-cobbs-c._gbia0001429a/Good%20Morning%20Corinee%20-%20Wynonie%20Harris%20-%20Lionel%20Hampton.mp3",
    "length": 184.0,
    "series": "Wynonie Harris",
    "title": "Good Morning Corinne",
    "date": "1946",
    "item": "https://archive.org/details/78_good-morning-corinee_wynonie-harris-lionel-hampton-in-the-evenin-blues-a.-cobbs-c._gbia0001429a"
   },
   {
    "src": "https://archive.org/download/LarryClintonOrchestra-JumpJoe/Larry_Clinton_Orchestra-Jump_Joe-1940.mp3",
    "length": 194.0,
    "series": "Larry Clinton Orchestra",
    "title": "Jump Joe",
    "date": "1940",
    "item": "https://archive.org/details/LarryClintonOrchestra-JumpJoe"
   },
   {
    "src": "https://archive.org/download/78_king-porter-stomp_erskine-hawkins-and-his-orchestra-morton_gbia7015798b/KING%20PORTER%20STOMP%20-%20ERSKINE%20HAWKINS%20and%20his%20Orchestra.mp3",
    "length": 168.62,
    "series": "Erskine Hawkins and His Orchestra",
    "title": "King Porter Stomp",
    "date": "1938",
    "item": "https://archive.org/details/78_king-porter-stomp_erskine-hawkins-and-his-orchestra-morton_gbia7015798b"
   },
   {
    "src": "https://archive.org/download/78_the-sheik-of-araby_harry-james-and-his-orchestra-snyder-wheeler-smith_gbia0030704a/The%20Sheik%20of%20Araby%20-%20Harry%20James%20And%20His%20Orchestra.mp3",
    "length": 185.0,
    "series": "Harry James And His Orchestra",
    "title": "The Sheik of Araby",
    "date": "1946",
    "item": "https://archive.org/details/78_the-sheik-of-araby_harry-james-and-his-orchestra-snyder-wheeler-smith_gbia0030704a"
   },
   {
    "src": "https://archive.org/download/78_drum-boogie_gene-krupa-and-his-orchestra-irene-day-ensemble-krupa-hill_gbia7006392b/DRUM%20BOOGIE%20-%20GENE%20KRUPA%20and%20HIS%20ORCHESTRA.mp3",
    "length": 191.83,
    "series": "Gene Krupa and His Orchestra",
    "title": "Drum Boogie",
    "date": "1945",
    "item": "https://archive.org/details/78_drum-boogie_gene-krupa-and-his-orchestra-irene-day-ensemble-krupa-hill_gbia7006392b"
   },
   {
    "src": "https://archive.org/download/78_tis-autumn_bunny-berigan-and-his-orchestra-lynne-richards-henry-nemo_gbia0107286a/%27Tis%20Autumn%20-%20Bunny%20Berigan%20and%20his%20Orchestra.mp3",
    "length": 209.0,
    "series": "Bunny Berigan and his Orchestra",
    "title": "'Tis Autumn",
    "date": "1941",
    "item": "https://archive.org/details/78_tis-autumn_bunny-berigan-and-his-orchestra-lynne-richards-henry-nemo_gbia0107286a"
   },
   {
    "src": "https://archive.org/download/78_together-king-porter-stomp_jimmy-dorsey-and-his-orchestra-desylva-brown-henderson_gbia0382491a/TOGETHER%3B%20KING%20PORTER%20STOMP%20-%20Jimmy%20Dorsey%20and%20his%20Orchestra.mp3",
    "length": 351.51,
    "series": "Jimmy Dorsey and his Orchestra",
    "title": "Together; King Porter Stomp",
    "date": "1945",
    "item": "https://archive.org/details/78_together-king-porter-stomp_jimmy-dorsey-and-his-orchestra-desylva-brown-henderson_gbia0382491a"
   },
   {
    "src": "https://archive.org/download/78_ta-ra-ra-boom-de-ay_gene-krupa-and-his-orch-sayers_gbia0121286b/TA-RA-RA-BOOM-DE-AY%20-%20Gene%20Krupa%20and%20his%20Orch..mp3",
    "length": 193.0,
    "series": "Gene Krupa and his Orchestra",
    "title": "Ta-ra-ra-boom-de-ay",
    "date": "1934",
    "item": "https://archive.org/details/78_ta-ra-ra-boom-de-ay_gene-krupa-and-his-orch-sayers_gbia0121286b"
   },
   {
    "src": "https://archive.org/download/78_fish-market_gene-krupa-and-his-new-orchestra-verdi-krupa-biondi_gbia0278255c/FISH%20MARKET%20-%20Gene%20Krupa%20and%20his%20New%20Orchestra.mp3",
    "length": 325.34,
    "series": "Gene Krupa and his New Orchestra",
    "title": "Fish Market",
    "date": "1945",
    "item": "https://archive.org/details/78_fish-market_gene-krupa-and-his-new-orchestra-verdi-krupa-biondi_gbia0278255c"
   },
   {
    "src": "https://archive.org/download/78_bugle-blues_count-basie-and-his-all-american-rhythm-section-buck-clayton-don-byas_gbia0101742a/Bugle%20Blues%20-%20Count%20Basie%20and%20His%20All%20American%20Rhythm%20Section.mp3",
    "length": 150.0,
    "series": "Count Basie and His All American Rhythm Section",
    "title": "Bugle Blues",
    "date": "1938",
    "item": "https://archive.org/details/78_bugle-blues_count-basie-and-his-all-american-rhythm-section-buck-clayton-don-byas_gbia0101742a"
   },
   {
    "src": "https://archive.org/download/78_you-know-it_babe-russin-quintet-the-quintet-babe-russin-tommy-todd-al-hendrickson-j_gbia0072062/01%20-%205054%20Whisett%20-%20Babe%20Russin%20Quintet%20-%20The%20Quintet.mp3",
    "length": 166.0,
    "series": "Babe Russin Quintet",
    "title": "5054 Whisett",
    "date": "1946",
    "item": "https://archive.org/details/78_you-know-it_babe-russin-quintet-the-quintet-babe-russin-tommy-todd-al-hendrickson-j_gbia0072062"
   },
   {
    "src": "https://archive.org/download/78_a-lovers-lullaby_glen-gray-and-the-casa-loma-orchestra-carle-wagner-razaf_gbia0423187b/A%20LOVER%27S%20LULLABY%20-%20Glen%20Gray%20and%20the%20Casa%20Loma%20Orchestra.mp3",
    "length": 189.55,
    "series": "Glen Gray and the Casa Loma Orchestra",
    "title": "A Lover's Lullaby",
    "date": "1944",
    "item": "https://archive.org/details/78_a-lovers-lullaby_glen-gray-and-the-casa-loma-orchestra-carle-wagner-razaf_gbia0423187b"
   },
   {
    "src": "https://archive.org/download/JimmieLuncefordOrchestra-TwoVersionsOfWhiteHeat/Jimmie_Lunceford_Orchestra-White_Heat-1934.mp3",
    "length": 153.0,
    "series": "Jimmie Lunceford Orchestra",
    "title": "Two Versions of White Heat",
    "date": "1934",
    "item": "https://archive.org/details/JimmieLuncefordOrchestra-TwoVersionsOfWhiteHeat"
   },
   {
    "src": "https://archive.org/download/78_hocus-pocus_fletcher-henderson-and-his-orchestra-will-hudson_gbia7025293a/HOCUS%20POCUS%20-%20FLETCHER%20HENDERSON%20AND%20HIS%20ORCHESTRA.mp3",
    "length": 205.0,
    "series": "Fletcher Henderson and His Orchestra",
    "title": "Hocus Pocus",
    "date": "1935",
    "item": "https://archive.org/details/78_hocus-pocus_fletcher-henderson-and-his-orchestra-will-hudson_gbia7025293a"
   },
   {
    "src": "https://archive.org/download/78_deep-night_tommy-dorsey-and-his-orchestra-rudy-vallee-charlie-henderson_gbia0011422b/Deep%20Night%20-%20Tommy%20Dorsey%20and%20His%20Orchestra.mp3",
    "length": 211.0,
    "series": "Tommy Dorsey and His Orchestra",
    "title": "Deep Night",
    "date": "1941",
    "item": "https://archive.org/details/78_deep-night_tommy-dorsey-and-his-orchestra-rudy-vallee-charlie-henderson_gbia0011422b"
   },
   {
    "src": "https://archive.org/download/78_cement-mixer-put-ti-put-ti_jimmie-lunceford-and-his-orchestra-lunceford-quartet-g_gbia0030776a/Cement%20Mixer%20%28Put-Ti-Put-Ti%29%20-%20Jimmie%20Lunceford%20And%20His%20Orchestra.mp3",
    "length": 171.0,
    "series": "Jimmie Lunceford And His Orchestra",
    "title": "Cement Mixer (Put-Ti-Put-Ti)",
    "date": "1946",
    "item": "https://archive.org/details/78_cement-mixer-put-ti-put-ti_jimmie-lunceford-and-his-orchestra-lunceford-quartet-g_gbia0030776a"
   },
   {
    "src": "https://archive.org/download/78_my-heart-at-thy-sweet-voice_dartega-and-his-orchestra-milton-kaye-tschaikowsky_gbia0032714/01%20-%20Tschaikowsky%27s%20Piano%20Concerto%20-%20D%27Artega%20and%20his%20Orchestra.mp3",
    "length": 170.0,
    "series": "D'Artega and his Orchestra",
    "title": "Tschaikowsky's Piano Concerto",
    "date": "1947",
    "item": "https://archive.org/details/78_my-heart-at-thy-sweet-voice_dartega-and-his-orchestra-milton-kaye-tschaikowsky_gbia0032714"
   },
   {
    "src": "https://archive.org/download/AndyKirkAndHisCloudsOfJoyLittleJoeFromChicago1938/Andy_Kirk_and_his_Clouds_of_Joy-Little_Joe_From_Chicago-1938.mp3",
    "length": 170.0,
    "series": "Andy Kirk and his Clouds Of Joy",
    "title": "Little Joe From Chicago",
    "date": "1938",
    "item": "https://archive.org/details/AndyKirkAndHisCloudsOfJoyLittleJoeFromChicago1938"
   },
   {
    "src": "https://archive.org/download/78_burma-road-blues-part-2_roy-miltons-sextet-r-milton-h-sapp-d-robinson-l-floy_gbia0060955b/Burma%20Road%20Blues%20-%20part%202%20-%20Roy%20Milton%27s%20Sextet.mp3",
    "length": 192.0,
    "series": "Roy Milton's Sextet",
    "title": "Burma Road Blues - part 2",
    "date": "1946",
    "item": "https://archive.org/details/78_burma-road-blues-part-2_roy-miltons-sextet-r-milton-h-sapp-d-robinson-l-floy_gbia0060955b"
   },
   {
    "src": "https://archive.org/download/78_flight-of-the-bumble-bee_harry-james-and-his-orchestra_gbia0267673b/FLIGHT%20OF%20THE%20BUMBLE%20BEE%20-%20HARRY%20JAMES%20and%20his%20ORCHESTRA.mp3",
    "length": 145.06,
    "series": "Harry James and His Orchestra",
    "title": "Flight of the Bumble Bee",
    "date": "1940",
    "item": "https://archive.org/details/78_flight-of-the-bumble-bee_harry-james-and-his-orchestra_gbia0267673b"
   },
   {
    "src": "https://archive.org/download/in-the-mood_202112/In%20The%20Mood%20%28Flat%20eq%29.mp3",
    "length": 216.24,
    "series": "Glenn Miller and his Orchestra",
    "title": "In The Mood",
    "date": "1939",
    "item": "https://archive.org/details/in-the-mood_202112"
   },
   {
    "src": "https://archive.org/download/78_9958-Take-the-A-train/9958-Take-the-A-train.mp3",
    "length": 170.42,
    "series": "Duke Ellington and his famous orch.",
    "title": "Take the A train",
    "date": "1941",
    "item": "https://archive.org/details/78_9958-Take-the-A-train"
   },
   {
    "src": "https://archive.org/download/AndyKirkAndHisCloudsOfJoyScratchinInTheGravel1940/Andy_Kirk_and_His_Clouds_of_Joy-Scratchin_In_The_Gravel-1940.mp3",
    "length": 191.0,
    "series": "Andy Kirk and His Clouds of Joy",
    "title": "Scratchin' In The Gravel",
    "date": "1940",
    "item": "https://archive.org/details/AndyKirkAndHisCloudsOfJoyScratchinInTheGravel1940"
   },
   {
    "src": "https://archive.org/download/Heartaches_201811/Heartaches.mp3",
    "length": 186.0,
    "series": "Harry James - Marion Morgan and Orchestra",
    "title": "Heartaches",
    "date": "1947",
    "item": "https://archive.org/details/Heartaches_201811"
   },
   {
    "src": "https://archive.org/download/78_alexanders-ragtime-band_bessie-smith-her-blue-boys-buster-bailey-c-green-kaiser-mar_gbia3043090b/ALEXANDER%27S%20RAGTIME%20BAND%20-%20BESSIE%20SMITH%20%26%20HER%20BLUE%20BOYS.mp3",
    "length": 185.0,
    "series": "Bessie Smith & Her Blue Boys",
    "title": "Alexander's Ragtime Band",
    "date": "1938",
    "item": "https://archive.org/details/78_alexanders-ragtime-band_bessie-smith-her-blue-boys-buster-bailey-c-green-kaiser-mar_gbia3043090b"
   },
   {
    "src": "https://archive.org/download/78_cant-help-lovin-dat-man_kern-hammerstein-2nd-bud-freeman-and-his-orchestra-john-m_gbia0022853b/Can%27t%20Help%20Lovin%27%20Dat%20Man%20-%20Kern%20-%20Hammerstein%202nd.mp3",
    "length": 212.0,
    "series": "Kern",
    "title": "Can't Help Lovin' Dat Man",
    "date": "1937",
    "item": "https://archive.org/details/78_cant-help-lovin-dat-man_kern-hammerstein-2nd-bud-freeman-and-his-orchestra-john-m_gbia0022853b"
   },
   {
    "src": "https://archive.org/download/78_whoa-babe_glen-gray-and-the-casa-loma-orchestra-pee-wee-hunt-larry-clinton_gbia0004862a/Whoa%20Babe%20-%20Glen%20Gray%20and%20The%20Casa%20Loma%20Orchestra.mp3",
    "length": 190.0,
    "series": "Glen Gray and The Casa Loma Orchestra",
    "title": "Whoa Babe",
    "date": "1937",
    "item": "https://archive.org/details/78_whoa-babe_glen-gray-and-the-casa-loma-orchestra-pee-wee-hunt-larry-clinton_gbia0004862a"
   },
   {
    "src": "https://archive.org/download/78_ah-your-fathers-mustache_woody-herman-and-his-orchestra-the-glee-club-herman-harr_gbia0346962a/AH%2C%20YOUR%20FATHER%27S%20MUSTACHE%20-%20Woody%20Herman%20and%20his%20Orchestra.mp3",
    "length": 374.43,
    "series": "Woody Herman and his Orchestra",
    "title": "Ah, Your Father's Mustache",
    "date": "1945",
    "item": "https://archive.org/details/78_ah-your-fathers-mustache_woody-herman-and-his-orchestra-the-glee-club-herman-harr_gbia0346962a"
   },
   {
    "src": "https://archive.org/download/78_on-the-alamo_benny-goodman-his-sextet-count-basie-gus-kahn-isham-jones_gbia0120448a/ON%20THE%20ALAMO%20-%20Benny%20Goodman%20%26%20His%20Sextet.mp3",
    "length": 210.0,
    "series": "Benny Goodman & His Sextet",
    "title": "On the Alamo",
    "date": "1937",
    "item": "https://archive.org/details/78_on-the-alamo_benny-goodman-his-sextet-count-basie-gus-kahn-isham-jones_gbia0120448a"
   },
   {
    "src": "https://archive.org/download/78_im-in-an-awful-mood-put-it-away_jimmie-lunceford-and-his-orchestra-trummy-young-w_gbia0104542b/I%27m%20in%20an%20Awful%20Mood%3B%20-%20Jimmie%20Lunceford%20and%20his%20Orchestra.mp3",
    "length": 332.0,
    "series": "Jimmie Lunceford and his Orchestra",
    "title": "I'm in an Awful Mood; Put it Away",
    "date": "1944",
    "item": "https://archive.org/details/78_im-in-an-awful-mood-put-it-away_jimmie-lunceford-and-his-orchestra-trummy-young-w_gbia0104542b"
   },
   {
    "src": "https://archive.org/download/78_beautiful-indians-minnehaha-part-2_duke-ellington-and-his-orchestra-ellington-sea_gbia0010702/01%20-%20Beautiful%20Indians%20%28Hiaw%20-%20Duke%20Ellington%20and%20his%20Orchestra.mp3",
    "length": 169.0,
    "series": "Duke Ellington and his Orchestra",
    "title": "Beautiful Indians (Hiawatha) Part I; Beautiful Indians (Minnehaha) Part 2",
    "date": "1947",
    "item": "https://archive.org/details/78_beautiful-indians-minnehaha-part-2_duke-ellington-and-his-orchestra-ellington-sea_gbia0010702"
   },
   {
    "src": "https://archive.org/download/78_craze-o-logy_bud-freeman-bud-freeman-and-his-orchestra-john-mandel-floyd-obrien-bu_gbia0022853a/Craze-o-logy%20-%20Bud%20Freeman%20-%20Bud%20Freeman%20and%20his%20Orchestra.mp3",
    "length": 186.0,
    "series": "Bud Freeman",
    "title": "Craze-o-logy",
    "date": "1937",
    "item": "https://archive.org/details/78_craze-o-logy_bud-freeman-bud-freeman-and-his-orchestra-john-mandel-floyd-obrien-bu_gbia0022853a"
   },
   {
    "src": "https://archive.org/download/05-duke-ellington-cotton-club-1938-vol-2-musidisc-ja-5169_202106/01-Duke%20Ellington%20-%20Cotton%20Club%201938%20vol%202%20-%20Musidisc%20JA%205169.mp3",
    "length": 279.01,
    "series": "Duke Ellington a.h. Orchestra",
    "title": "Echoes of Harlem",
    "date": "1938",
    "item": "https://archive.org/details/05-duke-ellington-cotton-club-1938-vol-2-musidisc-ja-5169_202106"
   },
   {
    "src": "https://archive.org/download/78_hallelujah_teddy-wilson_gbia0032816/01%20-%20Strange%20Interlude%20-%20Teddy%20Wilson.mp3",
    "length": 186.0,
    "series": "Teddy Wilson",
    "title": "Strange Interlude",
    "date": "1946",
    "item": "https://archive.org/details/78_hallelujah_teddy-wilson_gbia0032816"
   },
   {
    "src": "https://archive.org/download/78_boot-whip_anita-oday-will-bradley-and-his-orchestra-roy-eldridge_gbia0031636b/Boot%20Whip%20-%20Anita%20O%27Day%20-%20Will%20Bradley%20and%20his%20Orchestra.mp3",
    "length": 155.0,
    "series": "Anita O'Day",
    "title": "Boot Whip",
    "date": "1947",
    "item": "https://archive.org/details/78_boot-whip_anita-oday-will-bradley-and-his-orchestra-roy-eldridge_gbia0031636b"
   },
   {
    "src": "https://archive.org/download/78_overture-to-a-jam-session-part-2_duke-ellington-and-his-orchestra-strayhorn_gbia0039398/01%20-%20Overture%20to%20a%20Jam%20Sessi%20-%20Duke%20Ellington%20and%20his%20Orchestra-restored.mp3",
    "length": 178.58,
    "series": "Duke Ellington and his Orchestra",
    "title": "Overture to a Jam Session - Part I",
    "date": "1947",
    "item": "https://archive.org/details/78_overture-to-a-jam-session-part-2_duke-ellington-and-his-orchestra-strayhorn_gbia0039398"
   },
   {
    "src": "https://archive.org/download/78_exactly-like-you_harry-james-and-his-orchestra-mccarthy-tierney_gbia0020168/01%20-%20Alice%20Blue%20Gown%20-%20Harry%20James%20and%20his%20Orchestra.mp3",
    "length": 177.0,
    "series": "Harry James and his Orchestra",
    "title": "Alice Blue Gown",
    "date": "1940",
    "item": "https://archive.org/details/78_exactly-like-you_harry-james-and-his-orchestra-mccarthy-tierney_gbia0020168"
   },
   {
    "src": "https://archive.org/download/RCA_Victor_20-1608/%5B1945%5D%20Tommy%20Dorsey%20%26%20His%20Orchestra%20-%20I%20Dream%20of%20You%20%28More%20than%20You%20Dream%20I%20Do%29%3B%20Opus%20No.%201%20%5BRCA%20Victor%2020-1608%5D/%5BA1%5D%20Tommy%20Dorsey%20%26%20His%20Orchestra%20-%20I%20Dream%20of%20You%20%28More%20than%20You%20Dream%20I%20Do%29.mp3",
    "length": 179.0,
    "series": "Tommy Dorsey & His Orchestra",
    "title": "I Dream of You (More than You Dream I Do) / Opus No. 1",
    "date": "1945",
    "item": "https://archive.org/details/RCA_Victor_20-1608"
   },
   {
    "src": "https://archive.org/download/78_i-dont-stand-a-ghost-of-a-chance-with-you_cab-calloway-his-orch-chu-berry-c_gbia0150084a/%28I%20don%27t%20stand%29%20A%20GHOST%20OF%20A%20CH%20-%20CAB%20CALLOWAY%20%26%20HIS%20ORCH..mp3",
    "length": 183.0,
    "series": "Cab Calloway & His Orchestra",
    "title": "(I Don't Stand) a Ghost of a Chance (with You)",
    "date": "1944",
    "item": "https://archive.org/details/78_i-dont-stand-a-ghost-of-a-chance-with-you_cab-calloway-his-orch-chu-berry-c_gbia0150084a"
   },
   {
    "src": "https://archive.org/download/78_king-joe-part-1_count-basie-and-his-orch-paul-robeson-wright-basie_gbia7010379a/KING%20JOE%20-%20PART%201%20-%20COUNT%20BASIE%20AND%20HIS%20ORCH..mp3",
    "length": 208.61,
    "series": "Count Basie and His Orchestra",
    "title": "King Joe - Part 1",
    "date": "1945",
    "item": "https://archive.org/details/78_king-joe-part-1_count-basie-and-his-orch-paul-robeson-wright-basie_gbia7010379a"
   },
   {
    "src": "https://archive.org/download/78_whose-theme-song-pt-2-tema-de-canciones_richard-himber-and-his-orchestra-pari_gbia0059874/01%20-%20Whose%20Theme%20Song%3F%20-%20Pt.%20-%20Richard%20Himber%20and%20his%20Orchestra.mp3",
    "length": 201.0,
    "series": "Baldridge",
    "title": "Whose Theme Song? - Pt. 1 (Tema de Canciones); Whose Theme Song? - Pt. 2 (Tema de Canciones)",
    "date": "1939",
    "item": "https://archive.org/details/78_whose-theme-song-pt-2-tema-de-canciones_richard-himber-and-his-orchestra-pari_gbia0059874"
   },
   {
    "src": "https://archive.org/download/78_burma-road-blues-part-2_roy-miltons-sextet-roy-milton-r-milton-h-sapp-d-robin_gbia0060968/01%20-%20Burma%20Road%20Blues%20-%20Part%201%20-%20Roy%20Milton%27s%20Sextet.mp3",
    "length": 173.0,
    "series": "Roy Milton",
    "title": "Burma Road Blues - Part 1; Burma Road Blues - Part 2",
    "date": "1946",
    "item": "https://archive.org/details/78_burma-road-blues-part-2_roy-miltons-sextet-roy-milton-r-milton-h-sapp-d-robin_gbia0060968"
   },
   {
    "src": "https://archive.org/download/78_if-dreams-come-true_teddy-wilson-sextet-teddy-wilson-ben-webster-al-casey-buck-clay_gbia0010706a/If%20Dreams%20Come%20True%20-%20Teddy%20Wilson%20Sextet.mp3",
    "length": 186.0,
    "series": "Teddy Wilson Sextet",
    "title": "If Dreams Come True",
    "date": "1945",
    "item": "https://archive.org/details/78_if-dreams-come-true_teddy-wilson-sextet-teddy-wilson-ben-webster-al-casey-buck-clay_gbia0010706a"
   },
   {
    "src": "https://archive.org/download/78_you-wont-be-satisfied-honeydripper_les-brown-doris-day-cab-calloway-and-his-orchest_gbia0526135a/YOU%20WON%27T%20BE%20SATISFIED%3B%20HONEYDRIPPER%20-%20Les%20Brown.mp3",
    "length": 371.0,
    "series": "Les Brown",
    "title": "You Won't Be Satisfied; Honeydripper",
    "date": "1946",
    "item": "https://archive.org/details/78_you-wont-be-satisfied-honeydripper_les-brown-doris-day-cab-calloway-and-his-orchest_gbia0526135a"
   },
   {
    "src": "https://archive.org/download/78_bean-at-the-met._coleman-hawkins-and-his-quintet-teddy-wilson-coleman-hawkins-li_gbia0003952a/%22Bean%22%20At%20The%20Met.%20-%20Coleman%20Hawkins%20and%20his%20Quintet.mp3",
    "length": 190.0,
    "series": "Coleman Hawkins and his Quintet",
    "title": "Bean\" At The Met.",
    "date": "1944",
    "item": "https://archive.org/details/78_bean-at-the-met._coleman-hawkins-and-his-quintet-teddy-wilson-coleman-hawkins-li_gbia0003952a"
   },
   {
    "src": "https://archive.org/download/78_dirty-dog_jack-teagarden-and-the-whoopie-makers-jimmy-mcpartland-jack-teagarden-ben_gbia0101689b/Dirty%20Dog%20-%20Jack%20Teagarden%20and%20the%20Whoopie%20Makers.mp3",
    "length": 204.0,
    "series": "Jack Teagarden and the Whoopie Makers",
    "title": "Dirty Dog",
    "date": "1938",
    "item": "https://archive.org/details/78_dirty-dog_jack-teagarden-and-the-whoopie-makers-jimmy-mcpartland-jack-teagarden-ben_gbia0101689b"
   },
   {
    "src": "https://archive.org/download/78_i-cant-get-started_bunny-berigan-and-his-boys-bunny-berigan-i-gershwin-duke-artie_gbia0061958b/I%20Can%27t%20Get%20Started%20-%20Bunny%20Berigan%20and%20his%20Boys.mp3",
    "length": 208.0,
    "series": "Bunny Berigan and his Boys",
    "title": "I Can't Get Started",
    "date": "1936",
    "item": "https://archive.org/details/78_i-cant-get-started_bunny-berigan-and-his-boys-bunny-berigan-i-gershwin-duke-artie_gbia0061958b"
   },
   {
    "src": "https://archive.org/download/78_lee-wiley-rodgers-and-hart-album_miss-lee-wiley-joe-bushkins-orchestra-rodgers-hart_gbia8006614/01%20-%20I%27VE%20GOT%20FIVE%20DOLLARS%20-%20MISS%20LEE%20WILEY%20-%20JOE%20BUSHKIN%27S%20ORCHESTRA.mp3",
    "length": 175.0,
    "series": "Miss Lee Wiley",
    "title": "Lee Wiley; Rodgers and Hart Album",
    "date": "1940",
    "item": "https://archive.org/details/78_lee-wiley-rodgers-and-hart-album_miss-lee-wiley-joe-bushkins-orchestra-rodgers-hart_gbia8006614"
   },
   {
    "src": "https://archive.org/download/ErskineHawkinsOrchestra-RaidTheJoint/Erskine_Hawkins_Orchestra-Raid_The_Joint-1939.mp3",
    "length": 182.0,
    "series": "Erskine Hawkins Orchestra",
    "title": "Raid The Joint",
    "date": "1939",
    "item": "https://archive.org/details/ErskineHawkinsOrchestra-RaidTheJoint"
   },
   {
    "src": "https://archive.org/download/2-fletcher-henderson-brunswick-a-81329/1%20Fletcher%20Henderson%20-%20Brunswick%20A%2081329.mp3",
    "length": 166.0,
    "series": "Fletcher Henderson and his Orchestra",
    "title": "Henderson, Fletcher - Brunswick A 81329",
    "date": "1937",
    "item": "https://archive.org/details/2-fletcher-henderson-brunswick-a-81329"
   },
   {
    "src": "https://archive.org/download/78_stardust_artie-shaw-and-his-orchestra-parish-carmichael_gbia0011398a/Stardust%20-%20Artie%20Shaw%20and%20His%20Orchestra%20-%20Parish.mp3",
    "length": 218.0,
    "series": "Artie Shaw and His Orchestra",
    "title": "Stardust",
    "date": "1942",
    "item": "https://archive.org/details/78_stardust_artie-shaw-and-his-orchestra-parish-carmichael_gbia0011398a"
   },
   {
    "src": "https://archive.org/download/78_atchinson-topeka--santa-fe_bob-crosby-and-orchestra-peggy-lee--bob-crosby-warren_gbia0005285a/Atchinson%2C%20Topeka%20%26%20Santa%20Fe%20-%20Bob%20Crosby%20and%20Orchestra.mp3",
    "length": 184.0,
    "series": "Bob Crosby and Orchestra",
    "title": "Atchinson, Topeka & Santa Fe",
    "date": "1944",
    "item": "https://archive.org/details/78_atchinson-topeka--santa-fe_bob-crosby-and-orchestra-peggy-lee--bob-crosby-warren_gbia0005285a"
   },
   {
    "src": "https://archive.org/download/ChickWebbAndHisOrchestra-MidniteInAMadhouse/Chick_Webb_Orchestra-Midnite_In_A_Madhouse-1937.mp3",
    "length": 157.0,
    "series": "Chick Webb and his Orchestra",
    "title": "Midnite In A Madhouse",
    "date": "1937",
    "item": "https://archive.org/details/ChickWebbAndHisOrchestra-MidniteInAMadhouse"
   },
   {
    "src": "https://archive.org/download/78_night-and-day_artie-shaw-and-his-orchestra-mel-torme-cole-porter_gbia0020169/01%20-%20Get%20Out%20of%20Town%20-%20Artie%20Shaw%20and%20his%20Orchestra-restored.mp3",
    "length": 195.38,
    "series": "Artie Shaw and his Orchestra",
    "title": "Get Out of Town",
    "date": "1946",
    "item": "https://archive.org/details/78_night-and-day_artie-shaw-and-his-orchestra-mel-torme-cole-porter_gbia0020169"
   },
   {
    "src": "https://archive.org/download/78_moon-glow_benny-goodman-quartet-hudson_gbia7030111a/MOON%20GLOW%20-%20BENNY%20GOODMAN%20QUARTET%20-%20Hudson.mp3",
    "length": 213.0,
    "series": "Benny Goodman Quartet",
    "title": "Moon Glow",
    "date": "1937",
    "item": "https://archive.org/details/78_moon-glow_benny-goodman-quartet-hudson_gbia7030111a"
   },
   {
    "src": "https://archive.org/download/BobCrosbyOrchestra-ChainGang/Bob_Crosby_Orchestra-Chain_Gang-1942.mp3",
    "length": 267.0,
    "series": "Bob Crosby Orchestra",
    "title": "Chain Gang",
    "date": "1942",
    "item": "https://archive.org/details/BobCrosbyOrchestra-ChainGang"
   },
   {
    "src": "https://archive.org/download/CharlieBarnetOrchestra-Nowhere/Charlie_Barnet_Orchestra-Nowhere-1940.mp3",
    "length": 203.0,
    "series": "Charlie Barnet Orchestra",
    "title": "Nowhere",
    "date": "1940",
    "item": "https://archive.org/details/CharlieBarnetOrchestra-Nowhere"
   },
   {
    "src": "https://archive.org/download/78_on-the-sunny-side-of-the-street_tommy-dorsey-and-his-orchestra_wave/on%20the%20sunny%20side%20of%20the%20street_tommy%20dorsey%20aho_older%20disc%20now%20broke.mp3",
    "length": 197.54,
    "series": "Tommy Dorsey and his Orchestra",
    "title": "On the Sunny Side of the Street",
    "date": "1945",
    "item": "https://archive.org/details/78_on-the-sunny-side-of-the-street_tommy-dorsey-and-his-orchestra_wave"
   },
   {
    "src": "https://archive.org/download/78_flip-lid_les-brown-and-his-orchestra-comstock_gbia0294271b/FLIP%20LID%20-%20Les%20Brown%20and%20his%20Orchestra%20-%20Comstock.mp3",
    "length": 283.73,
    "series": "Les Brown and his Orchestra",
    "title": "Flip Lid",
    "date": "1944",
    "item": "https://archive.org/details/78_flip-lid_les-brown-and-his-orchestra-comstock_gbia0294271b"
   },
   {
    "src": "https://archive.org/download/GlenGrayCasaLomaOrchestra-JungleJitters/Glen_Gray_Casa_Loma_Orchestra-Jungle_Jitters-1936.mp3",
    "length": 174.0,
    "series": "Glen Gray Casa Loma Orchestra",
    "title": "Jungle Jitters",
    "date": "1936",
    "item": "https://archive.org/details/GlenGrayCasaLomaOrchestra-JungleJitters"
   },
   {
    "src": "https://archive.org/download/LesBrownOrchestraBlueDivelJazz1939/Les_Brown_Orchestra-Blue_Divel_Jazz-1939.mp3",
    "length": 148.0,
    "series": "Les Brown Orchestra",
    "title": "Blue Divel Jazz",
    "date": "1939",
    "item": "https://archive.org/details/LesBrownOrchestraBlueDivelJazz1939"
   },
   {
    "src": "https://archive.org/download/ChickWebbOrchestra-SpinninTheWebb/Chick_Webb_Orchestra-Spinnin_The_Webb-1938.mp3",
    "length": 187.0,
    "series": "Chick Webb Orchestra",
    "title": "Spinnin The Webb",
    "date": "1938",
    "item": "https://archive.org/details/ChickWebbOrchestra-SpinninTheWebb"
   },
   {
    "src": "https://archive.org/download/78_boulder-buff_glenn-miller-and-his-orchestra-eugene-novello-f-norman_gbia7007789a/BOULDER%20BUFF%20-%20GLENN%20MILLER%20AND%20HIS%20ORCHESTRA.mp3",
    "length": 216.14,
    "series": "Glenn Miller and His Orchestra",
    "title": "Boulder Buff",
    "date": "1941",
    "item": "https://archive.org/details/78_boulder-buff_glenn-miller-and-his-orchestra-eugene-novello-f-norman_gbia7007789a"
   },
   {
    "src": "https://archive.org/download/78_cryin-the-boogie-blues_will-bradley-and-his-boogie-woogie-boys-will-bradley-billy_gbia0023170b/Cryin%27%20the%20Boogie%20Blues%20-%20Will%20Bradley%20and%20his%20Boogie%20Woogie%20Boys.mp3",
    "length": 178.0,
    "series": "Will Bradley and his Boogie Woogie Boys",
    "title": "Cryin' the Boogie Blues",
    "date": "1944",
    "item": "https://archive.org/details/78_cryin-the-boogie-blues_will-bradley-and-his-boogie-woogie-boys-will-bradley-billy_gbia0023170b"
   },
   {
    "src": "https://archive.org/download/78_in-the-evenin-blues_wynonie-harris-lionel-hampton-the-hamp-tone-all-stars-a.-cobbs_gbia0001429b/In%20The%20Evenin%20Blues%20-%20Wynonie%20Harris%20-%20Lionel%20Hampton-restored.mp3",
    "length": 167.0,
    "series": "Wynonie Harris",
    "title": "In The Evenin' Blues",
    "date": "1946",
    "item": "https://archive.org/details/78_in-the-evenin-blues_wynonie-harris-lionel-hampton-the-hamp-tone-all-stars-a.-cobbs_gbia0001429b"
   },
   {
    "src": "https://archive.org/download/LarryClintonOrchestra-IWantToRock/Larry_Clinton_Orchestra-I_Want_To_Rock-1940.mp3",
    "length": 209.0,
    "series": "Larry Clinton Orchestra",
    "title": "I Want To Rock",
    "date": "1940",
    "item": "https://archive.org/details/LarryClintonOrchestra-IWantToRock"
   },
   {
    "src": "https://archive.org/download/78_weary-blues_erskine-hawkins-and-his-orchestra-artie-matthews_gbia7015798a/WEARY%20BLUES%20-%20ERSKINE%20HAWKINS%20and%20his%20Orchestra.mp3",
    "length": 210.98,
    "series": "Erskine Hawkins and His Orchestra",
    "title": "Weary Blues",
    "date": "1938",
    "item": "https://archive.org/details/78_weary-blues_erskine-hawkins-and-his-orchestra-artie-matthews_gbia7015798a"
   },
   {
    "src": "https://archive.org/download/78_the-white-cliffs-of-dover_bunny-berigan-and-his-orchestra-lynne-richards-burton-ken_gbia0103466b/The%20White%20Cliffs%20of%20Dover%20-%20Bunny%20Berigan%20and%20his%20Orchestra.mp3",
    "length": 194.0,
    "series": "Bunny Berigan and his Orchestra",
    "title": "The White Cliffs of Dover",
    "date": "1941",
    "item": "https://archive.org/details/78_the-white-cliffs-of-dover_bunny-berigan-and-his-orchestra-lynne-richards-burton-ken_gbia0103466b"
   },
   {
    "src": "https://archive.org/download/78_sunset-strip_jimmy-dorsey-and-his-orchestra-dorsey-burke_gbia0423217a/SUNSET%20STRIP%20-%20Jimmy%20Dorsey%20and%20his%20Orchestra.mp3",
    "length": 293.9,
    "series": "Jimmy Dorsey and his Orchestra",
    "title": "Sunset Strip",
    "date": "1944",
    "item": "https://archive.org/details/78_sunset-strip_jimmy-dorsey-and-his-orchestra-dorsey-burke_gbia0423217a"
   },
   {
    "src": "https://archive.org/download/GlenGrayAndTheCasaLomaOrchestra-BugleCallRag/Glen_Gray_Casa_Loma_Orchestra-Bugle_Call_Rag-1936.mp3",
    "length": 173.0,
    "series": "Glen Gray and the Casa Loma Orchestra",
    "title": "Bugle Call Rag",
    "date": "1936",
    "item": "https://archive.org/details/GlenGrayAndTheCasaLomaOrchestra-BugleCallRag"
   },
   {
    "src": "https://archive.org/download/JimmieLuncefordOrchestra-FriscoFog/Jimmie_Lunceford_Orchestra-Frisco_Fog-1937.mp3",
    "length": 191.0,
    "series": "Jimmie Lunceford Orchestra",
    "title": "Frisco Fog",
    "date": "1937",
    "item": "https://archive.org/details/JimmieLuncefordOrchestra-FriscoFog"
   },
   {
    "src": "https://archive.org/download/78_burma-road-blues-part-1_roy-miltons-sextet-r-milton-h-sapp-d-robinson-l-floy_gbia0060955a/Burma%20Road%20Blues%20-%20part%201%20-%20Roy%20Milton%27s%20Sextet.mp3",
    "length": 171.0,
    "series": "Roy Milton's Sextet",
    "title": "Burma Road Blues - part 1",
    "date": "1946",
    "item": "https://archive.org/details/78_burma-road-blues-part-1_roy-miltons-sextet-r-milton-h-sapp-d-robinson-l-floy_gbia0060955a"
   },
   {
    "src": "https://archive.org/download/AndyKirkAndHisCloudsOfJoyInTheGroove1937/Andy_Kirk_and_His_Clouds_of_Joy-In_The_Groove-1937.mp3",
    "length": 185.0,
    "series": "Andy Kirk and His Clouds of Joy",
    "title": "In The Groove",
    "date": "1937",
    "item": "https://archive.org/details/AndyKirkAndHisCloudsOfJoyInTheGroove1937"
   },
   {
    "src": "https://archive.org/download/78_blowing-up-a-storm_woody-herman-and-his-orchestra-hefti-herman_gbia0382441a/BLOWING%20UP%20A%20STORM%20-%20Woody%20Herman%20and%20his%20Orchestra.mp3",
    "length": 307.25,
    "series": "Woody Herman and his Orchestra",
    "title": "Blowing Up a Storm",
    "date": "1946",
    "item": "https://archive.org/details/78_blowing-up-a-storm_woody-herman-and-his-orchestra-hefti-herman_gbia0382441a"
   },
   {
    "src": "https://archive.org/download/03-duke-ellington-cotton-club-1938-vol-1-musidisc-ja-5168/01-Duke%20Ellington%20-%20Cotton%20Club%201938%20vol%201%20-%20Musidisc%20JA%205168.mp3",
    "length": 161.18,
    "series": "Duke Ellington a.n. Orchestra",
    "title": "Intro - Jig walk",
    "date": "1938",
    "item": "https://archive.org/details/03-duke-ellington-cotton-club-1938-vol-1-musidisc-ja-5168"
   },
   {
    "src": "https://archive.org/download/78_hi-ho-trailus-boot-whip_anita-oday-will-bradley-and-his-orchestra-harding-palmer-r_gbia0008335b/Hi%20Ho%20Trailus%20Boot%20Whip%20-%20Anita%20O%27Day%20-%20Will%20Bradley%20and%20his%20Orchestra.mp3",
    "length": 158.0,
    "series": "Anita O'Day",
    "title": "Hi Ho Trailus Boot Whip",
    "date": "1947",
    "item": "https://archive.org/details/78_hi-ho-trailus-boot-whip_anita-oday-will-bradley-and-his-orchestra-harding-palmer-r_gbia0008335b"
   },
   {
    "src": "https://archive.org/download/78_willow-weep-for-me_cab-calloway-his-orch-hilton-jefferson-ronell-gibson_gbia7000526b/WILLOW%20WEEP%20FOR%20ME%20-%20CAB%20CALLOWAY%20%26%20HIS%20ORCH..mp3",
    "length": 202.61,
    "series": "Cab Calloway & His Orchestra",
    "title": "Willow Weep for Me",
    "date": "1944",
    "item": "https://archive.org/details/78_willow-weep-for-me_cab-calloway-his-orch-hilton-jefferson-ronell-gibson_gbia7000526b"
   },
   {
    "src": "https://archive.org/download/78_blues-too_teddy-wilson-sextet-teddy-wilson-ben-webster-al-casey-buck-clayton-al-hal_gbia0010706b/Blues%20Too%20-%20Teddy%20Wilson%20Sextet%20-%20Teddy%20Wilson.mp3",
    "length": 192.0,
    "series": "Teddy Wilson Sextet",
    "title": "Blues Too",
    "date": "1945",
    "item": "https://archive.org/details/78_blues-too_teddy-wilson-sextet-teddy-wilson-ben-webster-al-casey-buck-clayton-al-hal_gbia0010706b"
   },
   {
    "src": "https://archive.org/download/78_its-so-good_jack-teagarden-and-the-whoopie-makers-jimmy-mcpartland-jack-teagarden_gbia0101689a/It%27s%20So%20Good%20-%20Jack%20Teagarden%20and%20the%20Whoopie%20Makers.mp3",
    "length": 202.0,
    "series": "Jack Teagarden and the Whoopie Makers",
    "title": "It's So Good",
    "date": "1938",
    "item": "https://archive.org/details/78_its-so-good_jack-teagarden-and-the-whoopie-makers-jimmy-mcpartland-jack-teagarden_gbia0101689a"
   },
   {
    "src": "https://archive.org/download/ErskineHawkinsOrchestra-TwoSelectionsFromhotMikado/Erskine_Hawkins_Orchestra-I_The_Living_I-1939.mp3",
    "length": 152.0,
    "series": "Erskine Hawkins Orchestra",
    "title": "Two Selections from \"Hot Mikado",
    "date": "1939",
    "item": "https://archive.org/details/ErskineHawkinsOrchestra-TwoSelectionsFromhotMikado"
   },
   {
    "src": "https://archive.org/download/BobCrosbyOrchestra-BlackZephyr/Bob_Crosby_Orchestra-Black_Zephyr-1942.mp3",
    "length": 181.0,
    "series": "Bob Crosby Orchestra",
    "title": "Black Zephyr",
    "date": "1942",
    "item": "https://archive.org/details/BobCrosbyOrchestra-BlackZephyr"
   },
   {
    "src": "https://archive.org/download/CharlieBarnetOrchestra-TheDukesIdea/Charlie_Barnet_Orchestra-The_Dukes_Idea-1939.mp3",
    "length": 186.0,
    "series": "Charlie Barnet Orchestra",
    "title": "The Duke's Idea",
    "date": "1939",
    "item": "https://archive.org/details/CharlieBarnetOrchestra-TheDukesIdea"
   }
  ]
 },
 {
  "id": "crooners",
  "name": "Crooners",
  "group": "Music",
  "music": true,
  "blurb": "Smooth singers, late 1920s to the '50s.",
  "card": "art/cards/crooners.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.8,
   "decrackle": 0.8,
   "tone": 7500
  },
  "tracks": [
   {
    "src": "https://archive.org/download/body-and-soul/Body%20And%20Soul.mp3",
    "length": 184.32,
    "series": "Jimmy Dorsey - Bob Eberly - Orchestra",
    "title": "Body And Soul",
    "date": "1939",
    "item": "https://archive.org/details/body-and-soul"
   },
   {
    "src": "https://archive.org/download/78_cool-breeze_billy-eckstine-gene-ammons-dameron-gillespie_gbia0072083a/Cool%20Breeze%20-%20Billy%20Eckstine%20-%20Gene%20Ammons.mp3",
    "length": 175.0,
    "series": "Billy Eckstine",
    "title": "Cool Breeze",
    "date": "1946",
    "item": "https://archive.org/details/78_cool-breeze_billy-eckstine-gene-ammons-dameron-gillespie_gbia0072083a"
   },
   {
    "src": "https://archive.org/download/78_when-our-hearts-were-young-and-gay_jo-stafford-grouya-goell-paul-weston_gbia0278296a/WHEN%20OUR%20HEARTS%20WERE%20YOUNG%20AND%20GAY%20-%20Jo%20Stafford.mp3",
    "length": 191.45,
    "series": "Jo Stafford",
    "title": "When Our Hearts Were Young and Gay",
    "date": "1944",
    "item": "https://archive.org/details/78_when-our-hearts-were-young-and-gay_jo-stafford-grouya-goell-paul-weston_gbia0278296a"
   },
   {
    "src": "https://archive.org/download/78_lonesome-road_jo-stafford-and-her-v-disc-boys-austin-shilkret-billy-butterfield-lou_gbia0104502b/Lonesome%20Road%20-%20Jo%20Stafford%20and%20her%20V-Disc%20Boys.mp3",
    "length": 312.0,
    "series": "Jo Stafford and her V-Disc Boys",
    "title": "Lonesome Road",
    "date": "1947",
    "item": "https://archive.org/details/78_lonesome-road_jo-stafford-and-her-v-disc-boys-austin-shilkret-billy-butterfield-lou_gbia0104502b"
   },
   {
    "src": "https://archive.org/download/78_ill-see-you-in-my-dreams_tony-martin-the-starlighters-al-sack-and-his-orchestra-t_gbia0047589b/I%27ll%20See%20You%20in%20My%20Dreams%20-%20Tony%20Martin%20-%20The%20Starlighters.mp3",
    "length": 205.0,
    "series": "Tony Martin",
    "title": "I'll See You in My Dreams",
    "date": "1946",
    "item": "https://archive.org/details/78_ill-see-you-in-my-dreams_tony-martin-the-starlighters-al-sack-and-his-orchestra-t_gbia0047589b"
   },
   {
    "src": "https://archive.org/download/78_the-night-is-young-and-youre-so-beautiful_dean-martin-hal-kanner-orchestra-rose-ka_gbia0284382b/THE%20NIGHT%20IS%20YOUNG%20AND%20YOU%27RE%20SO%20BEAUTIFUL%20-%20DEAN%20MARTIN.mp3",
    "length": 164.26,
    "series": "Dean Martin",
    "title": "The Night is Young and You're So Beautiful",
    "date": "1948",
    "item": "https://archive.org/details/78_the-night-is-young-and-youre-so-beautiful_dean-martin-hal-kanner-orchestra-rose-ka_gbia0284382b"
   },
   {
    "src": "https://archive.org/download/1931-USA-Archives-1931-09-03-Russ-Columbo-Orch-Guilty-version-01/1931%28USA%29Archives19310903RussColumboOrch-Guilty%28version01%29.mp3",
    "length": 192.11,
    "series": "Russ Columbo Orchestra",
    "title": "Guilty",
    "date": "1931",
    "item": "https://archive.org/details/1931-USA-Archives-1931-09-03-Russ-Columbo-Orch-Guilty-version-01"
   },
   {
    "src": "https://archive.org/download/letsjustpretend/Lets%20just%20pretend%20e.mp3",
    "length": 198.0,
    "series": "Tommy Dorsey and His Orchestra, Jo Stafford - Gesang",
    "title": "Let's just pretend",
    "date": "1944",
    "item": "https://archive.org/details/letsjustpretend"
   },
   {
    "src": "https://archive.org/download/78_night-and-day_artie-shaw-and-his-orchestra-mel-torme-cole-porter_gbia0020169/01%20-%20Get%20Out%20of%20Town%20-%20Artie%20Shaw%20and%20his%20Orchestra-restored.mp3",
    "length": 195.38,
    "series": "Artie Shaw and his Orchestra",
    "title": "Get Out of Town",
    "date": "1946",
    "item": "https://archive.org/details/78_night-and-day_artie-shaw-and-his-orchestra-mel-torme-cole-porter_gbia0020169"
   },
   {
    "src": "https://archive.org/download/78_au-revoir-but-not-goodbye_al-bowlly-gilbert-ronnie-munro_gbia0084059b/Au%20Revoir%20%28But%20Not%20Goodbye%29%20-%20Al%20Bowlly%20-%20Gilbert.mp3",
    "length": 190.0,
    "series": "Al Bowlly",
    "title": "Au Revoir (But Not Goodbye)",
    "date": "1940",
    "item": "https://archive.org/details/78_au-revoir-but-not-goodbye_al-bowlly-gilbert-ronnie-munro_gbia0084059b"
   },
   {
    "src": "https://archive.org/download/78_blue-canary_dinah-shore-vic-shoen-and-his-orchestra-vic-florino_gbia7015925a/BLUE%20CANARY%20-%20DINAH%20SHORE%20-%20Vic%20Shoen%20and%20his%20Orchestra.mp3",
    "length": 188.93,
    "series": "Dinah Shore",
    "title": "Blue Canary",
    "date": "1953",
    "item": "https://archive.org/details/78_blue-canary_dinah-shore-vic-shoen-and-his-orchestra-vic-florino_gbia7015925a"
   },
   {
    "src": "https://archive.org/download/PaulWhitemanwithRhythmBoysBingCrosby/PaulWhitemanwithRhythmBoysBingCrosby-SideBySide.mp3",
    "length": 177.0,
    "series": "Paul Whiteman with Rhythm Boys",
    "title": "Side By Side",
    "date": "1927",
    "item": "https://archive.org/details/PaulWhitemanwithRhythmBoysBingCrosby"
   },
   {
    "src": "https://archive.org/download/78_all-i-sing-is-blues_billy-eckstine-and-his-orchestra-billy-eckstine-fred-gray_gbia0072650b/All%20I%20Sing%20Is%20Blues%20-%20Billy%20Eckstine%20And%20His%20Orchestra.mp3",
    "length": 179.0,
    "series": "Billy Eckstine And His Orchestra",
    "title": "All I Sing Is Blues",
    "date": "1945",
    "item": "https://archive.org/details/78_all-i-sing-is-blues_billy-eckstine-and-his-orchestra-billy-eckstine-fred-gray_gbia0072650b"
   },
   {
    "src": "https://archive.org/download/sway-quien-sera/Sway%20%28Quien%20Sera%29.mp3",
    "length": 162.22,
    "series": "Dean Martin - Dick Stabile and Orchestra",
    "title": "Sway (Quien Sera)",
    "date": "1954",
    "item": "https://archive.org/details/sway-quien-sera"
   },
   {
    "src": "https://archive.org/download/78_while-were-young-percy-faith-and-his-orchestra-tony-bennett-engvick-wilder/17661%20While%20we%27re%20young.mp3",
    "length": 137.87,
    "series": "Tony Bennett",
    "title": "While we're young",
    "date": "1951",
    "item": "https://archive.org/details/78_while-were-young-percy-faith-and-his-orchestra-tony-bennett-engvick-wilder"
   },
   {
    "src": "https://archive.org/download/78_if-i-had-my-way_nick-lucas-klein-kendis_gbia0054803b/If%20I%20Had%20My%20Way%20-%20Nick%20Lucas%20-%20Klein%20-%20Kendis.mp3",
    "length": 174.0,
    "series": "Nick Lucas",
    "title": "If I Had My Way",
    "date": "1946",
    "item": "https://archive.org/details/78_if-i-had-my-way_nick-lucas-klein-kendis_gbia0054803b"
   },
   {
    "src": "https://archive.org/download/78_everyone-is-looking-for-the-rainbow_nick-lucas-and-his-orchestra-marks-koppell_gbia0037491b/Everyone%20is%20Looking%20for%20the%20-%20Nick%20Lucas%20and%20his%20Orchestra.mp3",
    "length": 174.0,
    "series": "Nick Lucas and his Orchestra",
    "title": "Everyone is Looking for the Rainbow",
    "date": "1946",
    "item": "https://archive.org/details/78_everyone-is-looking-for-the-rainbow_nick-lucas-and-his-orchestra-marks-koppell_gbia0037491b"
   },
   {
    "src": "https://archive.org/download/78_blue-of-the-night_russ-columbo-turk-crosby-ahlert_gbia0011366b/Blue%20of%20the%20Night%20-%20Russ%20Columbo%20-%20Turk%20-%20Crosby.mp3",
    "length": 206.0,
    "series": "Russ Columbo",
    "title": "Blue of the Night",
    "date": "1932",
    "item": "https://archive.org/details/78_blue-of-the-night_russ-columbo-turk-crosby-ahlert_gbia0011366b"
   },
   {
    "src": "https://archive.org/download/78_gene-austin-blues_gene-austin-austin_gbia0222458b/GENE%20AUSTIN%20BLUES%20-%20GENE%20AUSTIN%20-%20AUSTIN.mp3",
    "length": 200.21,
    "series": "Gene Austin",
    "title": "Blues",
    "date": "1945",
    "item": "https://archive.org/details/78_gene-austin-blues_gene-austin-austin_gbia0222458b"
   },
   {
    "src": "https://archive.org/download/78_to-love-again_vic-damone-percy-faith-his-orchestra-and-chorus-n-washington-stoloff-_gbia3025737a/TO%20LOVE%20AGAIN%20-%20VIC%20DAMONE%20-%20Percy%20Faith%20%26%20His%20Orchestra%20And%20Chorus.mp3",
    "length": 210.0,
    "series": "Vic Damone",
    "title": "To Love Again",
    "date": "1956",
    "item": "https://archive.org/details/78_to-love-again_vic-damone-percy-faith-his-orchestra-and-chorus-n-washington-stoloff-_gbia3025737a"
   },
   {
    "src": "https://archive.org/download/78_sunrise-follows-sunset_bob-eberly-heathertones-danny-mendelson-and-orch-lamarge-jo_gbia0024304b/Sunrise%20Follows%20Sunset%20-%20Bob%20Eberly%20-%20Heathertones.mp3",
    "length": 189.0,
    "series": "Bob Eberly",
    "title": "Sunrise Follows Sunset",
    "date": "1950",
    "item": "https://archive.org/details/78_sunrise-follows-sunset_bob-eberly-heathertones-danny-mendelson-and-orch-lamarge-jo_gbia0024304b"
   },
   {
    "src": "https://archive.org/download/78_homesick-thats-all-the-night-is-young-and-youre-so-beautiful_frank-sinatra-frank-si_gbia0567535a/HOMESICK%2C%20THAT%27S%20ALL%3B%20THE%20NIGHT%20IS%20YOUNG%20A.mp3",
    "length": 328.0,
    "series": "Frank Sinatra",
    "title": "Homesick, That's All; the Night is Young and You're So Beautiful",
    "date": "1946",
    "item": "https://archive.org/details/78_homesick-thats-all-the-night-is-young-and-youre-so-beautiful_frank-sinatra-frank-si_gbia0567535a"
   },
   {
    "src": "https://archive.org/download/InTheStillOfTheNightMauriceWinnickAlBowlly/In%20The%20Still%20Of%20The%20Night%20-%20Maurice%20Winnick%20-%20Al%20Bowlly.mp3",
    "length": 176.0,
    "series": "Maurice Winnick - Al Bowlly",
    "title": "In The Still Of The Night - Maurice Winnick - Al Bowlly",
    "date": "1938",
    "item": "https://archive.org/details/InTheStillOfTheNightMauriceWinnickAlBowlly"
   },
   {
    "src": "https://archive.org/download/78_riders-in-the-sky_vaughn-monroe-and-his-orchestra-vaughn-monroe-and-the-quartette-s_gbia0122980a/RIDERS%20IN%20THE%20SKY%20-%20Vaughn%20Monroe%20And%20His%20Orchestra.mp3",
    "length": 183.0,
    "series": "Vaughn Monroe And His Orchestra",
    "title": "Riders in the Sky",
    "date": "1949",
    "item": "https://archive.org/details/78_riders-in-the-sky_vaughn-monroe-and-his-orchestra-vaughn-monroe-and-the-quartette-s_gbia0122980a"
   },
   {
    "src": "https://archive.org/download/78_buddy-clark-substitutes-raleigh-room-with-hildegarde_buddy-clark-harry-sosnik-orche_gbia0354810a/BUDDY%20CLARK%20SUBSTITUTES%20RALEIGH%20ROOM%20WITH%20HI%20-%20BUDDY%20CLARK.mp3",
    "length": 325.25,
    "series": "Buddy Clark",
    "title": "Substitutes Raleigh Room with Hildegarde",
    "date": "1946",
    "item": "https://archive.org/details/78_buddy-clark-substitutes-raleigh-room-with-hildegarde_buddy-clark-harry-sosnik-orche_gbia0354810a"
   },
   {
    "src": "https://archive.org/download/everyone-is-sayin-hello-again/Everyone%20Is%20Sayin%27%20Hello%20Again.mp3",
    "length": 159.0,
    "series": "King Cole Trio",
    "title": "Everyone Is Sayin' Hello Again",
    "date": "1946",
    "item": "https://archive.org/details/everyone-is-sayin-hello-again"
   },
   {
    "src": "https://archive.org/download/78_with-all-my-heart-and-soul_perry-como-mitchell-ayres-and-his-orchestra-adams-stock_gbia7000922b/WITH%20ALL%20MY%20HEART%20AND%20SOUL%20-%20PERRY%20COMO%20-%20Mitchell%20Ayres%20and%20his%20Orchestra.mp3",
    "length": 188.83,
    "series": "Perry Como",
    "title": "With All My Heart and Soul",
    "date": "1951",
    "item": "https://archive.org/details/78_with-all-my-heart-and-soul_perry-como-mitchell-ayres-and-his-orchestra-adams-stock_gbia7000922b"
   },
   {
    "src": "https://archive.org/download/78_negra-consentida-stuff-like-that-there_andy-russell-betty-hutton-pardave-harper-li_gbia0520182b/NEGRA%20CONSENTIDA%3B%20STUFF%20LIKE%20THAT%20THERE%20-%20Andy%20Russell.mp3",
    "length": 335.0,
    "series": "Andy Russell",
    "title": "Negra Consentida; Stuff Like That There",
    "date": "1945",
    "item": "https://archive.org/details/78_negra-consentida-stuff-like-that-there_andy-russell-betty-hutton-pardave-harper-li_gbia0520182b"
   },
   {
    "src": "https://archive.org/download/78_cindy-oh-cindy_eddie-fisher-hugo-winterhalters-orchestra-and-chorus-barron-long_gbia7011711a/CINDY%2C%20OH%20CINDY%20-%20EDDIE%20FISHER%20-%20Hugo%20Winterhalter%27s%20Orchestra%20and%20Chorus.mp3",
    "length": 181.27,
    "series": "Eddie Fisher",
    "title": "Cindy, Oh Cindy",
    "date": "1956",
    "item": "https://archive.org/details/78_cindy-oh-cindy_eddie-fisher-hugo-winterhalters-orchestra-and-chorus-barron-long_gbia7011711a"
   },
   {
    "src": "https://archive.org/download/78_the-nearness-of-you-tu-proximidad_harry-james-and-his-orchestra-dick-haymes-washi_gbia0062434b/The%20Nearness%20of%20You%20%28Tu%20Pr%20-%20Harry%20James%20and%20his%20Orchestra.mp3",
    "length": 159.0,
    "series": "Harry James and his Orchestra",
    "title": "The Nearness of You (Tu Proximidad)",
    "date": "1940",
    "item": "https://archive.org/details/78_the-nearness-of-you-tu-proximidad_harry-james-and-his-orchestra-dick-haymes-washi_gbia0062434b"
   },
   {
    "src": "https://archive.org/download/78_how-dye-do-and-shake-hands_betty-hutton-dinah-shore-phil-harris-tony-martin-henri_gbia7000062b/HOW%20D%27YE%20DO%20AND%20SHAKE%20HANDS%20-%20BETTY%20HUTTON.mp3",
    "length": 179.42,
    "series": "Betty Hutton",
    "title": "How D'ye Do and Shake Hands",
    "date": "1951",
    "item": "https://archive.org/details/78_how-dye-do-and-shake-hands_betty-hutton-dinah-shore-phil-harris-tony-martin-henri_gbia7000062b"
   },
   {
    "src": "https://archive.org/download/78_deep-night_tommy-dorsey-and-his-orchestra-rudy-vallee-charlie-henderson_gbia0011422b/Deep%20Night%20-%20Tommy%20Dorsey%20and%20His%20Orchestra.mp3",
    "length": 211.0,
    "series": "Tommy Dorsey and His Orchestra",
    "title": "Deep Night",
    "date": "1941",
    "item": "https://archive.org/details/78_deep-night_tommy-dorsey-and-his-orchestra-rudy-vallee-charlie-henderson_gbia0011422b"
   },
   {
    "src": "https://archive.org/download/78_i-couldnt-believe-my-eyes_rudy-vallee-and-his-connecticut-yankees-samuels-whitcup_gbia0037478b/I%20Couldn%27t%20Believe%20My%20Eyes%20-%20Rudy%20Vallee%20and%20His%20Connecticut%20Yankees.mp3",
    "length": 206.0,
    "series": "Rudy Vallee and His Connecticut Yankees",
    "title": "I Couldn't Believe My Eyes",
    "date": "1935",
    "item": "https://archive.org/details/78_i-couldnt-believe-my-eyes_rudy-vallee-and-his-connecticut-yankees-samuels-whitcup_gbia0037478b"
   },
   {
    "src": "https://archive.org/download/why-does-it-have-to-be-me/Why%20Does%20It%20Have%20To%20Be%20Me.mp3",
    "length": 185.09,
    "series": "Tony Bennett - Percy Faith & his Orch. & Chorus",
    "title": "Why Does It Have To Be Me?",
    "date": "1953",
    "item": "https://archive.org/details/why-does-it-have-to-be-me"
   },
   {
    "src": "https://archive.org/download/78_in-the-wee-small-hours_frankie-laine-elliott-james_gbia0077416a/In%20the%20Wee%20Small%20Hours%20-%20Frankie%20Laine%20-%20Elliott.mp3",
    "length": 163.0,
    "series": "Frankie Laine",
    "title": "In the Wee Small Hours",
    "date": "1944",
    "item": "https://archive.org/details/78_in-the-wee-small-hours_frankie-laine-elliott-james_gbia0077416a"
   },
   {
    "src": "https://archive.org/download/you-wont-be-satisfied-until-you-break-my-heart/You%20Won%27t%20Be%20Satisfied%20%28Until%20You%20Break%20My%20Heart%29.mp3",
    "length": 185.38,
    "series": "Les Brown - Orchestra - Doris Day",
    "title": "You Won't Be Satisfied (Until You Break My Heart)",
    "date": "1945",
    "item": "https://archive.org/details/you-wont-be-satisfied-until-you-break-my-heart"
   },
   {
    "src": "https://archive.org/download/78_alouetta_rudy-vallee-rudy-vallee-and-the-sportsmen-and-orchestra-collins-h.-driggs_gbia0000499a/Alouetta%20-%20Rudy%20Vallee%20-%20Rudy%20Vallee%20and%20The%20Sportsmen%20and%20Orchestra.mp3",
    "length": 173.0,
    "series": "Rudy Vallee",
    "title": "Alouetta",
    "date": "1946",
    "item": "https://archive.org/details/78_alouetta_rudy-vallee-rudy-vallee-and-the-sportsmen-and-orchestra-collins-h.-driggs_gbia0000499a"
   },
   {
    "src": "https://archive.org/download/78_silent-night-holy-night_bing-crosby-2023_wave/silent%20night%20holy%20night_bing%20crosby_2023.mp3",
    "length": 168.0,
    "series": "Bing Crosby",
    "title": "Silent Night, Holy Night",
    "date": "1942",
    "item": "https://archive.org/details/78_silent-night-holy-night_bing-crosby-2023_wave"
   },
   {
    "src": "https://archive.org/download/78_3256-Whaterver-will-be-will-be/3256-Whaterver-will-be-will-be.mp3",
    "length": 118.83,
    "series": "Doris Day",
    "title": "Whatever will be will be",
    "date": "1956",
    "item": "https://archive.org/details/78_3256-Whaterver-will-be-will-be"
   },
   {
    "src": "https://archive.org/download/78_born-to-be-blue_mel-torme-sonny-burke-and-his-orchestra-torme-wells_gbia0072499b/Born%20to%20Be%20Blue%20-%20Mel%20Torme%20-%20Sonny%20Burke%20and%20his%20Orchestra.mp3",
    "length": 163.0,
    "series": "Mel Torme",
    "title": "Born to Be Blue",
    "date": "1946",
    "item": "https://archive.org/details/78_born-to-be-blue_mel-torme-sonny-burke-and-his-orchestra-torme-wells_gbia0072499b"
   },
   {
    "src": "https://archive.org/download/78_you-wont-be-satisfied-honeydripper_les-brown-doris-day-cab-calloway-and-his-orchest_gbia0526135a/YOU%20WON%27T%20BE%20SATISFIED%3B%20HONEYDRIPPER%20-%20Les%20Brown.mp3",
    "length": 371.0,
    "series": "Les Brown",
    "title": "You Won't Be Satisfied; Honeydripper",
    "date": "1946",
    "item": "https://archive.org/details/78_you-wont-be-satisfied-honeydripper_les-brown-doris-day-cab-calloway-and-his-orchest_gbia0526135a"
   },
   {
    "src": "https://archive.org/download/hell-have-to-cross-the-alantic-to-get-to-the-pacific/He%60ll%20Have%20To%20Cross%20The%20Atlantic%20%28To%20Get%20To%20The%20Pacific%29.mp3",
    "length": 186.65,
    "series": "Les Brown and his Orchestra - Doris Day",
    "title": "He`ll Have To Cross The Atlantic (To Get To The Pacific)",
    "date": "1945",
    "item": "https://archive.org/details/hell-have-to-cross-the-alantic-to-get-to-the-pacific"
   },
   {
    "src": "https://archive.org/download/78_bakery-blues_jo-stafford-and-her-v-disc-play-boys-billy-butterfield-lou-mcgarity-ha_gbia0382465b/BAKERY%20BLUES%20-%20Jo%20Stafford%20and%20her%20V-Disc%20Play%20Boys.mp3",
    "length": 288.51,
    "series": "Jo Stafford and her V-Disc Play Boys",
    "title": "Bakery Blues",
    "date": "1945",
    "item": "https://archive.org/details/78_bakery-blues_jo-stafford-and-her-v-disc-play-boys-billy-butterfield-lou-mcgarity-ha_gbia0382465b"
   },
   {
    "src": "https://archive.org/download/78_if-thats-the-way-you-feel_billy-eckstine-and-his-orchestra-billy-eckstine-g.-valen_gbia0003810a/If%20That%27s%20The%20Way%20You%20Feel%20-%20Billy%20Eckstine%20and%20his%20Orchestra.mp3",
    "length": 167.0,
    "series": "Billy Eckstine and his Orchestra",
    "title": "If That's The Way You Feel",
    "date": "1944",
    "item": "https://archive.org/details/78_if-thats-the-way-you-feel_billy-eckstine-and-his-orchestra-billy-eckstine-g.-valen_gbia0003810a"
   },
   {
    "src": "https://archive.org/download/78_youll-never-get-away_vaughn-monroe-his-orchestra-vaughn-monroe-the-moon-maids-wh_gbia7000076a/YOU%27LL%20NEVER%20GET%20AWAY%20-%20VAUGHN%20MONROE%20%26%20HIS%20ORCHESTRA.mp3",
    "length": 140.5,
    "series": "Vaughn Monroe & His Orchestra",
    "title": "You'll Never Get Away",
    "date": "1952",
    "item": "https://archive.org/details/78_youll-never-get-away_vaughn-monroe-his-orchestra-vaughn-monroe-the-moon-maids-wh_gbia7000076a"
   },
   {
    "src": "https://archive.org/download/heartaches_20211010/Heartaches%20%28restored%29.mp3",
    "length": 210.5,
    "series": "Sid Phillips And His Orchestra, Al Bowlly",
    "title": "Heartaches",
    "date": "1931",
    "item": "https://archive.org/details/heartaches_20211010"
   },
   {
    "src": "https://archive.org/download/TheVeryThoughtOfYouRayNobleAlBowlly/The%20Very%20Thought%20Of%20You%20-%20Ray%20Noble%20-%20Al%20Bowlly.mp3",
    "length": 211.0,
    "series": "Ray Noble - Al Bowlly",
    "title": "The Very Thought Of You - Ray Noble - Al Bowlly",
    "date": "1934",
    "item": "https://archive.org/details/TheVeryThoughtOfYouRayNobleAlBowlly"
   },
   {
    "src": "https://archive.org/download/78_down-in-nashville-tennessee-chick-a-ling-bone_dinah-shore-and-the-mellowmen-henr_gbia7000094b/DOWN%20IN%20NASHVILLE%2C%20TENNESS%20-%20DINAH%20SHORE%20and%20The%20Mellowmen.mp3",
    "length": 150.84,
    "series": "Dinah Shore and the Mellowmen",
    "title": "Down in Nashville, Tennessee (Chick-A-Ling-Bone)",
    "date": "1951",
    "item": "https://archive.org/details/78_down-in-nashville-tennessee-chick-a-ling-bone_dinah-shore-and-the-mellowmen-henr_gbia7000094b"
   },
   {
    "src": "https://archive.org/download/star-dust/Star%20Dust.mp3",
    "length": 190.94,
    "series": "Tommy Dorsey and his Orchestra - Frank Sinatra - The Pied Pipers",
    "title": "Star Dust",
    "date": "1940",
    "item": "https://archive.org/details/star-dust"
   },
   {
    "src": "https://archive.org/download/10121-b-hes-gone-away-r-7066275/10121-A%20-%20Barbara%20Allen%20%5Br7066275%5D.mp3",
    "length": 161.0,
    "series": "Jo Stafford",
    "title": "Barbara Allen",
    "date": "1948",
    "item": "https://archive.org/details/10121-b-hes-gone-away-r-7066275"
   },
   {
    "src": "https://archive.org/download/78_in-the-blue-evening_tommy-dorsey-and-his-orchestra-frank-sinatra_gbia0545774a/IN%20THE%20BLUE%20EVENING%20-%20Tommy%20Dorsey%20and%20his%20Orchestra.mp3",
    "length": 183.0,
    "series": "Tommy Dorsey and his Orchestra",
    "title": "In the Blue Evening",
    "date": "1943",
    "item": "https://archive.org/details/78_in-the-blue-evening_tommy-dorsey-and-his-orchestra-frank-sinatra_gbia0545774a"
   },
   {
    "src": "https://archive.org/download/78_outside-of-heaven_eddie-fisher-with-hugo-winterhalters-orchestra-chorus-gallop-c_gbia0021822a/Outside%20of%20Heaven%20-%20Eddie%20Fisher%20with%20Hugo%20Winterhalter%27s%20Orchestra%20%26%20Chorus.mp3",
    "length": 164.0,
    "series": "Eddie Fisher with Hugo Winterhalter's Orchestra & Chorus",
    "title": "Outside of Heaven",
    "date": "1953",
    "item": "https://archive.org/details/78_outside-of-heaven_eddie-fisher-with-hugo-winterhalters-orchestra-chorus-gallop-c_gbia0021822a"
   },
   {
    "src": "https://archive.org/download/dont-you-notice-anything-new_202107/Don%27t%20You%20Notice%20Anything%20New.mp3",
    "length": 169.66,
    "series": "Andy Russell - Paul Weston and his Orchestra",
    "title": "Don't You Notice Anything New",
    "date": "1944",
    "item": "https://archive.org/details/dont-you-notice-anything-new_202107"
   },
   {
    "src": "https://archive.org/download/PaulWhitemanwithBingCrosby/PaulWhitemanwithBingCrosby-MakeBelieve.mp3",
    "length": 178.0,
    "series": "Paul Whiteman with Bing Crosby",
    "title": "Make Believe",
    "date": "1928",
    "item": "https://archive.org/details/PaulWhitemanwithBingCrosby"
   },
   {
    "src": "https://archive.org/download/57643blaughcoolclownr13299386/57-643-B%20-%20Laugh%20-%20Cool%20Clown%20%5Br13299386%5D.mp3",
    "length": 194.0,
    "series": "Nat King Cole Trio",
    "title": "57 643 B Laugh Cool Clown",
    "date": "1950",
    "item": "https://archive.org/details/57643blaughcoolclownr13299386"
   },
   {
    "src": "https://archive.org/download/78_all-of-me-quireme-del-todo-good-night-ladies_nick-lucas-and-his-troubadours_gbia0386951a/ALL%20OF%20ME%20%28Qui%C3%A9reme%20del%20T%20-%20NICK%20LUCAS%20AND%20HIS%20TROUBADOURS.mp3",
    "length": 274.3,
    "series": "Nick Lucas and His Troubadours",
    "title": "All of ME (Quiéreme Del Todo); Good Night Ladies",
    "date": "1932",
    "item": "https://archive.org/details/78_all-of-me-quireme-del-todo-good-night-ladies_nick-lucas-and-his-troubadours_gbia0386951a"
   },
   {
    "src": "https://archive.org/download/78_and-mimi_mel-torm-kennedy-simon_gbia0183350b/AND%20MIMI%20-%20MEL%20TORM%C3%89%20-%20Kennedy%20-%20Simon.mp3",
    "length": 189.0,
    "series": "Mel Tormé",
    "title": "....and Mimi",
    "date": "1947",
    "item": "https://archive.org/details/78_and-mimi_mel-torm-kennedy-simon_gbia0183350b"
   },
   {
    "src": "https://archive.org/download/c1400bhajjibabar10426659/C-1400-B%20-%20Hajji%20Baba%20%5Br10426659%5D.mp3",
    "length": 184.0,
    "series": "Nat King Cole",
    "title": "Hajji Baba",
    "date": "1954",
    "item": "https://archive.org/details/c1400bhajjibabar10426659"
   },
   {
    "src": "https://archive.org/download/233249460660/Midnight%2C%20The%20Stars%20And%20You.mp3",
    "length": 211.28,
    "series": "Ray Noble And His Orchestra, Al Bowlly",
    "title": "Midnight, The Stars And You",
    "date": "1934",
    "item": "https://archive.org/details/233249460660"
   },
   {
    "src": "https://archive.org/download/stranger-in-paradise/Stranger%20In%20Paradise.mp3",
    "length": 183.22,
    "series": "Tony Bennett - Percy Faith & his Orchestra & Chorus",
    "title": "Stranger In Paradise",
    "date": "1953",
    "item": "https://archive.org/details/stranger-in-paradise"
   },
   {
    "src": "https://archive.org/download/82487-bing-crosby-white-christmas/82487%20Bing%20Crosby%20-%20White%20Christmas.mp3",
    "length": 186.0,
    "series": "Bing Crosby - Gesang, John Scott Trotter & His Orchestra, Ken Darby Singers",
    "title": "White Christmas (Irving Berlin)",
    "date": "1951",
    "item": "https://archive.org/details/82487-bing-crosby-white-christmas"
   },
   {
    "src": "https://archive.org/download/78_love-you-funny-thing_mel-torme-ruby-green-stept_gbia0043092/01%20-%20I%27ll%20Always%20Be%20in%20Love%20with%20You%20-%20Mel%20Torme.mp3",
    "length": 187.0,
    "series": "Ruby",
    "title": "I'll Always Be in Love with You; Love, You Funny Thing",
    "date": "1947",
    "item": "https://archive.org/details/78_love-you-funny-thing_mel-torme-ruby-green-stept_gbia0043092"
   },
   {
    "src": "https://archive.org/download/78_melancholy-madeline_robert-scherman-oscar-moore-frankie-laine-the-three-blazers_gbia0076706b/Melancholy%20Madeline%20-%20Robert%20Scherman%20-%20Oscar%20Moore.mp3",
    "length": 216.0,
    "series": "Robert Scherman",
    "title": "Melancholy Madeline",
    "date": "1945",
    "item": "https://archive.org/details/78_melancholy-madeline_robert-scherman-oscar-moore-frankie-laine-the-three-blazers_gbia0076706b"
   },
   {
    "src": "https://archive.org/download/78_havana-for-a-night_tony-martin_gbia0343600b/Havana%20for%20A%20Night%20-%20Tony%20Martin.mp3",
    "length": 168.74,
    "series": "Tony Martin",
    "title": "Havana for A Night",
    "date": "1948",
    "item": "https://archive.org/details/78_havana-for-a-night_tony-martin_gbia0343600b"
   },
   {
    "src": "https://archive.org/download/78_one-foot-in-heaven_dean-martin-hal-kanner-orchestra-roth-drake-aycock_gbia0284382a/ONE%20FOOT%20IN%20HEAVEN%20-%20DEAN%20MARTIN%20-%20HAL%20KANNER%20ORCHESTRA.mp3",
    "length": 170.06,
    "series": "Dean Martin",
    "title": "One Foot in Heaven",
    "date": "1948",
    "item": "https://archive.org/details/78_one-foot-in-heaven_dean-martin-hal-kanner-orchestra-roth-drake-aycock_gbia0284382a"
   },
   {
    "src": "https://archive.org/download/1931-USA-Archives-1931-10-09-Russ-Columbo-Orch-Goodnight-Sweetheart/1931%28USA%29Archives19311009RussColumboOrch-GoodnightSweetheart.mp3",
    "length": 218.05,
    "series": "Russ Columbo Orchestra",
    "title": "Goodnight Sweetheart",
    "date": "1931",
    "item": "https://archive.org/details/1931-USA-Archives-1931-10-09-Russ-Columbo-Orch-Goodnight-Sweetheart"
   },
   {
    "src": "https://archive.org/download/78_keep-it-a-secret_dinah-shore-frank-de-vol-and-his-orchestra-jessie-mae-robinson_gbia7000893b/KEEP%20IT%20A%20SECRET%20-%20DINAH%20SHORE%20-%20Frank%20De%20Vol%20and%20his%20Orchestra.mp3",
    "length": 161.57,
    "series": "Dinah Shore",
    "title": "Keep It a Secret",
    "date": "1953",
    "item": "https://archive.org/details/78_keep-it-a-secret_dinah-shore-frank-de-vol-and-his-orchestra-jessie-mae-robinson_gbia7000893b"
   },
   {
    "src": "https://archive.org/download/78_gloomy-sunday_billy-eckstine-and-his-orchestra-billy-eckstine-rezso-seress-sam-m-l_gbia0087820a/Gloomy%20Sunday%20-%20Billy%20Eckstine%20And%20His%20Orchestra.mp3",
    "length": 181.0,
    "series": "Billy Eckstine And His Orchestra",
    "title": "Gloomy Sunday",
    "date": "1946",
    "item": "https://archive.org/details/78_gloomy-sunday_billy-eckstine-and-his-orchestra-billy-eckstine-rezso-seress-sam-m-l_gbia0087820a"
   },
   {
    "src": "https://archive.org/download/78_tip-toe-through-the-tulips_nick-lucas-burke-dubin_gbia0172313a/TIP%20TOE%20THROUGH%20THE%20TULIPS%20-%20NICK%20LUCAS%20-%20Burke.mp3",
    "length": 175.0,
    "series": "Nick Lucas",
    "title": "Tip Toe Through the Tulips",
    "date": "1944",
    "item": "https://archive.org/details/78_tip-toe-through-the-tulips_nick-lucas-burke-dubin_gbia0172313a"
   },
   {
    "src": "https://archive.org/download/78_seems-like-old-times_nick-lucas-and-his-orchestra-lombardo-loeb_gbia0054805a/Seems%20Like%20Old%20Times%20-%20Nick%20Lucas%20and%20his%20Orchestra.mp3",
    "length": 168.0,
    "series": "Nick Lucas and his Orchestra",
    "title": "Seems Like Old Times",
    "date": "1946",
    "item": "https://archive.org/details/78_seems-like-old-times_nick-lucas-and-his-orchestra-lombardo-loeb_gbia0054805a"
   },
   {
    "src": "https://archive.org/download/78_lady-i-love-la-mujer-que-yo-amo_russ-columbo-1908-1934_gbia0285453a/LADY%20I%20LOVE%20%28La%20mujer%20Que%20Yo%20Am%20-%20RUSS%20COLUMBO%20%281908-1934%29.mp3",
    "length": 195.36,
    "series": "Russ Columbo",
    "title": "Lady I Love (La Mujer Que Yo Amo)",
    "date": "1932",
    "item": "https://archive.org/details/78_lady-i-love-la-mujer-que-yo-amo_russ-columbo-1908-1934_gbia0285453a"
   },
   {
    "src": "https://archive.org/download/Victor_20964/%5B1927%5D%20Gene%20Austin%20-%20My%20Blue%20Heaven%3B%20Are%20You%20Thinking%20of%20Me%20To-night%20%5BVictor%2020964%5D/%5BA1%5D%20Gene%20Austin%20-%20My%20Blue%20Heaven.mp3",
    "length": 212.0,
    "series": "Gene Austin",
    "title": "My Blue Heaven / Are You Thinking of Me To-night?",
    "date": "1927",
    "item": "https://archive.org/details/Victor_20964"
   },
   {
    "src": "https://archive.org/download/78_my-heart-cries-for-you-george-stabo-and-his-orchestraaliman/22802%20My%20heart%20cries%20for%20you.mp3",
    "length": 154.07,
    "series": "Vic Damone",
    "title": "My heart cries for you",
    "date": "1951",
    "item": "https://archive.org/details/78_my-heart-cries-for-you-george-stabo-and-his-orchestraaliman"
   },
   {
    "src": "https://archive.org/download/78_no-greater-love_bob-eberly-heathertones-danny-mendelson-and-orch-jones-symes_gbia0024304a/No%20Greater%20Love%20-%20Bob%20Eberly%20-%20Heathertones.mp3",
    "length": 174.0,
    "series": "Bob Eberly",
    "title": "No Greater Love",
    "date": "1950",
    "item": "https://archive.org/details/78_no-greater-love_bob-eberly-heathertones-danny-mendelson-and-orch-jones-symes_gbia0024304a"
   },
   {
    "src": "https://archive.org/download/columbia-36868-b-cradle-song/Columbia%2036868B%20-%20Cradle%20Song%20-%203.0%20CT%20300N-16%20EQ.mp3",
    "length": 186.98,
    "series": "Frank Sinatra",
    "title": "Cradle Song",
    "date": "1944",
    "item": "https://archive.org/details/columbia-36868-b-cradle-song"
   },
   {
    "src": "https://archive.org/download/78_this-is-the-beginning-of-the-end_buddy-clark-bud-freeman-morey-feld-jess-stacy-mart_gbia0101628b/This%20Is%20the%20Beginning%20of%20the%20End%20-%20Buddy%20Clark.mp3",
    "length": 207.0,
    "series": "Buddy Clark",
    "title": "This Is the Beginning of the End",
    "date": "1940",
    "item": "https://archive.org/details/78_this-is-the-beginning-of-the-end_buddy-clark-bud-freeman-morey-feld-jess-stacy-mart_gbia0101628b"
   },
   {
    "src": "https://archive.org/download/route-66_202608/Route%2066.mp3",
    "length": 180.0,
    "series": "King Cole Trio",
    "title": "Route 66",
    "date": "1946",
    "item": "https://archive.org/details/route-66_202608"
   },
   {
    "src": "https://archive.org/download/victor-20-2142-b-easter-parade/Victor%2020-2142B%20-%20Easter%20Parade%20-%203.0%20CT%20800N-13.7%20EQ.mp3",
    "length": 151.59,
    "series": "Perry Como",
    "title": "Easter Parade",
    "date": "1947",
    "item": "https://archive.org/details/victor-20-2142-b-easter-parade"
   },
   {
    "src": "https://archive.org/download/78_after-awhile-sweet-dreams-sweetheart_andy-russell-mitchell-ayres-and-his-orchest_gbia0346959b/AFTER%20AWHILE%20%3B%20SWEET%20DREAMS%2C%20SWEETHEART%20-%20Andy%20Russell.mp3",
    "length": 348.6,
    "series": "Andy Russell",
    "title": "After Awhile ; Sweet Dreams, Sweetheart",
    "date": "1945",
    "item": "https://archive.org/details/78_after-awhile-sweet-dreams-sweetheart_andy-russell-mitchell-ayres-and-his-orchest_gbia0346959b"
   },
   {
    "src": "https://archive.org/download/78_im-always-hearing-wedding-bells_eddie-fisher-hugo-winterhalters-orchestra-chorus-me_gbia0538900b/I%27m%20always%20hearing%29%20WEDDING%20BELLS%20-%20EDDIE%20FISHER.mp3",
    "length": 162.0,
    "series": "Eddie Fisher",
    "title": "(I'm Always Hearing) Wedding Bells",
    "date": "1955",
    "item": "https://archive.org/details/78_im-always-hearing-wedding-bells_eddie-fisher-hugo-winterhalters-orchestra-chorus-me_gbia0538900b"
   },
   {
    "src": "https://archive.org/download/78_i-wouldnt-take-a-million-no-la-doy-mi-por-una-million_harry-james-and-his-orches_gbia0062461a/I%20Wouldn%27t%20Take%20a%20Million%20%20-%20Harry%20James%20and%20his%20Orchestra.mp3",
    "length": 179.0,
    "series": "Harry James and his Orchestra",
    "title": "I Wouldn't Take a Million (No La Doy Mi Por Una Million)",
    "date": "1940",
    "item": "https://archive.org/details/78_i-wouldnt-take-a-million-no-la-doy-mi-por-una-million_harry-james-and-his-orches_gbia0062461a"
   },
   {
    "src": "https://archive.org/download/Mercury_5345/%5B1949%5D%20Frankie%20Laine%20-%20Mule%20Train%3B%20Carry%20Me%20Back%20to%20Old%20Virginney%20%5BMercury%205345%5D/%5BA1%5D%20Frankie%20Laine%20with%20The%20Muleskinners%20-%20Mule%20Train.mp3",
    "length": 154.0,
    "series": "Frankie Laine",
    "title": "Mule Train / Carry Me Back to Old Virginney",
    "date": "1949",
    "item": "https://archive.org/details/Mercury_5345"
   },
   {
    "src": "https://archive.org/download/78_six-women-me-and-henry-the-eighth_rudy-vallee-yellen-caesar-henderson_gbia0014720b/Six%20Women%20%28Me%20and%20Henry%20the%20Eighth%29%20-%20Rudy%20Vallee.mp3",
    "length": 190.0,
    "series": "Rudy Vallee",
    "title": "Six Women (Me and Henry the Eighth)",
    "date": "1940",
    "item": "https://archive.org/details/78_six-women-me-and-henry-the-eighth_rudy-vallee-yellen-caesar-henderson_gbia0014720b"
   },
   {
    "src": "https://archive.org/download/78_when-the-red-red-robin-comes-bob-bob-bobbin-along_doris-day-paul-weston-and-his-orc_gbia3025661b/WHEN%20THE%20RED%2C%20RED%20ROBIN%20COMES%20BOB%2C%20BOB%2C%20BOBBIN.mp3",
    "length": 123.0,
    "series": "Doris Day",
    "title": "When the Red, Red Robin Comes Bob, Bob, Bobbin' Along",
    "date": "1956",
    "item": "https://archive.org/details/78_when-the-red-red-robin-comes-bob-bob-bobbin-along_doris-day-paul-weston-and-his-orc_gbia3025661b"
   },
   {
    "src": "https://archive.org/download/78_2nd-balcony-jump_billy-eckstine-and-his-orchestra-billy-eckstine-gerald-valentine_gbia0072649b/2nd%20Balcony%20Jump%20-%20Billy%20Eckstine%20and%20his%20Orchestra.mp3",
    "length": 179.0,
    "series": "Billy Eckstine and his Orchestra",
    "title": "2nd Balcony Jump",
    "date": "1946",
    "item": "https://archive.org/details/78_2nd-balcony-jump_billy-eckstine-and-his-orchestra-billy-eckstine-gerald-valentine_gbia0072649b"
   },
   {
    "src": "https://archive.org/download/78_hound-dog_vaughn-monroe-his-orchestra-vaughn-monroe-smith-lee_gbia7000076b/HOUND%20DOG%20-%20VAUGHN%20MONROE%20%26%20HIS%20ORCHESTRA.mp3",
    "length": 181.34,
    "series": "Vaughn Monroe & His Orchestra",
    "title": "Hound Dog",
    "date": "1952",
    "item": "https://archive.org/details/78_hound-dog_vaughn-monroe-his-orchestra-vaughn-monroe-smith-lee_gbia7000076b"
   },
   {
    "src": "https://archive.org/download/what-a-diffrence-a-day-made_202107/What%20A%20Diff%27rence%20A%20Day%20Made.mp3",
    "length": 177.98,
    "series": "Andy Russell - Paul Weston and his Orchestra",
    "title": "What A Diff'rence A Day Made",
    "date": "1944",
    "item": "https://archive.org/details/what-a-diffrence-a-day-made_202107"
   },
   {
    "src": "https://archive.org/download/78_ill-always-be-in-love-with-you_mel-torm-kalman-ruby_gbia8005463/02%20-%20THREE%20LITTLE%20WORDS%20-%20MEL%20TORM%C3%89%20-%20Kalman%20-%20Ruby.mp3",
    "length": 168.0,
    "series": "Mel Tormé, Kalman, Ruby",
    "title": "Three Little Words",
    "date": "1947",
    "item": "https://archive.org/details/78_ill-always-be-in-love-with-you_mel-torm-kalman-ruby_gbia8005463"
   },
   {
    "src": "https://archive.org/download/78_to-each-his-own_tony-martin-the-starlighters-al-sack-and-his-orchestra-tony-martin_gbia0047589a/To%20Each%20His%20Own%20-%20Tony%20Martin%20-%20The%20Starlighters.mp3",
    "length": 195.0,
    "series": "Tony Martin",
    "title": "To Each His Own",
    "date": "1946",
    "item": "https://archive.org/details/78_to-each-his-own_tony-martin-the-starlighters-al-sack-and-his-orchestra-tony-martin_gbia0047589a"
   },
   {
    "src": "https://archive.org/download/78_which-way-did-my-heart-go_dean-martin-nat-brandwynne-and-his-orchestra-carroll-rose_gbia0054810a/Which%20Way%20Did%20My%20Heart%20Go%20-%20Dean%20Martin%20-%20Nat%20Brandwynne%20and%20his%20Orchestra.mp3",
    "length": 176.0,
    "series": "Dean Martin",
    "title": "Which Way Did My Heart Go",
    "date": "1946",
    "item": "https://archive.org/details/78_which-way-did-my-heart-go_dean-martin-nat-brandwynne-and-his-orchestra-carroll-rose_gbia0054810a"
   },
   {
    "src": "https://archive.org/download/1932-USA-Archives-1932-01-12-Russ-Columbo-Orch-Just-Firends/1932%28USA%29Archives19320112RussColumboOrch-JustFirends.mp3",
    "length": 190.39,
    "series": "Russ Columbo Orchestra",
    "title": "Just Firends",
    "date": "1932",
    "item": "https://archive.org/details/1932-USA-Archives-1932-01-12-Russ-Columbo-Orch-Just-Firends"
   },
   {
    "src": "https://archive.org/download/78_pakistan_dinah-shore-rogan-williams-harry-geller-bregman_gbia7001374b/PAKISTAN%20-%20DINAH%20SHORE%20-%20Rogan%20-%20Williams.mp3",
    "length": 131.71,
    "series": "Dinah Shore",
    "title": "Pakistan",
    "date": "1954",
    "item": "https://archive.org/details/78_pakistan_dinah-shore-rogan-williams-harry-geller-bregman_gbia7001374b"
   },
   {
    "src": "https://archive.org/download/Victor_20411/%5B1928%5D%20Gene%20Austin%20-%20Thinking%20of%20You%20%28I%27ve%20Grown%20So%20Lonesome%29%3B%20Sunday%20%5BVictor%2020411%5D/%5BA1%5D%20Gene%20Austin%20-%20Thinking%20of%20You%20%28I%27ve%20Grown%20So%20Lonesome%29.mp3",
    "length": 187.0,
    "series": "Gene Austin",
    "title": "Thinking of You (I’ve Grown So Lonesome) / Sunday",
    "date": "1928",
    "item": "https://archive.org/details/Victor_20411"
   },
   {
    "src": "https://archive.org/download/78_music-by-the-angels-george-stabo-and-his-orchestraaliman-symes-vic/22801%20Music%20by%20the%20angels.mp3",
    "length": 191.66,
    "series": "Vic Damone",
    "title": "Music by the angels",
    "date": "1951",
    "item": "https://archive.org/details/78_music-by-the-angels-george-stabo-and-his-orchestraaliman-symes-vic"
   },
   {
    "src": "https://archive.org/download/78_i-only-have-eyes-for-you_frank-sinatra_2024_wave/i%20only%20have%20eyes%20for%20you_frank%20sinatra_2024.mp3",
    "length": 199.0,
    "series": "Frank Sinatra",
    "title": "I Only Have Eyes for You",
    "date": "1946",
    "item": "https://archive.org/details/78_i-only-have-eyes-for-you_frank-sinatra_2024_wave"
   },
   {
    "src": "https://archive.org/download/78_from-another-world-de-autro-mundo_buddy-clark-bud-freeman-morey-feld-jess-stacy-m_gbia0101627b/From%20Another%20World%20%28De%20Autro%20Mundo%29%20-%20Buddy%20Clark.mp3",
    "length": 165.0,
    "series": "Buddy Clark",
    "title": "From Another World (De Autro Mundo)",
    "date": "1940",
    "item": "https://archive.org/details/78_from-another-world-de-autro-mundo_buddy-clark-bud-freeman-morey-feld-jess-stacy-m_gbia0101627b"
   },
   {
    "src": "https://archive.org/download/i-cant-see-for-lookin/I%20Can%27t%20See%20for%20Lookin%27.mp3",
    "length": 187.0,
    "series": "King Cole Trio",
    "title": "I Can't See For Lookin'",
    "date": "1943",
    "item": "https://archive.org/details/i-cant-see-for-lookin"
   },
   {
    "src": "https://archive.org/download/78_cara-cara-bella-bella_perry-como-mitchell-ayres-and-his-orchestra-carter-johnson-al_gbia7000922a/CARA%20CARA%20BELLA%20BELLA%20-%20PERRY%20COMO%20-%20Mitchell%20Ayres%20and%20his%20Orchestra.mp3",
    "length": 186.65,
    "series": "Perry Como",
    "title": "Cara Cara Bella Bella",
    "date": "1951",
    "item": "https://archive.org/details/78_cara-cara-bella-bella_perry-como-mitchell-ayres-and-his-orchestra-carter-johnson-al_gbia7000922a"
   },
   {
    "src": "https://archive.org/download/78_may-i-sing-to-you_eddie-fisher-hugo-winterhalter-and-his-orchestra-fisher-tobias-ak_gbia7001378b/MAY%20I%20SING%20TO%20YOU%20-%20EDDIE%20FISHER%20-%20Hugo%20Winterhalter%20and%20his%20Orchestra.mp3",
    "length": 160.97,
    "series": "Eddie Fisher",
    "title": "May I Sing to You",
    "date": "1954",
    "item": "https://archive.org/details/78_may-i-sing-to-you_eddie-fisher-hugo-winterhalter-and-his-orchestra-fisher-tobias-ak_gbia7001378b"
   },
   {
    "src": "https://archive.org/download/78_the-moon-wont-talk-la-luna-no-hablara_harry-james-and-his-orchestra-dick-haymes_gbia0062462a/The%20Moon%20Won%27t%20Talk%20%28La%20Lu%20-%20Harry%20James%20and%20his%20Orchestra.mp3",
    "length": 206.0,
    "series": "Harry James and his Orchestra",
    "title": "The Moon Won't Talk (La Luna No Hablará)",
    "date": "1940",
    "item": "https://archive.org/details/78_the-moon-wont-talk-la-luna-no-hablara_harry-james-and-his-orchestra-dick-haymes_gbia0062462a"
   },
   {
    "src": "https://archive.org/download/78_sixteen-tons_frankie-laine-buddy-cole-and-his-orchestra-and-the-mellomen-merle-trav_gbia3025642a/SIXTEEN%20TONS%20-%20FRANKIE%20LAINE%20-%20Buddy%20Cole%20and%20His%20Orchestra%20And%20The%20Mellomen.mp3",
    "length": 179.0,
    "series": "Frankie Laine",
    "title": "Sixteen Tons",
    "date": "1956",
    "item": "https://archive.org/details/78_sixteen-tons_frankie-laine-buddy-cole-and-his-orchestra-and-the-mellomen-merle-trav_gbia3025642a"
   },
   {
    "src": "https://archive.org/download/78_plaza-6-9423_rudy-vallee-harold-j-rome_gbia0014720a/Plaza%206-9423%20-%20Rudy%20Vallee%20-%20Harold%20J.%20Rome.mp3",
    "length": 218.0,
    "series": "Rudy Vallee",
    "title": "Plaza 6-9423",
    "date": "1940",
    "item": "https://archive.org/details/78_plaza-6-9423_rudy-vallee-harold-j-rome_gbia0014720a"
   },
   {
    "src": "https://archive.org/download/78_i-got-the-sun-in-the-morning_dean-martin-nat-brandywine-and-his-orchestra-irving-be_gbia0487676a/I%20GOT%20THE%20SUN%20IN%20THE%20MORNING%20-%20DEAN%20MARTIN.mp3",
    "length": 177.0,
    "series": "Dean Martin",
    "title": "I Got the Sun in the Morning",
    "date": "1946",
    "item": "https://archive.org/details/78_i-got-the-sun-in-the-morning_dean-martin-nat-brandywine-and-his-orchestra-irving-be_gbia0487676a"
   },
   {
    "src": "https://archive.org/download/78_the-musicians_dinah-shore-betty-hutton-tony-martin-phil-harris-henri-rene-and-his-o_gbia7010745a/THE%20MUSICIANS%20-%20DINAH%20SHORE%20-%20BETTY%20HUTTON.mp3",
    "length": 151.92,
    "series": "Dinah Shore",
    "title": "The Musicians",
    "date": "1951",
    "item": "https://archive.org/details/78_the-musicians_dinah-shore-betty-hutton-tony-martin-phil-harris-henri-rene-and-his-o_gbia7010745a"
   },
   {
    "src": "https://archive.org/download/Victor_21334/%5B1928%5D%20Gene%20Austin%20-%20Ramona%3B%20Girl%20of%20My%20Dreams%20%5BVictor%2021334%5D/%5BA1%5D%20Gene%20Austin%20-%20Ramona.mp3",
    "length": 173.0,
    "series": "Gene Austin",
    "title": "Ramona / Girl of My Dreams",
    "date": "1928",
    "item": "https://archive.org/details/Victor_21334"
   },
   {
    "src": "https://archive.org/download/78_i-cried-for-you_vic-damone-paul-weston-and-his-music-from-hollywood-freed-arnheim-l_gbia3025737b/I%20CRIED%20FOR%20YOU%20-%20VIC%20DAMONE%20-%20Paul%20Weston%20and%20His%20Music%20from%20Hollywood.mp3",
    "length": 166.0,
    "series": "Vic Damone",
    "title": "I Cried for You",
    "date": "1956",
    "item": "https://archive.org/details/78_i-cried-for-you_vic-damone-paul-weston-and-his-music-from-hollywood-freed-arnheim-l_gbia3025737b"
   },
   {
    "src": "https://archive.org/download/78_on-a-little-street-in-singapore-en-una-callejuela-de-singapore_buddy-clark-hill-d_gbia0153742a/On%20A%20Little%20Street%20In%20Singapore%20%28En%20Una%20Call%20-%20Buddy%20Clark.mp3",
    "length": 178.0,
    "series": "Buddy Clark",
    "title": "On A Little Street In Singapore (En Una Callejuela de Singapore)",
    "date": "1939",
    "item": "https://archive.org/details/78_on-a-little-street-in-singapore-en-una-callejuela-de-singapore_buddy-clark-hill-d_gbia0153742a"
   },
   {
    "src": "https://archive.org/download/victor-20-2142-a-song-of-songs/Victor%2020-2142A%20-%20Song%20of%20Songs%20-%203.0%20CT%20800N-13.7%20EQ.mp3",
    "length": 164.34,
    "series": "Perry Como",
    "title": "Song of Songs",
    "date": "1947",
    "item": "https://archive.org/details/victor-20-2142-a-song-of-songs"
   },
   {
    "src": "https://archive.org/download/78_a-girl-a-girl-zoom-ba-di-alli-nella_eddie-fisher-hugo-winterhalters-orchestra-b_gbia7015319a/A%20GIRL%2C%20A%20GIRL%20%28Zoom-BA%20Di%20Alli%20Nella%29%20-%20EDDIE%20FISHER.mp3",
    "length": 152.04,
    "series": "Eddie Fisher",
    "title": "A Girl, a Girl (Zoom-BA Di Alli Nella)",
    "date": "1954",
    "item": "https://archive.org/details/78_a-girl-a-girl-zoom-ba-di-alli-nella_eddie-fisher-hugo-winterhalters-orchestra-b_gbia7015319a"
   },
   {
    "src": "https://archive.org/download/78_a-million-dreams-ago-despues-de-un-million-de-ensuenos_harry-james-and-his-orches_gbia0062461b/A%20Million%20Dreams%20Ago%20%28Desp%20-%20Harry%20James%20and%20his%20Orchestra.mp3",
    "length": 186.0,
    "series": "Harry James and his Orchestra",
    "title": "A Million Dreams Ago (Despues De Un Million De Ensuenos)",
    "date": "1940",
    "item": "https://archive.org/details/78_a-million-dreams-ago-despues-de-un-million-de-ensuenos_harry-james-and-his-orches_gbia0062461b"
   }
  ]
 },
 {
  "id": "afterhours",
  "name": "After Hours",
  "group": "Music",
  "music": true,
  "blurb": "Smoky late-night jazz and torch songs.",
  "card": "art/cards/afterhours.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.8,
   "decrackle": 0.8,
   "tone": 7500
  },
  "tracks": [
   {
    "src": "https://archive.org/download/78_sorry-wrong-rhumba_george-shearing-quintet-geo-shearing-marjorie-hyams-denzil-best_gbia0176682a/SORRY%20WRONG%20RHUMBA%20-%20GEORGE%20SHEARING%20QUINTET.mp3",
    "length": 200.0,
    "series": "George Shearing Quintet",
    "title": "Sorry Wrong Rhumba",
    "date": "1949",
    "item": "https://archive.org/details/78_sorry-wrong-rhumba_george-shearing-quintet-geo-shearing-marjorie-hyams-denzil-best_gbia0176682a"
   },
   {
    "src": "https://archive.org/download/78_all-that-glitters-is-not-gold_mildred-bailey-eddie-sauter-asherman-cornett-kuhn_gbia0009912a/All%20That%20Glitters%20is%20Not%20Gold%20-%20Mildred%20Bailey.mp3",
    "length": 197.0,
    "series": "Mildred Bailey",
    "title": "All That Glitters is Not Gold",
    "date": "1946",
    "item": "https://archive.org/details/78_all-that-glitters-is-not-gold_mildred-bailey-eddie-sauter-asherman-cornett-kuhn_gbia0009912a"
   },
   {
    "src": "https://archive.org/download/ColemanHawkinsSwingFour-CrazyRhythm/Coleman_Hawkins_Swing_Four-Crazy_Rhythm-1943.mp3",
    "length": 195.0,
    "series": "Coleman Hawkins Swing Four",
    "title": "Crazy Rhythm",
    "date": "1943",
    "item": "https://archive.org/details/ColemanHawkinsSwingFour-CrazyRhythm"
   },
   {
    "src": "https://archive.org/download/78_me-and-the-blues_mildred-bailey-with-ellis-larkins-conducting-warren-koehler_gbia0026417a/Me%20and%20the%20Blues%20-%20Mildred%20Bailey%20With%20Ellis%20Larkins%20Conducting.mp3",
    "length": 194.0,
    "series": "Mildred Bailey With Ellis Larkins",
    "title": "Me and the Blues",
    "date": "1946",
    "item": "https://archive.org/details/78_me-and-the-blues_mildred-bailey-with-ellis-larkins-conducting-warren-koehler_gbia0026417a"
   },
   {
    "src": "https://archive.org/download/03-duke-ellington-cotton-club-1938-vol-1-musidisc-ja-5168/01-Duke%20Ellington%20-%20Cotton%20Club%201938%20vol%201%20-%20Musidisc%20JA%205168.mp3",
    "length": 161.18,
    "series": "Duke Ellington a.n. Orchestra",
    "title": "Intro - Jig walk",
    "date": "1938",
    "item": "https://archive.org/details/03-duke-ellington-cotton-club-1938-vol-1-musidisc-ja-5168"
   },
   {
    "src": "https://archive.org/download/3-savoy-955-dexter-gordon-1947/1%20Savoy%20951%20-%20Fats%20Navarro%20Leo%20Parker%201947.mp3",
    "length": 172.0,
    "series": "Fats Navarro, Leo Parker",
    "title": "Goin' to Minton's (Navarro)",
    "date": "1947",
    "item": "https://archive.org/details/3-savoy-955-dexter-gordon-1947"
   },
   {
    "src": "https://archive.org/download/78_overture-to-a-jam-session-part-2_duke-ellington-and-his-orchestra-strayhorn_gbia0039398/01%20-%20Overture%20to%20a%20Jam%20Sessi%20-%20Duke%20Ellington%20and%20his%20Orchestra-restored.mp3",
    "length": 178.58,
    "series": "Duke Ellington and his Orchestra",
    "title": "Overture to a Jam Session - Part I",
    "date": "1947",
    "item": "https://archive.org/details/78_overture-to-a-jam-session-part-2_duke-ellington-and-his-orchestra-strayhorn_gbia0039398"
   },
   {
    "src": "https://archive.org/download/78_tootsie-roll_the-stan-getz-quartet-steadwell_gbia0059654a/Tootsie%20Roll%20-%20The%20Stan%20Getz%20Quartet%20-%20Steadwell.mp3",
    "length": 139.0,
    "series": "The Stan Getz Quartet",
    "title": "Tootsie Roll",
    "date": "1950",
    "item": "https://archive.org/details/78_tootsie-roll_the-stan-getz-quartet-steadwell_gbia0059654a"
   },
   {
    "src": "https://archive.org/download/78_art-tatum_art-tatum-james-swift-tatum_gbia0005678/01%20-%20Fine%20And%20Dandy%20-%20Art%20Tatum%20-%20James%20-%20Swift-restored.mp3",
    "length": 167.86,
    "series": "Art Tatum",
    "title": "Fine And Dandy",
    "date": "1944",
    "item": "https://archive.org/details/78_art-tatum_art-tatum-james-swift-tatum_gbia0005678"
   },
   {
    "src": "https://archive.org/download/78_lady-be-good-part-3_gershwin-willie-smith-illinois-jacquet-charles-ventura-joe-gu_gbia0039566/02%20-%20Lady%20Be%20Good%20-%20Part%202%20-%20Gershwin%20-%20Willie%20Smith.mp3",
    "length": 172.0,
    "series": "Red Callender",
    "title": "Lady Be Good - Part 2; Lady Be Good - Part 3",
    "date": "1948",
    "item": "https://archive.org/details/78_lady-be-good-part-3_gershwin-willie-smith-illinois-jacquet-charles-ventura-joe-gu_gbia0039566"
   },
   {
    "src": "https://archive.org/download/78_perdido-part-ii_norman-granz-illinois-jacquet-flip-phillips-bill-harris-howard-mc_gbia0032829/01%20-%20Perdido%20-%20Part%20I%20-%20Norman%20Granz%20-%20Illinois%20Jacquet.mp3",
    "length": 234.0,
    "series": "Norman Granz",
    "title": "Perdido - Part I",
    "date": "1953",
    "item": "https://archive.org/details/78_perdido-part-ii_norman-granz-illinois-jacquet-flip-phillips-bill-harris-howard-mc_gbia0032829"
   },
   {
    "src": "https://archive.org/download/11-my-man-i-cried-for-you-fine-and-mellow-waterfront-moonlight/01%20Gilbert%20Milstein%20reads%20Lady%20sings%20the%20blues.mp3",
    "length": 172.0,
    "series": "Billie Holiday",
    "title": "Lady sings the blues\" part read by Gilbert Milstein",
    "date": "1956",
    "item": "https://archive.org/details/11-my-man-i-cried-for-you-fine-and-mellow-waterfront-moonlight"
   },
   {
    "src": "https://archive.org/download/78_how-high-the-moon-part-2_willie-smith-illinois-jacquet-charles-ventura-joe-guy-ho_gbia8002589/01%20-%20HOW%20HIGH%20THE%20MOON%20-%20Part%201%20-%20Willie%20Smith.mp3",
    "length": 259.9,
    "series": "Willie Smith",
    "title": "How High the Moon - Part 1",
    "date": "1945",
    "item": "https://archive.org/details/78_how-high-the-moon-part-2_willie-smith-illinois-jacquet-charles-ventura-joe-guy-ho_gbia8002589"
   },
   {
    "src": "https://archive.org/download/78_man-omine_mary-lou-williams-bill-coleman-all-hall_gbia8002627/01%20-%20STAR%20DUST%20-%20Part%20I%20-%20MARY%20LOU%20WILLIAMS%20AND%20HER%20SIX.mp3",
    "length": 213.38,
    "series": "Mary Lou Williams and Her Six",
    "title": "Star Dust - Part I",
    "date": "1944",
    "item": "https://archive.org/details/78_man-omine_mary-lou-williams-bill-coleman-all-hall_gbia8002627"
   },
   {
    "src": "https://archive.org/download/78_bum-dee-dah-ra-dee_gatemouth-moore-budd-johnsons-all-stars-budd-johnson-harry_gbia0072604a/Bum%20Dee%20Dah%20Ra%20Dee%20-%20%22Gatemouth%22%20Moore%20-%20Budd%20Johnson%27s%20All%20Stars.mp3",
    "length": 174.0,
    "series": "\"Gatemouth\" Moore",
    "title": "Bum Dee Dah Ra Dee",
    "date": "1945",
    "item": "https://archive.org/details/78_bum-dee-dah-ra-dee_gatemouth-moore-budd-johnsons-all-stars-budd-johnson-harry_gbia0072604a"
   },
   {
    "src": "https://archive.org/download/78_just-you-just-me_lester-young-quartet-lester-young-john-guarnieri-sidney-catlett-_gbia0022793/01%20-%20I%20Never%20Knew%20-%20Lester%20Young%20Quartet%20-%20Lester%20Young.mp3",
    "length": 201.0,
    "series": "Lester Young Quartet",
    "title": "I Never Knew",
    "date": "1943",
    "item": "https://archive.org/details/78_just-you-just-me_lester-young-quartet-lester-young-john-guarnieri-sidney-catlett-_gbia0022793"
   },
   {
    "src": "https://archive.org/download/78_dark-shadows_charlie-parker-quartet-earl-coleman-charlie-parker-erroll-garner-red-c_gbia0039343b/Dark%20Shadows%20-%20Charlie%20Parker%20Quartet%20-%20Earl%20Coleman.mp3",
    "length": 185.0,
    "series": "Charlie Parker Quartet",
    "title": "Dark Shadows",
    "date": "1947",
    "item": "https://archive.org/details/78_dark-shadows_charlie-parker-quartet-earl-coleman-charlie-parker-erroll-garner-red-c_gbia0039343b"
   },
   {
    "src": "https://archive.org/download/78_candy-cane_harry-carneys-big-eight-harry-carney-lawrence-brown-otto-hardwick-ted-n_gbia0039266b/Candy%20Cane%20-%20Harry%20Carney%27s%20Big%20Eight%20-%20Harry%20Carney.mp3",
    "length": 198.0,
    "series": "Harry Carney's Big Eight",
    "title": "Candy Cane",
    "date": "1946",
    "item": "https://archive.org/details/78_candy-cane_harry-carneys-big-eight-harry-carney-lawrence-brown-otto-hardwick-ted-n_gbia0039266b"
   },
   {
    "src": "https://archive.org/download/78_homeward-bound_sextet-with-dinah-washington-leonard-feather-joe-morris-arnette-cobb_gbia0001638a/Homeward%20Bound%20-%20Sextet%20with%20Dinah%20Washington.mp3",
    "length": 181.0,
    "series": "Sextet with Dinah Washington",
    "title": "Homeward Bound",
    "date": "1943",
    "item": "https://archive.org/details/78_homeward-bound_sextet-with-dinah-washington-leonard-feather-joe-morris-arnette-cobb_gbia0001638a"
   },
   {
    "src": "https://archive.org/download/JohnnyHodgesOrchestra-SwinginOnTheCampus/Johnny_Hodges_Orchestra-Swingin_On_The_Campus-1939.mp3",
    "length": 163.0,
    "series": "Johnny Hodges Orchestra",
    "title": "Swingin' On The Campus",
    "date": "1939",
    "item": "https://archive.org/details/JohnnyHodgesOrchestra-SwinginOnTheCampus"
   },
   {
    "src": "https://archive.org/download/OgawaShizue-BluesInTheMorningAndBoogieWoogieGirl/Ogawa_Shizue-Blues_In_The_Morning-1949.mp3",
    "length": 179.0,
    "series": "Kasagi Shizuko",
    "title": "Blues in the Morning and Boogie Woogie Girl",
    "date": "1949",
    "item": "https://archive.org/details/OgawaShizue-BluesInTheMorningAndBoogieWoogieGirl"
   },
   {
    "src": "https://archive.org/download/78_7250-On-the-sunny-side-og-the-street/7250-On-the-sunny-side-og-the-street.mp3",
    "length": 188.53,
    "series": "Peggy Lee",
    "title": "On the sunny side og the street",
    "date": "1942",
    "item": "https://archive.org/details/78_7250-On-the-sunny-side-og-the-street"
   },
   {
    "src": "https://archive.org/download/PleasantJoeAndMezzrow-bechetSeptet-LeveeAndSawMillManBlues/Pleasant_Joe_w_Mezzrow_Bechet_Septet-Levee_Blues-1945.mp3",
    "length": 178.0,
    "series": "Pleasant Joe and Mezzrow-Bechet Septet",
    "title": "Levee and Saw Mill Man Blues",
    "date": "1945",
    "item": "https://archive.org/details/PleasantJoeAndMezzrow-bechetSeptet-LeveeAndSawMillManBlues"
   },
   {
    "src": "https://archive.org/download/78_night-train_jimmy-forest-and-all-star-combo-forrest_gbia0009916b/Night%20Train%20-%20Jimmy%20Forest%20and%20All%20Star%20Combo-restored.mp3",
    "length": 177.84,
    "series": "Jimmy Forest and All Star Combo",
    "title": "Night Train",
    "date": "1952",
    "item": "https://archive.org/details/78_night-train_jimmy-forest-and-all-star-combo-forrest_gbia0009916b"
   },
   {
    "src": "https://archive.org/download/78_if-you-could-see-me-now_sarah-vaughan-tad-dameron_gbia0039431a/If%20You%20Could%20See%20Me%20Now%20-%20Sarah%20Vaughan%20-%20Tad%20Dameron.mp3",
    "length": 178.0,
    "series": "Sarah Vaughan",
    "title": "If You Could See Me Now",
    "date": "1946",
    "item": "https://archive.org/details/78_if-you-could-see-me-now_sarah-vaughan-tad-dameron_gbia0039431a"
   },
   {
    "src": "https://archive.org/download/2-erroll-garner-savoy-727-1949/1%20Erroll%20Garner%20-%20Savoy%20727%201949.mp3",
    "length": 186.0,
    "series": "Erroll Garner, piano",
    "title": "September song (Weill, Anderson)",
    "date": "1949",
    "item": "https://archive.org/details/2-erroll-garner-savoy-727-1949"
   },
   {
    "src": "https://archive.org/download/ItsBeenALongLongTime_20181109/It%60s%20Been%20A%20Long%2C%20Long%20Time%20%28remix%29.mp3",
    "length": 163.0,
    "series": "Stan Kenton-June Christy and Orchestra",
    "title": "It`s Been A Long, Long Time",
    "date": "1945",
    "item": "https://archive.org/details/ItsBeenALongLongTime_20181109"
   },
   {
    "src": "https://archive.org/download/78_lee-wiley-rodgers-and-hart-album_miss-lee-wiley-joe-bushkins-orchestra-rodgers-hart_gbia8006614/01%20-%20I%27VE%20GOT%20FIVE%20DOLLARS%20-%20MISS%20LEE%20WILEY%20-%20JOE%20BUSHKIN%27S%20ORCHESTRA.mp3",
    "length": 175.0,
    "series": "Miss Lee Wiley",
    "title": "Lee Wiley; Rodgers and Hart Album",
    "date": "1940",
    "item": "https://archive.org/details/78_lee-wiley-rodgers-and-hart-album_miss-lee-wiley-joe-bushkins-orchestra-rodgers-hart_gbia8006614"
   },
   {
    "src": "https://archive.org/download/78_whispering_lena-horne-rogers-hart-phil-moore_gbia8000013/01%20-%20LITTLE%20GIRL%20BLUE%20-%20LENA%20HORNE%20-%20Rogers%20-%20Hart.mp3",
    "length": 161.88,
    "series": "Lena Horne",
    "title": "Little Girl Blue",
    "date": "1946",
    "item": "https://archive.org/details/78_whispering_lena-horne-rogers-hart-phil-moore_gbia8000013"
   },
   {
    "src": "https://archive.org/download/78_if-dreams-come-true_teddy-wilson-sextet-teddy-wilson-ben-webster-al-casey-buck-clay_gbia0010706a/If%20Dreams%20Come%20True%20-%20Teddy%20Wilson%20Sextet.mp3",
    "length": 186.0,
    "series": "Teddy Wilson Sextet",
    "title": "If Dreams Come True",
    "date": "1945",
    "item": "https://archive.org/details/78_if-dreams-come-true_teddy-wilson-sextet-teddy-wilson-ben-webster-al-casey-buck-clay_gbia0010706a"
   },
   {
    "src": "https://archive.org/download/78_if-i-had-you_art-tatum-trio-art-tatum-tiny-grimes-slam-stewart_gbia8003005/01%20-%20BOOGIE%20-%20ART%20TATUM%20TRIO%20-%20Art%20Tatum%20-%20Tiny%20Grimes.mp3",
    "length": 234.82,
    "series": "Tiny Grimes",
    "title": "Art Tatum Trio",
    "date": "1944",
    "item": "https://archive.org/details/78_if-i-had-you_art-tatum-trio-art-tatum-tiny-grimes-slam-stewart_gbia8003005"
   },
   {
    "src": "https://archive.org/download/rikajikajack/Rika%20Jika%20Jack.mp3",
    "length": 185.0,
    "series": "June Christy - Gesang, Stan Kenton and His Orchestra",
    "title": "Rika Jika Jack",
    "date": "1946",
    "item": "https://archive.org/details/rikajikajack"
   },
   {
    "src": "https://archive.org/download/11-retrospection/01%20In%20a%20sentimental%20mood.mp3",
    "length": 150.0,
    "series": "Duke Ellington, piano",
    "title": "In a sentimental mood",
    "date": "1953",
    "item": "https://archive.org/details/11-retrospection"
   },
   {
    "src": "https://archive.org/download/78_lady-be-good-part-1_lester-young-charlie-parker-al-killian-arnold-ross-billy-hadn_gbia0154504a/LADY%20BE%20GOOD%20%28Part%201%29%20-%20Lester%20Young%20-%20Charlie%20Parker.mp3",
    "length": 191.0,
    "series": "Lester Young",
    "title": "Lady BE Good (Part 1)",
    "date": "1950",
    "item": "https://archive.org/details/78_lady-be-good-part-1_lester-young-charlie-parker-al-killian-arnold-ross-billy-hadn_gbia0154504a"
   },
   {
    "src": "https://archive.org/download/78_funny-valentine_the-gerry-mulligan-quartet-gerry-mulligan-chet-baker-carson-smith-f_gbia3029946b/Funny%20Valentine%20-%20The%20Gerry%20Mulligan%20Quartet.mp3",
    "length": 180.0,
    "series": "The Gerry Mulligan Quartet",
    "title": "Funny Valentine",
    "date": "1956",
    "item": "https://archive.org/details/78_funny-valentine_the-gerry-mulligan-quartet-gerry-mulligan-chet-baker-carson-smith-f_gbia3029946b"
   },
   {
    "src": "https://archive.org/download/78_memories-of-you_art-tatum-robin-youmans-grey_gbia0032161/01%20-%20Hallelujah%21%20-%20Art%20Tatum%20-%20Robin%20-%20Youmans.mp3",
    "length": 188.0,
    "series": "Art Tatum",
    "title": "Hallelujah!",
    "date": "1945",
    "item": "https://archive.org/details/78_memories-of-you_art-tatum-robin-youmans-grey_gbia0032161"
   },
   {
    "src": "https://archive.org/download/1-erroll-garner-blue-star-144/1%20Erroll%20Garner%20-%20Blue%20Star%20144.mp3",
    "length": 193.0,
    "series": "Erroll Garner and his Rhythm",
    "title": "The way you look tonight (Kern)",
    "date": "1949",
    "item": "https://archive.org/details/1-erroll-garner-blue-star-144"
   },
   {
    "src": "https://archive.org/download/78_tampico_stan-kenton-mit-sienem-orchester-june-christy-und-glee-club-allan-roberts-d_gbia0122062a/TAMPICO%20-%20Stan%20Kenton%20mit%20sienem%20Orchester.mp3",
    "length": 172.0,
    "series": "Stan Kenton mit sienem Orchester",
    "title": "Tampico",
    "date": "1945",
    "item": "https://archive.org/details/78_tampico_stan-kenton-mit-sienem-orchester-june-christy-und-glee-club-allan-roberts-d_gbia0122062a"
   },
   {
    "src": "https://archive.org/download/WhenYoureSmilingTeddyWilsonBillieHoliday/When%20You%27re%20Smiling%20-%20Teddy%20Wilson%20-%20Billie%20Holiday.mp3",
    "length": 170.0,
    "series": "Teddy Wilson - Billie Holiday",
    "title": "When You're Smiling - Teddy Wilson - Billie Holiday",
    "date": "1938",
    "item": "https://archive.org/details/WhenYoureSmilingTeddyWilsonBillieHoliday"
   },
   {
    "src": "https://archive.org/download/78_i-cried-for-you-tampico_jerry-colonna-stan-kenton-and-his-orchestra-june-christy-f_gbia0382490b/I%20CRIED%20FOR%20YOU%3B%20TAMPICO%20-%20Jerry%20Colonna.mp3",
    "length": 324.5,
    "series": "Jerry Colonna",
    "title": "I Cried for You; Tampico",
    "date": "1945",
    "item": "https://archive.org/details/78_i-cried-for-you-tampico_jerry-colonna-stan-kenton-and-his-orchestra-june-christy-f_gbia0382490b"
   },
   {
    "src": "https://archive.org/download/01-s-wonderful/01%20-%20%27S%20Wonderful%21.mp3",
    "length": 166.37,
    "series": "Eddie condon",
    "title": "'S Wonderful!",
    "date": "1944",
    "item": "https://archive.org/details/01-s-wonderful"
   },
   {
    "src": "https://archive.org/download/78_jatp-blues_coleman-hawkins-lester-young-willie-smith-charlie-parker-buck-clayton-bu_gbia0067276/01%20-%20Jatp%20Blues%20-%20Coleman%20Hawkins%20-%20Lester%20Young.mp3",
    "length": 198.0,
    "series": "Coleman Hawkins",
    "title": "Jatp Blues",
    "date": "1946",
    "item": "https://archive.org/details/78_jatp-blues_coleman-hawkins-lester-young-willie-smith-charlie-parker-buck-clayton-bu_gbia0067276"
   },
   {
    "src": "https://archive.org/download/78_a-m-p-m-song_charlie-ventura-his-orch-marianne-dunn-jack-palmer-secon-cole_gbia0030150a/A.%20M.%20-%20P.%20M.%20Song%20-%20Charlie%20Ventura%20%26%20his%20Orch..mp3",
    "length": 171.0,
    "series": "Charlie Ventura & his Orchestra",
    "title": "A. M. - P. M. Song",
    "date": "1946",
    "item": "https://archive.org/details/78_a-m-p-m-song_charlie-ventura-his-orch-marianne-dunn-jack-palmer-secon-cole_gbia0030150a"
   },
   {
    "src": "https://archive.org/download/07-duke-ellington-night-stick/01%20Duke%20Ellington%20-%20Fat%20mouth.mp3",
    "length": 162.0,
    "series": "Duke Ellington Orchestra",
    "title": "Fat mouth",
    "date": "1959",
    "item": "https://archive.org/details/07-duke-ellington-night-stick"
   },
   {
    "src": "https://archive.org/download/78_you-know-it_babe-russin-quintet-the-quintet-babe-russin-tommy-todd-al-hendrickson-j_gbia0072062/01%20-%205054%20Whisett%20-%20Babe%20Russin%20Quintet%20-%20The%20Quintet.mp3",
    "length": 166.0,
    "series": "Babe Russin Quintet",
    "title": "5054 Whisett",
    "date": "1946",
    "item": "https://archive.org/details/78_you-know-it_babe-russin-quintet-the-quintet-babe-russin-tommy-todd-al-hendrickson-j_gbia0072062"
   },
   {
    "src": "https://archive.org/download/78_charge-account_dave-lambert-buddy-stewart-red-rodney-be-boppers-dave-lambert-budd_gbia0072061/01%20-%20A%20Cent%20and%20a%20Half%20-%20Dave%20Lambert%20%26%20Buddy%20Stewart.mp3",
    "length": 180.0,
    "series": "Dave Lambert & Buddy Stewart",
    "title": "A Cent and a Half",
    "date": "1946",
    "item": "https://archive.org/details/78_charge-account_dave-lambert-buddy-stewart-red-rodney-be-boppers-dave-lambert-budd_gbia0072061"
   },
   {
    "src": "https://archive.org/download/78_carney-val-in-rhythm_billy-taylors-big-eight-emmett-berry-vernon-brown-harvey-ha_gbia0009633b/Carney-val%20in%20Rhythm%20-%20Billy%20Taylor%27s%20Big%20Eight.mp3",
    "length": 174.0,
    "series": "Billy Taylor's Big Eight",
    "title": "Carney-val in Rhythm",
    "date": "1944",
    "item": "https://archive.org/details/78_carney-val-in-rhythm_billy-taylors-big-eight-emmett-berry-vernon-brown-harvey-ha_gbia0009633b"
   },
   {
    "src": "https://archive.org/download/04-coleman-hawkins-capitol-dag-127/01%20Coleman%20Hawkins%20Capitol%20DAG127.mp3",
    "length": 176.3,
    "series": "Coleman Hawkins",
    "title": "Rifftide",
    "date": "1945",
    "item": "https://archive.org/details/04-coleman-hawkins-capitol-dag-127"
   },
   {
    "src": "https://archive.org/download/2-stan-getz-quartet-jazz-selection-js-768-1951/1%20Stan%20Getz%20Quartet%20-%20Jazz%20Selection%20JS%20768%201951.mp3",
    "length": 167.0,
    "series": "Stan Getz Quartet",
    "title": "Getz, Stan - Quartet (Jazz Selection JS 768) 1951",
    "date": "1951",
    "item": "https://archive.org/details/2-stan-getz-quartet-jazz-selection-js-768-1951"
   },
   {
    "src": "https://archive.org/download/78_thats-rich_buddy-rich-and-his-v-disc-speed-demons-ella-fitzgerald-buddy-rich-charl_gbia0382438a/THAT%27S%20RICH%20-%20Buddy%20Rich%20and%20his%20V-Disc%20Speed%20Demons.mp3",
    "length": 206.52,
    "series": "Buddy Rich and his V-Disc Speed Demons",
    "title": "That's Rich",
    "date": "1946",
    "item": "https://archive.org/details/78_thats-rich_buddy-rich-and-his-v-disc-speed-demons-ella-fitzgerald-buddy-rich-charl_gbia0382438a"
   },
   {
    "src": "https://archive.org/download/78_body-soul_art-tatum-trio-art-tatum-slam-stewart-tiny-grimes-green-sour-heyman-eyt_gbia0104499a/Body%20%26%20Soul%20-%20Art%20Tatum%20Trio%20-%20Art%20Tatum.mp3",
    "length": 279.0,
    "series": "Art Tatum Trio",
    "title": "Body & Soul",
    "date": "1944",
    "item": "https://archive.org/details/78_body-soul_art-tatum-trio-art-tatum-slam-stewart-tiny-grimes-green-sour-heyman-eyt_gbia0104499a"
   },
   {
    "src": "https://archive.org/download/78_moon-nocturne-part-ii_charlie-ventura-and-his-orchestra-henri-woode-al-neiburg-st_gbia0072646/01%20-%20Moon%20Nocturne%20-%20Part%20I%20-%20Charlie%20Ventura%20And%20His%20Orchestra.mp3",
    "length": 180.0,
    "series": "Charlie Ventura And His Orchestra",
    "title": "Moon Nocturne - Part I; Moon Nocturne - Part II",
    "date": "1946",
    "item": "https://archive.org/details/78_moon-nocturne-part-ii_charlie-ventura-and-his-orchestra-henri-woode-al-neiburg-st_gbia0072646"
   },
   {
    "src": "https://archive.org/download/78_squeeze-me-but-dont-tease-me_lena-horne-phil-moore-ellington-gains_gbia0076849a/Squeeze%20Me%20%28But%20Don%27t%20Tease%20Me%29%20-%20Lena%20Horne.mp3",
    "length": 185.0,
    "series": "Lena Horne",
    "title": "Squeeze Me (But Don't Tease Me)",
    "date": "1946",
    "item": "https://archive.org/details/78_squeeze-me-but-dont-tease-me_lena-horne-phil-moore-ellington-gains_gbia0076849a"
   },
   {
    "src": "https://archive.org/download/78_homeward-bound_dinah-washington-joe-morris-arnette-cobbs-rudy-rutherford-milt-buckn_gbia0063348a/Homeward%20Bound%20-%20Dinah%20Washington%20-%20Joe%20Morris.mp3",
    "length": 186.0,
    "series": "Dinah Washington",
    "title": "Homeward Bound",
    "date": "1943",
    "item": "https://archive.org/details/78_homeward-bound_dinah-washington-joe-morris-arnette-cobbs-rudy-rutherford-milt-buckn_gbia0063348a"
   },
   {
    "src": "https://archive.org/download/78_9958-Take-the-A-train/9958-Take-the-A-train.mp3",
    "length": 170.42,
    "series": "Duke Ellington and his famous orch.",
    "title": "Take the A train",
    "date": "1941",
    "item": "https://archive.org/details/78_9958-Take-the-A-train"
   },
   {
    "src": "https://archive.org/download/1-charlie-parker-quintet-bird-of-paradise_202303/1%20Charlie%20Parker%20Quintet%20-%20Bird%20of%20paradise.mp3",
    "length": 398.0,
    "series": "Charlie Parker Quintet",
    "title": "Bird of paradise",
    "date": "1949",
    "item": "https://archive.org/details/1-charlie-parker-quintet-bird-of-paradise_202303"
   },
   {
    "src": "https://archive.org/download/10-don-byas-musidisc-30-ja-5106/01%20Don%20Byas%20-%20Musidisc%20JA%205106.mp3",
    "length": 181.79,
    "series": "Don Byas ts, Erroll Garner p",
    "title": "3 O'clock in the Morning",
    "date": "1945",
    "item": "https://archive.org/details/10-don-byas-musidisc-30-ja-5106"
   },
   {
    "src": "https://archive.org/download/78_but-not-for-me_lee-wiley-with-orchestra-george-and-ira-gershwin_gbia0002827a/But%20Not%20For%20Me%20-%20Lee%20Wiley%20with%20Orchestra.mp3",
    "length": 164.0,
    "series": "Lee Wiley with Orchestra",
    "title": "But Not For Me",
    "date": "1950",
    "item": "https://archive.org/details/78_but-not-for-me_lee-wiley-with-orchestra-george-and-ira-gershwin_gbia0002827a"
   },
   {
    "src": "https://archive.org/download/78_sweet-marijuana-brown_barney-bigard-sextet-joe-thomas-barney-bigard-art-tatum-stan_gbia0077378a/Sweet%20Marijuana%20Brown%20-%20Barney%20Bigard%20Sextet.mp3",
    "length": 185.0,
    "series": "Barney Bigard Sextet",
    "title": "Sweet Marijuana Brown",
    "date": "1945",
    "item": "https://archive.org/details/78_sweet-marijuana-brown_barney-bigard-sextet-joe-thomas-barney-bigard-art-tatum-stan_gbia0077378a"
   },
   {
    "src": "https://archive.org/download/78_it-dont-count_harry-parrys-radio-rhythm-club-sextet-george-shearing_gbia0384625a/IT%20DON%27T%20COUNT%20-%20HARRY%20PARRY%27S%20RADIO%20RHYTHM%20CLUB%20SEXTET.mp3",
    "length": 178.13,
    "series": "Harry Parry's Radio Rhythm Club Sextet",
    "title": "It Don't Count",
    "date": "1941",
    "item": "https://archive.org/details/78_it-dont-count_harry-parrys-radio-rhythm-club-sextet-george-shearing_gbia0384625a"
   },
   {
    "src": "https://archive.org/download/WashboardSamAndHisWashboardBand-JustGotToHoldYou/Washboard_Sam_And_His_Washboard_Band-Just_Got_To_Hold_You-1940.mp3",
    "length": 162.0,
    "series": "Washboard Sam and his Washboard Band",
    "title": "Just Got To Hold You",
    "date": "1940",
    "item": "https://archive.org/details/WashboardSamAndHisWashboardBand-JustGotToHoldYou"
   },
   {
    "src": "https://archive.org/download/78_a-tisket-a-tisket_jack-hylton-and-his-orchestra-ella-fitzgerald-al-feldman_gbia7008800b/A-TISKET%2C%20A-TISKET%20-%20JACK%20HYLTON%20AND%20HIS%20ORCHESTRA.mp3",
    "length": 171.79,
    "series": "Jack Hylton and His Orchestra",
    "title": "A-tisket, A-tisket",
    "date": "1938",
    "item": "https://archive.org/details/78_a-tisket-a-tisket_jack-hylton-and-his-orchestra-ella-fitzgerald-al-feldman_gbia7008800b"
   },
   {
    "src": "https://archive.org/download/78_a-tisket-a-tisket_fats-waller-his-continental-rhythm-fats-waller-ella-fitzge_gbia7008819b/A-TISKET%2C%20A-TISKET%20-%20%22FATS%22%20WALLER%20%26%20HIS%20CONTINENTAL%20RHYTHM.mp3",
    "length": 161.18,
    "series": "\"fats\" Waller & His Continental Rhythm",
    "title": "A-tisket, A-tisket",
    "date": "1938",
    "item": "https://archive.org/details/78_a-tisket-a-tisket_fats-waller-his-continental-rhythm-fats-waller-ella-fitzge_gbia7008819b"
   },
   {
    "src": "https://archive.org/download/easy-to-love-remaster/Easy%20To%20Love%20-%20500.%20-12.mp3",
    "length": 134.0,
    "series": "George Shearing - Al McKibbon - Bill Clark -Cal Tjader - Jean Thielemans",
    "title": "Easy To Love",
    "date": "1953",
    "item": "https://archive.org/details/easy-to-love-remaster"
   },
   {
    "src": "https://archive.org/download/78_ill-never-be-the-same_g.-kahn-m.-malneck-f.-signorelli-charlie-ventura-and-his-gre_gbia0000981a/I%27ll%20Never%20Be%20The%20Same%20-%20G.%20Kahn%20-%20M.%20Malneck.mp3",
    "length": 189.0,
    "series": "G. Kahn",
    "title": "I'll Never Be The Same",
    "date": "1946",
    "item": "https://archive.org/details/78_ill-never-be-the-same_g.-kahn-m.-malneck-f.-signorelli-charlie-ventura-and-his-gre_gbia0000981a"
   },
   {
    "src": "https://archive.org/download/78_wicks-kicks_cozy-coles-orchestra-don-byas-cozy-cole-billy-rowland-billy-taylor-mil_gbia0009926/01%20-%20They%20Didn%27t%20Believe%20Me%20-%20Cozy%20Cole%27s%20Orchestra.mp3",
    "length": 178.0,
    "series": "Cozy Cole's Orchestra",
    "title": "They Didn't Believe Me; Wicks Kicks",
    "date": "1945",
    "item": "https://archive.org/details/78_wicks-kicks_cozy-coles-orchestra-don-byas-cozy-cole-billy-rowland-billy-taylor-mil_gbia0009926"
   },
   {
    "src": "https://archive.org/download/78_a-little-taste_johnny-hodges-his-orchestra-johnny-hodges-harold-baker-lawrence-br_gbia0075478b/A%20Little%20Taste%20-%20Johnny%20Hodges%20%26%20His%20Orchestra.mp3",
    "length": 188.0,
    "series": "Johnny Hodges & His Orchestra",
    "title": "A Little Taste",
    "date": "1950",
    "item": "https://archive.org/details/78_a-little-taste_johnny-hodges-his-orchestra-johnny-hodges-harold-baker-lawrence-br_gbia0075478b"
   },
   {
    "src": "https://archive.org/download/78_blue-moon_the-melody-maker-columbia-jazz-rally-of-1947_wave_202407/blue%20moon%20parts%201%20and%202_melody%20makers%20jazz%20rally.mp3",
    "length": 355.0,
    "series": "The Melody Maker-Columbia Jazz Rally of 1947",
    "title": "Blue Moon–Parts 1 & 2",
    "date": "1947",
    "item": "https://archive.org/details/78_blue-moon_the-melody-maker-columbia-jazz-rally-of-1947_wave_202407"
   },
   {
    "src": "https://archive.org/download/78_blues-on-the-delta_walter-thomas-and-his-jump-cats-walter-thomas-emmett-berry-oscar_gbia0023000b/Blues%20on%20the%20Delta%20-%20Walter%20Thomas%20And%20His%20Jump%20Cats.mp3",
    "length": 200.0,
    "series": "Walter Thomas And His Jump Cats",
    "title": "Blues on the Delta",
    "date": "1944",
    "item": "https://archive.org/details/78_blues-on-the-delta_walter-thomas-and-his-jump-cats-walter-thomas-emmett-berry-oscar_gbia0023000b"
   },
   {
    "src": "https://archive.org/download/78_bugle-breaks_duke-ellington-and-his-orch-duke-rex-stewart-barney-bigard-ben-webste_gbia0039430a/Bugle%20Breaks%20-%20Duke%20Ellington%20and%20His%20Orch..mp3",
    "length": 187.0,
    "series": "Duke Ellington and His Orchestra",
    "title": "Bugle Breaks",
    "date": "1941",
    "item": "https://archive.org/details/78_bugle-breaks_duke-ellington-and-his-orch-duke-rex-stewart-barney-bigard-ben-webste_gbia0039430a"
   },
   {
    "src": "https://archive.org/download/07-chick-webb-a-h-orch-1936-musidisc-ja-5199_20210626_0642/01%20Chick%20Webb%20a%20h%20Orch%20-%201936%20Musidisc%20JA%205199.mp3",
    "length": 178.39,
    "series": "Chick Webb a.h. Orchestra",
    "title": "Stompin' at the Savoy",
    "date": "1936",
    "item": "https://archive.org/details/07-chick-webb-a-h-orch-1936-musidisc-ja-5199_20210626_0642"
   },
   {
    "src": "https://archive.org/download/78_moonlight-in-vermont_johnny-smith-quintet-johnny-smith-stan-getz-eddie-safranksi-sa_gbia0004575b/Moonlight%20in%20Vermont%20-%20Johnny%20Smith%20Quintet.mp3",
    "length": 199.0,
    "series": "Johnny Smith Quintet",
    "title": "Moonlight in Vermont",
    "date": "1952",
    "item": "https://archive.org/details/78_moonlight-in-vermont_johnny-smith-quintet-johnny-smith-stan-getz-eddie-safranksi-sa_gbia0004575b"
   },
   {
    "src": "https://archive.org/download/04-lester-young-musidisc-30-ja-5171/01%20Lester%20Young%20Musidisc%2030JA5171.mp3",
    "length": 175.12,
    "series": "Lester Young",
    "title": "Lester leaps in",
    "date": "1948",
    "item": "https://archive.org/details/04-lester-young-musidisc-30-ja-5171"
   },
   {
    "src": "https://archive.org/download/78_vote-for-mister-rhythm-chick-webb-and-his-orchestra-ella/26992%20Vote%20for%20mister%20rhythm.mp3",
    "length": 147.72,
    "series": "Ella Fitzgerald",
    "title": "Vote for mister rhythm",
    "date": "1937",
    "item": "https://archive.org/details/78_vote-for-mister-rhythm-chick-webb-and-his-orchestra-ella"
   },
   {
    "src": "https://archive.org/download/78_thats-the-stuff-you-gotta-watch-southern-scandal_stan-kenton-and-his-orchestra-1_gbia0382453b/THAT%27S%20THE%20STUFF%20YOU%20GOTTA%20-%20Stan%20Kenton%20and%20his%20Orchestra.mp3",
    "length": 332.38,
    "series": "Stan Kenton and his Orchestra",
    "title": "That's the Stuff You Gotta Watch; Southern Scandal",
    "date": "1946",
    "item": "https://archive.org/details/78_thats-the-stuff-you-gotta-watch-southern-scandal_stan-kenton-and-his-orchestra-1_gbia0382453b"
   },
   {
    "src": "https://archive.org/download/78_s-k-blues-part-ii_joe-turner-pete-johnsons-all-stars-saunders-king-pete-johnso_gbia0072621/01%20-%20S.%20K.%20Blues%20-%20Joe%20Turner%20-%20Pete%20Johnson%27s%20All%20Stars.mp3",
    "length": 198.0,
    "series": "Don Byas",
    "title": "S. K. Blues; S. K. Blues - Part II",
    "date": "1945",
    "item": "https://archive.org/details/78_s-k-blues-part-ii_joe-turner-pete-johnsons-all-stars-saunders-king-pete-johnso_gbia0072621"
   },
   {
    "src": "https://archive.org/download/78_dont-get-scared_stan-getz-and-swedish-all-stars-bengi-hallberg-lars-gullin-jack-ko_gbia0039520a/Don%27t%20Get%20Scared%20-%20Stan%20Getz%20And%20Swedish%20All%20Stars.mp3",
    "length": 188.0,
    "series": "Stan Getz And Swedish All Stars",
    "title": "Don't Get Scared",
    "date": "1951",
    "item": "https://archive.org/details/78_dont-get-scared_stan-getz-and-swedish-all-stars-bengi-hallberg-lars-gullin-jack-ko_gbia0039520a"
   },
   {
    "src": "https://archive.org/download/78_1-2-3-blues_sid-catlett-quartet-ben-webster-marlowe-morris-john-simmons-sid-catlett_gbia0103499a/1-2-3%20Blues%20-%20Sid%20Catlett%20Quartet%20-%20Ben%20Webster.mp3",
    "length": 194.0,
    "series": "Sid Catlett Quartet",
    "title": "1-2-3 Blues",
    "date": "1944",
    "item": "https://archive.org/details/78_1-2-3-blues_sid-catlett-quartet-ben-webster-marlowe-morris-john-simmons-sid-catlett_gbia0103499a"
   },
   {
    "src": "https://archive.org/download/78_wynonies-blues_wynonie-blues-harris-wynonie-harris-illinois-jacquet-and-his-all_gbia0001433a/Wynonie%27s%20Blues%20-%20Wynonie%20%22Blues%22%20Harris.mp3",
    "length": 171.0,
    "series": "Wynonie \"Blues\" Harris",
    "title": "Wynonie's Blues",
    "date": "1945",
    "item": "https://archive.org/details/78_wynonies-blues_wynonie-blues-harris-wynonie-harris-illinois-jacquet-and-his-all_gbia0001433a"
   },
   {
    "src": "https://archive.org/download/78_ill-never-be-the-same_billy-holiday-teddy-wilsons-orch-malneck-signorelli-kahn-l_gbia0039479b/I%27ll%20Never%20Be%20The%20Same%20-%20Billy%20Holiday%20-%20Teddy%20Wilson%27s%20Orch..mp3",
    "length": 187.0,
    "series": "Billy Holiday",
    "title": "I'll Never Be The Same",
    "date": "1937",
    "item": "https://archive.org/details/78_ill-never-be-the-same_billy-holiday-teddy-wilsons-orch-malneck-signorelli-kahn-l_gbia0039479b"
   },
   {
    "src": "https://archive.org/download/aint-goin-no-place/Ain%60t%20Goin%60%20No%20Place.mp3",
    "length": 182.69,
    "series": "The Capitol Jazzmen - Peggy Lee - Eddie Miller -  Barney Bigard - Pete Johnson - Nappy LaMare - Shorty Cherock - Les Robinson - Hank Wayland - Nick Fatool",
    "title": "Ain`t Goin` No Place",
    "date": "1944",
    "item": "https://archive.org/details/aint-goin-no-place"
   },
   {
    "src": "https://archive.org/download/78_time-on-my-hands_the-orchestra-eddie-heywood-ray-nance-don-byas-aaron-sachs-john-si_gbia0265228/03%20-%20HOW%20HIGH%20THE%20MOON%20-%20THE%20ORCHESTRA%20-%20EDDIE%20HEYWOOD.mp3",
    "length": 239.28,
    "series": "Eddie Heywood",
    "title": "On the 88",
    "date": "1944",
    "item": "https://archive.org/details/78_time-on-my-hands_the-orchestra-eddie-heywood-ray-nance-don-byas-aaron-sachs-john-si_gbia0265228"
   },
   {
    "src": "https://archive.org/download/78_autumn-leaves_stan-getz-prevert-kosma-mercer_gbia0059953b/Autumn%20Leaves%20-%20Stan%20Getz%20-%20Prevert%20-%20Kosma.mp3",
    "length": 186.0,
    "series": "Stan Getz",
    "title": "Autumn Leaves",
    "date": "1952",
    "item": "https://archive.org/details/78_autumn-leaves_stan-getz-prevert-kosma-mercer_gbia0059953b"
   },
   {
    "src": "https://archive.org/download/01perdidopart1/01%20-%20Perdido%20-%20part%201.mp3",
    "length": 226.0,
    "series": "Norman Granz",
    "title": "Perdido - part 1",
    "date": "1947",
    "item": "https://archive.org/details/01perdidopart1"
   },
   {
    "src": "https://archive.org/download/78_yardbird-suite_charlie-parker-septet-charlie-parker-lucky-thompson-miles-davis-dodo_gbia0054840b/Yardbird%20Suite%20-%20Charlie%20Parker%20Septet%20-%20Charlie%20Parker.mp3",
    "length": 177.0,
    "series": "Charlie Parker Septet",
    "title": "Yardbird Suite",
    "date": "1946",
    "item": "https://archive.org/details/78_yardbird-suite_charlie-parker-septet-charlie-parker-lucky-thompson-miles-davis-dodo_gbia0054840b"
   },
   {
    "src": "https://archive.org/download/1-charlie-parker-quartet-esquire-10-017/1%20Charlie%20Parker%20Quartet%20-%20Esquire%2010-017.mp3",
    "length": 162.0,
    "series": "Charlie Parker Quartet",
    "title": "Bird's nest (Parker)",
    "date": "1947",
    "item": "https://archive.org/details/1-charlie-parker-quartet-esquire-10-017"
   },
   {
    "src": "https://archive.org/download/78_glad-to-be-unhappy_lena-horne-schonberger-coburn-rose-phil-moore_gbia8000013/02%20-%20WHISPERING%20-%20LENA%20HORNE%20-%20Schonberger%20-%20Coburn.mp3",
    "length": 173.0,
    "series": "Coburn",
    "title": "Little Girl Blue",
    "date": "1946",
    "item": "https://archive.org/details/78_glad-to-be-unhappy_lena-horne-schonberger-coburn-rose-phil-moore_gbia8000013"
   },
   {
    "src": "https://archive.org/download/78_bella-notte-svend-nicolaisens-orkester-gy-holdorf-sonny-burke-peggy/16880%20Bella%20Notte.mp3",
    "length": 188.11,
    "series": "Gy Holdorf",
    "title": "Bella Notte",
    "date": "1955",
    "item": "https://archive.org/details/78_bella-notte-svend-nicolaisens-orkester-gy-holdorf-sonny-burke-peggy"
   },
   {
    "src": "https://archive.org/download/78_atchinson-topeka--santa-fe_bob-crosby-and-orchestra-peggy-lee--bob-crosby-warren_gbia0005285a/Atchinson%2C%20Topeka%20%26%20Santa%20Fe%20-%20Bob%20Crosby%20and%20Orchestra.mp3",
    "length": 184.0,
    "series": "Bob Crosby and Orchestra",
    "title": "Atchinson, Topeka & Santa Fe",
    "date": "1944",
    "item": "https://archive.org/details/78_atchinson-topeka--santa-fe_bob-crosby-and-orchestra-peggy-lee--bob-crosby-warren_gbia0005285a"
   },
   {
    "src": "https://archive.org/download/78_penthouse-serenade-when-were-alone_eddie-heywood-the-orchestra-ray-nance-don-bya_gbia8002190/01%20-%20THEM%20THERE%20EYES%20-%20EDDIE%20HEYWOOD%20-%20THE%20ORCHESTRA.mp3",
    "length": 222.22,
    "series": "Eddie Heywood",
    "title": "Them There Eyes",
    "date": "1944",
    "item": "https://archive.org/details/78_penthouse-serenade-when-were-alone_eddie-heywood-the-orchestra-ray-nance-don-bya_gbia8002190"
   },
   {
    "src": "https://archive.org/download/78_be-bops-fables_george-shearing-quintet-george-shearing-marjorie-hyams-chuck-wayne_gbia7029603a/Be-bop%27s%20Fables%20-%20George%20Shearing%20Quintet.mp3",
    "length": 186.0,
    "series": "George Shearing Quintet",
    "title": "Be-bop's Fables",
    "date": "1951",
    "item": "https://archive.org/details/78_be-bops-fables_george-shearing-quintet-george-shearing-marjorie-hyams-chuck-wayne_gbia7029603a"
   },
   {
    "src": "https://archive.org/download/78_almost-like-being-in-love_mildred-bailey-julian-work-lerner-loewe_gbia0103485a/Almost%20Like%20Being%20in%20Love%20-%20Mildred%20Bailey.mp3",
    "length": 191.0,
    "series": "Mildred Bailey",
    "title": "Almost Like Being in Love",
    "date": "1947",
    "item": "https://archive.org/details/78_almost-like-being-in-love_mildred-bailey-julian-work-lerner-loewe_gbia0103485a"
   },
   {
    "src": "https://archive.org/download/ColemanHawkinsSwingFour-GetHappy/Coleman_Hawkins_Swing_Four-Get_Happy-1943.mp3",
    "length": 203.0,
    "series": "Coleman Hawkins Swing Four",
    "title": "Get Happy",
    "date": "1943",
    "item": "https://archive.org/details/ColemanHawkinsSwingFour-GetHappy"
   },
   {
    "src": "https://archive.org/download/78_ill-close-my-eyes_mildred-bailey-with-ellis-larkins-conducting-reid-kaye_gbia0026417b/I%27ll%20Close%20My%20Eyes%20-%20Mildred%20Bailey%20With%20Ellis%20Larkins%20Conducting.mp3",
    "length": 191.0,
    "series": "Mildred Bailey With Ellis Larkins",
    "title": "I'll Close My Eyes",
    "date": "1946",
    "item": "https://archive.org/details/78_ill-close-my-eyes_mildred-bailey-with-ellis-larkins-conducting-reid-kaye_gbia0026417b"
   },
   {
    "src": "https://archive.org/download/11-duke-ellington-rare-broadcasts-1951-musidisc-ja-5209/01-Duke%20Ellington%20-%20Rare%20broadcasts%201951%20-%20Musidisc%20JA%205209.mp3",
    "length": 245.79,
    "series": "Duke Ellington a.h. Orchestra",
    "title": "Midriff",
    "date": "1951",
    "item": "https://archive.org/details/11-duke-ellington-rare-broadcasts-1951-musidisc-ja-5209"
   },
   {
    "src": "https://archive.org/download/78_no-regrets_billie-holiday-tobias-ingraham-bunny-berigan-artie-shaw-joe-bushkin-dick_gbia0087220a/No%20Regrets%20-%20Billie%20Holiday%20-%20Tobias%20-%20Ingraham.mp3",
    "length": 162.0,
    "series": "Billie Holiday",
    "title": "No Regrets",
    "date": "1951",
    "item": "https://archive.org/details/78_no-regrets_billie-holiday-tobias-ingraham-bunny-berigan-artie-shaw-joe-bushkin-dick_gbia0087220a"
   },
   {
    "src": "https://archive.org/download/78_i-never-knew_lester-young-quartet-lester-young-john-guarnieri-sidney-catlett-slam_gbia0010357a/I%20Never%20Knew%20-%20Lester%20Young%20Quartet%20-%20Lester%20Young.mp3",
    "length": 199.0,
    "series": "Lester Young Quartet",
    "title": "I Never Knew",
    "date": "1943",
    "item": "https://archive.org/details/78_i-never-knew_lester-young-quartet-lester-young-john-guarnieri-sidney-catlett-slam_gbia0010357a"
   },
   {
    "src": "https://archive.org/download/78_birds-nest_charlie-parker-quartet-erroll-garner-charlie-parker-red-callender-harol_gbia0039343a/Bird%27s%20Nest%20-%20Charlie%20Parker%20Quartet%20-%20Erroll%20Garner.mp3",
    "length": 165.0,
    "series": "Charlie Parker Quartet",
    "title": "Bird's Nest",
    "date": "1947",
    "item": "https://archive.org/details/78_birds-nest_charlie-parker-quartet-erroll-garner-charlie-parker-red-callender-harol_gbia0039343a"
   },
   {
    "src": "https://archive.org/download/78_evil-gal-blues_sextet-with-dinah-washington-leonard-feather-milt-buckner-joe-morris_gbia0001638b/Evil%20Gal%20Blues%20-%20Sextet%20with%20Dinah%20Washington.mp3",
    "length": 183.0,
    "series": "Sextet with Dinah Washington",
    "title": "Evil Gal Blues",
    "date": "1943",
    "item": "https://archive.org/details/78_evil-gal-blues_sextet-with-dinah-washington-leonard-feather-milt-buckner-joe-morris_gbia0001638b"
   },
   {
    "src": "https://archive.org/download/JohnnyHodgesOrchestra-TheRabbitsJump/Johnny_Hodges_Orchestra-The_Rabbits_Jump-1939.mp3",
    "length": 161.0,
    "series": "Johnny Hodges Orchestra",
    "title": "The Rabbit's Jump",
    "date": "1939",
    "item": "https://archive.org/details/JohnnyHodgesOrchestra-TheRabbitsJump"
   },
   {
    "src": "https://archive.org/download/c808abirminghamjailr13831835/C-808-A%20-%20Birmingham%20Jail%20%5Br13831835%5D.mp3",
    "length": 131.0,
    "series": "Peggy Lee",
    "title": "Birmingham Jail",
    "date": "1951",
    "item": "https://archive.org/details/c808abirminghamjailr13831835"
   },
   {
    "src": "https://archive.org/download/78_penthouse-serenade-when-were-alone_sarah-vaughan-teddy-wilson-octet-jason-burton_gbia0010711b/Penthouse%20Serenade%20%28When%20We%27re%20Alone%29%20-%20Sarah%20Vaughan.mp3",
    "length": 196.0,
    "series": "Sarah Vaughan",
    "title": "Penthouse Serenade (When We're Alone)",
    "date": "1948",
    "item": "https://archive.org/details/78_penthouse-serenade-when-were-alone_sarah-vaughan-teddy-wilson-octet-jason-burton_gbia0010711b"
   },
   {
    "src": "https://archive.org/download/1-erroll-garner-ao-jazz-selection-js-572-gene-norman-just-jazz-2/1%20Erroll%20Garner%20ao%20-%20Jazz%20Selection%20JS%20572%20Gene%20Norman%20Just%20Jazz%202.mp3",
    "length": 334.0,
    "series": "Erroll Garner, Wardell Gray, Howard McGhee, Benny Carter, Vic Dickenson, Irving Ashby, Red Callender, Jackie Mills",
    "title": "Three / Four o'clock jump (Norman)",
    "date": "1947",
    "item": "https://archive.org/details/1-erroll-garner-ao-jazz-selection-js-572-gene-norman-just-jazz-2"
   },
   {
    "src": "https://archive.org/download/78_a-little-birdie-told-me-so_miss-lee-wiley-joe-bushkins-orchestra-brad-gowans-ernie_gbia0035312b/A%20Little%20Birdie%20Told%20Me%20So%20-%20Miss%20Lee%20Wiley.mp3",
    "length": 185.0,
    "series": "Miss Lee Wiley",
    "title": "A Little Birdie Told Me So",
    "date": "1956",
    "item": "https://archive.org/details/78_a-little-birdie-told-me-so_miss-lee-wiley-joe-bushkins-orchestra-brad-gowans-ernie_gbia0035312b"
   },
   {
    "src": "https://archive.org/download/78_blues-too_teddy-wilson-sextet-teddy-wilson-ben-webster-al-casey-buck-clayton-al-hal_gbia0010706b/Blues%20Too%20-%20Teddy%20Wilson%20Sextet%20-%20Teddy%20Wilson.mp3",
    "length": 192.0,
    "series": "Teddy Wilson Sextet",
    "title": "Blues Too",
    "date": "1945",
    "item": "https://archive.org/details/78_blues-too_teddy-wilson-sextet-teddy-wilson-ben-webster-al-casey-buck-clayton-al-hal_gbia0010706b"
   },
   {
    "src": "https://archive.org/download/CarelesslyTeddyWilsonBillieHoliday/Carelessly%20-%20Teddy%20Wilson%20-%20Billie%20Holiday.mp3",
    "length": 185.0,
    "series": "Teddy Wilson - Billie Holiday",
    "title": "Carelessly - Teddy Wilson - Billie Holiday",
    "date": "1937",
    "item": "https://archive.org/details/CarelesslyTeddyWilsonBillieHoliday"
   },
   {
    "src": "https://archive.org/download/78_deed-i-do_charlie-ventura-his-orch-jackie-cain-roy-kral-benny-green-hirsch-ros_gbia0030195b/Deed%20I%20Do%20-%20Charlie%20Ventura%20%26%20his%20Orch.%20-%20Jackie%20Cain%20%26%20Roy%20Kral.mp3",
    "length": 170.0,
    "series": "Charlie Ventura & his Orchestra",
    "title": "Deed I Do",
    "date": "1948",
    "item": "https://archive.org/details/78_deed-i-do_charlie-ventura-his-orch-jackie-cain-roy-kral-benny-green-hirsch-ros_gbia0030195b"
   },
   {
    "src": "https://archive.org/download/78_hesitation-blues_lena-horne-handy-phil-moore_gbia8000135/01%20-%20BEALE%20STREET%20BLUES%20-%20LENA%20HORNE%20-%20Handy%20-%20PHIL%20MOORE.mp3",
    "length": 194.06,
    "series": "Lena Horne",
    "title": "Beale Street Blues",
    "date": "1947",
    "item": "https://archive.org/details/78_hesitation-blues_lena-horne-handy-phil-moore_gbia8000135"
   },
   {
    "src": "https://archive.org/download/78_rich-mans-blues_dinah-washington-lucky-thompson-and-his-all-stars-lucky-thompson-j_gbia0076161b/Rich%20Man%27s%20Blues%20-%20Dinah%20Washington%20-%20Lucky%20Thompson%20and%20his%20All%20Stars.mp3",
    "length": 178.0,
    "series": "Dinah Washington",
    "title": "Rich Man's Blues",
    "date": "1945",
    "item": "https://archive.org/details/78_rich-mans-blues_dinah-washington-lucky-thompson-and-his-all-stars-lucky-thompson-j_gbia0076161b"
   }
  ]
 },
 {
  "id": "christmas",
  "name": "Christmas",
  "group": "Music",
  "music": true,
  "blurb": "Holiday 78s from every era.",
  "card": "art/cards/christmas.png",
  "epoch": "2026-11-01T00:00:00-07:00",
  "sound": {
   "level": true,
   "declick": 0.8,
   "decrackle": 0.8,
   "tone": 7500
  },
  "tracks": [
   {
    "src": "https://archive.org/download/BillyWhitlocksChristmasWaits1908/BillyWhitlocksChristmasWaits1908.mp3",
    "length": 162.2,
    "series": "Billy Whitlock",
    "title": "Christmas Waits",
    "item": "https://archive.org/details/BillyWhitlocksChristmasWaits1908"
   },
   {
    "src": "https://archive.org/download/78_i-want-a-hippopotamus-for-christmas_vicki-dale-the-peter-pan-orchestra_gbia0000281a/I%20Want%20A%20Hippopotamus%20For%20Christmas%20-%20Vicki%20Dale-restored.mp3",
    "length": 157.94,
    "series": "Vicki Dale",
    "title": "I Want A Hippopotamus For Christmas",
    "date": "1953",
    "item": "https://archive.org/details/78_i-want-a-hippopotamus-for-christmas_vicki-dale-the-peter-pan-orchestra_gbia0000281a"
   },
   {
    "src": "https://archive.org/download/78_1-silent-night_gbia0285885/01%20-%201.%20Silent%20Night.mp3",
    "length": 117.41,
    "series": "",
    "title": "Silent Night",
    "item": "https://archive.org/details/78_1-silent-night_gbia0285885"
   },
   {
    "src": "https://archive.org/download/78_christmas-carols_joseph-walikis-and-his-accordian_gbia0001738a/Christmas%20Carols%20-%20Joseph%20Walikis%20and%20his%20Accordian-restored.mp3",
    "length": 233.64,
    "series": "Joseph Walikis and his Accordian",
    "title": "Christmas Carols",
    "item": "https://archive.org/details/78_christmas-carols_joseph-walikis-and-his-accordian_gbia0001738a"
   },
   {
    "src": "https://archive.org/download/edbw-2814/edbw-2814.mp3",
    "length": 155.06,
    "series": "Frank S. Mazziotta",
    "title": "Sleighride",
    "date": "1898",
    "item": "https://archive.org/details/edbw-2814"
   },
   {
    "src": "https://archive.org/download/78_rudolph-the-red-nosed-reindeer_mike-stewart-the-sandpipers-john-marks-mitchell-mill_gbia0534626/01%20-%20RUDOLPH%20THE%20RED-NOSED%20REINDEER%20-%20MIKE%20STEWART.mp3",
    "length": 105.0,
    "series": "Mike Stewart",
    "title": "Rudolph the Red-Nosed Reindeer",
    "date": "1951",
    "item": "https://archive.org/details/78_rudolph-the-red-nosed-reindeer_mike-stewart-the-sandpipers-john-marks-mitchell-mill_gbia0534626"
   },
   {
    "src": "https://archive.org/download/78_christmas-chimes_chris-chapman_gbia0046844a/Christmas%20Chimes%20-%20Chris%20Chapman.mp3",
    "length": 186.0,
    "series": "Chris Chapman",
    "title": "Christmas Chimes",
    "date": "1920",
    "item": "https://archive.org/details/78_christmas-chimes_chris-chapman_gbia0046844a"
   },
   {
    "src": "https://archive.org/download/78_best-in-town-b-lets-go-to-puerto-rico_dorothy-cameron-edwin-m-rich_gbia0341971/01%20-%20%22BEST%20IN%20TOWN%22%20%28a.%20AN%20ANGEL%20WITH%20ONLY%20ON%20-%20DOROTHY%20CAMERON.mp3",
    "length": 94.18,
    "series": "Dorothy Cameron",
    "title": "Best in Town\" (a. an Angel with Only One Wing)",
    "item": "https://archive.org/details/78_best-in-town-b-lets-go-to-puerto-rico_dorothy-cameron-edwin-m-rich_gbia0341971"
   },
   {
    "src": "https://archive.org/download/78_it-came-upon-a-midnight-clear_george-wright_gbia8005224/01%20-%20SILENT%20NIGHT%20-%20GEORGE%20WRIGHT.mp3",
    "length": 172.0,
    "series": "George Wright",
    "title": "Silent Night",
    "item": "https://archive.org/details/78_it-came-upon-a-midnight-clear_george-wright_gbia8005224"
   },
   {
    "src": "https://archive.org/download/78_im-dreaming-of-a-white-christmas_robert-rheims_gbia0006787a/Im%20Dreaming%20Of%20A%20White%20Christmas%20-%20Robert%20Rheims-restored.mp3",
    "length": 168.0,
    "series": "Robert Rheims",
    "title": "I'm Dreaming Of A White Christmas",
    "item": "https://archive.org/details/78_im-dreaming-of-a-white-christmas_robert-rheims_gbia0006787a"
   },
   {
    "src": "https://archive.org/download/78_hej-w-dzien-narodzenia---christmas-carol---koleda_ignacy-podgorski-i-jego-nadzwycz_gbia0002218b/Hej%21%20W%20Dzien%20Narodzenia%20-%20Christmas%20Carol%20-%20Koleda%20-%20Ignacy%20Podgorski%20i%20jego%20Nadzwyczajna%20Orkiestra.mp3",
    "length": 180.0,
    "series": "Ignacy Podgorski i jego Nadzwyczajna Orkiestra",
    "title": "Hej! W Dzien Narodzenia - Christmas Carol - Koleda",
    "date": "1947",
    "item": "https://archive.org/details/78_hej-w-dzien-narodzenia---christmas-carol---koleda_ignacy-podgorski-i-jego-nadzwycz_gbia0002218b"
   },
   {
    "src": "https://archive.org/download/silent1912/silent1912.mp3",
    "length": 256.1,
    "series": "Elizabeth Spencer, Harry Anthony and James F. Harrison",
    "title": "Silent Night",
    "date": "1912",
    "item": "https://archive.org/details/silent1912"
   },
   {
    "src": "https://archive.org/download/ChristmasSymphonyByLenSpencer1914/ChristmasSymphony1914.mp3",
    "length": 283.33,
    "series": "Len Spencer",
    "title": "Christmas Symphony by Len Spencer",
    "item": "https://archive.org/details/ChristmasSymphonyByLenSpencer1914"
   },
   {
    "src": "https://archive.org/download/edgm-15354/edgm-15354.mp3",
    "length": 129.0,
    "series": "Nebe-Quartett",
    "title": "O, Tannenbaum",
    "date": "1905",
    "item": "https://archive.org/details/edgm-15354"
   },
   {
    "src": "https://archive.org/download/78_concerto-grosso-nr-8-weihnachtskonzert-nr-2_hermann-diener-und-sein-collegium-m_gbia0077032/01%20-%20Concerto%20Gross%20-%20Hermann%20Diener%20und%20Sein%20Collegium%20Musicum.mp3",
    "length": 190.0,
    "series": "Scherings",
    "title": "Concerto Grosso Nr. 8 (Weihnachtskonzert) Nr. 1; Concerto Grosso Nr. 8 (Weihnachtskonzert) Nr. 2",
    "item": "https://archive.org/details/78_concerto-grosso-nr-8-weihnachtskonzert-nr-2_hermann-diener-und-sein-collegium-m_gbia0077032"
   },
   {
    "src": "https://archive.org/download/78_auld-lang-syne_joe-gumin-and-his-orchestra-with-vocal-quartet_gbia0006829b/Auld%20Lang%20Syne%20-%20Joe%20Gumin%20and%20his%20Orchestra%20with%20Vocal%20Quartet.mp3",
    "length": 164.0,
    "series": "Joe Gumin and his Orchestra with Vocal Quartet",
    "title": "Auld Lang Syne",
    "date": "1948",
    "item": "https://archive.org/details/78_auld-lang-syne_joe-gumin-and-his-orchestra-with-vocal-quartet_gbia0006829b"
   },
   {
    "src": "https://archive.org/download/78_frosty-the-snow-man_dick-edwards-the-peter-pan-chorus-and-orchestra-vicky-kasen-nel_gbia0006809a/Frosty%20The%20Snow%20Man%20-%20Dick%20Edwards%20-%20The%20Peter%20Pan%20Chorus%20and%20Orchestra.mp3",
    "length": 168.0,
    "series": "Dick Edwards",
    "title": "Frosty The Snow Man",
    "date": "1950",
    "item": "https://archive.org/details/78_frosty-the-snow-man_dick-edwards-the-peter-pan-chorus-and-orchestra-vicky-kasen-nel_gbia0006809a"
   },
   {
    "src": "https://archive.org/download/78_christmas-eve-at-grandmas_peerless-male-quartet_gbia0072795a/Christmas%20Eve%20at%20Grandma%27s%20-%20Peerless%20Male%20Quartet.mp3",
    "length": 200.0,
    "series": "Peerless Male Quartet",
    "title": "Christmas Eve at Grandma's",
    "date": "1923",
    "item": "https://archive.org/details/78_christmas-eve-at-grandmas_peerless-male-quartet_gbia0072795a"
   },
   {
    "src": "https://archive.org/download/78_pedza-sanki-do-kosciola..-sleigh-ride_kazio-jarzebowski-ork-w.-dana-j.-cass_gbia0002305a/Pedza%20Sanki%20Do%20Kosciola..%20%28Sleigh%20Ride%29%20-%20Kazio%20Jarzebowski.mp3",
    "length": 187.0,
    "series": "Kazio Jarzebowski",
    "title": "Pedza Sanki Do Kosciola.. (Sleigh Ride)",
    "date": "1948",
    "item": "https://archive.org/details/78_pedza-sanki-do-kosciola..-sleigh-ride_kazio-jarzebowski-ork-w.-dana-j.-cass_gbia0002305a"
   },
   {
    "src": "https://archive.org/download/78_a-santa-barbara_celina-y-reutilio_gbia0021521a/A%20Santa%20Barbara%20-%20Celina%20y%20Reutilio.mp3",
    "length": 193.0,
    "series": "Celina y Reutilio",
    "title": "A Santa Barbara",
    "item": "https://archive.org/details/78_a-santa-barbara_celina-y-reutilio_gbia0021521a"
   },
   {
    "src": "https://archive.org/download/ChristmasEveInTheOldHomesteadByGeorgeIslon1907_799/ChristmasEveInTheOldHomestead1907.mp3",
    "length": 154.96,
    "series": "George Islon",
    "title": "Christmas Eve in the Old Homestead by George Islon",
    "item": "https://archive.org/details/ChristmasEveInTheOldHomesteadByGeorgeIslon1907_799"
   },
   {
    "src": "https://archive.org/download/78_du-kaere-gamle-julemand-je-ne-crois-plus-au-pere-noel_svend-nicolaisens-danseork_gbia0120082a/Du%20kaere%2C%20gamle%20julemand%20-%20Svend%20Nicolaisens%20danseorkester.mp3",
    "length": 165.0,
    "series": "Svend Nicolaisens danseorkester",
    "title": "Du kaere, gamle julemand (Je ne crois plus au Pere Noel)",
    "item": "https://archive.org/details/78_du-kaere-gamle-julemand-je-ne-crois-plus-au-pere-noel_svend-nicolaisens-danseork_gbia0120082a"
   },
   {
    "src": "https://archive.org/download/78_good-king-wenceslas-tannenbaum-deck-the-halls_the-varsity-caroleers_gbia0006796b/Good%20King%20Wenceslas%3B%20Tannenbaum%3B%20D%20-%20The%20Varsity%20Caroleers.mp3",
    "length": 204.0,
    "series": "The Varsity Caroleers",
    "title": "Good King Wenceslas; Tannenbaum; Deck The Halls",
    "date": "1950",
    "item": "https://archive.org/details/78_good-king-wenceslas-tannenbaum-deck-the-halls_the-varsity-caroleers_gbia0006796b"
   },
   {
    "src": "https://archive.org/download/78_cantique-de-nol-holy-night_enrico-caruso-adolphe-adam_gbia0322461a/Cantique%20de%20No%C3%ABl%20%28Holy%20Night%29%20-%20Enrico%20Caruso.mp3",
    "length": 254.23,
    "series": "Enrico Caruso",
    "title": "Cantique de Noël (Holy Night)",
    "date": "1916",
    "item": "https://archive.org/details/78_cantique-de-nol-holy-night_enrico-caruso-adolphe-adam_gbia0322461a"
   },
   {
    "src": "https://archive.org/download/Abdessamad_Soura_Maryam_19_1-36_78rpm/SoeraMaryam191-9.mp3",
    "length": 280.0,
    "series": "Abdulbaset Abdessamad (78rpm)",
    "title": "Soera Maryam 1–9 (78rpm)",
    "item": "https://archive.org/details/Abdessamad_Soura_Maryam_19_1-36_78rpm"
   },
   {
    "src": "https://archive.org/download/01.Prelude/01.Prelude.mp3",
    "length": 261.07,
    "series": "Muir Mathieson, London Symphony Orchestra",
    "title": "Prelude",
    "date": "1945",
    "item": "https://archive.org/details/01.Prelude"
   },
   {
    "src": "https://archive.org/download/78_jingle-bell-boogie_freddie-mitchell-orch.-rip-harrigan_gbia0001478a/Jingle%20Bell%20Boogie%20-%20Freddie%20Mitchell%20Orch-restored.mp3",
    "length": 180.26,
    "series": "Freddie Mitchell Orchestra",
    "title": "Jingle Bell Boogie",
    "date": "1949",
    "item": "https://archive.org/details/78_jingle-bell-boogie_freddie-mitchell-orch.-rip-harrigan_gbia0001478a"
   },
   {
    "src": "https://archive.org/download/78_rudolph-the-red-nosed-reindeer_pat-omalley-the-sandpipers-mitchell-miller-and-orch_gbia0499437/01%20-%20RUDOLPH%20THE%20RED-NOSED%20REINDEER%20-%20MICHAEL%20STEWART.mp3",
    "length": 196.0,
    "series": "John Marks",
    "title": "Rudolph the Red-Nosed Reindeer",
    "item": "https://archive.org/details/78_rudolph-the-red-nosed-reindeer_pat-omalley-the-sandpipers-mitchell-miller-and-orch_gbia0499437"
   },
   {
    "src": "https://archive.org/download/78_rudolph-the-rednose-reindeer_meadowlarks-nelson_gbia0323211/01%20-%20FROSTY%20THE%20SNOWMAN%20-%20MEADOWLARKS%20-%20Nelson.mp3",
    "length": 147.65,
    "series": "Meadowlarks",
    "title": "Frosty the Snowman",
    "item": "https://archive.org/details/78_rudolph-the-rednose-reindeer_meadowlarks-nelson_gbia0323211"
   },
   {
    "src": "https://archive.org/download/78_frosty-the-snowman_bud-roman-and-the-toppers-hal-lomen-orchestra-nelson-rollins_gbia0048208a/Frosty%20the%20Snowman%20-%20Bud%20Roman%20and%20The%20Toppers.mp3",
    "length": 162.0,
    "series": "Bud Roman and The Toppers",
    "title": "Frosty the Snowman",
    "date": "1952",
    "item": "https://archive.org/details/78_frosty-the-snowman_bud-roman-and-the-toppers-hal-lomen-orchestra-nelson-rollins_gbia0048208a"
   },
   {
    "src": "https://archive.org/download/78_sleepy-santa_daws-butler-marian-richman-bob-mitchell-ray-erlenborn-bob-bellum_gbia0398990a/SLEEPY%20SANTA%20-%20DAWS%20BUTLER%20%26%20MARIAN%20RICHMAN.mp3",
    "length": 190.1,
    "series": "Daws Butler & Marian Richman",
    "title": "Sleepy Santa",
    "item": "https://archive.org/details/78_sleepy-santa_daws-butler-marian-richman-bob-mitchell-ray-erlenborn-bob-bellum_gbia0398990a"
   },
   {
    "src": "https://archive.org/download/christmasbells1919/christmasbells1919.mp3",
    "length": 180.0,
    "series": "Robert Gayler",
    "title": "Christmas Bells",
    "date": "1919",
    "item": "https://archive.org/details/christmasbells1919"
   },
   {
    "src": "https://archive.org/download/78_...title-songs_mark-warnow-and-his-hit-parade-orchestra_gbia0001208b/Title%20Songs%20-%20Mark%20Warnow%20and%20his%20Hit%20Parade%20Orchestra.mp3",
    "length": 179.0,
    "series": "Mark Warnow and his Hit Parade Orchestra",
    "title": "Happy Little Songs",
    "date": "1945",
    "item": "https://archive.org/details/78_...title-songs_mark-warnow-and-his-hit-parade-orchestra_gbia0001208b"
   },
   {
    "src": "https://archive.org/download/78_communion-hymn-saw-ye-my-saviour_kenny-baker-mary-baker-eddy_gbia8003251/01%20-%20MOTHER%27S%20EVENING%20PRAYER%20%28O%20gentle%20presence%29%20-%20KENNY%20BAKER.mp3",
    "length": 192.43,
    "series": "Kenny Baker, Mary Baker Eddy",
    "title": "Mother's Evening Prayer (O Gentle Presence)",
    "item": "https://archive.org/details/78_communion-hymn-saw-ye-my-saviour_kenny-baker-mary-baker-eddy_gbia8003251"
   },
   {
    "src": "https://archive.org/download/78_how-santa-claus-distributes-his-toys_gilbert-gerard-and-russell-hunting-gerard-hunt_gbia0059079b/How%20Santa%20Claus%20Distr%20-%20Gilbert%20Gerard%20and%20Russell%20Hunting.mp3",
    "length": 201.0,
    "series": "Gilbert Gerard and Russell Hunting",
    "title": "How Santa Claus Distributes His Toys",
    "date": "1920",
    "item": "https://archive.org/details/78_how-santa-claus-distributes-his-toys_gilbert-gerard-and-russell-hunting-gerard-hunt_gbia0059079b"
   },
   {
    "src": "https://archive.org/download/78_christmas-bells_betsy-lane-shephard-s.-liddle_gbia0012662b/Christmas%20Bells%20-%20Betsy%20Lane%20Shephard%20-%20S.%20Liddle.mp3",
    "length": 184.0,
    "series": "Betsy Lane Shephard",
    "title": "Christmas Bells",
    "date": "1922",
    "item": "https://archive.org/details/78_christmas-bells_betsy-lane-shephard-s.-liddle_gbia0012662b"
   },
   {
    "src": "https://archive.org/download/78_marusia-and-the-peacock-on-the-jordan-new-years-and-christmas-carols_ukrainian_gbia0095067b/Marusia%20And%20The%20Peacock%3B%20On%20the%20Jordan%20%20-%20Ukrainian%20Chorus.mp3",
    "length": 206.0,
    "series": "Ukrainian Chorus",
    "title": "Marusia And The Peacock; On the Jordan (New Year's and Christmas Carols)",
    "item": "https://archive.org/details/78_marusia-and-the-peacock-on-the-jordan-new-years-and-christmas-carols_ukrainian_gbia0095067b"
   },
   {
    "src": "https://archive.org/download/78_voila-le-pere-noel-qui-nous-arrive_mde-ed-bolduc-et-sa-famille-mde-bolduc_gbia0016288b/Voila%20le%20Pere%20Noel%20Qui%20Nous%20-%20Mde%20Ed.%20Bolduc%20et%20sa%20famille.mp3",
    "length": 207.0,
    "series": "Mde Ed. Bolduc et sa famille",
    "title": "Voila le Pere Noel Qui Nous Arrive",
    "date": "1931",
    "item": "https://archive.org/details/78_voila-le-pere-noel-qui-nous-arrive_mde-ed-bolduc-et-sa-famille-mde-bolduc_gbia0016288b"
   },
   {
    "src": "https://archive.org/download/78_biale-gody---white-christmas_vivian-bazan-irving-berlin_gbia0002418a/Biale%20Gody%20-%20White%20Christmas%20-%20Vivian%20Bazan.mp3",
    "length": 169.0,
    "series": "Vivian Bazan",
    "title": "Biale Gody - White Christmas",
    "date": "1947",
    "item": "https://archive.org/details/78_biale-gody---white-christmas_vivian-bazan-irving-berlin_gbia0002418a"
   },
   {
    "src": "https://archive.org/download/78_i-want-a-hippopotamus-for-christmas_toby-deane-enoch-light-and-his-orchestra-john-r_gbia0476360a/I%20WANT%20A%20HIPPOPOTAMUS%20FOR%20CHRISTMAS%20-%20TOBY%20DEANE.mp3",
    "length": 163.87,
    "series": "Toby Deane",
    "title": "I Want a Hippopotamus for Christmas",
    "date": "1953",
    "item": "https://archive.org/details/78_i-want-a-hippopotamus-for-christmas_toby-deane-enoch-light-and-his-orchestra-john-r_gbia0476360a"
   },
   {
    "src": "https://archive.org/download/78_christmas-chopsticks-twas-the-night-before-christmas_fred-heider-bobby-burns-pet_gbia0000281b/Christmas%20Chopsticks%20%28%27Twas%20The%20Night%20Before%20Christmas%29%20-%20Fred%20Heider.mp3",
    "length": 166.0,
    "series": "Fred Heider",
    "title": "Christmas Chopsticks ('Twas The Night Before Christmas)",
    "date": "1953",
    "item": "https://archive.org/details/78_christmas-chopsticks-twas-the-night-before-christmas_fred-heider-bobby-burns-pet_gbia0000281b"
   },
   {
    "src": "https://archive.org/download/78_parade-of-the-wooden-soldiers_jessel-elmer-ihrke_gbia0000259a/Parade%20of%20The%20Wooden%20Soldiers%20-%20Jessel%20-%20Elmer%20Ihrke.mp3",
    "length": 163.0,
    "series": "Jessel",
    "title": "Parade of The Wooden Soldiers",
    "date": "1948",
    "item": "https://archive.org/details/78_parade-of-the-wooden-soldiers_jessel-elmer-ihrke_gbia0000259a"
   },
   {
    "src": "https://archive.org/download/78_carol---noel-silent-night_stamford-high-school-a-cappella-choir-gruber-wilhousky-w_gbia0001195b/Carol%20-%20Noel%3B%20Silent%20Night%20-%20Stamford%20High%20School%20A%20Cappella%20Choir.mp3",
    "length": 184.0,
    "series": "Stamford High School A Cappella Choir",
    "title": "Carol - Noel; Silent Night",
    "date": "1950",
    "item": "https://archive.org/details/78_carol---noel-silent-night_stamford-high-school-a-cappella-choir-gruber-wilhousky-w_gbia0001195b"
   },
   {
    "src": "https://archive.org/download/electra-600/electra-600.mp3",
    "length": 122.0,
    "series": "Elektra-Symphonie-Orchester",
    "title": "Stille Nacht, heilige Nacht",
    "item": "https://archive.org/details/electra-600"
   },
   {
    "src": "https://archive.org/download/78_rudolph-the-red-nosed-reindeer_arizona-cliff-martin-music-hall-orchestra_gbia0006810a/Rudolph%20The%20Red%20Nosed%20Reindeer%20-%20Arizona%20Cliff%20Martin.mp3",
    "length": 177.0,
    "series": "Arizona Cliff Martin",
    "title": "Rudolph The Red Nosed Reindeer",
    "date": "1953",
    "item": "https://archive.org/details/78_rudolph-the-red-nosed-reindeer_arizona-cliff-martin-music-hall-orchestra_gbia0006810a"
   },
   {
    "src": "https://archive.org/download/78_jingle-bells-deck-the-halls-up-on-the-housetop_dick-byron-and-the-sandpiper-chorus-_gbia0534123/01%20-%20JINGLE%20BELLS%20-%20DICK%20BYRON%20AND%20THE%20SANDPIPER%20CHORUS.mp3",
    "length": 102.0,
    "series": "Dick Byron and the Sandpiper Chorus",
    "title": "Jingle Bells; Deck the Halls; Up on the Housetop",
    "item": "https://archive.org/details/78_jingle-bells-deck-the-halls-up-on-the-housetop_dick-byron-and-the-sandpiper-chorus-_gbia0534123"
   },
   {
    "src": "https://archive.org/download/78_lets-light-the-christmas-tree_jack-brown-and-the-three-jills-ruth-lyons-chic-gatwo_gbia0085047a/Let%27s%20Light%20the%20Christmas%20Tree%20-%20Jack%20Brown%20and%20The%20Three%20Jills.mp3",
    "length": 181.0,
    "series": "Jack Brown and The Three Jills",
    "title": "Let's Light the Christmas Tree",
    "date": "1948",
    "item": "https://archive.org/details/78_lets-light-the-christmas-tree_jack-brown-and-the-three-jills-ruth-lyons-chic-gatwo_gbia0085047a"
   },
   {
    "src": "https://archive.org/download/78_we-three-kings-of-orient-are-at-solemn-midnight-lo-how-a-rose-eer-blooming_char_gbia0034358a/We%20Three%20Kings%20of%20Orient%20Are%3B%20At%20Sole%20-%20Charles%20R.%20Cronham.mp3",
    "length": 209.0,
    "series": "Charles R. Cronham",
    "title": "We Three Kings of Orient Are; At Solemn Midnight; Lo, How a Rose E'er Blooming",
    "date": "1960",
    "item": "https://archive.org/details/78_we-three-kings-of-orient-are-at-solemn-midnight-lo-how-a-rose-eer-blooming_char_gbia0034358a"
   },
   {
    "src": "https://archive.org/download/78_funny-little-snow-man_bobby-sabatino-and-the-charles-kenny-orchestra-nick-kenny-j._gbia0005291b/Funny%20Little%20Snow%20Man%20-%20Bobby%20Sabatino%20and%20The%20Charles%20Kenny%20Orchestra.mp3",
    "length": 186.0,
    "series": "Bobby Sabatino and The Charles Kenny Orchestra",
    "title": "Funny Little Snow Man",
    "date": "1953",
    "item": "https://archive.org/details/78_funny-little-snow-man_bobby-sabatino-and-the-charles-kenny-orchestra-nick-kenny-j._gbia0005291b"
   },
   {
    "src": "https://archive.org/download/78_how-i-hate-to-see-xmas-come-around_jimmy-witherspoon_gbia0060588b/How%20I%20Hate%20to%20See%20Xmas%20Come%20Around%20-%20Jimmy%20Witherspoon.mp3",
    "length": 184.0,
    "series": "Jimmy Witherspoon",
    "title": "How I Hate to See Xmas Come Around",
    "date": "1950",
    "item": "https://archive.org/details/78_how-i-hate-to-see-xmas-come-around_jimmy-witherspoon_gbia0060588b"
   },
   {
    "src": "https://archive.org/download/WestbrookConservatoryEntertainers-SilentNight/18Track18.mp3",
    "length": 183.0,
    "series": "Westbrook Conservatory Entertainers",
    "title": "Silent Night",
    "item": "https://archive.org/details/WestbrookConservatoryEntertainers-SilentNight"
   },
   {
    "src": "https://archive.org/download/82487-bing-crosby-white-christmas/82487%20Bing%20Crosby%20-%20White%20Christmas.mp3",
    "length": 186.0,
    "series": "Bing Crosby - Gesang, John Scott Trotter & His Orchestra, Ken Darby Singers",
    "title": "White Christmas (Irving Berlin)",
    "date": "1951",
    "item": "https://archive.org/details/82487-bing-crosby-white-christmas"
   },
   {
    "src": "https://archive.org/download/78_silent-night-holy-night_hackel-berge-trio-franz-gruber_gbia0016346b/Silent%20Night%2C%20Holy%20Night%20-%20Hackel%20Berge%20Trio.mp3",
    "length": 177.0,
    "series": "Hackel Berge Trio",
    "title": "Silent Night, Holy Night",
    "date": "1922",
    "item": "https://archive.org/details/78_silent-night-holy-night_hackel-berge-trio-franz-gruber_gbia0016346b"
   },
   {
    "src": "https://archive.org/download/78_wait-till-after-christmas_john-greer-thomas-greer_gbia0061007a/Wait%20Till%20After%20Christmas%20-%20John%20Greer%20-%20Thomas.mp3",
    "length": 178.0,
    "series": "John Greer",
    "title": "Wait Till After Christmas",
    "date": "1954",
    "item": "https://archive.org/details/78_wait-till-after-christmas_john-greer-thomas-greer_gbia0061007a"
   },
   {
    "src": "https://archive.org/download/78_o-come-ye-merry-gentleman_elmer-ihrke_gbia0318153a/O%20COME%20YE%20MERRY%20GENTLEMAN%20-%20Elmer%20Ihrke.mp3",
    "length": 172.92,
    "series": "Elmer Ihrke",
    "title": "O Come Ye Merry Gentleman",
    "item": "https://archive.org/details/78_o-come-ye-merry-gentleman_elmer-ihrke_gbia0318153a"
   },
   {
    "src": "https://archive.org/download/78_nuttin-for-xmas_joe-ward-dave-terry-bennett-tepper_gbia0010371a/Nuttin%20For%20Xmas%20-%20Joe%20Ward%20-%20Dave%20Terry%20-%20Bennett.mp3",
    "length": 141.0,
    "series": "Joe Ward",
    "title": "Nuttin For Xmas",
    "date": "1955",
    "item": "https://archive.org/details/78_nuttin-for-xmas_joe-ward-dave-terry-bennett-tepper_gbia0010371a"
   },
   {
    "src": "https://archive.org/download/78_christmas-bells_robert-gaylee_gbia0300512b/Christmas%20Bells%20-%20ROBERT%20GAYLEE.mp3",
    "length": 187.73,
    "series": "Robert Gaylee",
    "title": "Christmas Bells",
    "date": "1920",
    "item": "https://archive.org/details/78_christmas-bells_robert-gaylee_gbia0300512b"
   },
   {
    "src": "https://archive.org/download/78_gwiazdor_mad-man-michaels-michaels_gbia0082280a/Gwiazdor%20-%20Mad%20Man%20Michaels%20-%20Michaels.mp3",
    "length": 204.0,
    "series": "Mad Man Michaels",
    "title": "Gwiazdor",
    "date": "1955",
    "item": "https://archive.org/details/78_gwiazdor_mad-man-michaels-michaels_gbia0082280a"
   },
   {
    "src": "https://archive.org/download/78_lt-barn-er-foedt-i-bethlehem_medlemmer-af-radiokoret-palle-alsfelt-n-f-s-grundt_gbia0122325a/L%27t%20Barn%20er%20foedt%20i%20Bethlehem%20-%20Medlemmer%20af%20Radiokoret.mp3",
    "length": 210.0,
    "series": "Medlemmer af Radiokoret",
    "title": "L't Barn er foedt i Bethlehem",
    "item": "https://archive.org/details/78_lt-barn-er-foedt-i-bethlehem_medlemmer-af-radiokoret-palle-alsfelt-n-f-s-grundt_gbia0122325a"
   },
   {
    "src": "https://archive.org/download/78_jingle-bells-the-farmer-in-the-dell-sing-a-song-of-sixpence_jack-jill-singers-maste_gbia0533815/01%20-%20THE%20FARMER%20IN%20THE%20DELL%20-%20JACK%20%26%20JILL%20SINGERS.mp3",
    "length": 116.0,
    "series": "Jack & Jill Singers",
    "title": "Jingle Bells; the Farmer in the Dell; Sing a Song of Sixpence",
    "item": "https://archive.org/details/78_jingle-bells-the-farmer-in-the-dell-sing-a-song-of-sixpence_jack-jill-singers-maste_gbia0533815"
   },
   {
    "src": "https://archive.org/download/78_der-tannenbaum-the-christmas-tree_hulda-lashanska-paul-reimers_gbia0041336b/Der%20Tannenbaum%20%28The%20Christmas%20Tree%29%20-%20Hulda%20Lashanska.mp3",
    "length": 171.0,
    "series": "Hulda Lashanska",
    "title": "Der Tannenbaum (The Christmas Tree)",
    "date": "1927",
    "item": "https://archive.org/details/78_der-tannenbaum-the-christmas-tree_hulda-lashanska-paul-reimers_gbia0041336b"
   },
   {
    "src": "https://archive.org/download/78_let-it-snow-let-it-snow-let-it-snow_danny-oneil-ruby-newman-styne-cahn_gbia0012903b/Let%20It%20Snow%21%20Let%20It%20Snow%21%20Let%20It%20Snow%21%20-%20Danny%20O%27Neil.mp3",
    "length": 156.0,
    "series": "Danny O'Neil",
    "title": "Let It Snow! Let It Snow! Let It Snow!",
    "date": "1945",
    "item": "https://archive.org/details/78_let-it-snow-let-it-snow-let-it-snow_danny-oneil-ruby-newman-styne-cahn_gbia0012903b"
   },
   {
    "src": "https://archive.org/download/78_i-saw-mommy-cha-cha-cha-with-you-know-who_bonnie-sisters-allen-stillman-connors_gbia0060408a/I%20Saw%20Mommy%20Cha%20Cha%20Cha%20with%20You%20Know%20Who%20-%20Bonnie%20Sisters.mp3",
    "length": 180.0,
    "series": "Bonnie Sisters",
    "title": "I Saw Mommy Cha Cha Cha with You Know Who?",
    "date": "1956",
    "item": "https://archive.org/details/78_i-saw-mommy-cha-cha-cha-with-you-know-who_bonnie-sisters-allen-stillman-connors_gbia0060408a"
   },
   {
    "src": "https://archive.org/download/78_the-story-of-the-first-christmas-tree_jim-ameche-fr.-flannery-j.-oliver_gbia0006803b/The%20Story%20of%20The%20First%20Christmas%20Tree%20-%20Jim%20Ameche.mp3",
    "length": 221.0,
    "series": "Jim Ameche",
    "title": "The Story of The First Christmas Tree",
    "item": "https://archive.org/details/78_the-story-of-the-first-christmas-tree_jim-ameche-fr.-flannery-j.-oliver_gbia0006803b"
   },
   {
    "src": "https://archive.org/download/78_the-be-bop-santa-claus_babs-gonzalez-lloyd-williams_gbia0052890a/The%20Be-Bop%20Santa%20Claus%20-%20Babs%20Gonzalez%20-%20Lloyd%20Williams.mp3",
    "length": 203.0,
    "series": "Babs Gonzalez",
    "title": "The Be-Bop Santa Claus",
    "date": "1957",
    "item": "https://archive.org/details/78_the-be-bop-santa-claus_babs-gonzalez-lloyd-williams_gbia0052890a"
   },
   {
    "src": "https://archive.org/download/78_frosty-the-snow-man_pat-omalley-rollins-nelson-the-sandpipers-mitchell-miller-and_gbia0001241b/Frosty%20The%20Snow%20Man%20-%20Pat%20O%27Malley%20-%20Rollins.mp3",
    "length": 177.0,
    "series": "Pat O'Malley",
    "title": "Frosty The Snow Man",
    "date": "1950",
    "item": "https://archive.org/details/78_frosty-the-snow-man_pat-omalley-rollins-nelson-the-sandpipers-mitchell-miller-and_gbia0001241b"
   },
   {
    "src": "https://archive.org/download/78_white-christmas_sonny-walikis-and-his-squeeze-boy_gbia0001730b/White%20Christmas%20-%20Sonny%20Walikis%20and%20his%20Squeeze%20Boy.mp3",
    "length": 250.0,
    "series": "Sonny Walikis and his Squeeze Box",
    "title": "White Christmas",
    "item": "https://archive.org/details/78_white-christmas_sonny-walikis-and-his-squeeze-boy_gbia0001730b"
   },
   {
    "src": "https://archive.org/download/AdolfGluck-WeihnachtenAmKlavier/AdolfGlckWeihnachtenAmKlavier1929-78rpmPublicDomain.mp3",
    "length": 304.9,
    "series": "Adolf Gluck",
    "title": "Weihnachten Am Klavier",
    "item": "https://archive.org/details/AdolfGluck-WeihnachtenAmKlavier"
   },
   {
    "src": "https://archive.org/download/78_great-christmas-part-2_errol-garner-garner_gbia0062402/01%20-%20Great%20Christmas%20-%20Part%201%20-%20Errol%20Garner%20-%20Garner.mp3",
    "length": 139.0,
    "series": "Errol Garner",
    "title": "Great Christmas - Part 1; Great Christmas - Part 2",
    "date": "1949",
    "item": "https://archive.org/details/78_great-christmas-part-2_errol-garner-garner_gbia0062402"
   },
   {
    "src": "https://archive.org/download/WillieLewisAndHisNegroBand-ChristmasNightInHarlem/Willie_Lewis_and_his_Negro_Band-Christmas_Night_In_Harlem.mp3",
    "length": 136.0,
    "series": "Willie Lewis and his Negro Band",
    "title": "Christmas Night In Harlem",
    "date": "1941",
    "item": "https://archive.org/details/WillieLewisAndHisNegroBand-ChristmasNightInHarlem"
   },
   {
    "src": "https://archive.org/download/StevePorterwithColumbiaQuartet/StevePorterwithColumbiaQuartet-ChristmasMorningatFlannigans.mp3",
    "length": 167.0,
    "series": "Steve Porter with Columbia Quartet",
    "title": "Christmas Morning at Flannigan's",
    "date": "1906",
    "item": "https://archive.org/details/StevePorterwithColumbiaQuartet"
   },
   {
    "src": "https://archive.org/download/colwdc-10003/colwdc-10003.mp3",
    "length": 167.78,
    "series": "W.O. Beckenbaugh",
    "title": "Sale of toys, dolls and so forth on Christmas Eve Night",
    "date": "1896",
    "item": "https://archive.org/details/colwdc-10003"
   },
   {
    "src": "https://archive.org/download/SantaAndTheDoodle-li-booptwasTheNightBeforeChristmas-artCarney/SantaAndTheDoodle-li-boop--artCarney.mp3",
    "length": 154.0,
    "series": "Abel",
    "title": "Santa and the Doodle-li-boop & 'twas the night before Christmas-Art Carney",
    "item": "https://archive.org/details/SantaAndTheDoodle-li-booptwasTheNightBeforeChristmas-artCarney"
   },
   {
    "src": "https://archive.org/download/78_there-aint-no-santa-clause_ben-samberg-benny-bell_gbia0000278b/There%20Ain%27t%20No%20Santa%20Clause%20-%20Ben%20Samberg.mp3",
    "length": 179.0,
    "series": "Ben Samberg",
    "title": "There Ain't No Santa Clause",
    "item": "https://archive.org/details/78_there-aint-no-santa-clause_ben-samberg-benny-bell_gbia0000278b"
   },
   {
    "src": "https://archive.org/download/78_1-joy-to-the-world-2-good-king-wenceslas-3-angels-we-have-heard-on-high_ray-bl_gbia8003366/01%20-%201.%20Here%20We%20Come%20A-Caroli%20-%20RAY%20BLOCH%20his%20Choir%20%26%20Orchestra.mp3",
    "length": 199.49,
    "series": "Ray Bloch His Choir & Orchestra",
    "title": "Here We Come A-Caroling; 2. The First Noel; 3. God Rest Ye Merry Gentlemen",
    "date": "1946",
    "item": "https://archive.org/details/78_1-joy-to-the-world-2-good-king-wenceslas-3-angels-we-have-heard-on-high_ray-bl_gbia8003366"
   },
   {
    "src": "https://archive.org/download/78_o-sanctissima-o-du-frohliche_richard-tauber_gbia0021682b/O%20Sanctissima%20%28O%20Du%20Frohliche%29%20-%20Richard%20Tauber.mp3",
    "length": 173.0,
    "series": "Richard Tauber",
    "title": "O Sanctissima (O Du Frohliche)",
    "date": "1929",
    "item": "https://archive.org/details/78_o-sanctissima-o-du-frohliche_richard-tauber_gbia0021682b"
   },
   {
    "src": "https://archive.org/download/78_jingle-bells_country-dance-band_gbia0006954a/Jingle%20Bells%20-%20Country%20Dance%20Band.mp3",
    "length": 203.0,
    "series": "Country Dance Band",
    "title": "Jingle Bells",
    "date": "1948",
    "item": "https://archive.org/details/78_jingle-bells_country-dance-band_gbia0006954a"
   },
   {
    "src": "https://archive.org/download/78_the-christmas-song_monica-lewis-ray-bloch-and-his-orchestra-torme-wells_gbia0014394b/The%20Christmas%20Song%20-%20Monica%20Lewis%20-%20Ray%20Bloch%20and%20His%20Orchestra.mp3",
    "length": 187.0,
    "series": "Monica Lewis",
    "title": "The Christmas Song",
    "date": "1947",
    "item": "https://archive.org/details/78_the-christmas-song_monica-lewis-ray-bloch-and-his-orchestra-torme-wells_gbia0014394b"
   },
   {
    "src": "https://archive.org/download/78_christmas-island_glenn-davis-lyle-moraine_gbia0378583a/CHRISTMAS%20ISLAND%20-%20GLENN%20DAVIS%20-%20Lyle%20Moraine.mp3",
    "length": 179.33,
    "series": "Glenn Davis",
    "title": "Christmas Island",
    "item": "https://archive.org/details/78_christmas-island_glenn-davis-lyle-moraine_gbia0378583a"
   },
   {
    "src": "https://archive.org/download/78_i-wouldnt-have-you-on-a-christmas-tree_dick-stratton-and-his-nite-owls-dick-stratt_gbia0006817b/I%20Wouldn%27t%20Have%20You%20On%20A%20-%20Dick%20Stratton%20and%20his%20Nite%20Owls.mp3",
    "length": 147.0,
    "series": "Dick Stratton and his Nite Owls",
    "title": "I Wouldn't Have You On A Christmas Tree",
    "date": "1950",
    "item": "https://archive.org/details/78_i-wouldnt-have-you-on-a-christmas-tree_dick-stratton-and-his-nite-owls-dick-stratt_gbia0006817b"
   },
   {
    "src": "https://archive.org/download/78_o-little-town-of-bethlehem_st-marys-seminary-choir-gravier-manzetti-rev-john-c_gbia8000505/01%20-%20ADESTE%20FIDELES%20-%20St.%20Mary%27s%20Seminary%20Choir.mp3",
    "length": 182.54,
    "series": "St. Mary's Seminary Choir",
    "title": "Adeste Fideles",
    "item": "https://archive.org/details/78_o-little-town-of-bethlehem_st-marys-seminary-choir-gravier-manzetti-rev-john-c_gbia8000505"
   },
   {
    "src": "https://archive.org/download/78_silent-night_warren-averel-william-ashley-tappin_gbia0072877a/Silent%20Night%20-%20Warren%20Averel%20-%20William%20Ashley%20Tappin.mp3",
    "length": 174.0,
    "series": "Warren Averel",
    "title": "Silent Night",
    "item": "https://archive.org/details/78_silent-night_warren-averel-william-ashley-tappin_gbia0072877a"
   },
   {
    "src": "https://archive.org/download/78_what-is-christmas_edward-penney-larry-forbes-jack-richards-and-ed-penney_gbia0163253a/%22WHAT%20IS%20CHRISTMAS%22%20-%20Edward%20Penney%20-%20Larry%20Forbes.mp3",
    "length": 196.0,
    "series": "Edward Penney",
    "title": "what is Christmas",
    "item": "https://archive.org/details/78_what-is-christmas_edward-penney-larry-forbes-jack-richards-and-ed-penney_gbia0163253a"
   },
   {
    "src": "https://archive.org/download/78_der-tannenbaum-the-christmas-tree_alma-gluck-paul-reimers-volkslied_gbia0006813b/Der%20Tannenbaum%20%28The%20Christmas%20Tree%29%20-%20Alma%20Gluck.mp3",
    "length": 192.0,
    "series": "Alma Gluck",
    "title": "Der Tannenbaum (The Christmas Tree)",
    "date": "1915",
    "item": "https://archive.org/details/78_der-tannenbaum-the-christmas-tree_alma-gluck-paul-reimers-volkslied_gbia0006813b"
   },
   {
    "src": "https://archive.org/download/78_rudolph-the-red-nosed-reindeer_art-gentry-with-the-happy-tones-johnny-marks_gbia0546454a/RUDOLPH%20THE%20RED%20NOSED%20REINDEER%20-%20ART%20GENTRY%20with%20The%20Happy%20Tones.mp3",
    "length": 166.0,
    "series": "Art Gentry with the Happy Tones",
    "title": "Rudolph the Red Nosed Reindeer",
    "item": "https://archive.org/details/78_rudolph-the-red-nosed-reindeer_art-gentry-with-the-happy-tones-johnny-marks_gbia0546454a"
   },
   {
    "src": "https://archive.org/download/ChristmasTimeInMerryEnglandByTheEdisonConcertBand1906/ChristmasTimeInMerryEngland1906.mp3",
    "length": 135.26,
    "series": "Edison Concert Band",
    "title": "Christmas Time in Merry England by The Edison Concert Band",
    "item": "https://archive.org/details/ChristmasTimeInMerryEnglandByTheEdisonConcertBand1906"
   },
   {
    "src": "https://archive.org/download/78_jingle-bells_betty-lou-tommy-riggs_gbia0475683/01%20-%20SILENT%20NIGHT%20-%20BETTY%20LOU%20-%20Tommy%20Riggs.mp3",
    "length": 167.81,
    "series": "Tommy Riggs",
    "title": "Betty Lou",
    "item": "https://archive.org/details/78_jingle-bells_betty-lou-tommy-riggs_gbia0475683"
   },
   {
    "src": "https://archive.org/download/78_merry-christmas-baby_thelma-cooper-three-smarties_gbia0059116a/Merry%20Christmas%20Baby%20-%20Thelma%20Cooper%20-%20Three%20Smarties.mp3",
    "length": 151.0,
    "series": "Thelma Cooper",
    "title": "Merry Christmas Baby",
    "date": "1948",
    "item": "https://archive.org/details/78_merry-christmas-baby_thelma-cooper-three-smarties_gbia0059116a"
   },
   {
    "src": "https://archive.org/download/78_white-christmas_jack-russell-the-honey-dreamers-vicky-kasen-irving-berlin_gbia0043957a/White%20Christmas%20-%20Jack%20Russell%20-%20The%20Honey%20Dreamers.mp3",
    "length": 184.0,
    "series": "Jack Russell",
    "title": "White Christmas",
    "item": "https://archive.org/details/78_white-christmas_jack-russell-the-honey-dreamers-vicky-kasen-irving-berlin_gbia0043957a"
   },
   {
    "src": "https://archive.org/download/edgm-15955/edgm-15955.mp3",
    "length": 136.0,
    "series": "Edison-Quartett",
    "title": "Es ist ein Ros' entsprungen",
    "date": "1908",
    "item": "https://archive.org/details/edgm-15955"
   },
   {
    "src": "https://archive.org/download/78_i-remember-christmas_jimmy-collett-lynn-weir-smith_gbia0006789b/I%20Remember%20Christmas%20-%20Jimmy%20Collett%20-%20Lynn%20Weir%20Smith.mp3",
    "length": 153.0,
    "series": "Jimmy Collett",
    "title": "I Remember Christmas",
    "date": "1952",
    "item": "https://archive.org/details/78_i-remember-christmas_jimmy-collett-lynn-weir-smith_gbia0006789b"
   },
   {
    "src": "https://archive.org/download/santahide1922/santahide1922.mp3",
    "length": 209.0,
    "series": "Harry E. Humphrey",
    "title": "Santa Claus Hides In Your Phonograph",
    "date": "1922",
    "item": "https://archive.org/details/santahide1922"
   },
   {
    "src": "https://archive.org/download/78_christmas-in-heaven_billy-ward-and-his-dominoes-billy-ward_gbia0063125b/Christmas%20In%20Heaven%20-%20Billy%20Ward%20And%20His%20Dominoes.mp3",
    "length": 169.0,
    "series": "Billy Ward And His Dominoes",
    "title": "Christmas In Heaven",
    "date": "1953",
    "item": "https://archive.org/details/78_christmas-in-heaven_billy-ward-and-his-dominoes-billy-ward_gbia0063125b"
   },
   {
    "src": "https://archive.org/download/78_3-it-came-upon-a-midnight-clear_the-choristers_gbia0285888/01%20-%201.%20Deck%20the%20Halls%20-%20THE%20CHORISTERS.mp3",
    "length": 124.42,
    "series": "The Choristers",
    "title": "Deck the Halls",
    "item": "https://archive.org/details/78_3-it-came-upon-a-midnight-clear_the-choristers_gbia0285888"
   },
   {
    "src": "https://archive.org/download/78_here-comes-santa-claus_john-santa-klaus-with-orchestra-autry-haldeman-melka_gbia0006851a/Here%20Comes%20Santa%20Claus%20-%20John%20%28Santa%29%20Klaus%20with%20Orchestra.mp3",
    "length": 158.0,
    "series": "John",
    "title": "Here Comes Santa Claus",
    "item": "https://archive.org/details/78_here-comes-santa-claus_john-santa-klaus-with-orchestra-autry-haldeman-melka_gbia0006851a"
   },
   {
    "src": "https://archive.org/download/78_boheme-racconto-di-rodolfo-rudolphs-narrative_giovanni-martinelli-puccini_gbia0105027b/Boheme-Racconto%20di%20Rodolfo%20%28Rudolph%27%20-%20Giovanni%20Martinelli.mp3",
    "length": 258.0,
    "series": "Giovanni Martinelli",
    "title": "Boheme-Racconto di Rodolfo (Rudolph's Narrative)",
    "date": "1926",
    "item": "https://archive.org/details/78_boheme-racconto-di-rodolfo-rudolphs-narrative_giovanni-martinelli-puccini_gbia0105027b"
   },
   {
    "src": "https://archive.org/download/78_cicha-noc-silent-night_polish-flyers-quartet-jan-wojewdka-and-warsaw-polish-orchest_gbia0531169a/CICHA%20NOC%20-%20SILENT%20NIGHT%20-%20Polish%20Flyers%20Quartet.mp3",
    "length": 165.0,
    "series": "Polish Flyers Quartet",
    "title": "Cicha Noc - Silent Night",
    "item": "https://archive.org/details/78_cicha-noc-silent-night_polish-flyers-quartet-jan-wojewdka-and-warsaw-polish-orchest_gbia0531169a"
   },
   {
    "src": "https://archive.org/download/78_i-dont-want-to-be-alone-for-christmas_menaker-donafrio-russell_gbia0006789a/I%20Don%27t%20Want%20To%20Be%20Alone%20For%20Christmas%20-%20Menaker.mp3",
    "length": 187.0,
    "series": "Menaker",
    "title": "I Don't Want To Be Alone For Christmas",
    "date": "1952",
    "item": "https://archive.org/details/78_i-dont-want-to-be-alone-for-christmas_menaker-donafrio-russell_gbia0006789a"
   },
   {
    "src": "https://archive.org/download/78_good-king-wenceslas-tannenbaum-deck-the-hall_sonora-choristers-eugene-mott_gbia0071973/01%20-%20Adeste%20Fideles%20%28O%20Come%2C%20All%20Ye%20Faithfu%20-%20Sonora%20Choristers.mp3",
    "length": 188.0,
    "series": "Sonora Choristers",
    "title": "Adeste Fideles (O Come, All Ye Faithful)",
    "date": "1945",
    "item": "https://archive.org/details/78_good-king-wenceslas-tannenbaum-deck-the-hall_sonora-choristers-eugene-mott_gbia0071973"
   },
   {
    "src": "https://archive.org/download/78_youre-all-i-want-for-christmas_frank-gallagher-dana-serenaders-glen-moore-seger-el_gbia0024837b/You%27re%20All%20I%20Want%20for%20Christmas%20-%20Frank%20Gallagher.mp3",
    "length": 209.0,
    "series": "Frank Gallagher",
    "title": "You're All I Want for Christmas",
    "date": "1949",
    "item": "https://archive.org/details/78_youre-all-i-want-for-christmas_frank-gallagher-dana-serenaders-glen-moore-seger-el_gbia0024837b"
   },
   {
    "src": "https://archive.org/download/78_winter-wonderland_lenny-and-judith-lil-wally-and-the-lucky-harmony-boys-orchestra_gbia0082304b/Winter%20Wonderland%20-%20Lenny%20and%20Judith%20-%20Li%27l%20Wally%20And%20The%20Lucky%20Harmony%20Boys%20Orchestra.mp3",
    "length": 130.0,
    "series": "Lenny and Judith",
    "title": "Winter Wonderland",
    "date": "1956",
    "item": "https://archive.org/details/78_winter-wonderland_lenny-and-judith-lil-wally-and-the-lucky-harmony-boys-orchestra_gbia0082304b"
   },
   {
    "src": "https://archive.org/download/78_christmas-bells_salnow-and-shutt_gbia0081053a/Christmas%20Bells%20-%20Salnow%20and%20Shutt.mp3",
    "length": 183.0,
    "series": "Salnow and Shutt",
    "title": "Christmas Bells",
    "date": "1910",
    "item": "https://archive.org/details/78_christmas-bells_salnow-and-shutt_gbia0081053a"
   },
   {
    "src": "https://archive.org/download/78_lulajze-jezuniu_choir-of-the-holy-cross-church-in-warsaw-chor-kosciola-sw-krzyza_gbia0060908b/Lulajze%20Jezuniu%20-%20Choir%20of%20the%20Holy%20Cross%20Church%20in%20Warsaw%20%28Chor%20Kosciola%20Sw.%20Krzyza%20w%20Warszawie%29.mp3",
    "length": 172.0,
    "series": "Choir of the Holy Cross Church in Warsaw",
    "title": "Lulajze Jezuniu",
    "item": "https://archive.org/details/78_lulajze-jezuniu_choir-of-the-holy-cross-church-in-warsaw-chor-kosciola-sw-krzyza_gbia0060908b"
   },
   {
    "src": "https://archive.org/download/78_hell-be-coming-down-the-chimney_enoch-light-and-his-orch.-jack-brown-al-j.-neibirg_gbia0001781a/He%27ll%20Be%20Coming%20Down%20The%20Chimney%20-%20Enoch%20Light%20and%20his%20Orch..mp3",
    "length": 189.0,
    "series": "Enoch Light and his Orchestra",
    "title": "He'll Be Coming Down The Chimney",
    "date": "1951",
    "item": "https://archive.org/details/78_hell-be-coming-down-the-chimney_enoch-light-and-his-orch.-jack-brown-al-j.-neibirg_gbia0001781a"
   },
   {
    "src": "https://archive.org/download/78_the-chipmunk-song_r.-bagdesarian-paul-sherman_gbia0000453a/The%20Chipmunk%20Song%20-%20R.%20Bagdesarian%20-%20Paul%20Sherman-restored.mp3",
    "length": 135.19,
    "series": "R. Bagdesarian",
    "title": "The Chipmunk Song",
    "item": "https://archive.org/details/78_the-chipmunk-song_r.-bagdesarian-paul-sherman_gbia0000453a"
   },
   {
    "src": "https://archive.org/download/78_christmas-in-your-heart_luis-russell-and-his-orchestra-kizer-russell-lee-richardson_gbia0001205a/Christmas%20In%20Your%20Heart%20-%20Luis%20Russell%20and%20his%20Orchestra.mp3",
    "length": 188.0,
    "series": "Luis Russell and his Orchestra",
    "title": "Christmas In Your Heart",
    "date": "1946",
    "item": "https://archive.org/details/78_christmas-in-your-heart_luis-russell-and-his-orchestra-kizer-russell-lee-richardson_gbia0001205a"
   },
   {
    "src": "https://archive.org/download/78_belfry-chimes_the-silvertone-trio-strickland_gbia0006848a/Belfry%20Chimes%20-%20The%20Silvertone%20Trio%20-%20Strickland.mp3",
    "length": 165.0,
    "series": "The Silvertone Trio",
    "title": "Belfry Chimes",
    "date": "1928",
    "item": "https://archive.org/details/78_belfry-chimes_the-silvertone-trio-strickland_gbia0006848a"
   },
   {
    "src": "https://archive.org/download/78_underneath-the-misteltoe_three-reinerts-and-sussie-don-gais-trio-don-gais-helge-ja_gbia0124299a/Underneath%20the%20misteltoe%20-%20Three%20Reinerts%20and%20Sussie.mp3",
    "length": 153.0,
    "series": "Three Reinerts and Sussie",
    "title": "Underneath the misteltoe",
    "item": "https://archive.org/details/78_underneath-the-misteltoe_three-reinerts-and-sussie-don-gais-trio-don-gais-helge-ja_gbia0124299a"
   },
   {
    "src": "https://archive.org/download/78_santa-claus-is-comin-to-town_ray-bloch-and-his-orchestra-cahn-styne-the-eldorado-f_gbia0014393/01%20-%20Santa%20Claus%20Is%20Comin%27%20to%20Town%20-%20Ray%20Bloch%20and%20his%20Orchestra.mp3",
    "length": 187.0,
    "series": "Ray Bloch and his Orchestra",
    "title": "Let It Snow, Let It Snow, Let It Snow; Santa Claus Is Comin' to Town",
    "date": "1947",
    "item": "https://archive.org/details/78_santa-claus-is-comin-to-town_ray-bloch-and-his-orchestra-cahn-styne-the-eldorado-f_gbia0014393"
   },
   {
    "src": "https://archive.org/download/78_silent-night---hark-the-herald-angels-sing_aeolian-mixed-quartet_gbia0012662a/Silent%20Night%20-%20Hark%21%20The%20Herald%20An%20-%20Aeolian%20Mixed%20Quartet.mp3",
    "length": 198.0,
    "series": "Aeolian Mixed Quartet",
    "title": "Silent Night - Hark! The Herald Angels Sing",
    "date": "1922",
    "item": "https://archive.org/details/78_silent-night---hark-the-herald-angels-sing_aeolian-mixed-quartet_gbia0012662a"
   }
  ]
 }
];
