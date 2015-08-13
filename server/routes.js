/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
<<<<<<< HEAD
  app.use('/api/masa', require('./api/masa'));
=======
  app.use('/api/masas', require('./api/masa'));
  app.use('/api/firebase', require('./api/firebase'));
>>>>>>> 9ea5c6ba4c4bd8a1d41bc15d1c121e59e89ea2dd
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
