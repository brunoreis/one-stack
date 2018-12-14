import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import ErrorHandler from '../../../../components/ErrorAndLoading/ErrorHandler';

import Gardener from './Gardener/Gardener';
import GARDENERS_QUERY from './GardenersQuery';
import getConnectionNodes from '../../../../helpers/getConnectionNodes';

const GardenerList = () => {
  const { loading, error, data } = useQuery(
    GARDENERS_QUERY,
    { suspend: false },
  );

  if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  const gardeners = getConnectionNodes(data.gardenersConnection);
  return (
    <div>
      {gardeners.map(gardener => (
        <div key={gardener.id}>
          <Gardener gardener={gardener} />
        </div>
      ))}
    </div>
  );
};

export default GardenerList;
