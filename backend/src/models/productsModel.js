const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';

  const [result] = await connection.execute(query);
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';

  const [[result]] = await connection.execute(query, [id]);
  return result;
};

const insertProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUE (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  return { id: insertId, name };
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};