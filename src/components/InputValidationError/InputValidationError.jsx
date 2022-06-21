import React from 'react';
import './InputValidationError.css';

function InputValidationError(props) {

  return (
    <span className='input-valid-err'>{props.errorText}</span>
  );
}

export default InputValidationError;
