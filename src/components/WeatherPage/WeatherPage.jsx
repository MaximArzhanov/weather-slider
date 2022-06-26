import React from 'react';
import './WeatherPage.css';
import HeaderContainer from '../Header/HeaderContainer';
import SearchErrorContainer from '../SearchError/SearchErrorContainer';
import SliderItem from '../SliderItem/SliderItem';
import SliderContainer from '../Slider.js/SliderContainer';

function WeatherPage(props) {

  console.log(props.cardWeatherList);

  return (
    <div className='weather-page'>
      <HeaderContainer />
      <SearchErrorContainer />
      <SliderContainer>
        {props.cardWeatherList.map((index) => {
          return (
            <SliderItem
              key={index.location.name}
              icon={index.current.condition.icon}
              temp={index.current.temp_c}
              time={index.location.localtime}
              text={index.current.condition.text}
              cityName={index.location.name}
            />);
        })}
      </SliderContainer>
    </div>
  );
}

export default WeatherPage;
