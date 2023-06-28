const { productsModel } = require('../models');

const findAll = async () => {
  const products = await productsModel.findAll();

  return { status: 'SUCCESFUL', message: products };
};

const findById = async (id) => {
  const products = await productsModel.findById(id);

  if (!products) {
    return { status: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { status: 'SUCCESFUL', message: products };
};

module.exports = {
  findAll,
  findById,
};