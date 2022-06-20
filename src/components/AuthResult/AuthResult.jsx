import React from 'react';
import './AuthResult.css';

function AuthResult(props) {

  const resultText = props.authResult.message;

  const resultTextClassList = (props.authResult.isError)
    ? 'auth-result auth-result_type_error'
    : 'auth-result';

  return (
    <p className={resultTextClassList}>{resultText}</p>
  );
}

export default AuthResult;
