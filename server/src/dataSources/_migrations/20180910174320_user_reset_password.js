
exports.up = async knex => knex.schema.table('user', (table) => {
  table.string('resetPasswordToken');
  table.dateTime('resetPasswordExpires');
});

exports.down = async knex => knex.schema.table('user', (table) => {
  table.dropColumn('resetPasswordToken');
  table.dropColumn('resetPasswordExpires');
});
