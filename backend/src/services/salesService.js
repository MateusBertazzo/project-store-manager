const salesModel = require('../models/salesModel');

const getAllSale = async () => {
  const products = await salesModel.getAllSale();

  return { status: 'SUCCESSFUL', products };
};

const getByIdSale = async (id) => {
  const products = await salesModel.getByIdSale(id);

  if (!products || products.length === 0) {
    return { status: 'SALE_NOT_FOUND', products: { message: 'Sale not found' } };
  }

  return { status: 'SUCCESSFUL', products };
};

const insertSales = async (sales) => {
  // Insiro uma nova venda na tabela sales e obtenho o ID dessa sale
  const saleId = await salesModel.createSale();

  const salesArray = Array.isArray(sales) ? sales : [sales];
  // percorro o array de vendas "sales" e para cada venda chamo a function insertSales passando o id da venda e a venda atual e insiro as mesmas na tabela sale_products
  await Promise.all(salesArray.map(async (sale) => {
    await salesModel.insertSales(saleId.insertId, sale);
  }));
  // por fim retorno o objeto no formato que foi pedido
  return { status: 'SUCCESSFUL', message: { id: saleId.insertId, itemsSold: sales } };
};

module.exports = {
  getAllSale,
  getByIdSale,
  insertSales,
};