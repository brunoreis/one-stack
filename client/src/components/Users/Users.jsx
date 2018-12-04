import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import ErrorHandler from '../ErrorAndLoading/ErrorHandler';
import USERS_QUERY from './UsersQuery';

const Users = () => {
  const { loading, error, data: { users } } = useQuery(
    USERS_QUERY,
    { suspend: false },
  );

  if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          {`id: ${user.id} - email: ${user.email}`}
        </div>
      ))}
    </div>
  );
};

export default Users;
