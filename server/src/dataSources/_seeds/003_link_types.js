exports.seed = async (knex) => {
  await knex('link_types').del();
  await knex.raw('ALTER SEQUENCE link_types_id_seq RESTART WITH 1');
  return knex('link_types').insert([
    {
      name: 'Site',
    },
    {
      name: 'Facebook',
    },
    {
      name: 'Instagran',
    },
  ]);
};
