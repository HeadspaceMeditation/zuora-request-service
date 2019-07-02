'use strict';

const request = require('./proxied-request');

module.exports = {
  // https://rest.zuora.com/v1/payments/{paymentId}
  find: (paymentId, requestOptions) => request('GET', `payments/${paymentId}`, requestOptions),
};
