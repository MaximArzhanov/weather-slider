import { weatherAPI } from '../../api/weatherAPI';
import { userAPI } from '../../api/userAPI';

import {
  updateSearchWeatherErrorActionCreator,
  updateCurrentUserActionCreator,
  addNewCardCityWeatherActionCreator,
  setUserLoginStatusActionCreator,
  updateActiveIndexActionCreator,
  updateLoadingActionCreator
} from '../actionCreators/actionCreators';

import {
  CITY_WAS_NOT_FOUND_MESSAGE,
  UNKNOWN_ERROR_MESSAGE,
  CITY_WAS_NOT_FOUND_CODE,
  IS_LOGINED,
  CURRENT_USER
} from '../../utils/constants';

// Если текущий пользователь не установлен, то снимается флаг isLogined
const logoutUser = (dispatch) => {
  localStorage.removeItem(IS_LOGINED);
  localStorage.removeItem(CURRENT_USER);
  dispatch(setUserLoginStatusActionCreator(false));
}

const searchCityWeatherThunkCreator = (cityName, currentUser, cardWeatherList) => {
  return (dispatch) => {

    dispatch(updateLoadingActionCreator(true));

    weatherAPI.getCurrentWeather(cityName)
      .then((currentCityWeather) => {
        // Если запрос к weatherAPI прошёл успешно, то отправляется запрос на обновление списка городов для текущего пользователя
        userAPI.addCity(cityName, currentUser)
          .then((result) => {
            dispatch(addNewCardCityWeatherActionCreator(currentCityWeather));
            dispatch(updateSearchWeatherErrorActionCreator(result.isError, result.isRequestSuccessful, result.message));
            dispatch(updateActiveIndexActionCreator(cardWeatherList.length));
            // После добавления города необходимо обновить информацию в стейте для текущего пользователя
            userAPI.getCurrentUser()
              .then((result) => {
                dispatch(updateCurrentUserActionCreator(result.currentUser))
                dispatch(updateLoadingActionCreator(false));
              })
              .catch((result) => {
                logoutUser(dispatch);
                console.log(result.message);
                dispatch(updateLoadingActionCreator(false));
              });
          })
          .catch((result) => {
            dispatch(updateSearchWeatherErrorActionCreator(result));
            dispatch(updateLoadingActionCreator(false));
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
          dispatch(updateLoadingActionCreator(false));
        }
      });

  }
}

export default searchCityWeatherThunkCreator;
