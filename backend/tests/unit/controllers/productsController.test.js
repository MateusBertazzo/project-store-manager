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

describe('testando productsService da camada Controller', function () {
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
     expect(res.json).to.have.been.calledWith(productByIdAndStatus.products);
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
});