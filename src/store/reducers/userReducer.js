import SET_CURRENT_USER from "../actions/setCurrentUserAction";
import UPDATE_CURRENT_USER from '../actions/updateCurrentUserAction';
import RESET_CURRENT_USER from '../actions/resetCurrentUserAction';
import initialState from '../initialStates/currentUserInitialState';

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_CURRENT_USER: {
      const newState = { ...state };
      newState.currentUser = { ...action.user };
      return newState;
    }

    case UPDATE_CURRENT_USER: {
      const newState = { ...state };
      newState.currentUser = { ...action.currentUser };
      return newState;
    }

    case RESET_CURRENT_USER: {
      const newState = { ...state };
      newState.currentUser = {};
      return newState;
    }

    default:
      return state;
  }
}

export default userReducer;
