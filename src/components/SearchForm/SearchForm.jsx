import React from 'react';
import './SearchForm.css';
import Input from '../Input/Input';
import InputValidationError from '../InputValidationError/InputValidationError';
import Button from '../Button/Button';
import { SEARCH_INPUT } from '../../utils/constants';

function Search(props) {

  // const handleChange = (e) => {
  //   props.changeTextInput(e);
  // }

  const handleSubmit = (e) => {
    props.submitSearchForm(e, props.searchText);
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className="search-form__container">
        <Input
          labelText=''
          placeholder={props.placeholder}
          id={SEARCH_INPUT}
          name={SEARCH_INPUT}
          errorText={props.errorValidationSearchText}
          changeTextInput={props.changeTextInput}
          value={props.searchText}
        />
        <InputValidationError errorText={props.errorValidationSearchText} classList="input-valid-err_type_absolute" />
      </div>

      <Button buttonText='' isFormValid={props.isFormValid} classList='button_type_icon' />
    </form>
  );
}

export default Search;
