const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/db');

const International = db.define('International_trip', {
  trip_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vacancies: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  places_to_visit: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  departure_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  return_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  available: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = International;