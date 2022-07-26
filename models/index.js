// import all models
const Game = require('./Game');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations

//do not need:
// User.hasMany(Game, {
//   foreignKey: 'user_id'
// });
// Game.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });


//ADD ALL THESE BACK IN WHEN WE ADD VOTING

// User.belongsToMany(Game, {
//   through: Vote,
//   as: 'voted_games',
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Game.belongsToMany(User, {
//   through: Vote,
//   as: 'voted_games',
//   foreignKey: 'game_id',
//   onDelete: 'SET NULL'
// });
// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(Game, {
//   foreignKey: 'game_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Game.hasMany(Vote, {
//   foreignKey: 'game_id'
// });

// Users and comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

//games and comments
Game.hasMany(Comment, {
  foreignKey: 'game_id'
});

Comment.belongsTo(Game, {
  foreignKey: 'game_id',
});


// // //NEW: make sure this is correct
// Game.belongsToMany(Team, {
//   through: GameTeam,
//   as: "team_id",
//   foreignKey: 'game_id',
  
// });

// Team.belongsToMany(Game, {
//   through: GameTeam,
//   as: "game_id",
//   foreignKey: 'team_id',
 
// });


module.exports = { User, Game, Vote, Comment};





// // import all models
// const Game = require("./Game");
// const Team = require("./Team");
// const User = require("./User");
// const Vote = require("./Vote");
// const Comment = require("./Comment");
// const GameTeam = require("./GameTeam")

// // create associations
// User.hasMany(Game, {
//   foreignKey: "user_id",
// });

// Game.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// User.belongsToMany(Game, {
//   through: Vote,
//   as: "voted_games",
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Game.belongsToMany(User, {
//   through: Vote,
//   as: "voted_games",
//   foreignKey: "game_id",
//   onDelete: "SET NULL",
// });

// Vote.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Vote.belongsTo(Game, {
//   foreignKey: "game_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Vote, {
//   foreignKey: "user_id",
// });

// Game.hasMany(Vote, {
//   foreignKey: "game_id",
// });

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(Game, {
//   foreignKey: "game_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Game.hasMany(Comment, {
//   foreignKey: "game_id",
// });

// // //NEW: make sure this is correct
// Game.hasMany(Team, {
//   foreignKey: "team_id",
// });

// module.exports = { User, Game, Vote, Comment, Team, GameTeam };
