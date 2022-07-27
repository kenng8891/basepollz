const moment = require('moment');
const fetch = require('node-fetch');
const Game = require('../../models/Game');

var now = moment();
var priorDate = now.subtract(1, 'days').format('YYYY-MM-DD');
//not sure why we need 2 below to get to tomorrow's date, but we can adjust this # to get however many days in advance that we want
var tmwDate = now.add(2, 'days').format('YYYY-MM-DD');
const reloadTime = 6;


let datesObj = {};
let allGames = [];

//SET THE INTERVAL TO CHECK HOURLY (IF CURRENT HOUR = 6AM, ELSE DO NOTHING   )

function retrieveData() {
  if (now.hours() === reloadTime) {
    getApi();
  }
}

function getApi() {
  var mlbApi = 'http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate='+priorDate+'&endDate='+tmwDate;
  fetch(mlbApi)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

      datesObj = data.dates.map(({date, games}) => {
        return {date, games}
      })

      for (let i = 0; i< datesObj.length; i++){
        for (y = 0; y < datesObj[i].games.length; y++){
          allGames.push({
            game_date: datesObj[i].date,
            game_id: datesObj[i].games[y].gamePk,
            team_name_home: datesObj[i].games[y].teams.home.team.name,
            team_name_away: datesObj[i].games[y].teams.away.team.name,
            team_id_home: datesObj[i].games[y].teams.home.team.id,
            team_id_away: datesObj[i].games[y].teams.away.team.id,
            team_isWinner_home: datesObj[i].games[y].teams.home.isWinner,
            team_isWinner_away: datesObj[i].games[y].teams.away.isWinner,
            team_score_home: datesObj[i].games[y].teams.home.score,
            team_score_away: datesObj[i].games[y].teams.away.score,
            game_status: datesObj[i].games[y].status.abstractGameState
          })
        }
      }
      console.log(datesObj);

      //------------------------------------------------------------------------------
      //LEAVING THE FOLLOWING JUST IN CASE WE WANT TO GO BACK TO THE OLD WAY??

      // for (let i = 0; i< datesObj[1].games.length; i++){
      //   todayGames.push({
      //     game_date: datesObj[1].date,
      //     game_id: datesObj[1].games[i].gamePk,
      //     team_name_home: datesObj[1].games[i].teams.home.team.name,
      //     team_name_away: datesObj[1].games[i].teams.away.team.name,
      //     team_id_home: datesObj[1].games[i].teams.home.team.id,
      //     team_id_away: datesObj[1].games[i].teams.away.team.id,
      //     // team_score_home: datesObj[1].games[i].teams.home.score,
      //     // team_score_away: datesObj[1].games[i].teams.away.score,
      //     game_status: datesObj[1].games[i].status.abstractGameState
      //   })
      // }

    //let nextWeekGames =[]
      // let tmwGames = []
      // for (let i = 0; i< datesObj[2].games.length; i++){
    //for (let i = 2; i< datesObj[8].games.length; i++){
      //   tmwGames.push({
      //     game_date: datesObj[2].date,
      //     game_id: datesObj[2].games[i].gamePk,
      //     team_name_home: datesObj[2].games[i].teams.home.team.name,
      //     team_name_away: datesObj[2].games[i].teams.away.team.name,
      //     team_id_home: datesObj[2].games[i].teams.home.team.id,
      //     team_id_away: datesObj[2].games[i].teams.away.team.id,
      //     game_status: datesObj[2].games[i].status.abstractGameState
      //   })
      // }
//---------------------------------------------------------------------------------

      console.log(allGames);

      //ADD INTO DATABASE FROM DOWN YONDER
      
      Game.bulkCreate(allGames);


  })
}

//took this off so i wouldn't do so many pulls, 
//but we need it to run right when the server starts

getApi();
// setInterval(retrieveData, 3600000);