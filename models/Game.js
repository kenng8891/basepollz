const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our game model
class Game extends Model {

  //do not delete: let's figure out voting after we 

  // static upvote(body, models) {
  //   return models.Vote.create({
  //     user_id: body.user_id,
  //     game_id: body.game_id
  //   }).then(() => {
  //     return Game.findOne({
  //       where: {
  //         id: body.game_id
  //       },
  //       attributes: [
  //         'id',
  //         'team_home',
  //         'team_away',
  //         'score_home',
  //         'score_away',
  //         'game_status',
  //         [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE game.id = vote.game_id)'), 'vote_count']
  //       ],
  //       include: [
  //         {
  //           model: models.Comment,
  //           attributes: ['id', 'comment_text', 'game_id', 'user_id', 'created_at'],
  //           include: {
  //             model: models.User,
  //             attributes: ['username']
  //           }
  //         }
  //       ]
  //     });
  //   });
  // }
}

// create fields/columns for game model
Game.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    game_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    game_id: { //formerly 'game_url'
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primarykey: true
    },
    team_id_home:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "team",
        key: "team_id"
      }
    },
    team_name_home:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      references: {
        model: "team",
        key: "team_name"
      }
    },
    team_id_away:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "team",
        key: "team_id"
      }
    },
    team_name_away:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      references: {
        model: "team",
        key: "team_name"
      }
    },
    game_status:{
      type: DataTypes.STRING,
      allowNull: false
      //SHOULD THIS BE A LIMITED SERIES OF CHOICES? 'PREVIEW', 'LIVE', AND 'FINAL'?
    },
    team_score_home:{
      type: DataTypes.INTEGER,
    },
    team_score_away:{
      type: DataTypes.INTEGER,
    },
    team_isWinner_home: {
      type: DataTypes.BOOLEAN,
    },
    team_isWinner_away: {
      type: DataTypes.BOOLEAN,
    },
    //If we keep track of all user's votes, that would go below.
    // home_userVotes: {
    //   type: DataTypes.INTEGER,
          //through?
    // },
    // away_userVotes: {
    //   type: DataTypes.INTEGER,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'game'
  }
);

module.exports = Game;