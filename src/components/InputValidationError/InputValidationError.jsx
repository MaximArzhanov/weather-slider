import React from 'react';
import './InputValidationError.css';

function InputValidationError(props) {

  const classList = (props.classList === undefined)
    ? 'input-valid-err'
    : `input-valid-err ${props.classList}`;

  return (
    <span className={classList}>{props.errorText}</span>
  );
}

export default InputValidationError;
