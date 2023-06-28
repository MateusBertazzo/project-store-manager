const express = require('express');
const { productsControllers } = require('../controllers');

const router = express.Router();

router.get('/', productsControllers.findAll);
router.get('/:id', productsControllers.findById);

module.exports = router;