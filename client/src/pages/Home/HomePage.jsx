import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import FarmersMap from '../../components/FarmersMap/FarmersMap';

import '../PageStyles.css';
import FARMERS_QUERY from './FARMERS_QUERY';
import ErrorHandler from '../../components/ErrorAndLoading/ErrorHandler';

const HomePage = ({ setHeader }) => {
  setHeader('HOME');
  const queryResult = useQuery(FARMERS_QUERY);
  if (queryResult.loading) return <div>Loading...</div>;
  if (queryResult.error) return <ErrorHandler error={queryResult.error} />;
  const { entities } = queryResult.data;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <FarmersMap
        style={{
          width: '500px',
          height: '500px',
        }}
        farmers={entities}
      />
    </div>
  );
};

HomePage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};

export default HomePage;
