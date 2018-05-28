/*jshint esversion: 6 */
var con = require('../../Utils/db');

exports.calculateReservation = (req, res) => {
  if(req.body.origin == undefined || req.body.origin < 1 || req.body.destination == undefined || req.body.destination < 1) {
    res.status(400).json({error: "Missing or Incorrect field in request"})
  } else{
    var origin = req.body.origin;
    var destination = req.body.destination;
  con.query('select * from segments;',function(error,results,fields){
  if(error) res.status(500).json({error: "Database error"});
  var totalFare = 0;
  var stops = []
  stops.push(origin);
  if(origin < destination) { // If we are going south bound
    console.log("Going South Bound");
    console.log("Destination " + destination + " Origin " + origin)

    for(let i = origin-1; i<destination-1; i++){
      console.log("i = " + i)
      console.log(results[i]);
      stops.push(results[i].seg_s_end);
      totalFare += results[i].seg_fare;
    }

  }else if(origin > destination){ // If we are going north bound
    console.log("Going North bound")
    console.log("Destination " + destination + " Origin " + origin)
    for(let i = origin-2; i>destination-2; i--){
      console.log("i = " + i)
      console.log(results[i]);
      stops.push(results[i].seg_n_end);
      totalFare += results[i].seg_fare;
    }
  }
  res.json({totalFare,stops});
  })
}

};
