import React from 'react';
import './Popup.css';

function Popup(props) {

  const handleClick = (e) => {
    props.closePopup(e);
  }

  return (
    <div className='overlay overlay_opened' onClick={handleClick}>
      <div className='popup'>
        123
      </div>
    </div>
  );
}

export default Popup;
