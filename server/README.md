# Server setup

## Docker setup
This project is deployed for production using docker. To configure docker, go to the root of the project and run

`docker-compose up`

This sets up two docker containers: One for the backend code, which is mounted on /server, and one for the postgres database.

## Environment setup

Before we can run our server, we need to configure the environment variables. Create a new ".env" file in the server root directory and add the following contents to it.
```
// .env
DB_HOST=db
POSTGRES_USER=postgres
POSTGRES_DB=one-stack
```

## Database setup

Now we need to run the migrations and seeds in our database. To do this, first run bash inside the server container with

`docker exec -it onestack_server_1 bash`

If necessary replace 'onestack_server_1' with the name of your container, as displayed with `docker-compose ps`.

Once inside the container, run the migrations with `knex migrate:latest`, then the seeds with `knex seed:run`.

Now we can begin using the server locally on docker. To start the service just run

`docker-compose up`

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
