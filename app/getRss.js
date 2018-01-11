var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('passport');
var axios = require('axios');

router.get('/',function(req,res){
	axios.get(req.query.url)
	.then((response) => {
		res.send(response.data);
	}).catch((err) => {
		cosole.log(err);
	});
});

module.exports = router;






















// THIs IS THE END MY FRIEND