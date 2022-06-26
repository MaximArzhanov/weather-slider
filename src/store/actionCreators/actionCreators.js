import {
  ADD_NEW_CARD_CITY_WEATHER,
  CHANGE_ERROR_INPUT_TEXT,
  CHANGE_FORM_VALIDITY_STATE,
  CHANGE_SEARCH_ERROR_INPUT_TEXT,
  CHANGE_SEARCH_FORM_VALIDITY_STATE,
  CHANGE_SEARCH_TEXT,
  CHANGE_TEXT_INPUT,
  CLEAR_AUTH_ERROR_TEXT,
  CLEAR_ERROR_INPUTS,
  CLEAR_SEARCH_ERROR_INPUTS,
  CLEAR_SEARCH_TEXT_INPUTS,
  CLEAR_TEXT_INPUTS,
  INITIAL_CITY_WEATHER_CARDS,
  LOGIN_USER,
  REGISTER_USER,
  RESET_AUTH_RESULT,
  RESET_CURRENT_USER,
  RESET_SEARCH_ERROR_TEXT,
  RESET_WEATHER_CARDS,
  SET_CURRENT_USER,
  SET_USER_LOGIN_STATUS,
  UPDATE_CURRENT_USER,
  UPDATE_SEARCH_WEATHER_ERROR,
  UPDATE_ACTIVE_INDEX
} from '../actions/actions';


/* Действия с формой регистрации/авторизации */
const changeTextInputActionCreator = (inputID, text) => ({
  type: CHANGE_TEXT_INPUT,
  inputID: inputID,
  text: text
});

const changeErrorInputTextActionCreator = (inputID, errorText) => ({
  type: CHANGE_ERROR_INPUT_TEXT,
  inputID: inputID,
  errorText: errorText
});

const changeFormValidityStateActionCreator = (state) => ({
  type: CHANGE_FORM_VALIDITY_STATE,
  state: state
});

const resetAuthResultActionCreator = () => ({
  type: RESET_AUTH_RESULT
});

const clearTextInputsActionCreator = () => ({
  type: CLEAR_TEXT_INPUTS
});

const clearErrorInputsActionCreator = () => ({
  type: CLEAR_ERROR_INPUTS
});


/* Действия при регистрации и авторизации */
const loginUserActionCreator = (result) => ({
  type: LOGIN_USER,
  result: { ...result }
});

const registerUserActionCreator = (result) => ({
  type: REGISTER_USER,
  result: { ...result }
});

const setUserLoginStatusActionCreator = (userLoginStatus) => ({
  type: SET_USER_LOGIN_STATUS,
  userLoginStatus: userLoginStatus
});


/* Действия для текущего пользователя */
const setCurrentUserActionCreator = (user) => ({
  type: SET_CURRENT_USER,
  user: { ...user }
});

const resetCurrentUserActionCreator = () => ({
  type: RESET_CURRENT_USER
});

const updateCurrentUserActionCreator = (currentUser) => ({
  type: UPDATE_CURRENT_USER,
  currentUser: currentUser
});


/* Действия с формой поиска городов */
const changeSearchTextActionCreator = (inputID, text) => ({
  type: CHANGE_SEARCH_TEXT,
  inputID: inputID,
  text: text
});

const changeSearchErrorInputTextActionCreator = (inputID, errorText) => ({
  type: CHANGE_SEARCH_ERROR_INPUT_TEXT,
  inputID: inputID,
  errorText: errorText
});

const changeSearchFormValidityStateActionCreator = (state) => ({
  type: CHANGE_SEARCH_FORM_VALIDITY_STATE,
  state: state
});

const resetSearchErrorTextAction = () => ({
  type: RESET_SEARCH_ERROR_TEXT
});

const updateSearchWeatherErrorActionCreator = (isError, isSearchSuccess, message) => ({
  type: UPDATE_SEARCH_WEATHER_ERROR,
  result: {
    isError: isError,
    isRequestSuccessful: isSearchSuccess,
    message: message
  }
});

const clearSearchErrorInputsActionCreator = () => ({
  type: CLEAR_SEARCH_ERROR_INPUTS
});

const clearSearchTextInputsActionCreator = () => ({
  type: CLEAR_SEARCH_TEXT_INPUTS
});

const clearAuthErrorTextActionCreator = () => ({
  type: CLEAR_AUTH_ERROR_TEXT
});


/* Действия со списком городов */
const initialCityWeatherCardsActionCreator = (weatherCards) => ({
  type: INITIAL_CITY_WEATHER_CARDS,
  weatherCards: weatherCards
});

const addNewCardCityWeatherActionCreator = (currentCityWeather) => ({
  type: ADD_NEW_CARD_CITY_WEATHER,
  currentCityWeather: { ...currentCityWeather }
});

const resetWeatherCardsActionCreator = () => ({
  type: RESET_WEATHER_CARDS
});


/* Действия для слайдера */
const updateActiveIndexActionCreator = (activeIndex) => ({
  type: UPDATE_ACTIVE_INDEX,
  activeIndex: activeIndex
})

export {
  addNewCardCityWeatherActionCreator,
  changeErrorInputTextActionCreator,
  changeFormValidityStateActionCreator,
  changeSearchErrorInputTextActionCreator,
  changeSearchFormValidityStateActionCreator,
  changeSearchTextActionCreator,
  changeTextInputActionCreator,
  clearAuthErrorTextActionCreator,
  clearErrorInputsActionCreator,
  clearSearchErrorInputsActionCreator,
  clearSearchTextInputsActionCreator,
  clearTextInputsActionCreator,
  initialCityWeatherCardsActionCreator,
  loginUserActionCreator,
  registerUserActionCreator,
  resetAuthResultActionCreator,
  resetCurrentUserActionCreator,
  resetSearchErrorTextAction,
  resetWeatherCardsActionCreator,
  setCurrentUserActionCreator,
  setUserLoginStatusActionCreator,
  updateCurrentUserActionCreator,
  updateSearchWeatherErrorActionCreator,
  updateActiveIndexActionCreator
}
