import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <header className="header">
      <Link to="/" className="header__logo">Wheather-Slider</Link>
      <Link to="/signin" className="header__link">Войти</Link>
    </header>
  );
}

export default Header;