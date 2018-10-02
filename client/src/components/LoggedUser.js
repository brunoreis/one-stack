import React, { Component } from 'react';
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

class LoggedUser extends Component {
  render() {
    return (
      <Query query={QUERY} fetchPolicy="network-only" errorPolicy="all">
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>;
          if (error && error.networkError) return <div>Network Error</div>;
          const { loggedUser } = data;
          return (
            <div>
              { loggedUser && <div> {loggedUser.id} {loggedUser.name} </div> }
              <ErrorHandler error={error} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LoggedUser;
