import * as axios from "axios";

const API_KEY = '11a4ada72f2e45f2bf065312222106';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://api.weatherapi.com/v1',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
});

export const weatherAPI = {

  getCurrentWeather(cityName) {
    return instance.get('/current.json', {
      params: {
        key: API_KEY,
        q: cityName,
        lang: 'ru'
      }
    })
      .then((response) => { return response.data });
  },

  getHistoryWeather(cityName, date) {
    return instance.get('/history.json', {
      params: {
        key: API_KEY,
        q: cityName,
        lang: 'ru',
        dt: date
      }
    })
      .then((response) => { return response.data });
  },

}
