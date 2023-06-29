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

    const result = await productsModel.updateProduct(1, 'Mateus');

    expect(result).to.be.deep.equal({ id: 1, name: 'Mateus' });
  });

  it('testando a func de deleteProductId', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await productsModel.deleteProductId(1);

    expect(result).to.be.deep.equal({ affectedRows: 1 });
  });
});