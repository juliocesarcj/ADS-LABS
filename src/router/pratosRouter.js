const express = require('express');
const router = express.Router();
const pratoController = require('../controller/pratosController');

router.get('/', pratoController.listar);
router.post('/', pratoController.store);
router.put('/:id', pratoController.update);
router.delete('/:id', pratoController.destroy);

module.exports = router;
