exports.up = async knex => knex.schema.table(
  'contact_items',
  (table) => {
    table
      .integer('contact_type_id')
      .notNullable();
    table
      .foreign('contact_type_id')
      .references('id')
      .inTable('contact_types');
  },
);

exports.down = async knex => knex.schema.table(
  'contact_items',
  (table) => {
    table.dropColumn('contact_type_id');
  },
);
