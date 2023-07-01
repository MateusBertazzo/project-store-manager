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

const insertSales = async (req, res) => {
  const newSale = req.body;
  const sale = await salesService.insertSales(newSale);
  // if (status !== 'ERRO_NOT_FOUND') {
  //   return res.status(400).json({ message });
  // }

  return res.status(201).json(sale);
};

module.exports = {
  getAllSale,
  getByIdSale,
  insertSales,
};