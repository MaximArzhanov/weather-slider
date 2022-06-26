import { userAPI } from '../../api/userAPI';

import {
  deletCardCityWeatherActionCreator,
  updateSearchWeatherErrorActionCreator
} from '../actionCreators/actionCreators';

const deleteCityWeatherThunkCreator = (cityName, currentUser) => {
  return (dispatch) => {
    userAPI.deleteCity(cityName, currentUser)
      .then((result) => {
        dispatch(deletCardCityWeatherActionCreator(cityName));
        dispatch(updateSearchWeatherErrorActionCreator(result.isError, result.isRequestSuccessful, result.message));
      })
      .catch((result) => {
        dispatch(updateSearchWeatherErrorActionCreator(result.isError, result.isRequestSuccessful, result.message));
      })
  }
}

export default deleteCityWeatherThunkCreator;
