import initialState from '../initialStates/weatherHistoryInitialState';
import {
  SET_WEATHER_HISTORY
} from "../actions/actions";

const weatherHistoryReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_WEATHER_HISTORY: {
      return { ...state, weatherHistory: [ ...action.weatherHistory] }
    }

    default:
      return state;
  }
}

export default weatherHistoryReducer;
