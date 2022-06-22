import React from 'react';
import './WeatherPage.css';
import HeaderContainer from '../Header/HeaderContainer';
import SearchErrorContainer from '../SearchError/SearchErrorContainer';

function WeatherPage(props) {

  return (
    <div className='weather-page'>
      <HeaderContainer />
      <SearchErrorContainer />
    </div>
  );
}

export default WeatherPage;
