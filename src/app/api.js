const express = require('express');
const clienteRouter = require ('../router/clientesRouter')
const pratoRouter = require('../router/pratosRouter');
const sequelize = require('../database/db');
require('dotenv').config();
const app = express();
app.use(express.json());



app.use('/clientes', clienteRouter);
app.use('/pratos', pratoRouter);

const clientesRouter = require ('../router/clientesRouter');
app.use('/clientes', clientesRouter);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
sequelize.sync().then(() => {
  console.log('Banco sincronizado.');
}).catch((err) => {
  console.error('Erro ao sincronizar o banco:', err);
});
