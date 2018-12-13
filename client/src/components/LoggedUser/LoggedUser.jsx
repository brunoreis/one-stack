import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import ErrorHandler from '../ErrorAndLoading/ErrorHandler';
import LOGGED_USER_QUERY from './LoggedUserQuery';

const LoggedUser = () => {
  const {
    loading,
    error,
    errors,
    data,
  } = useQuery(
    LOGGED_USER_QUERY,
    {
      suspend: false,
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  );
  if (loading) return <div>Fetching...</div>;
  if (error) return <ErrorHandler error={error} />;
  if (errors) return <ErrorHandler error={{ graphQLErrors: errors }} />;
  const loggedUser = data.loggedUser;
  return (
    <div>
      {loggedUser && `id: ${loggedUser.id} email: ${loggedUser.email}`}
    </div>
  );
};

export default LoggedUser;
