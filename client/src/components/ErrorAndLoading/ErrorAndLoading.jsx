import React from 'react';

import ErrorHandler from './ErrorHandler';

const ErrorAndLoading = ({ loading, error, children }) => {
  if (loading) return <div>Fetching...</div>;
  if (error) return <ErrorHandler error={error} />;
  return children;
};

export default ErrorAndLoading;
