const seedUsers = require('./user-seeds');
const seedGames = require('../public/javascript/fetch-data');
// const seedGames = require('./game-data');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  //by module.exporting  getApi() in fetch-data.js, it just runs the fetch request when "seedGames" is called here.
  await seedGames;
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');

  process.exit(0);
};

seedAll();
