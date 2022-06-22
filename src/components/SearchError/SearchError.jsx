import React from 'react';
import './SearchError.css';

function SearchError(props) {

  const classList = props.searchResult.isError
    ? 'search-error search-error_state_show'
    : 'search-error';

  return (
    <div className={classList}>
      {props.searchResult.message}
    </div>
  );
}

export default SearchError;
