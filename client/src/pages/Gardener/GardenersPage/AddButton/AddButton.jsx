import React from 'react';

import './styles.css';

const AddButton = () => (
  <div
    className="gardener__list__add-button"
    onClick={() => console.log('add gardener')}
  >
    <div className="gardener__list__add-button__icon" />
  </div>
);

export default AddButton;
