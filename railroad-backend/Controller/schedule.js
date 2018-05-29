/*jshint esversion: 6 */
var con = require('../Utils/db');

exports.getSchedule = (req,res) => {
  var getStopsAt = 'select * from stops_at;';
  con.query(getStopsAt, function(error,results){
    if(error) res.status(500).json({error})
    console.log("Get over here");
    var response = [];
    for(var i = 0; i<28; i++){
      response.push([])
    }
    console.log(response.length)
    console.log(response[0]);
    for(var i = 0; i <results.length; i++){
      try{
      response[results[i].train_id-1].push(results[i])
    }catch(error){
      console.log("ERROR " +i + " "  + error)
    }
    }
    res.json(response)
  })
}
