import axios from 'axios';
import {baseUrl} from './baseUrl';

export const registerPassenger = (FNAME,LNAME,EMAIL,PASSWORD,PREFFERED_CARD_NUMBER,PREFFERED_BILLING_ADDRESS) => {
  return axios.post(baseUrl+"/auth/registerPassenger",{
        fname : FNAME,
        lname : LNAME,
        email : EMAIL,
        password : PASSWORD,
        preferred_card_number : PREFFERED_CARD_NUMBER,
        preferred_billing_address : PREFFERED_BILLING_ADDRESS,
  })
  .then((response) => JSON.stringify(response.data.api_key))

}
export const loginPassenger = (EMAIL,PASSWORD) => {
  return axios.post(baseUrl+"/auth/loginPassenger",{
        email : EMAIL,
        password : PASSWORD
  })
  .then((response) => JSON.stringify(response.data.api_key))
}

export const getPassengerInfo = (API_KEY) => {
  return axios.post(baseUrl+"/passengers/api_key",{
        api_key : API_KEY
  })
  .then((response) => response.data )
}
