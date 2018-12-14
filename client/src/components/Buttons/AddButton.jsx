import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ action }) => (
  <div
    className=""
    onClick={action}
  >
    <div className="" />
  </div>
);

AddButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default AddButton;
