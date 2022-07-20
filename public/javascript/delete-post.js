const { response } = require("express");

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const reponse = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(reponse.statusText);
  }
}
document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
