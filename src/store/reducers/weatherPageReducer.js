import initialState from '../initialStates/weatherPageInitialState';
import CHANGE_SEARCH_TEXT from '../actions/changeSearchTextAction';
import CHANGE_SEARCH_ERROR_INPUT_TEXT from '../actions/changeSearchErrorInputTextAction';
import CHANGE_SEARCH_FORM_VALIDITY_STATE from '../actions/changeSearchFormValidityStateAction';
import CLEAR_SEARCH_ERROR_INPUTS from '../actions/clearSearchErrorInputsAction';
import CLEAR_SEARCH_TEXT_INPUTS from '../actions/clearSearchTextInputsAction';
import ADD_NEW_CARD_CITY_WEATHER from '../actions/addNewCardCityWeatherAction';
import SEARCH_CURRENT_CITY_WEATHER from '../actions/searchCurrentCityWeatherAction';

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

    case CLEAR_SEARCH_TEXT_INPUTS: {
      const newState = { ...state };
      newState.search = { ...state.search };
      newState.search.inputTexts = { ...state.search.inputTexts };
      for (var key in newState.search.inputTexts) { newState.search.inputTexts[key] = '' }; // Перебор всех свойств в объекте newState.inputTexts (Сброс полей ввода)
      return newState;
    }

    case CLEAR_SEARCH_ERROR_INPUTS: {
      const newState = { ...state };
      newState.search = { ...state.search };
      newState.search.inputValidationErrors = { ...state.search.inputValidationErrors };
      for (var key in newState.search.inputValidationErrors) { newState.search.inputValidationErrors[key] = '' }; // Перебор всех свойств в объекте newState.inputValidationErrors (Сброс ошибок валидации полей input)
      return newState;
    }

    case SEARCH_CURRENT_CITY_WEATHER: {
      const newState = { ...state };
      newState.search = { ...state.search };
      newState.search.searchResult = { ...action.result };
      return newState;
    }

    case ADD_NEW_CARD_CITY_WEATHER: {
      const newState = { ...state };
      newState.search = { ...state.search };
      newState.search.weatherCards = [ ...state.search.weatherCards ];
      newState.search.weatherCards.push(action.currentCityWeather);
      return newState;
    }

    default:
      return state;
  }
}

export default weatherPageReducer;
