import React from 'react';
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

const Users = () => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>;
      if (error) return <div>Error</div>;

      const { users } = data;

      return (
        <div>
          {users.map(user => (
            <div key={user.id}>
              {`id: ${user.id} - nome: ${user.name}`}
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Users;
