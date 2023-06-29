const connection = require('./connection');

const getAllSale = async () => {
  const query = 'SELECT * FROM sales_products';

  const [result] = await connection.execute(query);
  return result;
};

const getByIdSale = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales_products WHERE id = ?';

  const [[result]] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAllSale,
  getByIdSale,
};