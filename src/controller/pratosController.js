const { Prato } = require("../models/pratosModels");
const pratosService = require("../service/pratosService");

class PratoController {
  async listar(req, res) {
    try {
      const pratos = await pratosService.listarPratos();
      res.status(200).json(pratos);
    } catch (error) {
      res.status(500).json({ message: "Falha ao listar pratos" });
    }
  }
  async store(req, res) {
    try {
      const { nome, preco } = req.body;

      if (!nome || !preco) {
        return res.status(400).json({ message: "Nome e preço são obrigatórios" });
      }

      const pratoExistente = await Prato.findOne({ where: { nome } });

      if (pratoExistente) {
        return res.status(400).json({ message: "Esse prato já existe" });
      }

      const novoPrato = await Prato.create({ nome, preco });

      return res.status(201).json(novoPrato);
    } catch (error) {
      res.status(500).json({ message: "Falha ao cadastrar prato" });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const prato = await Prato.findByPk(id);

      if (!prato) {
        return res.status(404).json({ message: "Prato não encontrado" });
      }

      return res.status(200).json(prato);
    } catch (error) {
      res.status(500).json({ message: "Falha ao detalhar prato" });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, preco } = req.body;

      const [atualizado] = await Prato.update(
        { nome, preco },
        { where: { id: id } }
      );

      if (atualizado === 0) {
        return res.status(404).json({ message: "Prato não encontrado" });
      }

      return res.status(200).json({ message: "Prato atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Falha ao atualizar o prato" });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params;

      const deletado = await Prato.destroy({ where: { id: id } });

      if (deletado === 0) {
        return res.status(404).json({ message: "Prato não encontrado" });
      }

      return res.status(200).json({ message: "Prato excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Falha ao excluir o prato" });
    }
  }
}

module.exports = new PratoController();
