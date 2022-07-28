// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Logo extends Model {}

// Logo.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },

//     team_id_home: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "game",
//         key: "team_id_home",
//       },
//     },
//     team_id_away: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "game",
//         key: "team_id_away",
//       },
//     },
//     team_home_logo: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     team_away_logo: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "logo",
//   }
// );

// module.exports = Logo;
