import CHANGE_TEXT_INPUT from '../actions/changeTextInputAction';
import CLEAR_TEXT_INPUTS from '../actions/clearTextInputsAction';
import CLEAR_ERROR_INPUTS from '../actions/clearErrorInputsAction';
import CHANGE_ERROR_INPUT_TEXT from '../actions/changeErrorInputTextAction';
import CHANGE_FORM_VALIDITY_STATE from '../actions/changeFormVilidityStateAction';
import LOGIN_USER from '../actions/loginUserAction';
import REGISTER_USER from '../actions/registerUserAction';
import initialState from '../initialStates/authPageInitialState';
import RESET_AUTH_RESULT from '../actions/resetAuthResultAction';
import CLEAR_AUTH_ERROR_TEXT from '../actions/clearAuthErrorTextAction';

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_TEXT_INPUT: {
      // (1) обычно принято писать через деструктуризацию:

      // return {
      //   ...state,
      //   inputTexts: {
      //     ...state.inputTexts,
      //     [action.inputID]: action.text
      //   }
      // }

      const newState = { ...state };
      newState.inputTexts = { ...state.inputTexts };
      newState.inputTexts[action.inputID] = action.text; // Задаёт объекту inputTexts свойство с именем поля (Поле которое изменяется в данный момент)
      return newState;
    }

    case CLEAR_TEXT_INPUTS: {
      const newState = { ...state };
      newState.inputTexts = { ...state.inputTexts };
      for (var key in newState.inputTexts) { newState.inputTexts[key] = '' }; // Перебор всех свойств в объекте newState.inputTexts (Сброс полей ввода)
      return newState;
    }

    case CLEAR_ERROR_INPUTS: {
      const newState = { ...state };
      newState.inputValidationErrors = { ...state.inputValidationErrors };
      for (var key in newState.inputValidationErrors) { newState.inputValidationErrors[key] = '' }; // Перебор всех свойств в объекте newState.inputValidationErrors (Сброс ошибок валидации полей input)
      return newState;
    }

    case CHANGE_ERROR_INPUT_TEXT: {
      const newState = { ...state };
      newState.inputValidationErrors = { ...state.inputValidationErrors };
      newState.inputValidationErrors[action.inputID] = action.errorText; // Задаёт объекту inputTexts свойство с именем поля (Поле которое изменяется в данный момент)
      return newState;
    }

    case CHANGE_FORM_VALIDITY_STATE: {
      const newState = { ...state };
      newState.isFormValid = action.state;
      return newState;
    }

    case LOGIN_USER: {
      const newState = { ...state };
      newState.authResult = { ...action.result };
      return newState;
    }

    case REGISTER_USER: {
      const newState = { ...state };
      newState.authResult = { ...action.result };
      return newState;
    }

    case RESET_AUTH_RESULT: {
      const newState = { ...state };
      newState.authResult = { ...state.authResult };
      newState.authResult.isAuthSuccess = false;
      return newState;
    }

    case CLEAR_AUTH_ERROR_TEXT: {
      const newState = { ...state };
      newState.authResult = { ...state.authResult };
      newState.authResult.message = '';
      return newState;
    }

    default:
      return state;
  }
}

export default authReducer;
