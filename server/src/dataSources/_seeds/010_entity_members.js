exports.seed = async (knex) => {
  await knex('entity_members').del();
  await knex.raw('ALTER SEQUENCE entity_members_id_seq RESTART WITH 1');
  return knex('entity_members').insert([
    {
      entity_id: 2,
      entity_id_member: 1,
      member_type_id: 2,
    },
  ]);
};
