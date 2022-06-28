import React from 'react';
import './Popup.css';
import TableContainer from '../Table/TableContainer';
import Loading from '../Loading/Loading';

function Popup(props) {

  const handleClick = (e) => {
    props.closePopup(e);
  }

  return (
    <div className='overlay overlay_opened' onClick={handleClick}>
      <div className='popup'>
        <button className='popup__close' onClick={handleClick}></button>
        { props.isLoading ? <Loading loadingClassList='loading loading_color_blue loading_size_large' /> : <TableContainer /> }
      </div>
    </div>
  );
}

export default Popup;
