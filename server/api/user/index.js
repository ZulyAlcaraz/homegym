'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.post('/update', controller.updateUser);
router.post('/get', controller.searchUser);
router.post('/searchProgressInfo',controller.searchProgressInfo);



module.exports = router;