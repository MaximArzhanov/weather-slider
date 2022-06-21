import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const InputContainer = ({ ...props }) => {
  return (
    <Input {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);
