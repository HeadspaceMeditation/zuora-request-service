'use strict';

const axios = require('axios');
const get = require('lodash/get');
const has = require('lodash/has');
const config = require('../zoura-config');
const isObject = require('lodash/isObject');

/**
 * mergeOptions takes a requestOptions object and extra options and merges them together
 * if the extraOptions are an object.
 * @param  {[Object]} requestOptions request options object for nice-request.
 * @param  {[Object]} extraOptions   extra request options i.e queryStrings, body, maxTries etc.
 * @return {[Object]}                suitable object for making http requests from nice-request
 */
const mergeOptions = (requestOptions, extraOptions) => {
  return isObject(extraOptions)
    ? Object.assign(requestOptions, extraOptions)
    : requestOptions;
};

/**
 * Proxied Request gives zurora request service a central access point to axios.
 * Currently using this for binary file support (files API) but also is an
 * upgrade path to replace nice-request going forward
 *
 * @param  {[String]} method      HTTP request method, GET, POST, PUT, DELETE
 * @param  {[String]} path        URI for zuora API resource
 * @param  {[Object]} extraOptions extra request options https://github.com/axios/axios#request-config
 * @return {[Promise]}a fullfilled or rejected promise https://github.com/axios/axios#response-schema
 *
 * TODO Add retry support
 * TODO Intercept 200 responses where success is marked false and rethrow them
 * as errors
 */
module.exports = (method, path, extraOptions) =>
  axios(
    mergeOptions(
      {
        url: `${config.baseUrl()}/${path}`,
        method,
        headers: config.headers(),
      },
      extraOptions,
    ),
  );
