import React from 'react';
import PropTypes from 'prop-types';

const ErrorHandler = (props) => {
  const { error } = props;

  if (!error) return null;

  console.log('network: ', error.networkError && error.networkError.result.errors);
  console.log('gql: ', error.graphQLErrors);

  if (error.networkError) return <div>Network Error</div>;

  if (error.graphQLErrors) {
    return (
      <div>
        {error.graphQLErrors.map(({ extensions, message }, index) => (
          <div key={index}>
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
