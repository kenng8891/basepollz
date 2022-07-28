const { Game } = require("../models");

const gameapi = [
  {
    gameid: 1,
    game_id: 661064,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 134,
    team_name_away: "Pittsburgh Pirates",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Pittsburgh_Pirates.png",

    team_id_home: 112,
    team_name_home: "Chicago Cubs",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_Cubs.png",
  },

  {
    gameid: 2,
    game_id: 663029,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 146,
    team_name_away: "Miami Marlins",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
  },

  {
    gameid: 3,
    game_id: 661054,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 139,
    team_name_away: "Tampa Bay Rays",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",

    team_id_home: 110,
    team_name_home: "Baltimore Orioles",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",
  },

  {
    gameid: 4,
    game_id: 661563,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 144,
    team_name_away: "Atlanta Braves",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Atlanta_Braves.png",

    team_id_home: 143,
    team_name_home: "Philadelphia Phillies",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",
  },

  {
    gameid: 5,
    game_id: 661716,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 138,
    team_name_away: "St. Louis Cardinals",
    team_away_logo: "./public/logo-files/StLouis_Cardinals.png",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
  },

  {
    gameid: 6,
    game_id: 663203,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 114,
    team_name_away: "Cleveland Guardians",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
  },

  {
    gameid: 7,
    game_id: 662813,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 135,
    team_name_away: "San Diego Padres",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanDiego_Padres.png",

    team_id_home: 116,
    team_name_home: "Detroit Tigers",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",
  },

  {
    gameid: 8,
    game_id: 662438,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 147,
    team_name_away: "New York Yankees",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",

    team_id_home: 121,
    team_name_home: "New York Mets",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Mets.png",
  },

  {
    gameid: 9,
    game_id: 662653,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 108,
    team_name_away: "Los Angeles Angels",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",

    team_id_home: 118,
    team_name_home: "Kansas City Royals",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",
  },

  {
    gameid: 10,
    game_id: 661281,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 142,
    team_name_away: "Minnesota Twins",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Minnesota_Twins.png",

    team_id_home: 158,
    team_name_home: "Milwaukee Brewers",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Milwaukee_Brewers.png",
  },

  {
    gameid: 11,
    game_id: 661079,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 145,
    team_name_away: "Chicago White Sox",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_White_Sox.png",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
  },

  {
    gameid: 12,
    game_id: 662346,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 117,
    team_name_away: "Houston Astros",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",

    team_id_home: 133,
    team_name_home: "Oakland Athletics",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png",
  },

  {
    gameid: 13,
    game_id: 663314,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 137,
    team_name_away: "San Francisco Giants",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",

    team_id_home: 109,
    team_name_home: "Arizona Diamondbacks",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Arizona_Diamondbacks.png",
  },

  {
    gameid: 14,
    game_id: 662573,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 120,
    team_name_away: "Washington Nationals",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Washington_Nationals.png",

    team_id_home: 119,
    team_name_home: "Los Angeles Dodgers",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",
  },

  {
    gameid: 15,
    game_id: 662184,
    game_date: "2022-07-26",
    game_status: "Preview",
    team_id_away: 140,
    team_name_away: "Texas Rangers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

    team_id_home: 136,
    team_name_home: "Seattle Mariners",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",
  },

  {
    gameid: 16,
    game_id: 661554,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 144,
    team_name_away: "Atlanta Braves",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Atlanta_Braves.png",

    team_id_home: 143,
    team_name_home: "Philadelphia Phillies",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",
  },

  {
    gameid: 17,
    game_id: 662900,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 135,
    team_name_away: "San Diego Padres",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanDiego_Padres.png",

    team_id_home: 116,
    team_name_home: "Detroit Tigers",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",
  },

  {
    gameid: 18,
    game_id: 662652,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 108,
    team_name_away: "Los Angeles Angels",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",

    team_id_home: 118,
    team_name_home: "Kansas City Royals",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",
  },

  {
    gameid: 19,
    game_id: 661249,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 142,
    team_name_away: "Minnesota Twins",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Minnesota_Twins.png",

    team_id_home: 158,
    team_name_home: "Milwaukee Brewers",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Milwaukee_Brewers.png",
  },

  {
    gameid: 20,
    game_id: 662565,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 120,
    team_name_away: "Washington Nationals",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Washington_Nationals.png",

    team_id_home: 119,
    team_name_home: "Los Angeles Dodgers",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",
  },

  {
    gameid: 21,
    game_id: 661078,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 145,
    team_name_away: "Chicago White Sox",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_White_Sox.png",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
  },

  {
    gameid: 22,
    game_id: 662345,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 117,
    team_name_away: "Houston Astros",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",

    team_id_home: 133,
    team_name_home: "Oakland Athletics",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png",
  },

  {
    gameid: 23,
    game_id: 663294,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 137,
    team_name_away: "San Francisco Giants",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",

    team_id_home: 109,
    team_name_home: "Arizona Diamondbacks",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Arizona_Diamondbacks.png",
  },

  {
    gameid: 24,
    game_id: 662165,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 140,
    team_name_away: "Texas Rangers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

    team_id_home: 136,
    team_name_home: "Seattle Mariners",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",
  },

  {
    gameid: 25,
    game_id: 663028,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 146,
    team_name_away: "Miami Marlins",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
  },

  {
    gameid: 26,
    game_id: 661053,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 139,
    team_name_away: "Tampa Bay Rays",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",

    team_id_home: 110,
    team_name_home: "Baltimore Orioles",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",
  },

  {
    gameid: 27,
    game_id: 661715,
    game_date: "2022-07-27",
    game_status: "Preview",
    team_id_away: 138,
    team_name_away: "St. Louis Cardinals",
    team_away_logo: "./public/logo-files/StLouis_Cardinals.png",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
  },

  {
    gameid: 28,
    game_id: 663191,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 114,
    team_name_away: "Cleveland Guardians",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
  },

  {
    gameid: 29,
    game_id: 662420,
    game_date: "2022-07-27",
    game_status: "Preview",

    team_id_away: 147,
    team_name_away: "New York Yankees",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",

    team_id_home: 121,
    team_name_home: "New York Mets",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Mets.png",
  },

  {
    gameid: 30,
    game_id: 661052,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 139,
    team_name_away: "Tampa Bay Rays",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",

    team_id_home: 110,
    team_name_home: "Baltimore Orioles",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",
  },

  {
    gameid: 31,
    game_id: 663027,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 146,
    team_name_away: "Miami Marlins",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
  },

  {
    gameid: 32,
    game_id: 662326,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 143,
    team_name_away: "Philadelphia Phillies",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",

    team_id_home: 134,
    team_name_home: "Pittsburgh Pirates",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Pittsburgh_Pirates.png",
  },

  {
    gameid: 33,
    game_id: 661257,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 118,
    team_name_away: "Kansas City Royals",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",

    team_id_home: 147,
    team_name_home: "New York Yankees",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",
  },

  {
    gameid: 34,
    game_id: 661714,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 116,
    team_name_away: "Detroit Tigers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
  },

  {
    gameid: 35,
    game_id: 663200,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 114,
    team_name_away: "Cleveland Guardians",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
  },

  {
    gameid: 36,
    game_id: 662907,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 136,
    team_name_away: "Seattle Mariners",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",

    team_id_home: 117,
    team_name_home: "Houston Astros",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",
  },

  {
    gameid: 37,
    game_id: 661077,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 119,
    team_name_away: "Los Angeles Dodgers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
  },

  {
    gameid: 38,
    game_id: 663380,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 140,
    team_name_away: "Texas Rangers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

    team_id_home: 108,
    team_name_home: "Los Angeles Angels",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",
  },

  {
    gameid: 39,
    game_id: 662058,
    game_date: "2022-07-28",
    game_status: "Preview",

    team_id_away: 112,
    team_name_away: "Chicago Cubs",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_Cubs.png",

    team_id_home: 137,
    team_name_home: "San Francisco Giants",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",
  },

  {
    gameid: 40,
    game_id: 663026,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 110,
    team_name_away: "Baltimore Orioles",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
  },
  {
    gameid: 41,
    game_id: 661372,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 121,
    team_name_away: "New York Mets",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Mets.png",

    team_id_home: 146,
    team_name_home: "Miami Marlins",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",
  },

  {
    gameid: 42,
    game_id: 662477,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 138,
    team_name_away: "St. Louis Cardinals",
    team_away_logo: "./public/logo-files/StLouis_Cardinals.png",

    team_id_home: 120,
    team_name_home: "Washington Nationals",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Washington_Nationals.png",
  },

  {
    gameid: 43,
    game_id: 662435,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 143,
    team_name_away: "Philadelphia Phillies",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",

    team_id_home: 134,
    team_name_home: "Pittsburgh Pirates",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Pittsburgh_Pirates.png",
  },

  {
    gameid: 44,
    game_id: 661256,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 118,
    team_name_away: "Kansas City Royals",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",

    team_id_home: 147,
    team_name_home: "New York Yankees",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",
  },

  {
    gameid: 45,
    game_id: 661713,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 116,
    team_name_away: "Detroit Tigers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
  },

  {
    gameid: 46,
    game_id: 661871,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 114,
    team_name_away: "Cleveland Guardians",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

    team_id_home: 139,
    team_name_home: "Tampa Bay Rays",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",
  },

  {
    gameid: 47,
    game_id: 663190,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 158,
    team_name_away: "Milwaukee Brewers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Milwaukee_Brewers.png",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
  },

  {
    gameid: 48,
    game_id: 661501,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 109,
    team_name_away: "Arizona Diamondbacks",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Arizona_Diamondbacks.png",

    team_id_home: 144,
    team_name_home: "Atlanta Braves",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Atlanta_Braves.png",
  },

  {
    gameid: 49,
    game_id: 662745,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 136,
    team_name_away: "Seattle Mariners",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",

    team_id_home: 117,
    team_name_home: "Houston Astros",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",
  },

  {
    gameid: 50,
    game_id: 661406,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 133,
    team_name_away: "Oakland Athletics",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png",

    team_id_home: 145,
    team_name_home: "Chicago White Sox",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_White_Sox.png",
  },

  {
    gameid: 51,
    game_id: 661076,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 119,
    team_name_away: "Los Angeles Dodgers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
  },

  {
    gameid: 52,
    game_id: 663379,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 140,
    team_name_away: "Texas Rangers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

    team_id_home: 108,
    team_name_home: "Los Angeles Angels",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",
  },

  {
    gameid: 53,
    game_id: 662268,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 142,
    team_name_away: "Minnesota Twins",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Minnesota_Twins.png",

    team_id_home: 135,
    team_name_home: "San Diego Padres",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanDiego_Padres.png",
  },

  {
    gameid: 54,
    game_id: 662057,
    game_date: "2022-07-29",
    game_status: "Preview",

    team_id_away: 112,
    team_name_away: "Chicago Cubs",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_Cubs.png",

    team_id_home: 137,
    team_name_home: "San Francisco Giants",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",
  },

  {
    gameid: 55,
    game_id: 661870,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 114,
    team_name_away: "Cleveland Guardians",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

    team_id_home: 139,
    team_name_home: "Tampa Bay Rays",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",
  },

  {
    gameid: 56,
    game_id: 661255,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 118,
    team_name_away: "Kansas City Royals",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",

    team_id_home: 147,
    team_name_home: "New York Yankees",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",
  },

  {
    gameid: 57,
    game_id: 661712,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 116,
    team_name_away: "Detroit Tigers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",

    team_id_home: 141,
    team_name_home: "Toronto Blue Jays",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
  },

  {
    gameid: 58,
    game_id: 663192,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 158,
    team_name_away: "Milwaukee Brewers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Milwaukee_Brewers.png",

    team_id_home: 111,
    team_name_home: "Boston Red Sox",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
  },

  {
    gameid: 59,
    game_id: 661371,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 121,
    team_name_away: "New York Mets",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Mets.png",

    team_id_home: 146,
    team_name_home: "Miami Marlins",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",
  },

  {
    gameid: 60,
    game_id: 663025,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 110,
    team_name_away: "Baltimore Orioles",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",

    team_id_home: 113,
    team_name_home: "Cincinnati Reds",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
  },

  {
    gameid: 61,
    game_id: 662738,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 136,
    team_name_away: "Seattle Mariners",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",

    team_id_home: 117,
    team_name_home: "Houston Astros",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",
  },

  {
    gameid: 62,
    game_id: 662476,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 138,
    team_name_away: "St. Louis Cardinals",
    team_away_logo: "./public/logo-files/StLouis_Cardinals.png",

    team_id_home: 120,
    team_name_home: "Washington Nationals",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Washington_Nationals.png",
  },

  {
    gameid: 63,
    game_id: 662196,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 142,
    team_name_away: "Minnesota Twins",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Minnesota_Twins.png",

    team_id_home: 135,
    team_name_home: "San Diego Padres",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanDiego_Padres.png",
  },

  {
    gameid: 64,
    game_id: 662415,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 143,
    team_name_away: "Philadelphia Phillies",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",

    team_id_home: 134,
    team_name_home: "Pittsburgh Pirates",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Pittsburgh_Pirates.png",
  },

  {
    gameid: 65,
    game_id: 661451,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 133,
    team_name_away: "Oakland Athletics",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png",

    team_id_home: 145,
    team_name_home: "Chicago White Sox",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_White_Sox.png",
  },

  {
    gameid: 66,
    game_id: 661499,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 109,
    team_name_away: "Arizona Diamondbacks",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Arizona_Diamondbacks.png",

    team_id_home: 144,
    team_name_home: "Atlanta Braves",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Atlanta_Braves.png",
  },

  {
    gameid: 67,
    game_id: 662989,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 119,
    team_name_away: "Los Angeles Dodgers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",

    team_id_home: 115,
    team_name_home: "Colorado Rockies",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
  },

  {
    gameid: 68,
    game_id: 662112,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 112,
    team_name_away: "Chicago Cubs",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_Cubs.png",

    team_id_home: 137,
    team_name_home: "San Francisco Giants",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",
  },

  {
    gameid: 69,
    game_id: 663378,
    game_date: "2022-07-30",
    game_status: "Preview",

    team_id_away: 140,
    team_name_away: "Texas Rangers",
    team_away_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

    team_id_home: 108,
    team_name_home: "Los Angeles Angels",
    team_home_logo:
      "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",
  },
];

const gamesData = () => Game.bulkCreate(gameapi);

module.exports = gamesData;
