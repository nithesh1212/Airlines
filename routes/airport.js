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
				'Authorization' : 'Bearer OTI1ZWMwNjQtOTBlOS00NGUzLWFiYWMtYjI1ZWFhNzZiZWY0NGVjNTQyMmUtNjFi'
		},
		body: {
				"roomId": "Y2lzY29zcGFyazovL3VzL1JPT00vMWRmNTNlNjAtMTE0NC0xMWU4LThjMTAtMTNjMDRhYWE1YTk3",
				"personEmail": "vmasakat@cisco.com",
				"isModerator": false
		},
		json: true // Automatically stringifies the body to JSON
	};
 
	rp(options)
    .then(function (parsedBody) {
       res.send("Thanks for talking to me !!! You have have been added to Doc Central Support group in spark. :)");
    })
    .catch(function (err) {
       res.send("Thanks for talking to me !!! It seems you already part of Doc Central Support spark group hope someone can help you there.");
    });
	

});

module.exports = router;
