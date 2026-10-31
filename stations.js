/* STATIONS
   Each station loops its track list forever, on a shared clock.
   Everyone tuned to the same station hears the same moment.
   Add tracks with builder.html (open it in your browser), then paste the result here.
   length = seconds. dial = where the station sits on the dial, 0 (left) to 1 (right). */
window.STATIONS = [
 {
  "id": "chills",
  "name": "Suspense & Chills",
  "freq": "660",
  "dial": 0.28,
  "card": "art/cards/chills.png",
  "blurb": "Horror and mystery dramas, 1936–1949.",
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
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2041-01-07%20Amazing%20Death%20Of%20Mrs%20Putnam.mp3",
    "length": 1515.69,
    "series": "Inner Sanctum Mysteries",
    "title": "Amazing Death Of Mrs Putnam",
    "date": "January 7, 1941",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
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
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20420617%20001%20The%20Burning%20Court%20%28128-44%29%2028455%2030m00s.mp3",
    "length": 1800.44,
    "series": "Suspense",
    "title": "The Burning Court",
    "date": "June 17, 1942",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/44-01-30009HouseOfDeath.mp3",
    "length": 1719.89,
    "series": "The Mysterious Traveler",
    "title": "House Of Death",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep10_William_Wilson.mp3",
    "length": 1496.11,
    "series": "The Weird Circle",
    "title": "William Wilson",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2045-02-06%20Death%20in%20the%20Depths.mp3",
    "length": 1783.56,
    "series": "Inner Sanctum Mysteries",
    "title": "Death in the Depths",
    "date": "February 6, 1945",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_471020_020_Pavanne_the_Girl_with_the_Flaxen_Hair.mp3",
    "length": 1369.6,
    "series": "Quiet, Please",
    "title": "Pavanne: The Girl with the Flaxen Hair",
    "date": "October 20, 1947",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_03_Reflected_Image.mp3",
    "length": 1516.52,
    "series": "The Hermit's Cave",
    "title": "Reflected Image",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1937-05-12Organ.mp3",
    "length": 1826.66,
    "series": "Lights Out",
    "title": "Organ",
    "date": "May 12, 1937",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20441214%20121%20The%20Lodger%20%28128-44%29%2030152%2031m49s.mp3",
    "length": 1887.92,
    "series": "Suspense",
    "title": "The Lodger",
    "date": "December 14, 1944",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/45-01-06055TheyWhoSleep.mp3",
    "length": 1626.31,
    "series": "The Mysterious Traveler",
    "title": "They Who Sleep",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep19_Murders_in_the_Rue_Morgue.mp3",
    "length": 1567.48,
    "series": "The Weird Circle",
    "title": "Murders in the Rue Morgue",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2045-10-09%20Death%20by%20Scripture%20%28AFRS%29.mp3",
    "length": 1599.58,
    "series": "Inner Sanctum Mysteries",
    "title": "Death by Scripture (AFRS)",
    "date": "October 9, 1945",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_480112_032_The_Room_Where_Ghosts_Live.mp3",
    "length": 1451.87,
    "series": "Quiet, Please",
    "title": "The Room Where Ghosts Live",
    "date": "January 12, 1948",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_05_House_Of_Murder.mp3",
    "length": 1449.75,
    "series": "The Hermit's Cave",
    "title": "House Of Murder",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1938-03-23TheDream.mp3",
    "length": 1795.62,
    "series": "Lights Out",
    "title": "The Dream",
    "date": "March 23, 1938",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20470206%20231%20End%20of%20the%20Road%20%28128-44%29%2028457%2030m01s.mp3",
    "length": 1800.57,
    "series": "Suspense",
    "title": "End of the Road",
    "date": "February 6, 1947",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/47-01-12086NoGraveCanHoldMe.mp3",
    "length": 1774.44,
    "series": "The Mysterious Traveler",
    "title": "No Grave Can Hold Me",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep28_The_Murder_of_the_Little_Pig.mp3",
    "length": 1659.39,
    "series": "The Weird Circle",
    "title": "The Murder of the Little Pig",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2046-02-26%20I%20Walk%20in%20the%20Night.mp3",
    "length": 1777.98,
    "series": "Inner Sanctum Mysteries",
    "title": "I Walk in the Night",
    "date": "February 26, 1946",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_480405_044_I_Always_Marry_Juliet.mp3",
    "length": 1638.4,
    "series": "Quiet, Please",
    "title": "I Always Marry Juliet",
    "date": "April 5, 1948",
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
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1942-11-10BonVoyage.mp3",
    "length": 1592.14,
    "series": "Lights Out",
    "title": "Bon Voyage",
    "date": "November 10, 1942",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20491201%20361%20Mission%20Completed%20%28132-44%29%2028650%2029m26s.mp3",
    "length": 1765.54,
    "series": "Suspense",
    "title": "Mission Completed",
    "date": "December 1, 1949",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/48-03-16145TheyStruckItRich.mp3",
    "length": 1704.67,
    "series": "The Mysterious Traveler",
    "title": "They Struck It Rich",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep37_The_Werewolf.mp3",
    "length": 1737.39,
    "series": "The Weird Circle",
    "title": "The Werewolf",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2047-10-27%20Till%20Death%20Do%20Us%20Part.mp3",
    "length": 1752.77,
    "series": "Inner Sanctum Mysteries",
    "title": "Till Death Do Us Part",
    "date": "October 27, 1947",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_480719_057_As_Long_as_I_Live.mp3",
    "length": 1481.21,
    "series": "Quiet, Please",
    "title": "As Long as I Live",
    "date": "July 19, 1948",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_09_Spirit_Vengeance.mp3",
    "length": 1469.21,
    "series": "The Hermit's Cave",
    "title": "Spirit Vengeance",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1943-02-02UntilDead.mp3",
    "length": 1693.97,
    "series": "Lights Out",
    "title": "Until Dead",
    "date": "February 2, 1943",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20520602%20476%20A%20Good%20and%20Faithful%20Servant%20%28128-44%29%2028455%2030m00s.mp3",
    "length": 1779.96,
    "series": "Suspense",
    "title": "A Good and Faithful Servant",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/48-09-21171DeathHasAThousandFaces.mp3",
    "length": 1601.16,
    "series": "The Mysterious Traveler",
    "title": "Death Has A Thousand Faces",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep46_The_Queer_Client.mp3",
    "length": 1569.36,
    "series": "The Weird Circle",
    "title": "The Queer Client",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2049-01-10%20Murder%20Comes%20to%20Life.mp3",
    "length": 1564.38,
    "series": "Inner Sanctum Mysteries",
    "title": "Murder Comes to Life",
    "date": "January 10, 1949",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_481010_069_Beezers_Cellar.mp3",
    "length": 1755.24,
    "series": "Quiet, Please",
    "title": "Beezer's Cellar",
    "date": "October 10, 1948",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_11_The_Vampires_Desire.mp3",
    "length": 1486.22,
    "series": "The Hermit's Cave",
    "title": "The Vampire's Desire",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1943-04-20Kill.mp3",
    "length": 1376.58,
    "series": "Lights Out",
    "title": "Kill",
    "date": "April 20, 1943",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20550217%20585%20The%20Man%20with%20the%20Steel%20Teeth%20%28128-44%29%2023646%2024m53s.mp3",
    "length": 1472.13,
    "series": "Suspense",
    "title": "The Man with the Steel Teeth",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/49-10-11225TheLastSurvivor.mp3",
    "length": 1714.08,
    "series": "The Mysterious Traveler",
    "title": "The Last Survivor",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep55_The_Warning.mp3",
    "length": 1518.87,
    "series": "The Weird Circle",
    "title": "The Warning",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2049-08-29%20Death%27s%20Little%20Brother.mp3",
    "length": 1574.0,
    "series": "Inner Sanctum Mysteries",
    "title": "Death's Little Brother",
    "date": "August 29, 1949",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_490109_082_Portrait_of_a_Character.mp3",
    "length": 1762.05,
    "series": "Quiet, Please",
    "title": "Portrait of a Character",
    "date": "January 9, 1949",
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
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1943-06-29Bathysphere.mp3",
    "length": 1765.02,
    "series": "Lights Out",
    "title": "Bathysphere",
    "date": "June 29, 1943",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20570428%20696%20Escape%20to%20Death%20%2864-44%29%2013674%2028m29s.mp3",
    "length": 1708.95,
    "series": "Suspense",
    "title": "Escape to Death",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/50-04-25252IDiedLastNight.mp3",
    "length": 1761.71,
    "series": "The Mysterious Traveler",
    "title": "I Died Last Night",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   },
   {
    "src": "https://archive.org/download/OTRR_Weird_Circle_Singles/Weird_Circle_4x-xx-xx_ep64The_Oblong_Box.mp3",
    "length": 1494.66,
    "series": "The Weird Circle",
    "title": "The Oblong Box",
    "item": "https://archive.org/details/OTRR_Weird_Circle_Singles"
   },
   {
    "src": "https://archive.org/download/OTRR_Inner_Sanctum_Mysteries_Singles/Inner%20Sanctum%20%2050-11-06%20Twice%20Dead.mp3",
    "length": 1775.34,
    "series": "Inner Sanctum Mysteries",
    "title": "Twice Dead",
    "item": "https://archive.org/details/OTRR_Inner_Sanctum_Mysteries_Singles"
   },
   {
    "src": "https://archive.org/download/Quiet_Please/Quiet_Please_490327_093_A_Time_to_Be_Born_and_a_Time_to_Die.mp3",
    "length": 1647.61,
    "series": "Quiet, Please",
    "title": "A Time to Be Born and a Time to Die",
    "date": "March 27, 1949",
    "item": "https://archive.org/details/Quiet_Please"
   },
   {
    "src": "https://archive.org/download/The_Hermits_Cave/HermitsCave_400000_15_The_Nameless.mp3",
    "length": 1465.68,
    "series": "The Hermit's Cave",
    "title": "The Nameless",
    "item": "https://archive.org/details/The_Hermits_Cave"
   },
   {
    "src": "https://archive.org/download/LightsOutoldTimeRadio/LightsOut-1943-09-21Mirage.mp3",
    "length": 1660.06,
    "series": "Lights Out",
    "title": "Mirage",
    "date": "September 21, 1943",
    "item": "https://archive.org/details/LightsOutoldTimeRadio"
   },
   {
    "src": "https://archive.org/download/OTRR_Suspense_Singles/Suspense%20591213%20831%20The%20Country%20of%20the%20Blind%20%28128-44%29%2023518%2024m45s.mp3",
    "length": 1463.98,
    "series": "Suspense",
    "title": "The Country of the Blind",
    "item": "https://archive.org/details/OTRR_Suspense_Singles"
   },
   {
    "src": "https://archive.org/download/TheMysteriousTraveler/51-11-13330SpeakOfTheDevil.mp3",
    "length": 1741.93,
    "series": "The Mysterious Traveler",
    "title": "Speak Of The Devil",
    "item": "https://archive.org/details/TheMysteriousTraveler"
   }
  ]
 },
 {
  "id": "hotwax",
  "name": "Early 78s",
  "freq": "1250",
  "dial": 0.72,
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
    "src": "https://archive.org/download/original-dixieland-jazz-band-tiger-rag-victor-18472-b/Original%20Dixieland%20Jazz%20Band%20-%20Tiger%20Rag%20-%20Victor%2018472-B.mp3",
    "length": 184.48,
    "series": "Original Dixieland Jazz Band",
    "title": "Tiger Rag",
    "date": "1918",
    "item": "https://archive.org/details/original-dixieland-jazz-band-tiger-rag-victor-18472-b"
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
    "src": "https://archive.org/download/MamieSmithHerJazzHounds/MamieSmithHerJazzHounds-CrazyBlues.mp3",
    "length": 210.0,
    "series": "Mamie Smith & Her Jazz Hounds",
    "title": "Crazy Blues",
    "date": "1920",
    "item": "https://archive.org/details/MamieSmithHerJazzHounds"
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
    "src": "https://archive.org/download/78_bees-knees_the-original-memphis-five-lopez-and-lewis_gbia0278930a/BEE%27S%20KNEES%20-%20The%20Original%20Memphis%20Five%20-%20Lopez%20and%20Lewis.mp3",
    "length": 197.71,
    "series": "The Original Memphis Five",
    "title": "Bee's Knees",
    "date": "1922",
    "item": "https://archive.org/details/78_bees-knees_the-original-memphis-five-lopez-and-lewis_gbia0278930a"
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
    "src": "https://archive.org/download/BluesMyNaughtySweetieGaveMeTedLewisJazzBand/Blues%20My%20Naughty%20Sweetie%20Gave%20Me%20-%20Ted%20Lewis%20Jazz%20Band.mp3",
    "length": 187.0,
    "series": "Ted Lewis Jazz Band",
    "title": "Blues My Naughty Sweetie Gave Me",
    "date": "1919",
    "item": "https://archive.org/details/BluesMyNaughtySweetieGaveMeTedLewisJazzBand"
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
    "src": "https://archive.org/download/78_charleston-crazy_fletcher-henderson-and-his-orchestra-grainger-ricketts_gbia0039230a/Charleston%20Crazy%20-%20Fletcher%20Henderson%20and%20His%20Orchestra.mp3",
    "length": 179.0,
    "series": "Fletcher Henderson and His Orchestra",
    "title": "Charleston Crazy",
    "date": "1923",
    "item": "https://archive.org/details/78_charleston-crazy_fletcher-henderson-and-his-orchestra-grainger-ricketts_gbia0039230a"
   },
   {
    "src": "https://archive.org/download/IshamJonesOrchestraHenpeckedBlues1923/Isham_Jones_Orchestra-Henpecked_Blues-1923.mp3",
    "length": 195.0,
    "series": "Isham Jones Orchestra",
    "title": "Henpecked Blues",
    "date": "1923",
    "item": "https://archive.org/details/IshamJonesOrchestraHenpeckedBlues1923"
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
    "src": "https://archive.org/download/rhapblue11924/rhapblue11924.mp3",
    "length": 275.0,
    "series": "Paul Whiteman and George Gershwin",
    "title": "Rhapsody In Blue Part 1",
    "date": "1924",
    "item": "https://archive.org/details/rhapblue11924"
   },
   {
    "src": "https://archive.org/download/rhapblue21924/rhapblue21924.mp3",
    "length": 289.0,
    "series": "Paul Whiteman and George Gershwin",
    "title": "Rhapsody In Blue Part 2",
    "date": "1924",
    "item": "https://archive.org/details/rhapblue21924"
   },
   {
    "src": "https://archive.org/download/78_africa_original-memphis-five-hanley_gbia0101463a/Africa%20-%20Original%20Memphis%20Five%20-%20Hanley.mp3",
    "length": 191.0,
    "series": "Original Memphis Five",
    "title": "Africa",
    "date": "1924",
    "item": "https://archive.org/details/78_africa_original-memphis-five-hanley_gbia0101463a"
   },
   {
    "src": "https://archive.org/download/bessie-smith-weeping-willow-blues/Bessie%20Smith%20-%20Weeping%20willow%20blues%20-%20flat.mp3",
    "length": 193.0,
    "series": "Bessie Smith",
    "title": "Weeping Willow Blues",
    "date": "1924",
    "item": "https://archive.org/details/bessie-smith-weeping-willow-blues"
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
    "src": "https://archive.org/download/original-dixieland-jazz-band-fidgety-feet-victor-18564-a/Original%20Dixieland%20Jazz%20Band%20-%20Fidgety%20Feet%20-%20Victor%2018564-A.mp3",
    "length": 158.01,
    "series": "Original Dixieland Jazz Band",
    "title": "Fidgety Feet",
    "date": "1918",
    "item": "https://archive.org/details/original-dixieland-jazz-band-fidgety-feet-victor-18564-a"
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
    "src": "https://archive.org/download/king-olivers-jazz-band-chattanooga-stomp-shimmy-one-step-columbia-13003-d-81300-/King%20Oliver%27s%20Jazz%20Band%20-%20Chattanooga%20Stomp%2C%20Shimmy%20One%20Step%20-%20Columbia%2013003D%2C%2081300%2C%20Matrix%2081300%203-1%20-%20October%2015%2C%201923.mp3",
    "length": 178.63,
    "series": "King Oliver's Jazz Band",
    "title": "Chattanooga Stomp (Shimmy One Step)",
    "date": "1923",
    "item": "https://archive.org/details/king-olivers-jazz-band-chattanooga-stomp-shimmy-one-step-columbia-13003-d-81300-"
   },
   {
    "src": "https://archive.org/download/IshamJonesRainboOrchestraJingaBulaJingJing1920/Isham_Jones_Rainbo_Orchestra-Jinga_Bula_Jing_Jing-1920.mp3",
    "length": 165.0,
    "series": "Isham Jones Rainbo Orchestra",
    "title": "Jinga-Bula-Jing-Jing",
    "date": "1920",
    "item": "https://archive.org/details/IshamJonesRainboOrchestraJingaBulaJingJing1920"
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
    "src": "https://archive.org/download/OriginalMemphisFive-SweetPapaJoe/Original_Memphis_Five-Sweet_Papa_Joe-1923.mp3",
    "length": 175.0,
    "series": "Original Memphis Five",
    "title": "Sweet Papa Joe",
    "date": "1923",
    "item": "https://archive.org/details/OriginalMemphisFive-SweetPapaJoe"
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
    "src": "https://archive.org/download/78_the-road-is-rocky-but-i-am-gonna-find-my-way_mamie-smith-and-her-jazz-hounds-perr_gbia0295933a/THE%20ROAD%20IS%20ROCKY%20%28But%20I%20-%20MAMIE%20SMITH%20AND%20HER%20JAZZ%20HOUNDS.mp3",
    "length": 195.79,
    "series": "Mamie Smith And Her Jazz Hounds",
    "title": "The Road Is Rocky (But I Am Gonna Find My Way)",
    "date": "1920",
    "item": "https://archive.org/details/78_the-road-is-rocky-but-i-am-gonna-find-my-way_mamie-smith-and-her-jazz-hounds-perr_gbia0295933a"
   },
   {
    "src": "https://archive.org/download/bessie-smith-careless-love-blues/Bessie%20Smith%20-%20Careless%20love%20blues%20-%20flat.mp3",
    "length": 210.0,
    "series": "Bessie Smith",
    "title": "Careless Love Blues",
    "date": "1925",
    "item": "https://archive.org/details/bessie-smith-careless-love-blues"
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
    "src": "https://archive.org/download/charleston1925/charleston1925.mp3",
    "length": 242.0,
    "series": "Golden Gate Orchestra",
    "title": "Charleston (Fox Trot)",
    "date": "1925",
    "item": "https://archive.org/details/charleston1925"
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
    "src": "https://archive.org/download/78_shake-your-feet_original-memphis-five-gene-buck-dave-stamper_gbia0101462a/Shake%20Your%20Feet%20-%20Original%20Memphis%20Five%20-%20Gene%20Buck.mp3",
    "length": 191.0,
    "series": "Original Memphis Five",
    "title": "Shake Your Feet",
    "date": "1923",
    "item": "https://archive.org/details/78_shake-your-feet_original-memphis-five-gene-buck-dave-stamper_gbia0101462a"
   }
  ]
 }
];
