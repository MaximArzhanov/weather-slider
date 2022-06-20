import SET_USER_LOGIN_STATUS from "../actions/setUserLoginStatusAction";
import initialState from '../initialStates/userLoginStatusInitialState';

const userLoginStatusReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_LOGIN_STATUS: {
      const newState = { ...state };
      newState.isUserLogined = action.userLoginStatus
      return newState;
    }

    default:
      return state;
  }
}

export default userLoginStatusReducer;
