const router = require('express').Router();
const sequelize = require('../config/connection');
const { Game, User, Comment, Vote } = require('../models');

// get all games for homepage (FUTURE GAMES ONLY FOR MAIN SCREEN)
router.get('/', (req, res) => {
  console.log('======================');
  Game.findAll({
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
      'team_isWinner_away'
      //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE game.id = vote.game_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'game_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
    ],
  })
    .then(dbGameData => {
      const games= dbGameData.map(game => game.get({ plain: true }));
      let gamesFuture = [];
      let gamesPast = [];

      for (i=0; i<games.length; i++){
        if(games[i].game_status === 'Preview'){
          gamesFuture.push(games[i]);
        }else{
          gamesPast.push(games[i]);
        }
      }

      console.log('***********************************')
      console.log(gamesPast);
      console.log('***********************************')
      console.log(gamesFuture);

      let gamesFuture = []
      let gamesPast = []

      for(i = 0; i < games.length; i++) {
        if (games[i].game_status === "Preview" ) {
          gamesFuture.push(games[i]);
        } else {
          gamesPast.push(games[i]);
        }
      }

      res.render('homepage', {
        gamesFuture,
        gamesPast,
<<<<<<< HEAD
        loggedIn: req.session.loggedIn
=======
        loggedIn: req.session.loggedIn,

>>>>>>> b1ecc819fca21fdbbd5e2d94083583f0e4e8bbfd
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// //Past games only
// router.get('/', (req, res) => {
//   console.log('======================');
//   Game.findAll({
//     attributes: [
//       'id',
//       'game_id',
//       'game_date',
//       'game_status',
//       'team_name_home',
//       'team_name_away',
//       'team_id_home',
//       'team_id_away',
//       'team_score_home',
//       'team_score_away',
//       'team_isWinner_home',
//       'team_isWinner_away'
//       //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE game.id = vote.game_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'game_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//     ],
//     where: {
//       game_status: ["Final", "Live"]
//     }
//   })
//     .then(dbGameData => {
//       const gamesPast = dbGameData.map(game => game.get({ plain: true }));


//       res.render('homepage', {
//         gamesPast,
//         loggedIn: req.session.loggedIn,

//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// get single game
router.get('/game/:id', (req, res) => {
  Game.findOne({
    where: {
      id: req.params.id
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
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE game.id = vote.game_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'game_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
    ]
  })
    .then(dbGameData => {
      if (!dbGameData) {
        res.status(404).json({ message: 'No game found with this id' });
        return;
      }

      const game = dbGameData.get({ plain: true });

      res.render('single-game', {
        game,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
