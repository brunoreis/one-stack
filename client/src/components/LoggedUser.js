import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ErrorHandler from './ErrorHandler';

const QUERY = gql`
  {
    loggedUser {
      id
      name
    }
  }
`;

const LoggedUser = () => (
  <Query query={QUERY} fetchPolicy="network-only" errorPolicy="all">
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching...</div>;
      const { loggedUser } = data || null;
      return (
        error
          ? <ErrorHandler error={error} />
          : (
            <div>
              {loggedUser && `id: ${loggedUser.id} name: ${loggedUser.name}`}
            </div>
          )
      );
    }}
  </Query>
);

export default LoggedUser;
