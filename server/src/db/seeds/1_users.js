const bcrypt = require('bcrypt');

exports.seed = async (knex) => {
  await knex('user').del();
  return knex('user').insert([
    {
      email: 'guido@email',
      password: bcrypt.hashSync('senha', 10),
      gardener: 1,
    },
    {
      email: 'bruno@email',
      password: bcrypt.hashSync('senha', 10),
      gardener: 2,
    },
  ]);
};
