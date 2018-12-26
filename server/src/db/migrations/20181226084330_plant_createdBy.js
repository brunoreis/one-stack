exports.up = async knex => knex.schema.table(
  'plant',
  (table) => {
    table
      .integer('createdBy')
      .unsigned()
      .unique()
      .notNullable();
    table
      .foreign('createdBy')
      .references('id')
      .inTable('gardener');
  },
);

exports.down = async knex => knex.schema.table(
  'plant',
  (table) => {
    table.dropColumn('createdBy');
  },
);
