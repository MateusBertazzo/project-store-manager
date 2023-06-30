const express = require('express');
const { productsControllers } = require('../controllers');
const { validateName, minCaracteresName } = require('../middlewares/validateFields');

const router = express.Router();
router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getById);
router.post('/', minCaracteresName, validateName, productsControllers.insertProduct);
router.put('/:id', minCaracteresName, validateName, productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProductId);

module.exports = router;