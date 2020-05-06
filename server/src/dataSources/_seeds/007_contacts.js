exports.seed = async (knex) => {
  await knex('contacts').del();
  await knex.raw('ALTER SEQUENCE contacts_id_seq RESTART WITH 1');
  return knex('contacts').insert([
    {
      name: 'Sítio',
      entity_id: 1,
      main: true,
    },
    {
      name: 'Dax',
      entity_id: 1,
      main: false,
    },
    {
      name: 'Sítio',
      entity_id: 2,
      main: true,
    },
    {
      name: 'Centro',
      entity_id: 3,
      main: true,
    },
  ]);
};
