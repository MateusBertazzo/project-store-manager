const allProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const allProductsAndStatus = {
  status: 'SUCCESSFUL',
  products: [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do CapitÃ£o AmÃ©rica',
    },
  ],
};

const productByIdAndStatus = {
  status: 'SUCCESSFUL',
  products: [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
  ],
};

const productByIdNotFound = {
  status: 'PRODUCT_NOT_FOUND',
  products: { message: 'Product not found' },
};

const insertNewProduct = {
  id: 4,
  name: 'Bruno',
};

module.exports = {
  allProducts,
  allProductsAndStatus,
  productByIdAndStatus,
  productByIdNotFound,
  insertNewProduct,
};