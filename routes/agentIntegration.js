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
		uri: 'https://api.ciscospark.com/v1/rooms',
		headers: {
				'content-type'  : 'application/json',
				'Authorization' : 'Bearer MTllZTIwYjAtMGY2ZS00OTJhLWFkMGYtODI2NTIxYjc1NjA4YjE1NmU3NzEtYmUx'
		},
		
		json: true // Automatically stringifies the body to JSON
	};
	

 
	rp(options)
    .then(function (parsedBody) {
      res.send(JSON.stringify({ 'speech': 'This is for speech', 'displayText': parsedBody }));
    
    })
    .catch(function (err) {
	  res.send(JSON.stringify({ 'speech': error, 'displayText': error }));
	 
    });
	

});

module.exports = router;
