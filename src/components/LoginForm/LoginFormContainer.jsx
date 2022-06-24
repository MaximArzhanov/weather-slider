import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import LoginForm from './LoginForm';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../utils/constants';
import { validationInput, validationForm } from '../../utils/validation';
import loginUserThunkCreator from '../../store/thunkMiddlwares/loginUserThunkCreator';
import {
  changeTextInputActionCreator,
  clearTextInputsActionCreator,
  clearErrorInputsActionCreator,
  changeErrorInputTextActionCreator,
  changeFormValidityStateActionCreator,
  clearAuthErrorTextActionCreator
} from '../../store/actionCreators/actionCreators';

const mapStateToProps = (state) => {
  return {
    emailValue: state.auth.inputTexts[EMAIL_INPUT],
    passwordValue: state.auth.inputTexts[PASSWORD_INPUT],
    errorValidationTextEmail: state.auth.inputValidationErrors[EMAIL_INPUT],
    errorValidationTextPassword: state.auth.inputValidationErrors[PASSWORD_INPUT],
    isFormValid: state.auth.isFormValid,
    authResult: state.auth.authResult,
    userloginStatus: state.userloginStatus.isUserLogined
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTextInput: (e) => { // При изменении текста происходит изменения стейт-переменных
      const inputID = e.target.id;
      const value = e.target.value;
      const form = e.target.closest('form');
      // Диспатч изменения текста в инпуте
      const actionChangeText = changeTextInputActionCreator(inputID, value);
      dispatch(actionChangeText);
      // Диспатч ошибки валидации инпута
      const validationInputResult = validationInput(inputID, value); // Валидация поля (Возвращается объект с результатами)
      const actionErrorInput = changeErrorInputTextActionCreator(inputID, validationInputResult.errorText);
      dispatch(actionErrorInput);
      // Диспатч ошибки валидации формы
      const validationFormResult = validationForm(form); // Валидация формы (Возвращается значение типа bool)
      const actionFormValidation = changeFormValidityStateActionCreator(validationFormResult);
      dispatch(actionFormValidation);
    },
    clearField: () => { // Очистка полей ввода
      const action = clearTextInputsActionCreator();
      dispatch(action);
    },
    clearErrors: () => { // Очистка полей с текстом ошибок валидации
      const action = clearErrorInputsActionCreator();
      dispatch(action);
    },
    submitLoginForm: (e, email, password) => { // Отправка формы авторизации
      e.preventDefault();
      dispatch(loginUserThunkCreator(email, password));
    },
    clearAuthErrorText: () => { // Очистка текста ошибки при авторизации
      dispatch(clearAuthErrorTextActionCreator())
    },
    resetValidationForm: () => { // Сброс валидации формы (Сброс кнопки отправки формы)
      dispatch(changeFormValidityStateActionCreator(false));
    }
  }
}

const LoginFormContainer = ({ ...props }) => {

  let navigate = useNavigate();
  React.useEffect(() => {
    return () => {
      props.clearField();
      props.clearErrors();
      props.clearAuthErrorText();
      props.resetValidationForm();
    }
  }, []);

  React.useEffect(() => {
    if (props.userloginStatus) { navigate('/') }; // Если вход в систему выполнен, то редирект на главную страницу
  }, [props.userloginStatus]);

  return (
    <LoginForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
