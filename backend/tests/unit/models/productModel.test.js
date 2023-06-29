const sinon = require('sinon');
const { expect } = require('chai');

const { productsModel } = require('../../../src/models');
const { allProducts } = require('../mocks/modelMocks');
const connection = require('../../../src/models/connection');

describe('testando productsModel da camada Model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testando a func getAll da productModels', async function () {
    // arrange 
    sinon.stub(connection, 'execute').resolves([allProducts]);
    // act
    const result = await productsModel.getAll();
    // asse
    expect(result).to.be.deep.equal(allProducts);
  });

  it('testando a func getById da productModels', async function () {
    // arrange 
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);
    // act
    const id = 1;
    const result = await productsModel.getById(id);
    // asse
    expect(result).to.be.deep.equal(allProducts[0]);
  });

  it('testando a func updateProduct', async function () {
    sinon.stub(connection, 'execute').resolves();

    const result = await productsModel.updateProduct('Mateus', 1);

    expect((result)).to.be.deep.equal({ name: 'Mateus', id: 1 });
  });

  it('testando a func insertProduct', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const result = await productsModel.insertProduct('cafeteira');

    const cafeteira = {
      id: 1,
      name: 'cafeteira',
    };

    expect(result).to.be.deep.equal(cafeteira);
  });

  it('testando a func de deleteProductId', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await productsModel.deleteProductId(1);

    expect(result).to.be.deep.equal({ affectedRows: 1 });
  });
});

// {
//   "message": "Product not found"
// }