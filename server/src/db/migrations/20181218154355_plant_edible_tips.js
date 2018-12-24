exports.up = async knex => knex.schema.table('plant', (table) => {
  table.specificType('edibleParts', 'text ARRAY').notNullable();
  table.specificType('tips', 'text ARRAY');
});

exports.down = async knex => knex.schema.table('plant', (table) => {
  table.dropColumn('edibleParts');
  table.dropColumn('tips');
});
