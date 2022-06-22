import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import changeSearchTextActionCreator from '../../store/actionCreators/changeSearchTextActionCreator';
import { SEARCH_INPUT } from '../../utils/constants';
import { validationInput, validationForm } from '../../utils/validation';
import changeSearchErrorInputTextActionCreator from '../../store/actionCreators/changeSearchErrorInputTextActionCreator';
import changeSearchFormValidityStateActionCreator from '../../store/actionCreators/changeSearchFormValidityStateActionCreator';
import clearSearchErrorInputsActionCreator from '../../store/actionCreators/clearSearchErrorInputsActionCreator';

const mapStateToProps = (state) => {
  return {
    searchText: state.weatherPage.search.inputTexts[SEARCH_INPUT],
    errorValidationSearchText: state.weatherPage.search.inputValidationErrors[SEARCH_INPUT],
    isFormValid: state.weatherPage.search.isFormValid,
    placeholder: 'Название города',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTextInput: (e) => { // При изменении текста происходит изменения стейт-переменных
      const inputID = e.target.id;
      const value = e.target.value;
      const form = e.target.closest('form');
      // Диспатч изменения текста в инпуте
      const actionChangeSearchText = changeSearchTextActionCreator(inputID, value);
      dispatch(actionChangeSearchText);
      // // Диспатч ошибки валидации инпута
      const validationInputResult = validationInput(inputID, value); // Валидация поля (Возвращается объект с результатами)
      const actionSearchErrorInput = changeSearchErrorInputTextActionCreator(inputID, validationInputResult.errorText);
      dispatch(actionSearchErrorInput);
      // Диспатч ошибки валидации формы
      const validationFormResult = validationForm(form); // Валидация формы (Возвращается значение типа bool)
      const actionFormValidation = changeSearchFormValidityStateActionCreator(validationFormResult);
      dispatch(actionFormValidation);
    },
    clearValidationErrors: () => { // Очистка полей с текстом ошибок валидации
      const action = clearSearchErrorInputsActionCreator();
      dispatch(action);
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
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      props.clearValidationErrors();
    }
  }, []);

  return (
    <SearchForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
