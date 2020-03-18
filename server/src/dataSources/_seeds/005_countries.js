exports.seed = async (knex) => {
  await knex('countries').del();
  return knex('countries').insert([
    {
      code: 'BR',
      name: 'Brazil',
    },
    {
      code: 'AZ',
      name: 'Azerbaijan',
    },
  ]);
};
