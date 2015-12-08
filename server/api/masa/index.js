'use strict';

var express = require('express');
var controller = require('./masa.controller');

var router = express.Router();

router.post('/', controller.index);
router.get('/ingreso/:id', controller.index);

module.exports = router;