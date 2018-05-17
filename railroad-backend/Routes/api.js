/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../Controller/apiHome');
const stations = require('../Controller/stations');

router.get('/', apiHome.getApi);

router.get('/stations', stations.getStations);



router.use(apiHome.invalidPath);
module.exports = router;
