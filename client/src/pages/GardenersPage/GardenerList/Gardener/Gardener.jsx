import React from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/common__fonts.css';
import './styles.css';

import RecipesIcon from './RecipesIcon/RecipesIcon';
import noUserIcon from '../../../../images/no-user-icon.png';

const Gardener = ({ gardener }) => (
  <div className="gardener common__fonts__normal">
    <div className="gardener__picture-and-info">
      <img
        className="gardener__picture"
        src={gardener.picture || noUserIcon}
        alt="gardener profile"
      />
      <div className="gardener__name-and-description">
        <div className="gardener__name">
          {gardener.name}
        </div>
        <div className="common__fonts__with-hidden-text">
          {gardener.description}
        </div>
      </div>
    </div>
    <div className="gardener__gardens-and-recipes">
      <div className="common__fonts__with-hidden-text">
        <span className="gardener__gardens">
          JARDINS:
          {' '}
        </span>
        {gardener.gardensConnection
        && gardener.gardensConnection.edges.length > 0
          ? gardener.gardensConnection.edges.map(({ node }) => (
            <span key={node.id}>
              {node.name}
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
