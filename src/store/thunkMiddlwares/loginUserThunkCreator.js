import { userAPI } from '../../api/userAPI';

import {
  loginUserActionCreator,
  setCurrentUserActionCreator,
  setUserLoginStatusActionCreator
} from '../actionCreators/actionCreators';

const loginUserThunkCreator = (email, password) => {
  return (dispatch) => {
    userAPI.loginUser(email, password)
      .then((result) => {
        dispatch(loginUserActionCreator(result));
        dispatch(setCurrentUserActionCreator(result.user));
        dispatch(setUserLoginStatusActionCreator(true));
      })
      .catch((result) => {
        dispatch(loginUserActionCreator(result));
      })
  }
}

export default loginUserThunkCreator;
