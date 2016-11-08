'use strict';

const nice = require('nice-request');

module.exports = (headers, baseUrl, id) => {
  const requestOptions = {
    url: `${baseUrl}object/product/${id}`,
    method: 'GET',
    metricTag: 'product'
  };

  return nice.request(Object.assign(requestOptions, {headers}));
};
