import React, { useEffect } from 'react';
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
      // Зыкрытие модального окна при клике на оверлей, при клике на кнопку закрытия или при нажатии 'Esc'
      if (e.target.classList.contains('overlay') || e.key === 'Escape' || e.target.classList.contains('popup__close')) {
        dispatch(closePopupActionCreator());
      }
    }
  }
}

const PopupContainer = ({ ...props }) => {

  useEffect(() => {
    document.addEventListener('keydown', props.closePopup);
    return () => { document.removeEventListener('keydown', props.closePopup); };
  })

  return (
    <Popup {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);
