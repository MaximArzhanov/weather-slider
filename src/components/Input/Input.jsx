import React from 'react';
import './Input.css';

function Input(props) {

  const handleChangeInputText = (e) => {
    props.handleChangeInputText(e);
  }

  return (
      <input
        id={props.id}
        className="input"
        type={props.type}
        name={props.name}
        autoComplete="off"
        onChange={handleChangeInputText}
        value={props.value || ""}
        required
        minLength={props.minLength}
        placeholder={props.placeholder}
      />
  );
}

export default Input;
