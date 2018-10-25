exports.up = async knex => knex.schema.table(
  'user',
  (table) => {
    table
      .integer('gardener')
      .unsigned()
      .unique()
      .notNullable();
    table
      .foreign('gardener')
      .references('id')
      .inTable('gardener');
  },
);

exports.down = async knex => knex.schema.table(
  'user',
  (table) => {
    table.dropColumn('gardener');
  },
);
