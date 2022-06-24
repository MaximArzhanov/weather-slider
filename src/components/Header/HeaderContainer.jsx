import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { IS_LOGINED, CURRENT_USER } from '../../utils/constants';
import {
  setUserLoginStatusActionCreator,
  resetCurrentUserActionCreator,
  resetWeatherCardsActionCreator
} from '../../store/actionCreators/actionCreators';

const mapStateToProps = (state) => {
  return {
    isLogined: state.userloginStatus.isUserLogined
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => { // Выход пользователя из системы
      localStorage.removeItem(IS_LOGINED);
      localStorage.removeItem(CURRENT_USER);
      dispatch(resetCurrentUserActionCreator());
      dispatch(resetWeatherCardsActionCreator());
      dispatch(setUserLoginStatusActionCreator(false));
    }
  }
}

const HeaderContainer = ({ ...props }) => {

  return (
    <Header {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
