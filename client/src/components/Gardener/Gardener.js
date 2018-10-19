import React from 'react';

import './styles/styles.css';
import './styles/fonts.css';

import gardener from './mocks';
import RecipesIcon from './RecipesIcon/RecipesIcon';

const Gardener = () => (
  <div className="gardener__container">
    <div className="gardener__picture-and-info">
      <img
        className="gardener__picture"
        src={gardener.picture}
        alt="https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png"
      />
      <div className="gardener__name-and-text">
        <div className="gardener__name gardener__name-font">
          {gardener.name}
        </div>
        <div className="gardener__text gardener__text-font">
          {gardener.text}
        </div>
      </div>
    </div>
    <div className="gardener__gardens-and-recipes">
      <div className="gardener__gardens gardener__text-font">
        <span className="gardener__gardens-font">
          JARDINS:
          {' '}
        </span>
        {gardener.gardens.map(garden => (
          <span className="gardener__text-font" key={garden.id}>
            {garden.name}
            {', '}
          </span>
        ))}
      </div>
      <div className="gardener__recipes-icon">
        <RecipesIcon
          recipeNumber={gardener.recipes.length}
        />
      </div>
    </div>
  </div>
);

export default Gardener;
