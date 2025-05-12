const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Authentification = sequelize.define('Authentification', {
  id_authentification: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date_expiration: DataTypes.DATE,
  token_jwt: DataTypes.STRING
});

module.exports = Authentification;
