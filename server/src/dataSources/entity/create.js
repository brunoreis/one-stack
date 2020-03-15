export default ({ db, tableName }) => async ({
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
  const result = await db(tableName).insert({
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
  }).returning(
    [
      'id',
      'name',
      'description',
      'entity_type_id as entityTypeId',
      'address',
      'address_complement as addressComplement',
      'city',
      'region',
      'country_code as countryCode',
      'post_code as postCode',
      'longitude',
      'latitude',
    ],
  );
  return result[0];
};
