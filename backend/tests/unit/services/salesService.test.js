const chai = require('chai');
const sinon = require('sinon');

const { salesService } = require('../../../src/services');
const { allSalesAndStatus, saleByIdAndStatus, saleNotFound } = require('../mocks/salesMocks');
const { salesModel } = require('../../../src/models');

const { expect } = chai;

describe('Testa camada Service de salesService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa func getAllSale', async function () {
    sinon.stub(salesModel, 'getAllSale').resolves(allSalesAndStatus);

    const { status, products } = await salesService.getAllSale();

    expect(status).to.be.deep.equal(allSalesAndStatus.status);
    expect(products.products).to.be.deep.equal(allSalesAndStatus.products);
  });

  it('testa func getByIdSale', async function () {
    sinon.stub(salesModel, 'getByIdSale').resolves(saleByIdAndStatus);

    const { status, products } = await salesService.getByIdSale();

    expect(status).to.be.deep.equal(saleByIdAndStatus.status);
    expect(products.products).to.be.deep.equal(saleByIdAndStatus.products);
  });

  it('testa caso passado um ID que nao exista no banco, retorna um erro', async function () {
    sinon.stub(salesModel, 'getByIdSale').resolves(undefined);

    const { status, products } = await salesService.getByIdSale();

    expect(status).to.be.deep.equal(saleNotFound.status);
    expect(products.message).to.be.deep.equal(saleNotFound.products.message);
  });
});