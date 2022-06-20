import React from 'react';
import './AuthError.css';

function AuthError(props) {

  return (
    <p className='auth-error'>{props.authResult.message || ''}</p>
  );
}

export default AuthError;
