import { userAPI } from '../../api/userAPI';
import { registerUser } from '../slices/authSlice';

const registerUserThunkCreator = (email, password, redirertToSigninPage) => {
  return (dispatch) => {
    userAPI.registerUser(email, password)
      .then(result => {
        dispatch(registerUser( { result } ));
        redirertToSigninPage();
      })
      .catch(result => dispatch(registerUser( { result } )));
  }
}

export default registerUserThunkCreator;
