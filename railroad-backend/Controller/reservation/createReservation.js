/*jshint esversion: 6 */
var con = require('../../Utils/db');


exports.createReservation = (req,res) => {
  var api_key = req.body.api_key;
  var trip_date = req.body.trip_date;
  var trip_start = req.body.trip_start;
  var trip_end = req.body.trip_end;
  var trip_train_id = req.body.trip_train_id;
  var totalFare = req.body.totalFare
  if(api_key == undefined || trip_date == undefined || trip_start == undefined ||
  trip_end == undefined || trip_train_id == undefined || totalFare == undefined){
    res.status(400).json({error:"Missing params in request"})
  }else{
    var getPassengerByApikey = 'select fname, lname, email, preferred_billing_address, preferred_card_number, passenger_id from passengers where `api_key` = "' + api_key + '";';
    console.log(getPassengerByApikey)
    con.query(getPassengerByApikey, function(error,passenger,fields){
      if(error) res.status(500).json({error});
      console.log(passenger)
      var passenger = passenger[0];

      if(passenger.passenger_id == undefined){
        res.status(500).json({error: "Could not find passenger in db"})
      }else{
        var reservationDate = new Date();
        console.log(reservationDate)
      var createReservation = 'insert into reservations (reservation_date, paying_passenger_id,card_number, billing_address) values (' + `CURRENT_TIMESTAMP,"${passenger.passenger_id}","${passenger.preferred_card_number}","${passenger.preferred_billing_address}");`;
      con.query(createReservation,function(error,createReservationResponse,fields){
        if(error) res.status(500).json({error})

        var createTrip = 'insert into trips (trip_date,trip_start,trip_end,fare,trip_train_id,reservation_id) values (' + `"${trip_date}",${trip_start},${trip_end},${totalFare},${trip_train_id},${createReservationResponse.insertId});`;
        con.query(createTrip,function(error,createTripResponse,fields){
          if(error) res.status(500).json({error})
          res.json({createTripResponse});
        })
      })

    }
    })
  }
}
