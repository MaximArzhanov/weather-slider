/* Действия с формой регистрации/авторизации */
const CHANGE_TEXT_INPUT = 'CHANGE_TEXT_INPUT';
const CHANGE_ERROR_INPUT_TEXT = 'CHANGE_ERROR_INPUT_TEXT';
const CHANGE_FORM_VALIDITY_STATE = 'CHANGE_FORM_VALIDITY_STATE';
const RESET_AUTH_RESULT = 'RESET_AUTH_RESULT';
const CLEAR_TEXT_INPUTS = 'CLEAR_TEXT_INPUTS';
const CLEAR_ERROR_INPUTS = 'CLEAR_ERROR_INPUTS';

/* Действия при регистрации и авторизации */
const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';
const SET_USER_LOGIN_STATUS = 'SET_USER_LOGIN_STATUS';

/* Действия для текущего пользователя */
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const RESET_CURRENT_USER = 'RESET_CURRENT_USER';
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

/* Действия с формой поиска городов */
const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
const CHANGE_SEARCH_ERROR_INPUT_TEXT = 'CHANGE_SEARCH_ERROR_INPUT_TEXT';
const CHANGE_SEARCH_FORM_VALIDITY_STATE = 'CHANGE_SEARCH_FORM_VALIDITY_STATE';
const RESET_SEARCH_ERROR_TEXT = 'RESET_SEARCH_ERROR_TEXT';
const UPDATE_SEARCH_WEATHER_ERROR = 'UPDATE_SEARCH_WEATHER_ERROR';
const CLEAR_SEARCH_ERROR_INPUTS = 'CLEAR_SEARCH_ERROR_INPUTS';
const CLEAR_SEARCH_TEXT_INPUTS = 'CLEAR_SEARCH_TEXT_INPUTS';
const CLEAR_AUTH_ERROR_TEXT = 'CLEAR_AUTH_ERROR_TEXT';

/* Действия со списком городов */
const INITIAL_CITY_WEATHER_CARDS = 'INITIAL_CITY_WEATHER_CARDS';
const ADD_NEW_CARD_CITY_WEATHER = 'ADD_NEW_CARD_CITY_WEATHER';
const RESET_WEATHER_CARDS = 'RESET_WEATHER_CARDS';

/* Действия для слайдера */
const UPDATE_ACTIVE_INDEX = 'UPDATE_ACTIVE_INDEX';

export {
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
}
