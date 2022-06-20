import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WeatherPage from '../WeatherPage/WeatherPage';
import AuthPage from '../AuthPage/AuthPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App(props) {

  return (
    <div className="app">
      <Routes>
        <Route
          exact path="/"
          element={
            <ProtectedRoute
              isLogined={props.isLogined}
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
