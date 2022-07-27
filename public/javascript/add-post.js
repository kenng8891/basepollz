// async function newFormHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="game-title"]').value;
//   const game_url = document.querySelector('input[name="game-url"]').value;

//   const response = await fetch(`/api/games`, {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//       game_url,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     document.location.replace("/dashboard");
//   } else {
//     alert(response.statusText);
//   }
// }

// document
//   .querySelector(".new-game-form")
//   .addEventListener("submit", newFormHandler);
