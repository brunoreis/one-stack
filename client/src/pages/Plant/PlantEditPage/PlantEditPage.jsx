import React from 'react';
import PropTypes from 'prop-types';

import PlantEditForm from './PlantEditForm/PlantEditForm';

const PlantEditPage = ({
  setHeader,
  match: { params: { id } },
  location: { state: { plant } },
}) => {
  setHeader('EDITAR A PLANTA');
  return (
    <PlantEditForm plantId={parseInt(id, 10)} plant={plant} />
  );
};

PlantEditPage.propTypes = {
  match: PropTypes.object.isRequired,
  setHeader: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default PlantEditPage;
