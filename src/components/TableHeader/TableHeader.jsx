import React from 'react';
import './TableHeader.css';

function TableHeader(props) {

  return (
    <div className='table__header'>
      <h2 className='table__title'>Погода за прошедшие 7 дней</h2>
      <h3 className='table__subtitle'>{props.cityName}</h3>
    </div>
  );
}

export default TableHeader;
