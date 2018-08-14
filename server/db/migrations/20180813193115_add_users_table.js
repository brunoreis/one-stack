
exports.up = knex => knex.schema.createTableIfNotExists('user', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('email').notNullable();
  table.string('password').notNullable();
});

exports.down = knex => knex.schema.dropTableIfExists('user');
