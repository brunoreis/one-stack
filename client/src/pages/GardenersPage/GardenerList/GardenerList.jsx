import React from 'react';
import PropTypes from 'prop-types';

import Gardener from './Gardener/Gardener';

const GardenerList = ({
  gardeners,
}) => (
  <div>
    {gardeners.map(gardener => (
      <div key={gardener.id}>
        <Gardener gardener={gardener} />
      </div>
    ))}
  </div>
);

GardenerList.propTypes = {
  gardeners: PropTypes.array.isRequired,
};

export default GardenerList;
