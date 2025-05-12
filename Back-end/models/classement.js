const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Classement = sequelize.define('Classement', {
  id_classement: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  scoreTotal: DataTypes.INTEGER,
  niveau: DataTypes.INTEGER,
  rang: DataTypes.INTEGER
});

module.exports = Classement;
