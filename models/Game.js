const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our game model
class Game extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      game_id: body.game_id
    }).then(() => {
      return Game.findOne({
        where: {
          id: body.game_id
        },
        attributes: [
          'id',
          'team_home',
          'team_away',
          'score_home',
          'score_away',
          'game_status',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE game.id = vote.game_id)'), 'vote_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'game_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

// create fields/columns for game model
Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'game'
  }
);

module.exports = Game;
