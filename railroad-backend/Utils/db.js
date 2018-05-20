require('dotenv').config(); // Library to allow the importing of  enviromental variables in .env files
var mysql = require('mysql');

// If the Node process ends, close the mysql connection
process.on('SIGINT', function() {
if(con == undefined){
  console.log("SIGNIT recieved Process Closing");
  process.exit(0);
}else{
  con.end(function (err) {
    console.log('mysql default connection disconnected through app termination');
    process.exit(0);
  });
}
});

if(process.env.host == undefined || process.env.user == undefined || process.env.password == undefined){
  console.error("Could not find all the required enviromental variables");
  console.error("Did you create the .env file?");
  process.exit(1);
}else{
  console.log("Trying to connect to database")
  var con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  });

  con.connect(function(err){
    if(err){
      console.log('ERROR Connecting to DB');
      console.log(err);
      con.end();
      process.exit(1);
    };
    console.log("Connected To Database with connection id " + con.threadId);

  })
  }

module.exports = con;
