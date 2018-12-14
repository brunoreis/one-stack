import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ action }) => (
  <button
    className="btn rounded-circle bg-primary m-2"
    style={{
      height: '50px',
      width: '50px',
    }}
    type="button"
    onClick={action}
  >
    <i className="fas fa-plus" />
  </button>
);

AddButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default AddButton;
