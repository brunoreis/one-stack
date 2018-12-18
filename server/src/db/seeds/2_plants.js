exports.seed = async (knex) => {
  await knex('plant').del();
  await knex.raw('ALTER SEQUENCE plant_id_seq RESTART WITH 1');
  return knex('plant').insert([
    {
      name: 'Bananeira',
      scientificName: 'bananus bananus',
      edibleParts: ['fruta', 'flor'],
      tips: [
        'bananeira é tão bom que dá até banana',
        'macaco quer banana?',
      ],
    },
    {
      name: 'Macaxeira',
      edibleParts: ['raiz'],
      tips: [
        'macaxeira aipim mandioca',
        'é no balanço da carroça que as abóboras se ajeitam',
      ],
    },
  ]);
};
