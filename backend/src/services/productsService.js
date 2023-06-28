const { productsModel } = require('../models');

const getAll = async () => {
  const products = await productsModel.getAll();

  return { status: 'SUCCESFUL', message: products };
};

const getById = async (id) => {
  const products = await productsModel.getById(id);

  if (!products) {
    return { status: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  return { status: 'SUCCESFUL', message: products };
};

module.exports = {
  getAll,
  getById,
};