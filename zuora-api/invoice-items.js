'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://www.zuora.com/developer/api-reference/#operation/GET_InvoiceItems
  find: (invoiceId, requestOptions) => request('GET', `invoices/${invoiceId}/items`, requestOptions),

};
