const moment = require('moment');
const fetch = require('node-fetch');

var now = moment();
var priorDate = now.subtract(1, 'days').format('YYYY-MM-DD');
var tmwDate = now.add(2, 'days').format('YYYY-MM-DD');
const reloadTime = 6;

//SET THE INTERVAL TO CHECK HOURLY (IF CURRENT HOUR = 6AM, ELSE DO NOTHING   )
setInterval(retrieveData, 3600000);

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
        // const totalGamesArr = [];
        // let totalGames = 0
        let datesObj = {}
            //data.dates[0] = yesterday, [1] = today, [2] = tmw
            //if we want total number of games across all 3 days we can use the below.
            // for (let i = 0; i < data.dates.length; i++) {
            //   totalGamesArr.push(data.dates[i].totalGames);
            //   totalGames = totalGamesArr[i]+totalGames;       
            //   datesObj = (({dates, totalItems}) => ({dates, totalItems}))(data)    
            // }
            datesObj = data.dates.map(({date, games}) => {
              return {date, totalGames, games}
            })
            //datesObj[0] = yesterday, [1] = today, [2] = tmw

            //creating an array of objects for each day of games
            let yestGames = [];
            for (let i = 0; i< datesObj[0].games.length; i++){
              yestGames.push({
                date: datesObj[0].date,
                homeTeam: datesObj[0].games[i].teams.home.team.name,
                homeTeamId: datesObj[0].games[i].teams.home.team.id,
                awayTeam: datesObj[0].games[i].teams.away.team.name,
                awayTeamId: datesObj[0].games[i].teams.away.team.id,
                homeWin: datesObj[0].games[i].teams.home.isWinner,
                awayWin: datesObj[0].games[i].teams.away.isWinner,
                homeScore: datesObj[0].games[i].teams.home.score,
                awayScore: datesObj[0].games[i].teams.away.score,
                gameStatus: datesObj[0].games[i].status.abstractGameState
              })
            }
            //DO WE WANT TO KEEP WINNINGTEAM IN FOR TODAY'S GAMES? TECHNICALLY WE'LL BE LOADING THIS IN THE MORNING I THINK SO THIS VALUE WILL BE UNDEFINED IF WE INCLUDE IT.
            let todayGames = [];
            for (let i = 0; i< datesObj[1].games.length; i++){
              todayGames.push({
                date: datesObj[1].date,
                homeTeam: datesObj[1].games[i].teams.home.team.name,
                homeTeamId: datesObj[1].games[i].teams.home.team.id,
                awayTeam: datesObj[1].games[i].teams.away.team.name,
                awayTeamId: datesObj[1].games[i].teams.away.team.id,
                homeScore: datesObj[1].games[i].teams.home.score,
                awayScore: datesObj[1].games[i].teams.away.score,
                gameStatus: datesObj[1].games[i].status.abstractGameState
              })
            }

            let tmwGames = [];
            for (let i = 0; i< datesObj[2].games.length; i++){
              tmwGames.push({
                date: datesObj[2].date,
                homeTeam: datesObj[2].games[i].teams.home.team.name,
                homeTeamId: datesObj[2].games[i].teams.home.team.id,
                awayTeam: datesObj[2].games[i].teams.away.team.name,
                awayTeamId: datesObj[2].games[i].teams.away.team.id,
                gameStatus: datesObj[2].games[i].status.abstractGameState
              })
            }
            console.log(yestGames);
            console.log('****************************************')
            console.log(todayGames);
            console.log('++++++++++++++++++++++++++++++++++++++++')
            console.log(tmwGames);

        })
    }