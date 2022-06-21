import React from 'react';
import './RegisterForm.css';
import Input from '../Input/Input';
import AuthError from '../AuthError/AuthError';
import Button from '../Button/Button';
import {
  EMAIL_INPUT, PASSWORD_INPUT, EMAIL, EMAIL_TYPE, PASSWORD, PASSWORD_TYPE, REGISTER_BUTTON_TEXT
} from '../../utils/constants';

function RegisterForm(props) {

  const handleSubmit = (e) => {
    props.submitRegisterForm(e, props.emailValue, props.passwordValue);
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>

      <Input
        labelText={EMAIL}
        id={EMAIL_INPUT}
        // type={EMAIL_TYPE}
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
        // minLength={8}
      />

      <AuthError authResult={props.authResult} />
      <Button buttonText={REGISTER_BUTTON_TEXT} isFormValid={props.isFormValid} />

    </form>
  );
}

export default RegisterForm;
