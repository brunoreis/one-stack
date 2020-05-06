const bcrypt = require('bcryptjs');

exports.seed = async (knex) => {
  await knex('users').del();
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  const entities = await knex.select().table('entities');
  return knex('users').insert([
    {
      email: 'admin@susan.org',
      password: bcrypt.hashSync('senha', 10),
      entity_id: entities[0].id,
    },
  ]);
};
