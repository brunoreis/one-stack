import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from '../src/client';

export default story => (
  <ApolloProvider client={client}>
    { story() }
  </ApolloProvider>
);
