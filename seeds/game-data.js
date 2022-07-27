const { Gamedata } = require("../models");

const gameapi = [
  {
    gameid: 1,
    game_id: 661064,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 663029,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 661054,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 661563,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 661716,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 663203,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 662813,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 662438,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 662653,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 661281,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 661079,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 662346,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 663314,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 662573,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 662184,
    game_date: "2022-07-26",
    game_status: "Preview",
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
    game_id: 661554,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 662900,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 662652,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 661249,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 662565,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 661078,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 662345,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 663294,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 662165,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 663028,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 661053,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 661715,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 663191,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 662420,
    game_date: "2022-07-27",
    game_status: "Preview",
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
    game_id: 661052,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 663027,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 662326,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 661257,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 661714,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 663200,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 662907,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 661077,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 663380,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 662058,
    game_date: "2022-07-28",
    game_status: "Preview",
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
    game_id: 663026,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 661372,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 662477,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 662435,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 661256,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 661713,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 661871,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 663190,
    game_date: "2022-07-29",
    game_status: "Preview",

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
    game_id: 661501,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 662745,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 661406,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 661076,
    game_date: "2022-07-29",
    game_status: "Preview",
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
    game_id: 663379,
    game_date: "2022-07-29",
    game_status: "Preview",

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
    game_id: 662268,
    game_date: "2022-07-29",
    game_status: "Preview",

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
    game_id: 662057,
    game_date: "2022-07-29",
    game_status: "Preview",

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
    game_id: 661870,
    game_date: "2022-07-30",
    game_status: "Preview",
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
    game_id: 661255,
    game_date: "2022-07-30",
    game_status: "Preview",

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
    game_id: 661712,
    game_date: "2022-07-30",
    game_status: "Preview",

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
    game_id: 663192,
    game_date: "2022-07-30",
    game_status: "Preview",

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
    game_id: 661371,
    game_date: "2022-07-30",
    game_status: "Preview",
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
    game_id: 663025,
    game_date: "2022-07-30",
    game_status: "Preview",
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
    game_id: 662738,
    game_date: "2022-07-30",
    game_status: "Preview",

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
    game_id: 662476,
    game_date: "2022-07-30",
    game_status: "Preview",
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
    game_id: 662196,
    game_date: "2022-07-30",
    game_status: "Preview",

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
    game_id: 662415,
    game_date: "2022-07-30",
    game_status: "Preview",
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
    game_id: 661451,
    game_date: "2022-07-30",
    game_status: "Preview",
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
    game_id: 661499,
    game_date: "2022-07-30",
    game_status: "Preview",

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
    game_id: 662989,
    game_date: "2022-07-30",
    game_status: "Preview",
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
    game_id: 662112,
    game_date: "2022-07-30",
    game_status: "Preview",
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
    game_id: 663378,
    game_date: "2022-07-30",
    game_status: "Preview",
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
