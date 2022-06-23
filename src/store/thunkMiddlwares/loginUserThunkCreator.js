import { userAPI } from '../../api/userAPI';
import loginUserActionCreator from '../actionCreators/loginUserActionCreator';
import setCurrentUserActionCreator from '../actionCreators/setCurrentUserActionCreator';
import setUserLoginStatusActionCreator from '../actionCreators/setUserLoginStatusActionCreator';
import { IS_LOGINED, CURRENT_USER } from '../../utils/constants';

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
