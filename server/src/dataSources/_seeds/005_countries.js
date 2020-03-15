exports.seed = async (knex) => {
  await knex('countries').del();
  return knex('countries').insert([
    {
      code: 'BR',
      name: 'Brasil',
    },
    {
      code: 'AZ',
      name: 'Azerbaijão',
    },
  ]);
};
