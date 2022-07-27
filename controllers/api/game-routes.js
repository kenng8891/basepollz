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

module.exports = router;