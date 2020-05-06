exports.seed = async (knex) => {
  await knex('links').del();
  await knex.raw('ALTER SEQUENCE links_id_seq RESTART WITH 1');
  return knex('links').insert([
    {
      link: 'https://sitioflorestinha.com',
      entity_id: 1,
      link_type_id: 1,
      main: true,
    },
    {
      link: 'www.facebook.com/sitioflorestinha',
      entity_id: 1,
      link_type_id: 2,
      main: false,
    },
    {
      link: 'https://instagram.com/sitioflorestinha',
      entity_id: 1,
      link_type_id: 3,
      main: false,
    },
    {
      link: 'https://terrabooma.org',
      entity_id: 2,
      link_type_id: 1,
      main: true,
    },
    {
      link: 'https://www.facebook.com/terrabooma',
      entity_id: 2,
      link_type_id: 2,
      main: false,
    },
    {
      link: 'https://cepeas.org',
      entity_id: 3,
      link_type_id: 1,
      main: true,
    },
  ]);
};
