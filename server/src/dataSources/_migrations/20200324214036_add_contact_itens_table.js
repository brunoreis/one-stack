exports.up = async knex => knex.schema.createTable(
  'contact_itens',
  (table) => {
    table.increments('id').primary();
    table.string('contact').notNullable();
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('contact_itens');
