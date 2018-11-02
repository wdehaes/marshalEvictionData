    mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGVtZGVoYWVzIiwiYSI6ImNqbmdqZ2hnYzAzb3ozd3F0aHcxM29idTkifQ.KCJrgwzjDOeW19ps9wyW2Q';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/willemdehaes/cjnro3cjp25wm2spbjt8tabc9',
      center: [-73.889999, 40.707540],
      zoom: 9.8
    });

    var hoveredZip = null;
map.on('load', function () {
  // Create a popup, but don't add it to the map yet.
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });
var zipCodeStats = {
  "10001": {
    "borough": "Manhattan",
    "evictions": 46,
    "population": 21102,
    "medianHouseholdIncome": 85168
  },
  "10002": {
    "borough": "Manhattan",
    "evictions": 77,
    "population": 81410,
    "medianHouseholdIncome": 35594
  },
  "10003": {
    "borough": "Manhattan",
    "evictions": 42,
    "population": 56024,
    "medianHouseholdIncome": 100791
  },
  "10004": {
    "borough": "Manhattan",
    "evictions": 3,
    "population": 3089,
    "medianHouseholdIncome": 123056
  },
  "10005": {
    "borough": "Manhattan",
    "evictions": 14,
    "population": 7135,
    "medianHouseholdIncome": 130116
  },
  "10006": {
    "borough": "Manhattan",
    "evictions": 7,
    "population": 3011,
    "medianHouseholdIncome": 125364
  },
  "10007": {
    "borough": "Manhattan",
    "evictions": 5,
    "population": 6988,
    "medianHouseholdIncome": 234958
  },
  "10009": {
    "borough": "Manhattan",
    "evictions": 102,
    "population": 61347,
    "medianHouseholdIncome": 60788
  },
  "10010": {
    "borough": "Manhattan",
    "evictions": 23,
    "population": 31834,
    "medianHouseholdIncome": 110142
  },
  "10011": {
    "borough": "Manhattan",
    "evictions": 43,
    "population": 50984,
    "medianHouseholdIncome": 114134
  },
  "10012": {
    "borough": "Manhattan",
    "evictions": 25,
    "population": 24090,
    "medianHouseholdIncome": 101815
  },
  "10013": {
    "borough": "Manhattan",
    "evictions": 24,
    "population": 27700,
    "medianHouseholdIncome": 104167
  },
  "10014": {
    "borough": "Manhattan",
    "evictions": 29,
    "population": 31959,
    "medianHouseholdIncome": 119026
  },
  "10016": {
    "borough": "Manhattan",
    "evictions": 54,
    "population": 54183,
    "medianHouseholdIncome": 102703
  },
  "10017": {
    "borough": "Manhattan",
    "evictions": 23,
    "population": 16575,
    "medianHouseholdIncome": 106795
  },
  "10018": {
    "borough": "Manhattan",
    "evictions": 11,
    "population": 5229,
    "medianHouseholdIncome": 105479
  },
  "10019": {
    "borough": "Manhattan",
    "evictions": 95,
    "population": 42870,
    "medianHouseholdIncome": 94477
  },
  "10020": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10021": {
    "borough": "Manhattan",
    "evictions": 40,
    "population": 43631,
    "medianHouseholdIncome": 115681
  },
  "10022": {
    "borough": "Manhattan",
    "evictions": 33,
    "population": 31924,
    "medianHouseholdIncome": 123693
  },
  "10023": {
    "borough": "Manhattan",
    "evictions": 37,
    "population": 60998,
    "medianHouseholdIncome": 115080
  },
  "10024": {
    "borough": "Manhattan",
    "evictions": 32,
    "population": 59283,
    "medianHouseholdIncome": 118594
  },
  "10025": {
    "borough": "Manhattan",
    "evictions": 115,
    "population": 94600,
    "medianHouseholdIncome": 80025
  },
  "10026": {
    "borough": "Manhattan",
    "evictions": 104,
    "population": 34003,
    "medianHouseholdIncome": 52082
  },
  "10027": {
    "borough": "Manhattan",
    "evictions": 129,
    "population": 59707,
    "medianHouseholdIncome": 42754
  },
  "10028": {
    "borough": "Manhattan",
    "evictions": 36,
    "population": 45141,
    "medianHouseholdIncome": 111302
  },
  "10029": {
    "borough": "Manhattan",
    "evictions": 175,
    "population": 76003,
    "medianHouseholdIncome": 32500
  },
  "10030": {
    "borough": "Manhattan",
    "evictions": 129,
    "population": 26999,
    "medianHouseholdIncome": 33720
  },
  "10031": {
    "borough": "Manhattan",
    "evictions": 189,
    "population": 56438,
    "medianHouseholdIncome": 41848
  },
  "10032": {
    "borough": "Manhattan",
    "evictions": 167,
    "population": 57331,
    "medianHouseholdIncome": 40054
  },
  "10033": {
    "borough": "Manhattan",
    "evictions": 154,
    "population": 53926,
    "medianHouseholdIncome": 46349
  },
  "10034": {
    "borough": "Manhattan",
    "evictions": 112,
    "population": 38908,
    "medianHouseholdIncome": 45643
  },
  "10035": {
    "borough": "Manhattan",
    "evictions": 139,
    "population": 33969,
    "medianHouseholdIncome": 26893
  },
  "10036": {
    "borough": "Manhattan",
    "evictions": 93,
    "population": 24711,
    "medianHouseholdIncome": 83812
  },
  "10037": {
    "borough": "Manhattan",
    "evictions": 121,
    "population": 17416,
    "medianHouseholdIncome": 39463
  },
  "10038": {
    "borough": "Manhattan",
    "evictions": 20,
    "population": 20300,
    "medianHouseholdIncome": 82910
  },
  "10039": {
    "borough": "Manhattan",
    "evictions": 120,
    "population": 24527,
    "medianHouseholdIncome": 32257
  },
  "10040": {
    "borough": "Manhattan",
    "evictions": 113,
    "population": 41905,
    "medianHouseholdIncome": 45811
  },
  "10044": {
    "borough": "Manhattan",
    "evictions": 15,
    "population": 11661,
    "medianHouseholdIncome": 86483
  },
  "10065": {
    "borough": "Manhattan",
    "evictions": 35,
    "population": 32270,
    "medianHouseholdIncome": 118310
  },
  "10069": {
    "borough": "Manhattan",
    "evictions": 7,
    "population": 5199,
    "medianHouseholdIncome": 155702
  },
  "10075": {
    "borough": "Manhattan",
    "evictions": 9,
    "population": 26121,
    "medianHouseholdIncome": 114481
  },
  "10103": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 3

  },
  "10110": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10111": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10112": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10115": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10119": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 92

  },
  "10128": {
    "borough": "Manhattan",
    "evictions": 57,
    "population": 60453,
    "medianHouseholdIncome": 103817
  },
  "10152": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10153": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10154": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10162": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 1685,
    "medianHouseholdIncome": 178822
  },
  "10165": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 2

  },
  "10167": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10168": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10169": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10170": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 2

  },
  "10171": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10172": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10173": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 2

  },
  "10174": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10177": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10199": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 9

  },
  "10271": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10278": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10279": {
    "borough": "Manhattan",
    "evictions": 0,
    "population": 0

  },
  "10280": {
    "borough": "Manhattan",
    "evictions": 9,
    "population": 7853,
    "medianHouseholdIncome": 146875
  },
  "10301": {
    "borough": "Staten Island",
    "evictions": 121,
    "population": 39706,
    "medianHouseholdIncome": 55700
  },
  "10302": {
    "borough": "Staten Island",
    "evictions": 36,
    "population": 19088,
    "medianHouseholdIncome": 55864
  },
  "10303": {
    "borough": "Staten Island",
    "evictions": 86,
    "population": 26337,
    "medianHouseholdIncome": 55198
  },
  "10304": {
    "borough": "Staten Island",
    "evictions": 131,
    "population": 42193,
    "medianHouseholdIncome": 53843
  },
  "10305": {
    "borough": "Staten Island",
    "evictions": 58,
    "population": 41749,
    "medianHouseholdIncome": 74063
  },
  "10306": {
    "borough": "Staten Island",
    "evictions": 57,
    "population": 55909,
    "medianHouseholdIncome": 78745
  },
  "10307": {
    "borough": "Staten Island",
    "evictions": 9,
    "population": 14096,
    "medianHouseholdIncome": 77278
  },
  "10308": {
    "borough": "Staten Island",
    "evictions": 13,
    "population": 27357,
    "medianHouseholdIncome": 87493
  },
  "10309": {
    "borough": "Staten Island",
    "evictions": 21,
    "population": 32519,
    "medianHouseholdIncome": 93248
  },
  "10310": {
    "borough": "Staten Island",
    "evictions": 63,
    "population": 24962,
    "medianHouseholdIncome": 69201
  },
  "10311": {
    "borough": "Staten Island",
    "evictions": 0,
    "population": 0

  },
  "10312": {
    "borough": "Staten Island",
    "evictions": 30,
    "population": 59304,
    "medianHouseholdIncome": 88567
  },
  "10314": {
    "borough": "Staten Island",
    "evictions": 67,
    "population": 85510,
    "medianHouseholdIncome": 77761
  },
  "10451": {
    "borough": "Bronx",
    "evictions": 264,
    "population": 45713,
    "medianHouseholdIncome": 26419
  },
  "10452": {
    "borough": "Bronx",
    "evictions": 433,
    "population": 75371,
    "medianHouseholdIncome": 25771
  },
  "10453": {
    "borough": "Bronx",
    "evictions": 579,
    "population": 78309,
    "medianHouseholdIncome": 22914
  },
  "10454": {
    "borough": "Bronx",
    "evictions": 142,
    "population": 37337,
    "medianHouseholdIncome": 21553
  },
  "10455": {
    "borough": "Bronx",
    "evictions": 220,
    "population": 39665,
    "medianHouseholdIncome": 23962
  },
  "10456": {
    "borough": "Bronx",
    "evictions": 536,
    "population": 86547,
    "medianHouseholdIncome": 25868
  },
  "10457": {
    "borough": "Bronx",
    "evictions": 526,
    "population": 70496,
    "medianHouseholdIncome": 25967
  },
  "10458": {
    "borough": "Bronx",
    "evictions": 669,
    "population": 79492,
    "medianHouseholdIncome": 30339
  },
  "10459": {
    "borough": "Bronx",
    "evictions": 335,
    "population": 47308,
    "medianHouseholdIncome": 24805
  },
  "10460": {
    "borough": "Bronx",
    "evictions": 470,
    "population": 57311,
    "medianHouseholdIncome": 24086
  },
  "10461": {
    "borough": "Bronx",
    "evictions": 128,
    "population": 50502,
    "medianHouseholdIncome": 55332
  },
  "10462": {
    "borough": "Bronx",
    "evictions": 336,
    "population": 75784,
    "medianHouseholdIncome": 48315
  },
  "10463": {
    "borough": "Bronx",
    "evictions": 205,
    "population": 67970,
    "medianHouseholdIncome": 56568
  },
  "10464": {
    "borough": "Bronx",
    "evictions": 12,
    "population": 4534,
    "medianHouseholdIncome": 76917
  },
  "10465": {
    "borough": "Bronx",
    "evictions": 51,
    "population": 42230,
    "medianHouseholdIncome": 73068
  },
  "10466": {
    "borough": "Bronx",
    "evictions": 362,
    "population": 67813,
    "medianHouseholdIncome": 44354
  },
  "10467": {
    "borough": "Bronx",
    "evictions": 615,
    "population": 97060,
    "medianHouseholdIncome": 34964
  },
  "10468": {
    "borough": "Bronx",
    "evictions": 532,
    "population": 76103,
    "medianHouseholdIncome": 34988
  },
  "10469": {
    "borough": "Bronx",
    "evictions": 207,
    "population": 66631,
    "medianHouseholdIncome": 57124
  },
  "10470": {
    "borough": "Bronx",
    "evictions": 86,
    "population": 15293,
    "medianHouseholdIncome": 58839
  },
  "10471": {
    "borough": "Bronx",
    "evictions": 46,
    "population": 22922,
    "medianHouseholdIncome": 81594
  },
  "10472": {
    "borough": "Bronx",
    "evictions": 329,
    "population": 66358,
    "medianHouseholdIncome": 29934
  },
  "10473": {
    "borough": "Bronx",
    "evictions": 173,
    "population": 58519,
    "medianHouseholdIncome": 36686
  },
  "10474": {
    "borough": "Bronx",
    "evictions": 79,
    "population": 12281,
    "medianHouseholdIncome": 26901
  },
  "10475": {
    "borough": "Bronx",
    "evictions": 81,
    "population": 40931,
    "medianHouseholdIncome": 46340
  },
  "11004": {
    "borough": "Queens",
    "evictions": 6,
    "population": 14016,
    "medianHouseholdIncome": 91226
  },
  "11005": {
    "borough": "Queens",
    "evictions": 0,
    "population": 1806,
    "medianHouseholdIncome": 63368
  },
  "11101": {
    "borough": "Queens",
    "evictions": 53,
    "population": 25484,
    "medianHouseholdIncome": 51964
  },
  "11102": {
    "borough": "Queens",
    "evictions": 44,
    "population": 34133,
    "medianHouseholdIncome": 56674
  },
  "11103": {
    "borough": "Queens",
    "evictions": 52,
    "population": 38780,
    "medianHouseholdIncome": 62775
  },
  "11104": {
    "borough": "Queens",
    "evictions": 42,
    "population": 27232,
    "medianHouseholdIncome": 57155
  },
  "11105": {
    "borough": "Queens",
    "evictions": 44,
    "population": 36688,
    "medianHouseholdIncome": 62841
  },
  "11106": {
    "borough": "Queens",
    "evictions": 53,
    "population": 38875,
    "medianHouseholdIncome": 56442
  },
  "11109": {
    "borough": "Queens",
    "evictions": 10,
    "population": 3523,
    "medianHouseholdIncome": 133070
  },
  "11201": {
    "borough": "Brooklyn",
    "evictions": 56,
    "population": 51128,
    "medianHouseholdIncome": 109472
  },
  "11203": {
    "borough": "Brooklyn",
    "evictions": 317,
    "population": 76174,
    "medianHouseholdIncome": 46971
  },
  "11204": {
    "borough": "Brooklyn",
    "evictions": 69,
    "population": 78134,
    "medianHouseholdIncome": 47135
  },
  "11205": {
    "borough": "Brooklyn",
    "evictions": 79,
    "population": 40366,
    "medianHouseholdIncome": 47437
  },
  "11206": {
    "borough": "Brooklyn",
    "evictions": 135,
    "population": 81677,
    "medianHouseholdIncome": 31549
  },
  "11207": {
    "borough": "Brooklyn",
    "evictions": 406,
    "population": 93386,
    "medianHouseholdIncome": 35849
  },
  "11208": {
    "borough": "Brooklyn",
    "evictions": 417,
    "population": 94469,
    "medianHouseholdIncome": 37640
  },
  "11209": {
    "borough": "Brooklyn",
    "evictions": 112,
    "population": 68853,
    "medianHouseholdIncome": 65181
  },
  "11210": {
    "borough": "Brooklyn",
    "evictions": 217,
    "population": 62008,
    "medianHouseholdIncome": 59520
  },
  "11211": {
    "borough": "Brooklyn",
    "evictions": 56,
    "population": 90117,
    "medianHouseholdIncome": 59190
  },
  "11212": {
    "borough": "Brooklyn",
    "evictions": 468,
    "population": 84500,
    "medianHouseholdIncome": 28495
  },
  "11213": {
    "borough": "Brooklyn",
    "evictions": 290,
    "population": 63767,
    "medianHouseholdIncome": 37556
  },
  "11214": {
    "borough": "Brooklyn",
    "evictions": 111,
    "population": 88630,
    "medianHouseholdIncome": 52119
  },
  "11215": {
    "borough": "Brooklyn",
    "evictions": 16,
    "population": 63488,
    "medianHouseholdIncome": 108178
  },
  "11216": {
    "borough": "Brooklyn",
    "evictions": 162,
    "population": 54316,
    "medianHouseholdIncome": 52239
  },
  "11217": {
    "borough": "Brooklyn",
    "evictions": 36,
    "population": 35881,
    "medianHouseholdIncome": 94970
  },
  "11218": {
    "borough": "Brooklyn",
    "evictions": 82,
    "population": 75220,
    "medianHouseholdIncome": 60821
  },
  "11219": {
    "borough": "Brooklyn",
    "evictions": 59,
    "population": 92221,
    "medianHouseholdIncome": 36573
  },
  "11220": {
    "borough": "Brooklyn",
    "evictions": 88,
    "population": 99598,
    "medianHouseholdIncome": 40576
  },
  "11221": {
    "borough": "Brooklyn",
    "evictions": 284,
    "population": 78895,
    "medianHouseholdIncome": 43361
  },
  "11222": {
    "borough": "Brooklyn",
    "evictions": 37,
    "population": 36934,
    "medianHouseholdIncome": 73391
  },
  "11223": {
    "borough": "Brooklyn",
    "evictions": 87,
    "population": 78731,
    "medianHouseholdIncome": 44647
  },
  "11224": {
    "borough": "Brooklyn",
    "evictions": 107,
    "population": 47621,
    "medianHouseholdIncome": 31371
  },
  "11225": {
    "borough": "Brooklyn",
    "evictions": 223,
    "population": 56829,
    "medianHouseholdIncome": 48597
  },
  "11226": {
    "borough": "Brooklyn",
    "evictions": 487,
    "population": 101572,
    "medianHouseholdIncome": 45031
  },
  "11228": {
    "borough": "Brooklyn",
    "evictions": 33,
    "population": 41788,
    "medianHouseholdIncome": 63641
  },
  "11229": {
    "borough": "Brooklyn",
    "evictions": 90,
    "population": 80018,
    "medianHouseholdIncome": 55187
  },
  "11230": {
    "borough": "Brooklyn",
    "evictions": 122,
    "population": 86408,
    "medianHouseholdIncome": 43344
  },
  "11231": {
    "borough": "Brooklyn",
    "evictions": 29,
    "population": 33336,
    "medianHouseholdIncome": 84223
  },
  "11232": {
    "borough": "Brooklyn",
    "evictions": 31,
    "population": 28265,
    "medianHouseholdIncome": 47785
  },
  "11233": {
    "borough": "Brooklyn",
    "evictions": 368,
    "population": 67053,
    "medianHouseholdIncome": 35686
  },
  "11234": {
    "borough": "Brooklyn",
    "evictions": 139,
    "population": 87757,
    "medianHouseholdIncome": 75362
  },
  "11235": {
    "borough": "Brooklyn",
    "evictions": 132,
    "population": 79132,
    "medianHouseholdIncome": 45578
  },
  "11236": {
    "borough": "Brooklyn",
    "evictions": 251,
    "population": 93877,
    "medianHouseholdIncome": 60885
  },
  "11237": {
    "borough": "Brooklyn",
    "evictions": 77,
    "population": 49896,
    "medianHouseholdIncome": 46351
  },
  "11238": {
    "borough": "Brooklyn",
    "evictions": 102,
    "population": 49262,
    "medianHouseholdIncome": 75757
  },
  "11239": {
    "borough": "Brooklyn",
    "evictions": 88,
    "population": 13393,
    "medianHouseholdIncome": 24610
  },
  "11351": {
    "borough": "Queens",
    "evictions": 0,
    "population": 0

  },
  "11354": {
    "borough": "Queens",
    "evictions": 63,
    "population": 54878,
    "medianHouseholdIncome": 43660
  },
  "11355": {
    "borough": "Queens",
    "evictions": 91,
    "population": 85871,
    "medianHouseholdIncome": 38451
  },
  "11356": {
    "borough": "Queens",
    "evictions": 57,
    "population": 23438,
    "medianHouseholdIncome": 57849
  },
  "11357": {
    "borough": "Queens",
    "evictions": 19,
    "population": 39150,
    "medianHouseholdIncome": 74255
  },
  "11358": {
    "borough": "Queens",
    "evictions": 22,
    "population": 37546,
    "medianHouseholdIncome": 66173
  },
  "11359": {
    "borough": "Queens",
    "evictions": 2,
    "population": 0

  },
  "11360": {
    "borough": "Queens",
    "evictions": 14,
    "population": 18884,
    "medianHouseholdIncome": 82982
  },
  "11361": {
    "borough": "Queens",
    "evictions": 23,
    "population": 28606,
    "medianHouseholdIncome": 81846
  },
  "11362": {
    "borough": "Queens",
    "evictions": 6,
    "population": 17823,
    "medianHouseholdIncome": 82827
  },
  "11363": {
    "borough": "Queens",
    "evictions": 3,
    "population": 6988,
    "medianHouseholdIncome": 90443
  },
  "11364": {
    "borough": "Queens",
    "evictions": 16,
    "population": 34555,
    "medianHouseholdIncome": 70408
  },
  "11365": {
    "borough": "Queens",
    "evictions": 65,
    "population": 42252,
    "medianHouseholdIncome": 62509
  },
  "11366": {
    "borough": "Queens",
    "evictions": 8,
    "population": 13532,
    "medianHouseholdIncome": 78223
  },
  "11367": {
    "borough": "Queens",
    "evictions": 74,
    "population": 41047,
    "medianHouseholdIncome": 57310
  },
  "11368": {
    "borough": "Queens",
    "evictions": 231,
    "population": 109931,
    "medianHouseholdIncome": 45980
  },
  "11369": {
    "borough": "Queens",
    "evictions": 38,
    "population": 38615,
    "medianHouseholdIncome": 51864
  },
  "11370": {
    "borough": "Queens",
    "evictions": 27,
    "population": 39688,
    "medianHouseholdIncome": 53293
  },
  "11371": {
    "borough": "Queens",
    "evictions": 0,
    "population": 0

  },
  "11372": {
    "borough": "Queens",
    "evictions": 124,
    "population": 66636,
    "medianHouseholdIncome": 52792
  },
  "11373": {
    "borough": "Queens",
    "evictions": 123,
    "population": 100820,
    "medianHouseholdIncome": 45677
  },
  "11374": {
    "borough": "Queens",
    "evictions": 68,
    "population": 43600,
    "medianHouseholdIncome": 55550
  },
  "11375": {
    "borough": "Queens",
    "evictions": 67,
    "population": 68733,
    "medianHouseholdIncome": 72982
  },
  "11377": {
    "borough": "Queens",
    "evictions": 88,
    "population": 89830,
    "medianHouseholdIncome": 51675
  },
  "11378": {
    "borough": "Queens",
    "evictions": 47,
    "population": 34981,
    "medianHouseholdIncome": 61631
  },
  "11379": {
    "borough": "Queens",
    "evictions": 28,
    "population": 34821,
    "medianHouseholdIncome": 75320
  },
  "11385": {
    "borough": "Queens",
    "evictions": 193,
    "population": 98592,
    "medianHouseholdIncome": 60526
  },
  "11411": {
    "borough": "Queens",
    "evictions": 21,
    "population": 18556,
    "medianHouseholdIncome": 81678
  },
  "11412": {
    "borough": "Queens",
    "evictions": 82,
    "population": 34882,
    "medianHouseholdIncome": 71995
  },
  "11413": {
    "borough": "Queens",
    "evictions": 101,
    "population": 38912,
    "medianHouseholdIncome": 80758
  },
  "11414": {
    "borough": "Queens",
    "evictions": 28,
    "population": 26148,
    "medianHouseholdIncome": 70490
  },
  "11415": {
    "borough": "Queens",
    "evictions": 45,
    "population": 19341,
    "medianHouseholdIncome": 64055
  },
  "11416": {
    "borough": "Queens",
    "evictions": 57,
    "population": 24861,
    "medianHouseholdIncome": 59092
  },
  "11417": {
    "borough": "Queens",
    "evictions": 39,
    "population": 28967,
    "medianHouseholdIncome": 66978
  },
  "11418": {
    "borough": "Queens",
    "evictions": 79,
    "population": 36256,
    "medianHouseholdIncome": 63079
  },
  "11419": {
    "borough": "Queens",
    "evictions": 74,
    "population": 47211,
    "medianHouseholdIncome": 62014
  },
  "11420": {
    "borough": "Queens",
    "evictions": 87,
    "population": 44354,
    "medianHouseholdIncome": 61484
  },
  "11421": {
    "borough": "Queens",
    "evictions": 56,
    "population": 39127,
    "medianHouseholdIncome": 64544
  },
  "11422": {
    "borough": "Queens",
    "evictions": 74,
    "population": 30425,
    "medianHouseholdIncome": 85436
  },
  "11423": {
    "borough": "Queens",
    "evictions": 79,
    "population": 29987,
    "medianHouseholdIncome": 66070
  },
  "11424": {
    "borough": "Queens",
    "evictions": 0,
    "population": 0

  },
  "11425": {
    "borough": "Brooklyn",
    "evictions": 0,
    "population": 0

  },
  "11426": {
    "borough": "Queens",
    "evictions": 12,
    "population": 17590,
    "medianHouseholdIncome": 77487
  },
  "11427": {
    "borough": "Queens",
    "evictions": 40,
    "population": 23593,
    "medianHouseholdIncome": 65494
  },
  "11428": {
    "borough": "Queens",
    "evictions": 42,
    "population": 19168,
    "medianHouseholdIncome": 68675
  },
  "11429": {
    "borough": "Queens",
    "evictions": 55,
    "population": 25105,
    "medianHouseholdIncome": 77037
  },
  "11430": {
    "borough": "Queens",
    "evictions": 0,
    "population": 184

  },
  "11432": {
    "borough": "Queens",
    "evictions": 171,
    "population": 60809,
    "medianHouseholdIncome": 52277
  },
  "11433": {
    "borough": "Queens",
    "evictions": 157,
    "population": 32687,
    "medianHouseholdIncome": 45820
  },
  "11434": {
    "borough": "Queens",
    "evictions": 159,
    "population": 59129,
    "medianHouseholdIncome": 57454
  },
  "11435": {
    "borough": "Queens",
    "evictions": 155,
    "population": 53687,
    "medianHouseholdIncome": 55268
  },
  "11436": {
    "borough": "Queens",
    "evictions": 45,
    "population": 17949,
    "medianHouseholdIncome": 66837
  },
  "11451": {
    "borough": "Queens",
    "evictions": 0,
    "population": 0

  },
  "11691": {
    "borough": "Queens",
    "evictions": 289,
    "population": 60035,
    "medianHouseholdIncome": 41190
  },
  "11692": {
    "borough": "Queens",
    "evictions": 120,
    "population": 18540,
    "medianHouseholdIncome": 42333
  },
  "11693": {
    "borough": "Queens",
    "evictions": 33,
    "population": 11916,
    "medianHouseholdIncome": 53829
  },
  "11694": {
    "borough": "Queens",
    "evictions": 53,
    "population": 20408,
    "medianHouseholdIncome": 79145
  },
  "11697": {
    "borough": "Queens",
    "evictions": 0,
    "population": 4079,
    "medianHouseholdIncome": 100909
  }
}

