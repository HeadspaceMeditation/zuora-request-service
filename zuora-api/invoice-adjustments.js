'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://www.zuora.com/developer/api-reference/#operation/Object_POSTInvoiceAdjustment
  create: (requestOptions) => request('POST', `object/invoice-adjustment`, requestOptions),
};
