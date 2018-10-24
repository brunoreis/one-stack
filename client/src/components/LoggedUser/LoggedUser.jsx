import React from 'react';
import PropTypes from 'prop-types';

import ErrorHandler from '../ErrorHandler';

const LoggedUser = ({
  loggedUserQuery: {
    loading,
    error,
    loggedUser,
  },
}) => {
  if (loading) return <div>Fetching...</div>;
  if (error) return <ErrorHandler error={error} />;
  return (
    <div>
      {loggedUser && `id: ${loggedUser.id} email: ${loggedUser.email}`}
    </div>
  );
};

LoggedUser.propTypes = {
  loggedUserQuery: PropTypes.object.isRequired,
};

export default LoggedUser;
