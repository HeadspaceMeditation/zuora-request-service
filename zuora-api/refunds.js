'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://www.zuora.com/developer/api-reference/#operation/Object_POSTRefund
  create: (requestOptions) => request('POST', `object/refund`, requestOptions),

  // https://www.zuora.com/developer/api-reference/#operation/GET_Refunds
  getRefunds: () => request('GET', `object/refunds`),
};
