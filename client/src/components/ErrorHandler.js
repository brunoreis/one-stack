import React from 'react';

export default (props) => {
  const { error } = props;
  if (error && error.graphQLErrors) {
    return (
      // <div> {error.graphQLErrors[0].message} </div>
      <div>
        {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </div>
    );
  }
  return null;
};
