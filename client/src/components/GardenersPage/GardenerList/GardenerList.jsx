import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Gardener from './Gardener/Gardener';
import SearchIcon from './SearchIcon/SearchIcon';

const GardenerList = ({ gardeners }) => (
  <div className="gardener-list__container">
    <div className="gardener-list__search">
      <SearchIcon />
      <div className="gardener-list__search__text">
          PESQUISAR POR: TODOS
      </div>
    </div>
    <div className="gardener-list__gardeners__container">
      {gardeners.map(gardener => (
        <div key={gardener.id}>
          <Gardener gardener={gardener} />
        </div>
      ))}
    </div>
  </div>
);

GardenerList.propTypes = {
  gardeners: PropTypes.array.isRequired,
};

export default GardenerList;
