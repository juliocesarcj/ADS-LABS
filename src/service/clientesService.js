const Cliente = require('../models/ClientesModels');

async function listarClientes() {
  return await Cliente.findAll();
}

async function criarCliente(nome, cpf) {
  return await Cliente.create({ nome, cpf });
}

async function atualizarCliente(cpf, dados) {
  await Cliente.update(dados, { where: { cpf } });
  return await Cliente.findOne({ where: { cpf } });
}

async function deletarCliente(cpf) {
  return await Cliente.destroy({ where: { cpf } });
}

module.exports = {
  listarClientes,
  criarCliente,
  atualizarCliente,
  deletarCliente
};
