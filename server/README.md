# Server setup

## Install dependencies

The first thing we need to do is to install the dependencies with npm. Open the console and run `npm install`.

## Configure the environment

Before we can run our server, we need to configure the environment variables. Create a new ".env" file in the server root directory and add the following contents to it.
```
// .env
DB_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=one-stack
```
## Running the server locally

Now we can run our local server with `npm run-script start-dev`.

Navigate to localhost:4000 to see the graphql playground.
