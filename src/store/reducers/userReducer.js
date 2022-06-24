import initialState from '../initialStates/currentUserInitialState';
import {
  SET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  RESET_CURRENT_USER
} from '../actions/actions';

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_CURRENT_USER: {
      return { ...state, currentUser: { ...action.user } }
    }

    case UPDATE_CURRENT_USER: {
      return { ...state, currentUser: { ...action.currentUser } }
    }

    case RESET_CURRENT_USER: {
      return { ...state, currentUser: {} }
    }

    default:
      return state;
  }
}

export default userReducer;
