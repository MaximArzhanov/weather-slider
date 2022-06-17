import React from 'react';
import './LoginForm.css';
import Input from '../Input/Input';
import Error from '../Error/Error';
import Button from '../Button/Button';

function LoginForm() {
  return (
    <form className="login-form">
      <Input labelText="Почта" id="email-input" type="email" name="email-input" errorText="ошибка" />
      <Input labelText="Пароль" id="email-password" type="password" name="email-password" errorText="ошибка" />
      <Error errorText="Ошибка от сервера" />
      <Button buttonText="Войти" />
    </form>
  );
}

export default LoginForm;
