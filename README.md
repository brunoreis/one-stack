# One Stack

## Project setup

This project is organized in three directories: /client, /server and /dev.

* /client contains the frontend code
* /server contains the backend code
* /dev hosts tools and commands for managing environment, deployment, database, etc. such as heroku and knex. It also hosts our integrations tests in cypress.

To setup the project on your local machine, we will go through the following steps. Detailed instructions for each step can be found below.

1. Setup environment files
1. Install npm dependencies
1. Build docker containers
1. Setup pgAdmin
1. Initialize database

### Environment setup

Before we can run our app, we need to configure the environment variables. Create a new ".env" file in the server root directory (/server) and copy the contents form .env.default. Then, repeat this process in the /client directory. Notice you need to restart the containers manually every time you change environment variables, since changes in .env are not automatically recognized.

This configuration should sufice for a quick start, but to make the app fully functional you will need to manually set some of the variables according to your local setup. Instructions for each are given below.

Setting other variables:

* MAIL_API: SendGrid API key. Needed to send email to users. Go to [https://sendgrid.com/] and create an account to receive a key.

### Quick start

If you want a quick setup, run the following commands from the root directory. If you come across any issues you can check the detailed instructions below.

```
cd dev
npm run install-all
docker-compose up -d
npm run db:setup
```

### Installing Dependencies

From the root directory run:

`cd client && npm install`

`cd server && npm install`

`cd dev && npm install`

### Docker
We have a docker-compose file to set up your development environment. To build the docker containers, go to the root of the project and run

`docker-compose up` or
`docker-compose up -d` to run in background

This sets up four docker containers: One for the backend code (/server), one for the frontend code (/client), one for the postgres database, and one for pgAdmin. You can run each container individually with `docker-container up server`, for example.

If you run `docker-compose ps` you will be presented with these containers:

```text
       Name                     Command              State           Ports         
-----------------------------------------------------------------------------------
onestack_client_1    npm start                       Up      0.0.0.0:3000->3000/tcp
onestack_db_1        docker-entrypoint.sh postgres   Up      0.0.0.0:5433->5432/tcp
onestack_pgadmin_1   docker-entrypoint.sh pgadmin4   Up      0.0.0.0:5050->5050/tcp
onestack_server_1    npm run start-dev               Up      0.0.0.0:4000->4000/tcp
```

As you can see, you can acess the client on port 3000 and the server on port 4000. 

### Setup pgAdmin

You can skip this session if you don't need to use pgAdmin.

* Go to localhost:5050 on a web browser
* Login with the following credentials:
    user: pgadmin4@pgadmin.org
    passord: admin
* Go to Object > Create > Server
* Name your server whatever you like
* In the 'Connection' tab, set the following fields:
  * Host name/address: db
  * Username: postgres
* Click save

That's it. You should now see the "onestack" database in the left, under Servers/yourServer/Databases. If you don't see it, you can create it manually.

### Database setup

Now we need to initialize our database and run migrations and seeds to add data to it. To do this, run:

`docker-compose exec server bash`

`npm run db-init`

* if you get a connection error, review the .env section above. 
* You can check the database using pgAdmin. Check the previous session.

You can also initialize the test environment database by running (from inside the server container)

`npm run db-init-test`

## Heroku Deploy
We will deploy our client and server separately, each into its own heroku app, and set environment variables to make them visible to each other.

We can use heroku-cli to deploy to heroku in a simple manner. You can either install it globally with `npm install -g heroku` or use the local version in /dev by prefixing `npx ` to every command. We will assume the former.

OBS: notice that since we will have two heroku apps associated with our project, we will need to append --app 'app-name' or --remote 'remote-name' to every heroku-cli command.

### Deploy server
1. navigate to /dev
1. create the heroku app with `heroku create 'server-app-name'`
1. add heroku-postgres add-on with `heroku addons:create heroku-postgresql:hobby-dev`. OBS:  you can run a [psql](https://www.postgresql.org/docs/current/static/app-psql.html) session with your heroku database with `heroku pg:psql`
1. add the node environment with `heroku config:set NODE_ENV=production`
1. rename the git remote so it doesn't conflict with our client deploy: `git remote rename heroku heroku-server`
1. push the server directory to the new heroku remote (from /dev) with `npm run heroku:push-server`
1. run seed and migrations by opening a bash in heroku: `heroku run bash` then running `knex migrate:latest && knex seed:run`. Exit bash with `exit`.

We can access our heroku app by running `heroku open`, and open bash with `heroku run bash`.

### Deploy client
1. If you haven't, make sure to rename the git remote pointing to the server
1. create the heroku app with `heroku create 'client-app-name'`
1. rename the remote with `git remote rename heroku heroku-client`
1. push the client directory (from /dev) with `npm run heroku:push-client`
1. set environment variables: `heroku config:set REACT_APP_API_URL=https://'server-app-name'.herokuapp.com --app 'app-name'`

To push local changes to heroku, simply go to /dev and run `npm run heroku:push-server` or `npm run heroku:push-server`. OBS: notice that this command will push changes in the current working branch, not necessarily in the master branch.


### Enabling Graphql Playground in production
Since the playground is not enabled by defalut in production environments, we can explicitly ask for it by setting a couple of fields in our ApolloServer declaration:
```js
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

## Syncing local and production databases

You can copy the state of the production database in heroku to your local docker database in a couple of simple steps:

1. Delete development database

    to do this, you can run either `dropdb -h localhost -p 5433 -U postgres onestack`, which takes advantage of the port maping in your docker-compose file, or `docker exec onestack_db_1 dropdb -U postgres onestack`, which accesses the database directly from within the docker container.

1. Pull the production database

    Heroku provides a command that does that for you. Simply run `heroku pg:pull DATABASE_URL postgres://postgres@localhost:5433/onestack`. You might need to change the developlent database url (the last argument) according to your local configuration.

## Running integration tests

We use cypress to run end-to-end tests. To open cypress, go to /dev and run `npm run cypress:open`.

This will open the cypress, where you can navigate the tests directory (dev/cypress/integration). Simply click on any test to run it.

## Other topics

Password reset setup:
* See server/src/config/README.md
