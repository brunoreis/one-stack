import React from 'react';
import { graphql, compose } from 'react-apollo';

import LoggedUserQuery from './LoggedUserQuery';
import GardenerDetails from './GardenerDetails';
import ErrorAndLoading from '../../../components/ErrorAndLoading/ErrorAndLoading';

const GardenerDetailsWithErrorAndLoading = (
  {
    loggedUserQuery: {
      loading,
      error,
      loggedUser,
    },
  },
) => (
  <ErrorAndLoading {...{ loading, error }}>
    {loggedUser && <GardenerDetails {...loggedUser.gardener} />}
  </ErrorAndLoading>
);

const GardenerDetailsContainer = compose(
  graphql(LoggedUserQuery, { name: 'loggedUserQuery' }),
)(GardenerDetailsWithErrorAndLoading);

export default GardenerDetailsContainer;
