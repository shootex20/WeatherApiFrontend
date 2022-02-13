import { WeatherModel, WeatherDataList } from "../Models/WeatherModel";
const axios = require("axios");

// export const fetchSingleDay = (
//   lat: string,
//   lon: string,
//   metric: string
// ): Promise<WeatherModel> => {
//   return axios
//     .get(
//       process.env.REACT_APP_API_HOST +
//         "/api/weather?lat=" +
//         lat +
//         "&lon=" +
//         lon +
//         "&units=" +
//         metric
//     )
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error: any) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {});
// };

export const fetchSingleDay = (
  lat: string,
  lon: string,
  metric: string
): Promise<WeatherModel> => {
  return axios
    .get(
      process.env.REACT_APP_API_HOST +
        "/api/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=" +
        metric
    )
    .then((response) => {
      return response.data;
    })
    .catch(() => undefined);
};

export const fetchMultiDay = (lat: string, lon: string, metric: string) => {
  axios
    .get(
      process.env.REACT_APP_API_HOST +
        "/api/fivedayweather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=" +
        metric
    )
    .then(function (response: WeatherDataList) {
      return response;
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .then(function () {});
};
