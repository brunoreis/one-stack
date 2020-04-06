exports.up = async knex => knex.schema.createTable(
  'links',
  (table) => {
    table.increments('id').primary();
    table.string('link').notNullable();
    table.boolean('main');
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('links');
