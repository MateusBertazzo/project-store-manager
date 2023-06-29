const chai = require('chai');
const sinon = require('sinon');

const { salesService } = require('../../../src/services');
const { allSalesAndStatus } = require('../mocks/salesMocks');
const { salesModel } = require('../../../src/models');

const { expect } = chai;

describe('Testa camada Service de salesModel', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa func getAllSales', async function () {
    sinon.stub(salesModel, 'getAllSale').resolves(allSalesAndStatus);

    const { status, products } = await salesService.getAllSale();

    expect(status).to.be.deep.equal(allSalesAndStatus.status);
    expect(products.products).to.be.deep.equal(allSalesAndStatus.products);
  });
});