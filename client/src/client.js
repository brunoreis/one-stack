import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import config from './config';

const apiUrl = config.getApiUrl();

const httpLink = createHttpLink({
  uri: `${apiUrl}/graphql`,
  credentials: 'include',
// different for production:
// https://www.apollographql.com/docs/react/recipes/authentication.html
});

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
