import React from 'react';

import iconStyle from '../iconStyle';

import bgImage from '../../../images/plant-icon.png';

const RecipesButton = () => (
  <div
    style={{
      cursor: 'pointer',
    }}
    onClick={() => console.log('go to plants')}
  >
    <div
      className=""
      style={iconStyle(bgImage)}
    />
    <div className="text-center">
      <small>Plantas</small>
    </div>
  </div>
);

export default RecipesButton;
