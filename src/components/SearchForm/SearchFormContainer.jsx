import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { SEARCH_INPUT } from '../../utils/constants';
import { validationInput, validationForm } from '../../utils/validation';
import searchCityWeatherThunkCreator from '../../store/thunkMiddlwares/searchCityWeatherThunkCreator';
import {
  changeSearchTextActionCreator,
  changeSearchErrorInputTextActionCreator,
  changeSearchFormValidityStateActionCreator,
  clearSearchErrorInputsActionCreator,
  clearSearchTextInputsActionCreator,
  resetSearchErrorTextAction,
  updateSearchWeatherErrorActionCreator
} from '../../store/actionCreators/actionCreators';

const checkCityAlreadyAdded = (cityName ,cardWeatherList) => {
  return cardWeatherList.some((card) => card.location.name === cityName);
}

const mapStateToProps = (state) => {
  return {
    searchText: state.weatherPage.search.inputTexts[SEARCH_INPUT],
    errorValidationSearchText: state.weatherPage.search.inputValidationErrors[SEARCH_INPUT],
    isFormValid: state.weatherPage.search.isFormValid,
    placeholder: 'Название города',
    cardWeatherList: state.weatherPage.weatherCards,
    currentUser: state.currentUser.currentUser,
    isLoading: state.loading.isLoading
    // searchResult: state.weatherPage.search.searchResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTextInput: (e) => { // При изменении текста происходит изменения стейт-переменных
      const inputID = e.target.id;
      const value = e.target.value;
      const form = e.target.closest('form');
      dispatch(resetSearchErrorTextAction()); // Сброс ошибки запроса
      // Диспатч изменения текста в инпуте
      dispatch(changeSearchTextActionCreator(inputID, value));
      // Диспатч ошибки валидации инпута
      const validationInputResult = validationInput(inputID, value); // Валидация поля (Возвращается объект с результатами)
      dispatch(changeSearchErrorInputTextActionCreator(inputID, validationInputResult.errorText));
      // Диспатч ошибки валидации формы
      const validationFormResult = validationForm(form); // Валидация формы (Возвращается значение типа bool)
      dispatch(changeSearchFormValidityStateActionCreator(validationFormResult));
    },
    clearTextInputs: () => { // Очистка полей с текстом ошибок валидации
      dispatch(clearSearchTextInputsActionCreator());
    },
    clearValidationErrors: () => { // Очистка полей с текстом ошибок валидации
      dispatch(clearSearchErrorInputsActionCreator());
    },
    resetValidationForm: () => { // Сброс валидации формы (Сброс кнопки отправки формы)
      dispatch(changeSearchFormValidityStateActionCreator(false));
    },
    submitSearchForm: (e, cityName, cardWeatherList, currentUser) => { // Отправка формы авторизации
      e.preventDefault();
      dispatch(resetSearchErrorTextAction()); // Сброс ошибки запроса
      if (checkCityAlreadyAdded(cityName, cardWeatherList)) {
        dispatch(updateSearchWeatherErrorActionCreator(true, false, 'Город уже добавлен'));
      } else {
        dispatch(searchCityWeatherThunkCreator(cityName, currentUser, cardWeatherList));
      }
    },
    resetSearchErrorText: () => { // Сброс ошибки запроса
      dispatch(resetSearchErrorTextAction());
    },
  }
}

const SearchContainer = ({ ...props }) => {

  const {
    clearValidationErrors,
    resetSearchErrorText,
    clearTextInputs,
    resetValidationForm
  } = props;

  useEffect(() => {

    // Скрытие поля с текстом ошибки при клике на любое место страницы, кроме самого поля ошибки
    const handleClick = (e) => {
      if (!e.target.classList.contains('input-valid-err')) {
        clearValidationErrors();
      }
      if (!e.target.classList.contains('search-error')) {
        resetSearchErrorText();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      clearValidationErrors();
      clearTextInputs();
      resetValidationForm();
    }
  }, [clearValidationErrors, resetSearchErrorText, clearTextInputs, resetValidationForm]);

  return (
    <SearchForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
