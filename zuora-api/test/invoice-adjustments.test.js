/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('invoiceAdjustments', function() {
  let idStub;
  let requestStub;
  let invoiceAdjustments;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {
        Amount: 9.99,
        InvoiceNumber: 'INV00000000',
        Type: 'Credit',
    };

    invoiceAdjustments = proxyquire('../invoice-adjustments', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    invoiceAdjustments.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'object/invoice-adjustment', requestOptionsStub);
  });
});
