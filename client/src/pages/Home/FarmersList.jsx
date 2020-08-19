import React from 'react';
import PropTypes from 'prop-types';
import styles from './FarmersList.module.css';

const FarmersList = ({
  farmers,
  selectedFarmer,
  selectFarmerCallback,
}) => {
  return (
    <div className={styles.container}>
      Farmers list
    </div>
  );
};

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
