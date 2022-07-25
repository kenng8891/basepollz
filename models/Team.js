const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our TEAM model
class Team extends Model {}

//THIS WILL HAVE TO BE SEEDED
Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // the below are unnecessary because we're seeding the teams ourselves
      primaryKey: true,
      autoIncrement: true
    },
    team_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   
    teamName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    //fka "path"
    logoPath: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'team'
  }
);

exports.Team = Team;
