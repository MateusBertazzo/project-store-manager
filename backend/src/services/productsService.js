const { productsModel } = require('../models');

const getAll = async () => {
  const products = await productsModel.getAll();

  return { status: 'SUCCESSFUL', products };
};

const getById = async (id) => {
  const products = await productsModel.getById(id);

  if (!products) {
    return { status: 'PRODUCT_NOT_FOUND', products: { message: 'Product not found' } };
  }

  return { status: 'SUCCESSFUL', products };
};

module.exports = {
  getAll,
  getById,
};