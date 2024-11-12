const { Sequelize } = require('sequelize');


const databasePath = process.env.DB_PATH || './database.sqlite';


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: databasePath, 
  logging: process.env.NODE_ENV === 'development' ? console.log : false, 
});


sequelize.authenticate()
  .then(() => {
    console.log(`Connection to SQLite database at ${databasePath} has been established successfully.`);
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
