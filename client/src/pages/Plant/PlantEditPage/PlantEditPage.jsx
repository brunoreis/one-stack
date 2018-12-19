import React from 'react';
import PropTypes from 'prop-types';

import PlantEditForm from './PlantEditForm/PlantEditForm';

const PlantEditPage = ({
  setHeader,
  match: { params: { id } },
}) => {
  setHeader('EDITAR A PLANTA');
  return <PlantEditForm plantId={parseInt(id, 10)} />;
};

PlantEditPage.propTypes = {
  match: PropTypes.object.isRequired,
  setHeader: PropTypes.func.isRequired,
};

export default PlantEditPage;
