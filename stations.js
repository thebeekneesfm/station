/* STATIONS
   Each station loops its track list forever, on a shared clock.
   Everyone tuned to the same station hears the same moment.
   Add tracks with builder.html (open it in your browser), then paste the result here.
   length = seconds. dial = where the station sits on the dial, 0 (left) to 1 (right). */
window.STATIONS = [
 {
  "id": "chills",
  "name": "Chills",
  "freq": "624",
  "dial": 0.08,
  "card": "art/cards/chills.png",
  "blurb": "Horror stories: ghosts, curses and things in the dark.",
  "epoch": "2026-11-01T00:00:00-07:00",
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
  ],
  "sound": {
   "declick": 0.4,
   "tone": 9000
  }
 },
 {
  "id": "noir",
  "name": "Noir",
  "freq": "773",
  "dial": 0.22,
  "card": "art/cards/noir.png",
  "blurb": "Private eyes, rain-slick streets and bad decisions.",
  "epoch": "2026-11-01T00:00:00-07:00",
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
  ],
  "sound": {
   "declick": 0.4,
   "tone": 9000
  }
 },
 {
  "id": "suspense",
  "name": "Suspense",
  "freq": "921",
  "dial": 0.36,
  "card": "art/cards/suspense.png",
  "blurb": "Thrillers and twist endings.",
  "epoch": "2026-11-01T00:00:00-07:00",
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
  ],
  "sound": {
   "declick": 0.4,
   "tone": 9000
  }
 },
 {
  "id": "tomorrow",
  "name": "Tomorrow",
  "freq": "1070",
  "dial": 0.5,
  "card": "art/cards/tomorrow.png",
  "blurb": "Science fiction from the atomic age.",
  "epoch": "2026-11-01T00:00:00-07:00",
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
   }
  ],
  "sound": {
   "declick": 0.4,
   "tone": 9000
  }
 },
 {
  "id": "outwest",
  "name": "Out West",
  "freq": "1218",
  "dial": 0.64,
  "card": "art/cards/outwest.png",
  "blurb": "Westerns: marshals, drifters and the frontier.",
  "epoch": "2026-11-01T00:00:00-07:00",
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
  ],
  "sound": {
   "declick": 0.4,
   "tone": 9000
  }
 },
 {
  "id": "laughs",
  "name": "Laughs",
  "freq": "1366",
  "dial": 0.78,
  "card": "art/cards/laughs.png",
  "blurb": "Sitcoms and comedy hours.",
  "epoch": "2026-11-01T00:00:00-07:00",
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
  ],
  "sound": {
   "declick": 0.4,
   "tone": 9000
  }
 },
 {
  "id": "hotwax",
  "name": "Early 78s",
  "freq": "1515",
  "dial": 0.92,
  "card": "art/cards/hotwax.png",
  "blurb": "Jazz, blues and dance bands on 78, 1917–1925.",
  "epoch": "2026-11-01T00:00:00-07:00",
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
    "src": "https://archive.org/download/Marion_Harris-Left_All_Alone_Again_Blues/Marion_Harris-Left_All_Alone_Again_Blues-Columbia-A2939-1920.mp3",
    "length": 177.0,
    "series": "Marion Harris",
    "title": "Left All Alone Again Blues",
    "date": "1920",
    "item": "https://archive.org/details/Marion_Harris-Left_All_Alone_Again_Blues"
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
  ],
  "sound": {
   "declick": 0.8,
   "tone": 6500
  }
 }
];
