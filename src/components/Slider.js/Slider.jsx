import React from 'react';
import './Slider.css';

function Slider(props) {

  const { activeIndex, children } = props;

  const handlePrevClick = () => {
    props.updateIndex(activeIndex - 1, children);
  }

  const handleNextClick = () => {
    props.updateIndex(activeIndex + 1, children);
  }

  let startTouchPosition = null;

  // Устанавливает координаты нажатия нажатия на экран
  const handleTouchStart = (e) => {
    startTouchPosition = e.touches[0].clientX;
  }

  // Определяет наличие свайпа
  const handleTouchMove = (e) => {
    if (startTouchPosition === null) return;
    const currentTouch = e.touches[0].clientX
    const diff = startTouchPosition - currentTouch
    if (diff > 8) handleNextClick();
    if (diff < -8) handlePrevClick();
    startTouchPosition = null;
  }

  return (
    <div className='slider'>

      {/* Стрелка для перемещения по слайдам */}
      <button className='slider__arrow slider__arrow_type_left' onClick={handlePrevClick}></button>

      <div className="slider__container">
        <div
          className='slider__inner'
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}>

          {React.Children.map(children, (child, index) => { // Добавление слайдов на страницу
            return React.cloneElement(child, props, ...children);
          })}

        </div>
      </div>

      {/* Стрелка для перемещения по слайдам */}
      <button className='slider__arrow slider__arrow_type_right' onClick={handleNextClick}></button>

      {/* Индикаторы под слайдером для переключения слайдов */}
      <div className='slider__pagination'>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'slider__pagination-item slider__pagination-item_active' : 'slider__pagination-item'}`}
              onClick={() => props.updateIndex(index, children)}>
            </button>
          )
        })}
      </div>

    </div>
  );
}
















export default Slider;
