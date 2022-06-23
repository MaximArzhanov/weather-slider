import React from 'react';
import './SearchError.css';

function SearchError(props) {

  let classList = props.searchResult.message === ''
    ? 'search-error search-error_state_disable'
    : 'search-error';

  classList = props.searchResult.isError
    ? `${classList} search-error_state_error`
    : classList;

  classList = props.searchResult.isRequestSuccessful
    ? `${classList} search-error_state_success`
    : classList;

  return (
    <div className={classList}>
      {props.searchResult.message}
    </div>
  );
}

export default SearchError;
