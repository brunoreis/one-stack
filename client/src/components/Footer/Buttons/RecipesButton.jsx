import React from 'react';

import iconStyle from '../iconStyle';

import bgImage from '../../../images/cook.png';

const RecipesButton = () => (
  <div
    style={{
      cursor: 'pointer',
    }}
    onClick={() => console.log('go to recipes')}
  >
    <div
      style={iconStyle(bgImage)}
    />
    <div
      className="text-center"
      style={{ color: 'black' }}
    >
      <small>Receitas</small>
    </div>
  </div>
);

export default RecipesButton;
