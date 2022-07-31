const router = require("express").Router();
const sequelize = require("../config/connection");
const { Game, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//CHANGES TO MAKE: THIS SHOULD BE THE USER PROFILE PAGE.
//GET ALL GAMES THEY VOTED ON
//List games the user voted on, with game info, and whether they received a point or not
//THEN list leaderboard below? If Time?

// get all games for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Game.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      'id',
      'game_id',
      'game_date',
      'game_status',
      'team_name_home',
      'team_name_away',
      'team_id_home',
      'team_id_away',
      'team_score_home',
      'team_score_away',
      'team_isWinner_home',
      'team_isWinner_away',
      'team_home_logo',
      'team_away_logo',
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
      const games = dbGameData.map((game) => game.get({ plain: true }));
      res.render("dashboard", { 
        games, 
        loggedIn: true 
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;


// router.get("/edit/:id", withAuth, (req, res) => {
//   Game.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'game_id',
//       'game_date',
//       'game_status',
//       // 'liveFeedLink',
//       'team_name_home',
//       'team_name_away',
//       'team_id_home',
//       'team_id_away',
//       'team_score_home',
//       'team_score_away',
//       'team_isWinner_home',
//       'team_isWinner_away',
//       [
//         sequelize.literal(
//           "(SELECT COUNT(*) FROM vote WHERE game.game_id = vote.game_id)"
//         ),
//         "vote_count",
//       ],
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ["id", "comment_text", "game_id", "user_id", "created_at"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//     ],
//   })
//     .then((dbGameData) => {
//       if (dbGameData) {
//         const game = dbGameData.get({ plain: true });

//         // res.render("edit-game", {
//         //   game,
//         //   loggedIn: true,
//         // });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });