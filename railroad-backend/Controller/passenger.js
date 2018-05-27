/*jshint esversion: 6 */
var con = require('../Utils/db');

exports.getPassengerByApikey = (req, res) => {
  if(req.body.api_key == undefined) {
    res.status(400).json({error: "Missing api_key in request"})
  } else{
  con.query('select fname, lname, email,passenger_id from passengers where api_key = "' + req.body.api_key + '";',function(error,results,fields){
  if(error) res.status(500).json({error: "Database error"});
  res.json(results);
  })
}

};
