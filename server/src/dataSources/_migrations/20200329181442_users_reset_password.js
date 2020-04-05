exports.up = async knex => knex.schema.table('users', (table) => {
  table.string('reset_password_token');
  table.dateTime('reset_password_expires');
});

exports.down = async knex => knex.schema.table('users', (table) => {
  table.dropColumn('reset_password_token');
  table.dropColumn('reset_password_expires');
});
