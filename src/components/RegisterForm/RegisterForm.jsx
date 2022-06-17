import React from 'react';
import './RegisterForm.css';
import Input from '../Input/Input';
import Error from '../Error/Error';
import Button from '../Button/Button';
import {
  EMAIL_INPUT, PASSWORD_INPUT, EMAIL, EMAIL_TYPE, PASSWORD, PASSWORD_TYPE, REGISTER_BUTTON_TEXT
} from '../../utils/constants';

function RegisterForm(props) {

  return (
    <form className="register-form">

      <Input
        labelText={EMAIL}
        id={EMAIL_INPUT}
        type={EMAIL_TYPE}
        name={EMAIL_INPUT}
        errorText="ошибка"
        changeTextInput={props.changeTextInput}
        value={props.emailValue}
        validationField={props.validationField}
      />

      <Input
        labelText={PASSWORD}
        id={PASSWORD_INPUT}
        type={PASSWORD_TYPE}
        name={PASSWORD_INPUT}
        errorText="ошибка"
        changeTextInput={props.changeTextInput}
        value={props.passwordValue}
      />

      <Error errorText="Ошибка от сервера" />
      <Button buttonText={REGISTER_BUTTON_TEXT} />

    </form>
  );
}

export default RegisterForm;
