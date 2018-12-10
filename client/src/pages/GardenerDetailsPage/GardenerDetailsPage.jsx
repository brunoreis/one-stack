import React from 'react';
import PropTypes from 'prop-types';

import GardenerDetails from './GardenerDetails/GardenerDetails';
import EditButton from './EditButton/EditButton';

const goToEditPage = history => history.push('gardener-edit');

const GardenerDetailsPage = ({ history }) => (
  <div>

    <GardenerDetails />

    <EditButton onClick={() => goToEditPage(history)} />

  </div>
);

GardenerDetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default GardenerDetailsPage;
