import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Manufacturer from './Manufacturer';
import Products from './Products';
import UsersContainer from './Users/UsersContainer';
import LoginContainer from './auth/Login/LoginContainer';
import LoggedUserContainer from './LoggedUser/LoggedUserContainer';
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
        <Route exact path="/users" component={UsersContainer} />
        <Route exact path="/loggedUser" component={LoggedUserContainer} />
        <Route exact path="/forgot" component={PasswordForgotContainer} />
        <Route exact path="/reset/:token" component={PasswordResetContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
