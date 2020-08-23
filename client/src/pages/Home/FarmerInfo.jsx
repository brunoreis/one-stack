import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './FarmerInfo.module.scss';

const FarmerInfo = ({ farmer }) => {
  const history = useHistory();
  return (
    <div className={`${styles.container} ${farmer ? styles.hasInfo : ''}`}>
      {farmer ? (
        <div
          className={styles.producerInfo}
          onClick={() => history.push(`entity/${farmer.id}`)}
        >
          <div className={styles.row}>{`Nome: ${farmer.name}`}</div>
          <div className={styles.row}>{`Descrição: ${farmer.description}`}</div>
          <div className={styles.row}>{`Localização: ${farmer.latitude}, ${farmer.longitude}`}</div>
        </div>
      ) : (
        <div className={styles.row}>Selecione um produtor</div>
      )}
    </div>
  );
};

FarmerInfo.propTypes = {
  farmer: PropTypes.object,
};

FarmerInfo.defaultProps = {
  farmer: undefined,
};

export default FarmerInfo;
