import React from 'react';
import PropTypes from 'prop-types';

import ErrorHandler from '../ErrorHandler';

const Users = ({ usersQuery: { loading, error, users } }) => {
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

Users.propTypes = {
  usersQuery: PropTypes.object.isRequired,
};
export default Users;
