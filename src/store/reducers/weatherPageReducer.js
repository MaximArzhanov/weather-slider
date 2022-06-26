import initialState from '../initialStates/weatherPageInitialState';
import {
  CHANGE_SEARCH_TEXT,
  CHANGE_SEARCH_ERROR_INPUT_TEXT,
  CHANGE_SEARCH_FORM_VALIDITY_STATE,
  CLEAR_SEARCH_ERROR_INPUTS,
  CLEAR_SEARCH_TEXT_INPUTS,
  ADD_NEW_CARD_CITY_WEATHER,
  DELETE_CARD_CITY_WEATHER,
  UPDATE_SEARCH_WEATHER_ERROR,
  RESET_SEARCH_ERROR_TEXT,
  INITIAL_CITY_WEATHER_CARDS,
  RESET_WEATHER_CARDS
} from '../actions/actions';

const weatherPageReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_SEARCH_TEXT: {
      return {
        ...state,
        search: {
          ...state.search,
          inputTexts: { ...state.search.inputTexts, [action.inputID]: action.text }
        }
      }
    }

    case CHANGE_SEARCH_ERROR_INPUT_TEXT: {
      return {
        ...state,
        search: {
          ...state.search,
          inputValidationErrors: { ...state.search.inputValidationErrors, [action.inputID]: action.errorText }
        }
      }
    }

    case CHANGE_SEARCH_FORM_VALIDITY_STATE: {
      return {
        ...state,
        search: { ...state.search, isFormValid: action.state }
      }
    }

    case CLEAR_SEARCH_TEXT_INPUTS: {
      return {
        ...state,
        search: { ...state.search, inputTexts: {} }
      }
    }

    case CLEAR_SEARCH_ERROR_INPUTS: {
      return {
        ...state,
        search: { ...state.search, inputValidationErrors: {} }
      }
    }

    case UPDATE_SEARCH_WEATHER_ERROR: {
      return {
        ...state,
        search: { ...state.search,  searchResult: { ...action.result } }
      }
    }

    case ADD_NEW_CARD_CITY_WEATHER: {
      return {
        ...state,
        weatherCards: [ ...state.weatherCards, { ...action.currentCityWeather } ]
      }
    }

    case RESET_SEARCH_ERROR_TEXT: {
      return {
        ...state,
        search: {
          ...state.search,
          searchResult: {
            isError: false,
            isRequestSuccessful: true,
            message: ''
          }
        }
      }
    }

    case DELETE_CARD_CITY_WEATHER: {
      return {
        ...state,
        weatherCards: state.weatherCards.filter((index) => action.city !== index.location.name)
      }
    }

    case INITIAL_CITY_WEATHER_CARDS: {
      return { ...state, weatherCards: [ ...action.weatherCards ] }
    }

    case RESET_WEATHER_CARDS: {
      return { ...state, weatherCards: [] }
    }

    default:
      return state;
  }
}

export default weatherPageReducer;
