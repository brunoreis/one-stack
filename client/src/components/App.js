import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Manufacturer from './Manufacturer';
import Products from './Products';
import Users from './Users';
import Login from './Login';
import LoggedUser from './LoggedUser';

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
            <Route exact path="/users" component={Users} />
            <Route exact path="/loggedUser" component={LoggedUser} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
