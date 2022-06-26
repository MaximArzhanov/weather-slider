import React from 'react';
import './SliderItem.css';

function SliderItem({ children, width }) {

  return (
    <div className='slider-item' style={{ width: width }}>
      {children}
    </div>
  );
}

export default SliderItem;
