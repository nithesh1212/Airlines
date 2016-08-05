var express = require('express');
var router = express.Router();
var Store = require("jfs");
var db = new Store("data",{pretty:true});


router.get('/', function(req, res, next) {
	var obj = db.getSync("flight");
    //var query = req.params.query;
    //query = query.toLowerCase();
    var result = {
        "flight":[]
    };
    	obj.flight.map(function(flight){
    		//if(airport.name.toLowerCase().indexOf(query)> -1 || airport.city.toLowerCase().indexOf(query)>-1 || airport.countryname.toLowerCase().indexOf(query)>-1){
    		    result.flight.push(flight);
    		//}
    	});
    res.send(result);
});


	router.post('/book/ticket', function(req, res, next) {
	var payload = req.body
	var obj = db.getSync("book-a-flight");
	
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 4; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

	var result;
	  obj.flights.map(function(flight){
    		if(flight.id === payload.id){
    			flight.bookingId = 'AL'+text;
    			flight.bookedclass = payload.category;
    		    result = flight;
    		}
    	});
      
	  res.send(result);
});
	
	
module.exports = router;
