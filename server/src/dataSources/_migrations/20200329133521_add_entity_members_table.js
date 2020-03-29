exports.up = async knex => knex.schema.createTable(
  'entity_members',
  (table) => {
    table.increments('id').primary();
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('entity_members');
