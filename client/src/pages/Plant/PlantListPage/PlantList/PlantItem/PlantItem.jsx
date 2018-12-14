import React from 'react';
import PropTypes from 'prop-types';

const PlantItem = ({ plant }) => {
  console.log(plant);
  return (
    <div>
      sou uma planta {plant.name}
    </div>
  );
};

PlantItem.propTypes = {
  plant: PropTypes.object.isRequired,
};

export default PlantItem;
