'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.post('/update', controller.updateUser);

router.post('/searchRoutineMonth',controller.searchRoutineMonth);

router.post('/get', controller.searchUser);



router.post('/logOut', controller.logOut);


module.exports = router;