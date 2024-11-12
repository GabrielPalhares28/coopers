const { Sequelize } = require('sequelize');

// Usar a variável de ambiente DB_PATH para definir o caminho do banco de dados
const databasePath = process.env.DB_PATH || './database.sqlite';

// Configuração do banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: databasePath, // Usando a variável de ambiente para definir o caminho do banco
  logging: process.env.NODE_ENV === 'development' ? console.log : false, // Habilitar logs apenas no ambiente de desenvolvimento
});

// Tentando conectar ao banco de dados
sequelize.authenticate()
  .then(() => {
    console.log(`Connection to SQLite database at ${databasePath} has been established successfully.`);
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
