// import { AUTH_TOKEN } from './constants'
// import { setContext } from 'apollo-link-context'

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const baseUrl = process.env.REACT_APP_ENV === 'prod'
  ? process.env.REACT_APP_PROD_URL
  : process.env.REACT_APP_DEV_URL;

const httpLink = createHttpLink({
  uri: `http://${baseUrl}/graphql`,
  credentials: 'include',
// different for production:
// https://www.apollographql.com/docs/react/recipes/authentication.html
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
