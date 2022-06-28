import React from 'react';
import './Loading.css';

function Loading(props) {

  const classList = props.loadingClassList;

  return (
    <div className={classList}>
    </div>
  );
}

export default Loading;
