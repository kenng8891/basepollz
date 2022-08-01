// const { Game } = require("../models");

// const gameapi = [
//   {
//     team_id_away: 134,
//     team_name_away: "Pittsburgh Pirates",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Pittsburgh_Pirates.png",
//     team_id_home: 112,
//     team_name_home: "Chicago Cubs",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_Cubs.png",
//   },

//   {
//     team_id_away: 146,
//     team_name_away: "Miami Marlins",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",

//     team_id_home: 113,
//     team_name_home: "Cincinnati Reds",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
//   },

//   {
//     team_id_away: 139,
//     team_name_away: "Tampa Bay Rays",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",

//     team_id_home: 110,
//     team_name_home: "Baltimore Orioles",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",
//   },

//   {
//     team_id_away: 144,
//     team_name_away: "Atlanta Braves",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Atlanta_Braves.png",

//     team_id_home: 143,
//     team_name_home: "Philadelphia Phillies",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",
//   },

//   {
//     team_id_away: 138,
//     team_name_away: "St. Louis Cardinals",
//     team_away_logo: "http://www.capsinfo.com/images/MLB_Team_Logos/StLouis_Cardinals.png",

//     team_id_home: 141,
//     team_name_home: "Toronto Blue Jays",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
//   },

//   {
//     team_id_away: 114,
//     team_name_away: "Cleveland Guardians",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

//     team_id_home: 111,
//     team_name_home: "Boston Red Sox",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
//   },

//   {
//     team_id_away: 135,
//     team_name_away: "San Diego Padres",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanDiego_Padres.png",

//     team_id_home: 116,
//     team_name_home: "Detroit Tigers",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",
//   },

//   {
//     team_id_away: 147,
//     team_name_away: "New York Yankees",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",

//     team_id_home: 121,
//     team_name_home: "New York Mets",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Mets.png",
//   },

//   {
//     team_id_away: 108,
//     team_name_away: "Los Angeles Angels",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",

//     team_id_home: 118,
//     team_name_home: "Kansas City Royals",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",
//   },

//   {
//     team_id_away: 142,
//     team_name_away: "Minnesota Twins",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Minnesota_Twins.png",

//     team_id_home: 158,
//     team_name_home: "Milwaukee Brewers",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Milwaukee_Brewers.png",
//   },

//   {
//     team_id_away: 145,
//     team_name_away: "Chicago White Sox",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_White_Sox.png",

//     team_id_home: 115,
//     team_name_home: "Colorado Rockies",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
//   },

//   {
//     team_id_away: 117,
//     team_name_away: "Houston Astros",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",

//     team_id_home: 133,
//     team_name_home: "Oakland Athletics",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png",
//   },

//   {
//     team_id_away: 137,
//     team_name_away: "San Francisco Giants",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",

//     team_id_home: 109,
//     team_name_home: "Arizona Diamondbacks",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Arizona_Diamondbacks.png",
//   },

//   {
//     team_id_away: 120,
//     team_name_away: "Washington Nationals",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Washington_Nationals.png",

//     team_id_home: 119,
//     team_name_home: "Los Angeles Dodgers",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",
//   },

//   {
//     team_id_away: 140,
//     team_name_away: "Texas Rangers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

//     team_id_home: 136,
//     team_name_home: "Seattle Mariners",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",
//   },

//   {
//     team_id_away: 144,
//     team_name_away: "Atlanta Braves",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Atlanta_Braves.png",

//     team_id_home: 143,
//     team_name_home: "Philadelphia Phillies",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",
//   },

//   {
//     team_id_away: 135,
//     team_name_away: "San Diego Padres",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanDiego_Padres.png",

//     team_id_home: 116,
//     team_name_home: "Detroit Tigers",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",
//   },

//   {
//     team_id_away: 108,
//     team_name_away: "Los Angeles Angels",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",

//     team_id_home: 118,
//     team_name_home: "Kansas City Royals",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",
//   },

//   {
//     team_id_away: 142,
//     team_name_away: "Minnesota Twins",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Minnesota_Twins.png",

//     team_id_home: 158,
//     team_name_home: "Milwaukee Brewers",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Milwaukee_Brewers.png",
//   },

//   {
//     team_id_away: 120,
//     team_name_away: "Washington Nationals",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Washington_Nationals.png",

//     team_id_home: 119,
//     team_name_home: "Los Angeles Dodgers",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",
//   },

//   {
//     team_id_away: 145,
//     team_name_away: "Chicago White Sox",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_White_Sox.png",

//     team_id_home: 115,
//     team_name_home: "Colorado Rockies",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
//   },

//   {
//     team_id_away: 117,
//     team_name_away: "Houston Astros",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",

//     team_id_home: 133,
//     team_name_home: "Oakland Athletics",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png",
//   },

//   {
//     team_id_away: 137,
//     team_name_away: "San Francisco Giants",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",

//     team_id_home: 109,
//     team_name_home: "Arizona Diamondbacks",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Arizona_Diamondbacks.png",
//   },

//   {

//     team_id_away: 140,
//     team_name_away: "Texas Rangers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

