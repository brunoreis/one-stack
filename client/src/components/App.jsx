import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Manufacturer from './Manufacturer';
import UsersContainer from './Users/UsersContainer';
import Login from './auth/Login/Login';
import LoggedUserContainer from './LoggedUser/LoggedUserContainer';
import PasswordForgotContainer from './auth/PasswordForgot/PasswordForgotContainer';
import PasswordResetContainer from './auth/passwordReset/PasswordResetContainer';
import GardenersPage from '../pages/GardenersPage/GardenersPage';
import GardenerDetailsPage from '../pages/GardenerDetailsPage/GardenerDetailsPage';
import GardenerCreatePage from '../pages/GardenerCreatePage/GardenerCreatePage';
import GardenerEditPage from '../pages/GardenerEditPage/GardenerEditPage';

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={Manufacturer} />
        <Route exact path="/users" component={UsersContainer} />
        <Route exact path="/logged-user" component={LoggedUserContainer} />
        <Route exact path="/gardeners" component={GardenersPage} />
        <Route exact path="/gardener-details" component={GardenerDetailsPage} />
        <Route exact path="/signup" component={GardenerCreatePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={PasswordForgotContainer} />
        <Route exact path="/reset/:token" component={PasswordResetContainer} />
        <Route exact path="/gardener-edit" component={GardenerEditPage} />
      </Switch>
    </div>
  </div>
);

export default App;
