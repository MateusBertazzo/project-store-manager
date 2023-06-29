const express = require('express');
const { productsControllers } = require('../controllers');
const { validateName } = require('../middlewares/validateFields');

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getById);
router.post('/', validateName, productsControllers.insertProduct);
router.put('/:id', validateName, productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProductId);

module.exports = router;