import React from 'react';

import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import RecipesButton from './Buttons/RecipesButton';
import GardenerButton from './Buttons/GardenerButton';
import GardensButton from './Buttons/GardensButton';
import PlantsButton from './Buttons/PlantsButton';
import HomeButton from './Buttons/HomeButton';

const Footer = ({ history }) => {
  const redirect = page => () => history.push(page);

  return (
    <nav
      className="navbar navbar-dark bg-dark"
      style={{ height: '75px' }}
    >
      <div className="row w-100 no-gutters justify-content-between">
        <div className="col">
          <RecipesButton />
        </div>
        <div className="col">
          <GardenerButton action={redirect('/gardener-details')} />
        </div>
        <div className="col">
          <HomeButton action={redirect('/')} />
        </div>
        <div className="col">
          <GardensButton />
        </div>
        <div className="col">
          <PlantsButton action={redirect('/plant-list')} />
        </div>
      </div>
    </nav>
  );
};
Footer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Footer);
