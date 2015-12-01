'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.post('/update', controller.updateUser);
router.post('/searchProgressInfo',controller.searchProgressInfo);
router.post('/get', controller.searchUser);
router.post('/logout', controller.logout);

module.exports = router;