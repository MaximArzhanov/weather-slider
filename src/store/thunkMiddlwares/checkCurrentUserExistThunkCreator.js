import { userAPI } from '../../api/userAPI';

const checkCurrentUserExistThunkCreator = (cityName, currentUser) => {
  return (dispatch) => {
    userAPI.getCurrentUser()

      .then((result) => {
        // Если запрос к weatherAPI прошёл успешно, то отправляется запрос на обновление списка городов для текущего пользователя
        dispatch(setCurrentUserActionCreator(result.user));
      })

      // Если ответ от weatherAPI пришёл с ошибкой
      .catch((result) => {
        dispatch(setCurrentUserActionCreator(result.user));
      });

  }
}

export default searchCityWeatherThunkCreator;
