const connection = require('./connection');

const getAllSale = async () => {
  const query = 'SELECT sales.date AS date, sp.sale_id AS saleId, sp.product_id AS productId,'
  + ' sp.quantity AS quantity FROM sales INNER JOIN sales_products AS sp'
  + ' ON sales.id = sp.sale_id ORDER BY saleId, product_id';

  const [result] = await connection.execute(query);
  return result;
};

const getByIdSale = async (id) => {
  const query = 'SELECT sales.date, sp.product_id AS productId, sp.quantity' 
  + ' FROM sales' 
  + ' INNER JOIN sales_products AS sp'
  + ' ON sales.id = sp.sale_id WHERE sp.sale_id = ? ORDER BY productId';

  const [result] = await connection.execute(query, [id]);
  return result;
};

const createSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (now())';
  const [create] = await connection.execute(query);
  return create;
};

const insertSales = async (saleId, sale) => {
  const query = `INSERT INTO StoreManager.sales_products 
  (sale_id, product_id, quantity) VALUES (?,?,?)`;
  const [result] = await connection.execute(query, [saleId, sale.productId, sale.quantity]);

  return result;
};

module.exports = {
  getAllSale,
  getByIdSale,
  createSale,
  insertSales,
};
