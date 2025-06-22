const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

db.sync();
module.exports = db;
