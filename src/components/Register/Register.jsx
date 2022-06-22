import React from 'react';
import './Register.css';
import RegisterFormContainer from '../RegisterForm/RegisterFormContainer';

function Register() { // (1) нет смысла создавать такую обертку, тут можно сразу объявить контейнер
  return (
    <div className="register">
      <RegisterFormContainer />
    </div>
  );
}

export default Register;
