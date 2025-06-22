const express = require ('express')
const router = express.Router()
const clienteController = require("../controller/clientescontroller")

router.get('/', clienteController.getClientes);
router.post('/', clienteController.creatCliente);
router.put('/:cpf', clienteController.upCliente);
router.delete('/:cpf', clienteController.delCliente);


module.exports = router