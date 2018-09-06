import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import data from './data';
import mocks from './mocks';
import resolvers from './graphql/resolvers';
// import debugExtensions from './extensions/debugExtensions';
import typeDefs from './graphql/schema';
import authSetup from './config/authSetup';

const context = { mocks, data };

const app = express();
authSetup(app, context);

const server = new ApolloServer({
  typeDefs,
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

app.listen({ port: process.env.PORT || 4000 },
  () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
