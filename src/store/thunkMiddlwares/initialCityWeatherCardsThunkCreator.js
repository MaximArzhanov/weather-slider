import { weatherAPI } from '../../api/weatherAPI';
import { userAPI } from '../../api/userAPI';

import {
  IS_LOGINED,
  CURRENT_USER
} from '../../utils/constants';

import {
  setCurrentUserActionCreator,
  setUserLoginStatusActionCreator,
  initialCityWeatherCardsActionCreator,
  updateLoadingActionCreator
} from '../actionCreators/actionCreators';

const initialCityWeatherCardsThunkCreator = () => {
  return (dispatch) => {

    dispatch(updateLoadingActionCreator(true));

    userAPI.getCurrentUser()  // Отправляет запрос на получение данных текущего авторизованного пользователя

      .then((result) => {
        dispatch(setCurrentUserActionCreator(result.currentUser));
        // Нужно дождаться когда придут ответы по всем запросам
        // Создаёт запрос к weatherAPI для каждого города из списка (города, которые пользователь добавил в слайдер)
        Promise.all(result.currentUser.cities.map(cityName => weatherAPI.getCurrentWeather(cityName)))
          // Диспатчится весь массив с информацией о текущей погоде в городах
          .then(currentCityWeatherList => {
            dispatch(initialCityWeatherCardsActionCreator(currentCityWeatherList));
            dispatch(updateLoadingActionCreator(false));
          })
          .catch((result) => {
            // TODO: сюда нужно будет дописать логику обработки ошибки при запросе текущей погоды в списке городов
            console.log(result);
            dispatch(updateLoadingActionCreator(false));
          });

      })
      .catch((result) => {
        // Если текущий пользователь не установлен, то снимается флаг isLogined
        localStorage.removeItem(IS_LOGINED);
        localStorage.removeItem(CURRENT_USER);
        dispatch(setUserLoginStatusActionCreator(false));
        dispatch(updateLoadingActionCreator(false));
      });

  }
}

export default initialCityWeatherCardsThunkCreator;
