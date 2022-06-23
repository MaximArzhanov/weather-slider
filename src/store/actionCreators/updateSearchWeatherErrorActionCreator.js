import UPDATE_SEARCH_WEATHER_ERROR from '../actions/updateSearchWeatherErrorAction';

const updateSearchWeatherErrorActionCreator = (isError, isSearchSuccess, message) => ({
  type: UPDATE_SEARCH_WEATHER_ERROR,
  result: {
    isError: isError,
    isRequestSuccessful: isSearchSuccess,
    message: message
  }
});

export default updateSearchWeatherErrorActionCreator;
