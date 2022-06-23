import { weatherAPI } from '../../api/weatherAPI';
import { userAPI } from '../../api/userAPI';
import updateSearchWeatherErrorActionCreator from '../actionCreators/updateSearchWeatherErrorActionCreator';
import addNewCardCityWeatherActionCreator from '../actionCreators/addNewCardCityWeatherActionCreator';

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
            console.log(result);
            dispatch(updateSearchWeatherErrorActionCreator(result));
          })

      })

      // Если ответ от weatherAPI пришёл с ошибкой
      .catch((result) => {
        try {
          if (result.response.data.error.code === 1006) {
            dispatch(updateSearchWeatherErrorActionCreator(true, false, 'Город не найден'));
          }
        }
        catch (error) {
          dispatch(updateSearchWeatherErrorActionCreator(true, false, 'Неизвестная ошибка'));
        }
      });

  }
}

export default searchCityWeatherThunkCreator;
