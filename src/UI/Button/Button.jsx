import React from 'react';

import './Button.scss';

const Button = ({ width, height, color, bgcolor, text, mb, boxShadow }) => {
  return (
    <button
      style={{
        width,
        height,
        color,
        boxShadow,
        marginBottom: mb,
        background: bgcolor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
