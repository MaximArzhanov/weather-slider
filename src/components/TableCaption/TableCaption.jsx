import React from 'react';
import './TableCaption.css';

function TableCaption(props) {

  return (
    <div className='table__caption'>
      <div className='table__caption-item'>Дата</div>
      <div className='table__caption-item'>Минимальная температура ℃</div>
      <div className='table__caption-item'>Максимальная температура ℃</div>
      <div className='table__caption-item'>Средняя температура ℃</div>
    </div>
  );
}

export default TableCaption;
