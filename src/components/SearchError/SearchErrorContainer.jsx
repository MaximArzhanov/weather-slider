import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchError from './SearchError';
import { resetSearchErrorTextAction } from '../../store/actionCreators/actionCreators';

const mapStateToProps = (state) => {
  return {
    searchResult: state.weatherPage.search.searchResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetSearchErrorText: () => {
      dispatch(resetSearchErrorTextAction());
    }
  }
}

const SearchErrorContainer = ({ ...props }) => {

  const { resetSearchErrorText } = props;

  useEffect(() => {
    return () => { resetSearchErrorText() }
  }, [resetSearchErrorText]);

  return (
    <SearchError {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchErrorContainer);
