import React, { useEffect } from 'react';
import './RegisterForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { validationInput, validationForm } from '../../utils/validation';
import registerUserThunkCreator from '../../store/thunkMiddlwares/registerUserThunkCreator';
import Label from '../Label/Label';
import Input from '../Input/Input';
import InputValidationError from '../InputValidationError/InputValidationError';
import AuthError from '../AuthError/AuthError';
import Button from '../Button/Button';
import { EMAIL_INPUT, PASSWORD_INPUT, EMAIL, PASSWORD, PASSWORD_TYPE, REGISTER_BUTTON_TEXT } from '../../utils/constants';
import {
  changeInputText,
  changeErrorInputText,
  changeFormValidityState,
  resetFormValidityState,
  resetAuthResult,
  clearInputTexts,
  clearErrorInputTexts
} from '../../store/slices/authSlice';

function RegisterForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const emailText = state.inputTexts[EMAIL_INPUT];
  const passwordText = state.inputTexts[PASSWORD_INPUT];
  const emailValidationErrorText = state.inputValidationErrors[EMAIL_INPUT];
  const passwordValidationErrorText = state.inputValidationErrors[PASSWORD_INPUT];

  // Редирект на страницу авторизации
  const redirertToSigninPage = () => navigate('/signin');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserThunkCreator(emailText, passwordText, redirertToSigninPage));
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

  // Сброс текста в полях ввода и ошибок валидации (при закрытии страницы регистрации)
  useEffect(() => {
    return () => {
      dispatch(clearInputTexts());
      dispatch(clearErrorInputTexts());
      dispatch(resetFormValidityState());
    }
  }, [dispatch]);

  // Сброс сообщения от API при открытии страницы регистрации
  useEffect(() => {
    dispatch(resetAuthResult());
  }, [dispatch]);

  return (
    <form className="register-form" onSubmit={handleSubmit}>

      <div className="register-form__container">
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

      <div className="register-form__container">
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
      <Button buttonText={REGISTER_BUTTON_TEXT} isFormValid={state.isFormValid} />
    </form>
  );
}

export default RegisterForm;
