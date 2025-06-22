const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Prato = sequelize.define('Prato', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

module.exports = Prato;
