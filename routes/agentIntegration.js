var express = require('express');
var router = express.Router();
var Store = require("jfs");
var rp = require('request-promise');

/* GET users listing. */
router.post('/', function(req, res, next) {
	
	
	//var nodePath = req.body.nodePath;
	
	
	
var options = {
		method: 'GET',
		//uri: 'http://alfcms-app-stg-01:8080/alfresco/service/dcl/permissions/view?nodeId=workspace://SpacesStore/eb4ee8e6-020e-4383-b3f1-2554ba35d4bc',
		uri: 'https://api.ciscospark.com/v1/memberships',
		headers: {
				'content-type'  : 'application/json',
				'Authorization' : 'Bearer MTllZTIwYjAtMGY2ZS00OTJhLWFkMGYtODI2NTIxYjc1NjA4YjE1NmU3NzEtYmUx'
		},
		body: {
        		
	"roomId": "Y2lzY29zcGFyazovL3VzL1JPT00vMzlhYTMzNzAtM2VkMi0xMWU4LWE5ODItNzc3MDUyOWUxN2Jk",
	"personEmail": "vmasakat@cisco.com",
	"isModerator": false

    		},
		
		json: true // Automatically stringifies the body to JSON
	};
	

 
	rp(options)
    .then(function (parsedBody) {
		
     var output = JSON.stringify(parsedbody);
     res.send(JSON.stringify({ 'speech': 'speech', 'displayText': 'You have been added to the space' }));
    
    })
    .catch(function (err) {
		 var error = JSON.stringify(err);
	  res.send(JSON.stringify({ 'speech': error, 'displayText': 'Adding to space failed' }));
	 
    });
	

});

module.exports = router;
