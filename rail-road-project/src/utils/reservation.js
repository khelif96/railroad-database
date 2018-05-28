import axios from 'axios';
import {baseUrl} from './baseUrl';


export {getTrains}
function getTrains(origin,destination,train_days){
  return axios.post(baseUrl+'/reservation/findTrains',{
    origin : origin,
    destination : destination,
    train_days : train_days
  })
}

export {calculateReservation}
function calculateReservation(origin,destination){
  return axios.post(baseUrl + '/reservation/calculateReservation',{
    origin: origin,
    destination: destination
  })
}

export {getStations}
function getStations() {
  return axios.get(baseUrl+'/stations')
}
