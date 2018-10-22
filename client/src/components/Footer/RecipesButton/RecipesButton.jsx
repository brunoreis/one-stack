import React from 'react';

import './styles.css';

const RecipesButton = () => (
  <div
    className="recipes-button__container"
    onClick={() => console.log('go to recipes')}
  >
    <div className="recipes-button__icon" />
    <div className="recipes-button__label">
      Receitas
    </div>
  </div>
);

export default RecipesButton;
