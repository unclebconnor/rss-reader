var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('passport');
var axios = require('axios');

router.get('/',function(req,res){
	res.send('fweep');
})

router.post('/',function(req,res){
	console.log('post route hit')
})

module.exports = router;






















// THIs IS THE END MY FRIEND