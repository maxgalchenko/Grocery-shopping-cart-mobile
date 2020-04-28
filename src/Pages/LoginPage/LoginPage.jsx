import React from 'react';
import WelcomeTo from '../../Components/WelcomeTo/WelcomeTo';
import SingUp from '../../Components/SingUp/SingUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const LoginPage = () => {
  return (
    <BrowserRouter>
      <div className='LoginPage'>
        <Switch>
          <Route path='/' component={WelcomeTo} exact />

          <Route path='/singup' component={SingUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default LoginPage;
