import React from 'react';
import './WeatherPage.css';
import HeaderContainer from '../Header/HeaderContainer';
import SearchContainer from '../Search/SearchContainer';

function WeatherPage(props) {

  return (
    <div className='weather-page'>
      <HeaderContainer />
      <SearchContainer />
    </div>
  );
}

export default WeatherPage;
