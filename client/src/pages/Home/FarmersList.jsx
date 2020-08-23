import React from 'react';
import PropTypes from 'prop-types';
import styles from './FarmersList.module.scss';

const FarmersList = ({
  farmers,
  selectedFarmer,
  selectFarmerCallback,
}) => (
  <div className={`${styles.container}`}>
    {farmers.map(farmer => {
      const isSelectedRow = farmer.id === selectedFarmer?.id;
      return (
        <div
          key={farmer.id}
          className={`${styles.listRow} ${isSelectedRow ? styles.selectedRow : ''}`}
          onClick={() => selectFarmerCallback(farmer)}
        >
          {farmer.name}
        </div>
      );
    })}
  </div>
);

FarmersList.propTypes = {
  farmers: PropTypes.array.isRequired,
  selectedFarmer: PropTypes.object,
  selectFarmerCallback: PropTypes.func,
};

FarmersList.defaultProps = {
  selectedFarmer: undefined,
  selectFarmerCallback: () => null,
};

export default FarmersList;
