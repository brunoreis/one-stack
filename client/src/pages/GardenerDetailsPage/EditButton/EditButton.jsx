import React from 'react';

import './styles.css';

const EditButton = () => (
  <div
    className="gardener__details__edit-button"
    onClick={() => console.log('edit gardener')}
  >
    <div className="gardener__details__edit-button__icon" />
  </div>
);

export default EditButton;
