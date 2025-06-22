const pratosService = require('../service/pratosService');

async function criarPrato(req, res) {
  try {
    const { nome, preco } = req.body;
    const prato = await pratosService.criarPrato(nome, preco);
    res.status(201).json(prato);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function listarPratos(req, res) {
  try {
    const pratos = await pratosService.listarPratos();
    res.json(pratos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function atualizarPrato(req, res) {
  try {
    const { id } = req.params;
    const dados = req.body;
    const pratoAtualizado = await pratosService.atualizarPrato(id, dados);
    if (!pratoAtualizado) {
      return res.status(404).json({ erro: 'Prato não encontrado' });
    }
    res.json(pratoAtualizado);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function deletarPrato(req, res) {
  try {
    const { id } = req.params;
    const deletado = await pratosService.deletarPrato(id);
    if (!deletado) {
      return res.status(404).json({ erro: 'Prato não encontrado' });
    }
    res.json({ mensagem: 'Prato deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

module.exports = {
  criarPrato,
  listarPratos,
  atualizarPrato,
  deletarPrato,
};
