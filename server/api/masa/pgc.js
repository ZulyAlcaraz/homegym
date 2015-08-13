'use strict';

var express = require('express');
var controller = require('./pgc.controller');

var router = express.Router();

router.get('/pgc', controller.index);




module.exports = router;