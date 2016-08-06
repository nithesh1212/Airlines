var express = require('express');
var router = express.Router();
var Store = require("jfs");
var db = new Store("data",{pretty:true});





	router.post('/', function(req, res, next) {
	var payload = req.body
	var obj = db.getSync("book-a-flight");
	
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 4; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

	var result;
	  obj.flight.map(function(flight){
    		if(flight.id === payload.id){
    			flight.bookingId = 'KL'+text;
    			flight.bookedclass = payload.category;
				flight.adult = payload.adult;
				flight.child = payload.child;
				flight.dateofjourney =  payload.dateofjourney
    		    result = flight;
    		}
    	});
      
	  res.send(result);
});
	
	
module.exports = router;
