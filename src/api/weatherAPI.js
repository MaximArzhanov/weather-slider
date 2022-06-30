import * as axios from "axios";
const { REACT_APP_BASE_URL_WEATHER_API, REACT_APP_API_KEY } = process.env;

const instance = axios.create({
  withCredentials: false,
  baseURL: REACT_APP_BASE_URL_WEATHER_API,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
});

export const weatherAPI = {

  getCurrentWeather(cityName) {
    return instance.get('/current.json', {
      params: {
        key: REACT_APP_API_KEY,
        q: cityName,
        lang: 'ru'
      }
    })
      .then((response) => { return response.data });
  },

  getHistoryWeather(cityName, date) {
    return instance.get('/history.json', {
      params: {
        key: REACT_APP_API_KEY,
        q: cityName,
        lang: 'ru',
        dt: date
      }
    })
      .then((response) => { return response.data });
  },

}
