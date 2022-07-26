const { Gamedata } = require("../models");

const gameapi = [
  {
    gameid: 1,
    gamePk: 661064,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 134,
        name: "Pittsburgh Pirates",
      },
      home: {
        id: 112,
        name: "Chicago Cubs",
      },
    },
  },

  {
    gameid: 2,
    gamePk: 663029,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 146,
        name: "Miami Marlins",
      },
      home: {
        id: 113,
        name: "Cincinnati Reds",
      },
    },
  },

  {
    gameid: 3,
    gamePk: 661054,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 139,
        name: "Tampa Bay Rays",
      },
      home: {
        id: 110,
        name: "Baltimore Orioles",
      },
    },
  },

  {
    gameid: 4,
    gamePk: 661563,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 144,
        name: "Atlanta Braves",
      },
      home: {
        id: 143,
        name: "Philadelphia Phillies",
      },
    },
  },

  {
    gameid: 5,
    gamePk: 661716,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 138,
        name: "St. Louis Cardinals",
      },
      home: {
        id: 141,
        name: "Toronto Blue Jays",
      },
    },
  },

  {
    gameid: 6,
    gamePk: 663203,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        id: 111,
        name: "Boston Red Sox",
      },
    },
  },

  {
    gameid: 7,
    gamePk: 662813,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 135,
        name: "San Diego Padres",
      },
      home: {
        id: 116,
        name: "Detroit Tigers",
      },
    },
  },

  {
    gameid: 8,
    gamePk: 662438,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 147,
        name: "New York Yankees",
      },
      home: {
        id: 121,
        name: "New York Mets",
      },
    },
  },

  {
    gameid: 9,
    gamePk: 662653,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 108,
        name: "Los Angeles Angels",
      },
      home: {
        id: 118,
        name: "Kansas City Royals",
      },
    },
  },

  {
    gameid: 10,
    gamePk: 661281,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 142,
      },
      home: {
        id: 158,
        name: "Milwaukee Brewers",
      },
    },
  },

  {
    gameid: 11,
    gamePk: 661079,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 145,
        name: "Chicago White Sox",
      },
      home: {
        id: 115,
        name: "Colorado Rockies",
      },
    },
  },

  {
    gameid: 12,
    gamePk: 662346,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 117,
        name: "Houston Astros",
      },
      home: {
        id: 133,
        name: "Oakland Athletics",
      },
    },
  },

  {
    gameid: 13,
    gamePk: 663314,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 137,
        name: "San Francisco Giants",
      },
      home: {
        id: 109,
        name: "Arizona Diamondbacks",
      },
    },
  },

  {
    gameid: 14,
    gamePk: 662573,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 120,
        name: "Washington Nationals",
      },
      home: {
        id: 119,
        name: "Los Angeles Dodgers",
      },
    },
  },

  {
    gameid: 15,
    gamePk: 662184,
    officialDate: "2022-07-26",
    teams: {
      away: {
        id: 140,
        name: "Texas Rangers",
      },
      home: {
        id: 136,
        name: "Seattle Mariners",
      },
    },
  },

  {
    gameid: 16,
    gamePk: 661554,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 144,
        name: "Atlanta Braves",
      },
      home: {
        id: 143,
        name: "Philadelphia Phillies",
      },
    },
  },

  {
    gameid: 17,
    gamePk: 662900,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 135,
        name: "San Diego Padres",
      },
      home: {
        id: 116,
        name: "Detroit Tigers",
      },
    },
  },

  {
    gameid: 18,
    gamePk: 662652,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 108,
        name: "Los Angeles Angels",
      },
      home: {
        id: 118,
        name: "Kansas City Royals",
      },
    },
  },

  {
    gameid: 19,
    gamePk: 661249,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 142,
      },
      home: {
        id: 158,
        name: "Milwaukee Brewers",
      },
    },
  },

  {
    gameid: 20,
    gamePk: 662565,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 120,
        name: "Washington Nationals",
      },
      home: {
        id: 119,
        name: "Los Angeles Dodgers",
      },
    },
  },

  {
    gameid: 21,
    gamePk: 661078,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 145,
        name: "Chicago White Sox",
      },
      home: {
        id: 115,
        name: "Colorado Rockies",
      },
    },
  },

  {
    gameid: 22,
    gamePk: 662345,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 117,
        name: "Houston Astros",
      },
      home: {
        id: 133,
        name: "Oakland Athletics",
      },
    },
  },

  {
    gameid: 23,
    gamePk: 663294,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 137,
        name: "San Francisco Giants",
      },
      home: {
        id: 109,
        name: "Arizona Diamondbacks",
      },
    },
  },

  {
    gameid: 24,
    gamePk: 662165,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 140,
        name: "Texas Rangers",
      },
      home: {
        id: 136,
        name: "Seattle Mariners",
      },
    },
  },

  {
    gameid: 25,
    gamePk: 663028,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 146,
        name: "Miami Marlins",
      },
      home: {
        id: 113,
        name: "Cincinnati Reds",
      },
    },
  },

  {
    gameid: 26,
    gamePk: 661053,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 139,
        name: "Tampa Bay Rays",
      },
      home: {
        id: 110,
        name: "Baltimore Orioles",
      },
    },
  },

  {
    gameid: 27,
    gamePk: 661715,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 138,
        name: "St. Louis Cardinals",
      },
      home: {
        id: 141,
        name: "Toronto Blue Jays",
      },
    },
  },

  {
    gameid: 28,
    gamePk: 663191,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        id: 111,
        name: "Boston Red Sox",
      },
    },
  },

  {
    gameid: 29,
    gamePk: 662420,
    officialDate: "2022-07-27",
    teams: {
      away: {
        id: 147,
        name: "New York Yankees",
      },
      home: {
        id: 121,
        name: "New York Mets",
      },
    },
  },

  {
    gameid: 30,
    gamePk: 661052,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 139,
        name: "Tampa Bay Rays",
      },
      home: {
        id: 110,
        name: "Baltimore Orioles",
      },
    },
  },

  {
    gameid: 31,
    gamePk: 663027,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 146,
        name: "Miami Marlins",
      },
      home: {
        id: 113,
        name: "Cincinnati Reds",
      },
    },
  },

  {
    gameid: 32,
    gamePk: 662326,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 143,
        name: "Philadelphia Phillies",
      },
      home: {
        id: 134,
        name: "Pittsburgh Pirates",
      },
    },
  },

  {
    gameid: 33,
    gamePk: 661257,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 118,
        name: "Kansas City Royals",
      },
      home: {
        id: 147,
        name: "New York Yankees",
      },
    },
  },

  {
    gameid: 34,
    gamePk: 661714,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 116,
        name: "Detroit Tigers",
      },
      home: {
        id: 141,
        name: "Toronto Blue Jays",
      },
    },
  },

  {
    gameid: 35,
    gamePk: 663200,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        id: 111,
        name: "Boston Red Sox",
      },
    },
  },

  {
    gameid: 36,
    gamePk: 662907,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 136,
        name: "Seattle Mariners",
      },
      home: {
        id: 117,
        name: "Houston Astros",
      },
    },
  },

  {
    gameid: 37,
    gamePk: 661077,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 119,
        name: "Los Angeles Dodgers",
      },
      home: {
        id: 115,
        name: "Colorado Rockies",
      },
    },
  },

  {
    gameid: 38,
    gamePk: 663380,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 140,
        name: "Texas Rangers",
      },
      home: {
        id: 108,
        name: "Los Angeles Angels",
      },
    },
  },

  {
    gameid: 39,
    gamePk: 662058,
    officialDate: "2022-07-28",
    teams: {
      away: {
        id: 112,
        name: "Chicago Cubs",
      },
      home: {
        id: 137,
        name: "San Francisco Giants",
      },
    },
  },

  {
    gameid: 40,
    gamePk: 663026,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 110,
        name: "Baltimore Orioles",
      },
      home: {
        id: 113,
        name: "Cincinnati Reds",
      },
    },
  },

  {
    gameid: 41,
    gamePk: 661372,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 121,
        name: "New York Mets",
      },
      home: {
        id: 146,
        name: "Miami Marlins",
      },
    },
  },

  {
    gameid: 42,
    gamePk: 662477,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 138,
        name: "St. Louis Cardinals",
      },
      home: {
        id: 120,
        name: "Washington Nationals",
      },
    },
  },

  {
    gameid: 43,
    gamePk: 662435,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 143,
        name: "Philadelphia Phillies",
      },
      home: {
        id: 134,
        name: "Pittsburgh Pirates",
      },
    },
  },

  {
    gameid: 44,
    gamePk: 661256,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 118,
        name: "Kansas City Royals",
      },
      home: {
        id: 147,
        name: "New York Yankees",
      },
    },
  },

  {
    gameid: 45,
    gamePk: 661713,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 116,
        name: "Detroit Tigers",
      },
      home: {
        id: 141,
        name: "Toronto Blue Jays",
      },
    },
  },

  {
    gameid: 46,
    gamePk: 661871,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        id: 139,
        name: "Tampa Bay Rays",
      },
    },
  },

  {
    gameid: 47,
    gamePk: 663190,
    officialDate: "2022-07-29",

    teams: {
      away: {
        id: 158,
      },
      home: {
        id: 111,
        name: "Boston Red Sox",
      },
    },
  },

  {
    gameid: 48,
    gamePk: 661501,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 109,
        name: "Arizona Diamondbacks",
      },
      home: {
        id: 144,
        name: "Atlanta Braves",
      },
    },
  },

  {
    gameid: 49,
    gamePk: 662745,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 136,
        name: "Seattle Mariners",
      },

      home: {
        id: 117,
        name: "Houston Astros",
      },
    },
  },

  {
    gameid: 50,
    gamePk: 661406,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 133,
        name: "Oakland Athletics",
      },
      home: {
        id: 145,
        name: "Chicago White Sox",
      },
    },
  },

  {
    gameid: 51,
    gamePk: 661076,
    officialDate: "2022-07-29",
    teams: {
      away: {
        id: 119,
        name: "Los Angeles Dodgers",
      },
      home: {
        id: 115,
        name: "Colorado Rockies",
      },
    },
  },

  {
    gameid: 52,
    gamePk: 663379,
    officialDate: "2022-07-29",

    teams: {
      away: {
        id: 140,
        name: "Texas Rangers",
      },
      home: {
        id: 108,
        name: "Los Angeles Angels",
      },
    },
  },

  {
    gameid: 53,
    gamePk: 662268,
    officialDate: "2022-07-29",

    teams: {
      away: {
        id: 142,
      },
      home: {
        id: 135,
        name: "San Diego Padres",
      },
    },
  },

  {
    gameid: 54,
    gamePk: 662057,
    officialDate: "2022-07-29",

    teams: {
      away: {
        id: 112,
        name: "Chicago Cubs",
      },
      home: {
        id: 137,
        name: "San Francisco Giants",
      },
    },
  },

  {
    gameid: 55,
    gamePk: 661870,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        id: 139,
        name: "Tampa Bay Rays",
      },
    },
  },

  {
    gameid: 56,
    gamePk: 661255,
    officialDate: "2022-07-30",

    teams: {
      away: {
        id: 118,
        name: "Kansas City Royals",
      },
      home: {
        id: 147,
        name: "New York Yankees",
      },
    },
  },

  {
    gameid: 57,
    gamePk: 661712,
    officialDate: "2022-07-30",

    teams: {
      away: {
        id: 116,
        name: "Detroit Tigers",
      },
      home: {
        id: 141,
        name: "Toronto Blue Jays",
      },
    },
  },

  {
    gameid: 58,
    gamePk: 663192,
    officialDate: "2022-07-30",

    teams: {
      away: {
        id: 158,
        name: "Milwaukee Brewers",
      },
      home: {
        id: 111,
        name: "Boston Red Sox",
      },
    },
  },

  {
    gameid: 59,
    gamePk: 661371,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 121,
        name: "New York Mets",
      },
      home: {
        id: 146,
        name: "Miami Marlins",
      },
    },
  },

  {
    gameid: 60,
    gamePk: 663025,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 110,
        name: "Baltimore Orioles",
      },

      home: {
        id: 113,
        name: "Cincinnati Reds",
      },
    },
  },

  {
    gameid: 61,
    gamePk: 662738,
    officialDate: "2022-07-30",

    teams: {
      away: {
        id: 136,
        name: "Seattle Mariners",
      },
      home: {
        id: 117,
        name: "Houston Astros",
      },
    },
  },

  {
    gameid: 62,
    gamePk: 662476,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 138,
        name: "St. Louis Cardinals",
      },
      home: {
        id: 120,
        name: "Washington Nationals",
      },
    },
  },

  {
    gameid: 63,
    gamePk: 662196,
    officialDate: "2022-07-30",

    teams: {
      away: {
        id: 142,
      },
      home: {
        id: 135,
        name: "San Diego Padres",
      },
    },
  },

  {
    gameid: 64,
    gamePk: 662415,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 143,
        name: "Philadelphia Phillies",
      },
      home: {
        id: 134,
        name: "Pittsburgh Pirates",
      },
    },
  },

  {
    gameid: 65,
    gamePk: 661451,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 133,
        name: "Oakland Athletics",
      },
      home: {
        id: 145,
        name: "Chicago White Sox",
      },
    },
  },

  {
    gameid: 66,
    gamePk: 661499,
    officialDate: "2022-07-30",

    teams: {
      away: {
        id: 109,
        name: "Arizona Diamondbacks",
      },
      home: {
        id: 144,
        name: "Atlanta Braves",
      },
    },
  },

  {
    gameid: 67,
    gamePk: 662989,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 119,
        name: "Los Angeles Dodgers",
      },
      home: {
        id: 115,
        name: "Colorado Rockies",
      },
    },
  },

  {
    gameid: 68,
    gamePk: 662112,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 112,
        name: "Chicago Cubs",
      },
      home: {
        id: 137,
        name: "San Francisco Giants",
      },
    },
  },

  {
    gameid: 69,
    gamePk: 663378,
    officialDate: "2022-07-30",
    teams: {
      away: {
        id: 140,
        name: "Texas Rangers",
      },
      home: {
        id: 108,
        name: "Los Angeles Angels",
      },
    },
  },
];

const gamesData = () => Game.bulkCreate(gameapi);

module.exports = gamesData;
