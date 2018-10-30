import React from 'react';
import { graphql, compose } from 'react-apollo';

import GardenersQuery from './GardenersQuery';
import GardenerList from './GardenerList';
import ErrorAndLoading from '../../ErrorAndLoading/ErrorAndLoading';

import getConnectionNodes from '../../../helpers/getConnectionNodes';

const GardenerListWithErrorAndLoading = (
  {
    gardenersQuery: {
      loading,
      error,
      gardenersConnection,
    },
  },
) => (
  <ErrorAndLoading {...{ loading, error }}>
    <GardenerList gardeners={getConnectionNodes(gardenersConnection)} />
  </ErrorAndLoading>
);

const GardenerListContainer = compose(
  graphql(GardenersQuery, { name: 'gardenersQuery' }),
)(GardenerListWithErrorAndLoading);

export default GardenerListContainer;
