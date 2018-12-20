import React from 'react';
import PropTypes from 'prop-types';

import PlantEditForm from './PlantEditForm/PlantEditForm';

const PlantEditPage = ({
  setHeader,
  match: { params: { id } },
  location: { state: { plant } },
}) => {
  console.log(plant);
  setHeader('EDITAR A PLANTA');
  return (
    plant
      ? <PlantEditForm plantId={parseInt(id, 10)} plant={plant} />
      : <PlantEditForm plantId={parseInt(id, 10)} />
  );
};

PlantEditPage.propTypes = {
  match: PropTypes.object.isRequired,
  setHeader: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default PlantEditPage;
