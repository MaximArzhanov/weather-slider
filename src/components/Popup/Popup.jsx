import React from 'react';
import './Popup.css';
import TableContainer from '../Table/TableContainer';

function Popup(props) {

  const handleClick = (e) => {
    props.closePopup(e);
  }

  return (
    <div className='overlay overlay_opened' onClick={handleClick}>
      <div className='popup'>
        <button className='popup__close' onClick={handleClick}></button>
        <TableContainer />
      </div>
    </div>
  );
}

export default Popup;
