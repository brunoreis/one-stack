import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import FarmersMap from '../../components/FarmersMap/FarmersMap';

import '../PageStyles.css';
import FARMERS_QUERY from './FARMERS_QUERY';
import ErrorHandler from '../../components/ErrorAndLoading/ErrorHandler';
import FarmerInfo from './FarmerInfo';
import styles from './HomePage.module.css';
import FarmersList from './FarmersList';

const HomePage = () => {
  const [selectedFarmer, setSelectedFarmer] = useState();

  const history = useHistory();

  const queryResult = useQuery(FARMERS_QUERY);

  if (queryResult.loading) return <div>Loading...</div>;
  if (queryResult.error) return <ErrorHandler error={queryResult.error} />;
  const { entities } = queryResult.data;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mapTitle}>
        Mapa de Produtores Agroecológicos
      </div>
      <div className={styles.mapAndInfo}>
        <FarmersList
          farmers={entities}
          selectedFarmer={selectedFarmer}
          selectFarmerCallback={setSelectedFarmer}
        />
        <FarmersMap
          style={{
            width: '500px',
            height: '500px',
          }}
          farmers={entities}
          onFarmerSelected={setSelectedFarmer}
        />
        <FarmerInfo farmer={selectedFarmer} />
      </div>
      <button
        type='button'
        style={{ margin: '30px' }}
        onClick={() => history.push('entity-create')}
      >
        Criar nova entidade
      </button>
    </div>
  );
};


HomePage.propTypes = {};

export default HomePage;
