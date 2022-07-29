import { userAPI } from '../../api/userAPI';
import { loginUser } from '../slices/authSlice';

const loginUserThunkCreator = (email, password) => {
  return (dispatch) => {
    userAPI.loginUser(email, password)
      .then((result) => {
        dispatch(loginUser({ result }));
        // dispatch(setCurrentUserActionCreator(result.user));
        // dispatch(setUserLoginStatusActionCreator(true));
      })
      .catch((result) => {
        dispatch(loginUser({ result }));
      })
  }
}

export default loginUserThunkCreator;
