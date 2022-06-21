import React from 'react';
import './Label.css';

function Label(props) {

  const labelClassList = props.labelText ? 'label' : 'label label_disabled';

  return (
    <label
      className={labelClassList}
      htmlFor={props.inputID}
    >
      {props.labelText}
    </label>
  );
}

export default Label;
