import React from 'react';

import './styles.css';

const AddButton = () => (
  <div
    className="add-button"
    onClick={() => console.log('add gardener')}
  >
    <div className="add-button__icon" />
  </div>
);

export default AddButton;
