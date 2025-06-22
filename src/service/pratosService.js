const Prato = require('../models/pratosModels');

async function criarPrato(nome, preco) {
  return await Prato.create({ nome, preco });
}

async function listarPratos() {
  return await Prato.findAll();
}

async function atualizarPrato(id, dados) {
  await Prato.update(dados, { where: { id } });
  return await Prato.findByPk(id);
}

async function deletarPrato(id) {
  return await Prato.destroy({ where: { id } });
}

module.exports = {
  criarPrato,
  listarPratos,
  atualizarPrato,
  deletarPrato
};
