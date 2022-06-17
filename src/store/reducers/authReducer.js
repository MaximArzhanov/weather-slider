import CHANGE_TEXT_INPUT from '../actions/changeTextInputAction';
import CLEAR_TEXT_INPUTS from '../actions/clearTextInputsAction';
import CHANGE_ERROR_INPUT_TEXT from '../actions/changeErrorInputTextAction';
import LOGIN_USER from '../actions/loginUserAction';
import REGISTER_USER from '../actions/registerUserAction';
import initialState from '../initialStates/authPageInitialState';

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_TEXT_INPUT: {
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

    case CHANGE_ERROR_INPUT_TEXT: {
      const newState = { ...state };
      newState.inputValidationErrors = { ...state.inputValidationErrors };
      newState.inputValidationErrors[action.inputID] = action.errorText; // Задаёт объекту inputTexts свойство с именем поля (Поле которое изменяется в данный момент)
      return newState;
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
