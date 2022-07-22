const { Logo } = require("../models");

const logoData = [
  {
    id: 1,
    teamName: "Houston Astros",
    teamID: 117,
    path: "../public/logo-files/Houston_Astros.png",
  },
  {
    id: 2,
    teamID: 138,
    teamName: "St. Louis Cardinals",
    path: "../public/logo-files/StLous_Cardinals.png",
  },
  {
    id: 3,
    teamID: 110,
    teamName: "Baltimore Orioles",
    path: "../public/logo-files/Baltimore_Orioles.png",
  },
  {
    id: 4,
    teamID: 143,
    teamName: "Philadelphia Phillies",
    path: "../public/logo-files/Philadelphia_Phillies.png",
  },
  {
    id: 5,
    teamID: 141,
    teamName: "Toronto Blue Jays",
    path: "../public/logo-files/Toronto_Blue_Jays.png",
  },
  {
    id: 6,
    teamID: 144,
    teamName: "Atlanta Braves",
    path: "../public/logo-files/Atlanta_Braves.png",
  },
  {
    id: 7,
    teamID: 146,
    teamName: "Miami Marlins",
    path: "../public/logo-files/Miami_Marlins.png",
  },
  {
    id: 8,
    teamID: 120,
    teamName: "Washington Nationals",
    path: "../public/logo-files/Washington_Nationals.png",
  },
  {
    id: 9,
    teamID: 147,
    teamName: "New York Yankees",
    path: "../public/logo-files/NewYork_Yankees.png",
  },
  {
    id: 10,
    teamID: 116,
    teamName: "Detroit Tigers",
    path: "../public/logo-files/Detroit_Tigers.png",
  },
  {
    id: 11,
    teamID: 114,
    teamName: "Cleveland Guardians",
    path: "../public/logo-files/Cleveland_Indians.png",
  },
  {
    id: 12,
    teamID: 118,
    teamName: "Kansas City Royals",
    path: "../public/logo-files/KansasCity_Royals.png",
  },
  {
    id: 13,
    teamID: 135,
    teamName: "San Diego Padres",
    path: "../public/logo-files/SanDiego_Padres.png",
  },
  {
    id: 14,
    teamID: 145,
    teamName: "Chicago White Sox",
    path: "../public/logo-files/Chicago_White_Sox.png",
  },
  {
    id: 15,
    teamID: 119,
    teamName: "Los Angelos Dodgers",
    path: "../public/logo-files/LosAngeles_Dodgers.png",
  },
  {
    id: 16,
    teamID: 109,
    teamName: "Arizona Diamondbacks",
    path: "../public/logo-files/Arizona_Diamondbacks.png",
  },
  {
    id: 17,
    teamID: 133,
    teamName: "Oakland Atheltics",
    path: "../public/logo-files/Oakland_Athletics.png",
  },
  {
    id: 18,
    teamID: 108,
    teamName: "Los Angelos Angels",
    path: "../public/logo-files/LosAngeles_Angels.png",
  },
  {
    id: 19,
    teamID: 140,
    teamName: "Texas Rangers",
    path: "../public/logo-files/Texas_Rangers.png",
  },
  {
    id: 20,
    teamID: 136,
    teamName: "Seattle Mariners",
    path: "../public/logo-files/Seattle_Mariners.png",
  },
  {
    id: 21,
    teamID: 135,
    teamName: "San Francisco Giants",
    path: "../public/logo-files/SanFrancisco_Giants.png",
  },
  {
    id: 22,
    teamID: 158,
    teamName: "Milwaukee Brewers",
    path: "../public/logo-files/Milwaukee_Brewers.png",
  },
  {
    id: 23,
    teamID: 112,
    teamName: "Chicago Cubs",
    path: "../public/logo-files/Chicago_Cubs.png",
  },
  {
    id: 24,
    teamID: 113,
    teamName: "Cincinnati Reds",
    path: "../public/logo-files/Cincinnati_Reds.png",
  },
  {
    id: 25,
    teamID: 120,
    teamName: "Washington Nationals",
  },
  {
    id: 26,
    teamID: 111,
    teamName: "Boston Red Sox",
  },
  {
    id: 27,
    teamID: 134,
    teamName: "Pittsburgh Pirates",
  },
  {
    id: 28,
    teamID: 142,
    teamName: "Minnesota Twins",
  },
  {
    id: 29,
    teamID: 115,
    teamName: "Colorado Rockies",
  },
  {
    id: 30,
    teamID: 121,
    teamName: "New York Mets",
  },
];

const seedLogos = () => Post.bulkCreate(logodata);

module.exports = seedLogos;
