const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gamingdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
