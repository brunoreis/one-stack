export default ({ db, tableName }) => async ({
  id,
  name,
  description,
  entityTypeId,
  address,
  addressComplement,
  city,
  region,
  countryCode,
  postCode,
  longitude,
  latitude,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      name,
      description,
      entity_type_id: entityTypeId,
      address,
      address_complement: addressComplement,
      city,
      region,
      country_code: countryCode,
      post_code: postCode,
      longitude,
      latitude,
    })
    .returning([
      'id',
      'name',
      'description',
      'entityTypeId',
      'address',
      'addressComplement',
      'city',
      'region',
      'countryCode',
      'postCode',
      'longitude',
      'latitude',
    ]);
  return result[0];
};
