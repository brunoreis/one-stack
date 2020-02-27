import React, { Suspense } from 'react';
import { useQuery } from '@apollo/react-hooks';

import ErrorHandler from '../../../../components/ErrorAndLoading/ErrorHandler';

import Gardener from './Gardener/Gardener';
import GARDENERS_QUERY from './GARDENERS_QUERY';
import getConnectionNodes from '../../../../helpers/getConnectionNodes';

const GardenerList = () => {
  const {
    // loading,
    error,
    errors,
    data,
  } = useQuery(
    GARDENERS_QUERY,
    // { suspend: false },
  );

  // if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  if (errors) return <ErrorHandler error={{ graphQLErrors: errors }} />;
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

const WithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <GardenerList />
  </Suspense>
);

export default WithSuspense;
