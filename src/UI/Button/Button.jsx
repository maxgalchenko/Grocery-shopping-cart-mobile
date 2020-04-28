import React from 'react';

import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({
  mr,
  ml,
  width,
  height,
  color,
  bgcolor,
  text,
  mb,
  boxShadow,
  fz,
  fontWeight,
  textTransform,
  link,
}) => {
  return (
    <Link
      to={link || 'lal'}
      style={{
        width,
        height,
        color,
        boxShadow,
        marginBottom: mb,
        background: bgcolor,
        fontSize: fz || '14px',
        marginLeft: ml,
        marginRight: mr,
        fontWeight,
        textTransform: textTransform || 'uppercase',
      }}
    >
      {text}
    </Link>
  );
};

export default Button;
