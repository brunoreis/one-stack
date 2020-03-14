exports.seed = async (knex) => {
  await knex('member_types').del();
  await knex.raw('ALTER SEQUENCE member_types_id_seq RESTART WITH 1');
  return knex('member_types').insert([
    {
      name: 'Proprietário',
    },
    {
      name: 'Entregador',
    },
    {
      name: 'Cliente',
    },
  ]);
};
