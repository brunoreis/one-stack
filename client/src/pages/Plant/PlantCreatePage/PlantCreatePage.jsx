import React from 'react';
import PropTypes from 'prop-types';

import PlantCreateForm from './PlantCreateForm/PlantCreateForm';

const PlantCreatePage = ({ setHeader }) => {
  setHeader('ADICIONAR UMA PLANTA');
  return <PlantCreateForm />;
};

PlantCreatePage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};

export default PlantCreatePage;
