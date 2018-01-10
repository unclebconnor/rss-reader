var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('passport');
var axios = require('axios');

router.get('/',function(req,res){
	console.log('#######GET FEED#######', req.query.userId);
	db.feed.findAll({
		where: {
			userId: req.query.userId
		}
	}).then(function(feeds){
		res.send(feeds);
	})
})

router.post('/',function(req,res){
	db.feed.create({
		userId: req.body.userId,
		feedName: req.body.feedName,
		feedUrl: req.body.feedUrl
	}).then(function(feed){
		db.feed.findAll({
			where: {
				userId: req.body.userId
			}
		}).then(function(feeds){
			res.send(feeds);
		})
	});
})

module.exports = router;






















// THIs IS THE END MY FRIEND