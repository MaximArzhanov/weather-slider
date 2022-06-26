import React from 'react';
import './SliderItem.css';

function SliderItem(props) {

  return (
    <div className='slider-item'>

      <div className='slider-item__container'>
        <h2 className='slider-item__title'>{props.cityName}</h2>
        {/* <span className='slider-item__text'>{time}</span> */}
        <p className='slider-item__temp'>{props.temp} ℃</p>
        <img className='slider-item__icon' src={props.icon} alt="" />
        <span className='slider-item__text'>{props.text}</span>
      </div>



    </div>
  );
}

export default SliderItem;
