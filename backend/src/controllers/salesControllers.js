const salesService = require('../services/salesService');

const getAllSale = async (_req, res) => {
  const { products } = await salesService.getAllSale();
 
  return res.status(200).json(products);
};

const getByIdSale = async (req, res) => {
  const { id } = req.params;
  const { status, products } = await salesService.getByIdSale(id);

  if (status === 'SALE_NOT_FOUND') {
    return res.status(404).json(products);
  }

  return res.status(200).json(products);
};

module.exports = {
  getAllSale,
  getByIdSale,
};