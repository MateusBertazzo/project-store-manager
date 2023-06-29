const chai = require('chai');
const sinon = require('sinon');

const { productsService } = require('../../../src/services');
const { allProducts } = require('../mocks/modelMocks');
const { productsModel } = require('../../../src/models');

const { expect } = chai;

describe('testando productsService da camada service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testando a func getAll da productServices', async function () {
    // arrange 
    sinon.stub(productsModel, 'getAll').resolves([allProducts]);
    // act
    const result = await productsService.getAll();
    // asse
    expect(result.status).to.be.equal('SUCCESSFUL');
    expect(result.products).to.be.deep.equal([allProducts]);
  });

  it('testando a func getById da productServices', async function () {
    // arrange 
    sinon.stub(productsModel, 'getById').resolves([allProducts[0]]);
    // act
    const id = 1;
    const result = await productsService.getById(id);
    // asse
    expect(result.status).to.be.equal('SUCCESSFUL');
    expect(result.message).to.be.deep.equal([allProducts[0]]);
  });

  it('testando a func getById da productServices que retorna um erro caso passado "id" que nao exista no banco', async function () {
    // arrange 
    sinon.stub(productsModel, 'getById').resolves(undefined);
    // act
    const incorrectId = 999;
    const result = await productsService.getById(incorrectId);
    // asse
    expect(result.status).to.be.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.equal('Product not found');
  });
});