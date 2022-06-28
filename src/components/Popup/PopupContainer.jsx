import React from 'react';
import { connect } from 'react-redux';
import Popup from './Popup';
import { closePopupActionCreator } from '../../store/actionCreators/actionCreators';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closePopup: (e) => {
      if (!e.target.classList.contains('popup')) {
        dispatch(closePopupActionCreator());
      }
    }
  }
}

const PopupContainer = ({ ...props }) => {
  return (
    <Popup {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);
