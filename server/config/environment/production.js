'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  database:{
            url:'https://dazzling-inferno-7243.firebaseio.com/',
            secret:'iRLoo2ZxJ0bomgGZk1fPSxPFHYqgCghpjMwcqnPE'
  }
};