import React from 'react';
import './Search.css';
import Input from '../Input/Input';
import InputValidationError from '../InputValidationError/InputValidationError';
import Label from '../Label/Label';

function Search(props) {

  // const handleChange = (e) => {
  //   props.changeTextInput(e);
  // }

  return (
    <div className='search'>
      <form className='search-form'>
        <Label />
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
        <InputValidationError />
      </form>
    </div>
  );
}

export default Search;
