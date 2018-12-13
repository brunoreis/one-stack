import React from 'react';
import PropTypes from 'prop-types';

import iconStyle from '../iconStyle';

import bgImage from '../../../images/gardener-icon.png';

const RecipesButton = ({ action }) => (
  <div
    style={{
      cursor: 'pointer',
    }}
    onClick={action}
  >
    <div style={iconStyle(bgImage)} />
    <div
      className="text-center"
      style={{ color: 'black' }}
    >
      <small>Jardineiro</small>
    </div>
  </div>
);

RecipesButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default RecipesButton;
