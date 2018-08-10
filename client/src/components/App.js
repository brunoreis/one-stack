import React, { Component } from 'react';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Manufacturer from './Manufacturer'
import Products from './Products'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={Manufacturer} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
