import React from 'react';

import './styles.css';

const GardenerButton = () => (
  <div
    className="gardener-button__container"
    onClick={() => console.log('go to gardener')}
  >
    <div className="gardener-button__icon" />
    <div className="gardener-button__label">
      Jardineiro
    </div>
  </div>
);

export default GardenerButton;
