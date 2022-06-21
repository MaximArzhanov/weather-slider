import React from 'react';
import './Search.css';

function Search(props) {

  const handleChange = (e) => {
    props.changeTextInput(e);
  }

  return (
    <div className='search'>
      <form className='search-form'>
        <input
          type='text'
          className='search-form__input'
          placeholder='Название города'
          onChange={handleChange}
          value={props.searchText}
        />
        <button className='search-form__button'></button>
      </form>
    </div>
  );
}

export default Search;
