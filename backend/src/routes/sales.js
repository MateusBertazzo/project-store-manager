const express = require('express');
const { salesControllers } = require('../controllers');
const { validateproductId, validateQuantity } = require('../middlewares/validateSales');

const router = express.Router();

router.get('/', salesControllers.getAllSale);
router.get('/:id', salesControllers.getByIdSale);
router.post('/', validateQuantity, validateproductId, salesControllers.insertSales);
module.exports = router;