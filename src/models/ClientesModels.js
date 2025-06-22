const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Cliente = sequelize.define('Cliente', {
  "nome": {
    type: DataTypes.STRING,
    allowNull: false,
  },
  "cpf": {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }
})

