const bcrypt = require('bcryptjs');

exports.seed = async (knex) => {
  await knex('users').del();
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  const entities = await knex.select().table('entities');
  return knex('users').insert([
    {
      email: 'guidodutra@gmail.com',
      password: bcrypt.hashSync('senha', 10),
      entity_id: entities[0].id,
    },
    {
      email: 'bruno@email.com',
      password: bcrypt.hashSync('senha', 10),
      entity_id: entities[1].id,
    },
  ]);
};
