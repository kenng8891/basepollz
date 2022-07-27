const { Gamedata } = require("../models");

const gameapi = [
  {
    gameid: 1,
    game_id: 661064,
    game_date: "2022-07-26",
    game_status: "Preview",
    teams: {
      away: {
        wins: 40,
        losses: 56,
        id: 134,
        name: "Pittsburgh Pirates",
      },
      home: {
        wins: 38,
        losses: 57,
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
        wins: 45,
        losses: 50,
        id: 146,
        name: "Miami Marlins",
      },
      home: {
        wins: 36,
        losses: 58,
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
        wins: 52,
        losses: 43,
        id: 139,
        name: "Tampa Bay Rays",
      },
      home: {
        wins: 47,
        losses: 48,
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
        wins: 58,
        losses: 39,
        id: 144,
        name: "Atlanta Braves",
      },
      home: {
        wins: 49,
        losses: 46,
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
        wins: 51,
        losses: 46,
        id: 138,
        name: "St. Louis Cardinals",
      },
      home: {
        wins: 53,
        losses: 43,

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
        wins: 48,
        losses: 46,
        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        wins: 48,
        losses: 48,

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
        wins: 54,
        losses: 43,
        id: 135,
        name: "San Diego Padres",
      },
      home: {
        wins: 38,
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
        wins: 66,
        losses: 31,
        id: 147,
        name: "New York Yankees",
      },
      home: {
        wins: 59,
        losses: 37,
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
        wins: 40,
        losses: 55,
        id: 108,
        name: "Los Angeles Angels",
      },
      home: {
        wins: 38,
        losses: 57,
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
        wins: 52,
        losses: 44,
        id: 142,
        name: "Minnesota Twins",
      },
      home: {
        wins: 53,
        losses: 43,
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
        wins: 48,
        losses: 48,
        id: 145,
        name: "Chicago White Sox",
      },
      home: {
        wins: 43,
        losses: 53,
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
        wins: 64,
        losses: 32,
        id: 117,
        name: "Houston Astros",
      },
      home: {
        wins: 35,
        losses: 63,
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
        wins: 48,
        losses: 47,
        id: 137,
        name: "San Francisco Giants",
      },
      home: {
        wins: 42,
        losses: 53,
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
        wins: 32,
        losses: 65,
        id: 120,
        name: "Washington Nationals",
      },
      home: {
        wins: 64,
        losses: 30,
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
        wins: 43,
        losses: 51,
        id: 140,
        name: "Texas Rangers",
      },
      home: {
        wins: 51,
        losses: 45,
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
        wins: 58,
        losses: 39,
        id: 144,
        name: "Atlanta Braves",
      },
      home: {
        wins: 49,
        losses: 46,
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
        wins: 54,
        losses: 43,
        id: 135,
        name: "San Diego Padres",
      },
      home: {
        wins: 38,
        losses: 58,
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
        wins: 40,
        losses: 55,
        id: 108,
        name: "Los Angeles Angels",
      },
      home: {
        wins: 38,
        losses: 57,
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
        wins: 52,
        losses: 44,
        id: 142,
        name: "Minnesota Twins",
      },
      home: {
        wins: 53,
        losses: 43,
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
        wins: 32,
        losses: 65,
        id: 120,
        name: "Washington Nationals",
      },
      home: {
        wins: 64,
        losses: 30,
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
        wins: 48,
        losses: 48,
        id: 145,
        name: "Chicago White Sox",
      },
      home: {
        wins: 43,
        losses: 53,
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
        wins: 64,
        losses: 32,
        id: 117,
        name: "Houston Astros",
      },
      home: {
        wins: 35,
        losses: 63,
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
        wins: 48,
        losses: 47,
        id: 137,
        name: "San Francisco Giants",
      },
      home: {
        wins: 42,
        losses: 53,
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
        wins: 43,
        losses: 51,
        id: 140,
        name: "Texas Rangers",
      },
      home: {
        wins: 51,
        losses: 45,
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
        wins: 45,
        losses: 50,
        id: 146,
        name: "Miami Marlins",
      },
      home: {
        wins: 36,
        losses: 58,
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
        wins: 52,
        losses: 43,
        id: 139,
        name: "Tampa Bay Rays",
      },
      home: {
        wins: 47,
        losses: 48,
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
        wins: 51,
        losses: 46,
        id: 138,
        name: "St. Louis Cardinals",
      },
      home: {
        wins: 53,
        losses: 43,
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
        wins: 48,
        losses: 46,
        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        wins: 48,
        losses: 48,
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
        wins: 66,
        losses: 31,
        id: 147,
        name: "New York Yankees",
      },
      home: {
        wins: 59,
        losses: 37,
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
        wins: 52,
        losses: 43,
        id: 139,
        name: "Tampa Bay Rays",
      },
      home: {
        wins: 47,
        losses: 48,
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
        wins: 45,
        losses: 50,
        id: 146,
        name: "Miami Marlins",
      },
      home: {
        wins: 36,
        losses: 58,
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
        wins: 49,
        losses: 46,
        id: 143,
        name: "Philadelphia Phillies",
      },
      home: {
        wins: 40,
        losses: 56,
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
        wins: 38,
        losses: 57,
        id: 118,
        name: "Kansas City Royals",
      },
      home: {
        wins: 66,
        losses: 31,
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
        wins: 38,
        losses: 58,
        id: 116,
        name: "Detroit Tigers",
      },
      home: {
        wins: 53,
        losses: 43,
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
        wins: 48,
        losses: 46,
        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        wins: 48,
        losses: 48,
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
        wins: 51,
        losses: 45,
        id: 136,
        name: "Seattle Mariners",
      },
      home: {
        wins: 64,
        losses: 32,
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
        wins: 64,
        losses: 30,
        id: 119,
        name: "Los Angeles Dodgers",
      },
      home: {
        wins: 43,
        losses: 53,
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
        wins: 43,
        losses: 51,
        id: 140,
        name: "Texas Rangers",
      },
      home: {
        wins: 40,
        losses: 55,
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
        wins: 38,
        losses: 57,
        id: 112,
        name: "Chicago Cubs",
      },
      home: {
        wins: 48,
        losses: 47,
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
        wins: 47,
        losses: 48,
        id: 110,
        name: "Baltimore Orioles",
      },
      home: {
        wins: 36,
        losses: 58,
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
        wins: 59,
        losses: 37,
        id: 121,
        name: "New York Mets",
      },
      home: {
        wins: 45,
        losses: 50,
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
        wins: 51,
        losses: 46,
        id: 138,
        name: "St. Louis Cardinals",
      },
      home: {
        wins: 32,
        losses: 65,
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
        wins: 49,
        losses: 46,
        id: 143,
        name: "Philadelphia Phillies",
      },
      home: {
        wins: 40,
        losses: 56,
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
        wins: 38,
        losses: 57,
        id: 118,
        name: "Kansas City Royals",
      },
      home: {
        wins: 66,
        losses: 31,
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
        wins: 38,
        losses: 58,
        id: 116,
        name: "Detroit Tigers",
      },
      home: {
        wins: 53,
        losses: 43,
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
        wins: 48,
        losses: 46,

        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        wins: 52,
        losses: 43,
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
        wins: 53,
        losses: 43,
        id: 158,
      },
      home: {
        wins: 48,
        losses: 48,
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
        wins: 42,
        losses: 53,
        id: 109,
        name: "Arizona Diamondbacks",
      },
      home: {
        wins: 58,
        losses: 39,
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
        wins: 51,
        losses: 45,
        id: 136,
        name: "Seattle Mariners",
      },

      home: {
        wins: 64,
        losses: 32,

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
        wins: 35,
        losses: 63,

        id: 133,
        name: "Oakland Athletics",
      },
      home: {
        wins: 48,
        losses: 48,

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
        wins: 64,
        losses: 30,

        id: 119,
        name: "Los Angeles Dodgers",
      },
      home: {
        wins: 43,
        losses: 53,

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
        wins: 43,
        losses: 51,

        id: 140,
        name: "Texas Rangers",
      },
      home: {
        wins: 40,
        losses: 55,

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
        wins: 52,
        losses: 44,

        id: 142,
        name: "Minnesota Twins",
      },
      home: {
        wins: 54,
        losses: 43,

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
        wins: 38,
        losses: 57,

        id: 112,
        name: "Chicago Cubs",
      },
      home: {
        wins: 48,
        losses: 47,

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
        wins: 48,
        losses: 46,

        id: 114,
        name: "Cleveland Guardians",
      },
      home: {
        wins: 52,
        losses: 43,

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
        wins: 38,
        losses: 57,

        id: 118,
        name: "Kansas City Royals",
      },
      home: {
        wins: 66,
        losses: 31,

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
        wins: 38,
        losses: 58,

        id: 116,
        name: "Detroit Tigers",
      },
      home: {
        wins: 53,
        losses: 43,

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
        wins: 53,
        losses: 43,

        id: 158,
        name: "Milwaukee Brewers",
      },
      home: {
        wins: 48,
        losses: 48,

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
        wins: 59,
        losses: 37,

        id: 121,
        name: "New York Mets",
      },
      home: {
        wins: 45,
        losses: 50,

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
        wins: 47,
        losses: 48,

        id: 110,
        name: "Baltimore Orioles",
      },

      home: {
        wins: 36,

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
        wins: 51,
        losses: 45,

        id: 136,
        name: "Seattle Mariners",
      },
      home: {
        wins: 64,
        losses: 32,

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
        wins: 51,
        losses: 46,

        id: 138,
        name: "St. Louis Cardinals",
      },
      home: {
        wins: 32,
        losses: 65,

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
        wins: 52,
        losses: 44,

        id: 142,
        name: "Minnesota Twins",
      },
      home: {
        wins: 54,
        losses: 43,

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
        wins: 49,
        losses: 46,
        id: 143,
        name: "Philadelphia Phillies",
      },
      home: {
        wins: 40,
        losses: 56,
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
        wins: 35,
        losses: 63,

        id: 133,
        name: "Oakland Athletics",
      },
      home: {
        wins: 48,
        losses: 48,

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
        wins: 42,
        losses: 53,

        id: 109,
        name: "Arizona Diamondbacks",
      },
      home: {
        wins: 58,
        losses: 39,
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
        wins: 64,
        losses: 30,

        id: 119,
        name: "Los Angeles Dodgers",
      },
      home: {
        wins: 43,
        losses: 53,

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
        wins: 38,
        losses: 57,

        id: 112,
        name: "Chicago Cubs",
      },
      home: {
        wins: 48,
        losses: 47,
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
        wins: 43,
        losses: 51,

        id: 140,
        name: "Texas Rangers",
      },
      home: {
        wins: 40,
        losses: 55,

        id: 108,
        name: "Los Angeles Angels",
      },
    },
  },
];

const gamesData = () => Game.bulkCreate(gameapi);

module.exports = gamesData;
