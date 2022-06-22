import ADD_NEW_CARD_CITY_WEATHER from '../actions/addNewCardCityWeatherAction';

const addNewCardCityWeatherActionCreator = (currentCityWeather) => ({
  type: ADD_NEW_CARD_CITY_WEATHER,
  currentCityWeather: { ...currentCityWeather }
});

export default addNewCardCityWeatherActionCreator;
