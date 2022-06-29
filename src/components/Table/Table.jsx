import React from 'react';
import './Table.css';
import TableHeader from '../TableHeader/TableHeader';
import TableCaption from '../TableCaption/TableCaption';
import TableRow from '../TableRow/TableRow';

function Table(props) {

  let cityName = '';
  if (props.weatherHistory.length !== 0) {
    cityName = props.weatherHistory[0].location.name
  }

  return (
    <div className='table'>
      <TableHeader cityName={cityName} />
      <div className='table__container'>
        <TableCaption />
        {props.weatherHistory.map((item, index) => <TableRow key={index} weatherHistoryOnDate={item} />)}
      </div>
    </div >
  );
}

export default Table;
