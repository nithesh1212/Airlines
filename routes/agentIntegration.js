var express = require('express');
var router = express.Router();
var Store = require("jfs");
var rp = require('request-promise');

/* GET users listing. */
router.post('/', function(req, res, next) {
	
	
	var nodePath = req.body.nodePath;
	
	
	
var options = {
		method: 'GET',
		uri: 'http://alfcms-app-stg-01:8080/alfresco/service/dcl/permissions/view?'+nodePath,
		headers: {
				
				'Authorization' : 'Basic YWxmY21hZG06YWxmY21hZG1Ab2N0MTQ='
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
