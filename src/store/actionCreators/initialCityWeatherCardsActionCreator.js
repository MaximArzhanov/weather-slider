import INITIAL_CITY_WEATHER_CARDS from '../actions/initialCityWeatherCardsAction';

const initialCityWeatherCardsActionCreator = (weatherCards) => ({
  type: INITIAL_CITY_WEATHER_CARDS,
  weatherCards: weatherCards
});

export default initialCityWeatherCardsActionCreator;
