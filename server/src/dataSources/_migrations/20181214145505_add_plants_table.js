exports.up = async knex => knex.schema.createTable(
  'plant',
  (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('scientificName').unique();
    table.string('picture');
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('plant');
