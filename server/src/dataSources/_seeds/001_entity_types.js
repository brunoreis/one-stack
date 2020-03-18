exports.seed = async (knex) => {
  await knex('entity_types').del();
  await knex.raw('ALTER SEQUENCE entity_types_id_seq RESTART WITH 1');
  return knex('entity_types').insert([
    {
      name: 'Farmer',
    },
    {
      name: 'Shop',
    },
    {
      name: 'Coop',
    },
    {
      name: 'Person',
    },
  ]);
};
