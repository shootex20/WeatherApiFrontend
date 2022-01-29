import { WeatherData } from '../Models/WeatherModel';
const axios = require('axios');


export const fetchAddition = () => {
  axios.post(process.env.API_HOST + '/addition')
    .then(function (response: WeatherData) {
      return response;
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}