import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import changeSearchTextActionCreator from '../../store/actionCreators/changeSearchTextActionCreator';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    searchText: state.weatherPage.search.inputTexts['search-text-input'],
    // passwordValue: state.auth.inputTexts[PASSWORD_INPUT],
    errorValidationSearchText: state.weatherPage.search.inputValidationErrors['search-text-input'],
    // errorValidationTextPassword: state.auth.inputValidationErrors[PASSWORD_INPUT],
    isFormValid: true,
    // authResult: state.auth.authResult,
    // userloginStatus: state.userloginStatus.isUserLogined
    placeholder: 'Название города'
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
      // const validationInputResult = validationInput(inputID, value); // Валидация поля (Возвращается объект с результатами)
      // const actionErrorInput = changeErrorInputTextActionCreator(inputID, validationInputResult.errorText);
      // dispatch(actionErrorInput);
      // // Диспатч ошибки валидации формы
      // const validationFormResult = validationForm(form); // Валидация формы (Возвращается значение типа bool)
      // const actionFormValidation = changeFormValidityStateActionCreator(validationFormResult);
      // dispatch(actionFormValidation);
    }
  }
}

const SearchContainer = ({ ...props }) => {

  return (
    <Search {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
