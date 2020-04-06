exports.up = async knex => knex.schema.table(
  'links',
  (table) => {
    table
      .integer('entity_id')
      .notNullable();
    table
      .foreign('entity_id')
      .references('id')
      .inTable('entities');
  },
);

exports.down = async knex => knex.schema.table(
  'links',
  (table) => {
    table.dropColumn('entity_id');
  },
);
