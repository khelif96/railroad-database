/*jshint esversion: 6 */
var con = require('../Utils/db');

exports.getTrains = (req, res) => {
  con.query('select * from trains;',function(error,results,fields){
  if(error) res.status(500).json({error: "Database error"});
  res.json(results);
  })

};
