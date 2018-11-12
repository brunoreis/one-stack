exports.seed = async (knex) => {
  await knex('user').del();
  await knex('gardener').del();
  await knex.raw('ALTER SEQUENCE gardener_id_seq RESTART WITH 1');
  return knex('gardener').insert([
    {
      name: 'Guido Oliveira',
      description: 'planto milho pra fazer broa',
    },
    {
      name: 'Bruno Reis',
      description: 'como salada de fruta com açaí',
    },
  ]);
};
