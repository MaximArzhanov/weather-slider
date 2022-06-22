import SEARCH_CURRENT_CITY_WEATHER from '../actions/searchCurrentCityWeatherAction';

const searchCurrentCityWeatherActionCreator = (result) => ({
  type: SEARCH_CURRENT_CITY_WEATHER,
  result: { ...result }
});

export default searchCurrentCityWeatherActionCreator;
