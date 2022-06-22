import React from 'react';
import './Login.css';
import LoginFormContainer from '../LoginForm/LoginFormContainer';

function Login(props) { // (1) по аналогии с копонентом регистрации

  return (
    <div className="login">
      <LoginFormContainer />
    </div>
  );
}

export default Login;
