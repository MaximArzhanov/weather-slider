import CHANGE_EMAIL_INPUT from '../actions/changeEmailInputAction';
import CHANGE_PASSWORD_INPUT from '../actions/changePasswordInputAction';
import LOGIN_USER from '../actions/loginUserAction';
import REGISTER_USER from '../actions/registerUserAction';
import OPEN_LOGIN_PAGE from '../actions/openLoginPageAction';
import OPEN_REGISTER_PAGE from '../actions/openRegisterPageAction';

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_EMAIL_INPUT:
      return state;
    case CHANGE_PASSWORD_INPUT:
      return {

      }
    case LOGIN_USER:
      return {

      }
    case REGISTER_USER:
      return {

      }
    case OPEN_LOGIN_PAGE:
      return {

      }
    case OPEN_REGISTER_PAGE:
      return {

      }
    default:
      return state;
  }
}

export default addPostReducer;
