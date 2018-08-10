# one-stack
## Heroku Deploy
We can use [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli) to deploy to heroku in a simple manner.
1. create the heroku app with `heroku create 'app-name'`
1. create a Procfile containing `web: node index.js`
1. push to the new heroku remote with `git push heroku 'branch-name':master`

We can access our heroku app by running `heroku open`, and open bash with `heroku run bash`.

### Enabling Graphql Playground
Since the playground is not enabled by defalut in production environments, we can explicitly ask for it by setting a couple of fields in our ApolloServer declaration:
```
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context,
  introspection: true,
  playground: true,
});
```
the `introspection` and `playground` fields must be set to true. Accessing the app page, we can see it now displays the playground.

For more information on heroku-cli and heroku in general, check out [the official docs](https://devcenter.heroku.com/categories/reference).

We also recommed following [this tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) for a simple introduction.
