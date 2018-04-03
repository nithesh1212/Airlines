var express = require('express');
var router = express.Router();
var Store = require("jfs");
var rp = require('request-promise');

/* GET users listing. */
router.post('/', function(req, res, next) {
	
	
	var email = req.body.email;
	
	
	
var options = {

		method: 'POST',
		uri: 'https://api.ciscospark.com/v1/memberships',
		headers: {

				'Content-type'	: 'application/json',				
				'Authorization' : 'Bearer MDM1NDBmNDYtYWE2Yi00OWJiLTg2ZmEtM2JjM2JjNzBkMjFhMjExZWQ5Y2ItMWQ3'
		},

		body : {

				'roomId': 'Y2lzY29zcGFyazovL3VzL1JPT00vMzQ4ODY1YTAtMzY1ZS0xMWU4LWI4YjgtZDdlMjY2ZGEzOTRm',
				'personEmail': email,
				'isModerator': false
		},
		
		json: true // Automatically stringifies the body to JSON
	};
	

 
	rp(options)
    .then(function (parsedBody) {
       res.send(parsedBody);
    })
    .catch(function (err) {
	  res.send(err);
	 
    });
	

});

module.exports = router;
