import React from 'react';
import './Button.css';

function Button(props) {

  const classListButton = (props.isFormValid)
    ? 'button'
    : 'button button_disabled';

  return (
    <button className={classListButton} type="submit">{props.buttonText}</button>
  );
}

export default Button;
