exports.up = async knex => knex.schema.table(
  'users',
  (table) => {
    table
      .integer('entity_id')
      .unsigned()
      .unique()
      .notNullable();
    table
      .foreign('entity_id')
      .references('id')
      .inTable('entities');
  },
);

exports.down = async knex => knex.schema.table(
  'users',
  (table) => {
    table.dropColumn('entity_id');
  },
);
