const Game = require('../../models/Game');

let hasVoted = false;


async function upvoteClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

//need to fetch this data
//home team id
const homeID = Game;
//away team id
const awayID = Game;

  const response = await fetch("/api/games/upvote", {
    method: "PUT",
    body: JSON.stringify({
      game_id: id,
      
      //here is where we need to make sure it gets the right data
      home_team: homeID,
      away_team: awayID,

    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
  hasVoted = true;
}

document.querySelector(".upvote-btn-home").addEventListener("click", upvoteClickHandler);
document.querySelector(".upvote-btn-away").addEventListener("click", upvoteClickHandler);

module.export = hasVoted