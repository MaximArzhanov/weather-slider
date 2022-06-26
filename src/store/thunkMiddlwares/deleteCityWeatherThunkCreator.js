import { userAPI } from '../../api/userAPI';

import {
  deletCardCityWeatherActionCreator,
  updateSearchWeatherErrorActionCreator,
  updateCurrentUserActionCreator,
  setUserLoginStatusActionCreator
} from '../actionCreators/actionCreators';

import { IS_LOGINED, CURRENT_USER } from '../../utils/constants';

// Если текущий пользователь не установлен, то снимается флаг isLogined
const logoutUser = (dispatch) => {
  localStorage.removeItem(IS_LOGINED);
  localStorage.removeItem(CURRENT_USER);
  dispatch(setUserLoginStatusActionCreator(false));
}

const deleteCityWeatherThunkCreator = (cityName, currentUser) => {
  return (dispatch) => {
    userAPI.deleteCity(cityName, currentUser)
      .then((result) => {
        dispatch(deletCardCityWeatherActionCreator(cityName));
        dispatch(updateSearchWeatherErrorActionCreator(result.isError, result.isRequestSuccessful, result.message));
        // После удаления города необходимо обновить информацию в стейте для текущего пользователя
        userAPI.getCurrentUser()
          .then((result) => dispatch(updateCurrentUserActionCreator(result.currentUser)))
          .catch((result) => {
            logoutUser(dispatch);
            console.log(result.message);
          });
      })
      .catch((result) => {
        dispatch(updateSearchWeatherErrorActionCreator(result.isError, result.isRequestSuccessful, result.message));
      })
  }
}

export default deleteCityWeatherThunkCreator;