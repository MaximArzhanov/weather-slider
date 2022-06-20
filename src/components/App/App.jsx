import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WeatherPage from '../WeatherPage/WeatherPage';
import AuthPage from '../AuthPage/AuthPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import setUserLoginStatusActionCreator from '../../store/actionCreators/setUserLoginStatusActionCreator';
import setCurrentUserActionCreator from '../../store/actionCreators/setCurrentUserActionCreator';
import { IS_LOGINED, CURRENT_USER } from '../../utils/constants';

function App(props) {

  const state = props.store.getState();
  const dispatch = props.dispatch;
  const isLogined = state.userloginStatus.isUserLogined;

  const setInitialStates = () => {
    if (localStorage.getItem(IS_LOGINED)) {
      dispatch(setUserLoginStatusActionCreator(true));
      const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
      dispatch(setCurrentUserActionCreator(currentUser));
    } else {
      dispatch(setUserLoginStatusActionCreator(false));
    }
  }

  React.useEffect(() => {
    setInitialStates();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact path="/"
          element={
            <ProtectedRoute
              isLogined={isLogined}
              component={WeatherPage}
            />}
        />
        <Route
          path="signin"
          element={<AuthPage> <Login /> </AuthPage>} />
        <Route
          path="signup"
          element={<AuthPage> <Register /> </AuthPage>} />
      </Routes>
    </div>
  );
}

export default App;
