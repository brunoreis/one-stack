import React from 'react';
import PropTypes from 'prop-types';

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

RecipesIcon.propTypes = {
  recipeNumber: PropTypes.number.isRequired,
};

export default RecipesIcon;
