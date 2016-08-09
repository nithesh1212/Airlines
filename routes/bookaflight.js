var express = require('express');
var router = express.Router();
var Store = require("jfs");
var db = new Store("data",{pretty:true});





	router.post('/', function(req, res, next) {
	var payload = req.body
	var obj = db.getSync("book-a-flight");
	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 4; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

	var result;
	  obj.flight.map(function(flight){
		  console.log(flight);
    		if(flight.id === payload.id){
    			flight.bookingId = 'KL'+text;
    			flight.bookedclass = payload.category;
				flight.adult = payload.adult;
				flight.child = payload.child;
				flight.dateofjourney =  payload.dateofjourney;
				var passengerdetails = {};
				passengerdetails.name = payload.passengerdetails.name;
				passengerdetails.email = payload.passengerdetails.email;
				passengerdetails.age = payload.passengerdetails.age;
				passengerdetails.address = payload.passengerdetails.address;
				passengerdetails.url = payload.passengerdetails.url;
				flight.passengerdetails = passengerdetails;
    		    result = flight;
    		}
    	});
      
	  res.send(result);
});
	

	7207155393
	
	
	
module.exports = router;
