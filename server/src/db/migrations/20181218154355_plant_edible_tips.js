exports.up = async knex => knex.schema.table('plant', (table) => {
  table.specificType('edibleParts', 'text ARRAY');
  table.specificType('tips', 'text ARRAY');
});

exports.down = async knex => knex.schema.table('user', (table) => {
  table.dropColumn('edibleParts');
  table.dropColumn('tips');
});
