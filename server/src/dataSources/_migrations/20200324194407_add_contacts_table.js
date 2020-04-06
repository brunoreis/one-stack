exports.up = async knex => knex.schema.createTable(
  'contacts',
  (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.boolean('main');
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('contacts');
