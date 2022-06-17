import React from 'react';
import './Input.css';

function Input(props) {

  const handleChangeTextInput = (e) => {
    props.validationField(e);
    // props.changeTextInput(e);
  }

  return (
    <div className="input-container">
      <label className="input-container__title" htmlFor={props.id}>{props.labelText}</label>
      <input
        id={props.id}
        className="input-container__input"
        type={props.type}
        name={props.name}
        autoComplete="off"
        onChange={handleChangeTextInput}
        value={props.value || ""}
      />
      <span className="input-container__error-input">{props.errorText}</span>
    </div>
  );
}

export default Input;
