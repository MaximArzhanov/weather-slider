import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import changeSearchTextActionCreator from '../../store/actionCreators/changeSearchTextActionCreator';
import { SEARCH_INPUT } from '../../utils/constants';
import { validationInput, validationForm } from '../../utils/validation';
import changeSearchErrorInputTextActionCreator from '../../store/actionCreators/changeSearchErrorInputTextActionCreator';
import changeSearchFormValidityStateActionCreator from '../../store/actionCreators/changeSearchFormValidityStateActionCreator';
import clearSearchErrorInputsActionCreator from '../../store/actionCreators/clearSearchErrorInputsActionCreator';
import clearSearchTextInputsActionCreator from '../../store/actionCreators/clearSearchTextInputsActionCreator';
import searchCityWeatherThunkCreator from '../../store/thunkMiddlwares/searchCityWeatherThunkCreator';
import resetSearchErrorTextAction from '../../store/actionCreators/resetSearchErrorTextActionCreator';
import updateSearchWeatherErrorActionCreator from '../../store/actionCreators/updateSearchWeatherErrorActionCreator';

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
    currentUser: state.currentUser.currentUser
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
      const actionChangeSearchText = changeSearchTextActionCreator(inputID, value);
      dispatch(actionChangeSearchText);
      // Диспатч ошибки валидации инпута
      const validationInputResult = validationInput(inputID, value); // Валидация поля (Возвращается объект с результатами)
      const actionSearchErrorInput = changeSearchErrorInputTextActionCreator(inputID, validationInputResult.errorText);
      dispatch(actionSearchErrorInput);
      // Диспатч ошибки валидации формы
      const validationFormResult = validationForm(form); // Валидация формы (Возвращается значение типа bool)
      const actionFormValidation = changeSearchFormValidityStateActionCreator(validationFormResult);
      dispatch(actionFormValidation);
    },
    clearTextInputs: () => { // Очистка полей с текстом ошибок валидации
      const action = clearSearchTextInputsActionCreator();
      dispatch(action);
    },
    clearValidationErrors: () => { // Очистка полей с текстом ошибок валидации
      const action = clearSearchErrorInputsActionCreator();
      dispatch(action);
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
        dispatch(searchCityWeatherThunkCreator(cityName, currentUser));
      }
    },
    resetSearchErrorText: () => { // Сброс ошибки запроса
      dispatch(resetSearchErrorTextAction());
    },
  }
}

const SearchContainer = ({ ...props }) => {

  React.useEffect(() => {

    // Скрытие поля с текстом ошибки при клике на любое место страницы, кроме самого поля ошибки
    const handleClick = (e) => {
      if (!e.target.classList.contains('input-valid-err')) {
        props.clearValidationErrors();
      }
      if (!e.target.classList.contains('search-error')) {
        props.resetSearchErrorText();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      props.clearValidationErrors();
      props.clearTextInputs();
      props.resetValidationForm();
    }
  }, []);

  // React.useEffect(() => {
  //   try {
  //     const users = JSON.parse(localStorage.getItem('users'));
  //     const user = users.find((user) => user.email === props.)

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }, [props.cardWeatherList]);

  return (
    <SearchForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
