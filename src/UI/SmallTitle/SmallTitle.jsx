import React from 'react';
import './SmallTitle.scss';

const SmallTitle = ({ mb, text }) => {
  return (
    <h2 className='SmallTitle' style={{ marginBottom: mb }}>
      {text}
    </h2>
  );
};

export default SmallTitle;
