const clientesService = require('../service/clientesService');

async function getClientes(req, res) {
  try {
    const clientes = await clientesService.listarClientes();
    res.status(201).json({
      nome: 'nome:',
      cpf: 'cpf:'
    });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function creatCliente(req, res) {
  try {
    const { nome, cpf } = req.body;
    const cliente = await clientesService.criarCliente(nome, cpf);
    res.status(201).json({
      nome: 'nome:',
      cpf: 'cpf:'
    });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function upCliente(req, res) {
  try {
    const { cpf } = req.params;
    const dados = req.body;
    const clienteAtualizado = await clientesService.atualizarCliente(cpf, dados);
    if (!clienteAtualizado) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    res.json(clienteAtualizado);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function delCliente(req, res) {
  try {
    const { cpf } = req.params;
    const deletado = await clientesService.deletarCliente(cpf);
    if (!deletado) {
      return res.status(404).json({ erro: 'Cliente não encontrado' });
    }
    res.json({ mensagem: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

module.exports = {
  getClientes,
  creatCliente,
  upCliente,
  delCliente
};
