import * as axios from "axios";

const API_KEY = '11a4ada72f2e45f2bf065312222106';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://api.weatherapi.com/v1',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

export const weatherAPI = {

    getCurrentWeather(city) {
        return instance.get('/current.json', {
          key: API_KEY,
          q: city
        })
          .then((response) => { return response.data });
    },
}
