import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.css';
import './styles/fonts.css';

import RecipesIcon from './RecipesIcon/RecipesIcon';

const Gardener = ({ gardener }) => (
  <div className="gardener">
    <div className="gardener__picture-and-info">
      <img
        className="gardener__picture"
        src={gardener.picture}
        alt="no pic"
      />
      <div className="gardener__name-and-description">
        <div className="gardener__name-font">
          {gardener.name}
        </div>
        <div className="gardener__description-font">
          {gardener.description}
        </div>
      </div>
    </div>
    <div className="gardener__gardens-and-recipes">
      <div className="gardener__description-font">
        <span className="gardener__gardens-font">
          JARDINS:
          {' '}
        </span>
        {gardener.gardens && gardener.gardens.length > 0
          ? gardener.gardens.map(garden => (
            <span key={garden.id}>
              {garden.name}
              {', '}
            </span>))
          : (
            <span>
              Não há jardins cadastrados
            </span>)
        }
      </div>
      <RecipesIcon
        recipeNumber={
          (
            gardener.recipesConnection
            && gardener.recipesConnection.totalCount
          ) || 0
        }
      />
    </div>
  </div>
);

Gardener.propTypes = {
  gardener: PropTypes.object.isRequired,
};

export default Gardener;
