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

export const createReservation = (API_KEY,TRIP_DATE,TRIP_START,TRIP_END,TRIP_TRAIN_ID, TOTAL_FARE) => {
  return axios.post(baseUrl + "/reservation/createReservation" ,{
      api_key : API_KEY,
      trip_date : TRIP_DATE,
      trip_start : TRIP_START,
      trip_end : TRIP_END,
      trip_train_id : TRIP_TRAIN_ID,
      totalFare : TOTAL_FARE
  })
  .then((response) => "Successful registration of a reservation" )
  .catch((response) => "There was an error in your reservation, please try again" )
}


export const getReservationsByPassengerId = (API_KEY) => {
  return axios.post(baseUrl + "/passengers/reservations/api_key" ,{
      api_key : API_KEY
  })
  .then((response) => response )
}