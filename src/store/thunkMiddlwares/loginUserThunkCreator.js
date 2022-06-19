import { authAPI } from '../../api/authAPI';
import loginUserActionCreator from '../actionCreators/loginUserActionCreator';

const loginUserThunkCreator = (email, password) => {
  return (dispatch) => {
    authAPI.loginUser(email, password)
      .then((result) => {
        dispatch(loginUserActionCreator(result));
      })
      .catch((result) => {
        dispatch(loginUserActionCreator(result));
      })
  }
}

export default loginUserThunkCreator;
