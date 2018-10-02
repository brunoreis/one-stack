import React from 'react';

export default (props) => {
  const { error } = props;
  if (error && error.graphQLErrors) {
    console.log(error.graphQLErrors[0]);
    return (
      // <div> {error.graphQLErrors[0].message} </div>
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
