async function upvoteClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch("/api/games/upvote", {
    method: "PUT",
    body: JSON.stringify({
      game_id: id,
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

document
  .querySelector(".upvote-btn")
  .addEventListener("click", upvoteClickHandler);
