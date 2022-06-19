import React from 'react';
import './LoginForm.css';
import Input from '../Input/Input';
import Error from '../Error/Error';
import Button from '../Button/Button';
import {
  EMAIL_INPUT, PASSWORD_INPUT, EMAIL, EMAIL_TYPE, PASSWORD, PASSWORD_TYPE, LOGIN_BUTTON_TEXT
} from '../../utils/constants';

function LoginForm(props) {
  return (
    <form className="login-form">

<Input
        labelText={EMAIL}
        id={EMAIL_INPUT}
        type={EMAIL_TYPE}
        name={EMAIL_INPUT}
        errorText={props.errorValidationTextEmail}
        changeTextInput={props.changeTextInput}
        value={props.emailValue}
      />

      <Input
        labelText={PASSWORD}
        id={PASSWORD_INPUT}
        type={PASSWORD_TYPE}
        name={PASSWORD_INPUT}
        errorText={props.errorValidationTextPassword}
        changeTextInput={props.changeTextInput}
        value={props.passwordValue}
      />

      <Error errorText="Ошибка от сервера" />
      <Button buttonText={LOGIN_BUTTON_TEXT} isFormValid={props.isFormValid} />

    </form>
  );
}

export default LoginForm;