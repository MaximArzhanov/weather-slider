import initialState from '../initialStates/authPageInitialState';
import {
  CHANGE_TEXT_INPUT,
  CLEAR_TEXT_INPUTS,
  CLEAR_ERROR_INPUTS,
  CHANGE_ERROR_INPUT_TEXT,
  CHANGE_FORM_VALIDITY_STATE,
  LOGIN_USER,
  REGISTER_USER,
  RESET_AUTH_RESULT,
  CLEAR_AUTH_ERROR_TEXT
} from '../actions/actions';

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_TEXT_INPUT: {
      return {
        ...state,
        inputTexts: {
          ...state.inputTexts,
          [action.inputID]: action.text // Задаёт объекту inputTexts свойство с именем поля (Поле которое изменяется в данный момент)
        }
      }
    }

    case CLEAR_TEXT_INPUTS: {
      return { ...state, inputTexts: {} }
    }

    case CLEAR_ERROR_INPUTS: {
      return { ...state, inputValidationErrors: {} }
    }

    case CHANGE_ERROR_INPUT_TEXT: {
      return {
        ...state,
        inputValidationErrors: {
          ...state.inputValidationErrors,
          [action.inputID]: action.errorText // Задаёт объекту inputValidationErrors свойство с именем поля (Поле которое изменяется в данный момент)
        }
      }
    }

    case CHANGE_FORM_VALIDITY_STATE: {
      return { ...state, isFormValid: action.state }
    }

    case LOGIN_USER: {
      return { ...state, authResult: { ...action.result } }
    }

    case REGISTER_USER: {
      return { ...state, authResult: { ...action.result } }
    }

    case RESET_AUTH_RESULT: {
      return {
        ...state,
        authResult: {
          ...state.authResult,
          isRequestSuccessful: false
        }
      }
    }

    case CLEAR_AUTH_ERROR_TEXT: {
      return {
        ...state,
        authResult: {
          ...state.authResult,
          message: ''
        }
      }
    }

    default:
      return state;
  }
}

export default authReducer;
