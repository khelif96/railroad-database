import axios from 'axios';
const baseUrl = "http://localhost:3001/api";

export const registerPassenger = (FNAME,LNAME,EMAIL,PASSWORD,PREFFERED_CARD_NUMBER,PREFFERED_BILLING_ADDRESS) => {
  return axios.post(baseUrl+"/auth/registerPassenger",{
        fname : FNAME,
        lname : LNAME,
        email : EMAIL,
        password : PASSWORD,
        preferred_card_number : PREFFERED_CARD_NUMBER,
        preferred_billing_address : PREFFERED_BILLING_ADDRESS,
  })
  .then((response) => console.log(JSON.stringify(response.data.api_key) ))
  
}
export const loginPassenger = (EMAIL,PASSWORD) => {
  return axios.post(baseUrl+"/auth/loginPassenger",{
        email : EMAIL,
        password : PASSWORD
  })
  .then((response) => console.log(JSON.stringify(response.data.api_key) ))
}