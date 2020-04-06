exports.up = async knex => knex.schema.table(
  'entity_members',
  (table) => {
    table
      .integer('member_type_id')
    table
      .foreign('member_type_id')
      .references('id')
      .inTable('member_types');
  },
);

exports.down = async knex => knex.schema.table(
  'entity_members',
  (table) => {
    table.dropColumn('member_type_id');
  },
);
