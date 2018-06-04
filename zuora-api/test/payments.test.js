/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('payments', function() {
  let idStub;
  let requestStub;
  let payments;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'someValue'};

    payments = proxyquire('../payments', {
      './proxied-request': requestStub
    });
  });

  it('refundPayment calls proxy request with the correct paramaters', function() {
    payments.refundPayment(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'payments/1234/refunds', requestOptionsStub);
  });

  it('unapplyPayment calls proxy request with the correct paramaters', function() {
    payments.unapplyPayment(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'payments/1234/unapply', requestOptionsStub);
  });
});
