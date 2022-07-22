const moment = require('moment');
const fetch = require('node-fetch');

var now = moment();
var currentDate = now.format('YYYY-MM-DD')
var priorDate = now.subtract(1, 'days').calendar();
var tmwDate = now.add(1, 'days').calendar();
console.log(priorDate);


function getApi() {
    // var mlbApi = 'http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate='+priorDate+'&endDate='+tmwDate;
    var mlbApi = 'http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate=2022-07-17&endDate=2022-07-22';
    fetch(mlbApi)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
            console.log(data);
        })
    }
getApi();
