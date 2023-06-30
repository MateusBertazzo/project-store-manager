const sinon = require('sinon');
const { expect } = require('chai');

const { productsModel } = require('../../../src/models');
const { allProducts } = require('../mocks/modelMocks');
const connection = require('../../../src/models/connection');
const { validateName } = require('../../../src/middlewares/validateFields');

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

  it('testando se name possui o minimo de caracteres exigidos', async function () {
    const req = {
      body: { name: 'test name' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();

    validateName(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('testando se o campo "name" não foi passado', async function () {
    const req = {
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();

    validateName(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });

  it('testando se name não possui o minimo de caracteres exigidos', async function () {
    const req = {
      body: { name: 'te' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const next = sinon.stub().returns();

    validateName(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
  });

  it('testando a func updateProduct', async function () {
    sinon.stub(connection, 'execute').resolves();

    const result = await productsModel.updateProduct('Mateus', 1);

    expect((result)).to.be.deep.equal({ name: 'Mateus', id: 1 });
  });

  it('testando a func insertProduct', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const result = await productsModel.insertProduct('cafeteira');

    const cafeteira = {
      id: 1,
      name: 'cafeteira',
    };

    expect(result).to.be.deep.equal(cafeteira);
  });

  it('testando a func de deleteProductId', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await productsModel.deleteProductId(1);

    expect(result).to.be.deep.equal({ affectedRows: 1 });
  });
});