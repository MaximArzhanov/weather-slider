import React from 'react';
import './Header.css';
import SearchContainer from '../Search/SearchContainer';

function Header(props) {

  const handleClick = () => {
    props.logoutUser();
  }

  return (
    <header className='header'>
      <SearchContainer />
      <button className='header__button' onClick={handleClick}>Выйти</button>
    </header>
  );
}

export default Header;
