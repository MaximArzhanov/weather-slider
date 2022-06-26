import React from 'react';
import './WeatherPage.css';
import HeaderContainer from '../Header/HeaderContainer';
import SearchErrorContainer from '../SearchError/SearchErrorContainer';
import SliderItem from '../SliderItem/SliderItem';
import SliderContainer from '../Slider.js/SliderContainer';

function WeatherPage(props) {

  return (
    <div className='weather-page'>
      <HeaderContainer />
      <SearchErrorContainer />
      <SliderContainer>
        <SliderItem>Item 1</SliderItem>
        <SliderItem>Item 2</SliderItem>
        <SliderItem>Item 3</SliderItem>
        <SliderItem>Item 4</SliderItem>
        <SliderItem>Item 5</SliderItem>
        <SliderItem>Item 6</SliderItem>
      </SliderContainer>
    </div>
  );
}

export default WeatherPage;
