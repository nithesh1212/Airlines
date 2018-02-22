var express = require('express');
var router = express.Router();
var Store = require("jfs");
var rp = require('request-promise');

/* GET users listing. */
router.post('/', function(req, res, next) {


	
var options = {
		method: 'POST',
		uri: 'https://dev28393.service-now.com/api/now/table/incident',
		headers: {
				'Content-Type': 'application/json',
				'Authorization' : 'Basic YWRtaW46QWRtaW4xMjMk'
		},
		body: {
					"description":req.body.description,
					"short_description":req.body.short_description,
					
		},
		json: true // Automatically stringifies the body to JSON
	};
 
	rp(options)
    .then(function (parsedBody) {

    	res.send(parsedBody);
       //res.send("It seems you got bored with me, anyway I'm going to connect you to Doc Central Support group in spark. :)");
    })
    .catch(function (err) {
       //res.send("Thanks for talking to me !!! It seems you already part of Doc Central Support spark group hope someone can help you there.");
	   res.send(err);
    });
	

});

module.exports = router;
