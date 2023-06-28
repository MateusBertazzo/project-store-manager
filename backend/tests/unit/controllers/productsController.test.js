// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

// const { expect } = chai;
// chai.use(sinonChai);

// const { allProducts } = require('../mocks/modelMocks');
// const { productsService } = require('../../../src/services');
// const { productsController } = require('../../../src/controllers');

// describe('testando productsService da camada Controller', function () {
//   const req = {};
//   const res = {};
//   // TIRADO DA MONITORIA DA TURMA 28 TRIBO B MENTORIA DE TESTES
//   beforeEach(function () {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns(res);
//   });

//   afterEach(function () {
//     sinon.restore();
//   });

//   it('testando retorno da func getAll camada controller', async function () {
//     // arrange
//     sinon.stub(productsService, 'getAll').resolves({ status: 'SUCCESFUL', message: allProducts });
//     // act
//     await productsController.getAll(req, res);
//     // asser
//     expect(res.status).to.have.been.calledWith(200);
//     expect(res.json).to.have.been.calledWithExactly();
//   });
// });