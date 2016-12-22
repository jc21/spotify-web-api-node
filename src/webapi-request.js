'use strict';

var Request = require('./base-request');

var DEFAULT_HOST = 'api.spotify.com',
    DEFAULT_PORT = 443,
    DEFAULT_SCHEME = 'https';

module.exports.builder = function(proxy_uri) {
  return Request.builder()
      .withHost(DEFAULT_HOST)
      .withPort(DEFAULT_PORT)
      .withScheme(DEFAULT_SCHEME)
      .withProxy(proxy_uri || null);
};
