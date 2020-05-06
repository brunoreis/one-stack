exports.seed = async (knex) => {
  await knex('contact_items').del();
  await knex.raw('ALTER SEQUENCE contact_items_id_seq RESTART WITH 1');
  return knex('contact_items').insert([
    {
      contact: 'daxfdr@gmail.com',
      contact_type_id: 1,
      contact_id: 1,
    },
    {
      contact: '+55 62 99303-8176',
      contact_type_id: 3,
      contact_id: 1,
    },
    {
      contact: 'daxfdr@gmail.com',
      contact_type_id: 1,
      contact_id: 2,
    },
    {
      contact: 'contato@terrabooma.org',
      contact_type_id: 1,
      contact_id: 3,
    },
    {
      contact: '+55 62 99850-7991',
      contact_type_id: 3,
      contact_id: 3,
    },
    {
      contact: '+55 62 99850-7991',
      contact_type_id: 4,
      contact_id: 3,
    },
    {
      contact: '+55 62 9614-0215',
      contact_type_id: 3,
      contact_id: 4,
    },
    {
      contact: 'contato@cepeas.org',
      contact_type_id: 1,
      contact_id: 4,
    },
  ]);
};
