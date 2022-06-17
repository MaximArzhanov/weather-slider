import React from 'react';
import './Input.css';

function Input(props) {

  console.log(props.errorText);

  const classListErrorInput = (props.errorText == undefined)
    ? 'input-container__error-input'
    : 'input-container__error-input input-container__error-input_visible';

  const handleChangeTextInput = (e) => {
    props.changeTextInput(e);
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
        required
      />
      <span className={classListErrorInput}>{props.errorText}</span>
    </div>
  );
}

export default Input;
