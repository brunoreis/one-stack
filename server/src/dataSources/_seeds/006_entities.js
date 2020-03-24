exports.seed = async (knex) => {
  await knex('entities').del();
  await knex.raw('ALTER SEQUENCE entities_id_seq RESTART WITH 1');
  return knex('entities').insert([
    {
      name: 'Madruga',
      description: 'Farmer',
      entity_type_id: 1,
      address: 'Chaves village, 72',
      address_complement: '',
      city: 'Tangamandápio',
      region: 'Central',
      country_code: 'BR',
      post_code: '12345678',
      longitude: '-14.197362',
      latitude: '-47.590000',
    },
    {
      name: 'Florestinha',
      description: 'Farmer',
      entity_type_id: 2,
      address: 'Vale Verde',
      address_complement: '',
      city: 'Alto Paraíso de Goiás',
      region: 'Goiás',
      country_code: 'BR',
      post_code: '12345678',
      longitude: '-14.197362',
      latitude: '-47.590000',
    },
  ]);
};
