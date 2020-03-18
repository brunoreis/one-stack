exports.up = async knex => knex.schema.createTable(
  'entity_types',
  (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('entity_types');
