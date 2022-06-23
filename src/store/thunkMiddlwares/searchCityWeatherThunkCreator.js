import { weatherAPI } from '../../api/weatherAPI';
import { userAPI } from '../../api/userAPI';
import updateSearchWeatherErrorActionCreator from '../actionCreators/updateSearchWeatherErrorActionCreator';
import addNewCardCityWeatherActionCreator from '../actionCreators/addNewCardCityWeatherActionCreator';
import {
  CITY_WAS_NOT_FOUND_MESSAGE,
  UNKNOWN_ERROR_MESSAGE,
  CITY_WAS_NOT_FOUND_CODE
} from '../../utils/constants'

const searchCityWeatherThunkCreator = (cityName, currentUser) => {
  return (dispatch) => {
    weatherAPI.getCurrentWeather(cityName)

      .then((currentCityWeather) => {
        // Если запрос к weatherAPI прошёл успешно, то отправляется запрос на обновление списка городов для текущего пользователя
        userAPI.addCity(cityName, currentUser)
          .then((result) => {
            dispatch(addNewCardCityWeatherActionCreator(currentCityWeather));
            dispatch(updateSearchWeatherErrorActionCreator(result.isError, result.isRequestSuccessful, result.message));
          })
          .catch((result) => {
            dispatch(updateSearchWeatherErrorActionCreator(result));
          })
      })

      // Если ответ от weatherAPI пришёл с ошибкой
      .catch((result) => {
        try {
          if (result.response.data.error.code === CITY_WAS_NOT_FOUND_CODE) {
            dispatch(updateSearchWeatherErrorActionCreator(true, false, CITY_WAS_NOT_FOUND_MESSAGE));
          }
        }
        catch (error) {
          dispatch(updateSearchWeatherErrorActionCreator(true, false, UNKNOWN_ERROR_MESSAGE));
        }
      });

  }
}

export default searchCityWeatherThunkCreator;
