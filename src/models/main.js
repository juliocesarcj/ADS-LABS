const express = require('express');
const sequelize = require('./config/connect');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('API funcionando!');
});
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Banco conectado com sucesso!');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Falha ao conectar ao banco:', error);
  }
}

startServer();
