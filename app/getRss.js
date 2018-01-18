var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('passport');
var axios = require('axios');
var convert = require('xml-js');

router.get('/',function(req,res){
	axios.get(req.query.url)
	.then((response) => {
		var respJs = convert.xml2js(response.data, {
			compact: true, 
			spaces: '\t',
			alwaysArray: false
		});;
		var version = respJs._declaration._attributes.version;
		var feeds = [];
		var temp;
		respJs.rss.channel.item.forEach(item => {
			temp = {
				title: item.title._text,
				link: item.link._text,
				description: item.description._cdata,
				content: item['content:encoded']._cdata
			};
			feeds.push(temp);
		});
		res.send({version: version,feeds: feeds});
	}).catch((err) => {
		console.log(err);
	});
});

module.exports = router;






















// THIs IS THE END MY FRIEND