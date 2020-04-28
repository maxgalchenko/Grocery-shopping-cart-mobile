import React from 'react';
import './Input.scss';

const Input = ({ type, label, placeholder, value, mb }) => {
  return (
    <label htmlFor='' className='Input' style={{ marginBottom: mb }}>
      {label}
      <input type={type} placeholder={placeholder} value={value} required />
    </label>
  );
};

export default Input;
