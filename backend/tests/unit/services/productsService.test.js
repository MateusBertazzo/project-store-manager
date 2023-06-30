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

  it('testando func insertProduct', async function () {
    const cafeteira = {
      id: 1,
      name: 'cafeteira',
    };
    sinon.stub(productsModel, 'insertProduct').resolves(cafeteira);

    const result = await productsService.insertProduct('cafeteira');

    expect(result.status).to.be.deep.equal('SUCCESSFUL');
    expect(result.message).to.be.deep.equal(cafeteira);
  });

  it('testando func updateProduct', async function () {
    const update = {
      name: 'Mateus',
      id: 1,
    };
    sinon.stub(productsModel, 'getById').resolves('SUCCESSFUL');

    sinon.stub(productsModel, 'updateProduct').resolves(update);

    const result = await productsService.updateProduct('mateus', 1);

    expect(result.message).to.be.deep.equal(update);
  });

  it('testando func updateProduct caso passado um ID inválido', async function () {
    const update = {
      name: 'Mateus',
      id: 999,
    };
    sinon.stub(productsModel, 'getById').resolves('ID_NOT_FOUND');

    sinon.stub(productsModel, 'updateProduct').resolves(update);

    const result = await productsService.updateProduct('mateus', 1);

    expect(result.message).to.be.deep.equal(update);
  });

  it('testando func deleteProductId', async function () {
    sinon.stub(productsModel, 'getById').resolves('SUCCESSFUL');

    sinon.stub(productsModel, 'deleteProductId').resolves({ affectedRows: 1 });

    const result = await productsService.deleteProductId(1);

    expect(result.status).to.be.deep.equal('SUCCESSFUL');
    expect(result.message).to.be.deep.equal(undefined);
  });
});