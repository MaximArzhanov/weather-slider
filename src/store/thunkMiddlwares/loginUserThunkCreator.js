import { authAPI } from '../../api/authAPI';
import loginUserActionCreator from '../actionCreators/loginUserActionCreator';
import setCurrentUserActionCreator from '../actionCreators/setCurrentUserActionCreator';

const loginUserThunkCreator = (email, password) => {
  return (dispatch) => {
    authAPI.loginUser(email, password)
      .then((result) => {
        dispatch(loginUserActionCreator(result));
        dispatch(setCurrentUserActionCreator(result.user))
      })
      .catch((result) => {
        dispatch(loginUserActionCreator(result));
      })
  }
}

export default loginUserThunkCreator;
