var express = require('express');
var router = express.Router();
var Store = require("jfs");
var rp = require('request-promise');

/* GET users listing. */
router.post('/', function(req, res, next) {
	
	
	var nodePath = req.body.nodePath;
	
	
	
var options = {
		method: 'GET',
		//uri: 'http://alfcms-app-stg-01:8080/alfresco/service/dcl/permissions/view?nodeId=workspace://SpacesStore/eb4ee8e6-020e-4383-b3f1-2554ba35d4bc',
		uri: 'http://alfcms-app-stg-01:8080/alfresco/service/dcl/permissions/view?nodeId=workspace://SpacesStore/'+nodePath,
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
