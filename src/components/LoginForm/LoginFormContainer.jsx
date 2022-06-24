import React, { useEffect } from 'react';
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
      dispatch(changeTextInputActionCreator(inputID, value));
      // Диспатч ошибки валидации инпута
      const validationInputResult = validationInput(inputID, value); // Валидация поля (Возвращается объект с результатами)
      dispatch(changeErrorInputTextActionCreator(inputID, validationInputResult.errorText));
      // Диспатч ошибки валидации формы
      const validationFormResult = validationForm(form); // Валидация формы (Возвращается значение типа bool)
      dispatch(changeFormValidityStateActionCreator(validationFormResult));
    },
    clearField: () => { // Очистка полей ввода
      dispatch(clearTextInputsActionCreator());
    },
    clearErrors: () => { // Очистка полей с текстом ошибок валидации
      dispatch(clearErrorInputsActionCreator());
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

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      props.clearField();
      props.clearErrors();
      props.clearAuthErrorText();
      props.resetValidationForm();
    }
  }, []);

  useEffect(() => {
    if (props.userloginStatus) { navigate('/') }; // Если вход в систему выполнен, то редирект на главную страницу
  }, [props.userloginStatus]);

  return (
    <LoginForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
