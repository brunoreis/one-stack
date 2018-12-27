import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import data from './data';
import mocks from './mocks'; // what is this for?
import resolvers from './graphql/resolvers';
// import debugExtensions from './extensions/debugExtensions';
import schema from './graphql/schema';
import authSetup from './config/authSetup';

const context = { mocks, data };
const app = express();
authSetup(app, context);

const server = new ApolloServer({ //eslint-disable-line
  typeDefs: schema,
  resolvers,
  context,
  // extensions: [
  //   () => debugExtensions,
  // ],
  introspection: true,
  playground: true,
});

server.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: true,
  },
});

export { app, server };
