import React from 'react';

import './styles.css';

const PlantsButton = () => (
  <div
    className="plants-button__container"
    onClick={() => console.log('go to plants')}
  >
    <div className="plants-button__icon" />
    <div className="plants-button__label">
      Plantas
    </div>
  </div>
);

export default PlantsButton;
