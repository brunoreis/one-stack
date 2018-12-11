import React from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import './styles.css';
import RecipesButton from './RecipesButton/RecipesButton';
import GardenerButton from './GardenerButton/GardenerButton';
import GardensButton from './GardensButton/GardensButton';
import PlantsButton from './PlantsButton/PlantsButton';
import HomeButton from './HomeButton/HomeButton';

const Footer = ({ history }) => {
  const redirect = page => () => history.push(page);

  return (
    <nav
      className="navbar navbar-dark bg-dark"
    >
      <div className="row w-100 no-gutters justify-content-between">
        <div className="col">
          <RecipesButton />
        </div>
        <div className="col">
          <GardenerButton action={redirect('/gardener-details')} />
        </div>
        <div className="col">
          <HomeButton />
        </div>
        <div className="col">
          <GardensButton />
        </div>
        <div className="col">
          <PlantsButton />
        </div>
      </div>
    </nav>
  );
};
Footer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Footer);
