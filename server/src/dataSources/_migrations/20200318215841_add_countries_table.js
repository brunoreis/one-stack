exports.up = async knex => knex.schema.createTable(
  'countries',
  (table) => {
    table.string('code').primary();
    table.string('name').notNullable();
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('countries');
