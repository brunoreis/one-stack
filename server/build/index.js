'use strict';

var _apolloServer = require('apollo-server');

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _mocks = require('./mocks');

var _mocks2 = _interopRequireDefault(_mocks);

var _resolvers = require('./graphql/resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _schema = require('./graphql/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const context = { mocks: _mocks2.default, data: _data2.default };
// import debugExtensions from './extensions/debugExtensions';


const server = new _apolloServer.ApolloServer({
  typeDefs: _schema2.default,
  resolvers: _resolvers2.default,
  context,
  // extensions: [
  //   () => debugExtensions,
  // ],
  introspection: true,
  playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map