import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';

import Home from './Home';
import Users from './Users/Users';
import Login from './auth/Login/Login';
import LoggedUser from './LoggedUser/LoggedUser';
import PasswordForgot from './auth/PasswordForgot/PasswordForgot';
import PasswordReset from './auth/passwordReset/PasswordReset';
import GardenersPage from '../pages/GardenersPage/GardenersPage';
import GardenerDetailsPage from '../pages/GardenerDetailsPage/GardenerDetailsPage';
import GardenerCreatePage from '../pages/GardenerCreatePage/GardenerCreatePage';
import GardenerEditPage from '../pages/GardenerEditPage/GardenerEditPage';

const App = () => {
  const [header, setHeader] = useState('HOME');
  const setNewHeader = newHeader => (newHeader !== header) && setHeader(newHeader);
  return (
    <div>

      <div
        className="fixed-top mx-auto"
        style={{
          maxWidth: '720px',
        }}
      >
        <Header text={header} />
      </div>

      <div
        className="mx-auto fixed-bottom"
        style={{
          maxWidth: '720px',
        }}
      >
        <Footer />
      </div>

      <div
        style={{
          position: 'fixed',
          left: 0,
        }}
      >
        <SideMenu />
      </div>

      <div
        className="container mx-auto bg-white"
        style={{
          maxWidth: '720px',
          padding: '75px 0px',
          minHeight: '100vh',
        }}
      >
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} setHeader={setNewHeader} />}
          />
          <Route
            exact
            path="/gardeners"
            render={props => <GardenersPage {...props} setHeader={setNewHeader} />}
          />
          <Route
            exact
            path="/gardener-details"
            render={props => <GardenerDetailsPage {...props} setHeader={setNewHeader} />}
          />
          <Route
            exact
            path="/gardener-edit"
            render={props => <GardenerEditPage {...props} setHeader={setNewHeader} />}
          />
          <Route
            exact
            path="/signup"
            render={props => <GardenerCreatePage {...props} setHeader={setNewHeader} />}
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} setHeader={setNewHeader} />}
          />
          <Route exact path="/forgot" component={PasswordForgot} />
          <Route exact path="/reset/:token" component={PasswordReset} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/logged-user" component={LoggedUser} />
        </Switch>
      </div>

    </div>
  );
};

export default App;
