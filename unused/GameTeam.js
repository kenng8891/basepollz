// //this is equivalent to ProductTag in one of the modules!

// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class GameTeam extends Model {}

// GameTeam.init(
//   {
//     // define columns
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     game_id: {
//       type: DataTypes.INTEGER,
//       unique: true,
//       references: {
//         model: 'game',
//         key: 'game_id'
//       }
//     },
//     team_id_home: {
//       type: DataTypes.INTEGER,
//       unique: true,
//       references: {
//         model: 'team',
//         key: 'team_id'
//       }
//     },
//     team_id_away: {
//         type: DataTypes.INTEGER,
//         unique: true,
//         references: {
//           model: 'team',
//           key: 'team_id'
//         }
//       }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'gameTeam',
//   }
// );

// module.exports = GameTeam;
