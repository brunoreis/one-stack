exports.seed = async (knex) => {
  await knex('links').del();
  await knex.raw('ALTER SEQUENCE links_id_seq RESTART WITH 1');
  return knex('links').insert([
    {
      link: 'www.sitioflorestinha.org',
      entity_id: 1,
      link_type_id: 1,
      main: true,
    },
    {
      link: 'www.facebook.com/florestinha',
      entity_id: 1,
      link_type_id: 2,
      main: false,
    },
    {
      link: 'www.instagram.com/florestinha',
      entity_id: 1,
      link_type_id: 3,
      main: false,
    },
  ]);
};
