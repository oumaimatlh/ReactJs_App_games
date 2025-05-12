const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/utilisateur');

router.get('/', async (req, res) => {
  const utilisateurs = await Utilisateur.findAll();
  res.json(utilisateurs);
});

router.post('/', async (req, res) => {
  const utilisateur = await Utilisateur.create(req.body);
  res.json(utilisateur);
});

module.exports = router;
