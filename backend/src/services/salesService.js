const salesModel = require('../models/salesModel');

const getAllSale = async () => {
  const products = await salesModel.getAllSale();

  return { status: 'SUCCESSFUL', products };
};

const getByIdSale = async (id) => {
  const products = await salesModel.getByIdSale(id);

  if (products.length === 0) {
    return { status: 'SALE_NOT_FOUND', products: { message: 'Sale not found' } };
  }

  return { status: 'SUCCESSFUL', products };
};
module.exports = {
  getAllSale,
  getByIdSale,
};