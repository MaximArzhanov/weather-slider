import React from 'react';
import './RegisterForm.css';
import Input from '../Input/Input';
import Error from '../Error/Error';
import Button from '../Button/Button';

function RegisterForm() {
  return (
    <form className="register-form">
      <Input labelText="Почта" id="email-input" type="email" name="email-input" errorText="ошибка" />
      <Input labelText="Пароль" id="email-password" type="password" name="email-password" errorText="ошибка" />
      {/* <Input labelText="Подтверждение пароля" id="email-password-confirm" type="password" name="email-password-confirm" errorText="ошибка" /> */}
      <Error errorText="Ошибка от сервера" />
      <Button buttonText="Зарегистрироваться" />
    </form>
  );
}

export default RegisterForm;
