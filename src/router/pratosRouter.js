const express = require('express');
const router = express.Router();
const pratoController = require('../controller/pratosController');

router.get('/', pratoController.listarPratos);
router.post('/', pratoController.listarPratos);
router.put('/:id', pratoController.atualizarPrato);
router.delete('/:id', pratoController.deletarPrato);

module.exports = router;
