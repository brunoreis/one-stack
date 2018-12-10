import React from 'react';

import iconStyle from '../iconStyle';

import bgImage from '../../../images/home-icon.png';

const RecipesButton = () => (
  <div
    style={{
      cursor: 'pointer',
      ...iconStyle(bgImage),
    }}
    onClick={() => console.log('go to home')}
  />
);

export default RecipesButton;
