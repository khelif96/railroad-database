/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../Controller/apiHome');
const stations = require('../Controller/stations');
const passengers = require('../Controller/auth/passenger')
router.get('/', apiHome.getApi);

router.get('/stations', stations.getStations);

router.post('/auth/registerPassenger',passengers.registerPassenger);
router.post('/auth/loginPassenger',passengers.loginPassenger);


router.use(apiHome.invalidPath);
module.exports = router;
