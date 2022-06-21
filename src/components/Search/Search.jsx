import React from 'react';
import './Search.css';
import Input from '../Input/Input';

function Search(props) {

  // const handleChange = (e) => {
  //   props.changeTextInput(e);
  // }

  return (
    <div className='search'>
      <form className='search-form'>
        <Input
          labelText=''
          placeholder={props.placeholder}
          id='search-text-input'
          // type={EMAIL_TYPE}
          name='search-text-input'
          errorText={props.errorValidationSearchText}
          changeTextInput={props.changeTextInput}
          value={props.searchText}
        />
        {/* <input
          type='text'
          className='search-form__input'
          placeholder='Название города'
          onChange={handleChange}
          value={props.searchText}
        />
        <button className='search-form__button'></button> */}
      </form>
      <p className="search__error">Ошибка</p>
    </div>
  );
}

export default Search;
