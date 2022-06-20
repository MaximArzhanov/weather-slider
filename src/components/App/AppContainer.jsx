import React from 'react';
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
      if (localStorage.getItem(IS_LOGINED)) {
        dispatch(setUserLoginStatusActionCreator(true));
        const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
        dispatch(setCurrentUserActionCreator(currentUser));
      } else {
        dispatch(setUserLoginStatusActionCreator(false));
      }
    },
  }
}

const AppContainer = ({ ...props }) => {

  React.useEffect(() => {
    props.setInitialStates();
  }, []);

  return (
    <App {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
