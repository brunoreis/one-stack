import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo-hooks';
import { withRouter } from 'react-router';

import ErrorHandler from '../../../../components/ErrorAndLoading/ErrorHandler';

import PlantItem from './PlantItem/PlantItem';
import PLANTS_QUERY from './PLANTS_QUERY';
import getConnectionNodes from '../../../../helpers/getConnectionNodes';

const PlantList = ({ history }) => {
  // const queryResult = useQuery(
  const { loading, error, data } = useQuery(
    PLANTS_QUERY,
    {
      // suspend: false,
      // fetchPolicy: 'network-only',
      // errorPolicy: 'all',
    },
  );
  // console.log(queryResult);
  // const { loading, error, data } = queryResult;
  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorHandler error={error} />;
  const plants = getConnectionNodes(data.plantsConnection);
  return (
    <div>
      {plants.map(plant => (
        <div
          key={plant.id}
          onClick={() => history.push(`/plant-details/${plant.id}`)}
        >
          <PlantItem plant={plant} />
        </div>
      ))}
    </div>
  );
};

PlantList.propTypes = {
  history: PropTypes.object.isRequired,
};

// export default withRouter(PlantList);
const WithRouter = withRouter(PlantList);
export default props => (
  <Suspense fallback={<div>Loading...</div>}>
    <WithRouter {...props} />
  </Suspense>
);
