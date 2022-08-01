const { response } = require("express");
const moment = require("moment");
const fetch = require("node-fetch");
const Game = require("../../models/Game");
//const gamesData = require("../../seeds/game-data");

var now = moment();
var priorDate = now.subtract(1, "days").format("YYYY-MM-DD");
//not sure why we need 2 below to get to tomorrow's date, but we can adjust this # to get however many days in advance that we want
var tmwDate = now.add(2, "days").format("YYYY-MM-DD");
// const reloadTime = 6;

let allGames = [];
let datesObj = {};

const teamLogos = [

  { team_id: 134, team_logo: "../logo-files/Pittsburgh_Pirates.png" },
  { team_id: 112, team_logo: "../logo-files/Chicago_Cubs.png" },
  { team_id: 146, team_logo: "../logo-files/Miami_Marlins.png" },
  { team_id: 113, team_logo: "../logo-files/Cincinnati_Reds.png" },
  { team_id: 139, team_logo: "../logo-files/TampaBay_Rays.png" },
  { team_id: 110, team_logo: "../logo-files/Baltimore_Orioles.png" },
  { team_id: 144, team_logo: "../logo-files/Atlanta_Braves.png" },
  { team_id: 143, team_logo: "../logo-files/Philadelphia_Phillies.png" },
  { team_id: 138, team_logo: "../logo-files/StLouis_Cardinals.png" },
  { team_id: 141, team_logo: "../logo-files/Toronto_Blue_Jays.png" },
  { team_id: 114, team_logo: "../logo-files/Cleveland_Indians.png" },
  { team_id: 111, team_logo: "../logo-files/Boston_Redsox.png" },
  { team_id: 135, team_logo: "../logo-files/SanDiego_Padres.png" },
  { team_id: 116, team_logo: "../logo-files/Detroit_Tigers.png" },
  { team_id: 147, team_logo: "../logo-files/NewYork_Yankees.png" },
  { team_id: 121, team_logo: "../logo-files/NewYork_Mets.png" },
  { team_id: 108, team_logo: "../logo-files/LosAngeles_Angels.png" },
  { team_id: 118, team_logo: "../logo-files/KansasCity_Royals.png" },
  { team_id: 142, team_logo: "../logo-files/Minnesota_Twins.png" },
  { team_id: 158, team_logo: "../logo-files/Milwaukee_Brewers.png" },
  { team_id: 145, team_logo: "../logo-files/Chicago_White_Sox.png" },
  { team_id: 115, team_logo: "../logo-files/Colorado_Rockies.png" },
  { team_id: 117, team_logo: "../logo-files/Houston_Astros.png" },
  { team_id: 133, team_logo: "../logo-files/Oakland_Athletics.png" },
  { team_id: 137, team_logo: "../logo-files/SanFrancisco_Giants.png" },
  { team_id: 109, team_logo: "../logo-files/Arizona_Diamondbacks.png" },
  { team_id: 120, team_logo: "../logo-files/Washington_Nationals.png" },
  { team_id: 119, team_logo: "../logo-files/LosAngeles_Dodgers.png" },
  { team_id: 140, team_logo: "../logo-files/Texas_Rangers.png" },
  { team_id: 136, team_logo: "../logo-files/Seattle_Mariners.png" },
];

//SET THE INTERVAL TO CHECK HOURLY (IF CURRENT HOUR = 6AM, ELSE DO NOTHING   )

// function retrieveData() {
//   if (now.hours() === reloadTime) {
//     getApi();
//   }
// }

async function getApi() {
  var mlbApi =
    "http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate=" +
    priorDate +
    "&endDate=" +
    tmwDate;
  await fetch(mlbApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      datesObj = data.dates.map(({ date, games }) => {
        return { date, games };
      });

      for (let i = 0; i < datesObj.length; i++) {
        for (y = 0; y < datesObj[i].games.length; y++) {
          allGames.push({
            game_date: datesObj[i].date,
            game_id: datesObj[i].games[y].gamePk,
            // liveFeedLink: datesObj[i].games[y].link,
            team_name_home: datesObj[i].games[y].teams.home.team.name,
            team_name_away: datesObj[i].games[y].teams.away.team.name,
            team_id_home: datesObj[i].games[y].teams.home.team.id,
            team_id_away: datesObj[i].games[y].teams.away.team.id,
            team_isWinner_home: datesObj[i].games[y].teams.home.isWinner,
            team_isWinner_away: datesObj[i].games[y].teams.away.isWinner,
            team_score_home: datesObj[i].games[y].teams.home.score,
            team_score_away: datesObj[i].games[y].teams.away.score,
            game_status: datesObj[i].games[y].status.abstractGameState,
            team_home_logo: "",
            team_away_logo: "",
          });
        }
      }

      for (let i = 0; i < allGames.length; i++) {
        for (let y = 0; y < teamLogos.length; y++) {
          if (teamLogos[y].team_id === allGames[i].team_id_home) {
            allGames[i].team_home_logo = teamLogos[y].team_logo;
          } else if (teamLogos[y].team_id === allGames[i].team_id_away) {
            allGames[i].team_away_logo = teamLogos[y].team_logo;
          }
        }
      }
      return allGames;
    })
    .then((gamesData) => {
      //console.log( gamesData);

      Game.bulkCreate(gamesData, 
      {
        fields: "game_id",
        ignoreDuplicates: true
      });

    return gamesData
    })
    .then((gamesData) => {
      //console.log( gamesData);

      Game.bulkCreate(gamesData, 
      [
        {game_status: "Live"},
        {game_status: "Preview"}
      ],  
      {
        updateOnDuplicate:[
          "game_status",
          "team_isWinner_home",
          "team_isWinner_away",
          "team_score_home",
          "team_score_away"
        ]
      });
      
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

//took this off so i wouldn't do so many pulls,
//but we need it to run right when the server starts

//let allGames = () =>

getApi();
setInterval(getApi, 3600000);

module.exports = getApi();
