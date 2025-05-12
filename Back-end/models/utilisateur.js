const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Utilisateur = sequelize.define('Utilisateur', {
  id_utilisateur: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomUtilisateur: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  mot_de_passe: DataTypes.STRING,
  date_inscription: DataTypes.DATE
});

// Avant d'enregistrer l'utilisateur, hasher le mot de passe
Utilisateur.beforeCreate(async (user) => {
  user.mot_de_passe = await bcrypt.hash(user.mot_de_passe, 10);
});

module.exports = Utilisateur;
