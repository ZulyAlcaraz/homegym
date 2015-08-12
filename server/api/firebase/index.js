'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./firebase-controller');

router.get('/', controller.getFirebase);

module.exports = router;