import React from 'react';
import PropTypes from 'prop-types';

import PlantEditForm from './PlantEditForm/PlantEditForm';

const PlantEditPage = ({ setHeader, plantId }) => {
  setHeader('EDITAR A PLANTA');
  return <PlantEditForm plantId={plantId} />;
};

PlantEditPage.propTypes = {
  plantId: PropTypes.number.isRequired,
  setHeader: PropTypes.func.isRequired,
};

export default PlantEditPage;
