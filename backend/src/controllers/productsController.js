const { productsService } = require('../services');

const getAll = async (req, res) => {
  const { message } = await productsService.getAll();
  
  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await productsService.getById(id);

  if (status !== 'SUCCESFUL') {
    return res.status(404).json({ message });
  }

  return res.status(200).json(message);
};

module.exports = {
  getAll,
  getById,
};