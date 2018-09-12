
exports.up = knex => knex.schema.createTable('user', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('email').unique();
  table.string('password').notNullable();
});

exports.down = knex => knex.schema.dropTableIfExists('user');
