import React from 'react';
import { connect } from 'react-redux';
import SearchError from './SearchError';

const mapStateToProps = (state) => {
  return {
    searchResult: state.weatherPage.search.searchResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const SearchErrorContainer = ({ ...props }) => {

  React.useEffect(() => {

  }, [])

  return (
    <SearchError {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchErrorContainer);
