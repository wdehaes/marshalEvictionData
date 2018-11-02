var fs = require("fs");
var obj = require('./ny_new_york_zip_codes_geo.min');

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
var zipCodeList = Object.keys(zipCodeStats);
var filteredZips = obj["features"].filter(x => zipCodeList.includes(x.properties.ZCTA5CE10));
obj["features"] = filteredZips;
fs.writeFile("./ny_zip_codes.json", JSON.stringify(obj), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

var zipCodesRTC = [11216, 11221, 11225, 10457, 10467, 10468, 10026, 10025, 10027, 11433, 11434, 11373, 10302, 10303, 10314].map(x => x.toString());

var filteredZips = obj["features"].filter(x => zipCodesRTC.includes(x.properties.ZCTA5CE10));
obj["features"] = filteredZips;
fs.writeFile("./ny_zip_codes_rtc.json", JSON.stringify(obj), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

