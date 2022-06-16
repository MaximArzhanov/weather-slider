import React from 'react';
import './AuthPage.css';
import Form from '../Form/Form';
import { NavLink } from 'react-router-dom';



function AuthPage() {
  return (
    <div className="auth-page">
      <nav className="auth-page__links">
        <NavLink to="/signin" className={(navData) => navData.isActive ? "auth-page__link auth-page__link_active" : "auth-page__link" }>
          Вход
        </NavLink>
        <NavLink to="/signup"className={(navData) => navData.isActive ? "auth-page__link auth-page__link_active" : "auth-page__link" }>
          Регистрация
        </NavLink>
      </nav>
      <Form />

    </div>
  );
}

export default AuthPage;