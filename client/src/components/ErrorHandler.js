import React from 'react';
import PropTypes from 'prop-types';

const ErrorHandler = (props) => {
  const { error } = props;
  if (error && error.graphQLErrors) {
    console.log(error.graphQLErrors[0]);
    return (
      <div>
        {error.graphQLErrors.map(({ message, extensions }, i) => (
          <span key={i}>
            {extensions ? `${extensions.code}: ${message}` : message}
          </span>
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
