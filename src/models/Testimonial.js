const  {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/db');

const Testimonial = db.define('Testimonial', {
  name: {
    type: DataTypes.STRING
  },
  trip: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.STRING
  }
});

module.exports = Testimonial;