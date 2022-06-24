import initialState from '../initialStates/userLoginStatusInitialState';
import {
  SET_USER_LOGIN_STATUS
} from "../actions/actions";

const userLoginStatusReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_LOGIN_STATUS: {
      return { ...state, isUserLogined: action.userLoginStatus }
    }

    default:
      return state;
  }
}

export default userLoginStatusReducer;
