exports.up = async knex => knex.schema.createTable(
  'contact_items',
  (table) => {
    table.increments('id').primary();
    table.string('contact').notNullable();
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('contact_items');
