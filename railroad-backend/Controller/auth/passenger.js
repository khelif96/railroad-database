/*jshint esversion: 6 */
var con = require('../../Utils/db');

exports.registerPassenger = (req, res) => {
  if(req.body.fname == undefined || req.body.lname == undefined
    || req.body.email == undefined || req.body.password == undefined
    || req.body.preferred_card_number == undefined || req.body.preferred_billing_address == undefined ){
      res.json({error: "Missing required field in request"});
    }else{
    var registerPassengerSql = 'insert into passengers (fname,lname,email,password,preferred_card_number,preferred_billing_address) values '
     + '("' + req.body.fname + '","' + req.body.lname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.preferred_card_number + '","' + req.body.preferred_billing_address + '");';
  con.query(registerPassengerSql,function(error,results,fields){
  if(error) res.status(500).json({error: error.code , message : "Database error"});
  res.json(results);
  })
}

};
