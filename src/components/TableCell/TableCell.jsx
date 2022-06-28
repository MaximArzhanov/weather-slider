import React from 'react';
import './TableCell.css';

function TableCell(props) {

  return (
    <div className='table__cell'>
      {props.item}
    </div>
  );
}

export default TableCell;
