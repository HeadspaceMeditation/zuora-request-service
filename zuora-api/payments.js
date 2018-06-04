'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/payments/{paymentId}/refunds
  refundPayment: (paymentId, requestOptions) => request('POST', `payments/${paymentId}/refunds`, requestOptions),

  // https://rest.zuora.com/v1/payments/{paymentId}/unapply
  unapplyPayment: (paymentId, requestOptions) => request('PUT', `payments/${paymentId}/unapply`, requestOptions)
};
