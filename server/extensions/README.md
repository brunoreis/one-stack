This module is meant for debugging and studying purposes.

This module implements all graphql extensions that can be passed as arguments to the apollo server. 

To use the module, import it and pass it as a constructor for the server in 'index.js':
```
import debugExtensions from './extensions/debugExtensions';
...
const server = new ApolloServer({
  ...
  extensions: [
    () => debugExtensions,
  ],
  ...
});
```
the modules implemented here are:
* requestDidStart
* parsingDidStart
* validationDidStart
* executionDidStart
* willSendResponse
* willResolveField
* format

Some references:

https://www.apollographql.com/docs/apollo-server/v2/features/metrics.html#Granular-Logs

https://github.com/apollographql/apollo-server/blob/8914b135df9840051fe81cc9224b444cfc5b61ab/packages/apollo-server-core/src/logging.ts

https://github.com/apollographql/apollo-server/blob/master/packages/graphql-extensions/src/index.ts

More information will be added to this file after a proper study has been conducted.
