import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    users {
      id
      name
    }
  }
`;

class users extends Component {
  render() {
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const users = data.users;

          return (
            <div>
              {users[0].id}
              {users[0].name}
              {users[1].id}
              {users[1].name}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default users;
