import React from 'react'; // (1.1) импортировать хуки можно так: import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import setUserLoginStatusActionCreator from '../../store/actionCreators/setUserLoginStatusActionCreator';
import setCurrentUserActionCreator from '../../store/actionCreators/setCurrentUserActionCreator';
import { IS_LOGINED, CURRENT_USER } from '../../utils/constants';

const mapStateToProps = (state) => {
  return {
    isLogined: state.userloginStatus.isUserLogined
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialStates: () => {
      if (localStorage.getItem(IS_LOGINED)) { // Проверка на наличие текущего авторизованного пользователя
        dispatch(setUserLoginStatusActionCreator(true));
        const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
        dispatch(setCurrentUserActionCreator(currentUser));
      } else { // Если пользователь не авторизован
        dispatch(setUserLoginStatusActionCreator(false));
      }
    },
  }
}

const AppContainer = ({ ...props }) => { // (2.2) тогда пропсы можно объявить как { setInitialStates } (обычная деструктуризация)

  React.useEffect(() => { // (1.2) и использовать просто useEffect (без React.useEffect) ;
    props.setInitialStates();
  }, []); // (2.1) у useEffect должны быть зависимости, напимер [setInitialStates])

  return (
    <App {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
