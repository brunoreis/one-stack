exports.up = async knex => knex.schema.createTable(
  'user',
  (table) => {
    table.increments('id').primary();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('user');
