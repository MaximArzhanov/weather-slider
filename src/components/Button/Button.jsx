import React from 'react';
import './Button.css';

function Button(props) {

  let classListButton = (props.isFormValid)
    ? 'button'
    : 'button button_disabled';

  classListButton = (props.isLoading)
    ? 'button button_disabled'
    : classListButton;

  classListButton = (props.classList === undefined)
   ? classListButton
   : classListButton + ' ' + props.classList;

  return (
    <button className={classListButton} type="submit">{props.buttonText}</button>
  );
}

export default Button;
