exports.up = async knex => knex.schema.table(
  'entity_members',
  (table) => {
    table
      .integer('entity_id_member')
    table
      .foreign('entity_id_member')
      .references('id')
      .inTable('entities');
  },
);

exports.down = async knex => knex.schema.table(
  'entity_members',
  (table) => {
    table.dropColumn('entity_id_member');
  },
);
