import React from 'react';
import './WeatherPage.css';
import HeaderContainer from '../Header/HeaderContainer';
import SearchErrorContainer from '../SearchError/SearchErrorContainer';
import SliderItem from '../SliderItem/SliderItem';
import SliderContainer from '../Slider.js/SliderContainer';
import PopupContainer from '../Popup/PopupContainer';
import Loading from '../Loading/Loading';

function WeatherPage(props) {

  return (
    <div className='weather-page'>
      <HeaderContainer />
      <SearchErrorContainer />
      {props.isLoading
        ? <Loading loadingClassList='loading loading_color_white loading_size_middle' />
        : <SliderContainer>
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
        </SliderContainer>}


      { props.isPopupOpen ? <PopupContainer /> : undefined }

    </div>
  );
}

export default WeatherPage;
