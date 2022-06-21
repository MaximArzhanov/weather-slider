import React from 'react';
import './Label.css';

function Label(props) {

  return (
    <label
      className={props.labelClassList}
      htmlFor={props.forElementID}
    >
      {props.labelText}
    </label>
  );
}

export default Label;
