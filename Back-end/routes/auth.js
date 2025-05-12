const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Utilisateur = require('../models/utilisateur');

const JWT_SECRET = 'votre_clé_secrète_super_sécurisée'; // 🔐 change cette valeur

// ✅ Register
router.post('/register', async (req, res) => {
  try {
    const { nomUtilisateur, email, mot_de_passe } = req.body;

    const utilisateurExistant = await Utilisateur.findOne({ where: { email } });
    if (utilisateurExistant) return res.status(400).json({ message: 'Email déjà utilisé.' });

    const newUser = await Utilisateur.create({
      nomUtilisateur,
      email,
      mot_de_passe,
      date_inscription: new Date()
    });

    res.status(201).json({ message: 'Utilisateur enregistré', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

// ✅ Login
router.post('/login', async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;

    const user = await Utilisateur.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

    const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!isMatch) return res.status(401).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign({ id: user.id_utilisateur, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

module.exports = router;
