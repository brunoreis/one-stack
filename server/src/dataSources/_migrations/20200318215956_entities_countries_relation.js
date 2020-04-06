exports.up = async knex => knex.schema.table(
  'entities',
  (table) => {
    table
      .string('country_code')
    table
      .foreign('country_code')
      .references('code')
      .inTable('countries');
  },
);

exports.down = async knex => knex.schema.table(
  'entities',
  (table) => {
    table.dropColumn('country_code');
  },
);
