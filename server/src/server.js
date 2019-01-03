import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import resolvers from './graphql/resolvers';
// import debugExtensions from './extensions/debugExtensions';
import schema from './graphql/schema';
import authSetup from './config/authSetup';
import db from './db';
import dataSources from './dataSources';

const context = {};

const app = express();
authSetup(app, context);

const server = new ApolloServer({ //eslint-disable-line
  typeDefs: schema,
  resolvers,
  context: async () => context, // see https://github.com/apollographql/apollo-server/issues/1247
  dataSources: dataSources({ db }),
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

export {
  app,
  server,
  context,
};
