exports.up = async knex => knex.schema.createTable(
  'plant',
  (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('scientificName');
    table.string('edibleParts');
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('plant');
