module.exports = function(opts) {
  opts = opts || {};

  var _example = {
    well_known_version: "1.0.0",
    oada_base_uri: "https://oada.example.com",
    authorization_endpoint: "https://oada.example.com/auth",
    token_endpoint: "https://oada.example.com/token",
    registration_endpoint: "https://oada.example.com/register",
    token_endpoint_auth_signing_alg_values_supported: [ "RS256" ],
    client_secret_alg_supported: [ "RS256" ],
    scopes_supported: [
      { name: "oada.all.1", 'read+write': true },
    ],
  };

  for (var i in opts) { 
    if (_example[i]) _example[i] = opts[i]; // override any keys with value in opts:
  }       
  return _example;
};
