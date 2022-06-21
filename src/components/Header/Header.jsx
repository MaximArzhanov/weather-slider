import React from 'react';
import './Header.css';
import SearchFormContainer from '../SearchForm/SearchFormContainer';

function Header(props) {

  const handleClick = () => {
    props.logoutUser();
  }

  return (
    <header className='header'>
      <SearchFormContainer />
      <button className='header__button' onClick={handleClick}>Выйти</button>
    </header>
  );
}

export default Header;
