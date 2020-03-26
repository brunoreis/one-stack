exports.up = async knex => knex.schema.table(
  'contact_itens',
  (table) => {
    table
      .integer('contact_id')
      .notNullable();
    table
      .foreign('contact_id')
      .references('id')
      .inTable('contacts');
  },
);

exports.down = async knex => knex.schema.table(
  'contact_itens',
  (table) => {
    table.dropColumn('contact_id');
  },
);
