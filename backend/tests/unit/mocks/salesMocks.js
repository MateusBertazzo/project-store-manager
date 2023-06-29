const date1 = '2023-06-28T21:40:52.000Z';

const allSales = [
  {
    date: date1,
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    date: date1,
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
  {
    date: date1,
    saleId: 2,
    productId: 3,
    quantity: 15,
  },
];

const salesById = [
  {
    date: '2023-06-28T21:40:52.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-06-28T21:40:52.000Z',
    productId: 2,
    quantity: 10,
  },
];

const allSalesAndStatus = {
  status: 'SUCCESSFUL',
  products: [
    {
      date: date1,
      saleId: 1,
      productId: 1,
      quantity: 5,
    },
    {
      date: date1,
      saleId: 1,
      productId: 2,
      quantity: 10,
    },
    {
      date: date1,
      saleId: 2,
      productId: 3,
      quantity: 15,
    },
  ],
};

const saleByIdAndStatus = {
  status: 'SUCCESSFUL',
  products: [
    {
      date: date1,
      saleId: 2,
      productId: 3,
      quantity: 15,
    },
  ],
};

const saleNotFound = {
  status: 'SALE_NOT_FOUND',
  products: { message: 'Sale not found' },
};

module.exports = {
  allSales,
  salesById,
  allSalesAndStatus,
  saleByIdAndStatus,
  saleNotFound,
};