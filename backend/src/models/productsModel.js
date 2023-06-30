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

const updateProduct = async (name, id) => {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
  console.log({ name, id });
  return { name, id };
};

const deleteProductId = async (id) => {
  const query = 'DELETE from StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  console.log(result);

  return result;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  deleteProductId,
};