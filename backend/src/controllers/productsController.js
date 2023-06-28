const { productsService } = require('../services');

const findAll = async (req, res) => {
  const { status, message } = await productsService.findAll();
  
  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await productsService.findById(id);

  if (status === 'PRODUCT_NOT_FOUND') {
    return res.status(404).json(message);
  }
  return res.status(200).json(message);
};

module.exports = {
  findAll,
  findById,
};