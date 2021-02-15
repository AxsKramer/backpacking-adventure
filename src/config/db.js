const Sequelize = require('sequelize');
const config = require('./index');

const {dbName, dbHost, dbPass, dbPort, dbUser} = config;

const db = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: dbPort,
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});

module.exports = db;