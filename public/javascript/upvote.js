async function upvoteClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch("/api/games/upvote", {
    method: "PUT",
    body: JSON.stringify({
      game_id: id,

      //here is where we need to make sure it gets the right data
      home_vote: id.team_id_home,
      away_vote: id.team_id_away,

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
  let votechoice = true;
}

document.querySelector(".upvote-btn-home").addEventListener("click", upvoteClickHandler);
document.querySelector(".upvote-btn-away").addEventListener("click", upvoteClickHandler);