//     team_id_home: 136,
//     team_name_home: "Seattle Mariners",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",
//   },

//   {

//     team_id_away: 146,
//     team_name_away: "Miami Marlins",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",

//     team_id_home: 113,
//     team_name_home: "Cincinnati Reds",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
//   },

//   {

//     team_id_away: 139,
//     team_name_away: "Tampa Bay Rays",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",

//     team_id_home: 110,
//     team_name_home: "Baltimore Orioles",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",
//   },

//   {
//     team_id_away: 138,
//     team_name_away: "St. Louis Cardinals",
//     team_away_logo: "./public/logo-files/StLouis_Cardinals.png",

//     team_id_home: 141,
//     team_name_home: "Toronto Blue Jays",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
//   },

//   {

//     team_id_away: 114,
//     team_name_away: "Cleveland Guardians",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

//     team_id_home: 111,
//     team_name_home: "Boston Red Sox",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
//   },

//   {

//     team_id_away: 147,
//     team_name_away: "New York Yankees",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",

//     team_id_home: 121,
//     team_name_home: "New York Mets",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Mets.png",
//   },

//   {

//     team_id_away: 139,
//     team_name_away: "Tampa Bay Rays",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",

//     team_id_home: 110,
//     team_name_home: "Baltimore Orioles",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",
//   },

//   {

//     team_id_away: 146,
//     team_name_away: "Miami Marlins",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",

//     team_id_home: 113,
//     team_name_home: "Cincinnati Reds",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
//   },

//   {

//     team_id_away: 143,
//     team_name_away: "Philadelphia Phillies",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",

//     team_id_home: 134,
//     team_name_home: "Pittsburgh Pirates",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Pittsburgh_Pirates.png",
//   },

//   {

//     team_id_away: 118,
//     team_name_away: "Kansas City Royals",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",

//     team_id_home: 147,
//     team_name_home: "New York Yankees",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",
//   },

//   {

//     team_id_away: 116,
//     team_name_away: "Detroit Tigers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",

//     team_id_home: 141,
//     team_name_home: "Toronto Blue Jays",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
//   },

//   {

//     team_id_away: 114,
//     team_name_away: "Cleveland Guardians",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

//     team_id_home: 111,
//     team_name_home: "Boston Red Sox",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
//   },

//   {

//     team_id_away: 136,
//     team_name_away: "Seattle Mariners",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",

//     team_id_home: 117,
//     team_name_home: "Houston Astros",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",
//   },

//   {

//     team_id_away: 119,
//     team_name_away: "Los Angeles Dodgers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",

//     team_id_home: 115,
//     team_name_home: "Colorado Rockies",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
//   },

//   {

//     team_id_away: 140,
//     team_name_away: "Texas Rangers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

//     team_id_home: 108,
//     team_name_home: "Los Angeles Angels",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",
//   },

//   {

//     team_id_away: 112,
//     team_name_away: "Chicago Cubs",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_Cubs.png",

//     team_id_home: 137,
//     team_name_home: "San Francisco Giants",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",
//   },

//   {

//     team_id_away: 110,
//     team_name_away: "Baltimore Orioles",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",

//     team_id_home: 113,
//     team_name_home: "Cincinnati Reds",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
//   },
//   {

//     team_id_away: 121,
//     team_name_away: "New York Mets",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Mets.png",

//     team_id_home: 146,
//     team_name_home: "Miami Marlins",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",
//   },

//   {

//     team_id_away: 138,
//     team_name_away: "St. Louis Cardinals",
//     team_away_logo: "./public/logo-files/StLouis_Cardinals.png",

//     team_id_home: 120,
//     team_name_home: "Washington Nationals",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Washington_Nationals.png",
//   },

//   {

//     team_id_away: 143,
//     team_name_away: "Philadelphia Phillies",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",

//     team_id_home: 134,
//     team_name_home: "Pittsburgh Pirates",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Pittsburgh_Pirates.png",
//   },

//   {

//     team_id_away: 118,
//     team_name_away: "Kansas City Royals",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",

//     team_id_home: 147,
//     team_name_home: "New York Yankees",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",
//   },

//   {

//     team_id_away: 116,
//     team_name_away: "Detroit Tigers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",

//     team_id_home: 141,
//     team_name_home: "Toronto Blue Jays",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
//   },

//   {

//     team_id_away: 114,
//     team_name_away: "Cleveland Guardians",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

//     team_id_home: 139,
//     team_name_home: "Tampa Bay Rays",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",
//   },

//   {

//     team_id_away: 158,
//     team_name_away: "Milwaukee Brewers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Milwaukee_Brewers.png",

//     team_id_home: 111,
//     team_name_home: "Boston Red Sox",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
//   },

//   {

//     team_id_away: 109,
//     team_name_away: "Arizona Diamondbacks",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Arizona_Diamondbacks.png",

//     team_id_home: 144,
//     team_name_home: "Atlanta Braves",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Atlanta_Braves.png",
//   },

//   {

//     team_id_away: 136,
//     team_name_away: "Seattle Mariners",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",

