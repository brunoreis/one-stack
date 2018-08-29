import { ApolloServer } from 'apollo-server-express';

import data from './data';
import mocks from './mocks';
import resolvers from './graphql/resolvers';
// import debugExtensions from './extensions/debugExtensions';
import typeDefs from './graphql/schema';
import appSetup from './config/express';

const context = { mocks, data };

const app = appSetup(data, context);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  // extensions: [
  //   () => debugExtensions,
  // ],
  // introspection: true,
  // playground: true,
});

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 },
  () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
