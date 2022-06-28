import initialState from '../initialStates/loadingInitialState';
import {
  UPDATE_LOADING
} from '../actions/actions';

const loadingReducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_LOADING: {
      return { ...state, isLoading: action.status }
    }

    default:
      return state;
  }
}

export default loadingReducer;
