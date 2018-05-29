import axios from 'axios';
import {baseUrl} from './baseUrl';

export {getStations}
function getStations(){
  return axios.get(baseUrl + '/stations');
}

export const getStaionByID = (ID) => {
  return axios.get(baseUrl + '/stations/' + ID)
}