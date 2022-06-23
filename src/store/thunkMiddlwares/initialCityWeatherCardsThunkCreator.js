import { weatherAPI } from '../../api/weatherAPI';
import { userAPI } from '../../api/userAPI';
import { IS_LOGINED } from '../../utils/constants';
import setCurrentUserActionCreator from '../actionCreators/setCurrentUserActionCreator';
import setUserLoginStatusActionCreator from '../actionCreators/setUserLoginStatusActionCreator';

const initialCityWeatherCardsThunkCreator = () => {
  return (dispatch) => {
    userAPI.getCurrentUser()  // Отправляет запрос на получение данных текущего авторизованного пользователя

      .then((result) => {
        dispatch(setCurrentUserActionCreator(result.currentUser));

        Promise.all(
          result.currentUser.cities.map((cityName) => {    // Нужно дождаться когда придут ответы по всем запросам
            return weatherAPI.getCurrentWeather(cityName); // Создаёт запрос к weatherAPI для каждого города из списка (города, которые пользователь добавил в слайдер)
          })
        )

          .then((currentCityWeather) => {
            // Если запрос к weatherAPI прошёл успешно, то отправляется запрос на обновление списка городов для текущего пользователя
            // dispatch(addNewCardCityWeatherActionCreator(currentCityWeather));
            // dispatch(updateSearchWeatherErrorActionCreator(result.isError, result.isRequestSuccessful, result.message));



          })
          // Если ответ от weatherAPI пришёл с ошибкой
          .catch((result) => {
            // try {
            //   if (result.response.data.error.code === CITY_WAS_NOT_FOUND_CODE) {
            //     dispatch(updateSearchWeatherErrorActionCreator(true, false, CITY_WAS_NOT_FOUND_MESSAGE));
            //   }
            // }
            // catch (error) {
            //   dispatch(updateSearchWeatherErrorActionCreator(true, false, UNKNOWN_ERROR_MESSAGE));
            // }



          });

      })

      .catch((result) => {
        localStorage.removeItem(IS_LOGINED);
        dispatch(setUserLoginStatusActionCreator(false));
      });

  }
}

export default initialCityWeatherCardsThunkCreator;
