import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className="button" type="submit">{props.buttonText}</button>
  );
}

export default Button;
