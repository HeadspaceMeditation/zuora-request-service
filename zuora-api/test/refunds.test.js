/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('refunds', function() {
  let idStub;
  let requestStub;
  let refunds;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {
        PaymentId: 'paymentId',
        Type: 'Electronic',
        Amount: 12,
    };

    refunds = proxyquire('../refunds', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    refunds.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'object/refund', requestOptionsStub);
  });

  it('getRefunds calls proxy request is called correctly', function() {
    refunds.getRefunds();
    expect(requestStub).to.have.been.calledWithExactly('GET', 'refunds');
  });
});
