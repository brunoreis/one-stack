exports.seed = async (knex) => {
  await knex('plant').del();
  await knex.raw('ALTER SEQUENCE plant_id_seq RESTART WITH 1');
  const gardeners = await knex.select().table('gardener');
  return knex('plant').insert([
    {
      name: 'Bananeira',
      scientificName: 'bananus bananus',
      edibleParts: ['fruta', 'flor'],
      tips: [
        'bananeira é tão bom que dá até banana',
        'macaco quer banana?',
      ],
      createdBy: gardeners[0].id,
    },
    {
      name: 'Macaxeira',
      edibleParts: ['raiz'],
      tips: [
        'macaxeira aipim mandioca',
        'é no balanço da carroça que as abóboras se ajeitam',
      ],
      createdBy: gardeners[1].id,
    },
  ]);
};
