/*jshint esversion: 6 */
var con = require('../Utils/db');

exports.getSchedule = (req,res) => {
  var getStopsAt = 'select * from stops_at limit 50';
  con.query(getStopsAt, function(error,results){
    res.json(results)
  })
}
