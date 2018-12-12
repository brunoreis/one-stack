import React from 'react';
import PropTypes from 'prop-types';

import iconStyle from '../iconStyle';

import bgImage from '../../../images/home-icon.png';

const HomeButton = ({ action }) => (
  <div
    style={{
      cursor: 'pointer',
      ...iconStyle(bgImage),
    }}
    onClick={action}
  />
);

HomeButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default HomeButton;
