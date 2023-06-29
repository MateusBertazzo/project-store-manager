const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');

const { allSales } = require('../mocks/salesMocks');
const { salesModel } = require('../../../src/models');

describe('Testa camada model da salesModel', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testando func getAllSales da camada Model', async function () {
    sinon.stub(connection, 'execute').resolves([[allSales]]);

    const result = await salesModel.getAllSale();

    expect(result).to.be.deep.equal([allSales]);
  });
});