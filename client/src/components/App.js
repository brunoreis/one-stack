import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Manufacturer from './Manufacturer';
import Products from './Products';
import Users from './Users';
import Login from './Login';
import ApiLogin from './ApiLogin';
import LoggedUser from './LoggedUser';
import PasswordForgot from './PasswordForgot';
import PasswordReset from './PasswordReset';

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={Manufacturer} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/api-login" component={ApiLogin} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/loggedUser" component={LoggedUser} />
            <Route exact path="/forgot" component={PasswordForgot} />
            <Route exact path="/reset/:token" component={PasswordReset} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
