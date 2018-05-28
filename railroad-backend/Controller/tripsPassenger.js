/*jshint esversion: 6 */
var con = require('../Utils/db');

exports.getTripsPassenger = (req, res) => {
	if(req.body.passenger_id == undefined || req.body.passenger_id < 1) {
    res.status(400).json({error: "Missing or Incorrect field in request"})
  } else {
  	var passengerID = req.body.passenger_id;
  	con.query('select * from (select * from passengers where passengers.passenger_id = '+ passengerID +') as passengers, reservations,trips where passengers.passenger_id=reservations.paying_passenger_id && trips.reservation_id=reservations.reservation_id ;',function(error,results,fields){
  		if(error) res.status(500).json({error: "Database error"});

  		var trips = [];
  		
  		var rLen = results.length;
  		for (i = 0; i < rLen; i++) {
          console.log("i = " + i)
          console.log(results[i].TrainID);
          console.log(trains);
          
          trips.push({
            TripID: results[i].trip_id,
            TraipDate: results[i].trip_date,
            TripFare: results[i].fare,
            TripStart: results[i].trip_start,
            TripEnd: results[i].trip_end,
            TripTrainID: results[i].trip_train_id,
            Reservation_id: results[i].reservation_id
          });
        }
        res.json({trips});
  	})
  }
};

