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
      con.query('select * from trains where train_direction=0;',function(error,results,fields){
        rLen = results.length;
        for (i = 0; i < rLen; i++) {
          console.log("i = " + i)
          console.log(results[i].train_id);
          console.log(trains);
          if(results[i].train_days == train_days && results[i].train_n_end <= origin && results[i].train_s_end >= destination)
            trains.push(results[i].train_id);
        }
        res.json({trains});
      })
    }else if(origin > destination){
      con.query('select * from trains where train_direction=1;',function(error,results,fields){
        rLen = results.length;
        for (i = 0; i < rLen; i++) {
          console.log("i = " + i)
          console.log(results[i].train_id);
          console.log(trains);
          if(results[i].train_days == train_days && results[i].train_s_end >= origin && results[i].train_n_end <= destination)
            trains.push(results[i].train_id);
        }
      res.json({trains});
      })
    }
  }
};