var neighborhoods = [{
    "zcta10": "10451",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03710",
    "pumaname": "NYC-Bronx Community District 1 & 2--Hunts Point, Longwood & Melrose",
    "nameshort": "Hunts Point, Longwood & Melrose",
    "per_in_puma": "0.482",
    "per_of_puma": "0.141"
  },
  {
    "zcta10": "10452",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03708",
    "pumaname": "NYC-Bronx Community District 4--Concourse, Highbridge & Mount Eden",
    "nameshort": "Concourse, Highbridge & Mount Eden",
    "per_in_puma": "0.952",
    "per_of_puma": "0.515"
  },
  {
    "zcta10": "10453",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03707",
    "pumaname": "NYC-Bronx Community District 5--Morris Heights, Fordham South & Mount Hope",
    "nameshort": "Morris Heights, Fordham South & Mount Hope",
    "per_in_puma": "0.984",
    "per_of_puma": "0.574"
  },
  {
    "zcta10": "10454",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03710",
    "pumaname": "NYC-Bronx Community District 1 & 2--Hunts Point, Longwood & Melrose",
    "nameshort": "Hunts Point, Longwood & Melrose",
    "per_in_puma": "1",
    "per_of_puma": "0.239"
  },
  {
    "zcta10": "10455",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03710",
    "pumaname": "NYC-Bronx Community District 1 & 2--Hunts Point, Longwood & Melrose",
    "nameshort": "Hunts Point, Longwood & Melrose",
    "per_in_puma": "1",
    "per_of_puma": "0.254"
  },
  {
    "zcta10": "10456",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03705",
    "pumaname": "NYC-Bronx Community District 3 & 6--Belmont, Crotona Park East & East Tremont",
    "nameshort": "Belmont, Crotona Park East & East Tremont",
    "per_in_puma": "0.491",
    "per_of_puma": "0.264"
  },
  {
    "zcta10": "10457",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03707",
    "pumaname": "NYC-Bronx Community District 5--Morris Heights, Fordham South & Mount Hope",
    "nameshort": "Morris Heights, Fordham South & Mount Hope",
    "per_in_puma": "0.483",
    "per_of_puma": "0.254"
  },
  {
    "zcta10": "10458",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03706",
    "pumaname": "NYC-Bronx Community District 7--Bedford Park, Fordham North & Norwood",
    "nameshort": "Bedford Park, Fordham North & Norwood",
    "per_in_puma": "0.596",
    "per_of_puma": "0.372"
  },
  {
    "zcta10": "10459",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03710",
    "pumaname": "NYC-Bronx Community District 1 & 2--Hunts Point, Longwood & Melrose",
    "nameshort": "Hunts Point, Longwood & Melrose",
    "per_in_puma": "0.631",
    "per_of_puma": "0.191"
  },
  {
    "zcta10": "10460",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03705",
    "pumaname": "NYC-Bronx Community District 3 & 6--Belmont, Crotona Park East & East Tremont",
    "nameshort": "Belmont, Crotona Park East & East Tremont",
    "per_in_puma": "0.75",
    "per_of_puma": "0.266"
  },
  {
    "zcta10": "10461",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03703",
    "pumaname": "NYC-Bronx Community District 10--Co-op City, Pelham Bay & Schuylerville",
    "nameshort": "Co-op City, Pelham Bay & Schuylerville",
    "per_in_puma": "0.483",
    "per_of_puma": "0.212"
  },
  {
    "zcta10": "10462",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03709",
    "pumaname": "NYC-Bronx Community District 9--Castle Hill, Clason Point & Parkchester",
    "nameshort": "Castle Hill, Clason Point & Parkchester",
    "per_in_puma": "0.548",
    "per_of_puma": "0.229"
  },
  {
    "zcta10": "10463",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03701",
    "pumaname": "NYC-Bronx Community District 8--Riverdale, Fieldston & Kingsbridge",
    "nameshort": "Riverdale, Fieldston & Kingsbridge",
    "per_in_puma": "0.838",
    "per_of_puma": "0.527"
  },
  {
    "zcta10": "10464",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03703",
    "pumaname": "NYC-Bronx Community District 10--Co-op City, Pelham Bay & Schuylerville",
    "nameshort": "Co-op City, Pelham Bay & Schuylerville",
    "per_in_puma": "0.971",
    "per_of_puma": "0.038"
  },
  {
    "zcta10": "10465",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03703",
    "pumaname": "NYC-Bronx Community District 10--Co-op City, Pelham Bay & Schuylerville",
    "nameshort": "Co-op City, Pelham Bay & Schuylerville",
    "per_in_puma": "0.995",
    "per_of_puma": "0.365"
  },
  {
    "zcta10": "10466",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03702",
    "pumaname": "NYC-Bronx Community District 12--Wakefield, Williamsbridge & Woodlawn",
    "nameshort": "Wakefield, Williamsbridge & Woodlawn",
    "per_in_puma": "1",
    "per_of_puma": "0.49"
  },
  {
    "zcta10": "10467",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03706",
    "pumaname": "NYC-Bronx Community District 7--Bedford Park, Fordham North & Norwood",
    "nameshort": "Bedford Park, Fordham North & Norwood",
    "per_in_puma": "0.412",
    "per_of_puma": "0.314"
  },
  {
    "zcta10": "10468",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03706",
    "pumaname": "NYC-Bronx Community District 7--Bedford Park, Fordham North & Norwood",
    "nameshort": "Bedford Park, Fordham North & Norwood",
    "per_in_puma": "0.476",
    "per_of_puma": "0.284"
  },
  {
    "zcta10": "10469",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03704",
    "pumaname": "NYC-Bronx Community District 11--Pelham Parkway, Morris Park & Laconia",
    "nameshort": "Pelham Parkway, Morris Park & Laconia",
    "per_in_puma": "0.483",
    "per_of_puma": "0.26"
  },
  {
    "zcta10": "10470",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03702",
    "pumaname": "NYC-Bronx Community District 12--Wakefield, Williamsbridge & Woodlawn",
    "nameshort": "Wakefield, Williamsbridge & Woodlawn",
    "per_in_puma": "1",
    "per_of_puma": "0.111"
  },
  {
    "zcta10": "10471",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03701",
    "pumaname": "NYC-Bronx Community District 8--Riverdale, Fieldston & Kingsbridge",
    "nameshort": "Riverdale, Fieldston & Kingsbridge",
    "per_in_puma": "1",
    "per_of_puma": "0.212"
  },
  {
    "zcta10": "10472",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03709",
    "pumaname": "NYC-Bronx Community District 9--Castle Hill, Clason Point & Parkchester",
    "nameshort": "Castle Hill, Clason Point & Parkchester",
    "per_in_puma": "1",
    "per_of_puma": "0.366"
  },
  {
    "zcta10": "10473",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03709",
    "pumaname": "NYC-Bronx Community District 9--Castle Hill, Clason Point & Parkchester",
    "nameshort": "Castle Hill, Clason Point & Parkchester",
    "per_in_puma": "1",
    "per_of_puma": "0.323"
  },
  {
    "zcta10": "10474",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03710",
    "pumaname": "NYC-Bronx Community District 1 & 2--Hunts Point, Longwood & Melrose",
    "nameshort": "Hunts Point, Longwood & Melrose",
    "per_in_puma": "1",
    "per_of_puma": "0.079"
  },
  {
    "zcta10": "10475",
    "stateco": "36005",
    "alloc": "x",
    "puma10": "03703",
    "pumaname": "NYC-Bronx Community District 10--Co-op City, Pelham Bay & Schuylerville",
    "nameshort": "Co-op City, Pelham Bay & Schuylerville",
    "per_in_puma": "0.982",
    "per_of_puma": "0.349"
  },
  {
    "zcta10": "11201",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04004",
    "pumaname": "NYC-Brooklyn Community District 2--Brooklyn Heights & Fort Greene",
    "nameshort": "Brooklyn Heights & Fort Greene",
    "per_in_puma": "0.894",
    "per_of_puma": "0.386"
  },
  {
    "zcta10": "11203",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04010",
    "pumaname": "NYC-Brooklyn Community District 17--East Flatbush, Farragut & Rugby",
    "nameshort": "East Flatbush, Farragut & Rugby",
    "per_in_puma": "0.795",
    "per_of_puma": "0.446"
  },
  {
    "zcta10": "11204",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04017",
    "pumaname": "NYC-Brooklyn Community District 11--Bensonhurst & Bath Beach",
    "nameshort": "Bensonhurst & Bath Beach",
    "per_in_puma": "0.635",
    "per_of_puma": "0.273"
  },
  {
    "zcta10": "11205",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04004",
    "pumaname": "NYC-Brooklyn Community District 2--Brooklyn Heights & Fort Greene",
    "nameshort": "Brooklyn Heights & Fort Greene",
    "per_in_puma": "0.7",
    "per_of_puma": "0.238"
  },
  {
    "zcta10": "11206",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04003",
    "pumaname": "NYC-Brooklyn Community District 3--Bedford-Stuyvesant",
    "nameshort": "Bedford-Stuyvesant",
    "per_in_puma": "0.464",
    "per_of_puma": "0.282"
  },
  {
    "zcta10": "11207",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04008",
    "pumaname": "NYC-Brooklyn Community District 5--East New York & Starrett City",
    "nameshort": "East New York & Starrett City",
    "per_in_puma": "0.491",
    "per_of_puma": "0.297"
  },
  {
    "zcta10": "11208",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04008",
    "pumaname": "NYC-Brooklyn Community District 5--East New York & Starrett City",
    "nameshort": "East New York & Starrett City",
    "per_in_puma": "1",
    "per_of_puma": "0.611"
  },
  {
    "zcta10": "11209",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04013",
    "pumaname": "NYC-Brooklyn Community District 10--Bay Ridge & Dyker Heights",
    "nameshort": "Bay Ridge & Dyker Heights",
    "per_in_puma": "1",
    "per_of_puma": "0.565"
  },
  {
    "zcta10": "11210",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04015",
    "pumaname": "NYC-Brooklyn Community District 14--Flatbush & Midwood",
    "nameshort": "Flatbush & Midwood",
    "per_in_puma": "0.481",
    "per_of_puma": "0.188"
  },
  {
    "zcta10": "11211",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04001",
    "pumaname": "NYC-Brooklyn Community District 1--Greenpoint & Williamsburg",
    "nameshort": "Greenpoint & Williamsburg",
    "per_in_puma": "1",
    "per_of_puma": "0.611"
  },
  {
    "zcta10": "11212",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04007",
    "pumaname": "NYC-Brooklyn Community District 16--Brownsville & Ocean Hill",
    "nameshort": "Brownsville & Ocean Hill",
    "per_in_puma": "0.693",
    "per_of_puma": "0.49"
  },
  {
    "zcta10": "11213",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04006",
    "pumaname": "NYC-Brooklyn Community District 8--Crown Heights North & Prospect Heights",
    "nameshort": "Crown Heights North & Prospect Heights",
    "per_in_puma": "0.771",
    "per_of_puma": "0.4"
  },
  {
    "zcta10": "11214",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04017",
    "pumaname": "NYC-Brooklyn Community District 11--Bensonhurst & Bath Beach",
    "nameshort": "Bensonhurst & Bath Beach",
    "per_in_puma": "0.904",
    "per_of_puma": "0.441"
  },
  {
    "zcta10": "11215",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04005",
    "pumaname": "NYC-Brooklyn Community District 6--Park Slope, Carroll Gardens & Red Hook",
    "nameshort": "Park Slope, Carroll Gardens & Red Hook",
    "per_in_puma": "0.843",
    "per_of_puma": "0.505"
  },
  {
    "zcta10": "11216",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04003",
    "pumaname": "NYC-Brooklyn Community District 3--Bedford-Stuyvesant",
    "nameshort": "Bedford-Stuyvesant",
    "per_in_puma": "0.509",
    "per_of_puma": "0.206"
  },
  {
    "zcta10": "11217",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04004",
    "pumaname": "NYC-Brooklyn Community District 2--Brooklyn Heights & Fort Greene",
    "nameshort": "Brooklyn Heights & Fort Greene",
    "per_in_puma": "0.557",
    "per_of_puma": "0.168"
  },
  {
    "zcta10": "11218",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04014",
    "pumaname": "NYC-Brooklyn Community District 12--Borough Park, Kensington & Ocean Parkway",
    "nameshort": "Borough Park, Kensington & Ocean Parkway",
    "per_in_puma": "0.676",
    "per_of_puma": "0.311"
  },
  {
    "zcta10": "11219",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04014",
    "pumaname": "NYC-Brooklyn Community District 12--Borough Park, Kensington & Ocean Parkway",
    "nameshort": "Borough Park, Kensington & Ocean Parkway",
    "per_in_puma": "0.689",
    "per_of_puma": "0.389"
  },
  {
    "zcta10": "11220",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04012",
    "pumaname": "NYC-Brooklyn Community District 7--Sunset Park & Windsor Terrace",
    "nameshort": "Sunset Park & Windsor Terrace",
    "per_in_puma": "0.865",
    "per_of_puma": "0.585"
  },
  {
    "zcta10": "11221",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04003",
    "pumaname": "NYC-Brooklyn Community District 3--Bedford-Stuyvesant",
    "nameshort": "Bedford-Stuyvesant",
    "per_in_puma": "0.51",
    "per_of_puma": "0.3"
  },
  {
    "zcta10": "11222",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04001",
    "pumaname": "NYC-Brooklyn Community District 1--Greenpoint & Williamsburg",
    "nameshort": "Greenpoint & Williamsburg",
    "per_in_puma": "1",
    "per_of_puma": "0.25"
  },
  {
    "zcta10": "11223",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04017",
    "pumaname": "NYC-Brooklyn Community District 11--Bensonhurst & Bath Beach",
    "nameshort": "Bensonhurst & Bath Beach",
    "per_in_puma": "0.391",
    "per_of_puma": "0.17"
  },
  {
    "zcta10": "11224",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04018",
    "pumaname": "NYC-Brooklyn Community District 13--Brighton Beach & Coney Island",
    "nameshort": "Brighton Beach & Coney Island",
    "per_in_puma": "1",
    "per_of_puma": "0.415"
  },
  {
    "zcta10": "11225",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04011",
    "pumaname": "NYC-Brooklyn Community District 9--Crown Heights South, Prospect Lefferts & Wingate",
    "nameshort": "Crown Heights South, Prospect Lefferts & Wingate",
    "per_in_puma": "1",
    "per_of_puma": "0.53"
  },
  {
    "zcta10": "11226",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04015",
    "pumaname": "NYC-Brooklyn Community District 14--Flatbush & Midwood",
    "nameshort": "Flatbush & Midwood",
    "per_in_puma": "0.521",
    "per_of_puma": "0.334"
  },
  {
    "zcta10": "11228",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04013",
    "pumaname": "NYC-Brooklyn Community District 10--Bay Ridge & Dyker Heights",
    "nameshort": "Bay Ridge & Dyker Heights",
    "per_in_puma": "0.604",
    "per_of_puma": "0.207"
  },
  {
    "zcta10": "11229",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04016",
    "pumaname": "NYC-Brooklyn Community District 15--Sheepshead Bay, Gerritsen Beach & Homecrest",
    "nameshort": "Sheepshead Bay, Gerritsen Beach & Homecrest",
    "per_in_puma": "0.981",
    "per_of_puma": "0.531"
  },
  {
    "zcta10": "11230",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04015",
    "pumaname": "NYC-Brooklyn Community District 14--Flatbush & Midwood",
    "nameshort": "Flatbush & Midwood",
    "per_in_puma": "0.756",
    "per_of_puma": "0.412"
  },
  {
    "zcta10": "11231",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04005",
    "pumaname": "NYC-Brooklyn Community District 6--Park Slope, Carroll Gardens & Red Hook",
    "nameshort": "Park Slope, Carroll Gardens & Red Hook",
    "per_in_puma": "0.98",
    "per_of_puma": "0.308"
  },
  {
    "zcta10": "11232",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04012",
    "pumaname": "NYC-Brooklyn Community District 7--Sunset Park & Windsor Terrace",
    "nameshort": "Sunset Park & Windsor Terrace",
    "per_in_puma": "0.965",
    "per_of_puma": "0.185"
  },
  {
    "zcta10": "11233",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04007",
    "pumaname": "NYC-Brooklyn Community District 16--Brownsville & Ocean Hill",
    "nameshort": "Brownsville & Ocean Hill",
    "per_in_puma": "0.466",
    "per_of_puma": "0.262"
  },
  {
    "zcta10": "11234",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04009",
    "pumaname": "NYC-Brooklyn Community District 18--Canarsie & Flatlands",
    "nameshort": "Canarsie & Flatlands",
    "per_in_puma": "1",
    "per_of_puma": "0.453"
  },
  {
    "zcta10": "11235",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04016",
    "pumaname": "NYC-Brooklyn Community District 15--Sheepshead Bay, Gerritsen Beach & Homecrest",
    "nameshort": "Sheepshead Bay, Gerritsen Beach & Homecrest",
    "per_in_puma": "0.513",
    "per_of_puma": "0.275"
  },
  {
    "zcta10": "11236",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04009",
    "pumaname": "NYC-Brooklyn Community District 18--Canarsie & Flatlands",
    "nameshort": "Canarsie & Flatlands",
    "per_in_puma": "0.884",
    "per_of_puma": "0.428"
  },
  {
    "zcta10": "11237",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04002",
    "pumaname": "NYC-Brooklyn Community District 4--Bushwick",
    "nameshort": "Bushwick",
    "per_in_puma": "1",
    "per_of_puma": "0.386"
  },
  {
    "zcta10": "11238",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04006",
    "pumaname": "NYC-Brooklyn Community District 8--Crown Heights North & Prospect Heights",
    "nameshort": "Crown Heights North & Prospect Heights",
    "per_in_puma": "0.539",
    "per_of_puma": "0.216"
  },
  {
    "zcta10": "11239",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04008",
    "pumaname": "NYC-Brooklyn Community District 5--East New York & Starrett City",
    "nameshort": "East New York & Starrett City",
    "per_in_puma": "1",
    "per_of_puma": "0.087"
  },
  {
    "zcta10": "11425",
    "stateco": "36047",
    "alloc": "x",
    "puma10": "04013",
    "pumaname": "NYC-Brooklyn Community District 10--Bay Ridge & Dyker Heights",
    "nameshort": "Bay Ridge & Dyker Heights",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10001",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "1",
    "per_of_puma": "0.146"
  },
  {
    "zcta10": "10002",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03809",
    "pumaname": "NYC-Manhattan Community District 3--Chinatown & Lower East Side",
    "nameshort": "Chinatown & Lower East Side",
    "per_in_puma": "1",
    "per_of_puma": "0.494"
  },
  {
    "zcta10": "10003",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03809",
    "pumaname": "NYC-Manhattan Community District 3--Chinatown & Lower East Side",
    "nameshort": "Chinatown & Lower East Side",
    "per_in_puma": "0.467",
    "per_of_puma": "0.159"
  },
  {
    "zcta10": "10004",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "1",
    "per_of_puma": "0.021"
  },
  {
    "zcta10": "10005",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "1",
    "per_of_puma": "0.048"
  },
  {
    "zcta10": "10006",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "1",
    "per_of_puma": "0.02"
  },
  {
    "zcta10": "10007",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "0.878",
    "per_of_puma": "0.041"
  },
  {
    "zcta10": "10009",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03809",
    "pumaname": "NYC-Manhattan Community District 3--Chinatown & Lower East Side",
    "nameshort": "Chinatown & Lower East Side",
    "per_in_puma": "0.73",
    "per_of_puma": "0.272"
  },
  {
    "zcta10": "10010",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_in_puma": "0.809",
    "per_of_puma": "0.17"
  },
  {
    "zcta10": "10011",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "0.77",
    "per_of_puma": "0.271"
  },
  {
    "zcta10": "10012",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "1",
    "per_of_puma": "0.161"
  },
  {
    "zcta10": "10013",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "0.812",
    "per_of_puma": "0.151"
  },
  {
    "zcta10": "10014",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "0.99",
    "per_of_puma": "0.212"
  },
  {
    "zcta10": "10016",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_in_puma": "0.905",
    "per_of_puma": "0.325"
  },
  {
    "zcta10": "10017",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_in_puma": "0.996",
    "per_of_puma": "0.109"
  },
  {
    "zcta10": "10018",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "1",
    "per_of_puma": "0.036"
  },
  {
    "zcta10": "10019",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "0.909",
    "per_of_puma": "0.269"
  },
  {
    "zcta10": "10020",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10021",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03805",
    "pumaname": "NYC-Manhattan Community District 8--Upper East Side",
    "nameshort": "Upper East Side",
    "per_in_puma": "1",
    "per_of_puma": "0.198"
  },
  {
    "zcta10": "10022",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_in_puma": "0.936",
    "per_of_puma": "0.198"
  },
  {
    "zcta10": "10023",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03806",
    "pumaname": "NYC-Manhattan Community District 7--Upper West Side & West Side",
    "nameshort": "Upper West Side & West Side",
    "per_in_puma": "1",
    "per_of_puma": "0.315"
  },
  {
    "zcta10": "10024",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03806",
    "pumaname": "NYC-Manhattan Community District 7--Upper West Side & West Side",
    "nameshort": "Upper West Side & West Side",
    "per_in_puma": "1",
    "per_of_puma": "0.306"
  },
  {
    "zcta10": "10025",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03806",
    "pumaname": "NYC-Manhattan Community District 7--Upper West Side & West Side",
    "nameshort": "Upper West Side & West Side",
    "per_in_puma": "0.682",
    "per_of_puma": "0.333"
  },
  {
    "zcta10": "10026",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03803",
    "pumaname": "NYC-Manhattan Community District 10--Central Harlem",
    "nameshort": "Central Harlem",
    "per_in_puma": "0.981",
    "per_of_puma": "0.281"
  },
  {
    "zcta10": "10027",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03802",
    "pumaname": "NYC-Manhattan Community District 9--Hamilton Heights, Manhattanville & West Harlem",
    "nameshort": "Hamilton Heights, Manhattanville & West Harlem",
    "per_in_puma": "0.603",
    "per_of_puma": "0.283"
  },
  {
    "zcta10": "10028",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03805",
    "pumaname": "NYC-Manhattan Community District 8--Upper East Side",
    "nameshort": "Upper East Side",
    "per_in_puma": "1",
    "per_of_puma": "0.205"
  },
  {
    "zcta10": "10029",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03804",
    "pumaname": "NYC-Manhattan Community District 11--East Harlem",
    "nameshort": "East Harlem",
    "per_in_puma": "1",
    "per_of_puma": "0.646"
  },
  {
    "zcta10": "10030",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03803",
    "pumaname": "NYC-Manhattan Community District 10--Central Harlem",
    "nameshort": "Central Harlem",
    "per_in_puma": "0.92",
    "per_of_puma": "0.209"
  },
  {
    "zcta10": "10031",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03802",
    "pumaname": "NYC-Manhattan Community District 9--Hamilton Heights, Manhattanville & West Harlem",
    "nameshort": "Hamilton Heights, Manhattanville & West Harlem",
    "per_in_puma": "1",
    "per_of_puma": "0.443"
  },
  {
    "zcta10": "10032",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03801",
    "pumaname": "NYC-Manhattan Community District 12--Washington Heights, Inwood & Marble Hill",
    "nameshort": "Washington Heights, Inwood & Marble Hill",
    "per_in_puma": "0.964",
    "per_of_puma": "0.279"
  },
  {
    "zcta10": "10033",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03801",
    "pumaname": "NYC-Manhattan Community District 12--Washington Heights, Inwood & Marble Hill",
    "nameshort": "Washington Heights, Inwood & Marble Hill",
    "per_in_puma": "1",
    "per_of_puma": "0.272"
  },
  {
    "zcta10": "10034",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03801",
    "pumaname": "NYC-Manhattan Community District 12--Washington Heights, Inwood & Marble Hill",
    "nameshort": "Washington Heights, Inwood & Marble Hill",
    "per_in_puma": "1",
    "per_of_puma": "0.196"
  },
  {
    "zcta10": "10035",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03804",
    "pumaname": "NYC-Manhattan Community District 11--East Harlem",
    "nameshort": "East Harlem",
    "per_in_puma": "0.941",
    "per_of_puma": "0.272"
  },
  {
    "zcta10": "10036",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "1",
    "per_of_puma": "0.171"
  },
  {
    "zcta10": "10037",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03803",
    "pumaname": "NYC-Manhattan Community District 10--Central Harlem",
    "nameshort": "Central Harlem",
    "per_in_puma": "0.588",
    "per_of_puma": "0.086"
  },
  {
    "zcta10": "10038",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "0.681",
    "per_of_puma": "0.093"
  },
  {
    "zcta10": "10039",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03803",
    "pumaname": "NYC-Manhattan Community District 10--Central Harlem",
    "nameshort": "Central Harlem",
    "per_in_puma": "1",
    "per_of_puma": "0.207"
  },
  {
    "zcta10": "10040",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03801",
    "pumaname": "NYC-Manhattan Community District 12--Washington Heights, Inwood & Marble Hill",
    "nameshort": "Washington Heights, Inwood & Marble Hill",
    "per_in_puma": "1",
    "per_of_puma": "0.211"
  },
  {
    "zcta10": "10044",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03805",
    "pumaname": "NYC-Manhattan Community District 8--Upper East Side",
    "nameshort": "Upper East Side",
    "per_in_puma": "1",
    "per_of_puma": "0.053"
  },
  {
    "zcta10": "10065",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03805",
    "pumaname": "NYC-Manhattan Community District 8--Upper East Side",
    "nameshort": "Upper East Side",
    "per_in_puma": "1",
    "per_of_puma": "0.147"
  },
  {
    "zcta10": "10069",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03806",
    "pumaname": "NYC-Manhattan Community District 7--Upper West Side & West Side",
    "nameshort": "Upper West Side & West Side",
    "per_in_puma": "1",
    "per_of_puma": "0.027"
  },
  {
    "zcta10": "10075",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03805",
    "pumaname": "NYC-Manhattan Community District 8--Upper East Side",
    "nameshort": "Upper East Side",
    "per_in_puma": "1",
    "per_of_puma": "0.119"
  },
  {
    "zcta10": "10103",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "1",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10110",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10111",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10112",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10115",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03802",
    "pumaname": "NYC-Manhattan Community District 9--Hamilton Heights, Manhattanville & West Harlem",
    "nameshort": "Hamilton Heights, Manhattanville & West Harlem",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10119",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "1",
    "per_of_puma": "0.001"
  },
  {
    "zcta10": "10128",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03805",
    "pumaname": "NYC-Manhattan Community District 8--Upper East Side",
    "nameshort": "Upper East Side",
    "per_in_puma": "0.96",
    "per_of_puma": "0.264"
  },
  {
    "zcta10": "10152",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10153",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10154",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10162",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03805",
    "pumaname": "NYC-Manhattan Community District 8--Upper East Side",
    "nameshort": "Upper East Side",
    "per_in_puma": "1",
    "per_of_puma": "0.008"
  },
  {
    "zcta10": "10165",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_in_puma": "1",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10167",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10168",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10169",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10170",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_in_puma": "1",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10171",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10172",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10173",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "1",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10174",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03808",
    "pumaname": "NYC-Manhattan Community District 6--Murray Hill, Gramercy & Stuyvesant Town",
    "nameshort": "Murray Hill, Gramercy & Stuyvesant Town",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10177",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10199",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03807",
    "pumaname": "NYC-Manhattan Community District 4 & 5--Chelsea, Clinton & Midtown Business District",
    "nameshort": "Chelsea, Clinton & Midtown Business District",
    "per_in_puma": "1",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10271",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10278",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10279",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10280",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "1",
    "per_of_puma": "0.053"
  },
  {
    "zcta10": "10282",
    "stateco": "36061",
    "alloc": "x",
    "puma10": "03810",
    "pumaname": "NYC-Manhattan Community District 1 & 2--Battery Park City, Greenwich Village & Soho",
    "nameshort": "Battery Park City, Greenwich Village & Soho",
    "per_in_puma": "1",
    "per_of_puma": "0.032"
  },
  {
    "zcta10": "11004",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "1",
    "per_of_puma": "0.074"
  },
  {
    "zcta10": "11005",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "1",
    "per_of_puma": "0.01"
  },
  {
    "zcta10": "11101",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04101",
    "pumaname": "NYC-Queens Community District 1--Astoria & Long Island City",
    "nameshort": "Astoria & Long Island City",
    "per_in_puma": "0.603",
    "per_of_puma": "0.088"
  },
  {
    "zcta10": "11102",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04101",
    "pumaname": "NYC-Queens Community District 1--Astoria & Long Island City",
    "nameshort": "Astoria & Long Island City",
    "per_in_puma": "1",
    "per_of_puma": "0.196"
  },
  {
    "zcta10": "11103",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04101",
    "pumaname": "NYC-Queens Community District 1--Astoria & Long Island City",
    "nameshort": "Astoria & Long Island City",
    "per_in_puma": "0.995",
    "per_of_puma": "0.222"
  },
  {
    "zcta10": "11104",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04109",
    "pumaname": "NYC-Queens Community District 2--Sunnyside & Woodside",
    "nameshort": "Sunnyside & Woodside",
    "per_in_puma": "1",
    "per_of_puma": "0.203"
  },
  {
    "zcta10": "11105",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04101",
    "pumaname": "NYC-Queens Community District 1--Astoria & Long Island City",
    "nameshort": "Astoria & Long Island City",
    "per_in_puma": "1",
    "per_of_puma": "0.211"
  },
  {
    "zcta10": "11106",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04101",
    "pumaname": "NYC-Queens Community District 1--Astoria & Long Island City",
    "nameshort": "Astoria & Long Island City",
    "per_in_puma": "1",
    "per_of_puma": "0.223"
  },
  {
    "zcta10": "11109",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04109",
    "pumaname": "NYC-Queens Community District 2--Sunnyside & Woodside",
    "nameshort": "Sunnyside & Woodside",
    "per_in_puma": "1",
    "per_of_puma": "0.026"
  },
  {
    "zcta10": "11351",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04103",
    "pumaname": "NYC-Queens Community District 7--Flushing, Murray Hill & Whitestone",
    "nameshort": "Flushing, Murray Hill & Whitestone",
    "per_of_puma": "0"
  },
  {
    "zcta10": "11354",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04103",
    "pumaname": "NYC-Queens Community District 7--Flushing, Murray Hill & Whitestone",
    "nameshort": "Flushing, Murray Hill & Whitestone",
    "per_in_puma": "1",
    "per_of_puma": "0.221"
  },
  {
    "zcta10": "11355",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04103",
    "pumaname": "NYC-Queens Community District 7--Flushing, Murray Hill & Whitestone",
    "nameshort": "Flushing, Murray Hill & Whitestone",
    "per_in_puma": "1",
    "per_of_puma": "0.346"
  },
  {
    "zcta10": "11356",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04103",
    "pumaname": "NYC-Queens Community District 7--Flushing, Murray Hill & Whitestone",
    "nameshort": "Flushing, Murray Hill & Whitestone",
    "per_in_puma": "1",
    "per_of_puma": "0.094"
  },
  {
    "zcta10": "11357",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04103",
    "pumaname": "NYC-Queens Community District 7--Flushing, Murray Hill & Whitestone",
    "nameshort": "Flushing, Murray Hill & Whitestone",
    "per_in_puma": "1",
    "per_of_puma": "0.158"
  },
  {
    "zcta10": "11358",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04103",
    "pumaname": "NYC-Queens Community District 7--Flushing, Murray Hill & Whitestone",
    "nameshort": "Flushing, Murray Hill & Whitestone",
    "per_in_puma": "0.617",
    "per_of_puma": "0.093"
  },
  {
    "zcta10": "11359",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04103",
    "pumaname": "NYC-Queens Community District 7--Flushing, Murray Hill & Whitestone",
    "nameshort": "Flushing, Murray Hill & Whitestone",
    "per_of_puma": "0"
  },
  {
    "zcta10": "11360",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04103",
    "pumaname": "NYC-Queens Community District 7--Flushing, Murray Hill & Whitestone",
    "nameshort": "Flushing, Murray Hill & Whitestone",
    "per_in_puma": "0.784",
    "per_of_puma": "0.06"
  },
  {
    "zcta10": "11361",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04104",
    "pumaname": "NYC-Queens Community District 11--Bayside, Douglaston & Little Neck",
    "nameshort": "Bayside, Douglaston & Little Neck",
    "per_in_puma": "1",
    "per_of_puma": "0.245"
  },
  {
    "zcta10": "11362",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04104",
    "pumaname": "NYC-Queens Community District 11--Bayside, Douglaston & Little Neck",
    "nameshort": "Bayside, Douglaston & Little Neck",
    "per_in_puma": "1",
    "per_of_puma": "0.153"
  },
  {
    "zcta10": "11363",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04104",
    "pumaname": "NYC-Queens Community District 11--Bayside, Douglaston & Little Neck",
    "nameshort": "Bayside, Douglaston & Little Neck",
    "per_in_puma": "1",
    "per_of_puma": "0.06"
  },
  {
    "zcta10": "11364",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04104",
    "pumaname": "NYC-Queens Community District 11--Bayside, Douglaston & Little Neck",
    "nameshort": "Bayside, Douglaston & Little Neck",
    "per_in_puma": "0.998",
    "per_of_puma": "0.295"
  },
  {
    "zcta10": "11365",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04106",
    "pumaname": "NYC-Queens Community District 8--Briarwood, Fresh Meadows & Hillcrest",
    "nameshort": "Briarwood, Fresh Meadows & Hillcrest",
    "per_in_puma": "0.747",
    "per_of_puma": "0.205"
  },
  {
    "zcta10": "11366",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04106",
    "pumaname": "NYC-Queens Community District 8--Briarwood, Fresh Meadows & Hillcrest",
    "nameshort": "Briarwood, Fresh Meadows & Hillcrest",
    "per_in_puma": "1",
    "per_of_puma": "0.088"
  },
  {
    "zcta10": "11367",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04106",
    "pumaname": "NYC-Queens Community District 8--Briarwood, Fresh Meadows & Hillcrest",
    "nameshort": "Briarwood, Fresh Meadows & Hillcrest",
    "per_in_puma": "0.903",
    "per_of_puma": "0.241"
  },
  {
    "zcta10": "11368",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04107",
    "pumaname": "NYC-Queens Community District 4--Elmhurst & South Corona",
    "nameshort": "Elmhurst & South Corona",
    "per_in_puma": "0.528",
    "per_of_puma": "0.397"
  },
  {
    "zcta10": "11369",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04102",
    "pumaname": "NYC-Queens Community District 3--Jackson Heights & North Corona",
    "nameshort": "Jackson Heights & North Corona",
    "per_in_puma": "1",
    "per_of_puma": "0.211"
  },
  {
    "zcta10": "11370",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04102",
    "pumaname": "NYC-Queens Community District 3--Jackson Heights & North Corona",
    "nameshort": "Jackson Heights & North Corona",
    "per_in_puma": "0.556",
    "per_of_puma": "0.12"
  },
  {
    "zcta10": "11371",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04102",
    "pumaname": "NYC-Queens Community District 3--Jackson Heights & North Corona",
    "nameshort": "Jackson Heights & North Corona",
    "per_of_puma": "0"
  },
  {
    "zcta10": "11372",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04102",
    "pumaname": "NYC-Queens Community District 3--Jackson Heights & North Corona",
    "nameshort": "Jackson Heights & North Corona",
    "per_in_puma": "0.998",
    "per_of_puma": "0.363"
  },
  {
    "zcta10": "11373",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04107",
    "pumaname": "NYC-Queens Community District 4--Elmhurst & South Corona",
    "nameshort": "Elmhurst & South Corona",
    "per_in_puma": "0.874",
    "per_of_puma": "0.603"
  },
  {
    "zcta10": "11374",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04108",
    "pumaname": "NYC-Queens Community District 6--Forest Hills & Rego Park",
    "nameshort": "Forest Hills & Rego Park",
    "per_in_puma": "0.972",
    "per_of_puma": "0.379"
  },
  {
    "zcta10": "11375",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04108",
    "pumaname": "NYC-Queens Community District 6--Forest Hills & Rego Park",
    "nameshort": "Forest Hills & Rego Park",
    "per_in_puma": "1",
    "per_of_puma": "0.614"
  },
  {
    "zcta10": "11377",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04109",
    "pumaname": "NYC-Queens Community District 2--Sunnyside & Woodside",
    "nameshort": "Sunnyside & Woodside",
    "per_in_puma": "0.898",
    "per_of_puma": "0.602"
  },
  {
    "zcta10": "11378",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04110",
    "pumaname": "NYC-Queens Community District 5--Ridgewood, Glendale & Middle Village",
    "nameshort": "Ridgewood, Glendale & Middle Village",
    "per_in_puma": "0.995",
    "per_of_puma": "0.204"
  },
  {
    "zcta10": "11379",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04110",
    "pumaname": "NYC-Queens Community District 5--Ridgewood, Glendale & Middle Village",
    "nameshort": "Ridgewood, Glendale & Middle Village",
    "per_in_puma": "1",
    "per_of_puma": "0.204"
  },
  {
    "zcta10": "11385",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04110",
    "pumaname": "NYC-Queens Community District 5--Ridgewood, Glendale & Middle Village",
    "nameshort": "Ridgewood, Glendale & Middle Village",
    "per_in_puma": "1",
    "per_of_puma": "0.579"
  },
  {
    "zcta10": "11411",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "0.973",
    "per_of_puma": "0.096"
  },
  {
    "zcta10": "11412",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04112",
    "pumaname": "NYC-Queens Community District 12--Jamaica, Hollis & St. Albans",
    "nameshort": "Jamaica, Hollis & St. Albans",
    "per_in_puma": "0.952",
    "per_of_puma": "0.15"
  },
  {
    "zcta10": "11413",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "0.831",
    "per_of_puma": "0.171"
  },
  {
    "zcta10": "11414",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04113",
    "pumaname": "NYC-Queens Community District 10--Howard Beach & Ozone Park",
    "nameshort": "Howard Beach & Ozone Park",
    "per_in_puma": "1",
    "per_of_puma": "0.212"
  },
  {
    "zcta10": "11415",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04111",
    "pumaname": "NYC-Queens Community District 9--Richmond Hill & Woodhaven",
    "nameshort": "Richmond Hill & Woodhaven",
    "per_in_puma": "1",
    "per_of_puma": "0.135"
  },
  {
    "zcta10": "11416",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04111",
    "pumaname": "NYC-Queens Community District 9--Richmond Hill & Woodhaven",
    "nameshort": "Richmond Hill & Woodhaven",
    "per_in_puma": "0.971",
    "per_of_puma": "0.169"
  },
  {
    "zcta10": "11417",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04113",
    "pumaname": "NYC-Queens Community District 10--Howard Beach & Ozone Park",
    "nameshort": "Howard Beach & Ozone Park",
    "per_in_puma": "0.959",
    "per_of_puma": "0.225"
  },
  {
    "zcta10": "11418",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04111",
    "pumaname": "NYC-Queens Community District 9--Richmond Hill & Woodhaven",
    "nameshort": "Richmond Hill & Woodhaven",
    "per_in_puma": "1",
    "per_of_puma": "0.253"
  },
  {
    "zcta10": "11419",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04113",
    "pumaname": "NYC-Queens Community District 10--Howard Beach & Ozone Park",
    "nameshort": "Howard Beach & Ozone Park",
    "per_in_puma": "0.513",
    "per_of_puma": "0.196"
  },
  {
    "zcta10": "11420",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04113",
    "pumaname": "NYC-Queens Community District 10--Howard Beach & Ozone Park",
    "nameshort": "Howard Beach & Ozone Park",
    "per_in_puma": "1",
    "per_of_puma": "0.359"
  },
  {
    "zcta10": "11421",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04111",
    "pumaname": "NYC-Queens Community District 9--Richmond Hill & Woodhaven",
    "nameshort": "Richmond Hill & Woodhaven",
    "per_in_puma": "1",
    "per_of_puma": "0.274"
  },
  {
    "zcta10": "11422",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "1",
    "per_of_puma": "0.161"
  },
  {
    "zcta10": "11423",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04112",
    "pumaname": "NYC-Queens Community District 12--Jamaica, Hollis & St. Albans",
    "nameshort": "Jamaica, Hollis & St. Albans",
    "per_in_puma": "0.753",
    "per_of_puma": "0.102"
  },
  {
    "zcta10": "11424",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04111",
    "pumaname": "NYC-Queens Community District 9--Richmond Hill & Woodhaven",
    "nameshort": "Richmond Hill & Woodhaven",
    "per_of_puma": "0"
  },
  {
    "zcta10": "11426",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "1",
    "per_of_puma": "0.093"
  },
  {
    "zcta10": "11427",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "0.667",
    "per_of_puma": "0.083"
  },
  {
    "zcta10": "11428",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "0.983",
    "per_of_puma": "0.1"
  },
  {
    "zcta10": "11429",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04105",
    "pumaname": "NYC-Queens Community District 13--Queens Village, Cambria Heights & Rosedale",
    "nameshort": "Queens Village, Cambria Heights & Rosedale",
    "per_in_puma": "0.986",
    "per_of_puma": "0.131"
  },
  {
    "zcta10": "11430",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04113",
    "pumaname": "NYC-Queens Community District 10--Howard Beach & Ozone Park",
    "nameshort": "Howard Beach & Ozone Park",
    "per_in_puma": "1",
    "per_of_puma": "0.001"
  },
  {
    "zcta10": "11432",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04106",
    "pumaname": "NYC-Queens Community District 8--Briarwood, Fresh Meadows & Hillcrest",
    "nameshort": "Briarwood, Fresh Meadows & Hillcrest",
    "per_in_puma": "0.582",
    "per_of_puma": "0.23"
  },
  {
    "zcta10": "11433",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04112",
    "pumaname": "NYC-Queens Community District 12--Jamaica, Hollis & St. Albans",
    "nameshort": "Jamaica, Hollis & St. Albans",
    "per_in_puma": "1",
    "per_of_puma": "0.148"
  },
  {
    "zcta10": "11434",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04112",
    "pumaname": "NYC-Queens Community District 12--Jamaica, Hollis & St. Albans",
    "nameshort": "Jamaica, Hollis & St. Albans",
    "per_in_puma": "0.883",
    "per_of_puma": "0.236"
  },
  {
    "zcta10": "11435",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04112",
    "pumaname": "NYC-Queens Community District 12--Jamaica, Hollis & St. Albans",
    "nameshort": "Jamaica, Hollis & St. Albans",
    "per_in_puma": "0.551",
    "per_of_puma": "0.133"
  },
  {
    "zcta10": "11436",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04112",
    "pumaname": "NYC-Queens Community District 12--Jamaica, Hollis & St. Albans",
    "nameshort": "Jamaica, Hollis & St. Albans",
    "per_in_puma": "1",
    "per_of_puma": "0.081"
  },
  {
    "zcta10": "11451",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04112",
    "pumaname": "NYC-Queens Community District 12--Jamaica, Hollis & St. Albans",
    "nameshort": "Jamaica, Hollis & St. Albans",
    "per_of_puma": "0"
  },
  {
    "zcta10": "11691",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04114",
    "pumaname": "NYC-Queens Community District 14--Far Rockaway, Breezy Point & Broad Channel",
    "nameshort": "Far Rockaway, Breezy Point & Broad Channel",
    "per_in_puma": "1",
    "per_of_puma": "0.522"
  },
  {
    "zcta10": "11692",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04114",
    "pumaname": "NYC-Queens Community District 14--Far Rockaway, Breezy Point & Broad Channel",
    "nameshort": "Far Rockaway, Breezy Point & Broad Channel",
    "per_in_puma": "1",
    "per_of_puma": "0.161"
  },
  {
    "zcta10": "11693",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04114",
    "pumaname": "NYC-Queens Community District 14--Far Rockaway, Breezy Point & Broad Channel",
    "nameshort": "Far Rockaway, Breezy Point & Broad Channel",
    "per_in_puma": "1",
    "per_of_puma": "0.104"
  },
  {
    "zcta10": "11694",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04114",
    "pumaname": "NYC-Queens Community District 14--Far Rockaway, Breezy Point & Broad Channel",
    "nameshort": "Far Rockaway, Breezy Point & Broad Channel",
    "per_in_puma": "1",
    "per_of_puma": "0.177"
  },
  {
    "zcta10": "11697",
    "stateco": "36081",
    "alloc": "x",
    "puma10": "04114",
    "pumaname": "NYC-Queens Community District 14--Far Rockaway, Breezy Point & Broad Channel",
    "nameshort": "Far Rockaway, Breezy Point & Broad Channel",
    "per_in_puma": "1",
    "per_of_puma": "0.035"
  },
  {
    "zcta10": "10301",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03903",
    "pumaname": "NYC-Staten Island Community District 1--Port Richmond, Stapleton & Mariners Harbor",
    "nameshort": "Port Richmond, Stapleton & Mariners Harbor",
    "per_in_puma": "0.966",
    "per_of_puma": "0.218"
  },
  {
    "zcta10": "10302",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03903",
    "pumaname": "NYC-Staten Island Community District 1--Port Richmond, Stapleton & Mariners Harbor",
    "nameshort": "Port Richmond, Stapleton & Mariners Harbor",
    "per_in_puma": "1",
    "per_of_puma": "0.109"
  },
  {
    "zcta10": "10303",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03903",
    "pumaname": "NYC-Staten Island Community District 1--Port Richmond, Stapleton & Mariners Harbor",
    "nameshort": "Port Richmond, Stapleton & Mariners Harbor",
    "per_in_puma": "1",
    "per_of_puma": "0.15"
  },
  {
    "zcta10": "10304",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03903",
    "pumaname": "NYC-Staten Island Community District 1--Port Richmond, Stapleton & Mariners Harbor",
    "nameshort": "Port Richmond, Stapleton & Mariners Harbor",
    "per_in_puma": "0.667",
    "per_of_puma": "0.16"
  },
  {
    "zcta10": "10305",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03902",
    "pumaname": "NYC-Staten Island Community District 2--New Springville & South Beach",
    "nameshort": "New Springville & South Beach",
    "per_in_puma": "0.691",
    "per_of_puma": "0.217"
  },
  {
    "zcta10": "10306",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03902",
    "pumaname": "NYC-Staten Island Community District 2--New Springville & South Beach",
    "nameshort": "New Springville & South Beach",
    "per_in_puma": "0.523",
    "per_of_puma": "0.22"
  },
  {
    "zcta10": "10307",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03901",
    "pumaname": "NYC-Staten Island Community District 3--Tottenville, Great Kills & Annadale",
    "nameshort": "Tottenville, Great Kills & Annadale",
    "per_in_puma": "1",
    "per_of_puma": "0.088"
  },
  {
    "zcta10": "10308",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03901",
    "pumaname": "NYC-Staten Island Community District 3--Tottenville, Great Kills & Annadale",
    "nameshort": "Tottenville, Great Kills & Annadale",
    "per_in_puma": "1",
    "per_of_puma": "0.171"
  },
  {
    "zcta10": "10309",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03901",
    "pumaname": "NYC-Staten Island Community District 3--Tottenville, Great Kills & Annadale",
    "nameshort": "Tottenville, Great Kills & Annadale",
    "per_in_puma": "1",
    "per_of_puma": "0.203"
  },
  {
    "zcta10": "10310",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03903",
    "pumaname": "NYC-Staten Island Community District 1--Port Richmond, Stapleton & Mariners Harbor",
    "nameshort": "Port Richmond, Stapleton & Mariners Harbor",
    "per_in_puma": "1",
    "per_of_puma": "0.142"
  },
  {
    "zcta10": "10311",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03902",
    "pumaname": "NYC-Staten Island Community District 2--New Springville & South Beach",
    "nameshort": "New Springville & South Beach",
    "per_of_puma": "0"
  },
  {
    "zcta10": "10312",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03901",
    "pumaname": "NYC-Staten Island Community District 3--Tottenville, Great Kills & Annadale",
    "nameshort": "Tottenville, Great Kills & Annadale",
    "per_in_puma": "1",
    "per_of_puma": "0.371"
  },
  {
    "zcta10": "10314",
    "stateco": "36085",
    "alloc": "x",
    "puma10": "03902",
    "pumaname": "NYC-Staten Island Community District 2--New Springville & South Beach",
    "nameshort": "New Springville & South Beach",
    "per_in_puma": "0.696",
    "per_of_puma": "0.447"
  }
]

  map.setPaintProperty("ny-zip-codes-agr3qr", "fill-opacity", ["case", ["boolean", ["feature-state", "hover"], false], 1, 0.5]);

  map.on("mousemove", "ny-zip-codes-agr3qr", function (e) {
    if (e.features.length > 0) {
      if (hoveredZip) {
        const coordinates = [parseFloat(e.features[0].properties.INTPTLON10), parseFloat(e.features[0].properties.INTPTLAT10)];
        const zipcode = e.features[0].properties.ZCTA5CE10;
        if (zipCodeStats.hasOwnProperty(zipcode)) {
          //Do this
          const zipcodeRecord = zipCodeStats[zipcode];
          const evictions = zipcodeRecord.evictions;
          const population = zipcodeRecord.population;
          const borough = zipcodeRecord.borough;
          const income = zipcodeRecord.medianHouseholdIncome;
          const neighborhoodsForZip = neighborhoods.filter(x => x.zcta10 === zipcode);
          const neighborhoodText = ""
          if (neighborhoodsForZip.length > 0) {
            neighborhoodText = "Neighborhoods: " + neighborhoodsForZip.filter(x => parseFloat(x.per_of_puma)) > 0.1
          }

          const description = "Zip Code: " + zipcode + "<br />"
          + "Borough: " + borough + "<br />" +
          + "Neighborhood" +
          + "Evictions in 2017: " + evictions
          + "Population: " + population + "<br />"
          + "Median Household Income: " + income + "<br />"
          popup.setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
        }

      }
      hoveredZip = e.features[0].properties.ZCTA5CE10;
    }
  });

  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on("mouseleave", "ny-zip-codes-agr3qr", function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
    hoveredZip = null;
  });
  // map.on('mouseenter', 'ny-zip-codes-743zug', function (e) {
  //   // Change the cursor style as a UI indicator.
  //   map.getCanvas().style.cursor = 'pointer';
  //   console.log(e.features[0]);
  //   console.log(e.features[0].properties);
  //   var coordinates = [parseFloat(e.features[0].properties.INTPTLON10), parseFloat(e.features[0].properties.INTPTLAT10)];
  //   var description = e.features[0].properties.ZCTA5CE10;

  //   // // Ensure that if the map is zoomed out such that multiple
  //   // // copies of the feature are visible, the popup appears
  //   // // over the copy being pointed to.
  //   // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  //   //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  //   // }

  //   // Populate the popup and set its coordinates
  //   // based on the feature found.
  //   popup.setLngLat(coordinates)
  //   .setHTML(description)
  //   .addTo(map);
  // });

  // map.on('mouseleave', 'ny-zip-codes-743zug', function () {
  //   map.getCanvas().style.cursor = '';
  //   popup.remove();
  // });
});
