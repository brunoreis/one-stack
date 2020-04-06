exports.up = async knex => knex.schema.createTable(
  'entities',
  (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description');
    table.string('address');
    table.string('address_complement');
    table.string('city');
    table.string('region');
    table.string('post_code');
    table.float('longitude');
    table.float('latitude');
    table.timestamps(false, true);
  },
);

exports.down = async knex => knex.schema.dropTable('entities');
