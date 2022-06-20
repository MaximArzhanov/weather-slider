import React from 'react';
import './Header.css';

function Header(props) {

  const handleClick = () => {
    props.logoutUser();
  }

  return (
    <header className='header'>
      <button className='header__button' onClick={handleClick}>Выйти</button>
    </header>
  );
}

export default Header;
