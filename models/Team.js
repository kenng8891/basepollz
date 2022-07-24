const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our TEAM model
class Team extends Model {
  
}

//THIS WILL HAVE TO BE SEEDED
Team.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   unique: true,
    //   // the below might be unnecessary because we're seeding the teams ourselves
    //    primaryKey: true,
    //    autoIncrement: true
    // },
    team_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primarykey: true
    },
   
    team_name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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

module.exports = Team;
