'use strict';

const request = require('./proxied-request-axios');

module.exports = {
  // https://rest.zuora.com/v1/files/{file-id}
  find: (fileId, requestOptions) =>
    request(
      'GET',
      `files/${fileId}`,
      Object.assign({responseType: 'stream'}, requestOptions),
    ),
};
