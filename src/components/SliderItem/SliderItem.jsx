import React from 'react';
import './SliderItem.css';

function SliderItem(props) {

  const { children } = props;

  // Если остаётся один слайд, то его нельзя удалить
  // const buttonDeleteClassList = React.Children.count(children) > 1
  //   ? 'slider-item__delete'
  //   : 'slider-item__delete slider-item__delete_hidden';

    const buttonDeleteClassList = React.Children.count(children) > 1
    ? 'slider-item__delete'
    : 'slider-item__delete slider-item__delete_hidden';

  const handleDeleteClick = () => {
    props.deleteSlide(props.cityName, props.currentUser, props.activeIndex);
  }

  const handleSlideClick = (e) => {
    // Исключение нажатия на кнопку удаления слайда
    if (!e.target.classList.contains('slider-item__delete')) {
      props.showWeatherHistory(props.cityName);
    }
  }

  return (
    <div className='slider-item' onClick={handleSlideClick}>

      <div className='slider-item__container'>
        <button className={buttonDeleteClassList} onClick={handleDeleteClick}></button>
        <h2 className='slider-item__title'>{props.cityName}</h2>
        <p className='slider-item__temp'>{props.temp} ℃</p>
        <img className='slider-item__icon' src={props.icon} alt="" />
        <span className='slider-item__text'>{props.text}</span>

      </div>



    </div>
  );
}

export default SliderItem;
