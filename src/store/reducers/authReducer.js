import CHANGE_TEXT_INPUT from '../actions/changeTextInputAction';
import LOGIN_USER from '../actions/loginUserAction';
import REGISTER_USER from '../actions/registerUserAction';

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_TEXT_INPUT:
      return {
        ...state,
        inputTexts: { ...inputTexts, fieldID: action.fieldID }
      }
    case LOGIN_USER:
      return {

      }
    case REGISTER_USER:
      return {

      }
    default:
      return state;
  }
}

export default authReducer;
