import { weatherAPI } from '../../api/weatherAPI';
import searchCurrentCityWeatherActionCreator from '../actionCreators/searchCurrentCityWeatherActionCreator';
import addNewCardCityWeatherActionCreator from '../actionCreators/addNewCardCityWeatherActionCreator';

const searchCityWeatherThunkCreator = (cityName) => {
  return (dispatch) => {
    weatherAPI.getCurrentWeather(cityName)
      .then((currentCityWeather) => {
        dispatch(addNewCardCityWeatherActionCreator(currentCityWeather));
        const newResult = {
          isError: false,
          isSearchSuccess: true,
          message: ''
        }
        dispatch(searchCurrentCityWeatherActionCreator(newResult));
      })
      .catch((result) => {
        let newResult = {}
        try {
          if (result.response.data.error.code === 1006) {
            newResult = {
              isError: true,
              isSearchSuccess: false,
              message: 'Город не найден'
            }
          }
        } catch (error) {
          newResult = {
            isError: true,
            isSearchSuccess: false,
            message: 'Неизвестная ошибка'
          }
        } finally {
          dispatch(searchCurrentCityWeatherActionCreator(newResult));
        }
      })
  }
}

export default searchCityWeatherThunkCreator;
