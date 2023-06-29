const { productsService } = require('../services');

const getAll = async (_req, res) => {
  const { products } = await productsService.getAll();
  
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, products } = await productsService.getById(id);

  if (status === 'PRODUCT_NOT_FOUND') {
    return res.status(404).json(products);
  }

  return res.status(200).json(products);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;

  const products = await productsService.insertProduct(name);

  return res.status(201).json(products.products);
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};