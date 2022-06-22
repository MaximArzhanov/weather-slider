import React from 'react';
import { connect } from 'react-redux';
import SearchError from './SearchError';
import resetSearchErrorTextAction from '../../store/actionCreators/resetSearchErrorTextActionCreator';

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

  React.useEffect(() => {

  }, [])

  return (
    <SearchError {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchErrorContainer);
