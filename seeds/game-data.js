const { Gamedata } = require("../models");

const gameapi = [
  {
    gameid: 1,
    game_id: 661064,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 134,
    team_name_away: "Pittsburgh Pirates",

    team_id_home: 112,
    team_name_home: "Chicago Cubs",
  },

  {
    gameid: 2,
    game_id: 663029,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 146,
    team_name_away: "Miami Marlins",
    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
  },

  {
    gameid: 3,
    game_id: 661054,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 139,
    team_name_away: "Tampa Bay Rays",

    team_id_home: 110,
    team_name_home: "Baltimore Orioles",
  },

  {
    gameid: 4,
    game_id: 661563,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 144,
    team_name_away: "Atlanta Braves",

    team_id_home: 143,
    team_name_home: "Philadelphia Phillies",
  },

  {
    gameid: 5,
    game_id: 661716,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 138,
    team_name_away: "St. Louis Cardinals",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
  },

  {
    gameid: 6,
    game_id: 663203,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 114,
    team_name_away: "Cleveland Guardians",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
  },

  {
    gameid: 7,
    game_id: 662813,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 135,
    team_name_away: "San Diego Padres",

    team_id_home: 116,
    team_name_home: "Detroit Tigers",
  },

  {
    gameid: 8,
    game_id: 662438,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 147,
    team_name_away: "New York Yankees",

    team_id_home: 121,
    team_name_home: "New York Mets",
  },

  {
    gameid: 9,
    game_id: 662653,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 108,
    team_name_away: "Los Angeles Angels",

    team_id_home: 118,
    team_name_home: "Kansas City Royals",
  },

  {
    gameid: 10,
    game_id: 661281,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 142,
    team_name_away: "Minnesota Twins",

    team_id_home: 158,
    team_name_home: "Milwaukee Brewers",
  },

  {
    gameid: 11,
    game_id: 661079,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 145,
    team_name_away: "Chicago White Sox",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
  },

  {
    gameid: 12,
    game_id: 662346,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 117,
    team_name_away: "Houston Astros",

    team_id_home: 133,
    team_name_home: "Oakland Athletics",
  },

  {
    gameid: 13,
    game_id: 663314,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 137,
    team_name_away: "San Francisco Giants",

    team_id_home: 109,
    team_name_home: "Arizona Diamondbacks",
  },

  {
    gameid: 14,
    game_id: 662573,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 120,
    team_name_away: "Washington Nationals",

    team_id_home: 119,
    team_name_home: "Los Angeles Dodgers",
  },

  {
    gameid: 15,
    game_id: 662184,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 140,
    team_name_away: "Texas Rangers",

    team_id_home: 136,
    team_name_home: "Seattle Mariners",
  },

  {
    gameid: 16,
    game_id: 661554,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 144,
    team_name_away: "Atlanta Braves",

    team_id_home: 143,
    team_name_home: "Philadelphia Phillies",
  },

  {
    gameid: 17,
    game_id: 662900,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 135,
    team_name_away: "San Diego Padres",

    team_id_home: 116,
    team_name_home: "Detroit Tigers",
  },

  {
    gameid: 18,
    game_id: 662652,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 108,
    team_name_away: "Los Angeles Angels",

    team_id_home: 118,
    team_name_home: "Kansas City Royals",
  },

  {
    gameid: 19,
    game_id: 661249,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 142,
    team_name_away: "Minnesota Twins",

    team_id_home: 158,
    team_name_home: "Milwaukee Brewers",
  },

  {
    gameid: 20,
    game_id: 662565,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 120,
    team_name_away: "Washington Nationals",

    team_id_home: 119,
    team_name_home: "Los Angeles Dodgers",
  },

  {
    gameid: 21,
    game_id: 661078,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 145,
    team_name_away: "Chicago White Sox",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
  },

  {
    gameid: 22,
    game_id: 662345,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 117,
    team_name_away: "Houston Astros",

    team_id_home: 133,
    team_name_home: "Oakland Athletics",
  },

  {
    gameid: 23,
    game_id: 663294,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 137,
    team_name_away: "San Francisco Giants",

    team_id_home: 109,
    team_name_home: "Arizona Diamondbacks",
  },

  {
    gameid: 24,
    game_id: 662165,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 140,
    team_name_away: "Texas Rangers",

    team_id_home: 136,
    team_name_home: "Seattle Mariners",
  },

  {
    gameid: 25,
    game_id: 663028,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 146,
    team_name_away: "Miami Marlins",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
  },

  {
    gameid: 26,
    game_id: 661053,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 139,
    team_name_away: "Tampa Bay Rays",

    team_id_home: 110,
    team_name_home: "Baltimore Orioles",
  },

  {
    gameid: 27,
    game_id: 661715,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 138,
    team_name_away: "St. Louis Cardinals",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
  },

  {
    gameid: 28,
    game_id: 663191,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 114,
    team_name_away: "Cleveland Guardians",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
  },

  {
    gameid: 29,
    game_id: 662420,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 147,
    team_name_away: "New York Yankees",

    team_id_home: 121,
    team_name_home: "New York Mets",
  },

  {
    gameid: 30,
    game_id: 661052,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 139,
    team_name_away: "Tampa Bay Rays",

    team_id_home: 110,
    team_name_home: "Baltimore Orioles",
  },

  {
    gameid: 31,
    game_id: 663027,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 146,
    team_name_away: "Miami Marlins",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
  },

  {
    gameid: 32,
    game_id: 662326,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 143,
    team_name_away: "Philadelphia Phillies",

    team_id_home: 134,
    team_name_home: "Pittsburgh Pirates",
  },

  {
    gameid: 33,
    game_id: 661257,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 118,
    team_name_away: "Kansas City Royals",

    team_id_home: 147,
    team_name_home: "New York Yankees",
  },

  {
    gameid: 34,
    game_id: 661714,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 116,
    team_name_away: "Detroit Tigers",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
  },

  {
    gameid: 35,
    game_id: 663200,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 114,
    team_name_away: "Cleveland Guardians",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
  },

  {
    gameid: 36,
    game_id: 662907,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 136,
    team_name_away: "Seattle Mariners",

    team_id_home: 117,
    team_name_home: "Houston Astros",
  },

  {
    gameid: 37,
    game_id: 661077,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 119,
    team_name_away: "Los Angeles Dodgers",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
  },

  {
    gameid: 38,
    game_id: 663380,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 140,
    team_name_away: "Texas Rangers",

    team_id_home: 108,
    team_name_home: "Los Angeles Angels",
  },

  {
    gameid: 39,
    game_id: 662058,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 112,
    team_name_away: "Chicago Cubs",

    team_id_home: 137,
    team_name_home: "San Francisco Giants",
  },

  {
    gameid: 40,
    game_id: 663026,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 110,
    team_name_away: "Baltimore Orioles",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
  },

  {
    gameid: 41,
    game_id: 661372,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 121,
    team_name_away: "New York Mets",

    team_id_home: 146,
    team_name_home: "Miami Marlins",
  },

  {
    gameid: 42,
    game_id: 662477,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 138,
    team_name_away: "St. Louis Cardinals",

    team_id_home: 120,
    team_name_home: "Washington Nationals",
  },

  {
    gameid: 43,
    game_id: 662435,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 143,
    team_name_away: "Philadelphia Phillies",

    team_id_home: 134,
    team_name_home: "Pittsburgh Pirates",
  },

  {
    gameid: 44,
    game_id: 661256,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 118,
    team_name_away: "Kansas City Royals",

    team_id_home: 147,
    team_name_home: "New York Yankees",
  },

  {
    gameid: 45,
    game_id: 661713,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 116,
    team_name_away: "Detroit Tigers",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
  },

  {
    gameid: 46,
    game_id: 661871,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 114,
    team_name_away: "Cleveland Guardians",

    team_id_home: 139,
    team_name_home: "Tampa Bay Rays",
  },

  {
    gameid: 47,
    game_id: 663190,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 158,
    team_name_away: "Milwaukee Brewers",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
  },

  {
    gameid: 48,
    game_id: 661501,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 109,
    team_name_away: "Arizona Diamondbacks",

    team_id_home: 144,
    team_name_home: "Atlanta Braves",
  },

  {
    gameid: 49,
    game_id: 662745,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 136,
    team_name_away: "Seattle Mariners",

    team_id_home: 117,
    team_name_home: "Houston Astros",
  },

  {
    gameid: 50,
    game_id: 661406,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 133,
    team_name_away: "Oakland Athletics",

    team_id_home: 145,
    team_name_home: "Chicago White Sox",
  },

  {
    gameid: 51,
    game_id: 661076,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 119,
    team_name_away: "Los Angeles Dodgers",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
  },

  {
    gameid: 52,
    game_id: 663379,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 140,
    team_name_away: "Texas Rangers",

    team_id_home: 108,
    team_name_home: "Los Angeles Angels",
  },

  {
    gameid: 53,
    game_id: 662268,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 142,
    team_name_away: "Minnesota Twins",

    team_id_home: 135,
    team_name_home: "San Diego Padres",
  },

  {
    gameid: 54,
    game_id: 662057,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 112,
    team_name_away: "Chicago Cubs",

    team_id_home: 137,
    team_name_home: "San Francisco Giants",
  },

  {
    gameid: 55,
    game_id: 661870,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 114,
    team_name_away: "Cleveland Guardians",

    team_id_home: 139,
    team_name_home: "Tampa Bay Rays",
  },

  {
    gameid: 56,
    game_id: 661255,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 118,
    team_name_away: "Kansas City Royals",

    team_id_home: 147,
    team_name_home: "New York Yankees",
  },

  {
    gameid: 57,
    game_id: 661712,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 116,
    team_name_away: "Detroit Tigers",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
  },

  {
    gameid: 58,
    game_id: 663192,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 158,
    team_name_away: "Milwaukee Brewers",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
  },

  {
    gameid: 59,
    game_id: 661371,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 121,
    team_name_away: "New York Mets",

    team_id_home: 146,
    team_name_home: "Miami Marlins",
  },

  {
    gameid: 60,
    game_id: 663025,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 110,
    team_name_away: "Baltimore Orioles",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
  },

  {
    gameid: 61,
    game_id: 662738,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 136,
    team_name_away: "Seattle Mariners",

    team_id_home: 117,
    team_name_home: "Houston Astros",
  },

  {
    gameid: 62,
    game_id: 662476,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 138,
    team_name_away: "St. Louis Cardinals",

    team_id_home: 120,
    team_name_home: "Washington Nationals",
  },

  {
    gameid: 63,
    game_id: 662196,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 142,
    team_name_away: "Minnesota Twins",

    team_id_home: 135,
    team_name_home: "San Diego Padres",
  },

  {
    gameid: 64,
    game_id: 662415,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 143,
    team_name_away: "Philadelphia Phillies",

    team_id_home: 134,
    team_name_home: "Pittsburgh Pirates",
  },

  {
    gameid: 65,
    game_id: 661451,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 133,
    team_name_away: "Oakland Athletics",

    team_id_home: 145,
    team_name_home: "Chicago White Sox",
  },

  {
    gameid: 66,
    game_id: 661499,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 109,
    team_name_away: "Arizona Diamondbacks",

    team_id_home: 144,
    team_name_home: "Atlanta Braves",
  },

  {
    gameid: 67,
    game_id: 662989,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 119,
    team_name_away: "Los Angeles Dodgers",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
  },

  {
    gameid: 68,
    game_id: 662112,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 112,
    team_name_away: "Chicago Cubs",

    team_id_home: 137,
    team_name_home: "San Francisco Giants",
  },

  {
    gameid: 69,
    game_id: 663378,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 140,
    team_name_away: "Texas Rangers",

    team_id_home: 108,
    team_name_home: "Los Angeles Angels",
  },
];

const gamesData = () => Game.bulkCreate(gameapi);

module.exports = gamesData;
