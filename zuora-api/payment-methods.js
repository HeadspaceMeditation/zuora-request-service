'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://www.zuora.com/developer/api-reference/#operation/POST_PaymentMethods
  create_paypal: requestOptions => request('POST', 'payment-methods', requestOptions),

  // https://rest.zuora.com/v1/payment-methods/credit-cards
  create: requestOptions => request('POST', 'payment-methods/credit-cards', requestOptions),

  // https://www.zuora.com/developer/api-reference/#operation/POST_PaymentMethodsDecryption
  decryption: requestOptions => request('POST', 'payment-methods/decryption', requestOptions),

  // https://rest.zuora.com/v1/payment-methods/credit-cards/accounts/{account-key}
  find: (accountKey, requestOptions) => request('GET', `payment-methods/credit-cards/accounts/${accountKey}`, requestOptions),

  // https://rest.zuora.com/v1/payment-methods/credit-cards/{payment-method-id}
  update: (paymentMethodId, requestOptions) => request('PUT', `payment-methods/credit-cards/${paymentMethodId}`, requestOptions),

  // https://rest.zuora.com/v1/payment-methods/{payment-method-id}
  delete: (paymentMethodId, requestOptions) => request('DELETE', `payment-methods/${paymentMethodId}`, requestOptions)
};
