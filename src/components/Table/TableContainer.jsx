import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';

const mapStateToProps = (state) => {
  return {
    weatherHistory: state.weatherHistory.weatherHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const TableContainer = ({ ...props }) => {
  return (
    <Table {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
