import React from 'react';
import './LoginForm.css';
import Label from '../Label/Label';
import Input from '../Input/Input';
import InputValidationError from '../InputValidationError/InputValidationError';
import AuthError from '../AuthError/AuthError';
import Button from '../Button/Button';
import {
  EMAIL_INPUT, PASSWORD_INPUT, EMAIL, EMAIL_TYPE, PASSWORD, PASSWORD_TYPE, LOGIN_BUTTON_TEXT
} from '../../utils/constants';

function LoginForm(props) {

  const handleSubmit = (e) => {
    props.submitLoginForm(e, props.emailValue, props.passwordValue);
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>

      <Label inputID={EMAIL_INPUT} labelText='Электронная почта' />
      <Input
        labelText={EMAIL}
        id={EMAIL_INPUT}
        name={EMAIL_INPUT}
        errorText={props.errorValidationTextEmail}
        changeTextInput={props.changeTextInput}
        value={props.emailValue}
      />
      <InputValidationError errorText={props.errorValidationTextEmail} />

      <Label inputID={EMAIL_INPUT} labelText='Пароль' />
      <Input
        labelText={PASSWORD}
        id={PASSWORD_INPUT}
        type={PASSWORD_TYPE}
        name={PASSWORD_INPUT}
        errorText={props.errorValidationTextPassword}
        changeTextInput={props.changeTextInput}
        value={props.passwordValue}
      />
      <InputValidationError errorText={props.errorValidationTextPassword} />

      <AuthError authResult={props.authResult} />
      <Button buttonText={LOGIN_BUTTON_TEXT} isFormValid={props.isFormValid} />

    </form>
  );
}

export default LoginForm;
