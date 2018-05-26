/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../Controller/apiHome');
const stations = require('../Controller/stations');
const authpassengers = require('../Controller/auth/passenger')
const passengers = require('../Controller/passenger')
router.get('/', apiHome.getApi);

router.get('/stations', stations.getStations);

router.post('/auth/registerPassenger',authpassengers.registerPassenger);
router.post('/auth/loginPassenger',authpassengers.loginPassenger);

router.post('/passengers/api_key', passengers.getPassengerByApikey);

router.use(apiHome.invalidPath);
module.exports = router;
