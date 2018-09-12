
exports.up = (knex, Promise) => {
  return knex.schema.table('user', (table) => {
    table.string('resetPasswordToken');
    table.dateTime('resetPasswordExpires');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.table('user', (table) => {
    table.dropColumn('resetPasswordToken');
    table.dropColumn('resetPasswordExpires');
  });
};
