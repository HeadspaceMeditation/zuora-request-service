
/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('journal runs', function() {
  let requestOptionsStub;
  let requestStub;
  let invoiceItems;
  let idStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = { value: 'somevalue' };
    idStub = 1234; // eslint-disable-line no-magic-numbers

    invoiceItems = proxyquire('../invoice-items', {
      './proxied-request': requestStub
    });
  });

  it('find calls proxy request with the correct paramaters', function() {
    invoiceItems.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'invoices/1234/items', requestOptionsStub);
  });
});
