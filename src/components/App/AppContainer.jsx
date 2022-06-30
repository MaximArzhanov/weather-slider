import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { IS_LOGINED } from '../../utils/constants';
import initialCityWeatherCardsThunkCreator from '../../store/thunkMiddlwares/initialCityWeatherCardsThunkCreator';
import { setUserLoginStatusActionCreator } from '../../store/actionCreators/actionCreators';

const mapStateToProps = (state) => {
  return {
    isLogined: state.userloginStatus.isUserLogined,
    weatherCards: state.weatherPage.weatherCards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialStates: (isLogined) => {
      if (localStorage.getItem(IS_LOGINED)) { // Проверка на наличие текущего авторизованного пользователя
        dispatch(setUserLoginStatusActionCreator(true));
        // Если флаг о том, что пользователь залогинен ещё не установлен в стейте
        // то не нужно инициализировать слайды с текщей погодой.
        if (isLogined) dispatch(initialCityWeatherCardsThunkCreator());
      } else { // Если пользователь не авторизован
        dispatch(setUserLoginStatusActionCreator(false));
      }
    },
  }
}

const AppContainer = ({ ...props }) => {

  const { setInitialStates, isLogined } = props;

  useEffect(() => {
    setInitialStates(isLogined);
  }, [setInitialStates, isLogined]);

  return (
    <App { ...props } />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
