import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WeatherPageContainer from '../WeatherPage/WeatherPageContainer';
import AuthPage from '../AuthPage/AuthPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

function App(props) {

  return (
    <div className="app">
      <Routes>

        {/* <Route exact path="/" element={<ProtectedRoute isLogined={props.isLogined} component={WeatherPageContainer}/>}/> */}

        <Route path="signin" element={<AuthPage> <LoginForm /> </AuthPage>}/>

        <Route path="signup" element={<AuthPage> <RegisterForm /> </AuthPage>} />

      </Routes>
    </div>
  );
}

export default App;
