var Hapi      = require('hapi');
var logger    = require('./modules/logger.js');

var opt =   {
    state: {
      cookies: {
        strictHeader: false
      }
    }
  };

var server = module.exports = new Hapi.Server(process.env.PORT || 8080, opt);
// server.settings.state.strictHeader = false;
require('./routes');

server.start(function () {
  logger.info('Server started at ' + server.info.uri);
});


