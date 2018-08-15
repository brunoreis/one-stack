import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import data from './data';
import mocks from './mocks';
import resolvers from './graphql/resolvers';
// import debugExtensions from './extensions/debugExtensions';

const typeDefs = importSchema('./graphql/schema.graphql');

const context = { mocks, data };

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

server.listen(
  { port: process.env.PORT || 4000 },
).then(
  ({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  },
);
