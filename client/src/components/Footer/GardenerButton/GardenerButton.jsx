import React from 'react';

import iconStyle from '../iconStyle';

import bgImage from '../../../images/gardener-icon.png';

const RecipesButton = () => (
  <div
    style={{
      cursor: 'pointer',
    }}
    onClick={() => console.log('go to gardener')}
  >
    <div
      className=""
      style={iconStyle(bgImage)}
    />
    <div className="text-center">
      <small>Jardineiro</small>
    </div>
  </div>
);

export default RecipesButton;
