import React from 'react';

import './styles.css';

const GardensButton = () => (
  <div
    className="gardens-button__container"
    onClick={() => console.log('go to gardens')}
  >
    <div className="gardens-button__icon" />
    <div className="gardens-button__label">
      Jardins
    </div>
  </div>
);

export default GardensButton;