//     team_id_home: 117,
//     team_name_home: "Houston Astros",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",
//   },

//   {

//     team_id_away: 133,
//     team_name_away: "Oakland Athletics",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png",

//     team_id_home: 145,
//     team_name_home: "Chicago White Sox",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_White_Sox.png",
//   },

//   {

//     team_id_away: 119,
//     team_name_away: "Los Angeles Dodgers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",

//     team_id_home: 115,
//     team_name_home: "Colorado Rockies",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
//   },

//   {

//     team_id_away: 140,
//     team_name_away: "Texas Rangers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

//     team_id_home: 108,
//     team_name_home: "Los Angeles Angels",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",
//   },

//   {

//     team_id_away: 142,
//     team_name_away: "Minnesota Twins",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Minnesota_Twins.png",

//     team_id_home: 135,
//     team_name_home: "San Diego Padres",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanDiego_Padres.png",
//   },

//   {

//     team_id_away: 112,
//     team_name_away: "Chicago Cubs",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_Cubs.png",

//     team_id_home: 137,
//     team_name_home: "San Francisco Giants",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",
//   },

//   {

//     team_id_away: 114,
//     team_name_away: "Cleveland Guardians",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cleveland_Indians.png",

//     team_id_home: 139,
//     team_name_home: "Tampa Bay Rays",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/TampaBay_Rays.png",
//   },

//   {

//     team_id_away: 118,
//     team_name_away: "Kansas City Royals",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/KansasCity_Royals.png",

//     team_id_home: 147,
//     team_name_home: "New York Yankees",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Yankees.png",
//   },

//   {

//     team_id_away: 116,
//     team_name_away: "Detroit Tigers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Detroit_Tigers.png",

//     team_id_home: 141,
//     team_name_home: "Toronto Blue Jays",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Toronto_Blue_Jays.png",
//   },

//   {

//     team_id_away: 158,
//     team_name_away: "Milwaukee Brewers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Milwaukee_Brewers.png",

//     team_id_home: 111,
//     team_name_home: "Boston Red Sox",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Boston_Redsox.png",
//   },

//   {

//     team_id_away: 121,
//     team_name_away: "New York Mets",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/NewYork_Mets.png",

//     team_id_home: 146,
//     team_name_home: "Miami Marlins",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Miami_Marlins.png",
//   },

//   {

//     team_id_away: 110,
//     team_name_away: "Baltimore Orioles",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Baltimore_Orioles.png",

//     team_id_home: 113,
//     team_name_home: "Cincinnati Reds",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Cincinnati_Reds.png",
//   },

//   {

//     team_id_away: 136,
//     team_name_away: "Seattle Mariners",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Seattle_Mariners.png",

//     team_id_home: 117,
//     team_name_home: "Houston Astros",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Houston_Astros.png",
//   },

//   {

//     team_id_away: 138,
//     team_name_away: "St. Louis Cardinals",
//     team_away_logo: "./public/logo-files/StLouis_Cardinals.png",

//     team_id_home: 120,
//     team_name_home: "Washington Nationals",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Washington_Nationals.png",
//   },

//   {

//     team_id_away: 142,
//     team_name_away: "Minnesota Twins",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Minnesota_Twins.png",

//     team_id_home: 135,
//     team_name_home: "San Diego Padres",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanDiego_Padres.png",
//   },

//   {

//     team_id_away: 143,
//     team_name_away: "Philadelphia Phillies",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Philadelphia_Phillies.png",

//     team_id_home: 134,
//     team_name_home: "Pittsburgh Pirates",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Pittsburgh_Pirates.png",
//   },

//   {

//     team_id_away: 133,
//     team_name_away: "Oakland Athletics",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Oakland_Athletics.png",

//     team_id_home: 145,
//     team_name_home: "Chicago White Sox",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_White_Sox.png",
//   },

//   {

//     team_id_away: 109,
//     team_name_away: "Arizona Diamondbacks",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Arizona_Diamondbacks.png",

//     team_id_home: 144,
//     team_name_home: "Atlanta Braves",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Atlanta_Braves.png",
//   },

//   {

//     team_id_away: 119,
//     team_name_away: "Los Angeles Dodgers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Dodgers.png",

//     team_id_home: 115,
//     team_name_home: "Colorado Rockies",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Colorado_Rockies.png",
//   },

//   {

//     team_id_away: 112,
//     team_name_away: "Chicago Cubs",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Chicago_Cubs.png",

//     team_id_home: 137,
//     team_name_home: "San Francisco Giants",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/SanFrancisco_Giants.png",
//   },

//   {

//     team_id_away: 140,
//     team_name_away: "Texas Rangers",
//     team_away_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/Texas_Rangers.png",

//     team_id_home: 108,
//     team_name_home: "Los Angeles Angels",
//     team_home_logo:
//       "http://www.capsinfo.com/images/MLB_Team_Logos/LosAngeles_Angels.png",
//   },
// ];

// const gamesData = () => Game.bulkCreate(gameapi);

// module.exports = gamesData;
