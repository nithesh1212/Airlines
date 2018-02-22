var express = require('express');
var router = express.Router();
var Store = require("jfs");
var rp = require('request-promise');

/* GET users listing. */
router.get('/', function(req, res, next) {
	
var options = {
		method: 'POST',
		uri: 'https://api.ciscospark.com/v1/memberships',
		headers: {
				'Content-Type': 'application/json',
				'Authorization' : 'Bearer MDM1NDBmNDYtYWE2Yi00OWJiLTg2ZmEtM2JjM2JjNzBkMjFhMjExZWQ5Y2ItMWQ3'
		},
		body: {
				"roomId": "Y2lzY29zcGFyazovL3VzL1JPT00vODgwNjBjYTAtMTE2Zi0xMWU4LTg1MzUtZTMzYzc2NWY0YTVl",
				"personEmail": "vemachir@cisco.com",
				"isModerator": false
		},
		json: true // Automatically stringifies the body to JSON
	};
 
	rp(options)
    .then(function (parsedBody) {
       res.send("It seems you got bored with me, anyway I'm going to connect you to Doc Central Support group in spark. :)");
    })
    .catch(function (err) {
       res.send("Thanks for talking to me !!! It seems you already part of Doc Central Support spark group hope someone can help you there.");
	  // res.send(err);
    });
	

});

module.exports = router;
