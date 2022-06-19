import { authAPI } from '../../api/authAPI';
import registerUserActionCreator from '../actionCreators/registerUserActionCreator';

const registerUserThunkCreator = (email, password) => {
  return (dispatch) => {
    authAPI.registerUser(email, password)
      .then((result) => {
        dispatch(registerUserActionCreator(result));
      })
      .catch((result) => {
        dispatch(registerUserActionCreator(result));
      })
  }
}

export default registerUserThunkCreator;
