import { weatherAPI } from '../../api/weatherAPI';

import {
  setWeatherHistoryActionCreator
} from '../actionCreators/actionCreators';

// Максимальное количество дней для запроса по WeatherAPI
const limitedQuantityOfDays = 7;

// Форматирует дату в формат для запроса к API
const getFormatedDate = (date) => {
  let stringDate = '';
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  stringDate = yyyy + '-' + mm + '-' + dd ;
  return stringDate;
}

// Создаёт и возвращает дату (Сегодняшняя дата - 1/2/3/4/5/6/7 дней)
const getLastDate = (quantityOfDays) => {
  let today = new Date();
  let lastDate = new Date();
  lastDate.setDate(today.getDate() - quantityOfDays);
  return getFormatedDate(lastDate);
}

const setWeatherHistoryThunkCreator = (cityName) => {
  return (dispatch) => {
    let lastDateList = []; // Массив с датами для запроса к WeatherAPI
    for (let numberOfDay = 1; numberOfDay <= limitedQuantityOfDays; numberOfDay++) {
      lastDateList.push(getLastDate(numberOfDay)) // Формирование массива с датами для запроса к WeatherAPI
    }
    // Запрос к WeatherAPI делается для каждой даты
    Promise.all(lastDateList.map(date => weatherAPI.getHistoryWeather(cityName, date)))
      .then(weatherHistoryList => {
        dispatch(setWeatherHistoryActionCreator(weatherHistoryList));
      })
      .catch((result) => {
        console.log(result);
      });
  }
}

export default setWeatherHistoryThunkCreator;
