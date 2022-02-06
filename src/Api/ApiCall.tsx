import { WeatherData } from '../Models/WeatherModel';
const axios = require('axios');


export const fetchAddition = (city: string, metric: string) => {
  axios.get(process.env.REACT_APP_API_HOST+ "/api/weather?city="+city+"&units="+metric)
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