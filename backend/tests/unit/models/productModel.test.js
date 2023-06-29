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
});