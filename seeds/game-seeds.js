const { Game } = require("../models");

const gamedata = [
  {
    title: "Game 1",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401355557",
    user_id: 10,
  },
  {
    title: "Game 2",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401355552",
    user_id: 8,
  },
  {
    title: "Game 3",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401355551",
    user_id: 1,
  },
  {
    title: "Game 4",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401355548",
    user_id: 4,
  },
  {
    title: "Game 5",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401355543",
    user_id: 7,
  },
  {
    title: "Game 6",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401461451",
    user_id: 4,
  },
  {
    title: "Game 7",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401355555",
    user_id: 1,
  },
  {
    title: "Game 8",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401355547",
    user_id: 1,
  },
  {
    title: "Game 9",
    post_url: "https://www.espn.com/mlb/boxscore/_/gameId/401355545",
    user_id: 9,
  },
];

const seedGames = () => Game.bulkCreate(gamedata);

module.exports = seedGames;
