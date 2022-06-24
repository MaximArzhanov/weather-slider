import { userAPI } from '../../api/userAPI';
import {
  registerUserActionCreator
} from '../actionCreators/actionCreators';

const registerUserThunkCreator = (email, password) => {
  return (dispatch) => {
    userAPI.registerUser(email, password)
      .then((result) => {
        dispatch(registerUserActionCreator(result));
      })
      .catch((result) => {
        dispatch(registerUserActionCreator(result));
      })
  }
}

export default registerUserThunkCreator;
