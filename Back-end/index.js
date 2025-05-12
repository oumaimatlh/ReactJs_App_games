const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();


require('./models/association'); // Si tu as défini des relations entre les modèles

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/auth');
const utilisateurRoutes = require('./routes/utilisateurs');

app.use('/api/auth', authRoutes); // Register/Login
app.use('/api/utilisateurs', utilisateurRoutes); // GET/POST utilisateurs (non auth)

// Synchronisation DB + lancement serveur
sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Base de données synchronisée');
    app.listen(3000, () => console.log('🚀 Serveur démarré sur http://localhost:3000'));
  })
  .catch(err => console.error('❌ Erreur de connexion à la base de données :', err));
