import React from 'react';
import './AuthPage.css';
import { NavLink } from 'react-router-dom';

function AuthPage(props) {

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
      {props.children}

    </div>
  );
}

export default AuthPage;
