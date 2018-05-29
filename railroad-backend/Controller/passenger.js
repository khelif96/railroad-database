/*jshint esversion: 6 */
var con = require('../Utils/db');

exports.getPassengerByApikey = (req, res) => {
  if(req.body.api_key == undefined) {
    res.status(400).json({error: "Missing api_key in request"})
  } else{
  con.query('select fname, lname, email, preferred_billing_address, preferred_card_number, passenger_id from passengers where api_key = "' + req.body.api_key + '";',function(error,results,fields){
  if(error) res.status(500).json({error: "Database error"});
  res.json(results);
  })
}

};

exports.getReservationsByPassengerId = (req,res) => {
  if(req.body.passenger_id == undefined){
    res.status(400).json({error: "Missing passenger_id in request"})
  }else{
    var paying_passenger_id  = req.body.passenger_id;
    let sqlStatement = 'select * from reservations where paying_passenger_id = ' + paying_passenger_id + ';'
    con.query(sqlStatement,function(error,results,fields){
      if(error) res.status(500).json({error: "Database error"})
      res.json(results);
    })
  }
}

exports.getReservationsByApi_key = (req,res) => {
  if(req.body.api_key == undefined){
    res.status(400).json({error: "Missing passenger_id in request"})
  }else{
    var api_key  = req.body.api_key;
    let sqlStatement = `select trips.trip_id, reservations.reservation_date,trips.trip_start,trips.trip_end,trips.trip_date,trips.fare from reservations
    join passengers on passengers.passenger_id = reservations.paying_passenger_id
    join trips on trips.reservation_id = reservations.reservation_id
    where passengers.api_key = "${api_key}";`;
    con.query(sqlStatement,function(error,results,fields){
      if(error) res.status(500).json({error: "Database error"})
      res.json(results);
    })
  }
}

// select trips.trip_id, reservations.reservation_date,trips.trip_start,trips.trip_end,trips.trip_date,trips.fare from reservations
// join passengers on passengers.passenger_id = reservations.paying_passenger_id
// join trips on trips.reservation_id = reservations.reservation_id
// where passengers.api_key = '101f926a9f243da3' ;
