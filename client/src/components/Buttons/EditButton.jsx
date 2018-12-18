import React from 'react';
import PropTypes from 'prop-types';

const EditButton = ({ action }) => (
  <button
    className="btn rounded-circle bg-primary m-2"
    style={{
      height: '50px',
      width: '50px',
    }}
    type="button"
    onClick={action}
  >
    <i className="fas fa-edit" />
  </button>
);

EditButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default EditButton;
