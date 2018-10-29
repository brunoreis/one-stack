import React from 'react';

import ErrorHandler from './ErrorHandler';

const ErrorAndLoading = (props) => {
  console.log('entrou errorAndLoading: ', props);
  const { query: { loading, error }, children } = props;
  if (loading) return <div>Fetching...</div>;
  if (error) return <ErrorHandler error={error} />;
  return children;
};

export default ErrorAndLoading;
