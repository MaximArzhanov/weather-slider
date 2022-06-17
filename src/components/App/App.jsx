import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WeatherPage from '../WeatherPage/WeatherPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';

function App() {

  console.log('123');

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WeatherPage isLogined={true} />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
