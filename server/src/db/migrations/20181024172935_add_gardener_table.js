exports.up = async knex => knex.schema.createTable(
  'gardener',
  (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description');
    table.string('picture');
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('gardener');
