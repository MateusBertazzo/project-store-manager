const { getAll } = require('../models/productsModel');

const validateproductId = async (req, res, next) => {
  const bodyId = req.body;
  const validateProductId = bodyId.map((e) => e.productId);

  const existProductId = validateProductId.some((id) => id === undefined);

  const productList = await getAll();
  const dataBaseIds = productList.map((e) => e.id);
  const findIdProduct = validateProductId.every((product) => dataBaseIds.includes(product));

  if (existProductId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (!findIdProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const validateQuantity = (req, res, next) => {
  const quantity = req.body.map((quant) => quant.quantity);

  const existQuantity = quantity.some((quant) => quant === undefined);
  if (existQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  const invalidQuantity = quantity.some((quant) => quant <= 0);

  if (invalidQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = {
  validateproductId,
  validateQuantity,
};