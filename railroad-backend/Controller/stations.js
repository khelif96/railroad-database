/*jshint esversion: 6 */
var con = require('../Utils/db');

exports.getStations = (req, res) => {
  con.query('select * from stations',function(error,results,fields){
  if(error) res.status(500).json({error: "Database error"});
  res.json(results);
  })

};

exports.getStationsById = (req,res) => {
  if(req.params.id == undefined) res.status(400).json({error: "Missing url param"})
  var stationQuery = 'select * from stations where station_id = ' + req.params.id + ';'
  con.query(stationQuery,function(err,result){
    if(err) res.status(500).json({error: "Database error"});
    res.json(result);
  })
}
