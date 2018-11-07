import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from '../src/client';
import App from '../src/components/App';

export default story => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      {/* <App> */}
        { story() }
      {/* </App> */}
    </ApolloProvider>
  </BrowserRouter>
);
