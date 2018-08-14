const knex = require('knex');

module.exports = knex({
  client: 'pg',
  connection: {
    // host: process.env.DB_HOST,
    // user: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DB,
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'one-stack',
  },
  debug: true,
});
