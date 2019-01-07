import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

import PlantCreateForm from './PlantCreateForm/PlantCreateForm';
import ErrorHandler from '../../../components/ErrorAndLoading/ErrorHandler';

const LOGGED_USER_QUERY = gql`
  {
    loggedUser {
      id
    }
  }
`;

const PlantCreatePage = ({ setHeader }) => {
  const {
    loading,
    error,
    errors,
  } = useQuery(
    LOGGED_USER_QUERY,
    {
      // suspend: false,
      // fetchPolicy: 'network-only',
      // errorPolicy: 'all',
    },
  );

  setHeader('ADICIONAR UMA PLANTA');

  if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  if (errors) return <ErrorHandler error={{ graphQLErrors: errors }} />;

  return <PlantCreateForm />;
};

PlantCreatePage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};

// export default PlantCreatePage;

const WithSuspense = ({ setHeader }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <PlantCreatePage setHeader={setHeader} />
  </Suspense>
);

export default WithSuspense;
