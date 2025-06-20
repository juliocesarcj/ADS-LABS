const Cliente = require('./models/Cliente');
const express = require('express');
const sequelize = require('../config/connect');
const Prato = require('./models/Prato');

const app = express();
app.use(express.json());

app.post("/clientes", async (req, res) => {
    try {
        const novoCliente = await Cliente.create(req.body);
        res.json(novoCliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/clientes", async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/clientes/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Cliente.update(req.body, { where: { id } });
        res.json({ message: 'Cliente atualizado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/clientes/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Cliente.destroy({ where: { id } });
        res.json({ message: 'Cliente deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/criar", async (req, res) => {
    try {
        const novoPrato = await Prato.create(req.body);
        res.json(novoPrato);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/pratos", async (req, res) => {
    try {
        const pratos = await Prato.findAll();
        res.json(pratos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/pratos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Prato.update(req.body, { where: { id } });
        res.json({ message: 'Prato atualizado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/pratos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Prato.destroy({ where: { id } });
        res.json({ message: 'Prato deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
