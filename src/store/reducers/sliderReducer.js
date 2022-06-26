import initialState from '../initialStates/sliderInitialState';
import {
  UPDATE_ACTIVE_INDEX
} from "../actions/actions";

const sliderReducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_ACTIVE_INDEX: {
      return { ...state, activeIndex: action.activeIndex }
    }

    default:
      return state;
  }
}

export default sliderReducer;
