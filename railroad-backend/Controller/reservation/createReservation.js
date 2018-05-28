/*jshint esversion: 6 */
var con = require('../../Utils/db');

exports.createReservation = (req,res) => {
  var api_key = req.body.api_key;
  var trip_date = req.body.trip_date;
  var trip_seg_start = req.body.trip_seg_start;
  var trip_seg_ends = req.body.trip_seg_ends;
  var trip_train_id = req.body.trip_train_id;
  if(api_key == undefined || trip_date == undefined || trip_seg_start == undefined ||
  trip_seg_ends == undefined || trip_train_id == undefined){
    res.status(400).json({error:"Missing params in request"})
  }else{
    var getPassengerByApikey = 'select fname, lname, email, preferred_billing_address, preferred_card_number, passenger_id from passengers where api_key = "' + api_key + '";';
    con.query(getPassengerByApikey, function(error,passenger,fields){
      if(error) res.status(500).json({error});
      var passenger = passenger[0];
      var createReservation = 'insert into reservations (reservation_date, paying_passengar_id,card_number, billing_address) values (' + `"${api_key}","${passenger.passenger_id}","${passenger.preferred_card_number}","${passenger.preferred_billing_address}");`;
      con.query(createReservation,function(error,response,fields){
        if(error) res.status(500).json({error})
        res.send(response)
      })
    })
  }
}
