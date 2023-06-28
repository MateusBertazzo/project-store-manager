const { productsModel } = require('../models');

const findAll = async () => {
  const products = await productsModel.findAll();

  return { status: 'SUCCESFUL', data: products };
};

const findById = async (id) => {
  const products = await productsModel.findById(id);

  return { status: 'SUCCESFUL', data: products };
};

module.exports = {
  findAll,
  findById,
};