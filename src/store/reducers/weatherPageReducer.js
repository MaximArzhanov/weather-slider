import initialState from '../initialStates/weatherPageInitialState';
import CHANGE_SEARCH_TEXT from '../actions/changeSearchTextAction';
import CHANGE_SEARCH_ERROR_INPUT_TEXT from '../actions/changeSearchErrorInputTextAction';
import CHANGE_SEARCH_FORM_VALIDITY_STATE from '../actions/changeSearchFormValidityStateAction';
import CLEAR_SEARCH_ERROR_INPUTS from '../actions/clearSearchErrorInputsAction';

const weatherPageReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_SEARCH_TEXT: {
      const newState = { ...state };
      newState.search = { ...state.search };
      newState.search.inputTexts = { ...state.search.inputTexts };
      newState.search.inputTexts[action.inputID] = action.text; // Задаёт объекту inputTexts свойство с именем поля (Поле которое изменяется в данный момент)
      return newState;
    }

    case CHANGE_SEARCH_ERROR_INPUT_TEXT: {
      const newState = { ...state };
      newState.search = { ...state.search };
      newState.search.inputValidationErrors = { ...state.search.inputValidationErrors };
      newState.search.inputValidationErrors[action.inputID] = action.errorText; // Задаёт объекту inputTexts свойство с именем поля (Поле которое изменяется в данный момент)
      return newState;
    }

    case CHANGE_SEARCH_FORM_VALIDITY_STATE: {
      const newState = { ...state };
      newState.search = { ...state.search };
      newState.search.isFormValid = action.state;
      return newState;
    }

    case CLEAR_SEARCH_ERROR_INPUTS: {
      const newState = { ...state };
      newState.search.inputValidationErrors = { ...state.search.inputValidationErrors };
      for (var key in newState.search.inputValidationErrors) { newState.search.inputValidationErrors[key] = '' }; // Перебор всех свойств в объекте newState.inputValidationErrors (Сброс ошибок валидации полей input)
      return newState;
    }

    default:
      return state;
  }
}

export default weatherPageReducer;
