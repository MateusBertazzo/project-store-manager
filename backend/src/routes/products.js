const express = require('express');
const { productsControllers } = require('../controllers');

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getById);
router.post('/', productsControllers.insertProduct);
router.put('/:id', productsControllers.updateProduct);

module.exports = router;