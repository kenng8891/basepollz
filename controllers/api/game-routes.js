const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Game, User, Comment, Vote } = require('../../models');
const withAuth = require('../../utils/auth');
const fetchGameData = require('../../public/javascript/fetch-data')
// get all upcoming games
router.get('/', (req, res) => {
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
 })
  .then(dbGameData => res.json(dbGameData))
  .catch(err => {
   console.log(err);
   res.status(500).json(err);
  });
});
// get all voteable/upcoming games
router.get('/voteable', (req, res) => {
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
   //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE game.id = vote.game_id)'), 'vote_count']
  ],
  include:[
   {
    model: Comment,
    attributes: ['id', 'comment_text', 'game_id', 'user_id', 'created_at'],
    include: {
     model: User,
     attributes: ['username']
    }
   }
  ],
  where: {
   game_status: 'Preview'
  }
 })
  .then(dbGameData => res.json(dbGameData))
  .catch(err => {
   console.log(err);
   res.status(500).json(err);
  });
});
// get all nonvoteable/ past or live games
router.get('/nonvoteable', (req, res) => {
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
  include:[
   {
    model: Comment,
    attributes: ['id', 'comment_text', 'game_id', 'user_id', 'created_at'],
    include: {
     model: User,
     attributes: ['username']
    }
   }
  ],
  where: {
   game_status: ['Live', 'Final']
  }
 })
  .then(dbGameData => res.json(dbGameData))
  .catch(err => {
   console.log(err);
   res.status(500).json(err);
  });
});
router.get('/:id', (req, res) => {
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
   'team_isWinner_away'  ],
   include:[
    {
     model: Team,
     attributes: ['id', 'team_id', 'team_name', 'logoPath'],
    },
    {
     model: Comment,
     attributes: ['id', 'comment_text', 'game_id', 'user_id', 'created_at'],
     include: {
      model: User,
      attributes: ['username']
     }
    }
   ],
 })
  .then(dbGameData => {
   if (!dbGameData) {
    res.status(404).json({ message: 'No game found with this id' });
    return;
   }
   res.json(dbGameData);
  })
  .catch(err => {
   console.log(err);
   res.status(500).json(err);
  });
});
//since users don't create games, we shouldn't need this post function?
// router.post('/', (req, res) => {
//  // expects {title: 'Taskmaster goes public!', game_url: 'https://taskmaster.com/press', user_id: 1}
//  if (req.session) {
//   Game.create({
//    title: req.body.title,
//    game_url: req.body.game_url,
//    user_id: req.session.user_id
//   })
//    .then(dbGameData => res.json(dbGameData))
//    .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//    });
//  }
// });
//for updating a game info
//need to update: gamestatus, date (incase rain), scores, isWinners
// router.put('/:id', (req, res) => {
//  Game.update({
//   game_id: ,
//   game_date:,
//   game_status:,
//   team_score_home:,
//   team_score_away:,
//   team_isWinner_home:,
//   team_isWinner_away:,
//  })
//    .then(updatedGameData => res.json(updatedGameData))
//    .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//    });
// });
router.put('/upvote', (req, res) => {
 // custom static method created in models/Game.js
 if (req.session) {
  Game.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
   .then(updatedVoteData => res.json(updatedVoteData))
   .catch(err => {
    console.log(err);
    res.status(500).json(err);
   });
 }
});
//don't think we need this
// router.put('/:id', (req, res) => {
//  Game.update(
//   {
//    title: req.body.title
//   },
//   {
//    where: {
//     id: req.params.id
//    }
//   }
//  )
//   .then(dbGameData => {
//    if (!dbGameData) {
//     res.status(404).json({ message: 'No game found with this id' });
//     return;
//    }
//    res.json(dbGameData);
//   })
//   .catch(err => {
//    console.log(err);
//    res.status(500).json(err);
//   });
// });
//shouldn't need delete game function either
// router.delete('/:id', withAuth, (req, res) => {
//  console.log('id', req.params.id);
//  Game.destroy({
//   where: {
//    id: req.params.id
//   }
//  })
//   .then(dbGameData => {
//    if (!dbGameData) {
//     res.status(404).json({ message: 'No game found with this id' });
//     return;
//    }
//    res.json(dbGameData);
//   })
//   .catch(err => {
//    console.log(err);
//    res.status(500).json(err);
//   });
// });
module.exports = router;