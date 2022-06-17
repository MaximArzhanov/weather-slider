import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WeatherPage from '../WeatherPage/WeatherPage';
import AuthPage from '../AuthPage/AuthPage';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<WeatherPage isLogined={true} />} />
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
