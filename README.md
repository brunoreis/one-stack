# one-stack

## Project setup

### Docker
We have a docker file to set up your dev env. To build the docker containers, go to the root of the project and run

`docker-compose up`
`docker-compose up -d` to run in background

This sets up three docker containers: One for the backend code (/server), one for the frontend code (/client), and one for the postgres database.

If you run `docker-compose ps` you will be presented with those containers:
 
       Name                     Command              State           Ports         
-----------------------------------------------------------------------------------
one-stack_client_1   npm start                       Up      0.0.0.0:3000->3000/tcp
one-stack_db_1       docker-entrypoint.sh postgres   Up      0.0.0.0:5433->5432/tcp
one-stack_server_1   npm start                       Up      0.0.0.0:4000->4000/tcp

As you can see, you can acess the client on port 3000 and the backend on port 4000. 

### Environment setup

Before we can run our server, we need to configure the environment variables. Create a new ".env" file in the server root directory (/server) and add the following contents to it.
```
// .env
DB_HOST=db
POSTGRES_USER=postgres
POSTGRES_DB=one-stack
```
Notice you need to restart the server manually every time you change environment variables, since nodemon does not notice changes in .env.

The .env file won't be commited to the repository since it's added on the .gitignore. 
 
### Database setup

Now we need to run the migrations to build our tables. And to run the seeds to add test data to our database. 
To do this, access your server container bash shell: 

`docker exec -it one-stack_server_1 bash`

Once inside the container, run the migrations with 

`knex migrate:latest`, 

then the seeds with 

`knex seed:run`.

* if you get a connection error, review the .env section above. 

To make sure data was inserted, access the graphql playground on `localhost:4000` and run a query like:
```
{
  users{
    name
  }
}
```

If you see the results, your server is up, running and seeded with data. 

### Accessing the database with the pgAdmin tool



* Open pgAdmin, make sure the containers are running, and go to file/AddServer.
* Name your database 'docker-one-stack' or anything you like, set 'Port' to '5433' and 'Username' to 'postgres'.

Note that docker-compose maps your computer's 5433 port to the posgres container's 5432 port, meaning you can acess it from localhost.

## Heroku Deploy
We can use [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli) to deploy to heroku in a simple manner.
1. create the heroku app with `heroku create 'app-name'`
1. add heroku-postgres add-on with `heroku addons:create heroku-postgresql:hobby-dev`
1. add the node environment with `heroku config:set NODE_ENV=production`
1. push the server directory to the new heroku remote with `git subtree push --prefix server heroku master`
1. run seed and migrations with by opening a bash in heroku: `heroku run bash` then running `knex migrate:latest && knex seed:run`. Exit the bash with `exit`

We can access our heroku app by running `heroku open`, and open bash with `heroku run bash`.

To push local changes to heroku, simply run `git subtree push --prefix server heroku master`. OBS: notice this command will push the current branch, not necessarily master

### Enabling Graphql Playground in production
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
