const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

const { salesControllers } = require('../../../src/controllers');
const { allSalesAndStatus, allSales, saleByIdAndStatus, saleNotFound } = require('../mocks/salesMocks');
const { salesService } = require('../../../src/services');

describe('testa camada Controller da salesController', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa func getAllSale', async function () {
    sinon.stub(salesService, 'getAllSale').resolves(allSalesAndStatus);

    const req = {
      body: { },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesControllers.getAllSale(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });

  it('testando o getByIdSale da camada controller', async function () {
    // arrange 
    sinon.stub(salesService, 'getByIdSale').resolves(saleByIdAndStatus);

    const req = {
      params: { id: 1 },
      body: { },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    // act
    await salesControllers.getByIdSale(req, res);
    // asser
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleByIdAndStatus.products);
 });

 it('Testa que se passado um Id que nao exista no banco retorna 404', async function () {
  // arrange 
  sinon.stub(salesService, 'getByIdSale').resolves(saleNotFound);

  const req = {
    params: { id: 999 },
    body: {},
  };

  const res = {
    status: sinon.stub().returnsThis(),
    json: sinon.stub(),
  };
  // act
  await salesControllers.getByIdSale(req, res);
  // asser
  expect(res.status).to.have.been.calledWith(404);
  });
});