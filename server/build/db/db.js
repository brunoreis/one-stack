'use strict';

const config = require('../../knexfile.js');

const env = 'development';
const knex = require('knex')(config[env]);

module.exports = knex;
//# sourceMappingURL=db.js.map