const Utilisateur = require('./utilisateur');
const Historique = require('./historique');
const Classement = require('./classement');
const Jeu = require('./jeu');
const Partie = require('./partie');
const Authentification = require('./authentification');

// Relations
Utilisateur.hasOne(Authentification);
Authentification.belongsTo(Utilisateur);

Utilisateur.hasMany(Partie);
Partie.belongsTo(Utilisateur);

Jeu.hasMany(Partie);
Partie.belongsTo(Jeu);

// Ajoute d'autres relations selon le besoin

module.exports = {
  Utilisateur,
  Historique,
  Classement,
  Jeu,
  Partie,
  Authentification
};
