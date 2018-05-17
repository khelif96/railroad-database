/*jshint esversion: 6 */
var con = require('../Utils/db');

exports.getStations = (req, res) => {
  con.query('select * from stations',function(error,results,fields){
  if(error) res.status(500).json({error: "Database error"});
  res.json(results);
  })
  
};
