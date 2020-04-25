require('dotenv').config();

module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    migrations: {
      directory: './src/dataSources/_migrations',
    },
    seeds: {
      directory: './src/dataSources/_seeds',
    },
  },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    migrations: {
      directory: './src/dataSources/_migrations',
    },
    seeds: {
      directory: './src/dataSources/_seeds',
    },
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/dataSources/_migrations',
    },
    seeds: {
      directory: './src/dataSources/_seeds',
    },
  },
};
