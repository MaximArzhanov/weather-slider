import React from 'react';
import TableCell from '../TableCell/TableCell';
import './TableRow.css';
import { getFormatedDate } from '../../utils/utils';

function TableRow(props) {

  const {weatherHistoryOnDate} = props;

  const date = getFormatedDate(weatherHistoryOnDate.forecast.forecastday[0].date);
  const minTemp = weatherHistoryOnDate.forecast.forecastday[0].day.mintemp_c;
  const maxTemp = weatherHistoryOnDate.forecast.forecastday[0].day.maxtemp_c;
  const avarageTemp = weatherHistoryOnDate.forecast.forecastday[0].day.avgtemp_c;


  return (
    <div className='table__row'>
      <TableCell item={date} />
      <TableCell item={minTemp} />
      <TableCell item={maxTemp} />
      <TableCell item={avarageTemp} />
    </div>
  );
}

export default TableRow;
