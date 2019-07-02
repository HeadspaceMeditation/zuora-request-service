/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('payments', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let payment;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    payment = proxyquire('../payments', {
      './proxied-request': requestStub
    });
  });

  it('find calls proxy request with the correct paramaters', function() {
    payment.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'payments/1234', requestOptionsStub);
  });
});
