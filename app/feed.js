var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('passport');
var axios = require('axios');

router.get('/',function(req,res){
	res.send('fweep');
})

router.post('/',function(req,res){
	db.feed.create({
		userId: req.body.userId,
		feedName: req.body.feedName,
		feedUrl: req.body.feedUrl
	}).then(function(feed){
		res.send(feed);
		console.log("successfully created", feed)
	});
})

module.exports = router;






















// THIs IS THE END MY FRIEND