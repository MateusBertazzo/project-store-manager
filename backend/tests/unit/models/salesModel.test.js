const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');

const { allSales, salesById } = require('../mocks/salesMocks');
const { salesModel } = require('../../../src/models');

describe('Testa camada model da salesModel', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testando func getAllSale', async function () {
    sinon.stub(connection, 'execute').resolves([[allSales]]);

    const result = await salesModel.getAllSale();

    expect(result).to.be.deep.equal([allSales]);
  });

  it('Testando func getByIdSale', async function () {
    sinon.stub(connection, 'execute').resolves([salesById]);

    const id = 1;
    const result = await salesModel.getByIdSale(id);

    expect(result).to.be.deep.equal(salesById);
  });
});