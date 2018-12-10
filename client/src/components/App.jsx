import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './Header';
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

import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = () => (
  // <div>
  //   <Header />
  //   {/* <div className="my-4" /> */}
  //   <div>
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route exact path="/users" component={Users} />
  //       <Route exact path="/logged-user" component={LoggedUser} />
  //       <Route exact path="/gardeners" component={GardenersPage} />
  //       <Route exact path="/gardener-details" component={GardenerDetailsPage} />
  //       <Route exact path="/signup" component={GardenerCreatePage} />
  //       <Route exact path="/login" component={Login} />
  //       <Route exact path="/forgot" component={PasswordForgot} />
  //       <Route exact path="/reset/:token" component={PasswordReset} />
  //       <Route exact path="/gardener-edit" component={GardenerEditPage} />
  //     </Switch>
  //   </div>
  // </div>
  <div>

    <div
      className="fixed-top mx-auto"
      style={{
        maxWidth: '720px',
      }}
    >
      <Header text="teste" />
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
      className="container mx-auto bg-white"
      style={{
        maxWidth: '720px',
        padding: '75px 0px',
        minHeight: '100vh',
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/logged-user" component={LoggedUser} />
        <Route exact path="/gardeners" component={GardenersPage} />
        <Route exact path="/gardener-details" component={GardenerDetailsPage} />
        <Route exact path="/signup" component={GardenerCreatePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={PasswordForgot} />
        <Route exact path="/reset/:token" component={PasswordReset} />
        <Route exact path="/gardener-edit" component={GardenerEditPage} />
      </Switch>
    </div>

  </div>
);

export default App;
