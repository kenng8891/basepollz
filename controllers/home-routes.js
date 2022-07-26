const router = require("express").Router();
const sequelize = require("../config/connection");
const { Game, User, Comment } = require("../models");

// get all games for homepage (FUTURE and PAST games)
router.get("/", (req, res) => {
  console.log("======================");
  Game.findAll({
    attributes: [
      "id",
      "game_id",
      "game_date",
      "game_status",
      // 'liveFeedLink',
      "team_name_home",
      "team_name_away",
      "team_id_home",
      "team_id_away",
      "team_score_home",
      "team_score_away",
      "team_isWinner_home",
      "team_isWinner_away",
      "team_home_logo",
      "team_away_logo",
      // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE game.id = vote.game_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbGameData) => {
      const games = dbGameData.map((game) => game.get({ plain: true }));
      let gamesFuture = [];
      let gamesPast = [];

      for (i = 0; i < games.length; i++) {
        if (games[i].game_status === "Preview") {
          gamesFuture.push(games[i]);
        } else {
          gamesPast.push(games[i]);
        }
      }

      // console.log('***********************************')
      // console.log(gamesPast);
      // console.log('***********************************')
      // console.log(gamesFuture);

      res.render("homepage", {
        gamesFuture,
        gamesPast,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single game
router.get("/game/:id", (req, res) => {
  Game.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "game_id",
      "game_date",
      "game_status",
      // 'liveFeedLink',
      "team_name_home",
      "team_name_away",
      "team_id_home",
      "team_id_away",
      "team_score_home",
      "team_score_away",
      "team_isWinner_home",
      "team_isWinner_away",
      "team_home_logo",
      "team_away_logo",
      // [
      //   sequelize.literal(
      //     "(SELECT COUNT(*) FROM vote WHERE game.id = vote.game_id)"
      //   ),
      //   "vote_count",
      // ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbGameData) => {
      if (!dbGameData) {
        res.status(404).json({ message: "No game found with this id" });
        return;
      }
      // console.log(dbGameData);
      const game = dbGameData.get({ plain: true });
      console.log(game.comments);
      res.render("single-game", {
        game,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
