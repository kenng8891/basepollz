// import all models
const Game = require('./Game');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Game, {
  foreignKey: 'user_id'
});

Game.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Game, {
  through: Vote,
  as: 'voted_games',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Game.belongsToMany(User, {
  through: Vote,
  as: 'voted_games',
  foreignKey: 'game_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Game, {
  foreignKey: 'game_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Game.hasMany(Vote, {
  foreignKey: 'game_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Game, {
  foreignKey: 'game_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Game.hasMany(Comment, {
  foreignKey: 'game_id'
});

module.exports = { User, Game, Vote, Comment };
