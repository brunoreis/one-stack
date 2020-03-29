exports.up = async knex => knex.schema.table(
  'links',
  (table) => {
    table
      .integer('link_type_id')
      .notNullable();
    table
      .foreign('link_type_id')
      .references('id')
      .inTable('link_types');
  },
);

exports.down = async knex => knex.schema.table(
  'links',
  (table) => {
    table.dropColumn('link_type_id');
  },
);
