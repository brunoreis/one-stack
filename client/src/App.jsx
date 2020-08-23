import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/HomePage';
import EntityCreatePage from './pages/Entity/EntityCreatePage/EntityCreatePage';
import EntityDetailsPage from './pages/Entity/EntityDetailsPage/EntityDetailsPage';

import './sass/App.scss';

const App = () => (
  <div
    className='container mx-auto bg-white'
    style={{
      padding: '75px 0px',
      minHeight: '100vh',
    }}
  >
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/entity-create'>
        <EntityCreatePage />
      </Route>
      <Route exact path='/entity/:entityId'>
        <EntityDetailsPage />
      </Route>
      {/* <Route
        exact
        path='/profile'
        render={props => <LoggedUserProfilePage {...props} setHeader={setNewHeader} />}
      />
      <Route
        exact
        path='/gardeners'
        render={props => <GardenerListPage {...props} setHeader={setNewHeader} />}
      />
      <Route
        exact
        path='/gardener-details'
        render={props => <GardenerDetailsPage {...props} setHeader={setNewHeader} />}
      />
      <Route
        exact
        path='/gardener-edit'
        render={props => <GardenerEditPage {...props} setHeader={setNewHeader} />}
      />
      <Route
        exact
        path='/signup'
        render={props => <GardenerCreatePage {...props} setHeader={setNewHeader} />}
      />
      <Route
        exact
        path='/login'
        render={props => <Login {...props} setHeader={setNewHeader} />}
      />

      <Route
        exact
        path='/plant-list'
        render={props => <PlantListPage {...props} setHeader={setNewHeader} />}
      />
      <Route
        exact
        path='/plant-create'
        render={props => <PlantCreatePage {...props} setHeader={setNewHeader} />}
      />
      <Route
        exact
        path='/plant-edit/:id'
        render={props => <PlantEditPage {...props} setHeader={setNewHeader} />}
      />
      <Route
        exact
        path='/plant-details/:id'
        render={props => <PlantDetailsPage {...props} setHeader={setNewHeader} />}
      />

      <Route exact path='/forgot' component={PasswordForgot} />
      <Route exact path='/reset/:token' component={PasswordReset} /> */}
      <Route>
        Not found
      </Route>
    </Switch>
  </div>
);

export default App;
