import React from 'react';
import './WeatherPage.css';
import { Navigate } from "react-router-dom";

function WeatherPage(props) {

    console.log(props.isLogined);

  return (
    <div className='weather-page'>
        {props.isLogined && <Navigate to="/signup" />}
    </div>
  );
}

export default WeatherPage;