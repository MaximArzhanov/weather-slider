import React, { useEffect } from 'react';
import './LoginForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { validationInput, validationForm } from '../../utils/validation';
import loginUserThunkCreator from '../../store/thunkMiddlwares/loginUserThunkCreator';
import Label from '../Label/Label';
import Input from '../Input/Input';
import InputValidationError from '../InputValidationError/InputValidationError';
import AuthError from '../AuthError/AuthError';
import Button from '../Button/Button';
import { EMAIL_INPUT, PASSWORD_INPUT, EMAIL, PASSWORD, PASSWORD_TYPE, LOGIN_BUTTON_TEXT } from '../../utils/constants';
import {
  changeInputText,
  changeErrorInputText,
  changeFormValidityState,
  resetFormValidityState,
  clearInputTexts,
  clearErrorInputTexts,
  resetAuthResult
} from '../../store/slices/authSlice';

function LoginForm(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const emailText = state.inputTexts[EMAIL_INPUT];
  const passwordText = state.inputTexts[PASSWORD_INPUT];
  const emailValidationErrorText = state.inputValidationErrors[EMAIL_INPUT];
  const passwordValidationErrorText = state.inputValidationErrors[PASSWORD_INPUT];
  const isError = state.authResult.isError;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserThunkCreator(emailText, passwordText));
  }

  const handleChangeInputText = (e) => {
    const inputID = e.target.id;
    const value = e.target.value;
    const form = e.target.closest('form');
    dispatch(changeInputText({ inputID, value }));                  // Диспатч изменения текста в инпуте
    const validationInputResult = validationInput(inputID, value);  // Валидация поля (Возвращается объект с результатами)
    const errorText = validationInputResult.errorText;
    dispatch(changeErrorInputText({ inputID, errorText }));         // Диспатч ошибки валидации инпута
    const validationFormResult = validationForm(form);              // Валидация формы (Возвращается значение типа bool)
    dispatch(changeFormValidityState({ validationFormResult }));    // Диспатч ошибки валидации всей формы
  }

  useEffect(() => {
    return () => {
      dispatch(clearInputTexts());          // Очистка текста в полях ввода
      dispatch(clearErrorInputTexts());     // Очистка ошибок валидации
      dispatch(resetFormValidityState());   // Сброс валидации формы
    }
  }, [dispatch]);

  // Сброс сообщения от API при переходе со страницы авторизации
  useEffect(() => {
    return () => {
      dispatch(resetAuthResult());
    }
  }, [dispatch]);

  // Сброс сообщения от API (если была ошибка)
  useEffect(() => {
    if (isError) {
      dispatch(resetAuthResult());
    }
  }, [isError, dispatch]);

  return (
    <form className="login-form" onSubmit={handleSubmit}>

      <div className="login-form__container">
        <Label inputID={EMAIL_INPUT} labelText='Электронная почта' />
        <Input
          labelText={EMAIL}
          id={EMAIL_INPUT}
          name={EMAIL_INPUT}
          handleChangeInputText={handleChangeInputText}
          value={emailText}
        />
        <InputValidationError errorText={emailValidationErrorText} />
      </div>

      <div className="login-form__container">
        <Label inputID={EMAIL_INPUT} labelText='Пароль' />
        <Input
          labelText={PASSWORD}
          id={PASSWORD_INPUT}
          type={PASSWORD_TYPE}
          name={PASSWORD_INPUT}
          handleChangeInputText={handleChangeInputText}
          value={passwordText}
        />
        <InputValidationError errorText={passwordValidationErrorText} />
      </div>

      <AuthError authResult={state.authResult} />
      <Button buttonText={LOGIN_BUTTON_TEXT} isFormValid={state.isFormValid} />
    </form>
  );
}

export default LoginForm;
