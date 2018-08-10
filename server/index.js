const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const mocks = require('./graphql/mocks');
const resolvers = require('./graphql/resolvers');
// const debugExtensions = require('./extensions/debugExtensions');

const typeDefs = importSchema('./graphql/schema.graphql');
const context = { mocks };

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
