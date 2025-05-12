const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Historique = sequelize.define('Historique', {
  id_historique: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  niveau: DataTypes.INTEGER,
  date_historique: DataTypes.DATE
});

module.exports = Historique;
