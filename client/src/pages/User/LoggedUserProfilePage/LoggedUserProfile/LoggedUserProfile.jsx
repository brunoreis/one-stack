import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import LOGGED_USER_QUERY from './LOGGED_USER_QUERY';
import ErrorHandler from '../../../../components/ErrorAndLoading/ErrorHandler';

const LoggedUserProfile = () => {
  console.log("eae");
  const query = useQuery(LOGGED_USER_QUERY);
  console.log(query);
  if (query.loading) return <div>Fetching...</div>;
  if (query.error) return <ErrorHandler error={query.error} />;
  const { loggedUser } = query.data;
  return (
    <div>
      {loggedUser && `id: ${loggedUser.id} email: ${loggedUser.email}`}
    </div>
  );
};

export default LoggedUserProfile;
