try{
  var express = require('express'); // Call express
  var bodyParser = require('body-parser'); // Middle wear to parse Request Bodies
  require('dotenv').config(); // Library to allow the importing of  enviromental variables in .env files
  var cors = require('cors');
  var mysql = require('mysql');
}catch(error){
  console.error("ERROR are all the Dependencies installed?");
  console.log(error);
  process.exit(1);
}

  var port = 3001;

  var app = express(); // Define our app

  app.use(cors());
  // Configure app to use bodyParser()
  // This will let us get data from a POST
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

  // ROUTES FOR API
  // ===============================================
  var apiRouter = require('./Routes/api');

  app.use('/api', apiRouter);

app.listen(port);
console.log("railroad-api listening on port " + port);
