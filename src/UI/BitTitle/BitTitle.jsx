import React from 'react';
import './BitTitle.scss';

const BitTitle = ({ text, mb }) => {
  return (
    <h1 className='BitTitle' style={{ marginBottom: mb }}>
      {text}
    </h1>
  );
};

export default BitTitle;
