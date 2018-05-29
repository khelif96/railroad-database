import axios from 'axios';
import {baseUrl} from './baseUrl';

export {getSchedule}
function getSchedule(){
  return axios.get(baseUrl + '/schedule')
}
