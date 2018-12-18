import React from 'react';
import PropTypes from 'prop-types';

import GardenerCreateForm from './GardenerCreateForm/GardenerCreateForm';

const GardenerCreatePage = ({ setHeader }) => {
  setHeader('SOU NOVO');
  return <GardenerCreateForm />;
};

GardenerCreatePage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};

export default GardenerCreatePage;
