import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const EditButton = ({ onClick }) => (
  <div
    className="gardener__details__edit-button"
    onClick={onClick}
  >
    <div className="gardener__details__edit-button__icon" />
  </div>
);

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditButton;
