const { productsModel } = require('../models');

const getAll = async () => {
  const products = await productsModel.getAll();

  return { status: 'SUCCESSFUL', products };
};

const getById = async (id) => {
  const products = await productsModel.getById(id);

  if (!products) {
    return { status: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  return { status: 'SUCCESSFUL', message: products };
};

const insertProduct = async (name) => {
  const products = await productsModel.insertProduct(name);
  return { status: 'SUCCESSFUL', message: products };
};

const updateProduct = async (name, id) => {
  const products = await getById(id);

  if (products.status !== 'SUCCESSFUL') {
    return { status: 'ID_NOT_FOUND', message: 'Product not found' };
  }

  const product = await productsModel.updateProduct(name, id);
  
  return { status: 'SUCCESSFUL', message: product };
};

const deleteProductId = async (id) => {
  const products = await productsModel.getById(id);

  if (!products) {
    return { status: 'ID_NOT_FOUND', message: 'Product not found' };
  }

  await productsModel.deleteProductId(id);

  return { status: 'SUCCESSFUL' };
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  deleteProductId,
};