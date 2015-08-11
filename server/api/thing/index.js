'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
/*router.get('/masa',function (req, res){
	res.send('root');
	console.log('Accessing the secret section ...');
});*/



module.exports = router;