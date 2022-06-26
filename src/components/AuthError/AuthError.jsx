import React from 'react';
import './AuthError.css';

function AuthError(props) {

  const classList = props.authResult.isRequestSuccessful
    ? 'auth-error auth-error_type_successful'
    : 'auth-error';

  return (
    <p className={classList}>{props.authResult.message || ''}</p>
  );
}

export default AuthError;
