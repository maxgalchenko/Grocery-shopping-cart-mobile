import React from 'react';
import logo from './images/logo.png';

import './WelcomeTo.scss';
import Button from '../../UI/Button/Button';

const WelcomeTo = () => {
  return (
    <section className='WelcomeTo'>
      <img src={logo} alt='grocery logo' />
      <p className='text'>
        Welcome to
        <b> Grocery</b> shopping
      </p>
      <Button
        bgcolor='white'
        text='SIGN IN'
        color='#29C17E'
        width='134px'
        height='36px'
        mb='24px'
      />

      <Button
        bgcolor='transparent'
        text='SIGN UP'
        color='#ffffff'
        width='134px'
        height='36px'
        boxShadow='none'
      />
    </section>
  );
};

export default WelcomeTo;
