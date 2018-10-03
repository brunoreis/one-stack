import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Manufacturer from './Manufacturer';
import Products from './Products';
import Users from './Users';
import LoginContainer from './auth/Login/LoginContainer';
import LoggedUser from './LoggedUser';
import PasswordForgotContainer from './auth/PasswordForgot/PasswordForgotContainer';
import PasswordResetContainer from './auth/passwordReset/PasswordResetContainer';

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={Manufacturer} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/loggedUser" component={LoggedUser} />
        <Route exact path="/forgot" component={PasswordForgotContainer} />
        <Route exact path="/reset/:token" component={PasswordResetContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
