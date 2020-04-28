import React from 'react';
import './SingUp.scss';
import Button from '../../UI/Button/Button';
import BigTitle from '../../UI/BitTitle/BitTitle';
import SmallTitle from '../../UI/SmallTitle/SmallTitle';
import Input from '../../UI/Input/Input';

const SingUp = () => {
  return (
    <div className='SingUp'>
      <div className='activeZone'>
        <div className='header'>
          <Button
            text='Sing in'
            boxShadow='none'
            color='#6E7989'
            bgcolor='transparent'
            fz='17px'
            textTransform='capitalize'
          />
          <p>Sing up</p>
        </div>

        <form action=''>
          <BigTitle text='Welcome to Grocery App' mb='5px' />
          <SmallTitle text={`Let's get started`} mb='40px' />

          <Input placeholder='Username' type='text' mb='37px' />
          <Input placeholder='Email address' type='email' mb='37px' />
          <Input placeholder='Password' type='password' mb='24px' />

          <Button
            text='SIGN UP'
            bgcolor='#29C17E'
            width='94px'
            height='36px'
            color='white'
            ml='auto'
          />
        </form>
      </div>
    </div>
  );
};

export default SingUp;
