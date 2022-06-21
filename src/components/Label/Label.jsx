import React from 'react';
import './Label.css';

function Label(props) {

  return (
    <label
      className='label'
      htmlFor={props.inputID}
    >
      {props.labelText}
    </label>
  );
}

export default Label;
