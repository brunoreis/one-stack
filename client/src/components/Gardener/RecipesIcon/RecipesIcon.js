import React from 'react';

import './styles.css';

const RecipesIcon = ({ recipeNumber }) => (
  <div className="recipe-icon">
    <div className="recipe-icon__image" />
    <div className="recipe-icon__number-backgroud">
      <div className="recipe-icon__number-text">
        {recipeNumber}
      </div>
    </div>
  </div>
);

export default RecipesIcon;
