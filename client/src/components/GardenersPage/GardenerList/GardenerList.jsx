import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Gardener from './Gardener/Gardener';
import SearchIcon from './SearchIcon/SearchIcon';
import ErrorHandler from '../../ErrorHandler';

const GardenerList = ({
  gardenersQuery: {
    loading,
    error,
    gardeners,
  },
}) => {
  if (loading) return <div>Fetching...</div>;
  if (error) return <ErrorHandler error={error} />;
  return (
    <div>
      <div className="gardener-list__search">
        <SearchIcon />
        <div className="gardener-list__search__text">
            PESQUISAR POR: TODOS
        </div>
      </div>
      {gardeners.map(gardener => (
        <div key={gardener.id}>
          <Gardener gardener={gardener} />
        </div>
      ))}
    </div>
  );
};

GardenerList.propTypes = {
  gardenersQuery: PropTypes.object.isRequired,
};

export default GardenerList;
