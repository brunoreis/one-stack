import knex from 'knex';
import knexStringcase from 'knex-stringcase';
import config from '../knexfile';

const env = process.env.NODE_ENV || 'development';
const withStringcase = knexStringcase(config[env]);
const db = knex(withStringcase);
module.exports = db;
