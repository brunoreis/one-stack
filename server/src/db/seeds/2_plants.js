exports.seed = async (knex) => {
  await knex('plant').del();
  await knex.raw('ALTER SEQUENCE plant_id_seq RESTART WITH 1');
  return knex('plant').insert([
    {
      name: 'Bananeira',
      scientificName: 'bananus bananus',
      edibleParts: 'fruta, flor',
    },
    {
      name: 'Macaxeira',
      edibleParts: 'raiz',
    },
  ]);
};
