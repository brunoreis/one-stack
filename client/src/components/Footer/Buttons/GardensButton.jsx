import React from 'react';

import iconStyle from '../iconStyle';

import bgImage from '../../../images/garden-icon.png';

const RecipesButton = () => (
  <div
    style={{
      cursor: 'pointer',
    }}
    onClick={() => console.log('go to gardens')}
  >
    <div style={iconStyle(bgImage)} />
    <div
      className="text-center"
      style={{ color: 'black' }}
    >
      <small>Jardins</small>
    </div>
  </div>
);

export default RecipesButton;
