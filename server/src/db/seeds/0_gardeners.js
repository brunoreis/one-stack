exports.seed = async (knex) => {
  await knex('gardener').del();
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
