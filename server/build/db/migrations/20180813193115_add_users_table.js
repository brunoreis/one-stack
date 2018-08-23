'use strict';

exports.up = knex => knex.schema.createTable('user', table => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('email').notNullable();
  table.string('password').notNullable();
});

exports.down = knex => knex.schema.dropTableIfExists('user');
//# sourceMappingURL=20180813193115_add_users_table.js.map