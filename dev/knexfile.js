module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5433',
      user: 'postgres',
      database: 'onestack',
    },
    migrations: {
      directory: '../server/src/db/migrations',
    },
    seeds: {
      directory: '../server/src/db/seeds',
    },
  },
};
