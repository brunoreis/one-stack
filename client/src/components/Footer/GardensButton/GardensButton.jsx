import React from 'react';

import iconStyle from '../iconStyle';

import bgImage from '../../../images/garden-icon.png';

const RecipesButton = () => (
  <div
    // className="container"
    style={{
      cursor: 'pointer',
    }}
    onClick={() => console.log('go to gardens')}
  >
    <div className="row">
      <div
        className="col-12"
        style={iconStyle(bgImage)}
      />
      <div className="col-12 text-center">
        <small>Jardins</small>
      </div>
    </div>
  </div>
);

export default RecipesButton;
