exports.up = async knex => knex.schema.table(
  'entities',
  (table) => {
    table
      .integer('entity_type_id')
    table
      .foreign('entity_type_id')
      .references('id')
      .inTable('entity_types');
  },
);

exports.down = async knex => knex.schema.table(
  'entities',
  (table) => {
    table.dropColumn('entity_type_id');
  },
);
