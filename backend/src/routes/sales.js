const express = require('express');
const { salesControllers } = require('../controllers');

const router = express.Router();

router.get('/', salesControllers.getAllSale);
router.get('/:id', salesControllers.getByIdSale);

module.exports = router;