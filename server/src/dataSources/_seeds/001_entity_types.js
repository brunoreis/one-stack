exports.seed = async (knex) => {
  await knex('users').del();
  await knex('entity_members').del();
  await knex('links').del();
  await knex('contact_items').del();
  await knex('contacts').del();
  await knex('entities').del();
  await knex('countries').del();
  await knex('member_types').del();
  await knex('link_types').del();
  await knex('contact_types').del();
  await knex('entity_types').del();
  await knex.raw('ALTER SEQUENCE entity_types_id_seq RESTART WITH 1');
  return knex('entity_types').insert([
    {
      name: 'Cliente',
    },
    {
      name: 'Produtor',
    },
    {
      name: 'Centro de Pesquisas',
    },
    {
      name: 'Feiras',
    },
    {
      name: 'Proprietário',
    },
  ]);
};
