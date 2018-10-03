import React from 'react';
import PropTypes from 'prop-types';

const ErrorHandler = (props) => {
  const { error } = props;

  if (!error) return null;

  if (error.networkError) return <div>Network Error</div>;

  if (error.graphQLErrors) {
    return (
      <div>
        {error.graphQLErrors.map(({ message, extensions }) => (
          <div>
            {extensions ? `${extensions.code}: ${message}` : message}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

ErrorHandler.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorHandler;
