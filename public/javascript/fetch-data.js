const moment = require("moment");
const fetch = require("node-fetch");

var now = moment();
var priorDate = now.subtract(1, "days").format("YYYY-MM-DD");
//not sure why we need 2 below to get to tomorrow's date, but we can adjust this # to get however many days in advance that we want
var tmwDate = now.add(2, "days").format("YYYY-MM-DD");
const reloadTime = 6;

//SET THE INTERVAL TO CHECK HOURLY (IF CURRENT HOUR = 6AM, ELSE DO NOTHING   )

function retrieveData() {
  if (now.hours() === reloadTime) {
    getApi();
  }
}

function getApi() {
  var mlbApi =
    "http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate=" +
    priorDate +
    "&endDate=" +
    tmwDate;
  fetch(mlbApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const totalGamesArr = [];
      let totalGames = 0;
      let datesObj = {};
      //data.dates[0] = yesterday, [1] = today, [2] = tmw
      //if we want total number of games across all 3 days we can use the below.
      // for (let i = 0; i < data.dates.length; i++) {
      //   totalGamesArr.push(data.dates[i].totalGames);
      //   totalGames = totalGamesArr[i]+totalGames;
      //   datesObj = (({dates, totalItems}) => ({dates, totalItems}))(data)
      // }
      datesObj = data.dates.map(({ date, games }) => {
        return { date, totalGames, games };
      });
      //datesObj[0] = yesterday, [1] = today, [2] = tmw

      //creating an array of objects for each day of games
      let yestGames = [];
      for (let i = 0; i < datesObj[0].games.length; i++) {
        yestGames.push({
          game_date: datesObj[0].date,
          game_id: datesObj[0].games[i].gamePk,
          team_name_home: datesObj[0].games[i].teams.home.team.name,
          team_name_away: datesObj[0].games[i].teams.away.team.name,
          team_id_home: datesObj[0].games[i].teams.home.team.id,
          team_id_away: datesObj[0].games[i].teams.away.team.id,
          team_isWinner_home: datesObj[0].games[i].teams.home.isWinner,
          team_isWinner_away: datesObj[0].games[i].teams.away.isWinner,
          team_score_home: datesObj[0].games[i].teams.home.score,
          team_score_away: datesObj[0].games[i].teams.away.score,
          game_status: datesObj[0].games[i].status.abstractGameState,
        });
      }
      //DO WE WANT TO KEEP WINNINGTEAM IN FOR TODAY'S GAMES? TECHNICALLY WE'LL BE LOADING THIS IN THE MORNING I THINK SO THIS VALUE WILL BE UNDEFINED IF WE INCLUDE IT.
      let todayGames = [];
      for (let i = 0; i < datesObj[1].games.length; i++) {
        todayGames.push({
          game_date: datesObj[1].date,
          game_id: datesObj[1].games[i].gamePk,
          team_name_home: datesObj[1].games[i].teams.home.team.name,
          team_name_away: datesObj[1].games[i].teams.away.team.name,
          team_id_home: datesObj[1].games[i].teams.home.team.id,
          team_id_away: datesObj[1].games[i].teams.away.team.id,
          // team_score_home: datesObj[1].games[i].teams.home.score,
          // team_score_away: datesObj[1].games[i].teams.away.score,
          game_status: datesObj[1].games[i].status.abstractGameState,
        });
      }

      //let nextWeekGames =[]
      let tmwGames = [];
      for (let i = 0; i < datesObj[2].games.length; i++) {
        //for (let i = 2; i< datesObj[8].games.length; i++){
        tmwGames.push({
          game_date: datesObj[2].date,
          game_id: datesObj[2].games[i].gamePk,
          team_name_home: datesObj[2].games[i].teams.home.team.name,
          team_name_away: datesObj[2].games[i].teams.away.team.name,
          team_id_home: datesObj[2].games[i].teams.home.team.id,
          team_id_away: datesObj[2].games[i].teams.away.team.id,
          game_status: datesObj[2].games[i].status.abstractGameState,
        });
      }
      console.log(yestGames);
      console.log("****************************************");
      console.log(todayGames);
      console.log("++++++++++++++++++++++++++++++++++++++++");
      console.log(tmwGames);
    });
}

//took this off so i wouldn't do so many pulls,
//but we need it to run right when the server starts
//getApi();
setInterval(retrieveData, 3600000);

module.exports = getApi;
