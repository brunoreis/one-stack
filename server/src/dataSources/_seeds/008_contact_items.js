exports.seed = async (knex) => {
  await knex('contact_items').del();
  await knex.raw('ALTER SEQUENCE contact_items_id_seq RESTART WITH 1');
  return knex('contact_items').insert([
    {
      contact: 'vendas@susan.org',
      contact_type_id: 1,
      contact_id: 1,
    },
    {
      contact: '+55 19 3333-2222',
      contact_type_id: 2,
      contact_id: 1,
    },
    {
      contact: '+55 19 99999-1234',
      contact_type_id: 3,
      contact_id: 1,
    },
  ]);
};