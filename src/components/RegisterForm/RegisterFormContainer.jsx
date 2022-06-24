import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import registerUserThunkCreator from '../../store/thunkMiddlwares/registerUserThunkCreator';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../utils/constants';
import { validationInput, validationForm } from '../../utils/validation';
import { useNavigate } from "react-router-dom";
import {
  changeTextInputActionCreator,
  clearTextInputsActionCreator,
  clearErrorInputsActionCreator,
  changeErrorInputTextActionCreator,
  changeFormValidityStateActionCreator,
  resetAuthResultActionCreator,
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
    clearInput: () => { // Очистка полей ввода
      dispatch(clearTextInputsActionCreator());
    },
    clearErrors: () => { // Очистка полей с текстом ошибок валидации
      dispatch(clearErrorInputsActionCreator());
    },
    submitRegisterForm: (e, email, password) => { // Отправка формы авторизации
      e.preventDefault();
      dispatch(registerUserThunkCreator(email, password));
    },
    resetAuthResult: () => { // Сброс статуса регистрации (isAuthSuccess)
      dispatch(resetAuthResultActionCreator());
    },
    clearAuthErrorText: () => { // Очистка текста ошибки при авторизации
      dispatch(clearAuthErrorTextActionCreator());
    },
    resetValidationForm: () => { // Сброс валидации формы (Сброс кнопки отправки формы)
      dispatch(changeFormValidityStateActionCreator(false));
    }
  }
}

const RegisterFormContainer = ({ ...props }) => {

  const navigate = useNavigate();

  useEffect(() => {
    props.clearInput();
    props.clearErrors();
    props.clearAuthErrorText();
    props.resetValidationForm();

    return () => {
      props.resetAuthResult();
    }
  }, []);

  useEffect(() => {
    if (props.userloginStatus) { navigate('/') }; // Если вход в систему выполнен, то редирект на главную страницу
  }, [props.userloginStatus]);

  useEffect(() => {
    if (props.authResult.isAuthSuccess) { // При успешной регистрации происходит редирект на страницу авторизации
      navigate('/signin');
    }
  }, [props.authResult.isAuthSuccess]);

  return (
    <RegisterForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);
