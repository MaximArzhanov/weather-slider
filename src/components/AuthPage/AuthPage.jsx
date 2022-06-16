import React from 'react';
import './AuthPage.css';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

function AuthPage() {
  return (
    <div className="auth-page">

      <h2 className="auth-page__title">Заголовок</h2>
      <Form />
      <div className="auth-page__container">
        <span className="auth-page__question">Уже зарегистрированы?</span>
        <Link to="/signin">
          Войти
        </Link>
      </div>

    </div>
  );
}

export default AuthPage;