const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jeu = sequelize.define('Jeu', {
  id_jeu: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nomJeu: DataTypes.STRING,
  description: DataTypes.STRING,
  type: DataTypes.STRING
});

module.exports = Jeu;
