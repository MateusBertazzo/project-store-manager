const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { 
  allProductsAndStatus, 
  allProducts,
  productByIdAndStatus,
  productByIdNotFound,
 } = require('../mocks/modelMocks');

const { productsService } = require('../../../src/services');
const { productsControllers } = require('../../../src/controllers');

describe('testando camada Controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testando retorno da func getAll camada controller', async function () {
    // arrange 
    sinon.stub(productsService, 'getAll').resolves(allProductsAndStatus);

    const req = {
      body: { },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    // act
    await productsControllers.getAll(req, res);
    // asser
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });

  it('testando o getById da camada controller', async function () {
     // arrange 
     sinon.stub(productsService, 'getById').resolves(productByIdAndStatus);

     const req = {
       params: { id: 1 },
       body: { },
     };
 
     const res = {
       status: sinon.stub().returnsThis(),
       json: sinon.stub(),
     };
     // act
     await productsControllers.getById(req, res);
     // asser
     expect(res.status).to.have.been.calledWith(200);
     expect(res.json).to.have.been.calledWith(productByIdAndStatus.message);
  });

  it('Testa que se passado um Id que nao exista no banco retorna 404', async function () {
    // arrange 
    sinon.stub(productsService, 'getById').resolves(productByIdNotFound);

    const req = {
      params: { id: 999 },
      body: {},
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    // act
    await productsControllers.getById(req, res);
    // asser
    expect(res.status).to.have.been.calledWith(404);
  });

  it('testando func insertProduct', async function () {
    const res = {};
    const req = { body: { name: 'Mateus' } };
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    const object = { id: 4, name: 'Mateus' };

    sinon.stub(productsService, 'insertProduct').resolves({ status: 'SUCCESSFUL', message: object });

    await productsControllers.insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(object);
  });

  it('testando func de update', async function () {
    const res = {};
    const req = {
      body: { name: 'Mateus' },
      params: { id: 1 },
    };
    const object = { name: 'Mateus', id: 1 };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'updateProduct').resolves({ status: 'SUCCESSFUL', message: object });

    await productsControllers.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(object);
  });
});