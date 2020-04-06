exports.seed = async (knex) => {
  await knex('contact_types').del();
  await knex.raw('ALTER SEQUENCE contact_types_id_seq RESTART WITH 1');
  return knex('contact_types').insert([
    {
      name: 'Email',
    },
    {
      name: 'Telephone',
    },
    {
      name: 'Mobile',
    },
  ]);
};
