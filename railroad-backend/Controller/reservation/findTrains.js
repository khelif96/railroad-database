/*jshint esversion: 6 */
var con = require('../../Utils/db');

exports.findTrains = (req, res) => {
  if(req.body.origin == undefined || req.body.origin < 1 || req.body.destination == undefined || req.body.destination < 1
    || req.body.train_days == undefined || req.body.train_days < 0 || req.body.train_days > 6) {
    res.status(400).json({error: "Missing or Incorrect field in request"})
  } else{
    var origin = req.body.origin;
    var destination = req.body.destination;
    var train_days = req.body.train_days;
    var trains = [];

    if(origin < destination) { // If we are going south bound
      con.query('select trains.train_id as TrainID, time_in from trains, stops_at where trains.train_id = stops_at.train_id && (station_id = '+ origin +' OR station_id = '+ destination +') && train_days='+ train_days +' && train_direction = 0 order by trains.train_id, time_in;',function(error,results,fields){
        rLen = results.length;
        for (i = 0; i < rLen; i+=2) {
          console.log("i = " + i)
          console.log(results[i].TrainID);
          console.log(trains);
          
          trains.push({
            TrainID:   results[i].TrainID,
            Departure: results[i].time_in,
            Arrival:   results[i+1].time_in
          });
        }
        res.json({trains});
      })
    }else if(origin > destination){
      con.query('select trains.train_id as TrainID, time_in from trains, stops_at where trains.train_id = stops_at.train_id && (station_id = '+ origin +' OR station_id = '+ destination +') && train_days='+ train_days +' && train_direction = 1 order by trains.train_id, time_in;',function(error,results,fields){
        rLen = results.length;
        for (i = 0; i < rLen; i+=2) {
          console.log("i = " + i)
          console.log(results[i].TrainID);
          console.log(trains);
          
          trains.push({
            TrainID:   results[i].TrainID,
            Departure: results[i].time_in,
            Arrival:   results[i+1].time_in
          });
        }
      res.json({trains});
      })
    }
  }
};
