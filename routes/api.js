var express = require('express');
var router = express.Router();
var Store = require("jfs");
var rp = require('request-promise');

/* GET document listing. */
router.get('/', function(req, res) {
	
     res.status(200).send(
		{
				"docname" : "Test Bot Doc",
				"createdby" : "vemachir",
				"createddate" : "2018-03-01",
				"lastupdated" : "2018-03-16",
				"docId" : "ec-12345",
				"lastupdatedby" : "vemachi",
				"authorizedusers" : [
					{
						"name" : "user1",
						"mode" :"view only"
					},
					{
						"name" : "user2",
						"mode" : "can edit"
					},
					{
						"name" : "user3",
						"mode" : "can edit"
					}
					
					
				]
		} 
	);
	

});

module.exports = router;
